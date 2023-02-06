# loader

loader 本身是一个函数，主要用于对模块的源代码进行转换，输出转换的结果。 Loader 的另一个作用是将 JS，JSON 外的文件类型转换为有效的 JS 模块，正因如此才可以添加到依赖图中。 loader 的配置示例如下

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

按照官方 [loaders 介绍](https://webpack.js.org/concepts/loaders/) 所说

> Loaders are evaluated/executed from right to left (or from bottom to top)。

loaders 执行顺序是右到左，这其中必有蹊跷，这涉及到 loader 是如何执行(loader-runner)，以及 loader module 自身结构的问题了。

## loader-runner

webpack 中使用 [loader-runner](https://github.com/webpack/loader-runner#readme) 来执行 loader。 loader-runner 可以在 webpack 中使用，也提供了独立的运行环境，可以在不安装 webpack 的情况下运行，以便于进行 loader 的开发和调试。 其核心函数 runLoaders 的格式如下

```js
import { runLoaders } from "loader-runner";

runLoaders({
  resource: "/abs/path/to/file.txt?query",
  // String: Absolute path to the resource (optionally including query string)

  loaders: ["/abs/path/to/loader.js?query", "/abs/path/to/loader2.js?query"],
  // String[]: Absolute paths to the loaders (optionally including query string)
  // {loader, options}[]: Absolute paths to the loaders with options object

  context: { minimize: true },
  // Additional loader context which is used as base context

  processResource: (loaderContext, resourcePath, callback) => { ... },
  // Optional: A function to process the resource
  // Must have signature function(context, path, function(err, buffer))
  // By default readResource is used and the resource is added a fileDependency

  readResource: fs.readFile.bind(fs)
  // Optional: A function to read the resource
  // Only used when 'processResource' is not provided
  // Must have signature function(path, function(err, buffer))
  // By default fs.readFile is used
}, function(err, result) {
  // ...
})
```

loader 的执行，自然必不可少的环节是加载 loader 模块，此处省略具体代码定位的过程，最终加载 loader 模块的代码如下

```js
function loadLoader(loader, callback) {
  if (typeof System === "object" && typeof System.import === "function") {
    System.import(loader.path)
      .catch(callback)
      .then(function (module) {
        loader.normal = typeof module === "function" ? module : module.default;
        loader.pitch = module.pitch;
        loader.raw = module.raw;
        if (
          typeof loader.normal !== "function" &&
          typeof loader.pitch !== "function"
        ) {
          return callback(
            new LoaderLoadingError(
              "Module '" +
                loader.path +
                "' is not a loader (must have normal or pitch function)"
            )
          );
        }
        callback();
      });
  } else {
    // ...
  }
}
```

可以看到 loader module 导出主要有 pitch 和 raw 两个属性，其中默认导出的函数称为 normal。 从条件判断可知，normal 和 pitch 函数至少要有一个。 根据以上结果，loader 可以认为是下面这样一个结构

```js
{
  normal?: function() {}
  pitch?: function() {}
  raw?: // ...
}
```

## loader.raw

raw 是一个 Boolean，指定 loader 期望的输入内容的类型。 默认情况下，resource 文件被转化为一个 UTF-8 字符串传递给 loader，loader 的输入输出是 String 或者 Buffer

```js
function loader(content: String | Buffer) {
  // ...
}
```

content 默认是一个 String。 通过设置 raw 为 true，loader-runner 可以根据 loader 的需要，将资源字符串或者上一个 loader 的执行结果，转换为当前 loader 所需的格式

```js
function convertArgs(args, raw) {
  if (!raw && Buffer.isBuffer(args[0])) args[0] = utf8BufferToString(args[0]);
  else if (raw && typeof args[0] === "string")
    args[0] = Buffer.from(args[0], "utf-8");
}
```

这个可以通过一个简单的 loader 来验证，如下 loader-a.js

```js title=loader-a.js
module.exports = function loader(content) {
  console.log("typeof", typeof content, content instanceof Buffer);
};

module.exports.raw = true;
```

而 runner.js

```js title=runner.js
const { runLoaders } = require("loader-runner");
const fs = require("fs");
const path = require("path");
runLoaders(
  {
    resource: "./style.css",
    loaders: [path.resolve(__dirname, "./loader-a.js")],
    readResource: fs.readFile.bind(fs),
  },
  (err, result) => {
    // console.log(re)
  }
);
```

执行 node runner.js 输出如下

```js
typeof object true
```

常见的 raw 为 true 的 loader 有 file-loader, url-loader 等，这些 loader 都不需要关注文件内部的详细内容，不需要进行语法分析。

## loader.pitch

loader 可以导出两个方法，pitch 和 default，如 [Pitching Loader](https://webpack.js.org/api/loaders/#pitching-loader) 所述，当配置了多个 loader 的时候

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        use: ["a-loader", "b-loader", "c-loader"],
      },
    ],
  },
};
```

假设这些 loader 都有 pitch 和 default 方法，执行的步骤是下面这样的

```js
|- a-loader `pitch`
  |- b-loader `pitch`
    |- c-loader `pitch`
      |- requested module is picked up as a dependency
    |- c-loader normal execution
  |- b-loader normal execution
