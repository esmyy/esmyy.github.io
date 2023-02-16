# CommonJS

[CommonJS](https://nodejs.org/docs/latest-v16.x/api/modules.html) 规范主要用于服务器端模块化代码组织

| 名称     | 适用侧       | 关键变量                                 |
| -------- | ------------ | ---------------------------------------- |
| CommonJS | Server(Node) | module, module.exports, require, exports |

CommonJS 的几个模块相关的标识符，并不是 ECMAScript 规范里面的关键字

```js
console.log(typeof module); // object
console.log(typeof module.exports); // object
console.log(typeof exports); // object
console.log(typeof require); // function
```

这几个关键字，本质都是对象，对象无非就是方法，属性这些内容。把握这个本质，对于理解有比较大的帮助。

## 环境说明

| 环境    | 说明     |
| ------- | -------- |
| Node.js | v16.19.0 |

## 基本用法

在 CommonJS 中，每个文件是一个单独的模块，可以有自己独立的内容，使用 require 导入其他模块，使用 module.exports 导出自身的内容。
如下，定义了一个 main --> a --> b 的引用关系

```js
// a.js
require("./b");
module.exports = {
  name: "a",
};

// b.js
module.exports = {
  name: "b",
};

// main.js
const a = require("./a");
module.exports = {
  name: "main",
};
```

## 包装函数

在模块代码执行之前，Node.js 会对模块做一个包装，包装结构像下面这样

```js
/**
 * script: 每个模块的内容
 */
function wrapper(script) {
  const wrapperArr = [
    "(function (exports, require, module, __filename, __dirname) { ",
    "\n});",
  ];
  return wrapperArr[0] + script + wrapperArr[1];
}
```

对于每一个模块，都可以看成是被这样的一个函数包装，暂时理解为 eval 执行就可以。

```js
function run() {
  // ...exports 等的定义或计算
  eval(wrapper(script));
}
```

通过传递与当前模块相关的参数值，每个模块中都可以了解到自身的 `__filename`, `__dirname` 信息，可以通过 require, exports 方便地导入与导出。

## module

创建一个 `a.js`

```js title="a.js"
module.exports = {
  name: "a",
};
```

定义一个 `main.js` 引用 `a.js`

```js title="main.js"
const a = require("./a");
console.log(module);
```

### 对象结构

module 就是一个对象，打印结果如下

```js
{
  // 定义自身位置
  id: '.',
  path: '/Users/esmyy/demo',
  filename: '/Users/esmyy/demo/main.js',
  // 加载状态标记
  loaded: false,
  // 导出对象
  exports: {},
  // 记录了导入的模块
  children: [
    {
      id: '/Users/esmyy/demo/a.js',
      path: '/Users/esmyy/demo',
      exports: {
        name: 'a'
      },
      filename: '/Users/esmyy/demo/a.js',
      loaded: true,
      children: [],
      paths: [
        '/Users/esmyy/demo/node_modules',
        '/Users/esmyy/node_modules',
        '/Users/node_modules',
        '/node_modules'
      ]
    }
  ],
  // 模块查找路径
  paths: [
    '/Users/esmyy/demo/node_modules',
    '/Users/esmyy/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
```

module 对象清晰简洁地描述了模块的内容，每个模块的 module 变量都是结构一致的。可以看到 children 的结构和 module 一致，并且通过 children 维护了模块间的引用关系。

### Module

每个模块都是一个 module 对象，module 由 Module 构造函数实例化而来。

```js title="lib/internal/modules/cjs/loader.js 文件中 Module 定义"
function Module(id = "", parent) {
  this.id = id;

  // 可以看到 path 其实是目录路径
  this.path = path.dirname(id);

  // 默认的 exports 是 {}，所以如果
  setOwnProperty(this, "exports", {});
  moduleParentCache.set(this, parent);
  updateChildren(parent, this, false);
  this.filename = null;
  this.loaded = false;
  this.children = [];
}
```

这里关注两个属性

- exports：可以看到默认值是空对象
- loaded：用来标记模块是否已经加载，在缓存，循环依赖等问题上发挥重要作用。

通过 Module 和 module，模块结构，模块之间的关系很清晰。

## require

`require` 使用方式

```js
require(id);
```

常用的导入

```js
// 内置模块
const fs = require("fs");

// npm 包
const lodash = require("lodash");

// 项目内其他模块
const utils = require("./utils");
```

这里值得一说的就是 npm 包的引用，每个模块描述结构里面的 `paths` 数组，就是用来查找这些包的。

```ts
interface Require {
  (id: string): any;
  resolve: RequireResolve; // 根据 module.paths 找到 require 的模块，返回模块路径或者抛出”模块不存在“错误
  cache: Dict<NodeModule>; // 模块缓存
  /**
   * @deprecated
   */
  extensions: RequireExtensions;
  main: Module | undefined; // 程序入口文件，node demo.js 就是 demo.js
}
```

### 对象结构

定义在 `node/lib/internal/modules/cjs` 文件中

```js
// a.js
require("./b");
module.exports = {
  name: "a",
};

// b.js
module.exports = {
  name: "b",
};

// main.js
const a = require("./a");
```

require 函数如下

```js
[Function: require] {
  // 就是根据 module.paths 去找到 require 的模块，返回模块路径或者抛出”模块不存在“错误
  resolve: [Function: resolve] { paths: [Function: paths] },
  // 程序入口文件，node demo.js 就是 demo.js
  main: Module {
    id: '.',
    path: '/Users/fengpeng/demo',
    exports: {},
    filename: '/Users/fengpeng/demo/demo.js',
    loaded: false,
    children: [ [Module] ],
    paths: [
      '/Users/fengpeng/demo/node_modules',
      '/Users/fengpeng/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  // Deprecated
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  // 入口文件及已经导入的模块缓存
  cache: [Object: null prototype] {
    '/Users/fengpeng/demo/demo.js': Module {
      id: '.',
      path: '/Users/fengpeng/demo',
      exports: {},
      filename: '/Users/fengpeng/demo/demo.js',
      loaded: false,
      children: [Array],
      paths: [Array]
    },
    '/Users/fengpeng/demo/a.js': Module {
      id: '/Users/fengpeng/demo/a.js',
      path: '/Users/fengpeng/demo',
      exports: [Object],
      filename: '/Users/fengpeng/demo/a.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  }
}
```

从这里可以看到，与 module, exports 不同，require 虽然也作为参数传递到 wrapper 函数里面，但它并没有 id 之类的标记，它的域并不是每个模块。
cache 属性存储了

```js
console.log(require.main === require.cache[require.main.filename]); // true
```

没有难以理解的内容，各属性和其作用也很容易对应上。

## 源码概览

module 和 require 的结构都比较简单，并没有难以理解的内容。但做一次深入一些的归纳，对于这些小模块，我还是要快速看一下源码。
源码位于 `node/lib/internal/modules/cjs`

```js title="node/lib/internal/modules/cjs"
// Loads a module at the given file path. Returns that module's
// `exports` property.
Module.prototype.require = function (id) {
  validateString(id, "id");
  if (id === "") {
    throw new ERR_INVALID_ARG_VALUE("id", id, "must be a non-empty string");
  }
  requireDepth++;
  try {
    return Module._load(id, this, /* isMain */ false);
  } finally {
    requireDepth--;
  }
};
```

require 对象里面需要关注的就是 require.cache，这是一个对象，保存了执行过程中导入的所有**非 built-in**模块。

多次 require 的时候，发现已经有了，就直接 return 了，这就是所谓的多次导入只执行一次。

## require vs module.require

## 循环引用问题解决

## 参考

理解 CommonJS 模块，我觉得有必要看一下官方的介绍 —— [Node.js Modules](https://nodejs.org/docs/latest-v16.x/api/modules.html)
