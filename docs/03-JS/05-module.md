# 模块化

常用的模块化方案

| 名称       | 适用侧          | 关键字                       |
| ---------- | --------------- | ---------------------------- |
| CommonJS   | Server(Node.js) | module.export, require       |
| AMD        | Client          | define/require               |
| UMD        | Server/Client   | -                            |
| ES6 Module | Client          | export/import,export default |

还有 CMD 什么的，现在主要是了解 CommonJS, UMD, ES Module 就好了。

在早期，使用 namespace，使用 IIFE 等来保存局部的变量，如今 ES 模块化的方案，让局部逻辑更加独立，代码结构更加清晰，实现更加统一和方便。同时结合 Webpack 等的 Tree Shaking 能力，让我们能够更灵活地组织输出内容。

## Webpack 中的模块加载原理

JS 中的内容，在 loader 转换之后，其实还是没有转换掉”import“ 或者 ”export“ 之类的内容。在 compilation 的 seal 才会对各个模块中的导入导出相关的关键字进行替换，替换为 webpack_require 相关的属性。根据模块的不同，输出的引导函数中，会定义类似于 webpack_require.r，webpack_require.n 等这样的工具函数用以获取模块，在不同类型的模块化规范间做转换。