|- a-loader normal execution
```

而当某个 pitch 返回了一个 module 的时候，执行步骤示例如下

```js
|- a-loader `pitch`
  |- b-loader `pitch` returns a module
|- a-loader normal execution
```

理解这个执行的逻辑容易，但是对于使用 pitch 的原因，官方的描述

> There are some instances where the loader only cares about the metadata behind a request and can ignore the results of the previous loader.

这个描述并不容易理解，并不能从中领会到究竟是为什么，以及何时使用，正如 [issues #360 所述](https://github.com/webpack/webpack/issues/360) ，pitch 并不那么容易理解和描述。

## loader.normal

通过和 pitch 对比，所谓的 normal 是什么意思已经很明确了。 我们说多个 loader 的时候，执行顺序是从右到左，其实是在说 loader 的 normal 方法的执行顺序是从右到左。

### loader 分类

Webpack 官方文档里面，对于 loader，当 raw 的值为 true 时，称为 ”Raw Loader“，当 pitch 方法存在时，称为”Pitching Loader“。 我觉得这样的称呼对于理解并无帮助，我更倾向于 [Stack Overflow 这个回答](https://stackoverflow.com/questions/55789849/how-style-loader-works-with-css-loader/55792756)的原因

> Note, there's no such thing as pitch loader, cus every loader can have a "normal side" and "pitch side".

loader 就是 loader，没有所谓的 Raw Loader 或者 Pitching Loader，raw 只是它的一个配置属性，而 pitch 或者 normal，是一个 loader 的左右手而已

## styleLoader.pitch

style-loader 定义了 pitch 方法，大概看一下其定义

```js
loaderApi.pitch = function loader(request) {
  // ...
  switch (injectType) {
    case "linkTag":
    // ... return someString;
    case "lazyStyleTag":
    case "lazySingletonStyleTag":
    // ... return someString;
    case "styleTag":
    case "singletonStyleTag":
    default:
      // ...
      return `${
        esModule
          ? `import api from ${loaderUtils.stringifyRequest(
              this,
              `!${path.join(__dirname, "runtime/injectStylesIntoStyleTag.js")}`
            )};
            import content from ${loaderUtils.stringifyRequest(
              this,
              `!!${request}`
            )};
            var clonedContent = content;`
          : `var api = require(${loaderUtils.stringifyRequest(
              this,
              `!${path.join(__dirname, "runtime/injectStylesIntoStyleTag.js")}`
            )});
            var content = require(${loaderUtils.stringifyRequest(
              this,
              `!!${request}`
            )});

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }`
      }

      var options = ${JSON.stringify(options)};

      options.insert = ${insert};
      options.singleton = ${isSingleton};

      var update = api(content, options);

      var exported = content.locals ? content.locals : {};

      ${hmrCode}

      ${esModule ? "export default" : "module.exports ="} exported;`;
  }
};
```

主要就是围绕 injectType 和 esModule 两个属性处理，根据 injectType 的不同使用不同的生成模块来生成 tag，根据 esModule 属性来调整相应的导入导出结构。使用以下示例来看一下其实如何起作用的

```bash
.
├── app.js
├── node_modules
├── package.json
├── style.less
└── webpack.config.js
```

webpakc.config.js 如下

```js
const path = require("path");

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
  module: {
    rules: [
      {
        test: /\.less$/i,
        loader: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
```

app.js 如下

```js
import "./style.less";
```

style.less 如下

```less
.hello {
  color: red;
  .world {
    color: blue;
  }
}
```

直接运行打印 style-loader 的 pitch 的输出

```js {3,4}
// 输出，返回值
styleLoaderResult = `
  var api = require("!./node_modules/_style-loader@1.3.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js");
  var content = require("!!./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./style.less");
  content = content.__esModule ? content.default : content;
  if (typeof content === 'string') {
    content = [[module.id, content, '']];
  }
  var options = {};
  options.insert = "head";
  options.singleton = false;
  var update = api(content, options);
  module.exports = content.locals || {};
`;
```

根据前面关于 pitch 的描述，由于这里返回了，那么后面的 css-loader、less-loader 的 pitch 和 normal 方法都被跳过了。 但是显然没有那么简单，less 文件必须要处理，不可能真的跳过转换的过程。

**style-loader pitch 方法的跳过，是以另一种方式执行了**

注意高亮的行，这里的 require 就是所谓的 inline 方式使用，通过 require 获得 less-loader，css-loader 返回的 css，然后再调用 injectStylesIntoStyleTag.js 中导出的方法进行了插入。

为什么要这样做呢？这与 css-loader 的返回值有关，css-loader 返回示例如下

```js
cssLoaderResult = `// Imports
  var ___CSS_LOADER_API_IMPORT___ = require("./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
  exports = ___CSS_LOADER_API_IMPORT___(false);
  // Module
  exports.push([module.id, ".hello { color: red;\\n}\\n", ""]);
  // Exports
  module.exports = exports;
`;
```

返回的是一个字符串，是以模块的方式导出，而非直接是 css 文本。 我们要获取到里面的 css，需要 require 再获取。 使用 require 后，webpack 将其作为一个独立的模块，如下在 webpack 的导出中，cssLoaderResult 作为一个独立模块

```js
(function (modules) {
  // webpackBootstrap
  // ...
})({
  "./app.js": function (module, __webpack_exports__, __webpack_require__) {
    eval(); // ...省略具体内容
  },

  "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_less-loader@6.2.0@less-loader/dist/cjs.js!./style.less":
    function (module, exports, __webpack_require__) {
      eval(cssLoaderResult); // ...
    },

  "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js": function (
    module,
    exports,
    __webpack_require__
  ) {
    "use strict";
    eval(); // ...省略具体内容
  },

  "./node_modules/_style-loader@1.3.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    function (module, exports, __webpack_require__) {
      "use strict";
      eval(); // ...省略具体内容
    },

  "./style.less": function (module, exports, __webpack_require__) {
    eval(styleLoaderResult); // ...省略具体内容
  },
});
```

在浏览器中就可以使用 eval 执行 styleLoaderResult，其中 require 了 css-loader 导出内容对应模块，会提取出 css 内容交给 style-loader 进行 update。

## pitch 的十万个为什么

老实说，了解了 styleLoader.pitch，仍旧不能很好地理解 pitch，pitch 这个东西就很别扭。

style-loader 使用 pitch，是基于在前面执行的 less-loader 和 css-loader 的返回值的。

css-loader 返回包含了

```js
require("./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
```

cssLoaderResult 中的 require 相关的内容交给需要 webpack 进行处理。 与此同时，style-loader 的工作，就是将 css 插入到 html 中，style-loader 需要获取到 cssLoaderResult 中包含的 css 文本

于是

**webpack 和 style-loader 两者都需要 cssLoaderResult**

在 style-loader 中使用，就是利用 webpack 将 require 的内容作为单独模块，然后 style-loader 调用这个模块获取返回的 css 内容。

:::tips
根据 css-loader 的返回内容，解释了为什么要用 require，但是我觉得其实 style-loader 里面的 pitch 并不必要。style-loader 并不能跳过 css-loader 和 less-loader，那么在 pitch 和 normal 处理又有何区别呢？完全可以在 normal 里面去实现。
:::

也许 style-loader 并不是一个很好的例子，毕竟 pitch 的执行时机意味着还可以做其他很多事情。 我觉得 pitch 这个东西很别扭，目前而言难以认可 pitch 的价值。
