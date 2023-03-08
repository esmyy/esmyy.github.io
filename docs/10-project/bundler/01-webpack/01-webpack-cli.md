# webpack-cli

> Webpack CLI provides the interface of options webpack uses in its configuration file. The CLI options override options passed in the configuration file.
> The CLI provides a rich set of commands that helps you develop your application faster.

如果使用 nvm 管理 Node，熟悉 nvm 的话，可以知道 webpack 命令在 node 的 bin 目录下，对应源码中的 `webpack/bin/webpack.js`

```js title="webpack/bin/webpack.js"
#!/usr/bin/env node

// ...

if (!cli.installed) {
  // 没有安装 webpack-cli 的话作提示，引导安装
} else {
  // 导入 webpack-cli
  require(path.resolve(path.dirname(pkgPath), pkg.bin[cli.binName]));
}
```

这个 webpack 执行文件，就是做 webpack-cli 是否安装的检查，引导安装，目的是调用 webpack-cli

```js title="wepback-cli/bin/cli.js"
#!/usr/bin/env node

const importLocal = require("import-local");
const runCLI = require("../lib/bootstrap");
const utils = require("../lib/utils");

process.title = "webpack";

runCLI(process.argv, originalModuleCompile);
```

其中 bootstrap 是 WebpackCLI 的实例化，

```js title="wepback-cli/lib/bootstrap.js"
const WebpackCLI = require("./webpack-cli");
const utils = require("./utils");

const runCLI = async (args, originalModuleCompile) => {
  const cli = new WebpackCLI();
  // ...
  await cli.run(args);
};

module.exports = runCLI;
```

cli.run 函数大概过程如下

```js
class WebpackCLI {
  // ...
  async run(args, parseOptions) {
    // ...
    // 1. 参数处理
    await this.program.parseAsync(args, parseOptions);

    // 2. 一些命令提前处理，不需要执行编译过程的命令不需要调用 webpack 函数
    if (isHelpOption || isHelpCommandSyntax) {
      // ...help内容输出
      process.exit(0);
    }
    if (isHelpCommandSyntax) {
      // ...版本输出
      process.exit(0);
    }

    // 3. 加载webpack
    this.webpack = await this.loadWebpack();

    // 4. 加载webpack配置...
    let config = await this.loadConfig(options);
    config = await this.buildConfig(config, options);

    // 5. webpack 执行
    this.webpack(config.options, callback);
  }
}
```

以一个简单的配置为例

```js title="webpack.config.js"
module.exports = {
  target: "web",
  // mode: 'production',
  mode: "development",
  entry: {
    app: "./app.js",
  },
  output: {
    filename: "[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  devtool: "eval",
};
```

最终传递给 webpack 的参数`config.options`如下

```js
{
  target: 'web',
  mode: 'development',
  entry: { app: './app.js' },
  output: {
    filename: '[hash].js',
    path: '/Users/fengpeng/esmyy/daily-coding/Engineering/webpack-demo/dist',
    publicPath: ''
  },
  devtool: 'eval',
  stats: { preset: 'normal', colors: true },
  plugins: [ CLIPlugin { options: [Object] } ]
}
```

webpack-cli 是做命令分析，参数处理，负责处理一堆杂事，最终确保交给 webpack 函数一个标准的配置对象，webpack 函数负责具体的编译过程。

:::info 🤔
webpack 命令是间接调用 webpack-cli， webpack-cli 是编译前的 options 处理，最终需要都是调用 webpack 函数。

webpack 命令不是必须的，可以直接调用 webpack-cli，webpack-cli 也不是必须的，可以直接调用 webpack 函数。
:::

<!-- 也就是说，当我们执行 webpack 命令的时候，其实最终是调用 WebpackCLI 实例的 run 方法。

```mermaid
  flowchart LR
  A(webpack/bin/webpack.js)
``` -->

<!--
Webpack 实现中的两个核心对象是

- compiler: 负责整体调度
- compilation: 负责一次具体的编译过程，每次编译生成新的 compilation 对象
  在流程上

两个核心模块是

- loader: 负责语法转换，文件转换等事情
- plugin: 负责其他的事情

创建编译器：事件的定义，参数处理转化为对应的 plugin，plugin 去订阅一些事件
具体编译：创建 compilation 负责具体的编译过程，调用 loader-runner 对文件进行处 -->
