# 模块化

常用的模块化方案

| 名称       | 适用侧        | 关键字                  |
| ---------- | ------------- | ----------------------- |
| CommonJS   | Server(Node)  | module.exports, require |
| AMD        | Client        | define/require          |
| UMD        | Server/Client | -                       |
| ES6 Module | Server/Client | export/import           |

还有 CMD 什么的，现在主要是了解 CommonJS, UMD, ES Module 就好了。

在早期，使用 namespace，使用 IIFE 等来保存局部的变量，如今 ES 模块化的方案，让局部逻辑更加独立，代码结构更加清晰，实现更加统一和方便。同时结合 Webpack 等的 Tree Shaking 能力，让我们能够更灵活地组织输出内容。

## CommonJS

和 ES6 的 `import`, `export` 不一样，module 和 require 并不是 ECMAScript 规范里面的关键字，这俩就是对象。
对象无非就是方法，属性这些内容，明确 module 和 require 的对象的本质之后，理解 CommonJS 就容易多了。

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
  // require 的模块
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

module 就是一个对象，paths 指定了去哪里找模块，而 children 记录了导入的模块，exports 是要导出的内容。

### require

```js title="demo.js"
const a = require("./a");
console.log(require);
```

require 函数如下

```js
[Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
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
