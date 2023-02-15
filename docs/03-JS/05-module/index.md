# 模块化

| 名称       | 适用侧        | 关键字/关键属性         |
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
