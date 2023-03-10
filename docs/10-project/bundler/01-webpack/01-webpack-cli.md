# webpack-cli

> Webpack CLI provides the interface of options webpack uses in its configuration file. The CLI options override options passed in the configuration file.
> The CLI provides a rich set of commands that helps you develop your application faster.

| pkg         | version |
| ----------- | ------- |
| webpack-cli | 4.6.0   |

## 入口

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

webpack-cli 是做命令分析，参数处理，负责处理一堆杂事，
确保交给 webpack 函数一个包含必要属性的配置对象，最终还是调用 webpack 函数，webpack 函数负责具体的编译过程。

## 示例

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

像 entry,output 这些属性是是必须的。对于 WebpackCLI，它是做参数处理，最终确保传递给 webpack 一个包含必要属性的配置对象。

## 小结

webpack-cli 是编译前的 options 处理，然后调用 webpack 函数。
两者不过是负责的环节分工而已，就像是大函数拆分一样。

| 名称         | 作用                 |
| ------------ | -------------------- |
| webpack 命令 | 间接调用 webpack-cli |
| webpack-cli  | options 处理         |
| webpack 函数 | 编译                 |
