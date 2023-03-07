# plugin

Webpack 本身是一个事件流插件系统，在工作流程中的两个核心内容是 loader 和 plugin，loader 更多地专注于”转换“，语法的转换，文件转换为有效的模块等，而 loader 之外的事情，都由 plugin 来做，如创建目录，chunk 拆分等。

## 基本结构

写插件时，了解 compiler 和 compilation 是必须的，这两个核心对象都继承自 Tapable，都有自身的一些 hooks 定义。插件都是基于 compiler.hooks，基本格式如下

```js
class TestPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap("TestPlugin", (compilation, callback) => {
      console.log("哈哈哈"); //
    });
  }
}

module.exports = TestPlugin;
```

插件导出一个 class/构造函数，apply 方法接收 compiler 参数，在插件内部订阅某个 compiler 事件，然后添加一个 callback。 callback 参数不是统一的，不同的事件可能有不同的参数，可参考 [Compiler Hooks](https://webpack.js.org/api/compiler-hooks/)(提示，hooks 展示顺序与执行顺序一致，可通过此列表快速了解 Webpack 流程)。

## 如何使用

插件是用来订阅事件的，无法脱离 compiler 而存在，没有像 loader 的 loader-runner 那样的独立运行环境，需要在 webpack.config.js 使用

```js
const path = require("path");
const TestPlugin = require("./test-plugin.js");

module.exports = {
  mode: "development",
  entry: {
    app: "./app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  plugins: [
    new TestPlugin({
      mode: "development",
    }),
  ],
};
```

插件将在 compiler 初始化的时候执行。

#
