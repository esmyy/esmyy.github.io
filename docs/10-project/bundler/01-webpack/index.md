# webpack

> webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

相关源码说明主要基于

| pkg         | version          |
| ----------- | ---------------- |
| webpack     | v5.0.0-beta.12。 |
| webpack-cli | 4.6.0            |

webpack 的核心组成如下

| 组成    | 说明                         |
| ------- | ---------------------------- |
| Entry   | 编译入口                     |
| Output  | 输出                         |
| Loaders | 特定类型文件转换处理         |
| Plugins | 编译过程中的任务处理，可插拔 |

webpack 从 Entry 开始分析，收集依赖，生成依赖地图，通过 Loaders 转换各个模块。在整个处理过程中，在每个关键节点，根据需要应用不同的 Plugin，用于处理 Loader 之外的所有其他任务。

## 调试方法

在 vscode 中添加一个 launch 配置

```js
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "启动webpack调试程序",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/debug/start.js"
    }
  ]
}

```

添加 program 文件地址，示例如下

```js
const webpack = require("../lib/index.js");
const config = require("./webpack.config");
const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.log(stats);
  }
});
```

这样就可以直接在 vscode 中添加断点，使用源码调试，vscode 的调试功能是很方便的。
