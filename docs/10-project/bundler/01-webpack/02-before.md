# 准备工作

本文先简单介绍一下 webpack 的事件流机制，以及 compiler 和 compilation 这两个核心对象。

## 事件流机制

webpack 的编译过程是一个基于 [Tapable](https://github.com/webpack/tapable) 的事件流，简单来说，就是在 webpack 处理的每个关键节点，都定义了相应的事件，在使用时，可以通过 Tapable 提前注册事件处理函数，在处理到对应的节点时，就会调用已经注册的处理函数。

```mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'base',  'gitGraph': {'mainBranchName': 'webpack'}} }%%
gitGraph
  commit id:"开始编译"
  commit id:"    "
  commit id:"      "
  commit id:"......"
  commit id:" "
  commit id:"  "
  commit id:"编译结束"
```

Tapable 类似于 EventEmitter，或者更简单的 [mitt](https://github.com/developit/mitt)，是一个事件发布/订阅的工具。示例如下

```js
const { SyncHook } = require("tapable");

// 定义 hooks
class Car {
  constructor() {
    this.hooks = {
      brake: new SyncHook(),
    };
  }
}

const myCar = new Car();

// 注册钩子函数
myCar.hooks.brake.tap("test", () => console.log("test"));

// 触发事件
myCar.hooks.brake.call();
```

特别的是，webpack 中注册处理函数的方式是插件，因此 webpack 中的插件可以理解为事件处理函数。

:::info 🤔
首先有这样一个印象，webpack 函数处理文件时，从输入到输出的执行过程，就是一个事件流，在各个节点抛出事件，执行通过插件注册的处理函数。
:::

## 两个核心对象

| 对象        | 功能                   |
| ----------- | ---------------------- |
| compiler    | 整体调度，配置信息保存 |
| compilation | 一次具体的编译过程     |

compiler 保存 webpack.config.js 的配置转换后的信息，也就是”该怎样去构建“的描述，负责整体的调度。compilation 负责一次具体的编译过程，当文件变化需要重新编译时，会生成一个新的 compilation 对象，负责这一次新的构建。

```mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'base',  'gitGraph': {'showCommitLabel': false, 'mainBranchName': 'compiler'}} }%%
  gitGraph
  commit
  commit
  commit id:"开始编译"
  branch compilation
  checkout compilation
  commit
  commit
  checkout compiler
  merge compilation
  commit
  commit
```
