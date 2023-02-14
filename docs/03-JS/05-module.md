# 模块化

| 名称       | 适用侧        | 关键字                  |
| ---------- | ------------- | ----------------------- |
| CommonJS   | Server(Node)  | module.exports, require |
| AMD        | Client        | define/require          |
| UMD        | Server/Client | -                       |
| ES6 Module | Server/Client | export/import           |

<!-- TODO Server 端的 ES6 Module -->

还有 CMD 什么的，现在主要是了解 CommonJS, UMD, ES Module 就好了。

在早期，使用 namespace，使用 IIFE 等来保存局部的变量，如今 ES 模块化的方案，让局部逻辑更加独立，代码结构更加清晰，实现更加统一和方便。同时结合 Webpack 等的 Tree Shaking 能力，让我们能够更灵活地组织输出内容。

现在主要是 CommonJS 和 ES6 Module 两种，这两种类型都在 node 源码里有相应的实现。

以下说明基于 Node.js v16.19.0

## CommonJS

module 和 require 并不是 ECMAScript 规范里面的关键字、根据使用方式可知 module 是一个对象，而 require 是一个函数

```js
console.log(typeof module); // object
console.log(typeof require); // function
```

明确 module 和 require 的对象的本质之后，理解 CommonJS 就容易多了，对象无非就是方法，属性这些内容。

### require

require 的结构如下

```ts
interface Require {
  (id: string): any;
  resolve: RequireResolve; // 根据 module.paths 找到 require 的模块，返回模块路径或者抛出”模块不存在“错误
  cache: Dict<NodeModule>; // 入口文件及已经导入的模块缓存
  /**
   * @deprecated
   */
  extensions: RequireExtensions;
  main: Module | undefined; // 程序入口文件，node demo.js 就是 demo.js
}
```

定义在 `node/lib/internal/modules/cjs` 文件中

