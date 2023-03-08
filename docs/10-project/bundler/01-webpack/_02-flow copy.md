# 工作流程

Webpack 的工作流程可以理解为一个事件流机制，每一个事件上可以注册事件处理函数，注册处理函数的方式是插件。

Webpack 的事件流基于 [Tapable](https://github.com/webpack/tapable) 实现。Tapable 类似于 EventEmitter，或者更简单的 [mitt](https://github.com/developit/mitt)，是一个事件发布/订阅的工具。一个简单示例如下

```js
const { SyncHook } = require("tapable");

// 定义 hooks
class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(["newSpeed"]),
      brake: new SyncHook(),
      calculateRoutes: new AsyncParallelHook([
        "source",
        "target",
        "routesList",
      ]),
    };
  }
}

const myCar = new Car();

// 注册钩子函数
myCar.hooks.brake.tap("test", () => console.log("test"));

// 触发事件
myCar.hooks.brake.call();
```

提供了方法进行事件订阅，事件发布，通过定义 hooks 属性，Car 的实例具备了消息发布/订阅的能力。

本文跳过入口查找的过程，直接从 Webpack 的实例化开始。如果把 Webpack 当做一个类似于 Vue 这样的构造函数，大概可以认为

```js
compiler = new Webpack(options);
```

虽不中，亦不远矣。compiler 是 Webpack 中的两个核心对象之一，负责整个构建过程的调度和状态维护。另一个核心对象是 compilation，表示编译，负责一次具体的编译过程。 如果用 Node 服务做个对比，compiler 就像 node process，而 compilation 只是一次请求的处理过程，是 ctx。Webpack 的工作流程，就围绕着这两个对象展开

### 1. create compiler

webpack 定义在 lib/webpack.js

```js
const webpack = (options, callback) => {
  let compiler = createCompiler(options);
  // ...
  return compiler;
};
```

createCompiler

```js
const createCompiler = (options) => {
  // 设置默认值，比如说如果没配置 options.target，就设置 options.target 为 web
  options = new WebpackOptionsDefaulter().process(options);

  // 初始化 compiler
  const compiler = new Compiler(options.context);
  compiler.options = options;

  // 内置插件实例化并调用
  new NodeEnvironmentPlugin({
    infrastructureLogging: options.infrastructureLogging,
  }).apply(compiler);

  // plugins 调用
  if (Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
      if (typeof plugin === "function") {
        plugin.call(compiler, compiler);
      } else {
        plugin.apply(compiler);
      }
    }
  }

  // 发布环境状态事件
  compiler.hooks.environment.call();
  compiler.hooks.afterEnvironment.call();

  // 根据 options 设置插件
  compiler.options = new WebpackOptionsApply().process(options, compiler);
  return compiler;
};
```

这里的内容很多，已经在代码中做了简要注释。理解 hooks 和 plugin 相关的初始化，对于理解 Webpack 工作流程至关重要。

- 实例化 Compiler
- 执行 plugins
- 发布环境事件
- 根据 options 设置插件

逐步来看其中的内容

#### 实例化 Compiler

```js
compiler = new Compiler(options.context);
```

来看一下 Compiler 的定义

```js
const {
  SyncHook,
  SyncBailHook,
  AsyncParallelHook,
  AsyncSeriesHook,
} = require("tapable");

class Compiler {
  /**
   * @param {string} context the compilation path
   */
  constructor(context) {
    this.hooks = Object.freeze({
      shouldEmit: new SyncBailHook(["compilation"]),
      done: new AsyncSeriesHook(["stats"]),
      /** @type {SyncHook<[Stats]>} */
      afterDone: new SyncHook(["stats"]),
      /** @type {AsyncSeriesHook<[]>} */
      additionalPass: new AsyncSeriesHook([]),
      /** @type {AsyncSeriesHook<[Compiler]>} */
      beforeRun: new AsyncSeriesHook(["compiler"]),
      /** @type {AsyncSeriesHook<[Compiler]>} */
      run: new AsyncSeriesHook(["compiler"]),
      /** @type {AsyncSeriesHook<[Compilation]>} */
      emit: new AsyncSeriesHook(["compilation"]),
      /** @type {AsyncSeriesHook<[string, AssetEmittedInfo]>} */
      assetEmitted: new AsyncSeriesHook(["file", "info"]),
      /** @type {AsyncSeriesHook<[Compilation]>} */
      afterEmit: new AsyncSeriesHook(["compilation"]),
      // ...省略其他 hooks 定义
    });

    // ...一堆属性初始化
  }

  watch(watchOptions, handler) {
    // ...
  }

  run(callback) {
    // ...
  }

  // ...

  compile(callback) {
    // ...
  }

  close(callback) {
    this.cache.shutdown(callback);
  }
}
```

构造函数中 `context` 参数是编译路径，比如`/abs/path/to/webpack-demo`。 compiler.hooks 使用 tapable 导出的工具函数进行了众多事件的定义，由此 compiler 具备了事件发布/订阅的能力。

总之 `new Compiler`，就是使用 tapable 给 compiler 实例定义了诸多编译器执行相关的事件。

#### 执行 plugins

👨‍💻‍ Go On... 👨‍💻‍ 下面这两块内容，都是插件的调用

```js
const createCompiler = (options) => {
  // ...
  new NodeEnvironmentPlugin({
    infrastructureLogging: options.infrastructureLogging,
  }).apply(compiler);

  if (Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
      if (typeof plugin === "function") {
        plugin.call(compiler, compiler);
      } else {
        plugin.apply(compiler);
      }
    }
  }

  // ...
};
```

插件的调用其实就是注册事件处理函数，不管是 NodeEnvironmentPlugin 还是 options.plugins 里面传入的插件，都是一样的。 以这里的 NodeEnvironmentPlugin 为例

```js
class NodeEnvironmentPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    // ...
    compiler.hooks.beforeRun.tap("NodeEnvironmentPlugin", (compiler) => {
      if (compiler.inputFileSystem === inputFileSystem) {
        inputFileSystem.purge();
      }
    });
  }
}
```

前面 new Compiler 定义了 beforeRun 事件，这里就是给 beforeRun 添加一个订阅函数而已。

#### 发布环境事件

👨‍💻‍ Go On... 👨‍💻‍ 在定义了事件，也添加了一些订阅事件之后，是内置的环境相关事件的发布，如下

```js
const createCompiler = (options) => {
  // ...发布环境状态相关的事件
  compiler.hooks.environment.call();
  compiler.hooks.afterEnvironment.call();

  // 根据options 设置插件
  compiler.options = new WebpackOptionsApply().process(options, compiler);
  return compiler;
};
```

#### 根据 options 设置插件

创建编译器的最后是根据传递的 options，或者说我们编写的 webpack.config.js 中的配置，去设置插件。如下

```js
const createCompiler = (options) => {
  compiler.options = new WebpackOptionsApply().process(options, compiler);
};
```

这是一个重要的初始化，它负责将 options 参数，转换为 Webpack 内部插件来处理，部分内容如下

```js
class WebpackOptionsApply extends OptionsApply {
  // ...
  process(options, compiler) {
    // ...
    new EntryOptionPlugin().apply(compiler); // 在这里对 entry 多种配置形式进行了统一处理转换
    compiler.hooks.entryOption.call(options.context, options.entry);
    // ...
    if (typeof options.mode !== "string") {
      const WarnNoModeSetPlugin = require("./WarnNoModeSetPlugin");
      new WarnNoModeSetPlugin().apply(compiler);
    }
    if (options.optimization.removeAvailableModules) {
      const RemoveParentModulesPlugin = require("./optimize/RemoveParentModulesPlugin");
      new RemoveParentModulesPlugin().apply(compiler);
    }
    if (options.optimization.removeEmptyChunks) {
      const RemoveEmptyChunksPlugin = require("./optimize/RemoveEmptyChunksPlugin");
      new RemoveEmptyChunksPlugin().apply(compiler);
    }
    // ...
    return options;
  }
}
```

以上只展示了原代码的一小部分内容。概括来说，这就是根据 options 中的参数配置，引入一个个内部提供的插件进行处理。基本上是下面这样的一个转换

```js
if (options.someplugin) {
  const Plugin = require('./relative/path/to/someplugin')；
  new Plugin().apply(compiler);
}
```

总结来说，整个 compiler 初始化的过程，都围绕着 hooks 和 plugins，定义事件，订阅事件。 options 配置和插件是有对应关系的，会将参数配置转换为 plugin 去处理。

### 2. run/watch

创建了 compiler 之后，就是开始编译了

```js
const webpack = (options, callback) => {
  // ...
  compiler = createCompiler(options);
  watch = options.watch;
  watchOptions = options.watchOptions || {};
  if (callback) {
    if (watch) {
      compiler.watch(watchOptions, callback);
    } else {
      compiler.run((err, stats) => {
        compiler.close((err2) => {
          callback(err || err2, stats);
        });
      });
    }
  }
  return compiler;
};
```

判断是否是 watch 模式执行 compiler.watch 或者 compiler.run，watch 模式是 dev 相关的，研究 run 即可

```js
class Compiler {
  /**
   * @param {string} context the compilation path
   */
  constructor(context) {
    // ...
  },
  run(callback) {
    // ...
    this.cache.endIdle(err => {
      if (err) return finalCallback(err);

      this.hooks.beforeRun.callAsync(this, err => {
        if (err) return finalCallback(err);

        this.hooks.run.callAsync(this, err => {
          if (err) return finalCallback(err);

          this.readRecords(err => {
            if (err) return finalCallback(err);

            this.compile(onCompiled);
          });
        });
      });
    });
  }
}
```

从上面看，依次触发 `beforeRun`，`run` 两个事件，最终调用 compile 函数，compile 表示一次编译。onCompiled 这个回调函数是编译完成之后执行的。

```js
compile(callback) {
  const params = this.newCompilationParams();
  this.hooks.beforeCompile.callAsync(params, err => {
    if (err) return callback(err);

    this.hooks.compile.call(params);

    const compilation = this.newCompilation(params);

    const logger = compilation.getLogger("webpack.Compiler");

    logger.time("make hook");
    this.hooks.make.callAsync(compilation, err => {
      logger.timeEnd("make hook");
      if (err) return callback(err);

      process.nextTick(() => {
        logger.time("finish compilation");
        compilation.finish(err => {
          logger.timeEnd("finish compilation");
          if (err) return callback(err);

          logger.time("seal compilation");
          compilation.seal(err => {
            logger.timeEnd("seal compilation");
            if (err) return callback(err);

            logger.time("afterCompile hook");
            this.hooks.afterCompile.callAsync(compilation, err => {
              logger.timeEnd("afterCompile hook");
              if (err) return callback(err);

              return callback(null, compilation);
            });
          });
        });
      });
    });
  });
}
```

以上依次触发了 beforeCompile, compile, make，而 hooks.make 即开始编译。 从调用 compiler.run 到 hooks.make，基本上都只是在做各个细分事件的触发，有点像 DOM 事件的捕获的过程，每个节点都通知一下，走过千山万水，套路万千，到了 make 跟前，最后大哄一声 —— 现在老子真的要开始了。

具体的编译由 compilation，compilation 是编译最核心的过程，比较复杂，作为一个单独的环节去分析。 总之在这里 make 完成之后，表示文件已经进行了一次编译，之后是调用 compilation.finish 和 compilation.seal 去做一些收尾工作。

### 3. compilation

compilation 负责一次具体编译过程。具体的模块编译调度，compilation 根据 entry，使用 loader 对模块进行编译，生成 bundle。

compiler.hooks.make 的触发是编译的发令枪，通过搜索 hooks.make.tap 找到对应的订阅函数

```js
grep -rn hooks.make.tap ./lib
```

得到

```js
./lib/AutomaticPrefetchPlugin.js:  compiler.hooks.make.tapAsync(
./lib/PrefetchPlugin.js:  compiler.hooks.make.tapAsync("PrefetchPlugin", (compilation, callback) => {
./lib/EntryPlugin.js:  compiler.hooks.make.tapAsync("EntryPlugin", (compilation, callback) => {
./lib/DynamicEntryPlugin.js:  compiler.hooks.make.tapAsync(
./lib/DllEntryPlugin.js:  compiler.hooks.make.tapAsync("DllEntryPlugin", (compilation, callback) => {
```

由此可以得知 make 具体做的事情，就在这几个地方注册的订阅函数里面。 我们研究 EntryPlugin.js(较早版本里面是 SingleEntryPlugin.js)，这个插件是用来处理配置的 entry，编译自然是从入口开始处理的

```js
const EntryDependency = require("./dependencies/EntryDependency");

class EntryPlugin {
  constructor(context, entry, name) {
    this.context = context;
    this.entry = entry;
    this.name = name;
  }

  apply(compiler) {
    // ...

    compiler.hooks.make.tapAsync("EntryPlugin", (compilation, callback) => {
      const { entry, name, context } = this;
      const dep = EntryPlugin.createDependency(entry, name); // 将在webpack.config.js 中的entry文件转换为一个描述对象
      compilation.addEntry(context, dep, name, (err) => {
        callback(err);
      });
    });
  }

  static createDependency(entry, name) {
    const dep = new EntryDependency(entry);
    dep.loc = { name };
    return dep;
  }
}
```

这里的 entry 已经是单个文件，是在 compiler 初始化过程中已经处理过的，通过 addEntry 开始编译具体文件

```js
addEntry(context, entry, name, callback) {
  this.hooks.addEntry.call(entry, name);

  let entriesArray = this.entryDependencies.get(name);
  if (entriesArray === undefined) {
    entriesArray = [];
    this.entryDependencies.set(name, entriesArray);
  }
  entriesArray.push(entry);

  this.addModuleChain(context, entry, (err, module) => {
    if (err) {
      this.hooks.failedEntry.call(entry, name, err);
      return callback(err);
    }
    this.hooks.succeedEntry.call(entry, name, module);

    return callback(null, module);
  });
}
```

以 entry 作为第一个模块开始构建，在 addModuleChain 的回调函数中触发了 succeedEntry 事件，这说明在回调执行时当前 entry 已经构建完成。

中间过程其实比较复杂，涉及到依赖的分类，NormalModule 和 ContextModule 不同构造方法等等，这些内容过细了。举最常见的例子来说，在模块构建过程中，会调用内置的 NormalModule 构造函数去生成模块实例，模块实例会被保存到 compilation.modules 数组里面，然后执行模块的 build 方法

```js
const { getContext, runLoaders } = require("loader-runner");

class NormalModule extends Module {
  // ...
  doBuild(options, compilation, resolver, fs, callback) {
    // ...
    runLoaders(
      {
        resource: this.resource,
        loaders: this.loaders,
        context: loaderContext,
        readResource: fs.readFile.bind(fs),
      },
      (err, result) => {
        // ...
      }
    );
  }

  build(options, compilation, resolver, fs, callback) {
    // ...

    return this.doBuild(options, compilation, resolver, fs, (err) => {
      // ...
      result = this.parser.parse(this._ast || this._source.source(), {
        current: this,
        module: this,
        compilation: compilation,
        options: options,
      });
      handleParseResult(result);
    });
  }
  // ...
}
```

在 doBuild 函数中，调用了 runLoaders 去运行 loader 对文件进行具体转换。假设有这样一个 app.js 作为 entry

```js
import "./style.less";
const AGE = 100;
```

loader 配置如下

```js
rules: [
  {
    test: /\.js/i,
    use: {
      loader: "babel-loader",
      options: {
        presets: [["@babel/preset-env", { targets: "defaults" }]],
      },
    },
  },
  {
    test: /\.less$/i,
    loader: ["style-loader", "css-loader", "less-loader"],
  },
];
```

那么在 runLoaders 返回的结果如下

```js
'import \'./style.less\';\nvar AGE = 100;';
```

`parser.parse` 是根据当前的 source，使用 acorn (opens new window)这个解析工具，去生成 AST，根据 AST 提取到这个模块的依赖项，然后继续递归执行模块的编译过程，直到所有的依赖都处理完成。最终整个依赖处理完成后，进入到模块的 seal 环节，seal 有以下几个步骤

- chunk 生成：在前面的步骤中，各模块实例保存在 compilation.modules 上，seal 根据 entry 生成 chunk，生成 chunk hash
- asset 生成：根据 chunk 生成 asset，在这一步，require 等引用被转换为使用内置的**webpack_require**引用

asset 和 chunk 的区别是什么？假设我使用 MiniCssExtractPlugin 提取了 css，那么编译结果如下

````js
        Asset      Size  Chunks             Chunk Names
app.bundle.js  4.31 KiB     app  [emitted]  app
      app.css  4.18 KiB     app  [emitted]  app
      ```
````

在 seal 阶段生成的 compilation.assets 对象，与我们最终打包出来的 Asset，只差临门一脚的输出。

### 4. emit

compilation 执行完成之后，内存中已经有即将输出的文件了，保存在 compilation.assets，提取出来写到对应输出文件即可。

```js
assets = {
  "app.css": {
    _source: {
      children: [
        {
          _value:
            ".hello {\n  color: red;\n}\n.hello .world {\n  color: blue;\n}\n",
        },
        "\n",
      ],
    },
    // ...
  },
  "app.bundle.js": {
    // ...
  },
};
```
