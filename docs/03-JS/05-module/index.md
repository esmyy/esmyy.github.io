# 模块化

| 名称       | 适用侧        | 关键字/关键属性         |
| ---------- | ------------- | ----------------------- |
| CommonJS   | Server(Node)  | module.exports, require |
| AMD        | Client        | define/require          |
| UMD        | Server/Client | -                       |
| ES6 Module | Server/Client | export/import           |
| CMD        |               |                         |

在模块化方案之前，要实现类似的功能，可以使用 IIFE。
如今 CommonJS 和 ES6 Module 等模块化方案，让局部逻辑更加独立，代码结构更加清晰，实现更加统一和方便。同时结合 Webpack 等的 Tree Shaking 能力，让我们能够更灵活有效地组织和输出。

## 环境说明

| 环境    | 说明     |
| ------- | -------- |
| Node.js | v16.19.0 |

## Webpack 中的模块加载原理

JS 中的内容，在 loader 转换之后，其实还是没有转换掉”import“ 或者 ”export“ 之类的内容。在 compilation 的 seal 才会对各个模块中的导入导出相关的关键字进行替换，替换为 webpack_require 相关的属性。根据模块的不同，输出的引导函数中，会定义类似于 webpack_require.r，webpack_require.n 等这样的工具函数用以获取模块，在不同类型的模块化规范间做转换。

<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules -->

<!-- JS的加载过程 https://v8.dev/features/modules#mjs -->
<!-- importmap. -->

<!-- v8 https://v8.dev/docs -->
<!-- https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/ -->

<!-- 依赖管理 -->

<!-- 查看 NodeJS的源码 https://github.com/nodejs/node/blob/main/lib/internal/modules/cjs/loader.js -->