```js title="demo.js"
const a = require("./a");
console.log(require);
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

没有难以理解的内容，各属性和其作用也很容易对应上。

### module

创建一个 `a.js`

```js title="a.js"
module.exports = {
  name: "esmyy",
};
```

定义一个 `demo.js` 引用 `a.js`

```js title="demo.js"
const a = require("./a");
console.log(module);
```

打印结果如下

```js
Module {
  id: '.',
  path: '/Users/esmyy/demo',
  filename: '/Users/esmyy/demo/demo.js',
  loaded: false,
  // 导出对象
  exports: {},
  // 记录了导入的模块
  children: [
    Module {
      id: '/Users/esmyy/demo/a.js',
      path: '/Users/esmyy/demo',
      exports: {
        name: 'esmyy'
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

属性比较少，没有复杂的内容，比较特别的是这个 loaded 属性，从这里看它的作用不是很明显，其实是用来标记是否已经加载，解决循环依赖的问题。

介绍一下 Module 结构，这是 CommonJS 中对于每个模块的描述，用 TS 描述如下

```ts
interface Module {
  id: string;
  path: string;
  exports: any;
  filename: string;
  loaded: Boolean;
  children: Module[];
  paths: string[];
}
```

### 源码概览

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

`Module._load` 简化如下

```js title="Module._load"
// Check the cache for the requested file.
// 1. If a module already exists in the cache: return its exports object.
// 2. If the module is native: call
//    `BuiltinModule.prototype.compileForPublicLoader()` and return the exports.
// 3. Otherwise, create a new module for the file and save it to the cache.
//    Then have it load  the file contents before returning its exports
//    object.
Module._load = function (request, parent, isMain) {
  // 1. 计算路径
  const filename = relativeResolveCache[relResolveCacheIdentifier];

  // 2. 判断是否缓存，从缓存加载
  const cachedModule = Module._cache[filename];
  if (cachedModule) {
    return cachedModule.exports;
  }

  // 3. 判断内置模块并加载内置模块
  if (StringPrototypeStartsWith(request, "node:")) {
    // ...
    const id = StringPrototypeSlice(request, 5);
    const module = loadBuiltinModule(id, request);
    return module.exports;
  }

  // 这个功能是什么？
  const filename = Module._resolveFilename(request, parent, isMain);
  const cachedModule = Module._cache[filename];
  if (cachedModule !== undefined) {
    updateChildren(parent, cachedModule, true);
    if (!cachedModule.loaded) {
      const parseCachedModule = cjsParseCache.get(cachedModule);
      // 为什么 loaded 还要继续？
      if (!parseCachedModule || parseCachedModule.loaded)
        return getExportsForCircularRequire(cachedModule);
      parseCachedModule.loaded = true;
    } else {
      return cachedModule.exports;
    }
  }

  const mod = loadBuiltinModule(filename, request);
  if (
    mod?.canBeRequiredByUsers &&
    BuiltinModule.canBeRequiredWithoutScheme(filename)
  ) {
    return mod.exports;
  }

  // Don't call updateChildren(), Module constructor already does.
  const module = cachedModule || new Module(filename, parent);

  if (isMain) {
    process.mainModule = module;
    module.id = ".";
  }

  reportModuleToWatchMode(filename);

  Module._cache[filename] = module;
  if (parent !== undefined) {
    relativeResolveCache[relResolveCacheIdentifier] = filename;
  }

  let threw = true;
  try {
    module.load(filename);
    threw = false;
  } finally {
    if (threw) {
      delete Module._cache[filename];
      if (parent !== undefined) {
        delete relativeResolveCache[relResolveCacheIdentifier];
        const children = parent?.children;
        if (ArrayIsArray(children)) {
          const index = ArrayPrototypeIndexOf(children, module);
          if (index !== -1) {
            ArrayPrototypeSplice(children, index, 1);
          }
        }
      }
    } else if (
      module.exports &&
      !isProxy(module.exports) &&
      ObjectGetPrototypeOf(module.exports) ===
        CircularRequirePrototypeWarningProxy
    ) {
      ObjectSetPrototypeOf(module.exports, ObjectPrototype);
    }
  }

  return module.exports;
};
```

require 对象里面需要关注的就是 require.cache，这是一个对象，保存了执行过程中导入的所有**非 built-in**模块。

多次 require 的时候，发现已经有了，就直接 return 了，这就是所谓的多次导入只执行一次。

### require vs module.require

## ES6 Module

## Webpack 中的模块加载原理

JS 中的内容，在 loader 转换之后，其实还是没有转换掉”import“ 或者 ”export“ 之类的内容。在 compilation 的 seal 才会对各个模块中的导入导出相关的关键字进行替换，替换为 webpack_require 相关的属性。根据模块的不同，输出的引导函数中，会定义类似于 webpack_require.r，webpack_require.n 等这样的工具函数用以获取模块，在不同类型的模块化规范间做转换。

<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules -->

<!-- JS的加载过程 https://v8.dev/features/modules#mjs -->
<!-- importmap. -->

<!-- v8 https://v8.dev/docs -->
<!-- https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/ -->

<!-- 依赖管理 -->

<!-- 查看 NodeJS的源码 https://github.com/nodejs/node/blob/main/lib/internal/modules/cjs/loader.js -->

### Module

首先介绍一个 Module 结构，这是 CommonJS 中对于每个模块的描述

```ts
interface Module {
  id: string;
  path: string;
  exports: any;
  filename: string;
  loaded: Boolean;
  children: Module[];
  paths: string[];
}
```

## 参考

[Node.js 官网 Modules: CommonJS modules](https://nodejs.org/docs/latest-v16.x/api/modules.html#modules-commonjs-modules)

<!-- node:fs 和 fs 有什么区别 -->

<!-- 写文章的能力还是很需要提高呀，差太多了，时常回来看看自己写的内容，就会发现写得很多问题 -->
