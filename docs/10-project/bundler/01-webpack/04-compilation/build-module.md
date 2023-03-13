# buildModule

添加了模块的记录之后，从 buildModule 开始，进入到模块内容的读取分析过程

```js
class Compilation {
  buildModule(module, callback) {
    this.buildQueue.add(module, callback);
  }
  _buildModule(module, callback) {
    module.needBuild(
      {
        fileSystemInfo: this.fileSystemInfo,
      },
      (err, needBuild) => {
        // ...略
        this.hooks.buildModule.call(module);
        this.builtModules.add(module);
        module.build(
          this.options,
          this,
          this.resolverFactory.get("normal", module.resolveOptions),
          this.inputFileSystem,
          (err) => {
            // ...略
            this.cache.store(
              `${this.compilerPath}/module/${module.identifier()}`,
              null,
              module,
              (err) => {
                // ...略
                this.hooks.succeedModule.call(module);
                return callback();
              }
            );
          }
        );
      }
    );
  }
}
```

在这里正式调用了模块方法 module.build

```js
const { getContext, runLoaders } = require("loader-runner");

class NormalModule extends Module {
  build(options, compilation, resolver, fs, callback) {
    return this.doBuild(options, compilation, resolver, fs, (err) => {
      const handleParseResult = (result) => {
        // ...
        return callback();
      };

      // ...
      handleParseResult(result);
    });
  }

  // ...
  doBuild(options, compilation, resolver, fs, callback) {
    const processResult = (err, result) => {
      // ...
      return callback();
    };

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
        processResult(err || err2, result.result);
      }
    );
  }
}
```

doBuild 里面是调用 runLoaders 执行 loaders，loaders 执行之后是调用回调，每一步执行完成之后，依次调用外部传入的回调。
根据调用顺序，先看 runLoaders 的执行情况，需要的时候再关注回调中的继续执行过程。

#### 用例

根据下面这个例子，分析解析的过程

<Tabs>
  <TabItem value="webpack.config.js" label="webpack.config.js" default>

```js
module.exports = {
  target: "web",
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "./app.js"),
  },
  output: {
    filename: "[name][hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
      },
    ],
  },
};
```

</TabItem>
<TabItem value="app.js" label="app.js">

```js
import DEFAULT_AUTHOR from "./constants";
import "./styles.css";

const author = "liangzai";
console.log("Hello ", DEFAULT_AUTHOR || author);
```

</TabItem>
<TabItem value="constants.js" label="constants.js">

```js
export const DEFAULT_AUTHOR = "esmyy";
```

  </TabItem>
  <TabItem value="style.css" label="style.css">

```css
.hello {
  color: red;
}
```

  </TabItem>
</Tabs>

#### runLoaders

省略中间的过程，直接看 runLoaders 的参数是什么，输出又是什么，先把握整体情况。参数如下

<Tabs>
  <TabItem value="app.js" label="app.js" default>

```js
runLoaders({
  source: "/Users/esmyy/webpack-demo/debug/app.js",
  loaders: [
    {
      loader: "/Users/esmyy/node_modules/babel-loader/lib/index.js",
      options: { presets: ["@babel/preset-env"] },
      ident: "ruleSet[1].rules[0].use",
    },
  ],
  context: {
    // ... loader相关环境描述，工具方法等
  },
  readResource: fs.readFile.bind(fs),
});
```

</TabItem>
<TabItem value="constants.js" label="constants.js">

```js
runLoaders({
  source: "/Users/esmyy/webpack-demo/debug/constants.js",
  loaders: [
    {
      loader: "/Users/esmyy/node_modules/babel-loader/lib/index.js",
      options: { presets: ["@babel/preset-env"] },
      ident: "ruleSet[1].rules[0].use",
    },
  ],
  context: {
    // ... loader相关环境描述，工具方法等
  },
  readResource: fs.readFile.bind(fs),
});
```

</TabItem>
  <TabItem value="style.css" label="style.css">

```js
runLoaders({
  source: "/Users/esmyy/webpack-demo/debug/style.css",
  loaders: [
    {
      loader: "/Users/esmyy/node_modules/css-loader/dist/cjs.js",
      options: undefined,
      ident: undefined,
    },
  ],
  context: {
    // ... loader相关环境描述，工具方法等
  },
  readResource: fs.readFile.bind(fs),
});
```

</TabItem>
</Tabs>

`runLoaders`参数中传输了完整的模块路径以及匹配的 loaders，传入了 readFile 函数，这应该是用以读取模块源内容的。看一看回调函数中的结果

<Tabs>
  <TabItem value="app.js" label="app.js" default>

```js
{
  result: [
    "import DEFAULT_AUTHOR from \"./constants\";\nimport \"./style.css\";\nvar author = \"liangzai\";\nconsole.log(\"Hello \", DEFAULT_AUTHOR || author);",
    {
      version: 3,
      file: undefined,
      names: [
        "DEFAULT_AUTHOR",
        "author",
        "console",
        "log",
      ],
      sourceRoot: undefined,
      sources: [
        "/Users/fengpeng/coding/Engineering/webpack-v5.0.0-beta.12/debug/app.js",
      ],
      sourcesContent: [
        "import DEFAULT_AUTHOR from \"./constants\";\nimport \"./style.css\";\n\nconst author = \"liangzai\";\nconsole.log(\"Hello \", DEFAULT_AUTHOR || author);\n",
      ],
      mappings: "AAAA,OAAOA,cAAc,MAAM,aAAa;AACxC,OAAO,aAAa;AAEpB,IAAMC,MAAM,GAAG,UAAU;AACzBC,OAAO,CAACC,GAAG,CAAC,gBAAgB,EAAEH,cAAc,IAAIC,MAAM,CAAC",
    },
  ],
  resourceBuffer: new Uint8Array(/* 省略 */),
  cacheable: true,
  fileDependencies: [
    "/Users/fengpeng/coding/Engineering/webpack-v5.0.0-beta.12/debug/app.js",
  ],
  contextDependencies: [
  ],
  missingDependencies: [
  ],
}
```

</TabItem>
<TabItem value="constants.js" label="constants.js">

```js
{
  result: [
    "export var DEFAULT_AUTHOR = \"esmyy\";",
    {
      version: 3,
      file: undefined,
      names: [
        "DEFAULT_AUTHOR",
      ],
      sourceRoot: undefined,
      sources: [
        "/Users/fengpeng/coding/Engineering/webpack-v5.0.0-beta.12/debug/constants.js",
      ],
      sourcesContent: [
        "export const DEFAULT_AUTHOR = \"esmyy\";\n",
      ],
      mappings: "AAAA,OAAO,IAAMA,cAAc,GAAG,OAAO",
    },
  ],
  resourceBuffer: new Uint8Array(/* 省略 */),
  cacheable: true,
  fileDependencies: [
    "/Users/fengpeng/coding/Engineering/webpack-v5.0.0-beta.12/debug/constants.js",
  ],
  contextDependencies: [
  ],
  missingDependencies: [
  ],
}
```

</TabItem>
<TabItem value="style.css" label="style.css" default>

```js
{
  result: [
    "// Imports\nvar ___CSS_LOADER_API_IMPORT___ = require(\"../node_modules/.store/css-loader@3.6.0/node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \".hello {\\n\\tcolor: red;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n",
  ],
  resourceBuffer: new Uint8Array(/* 省略 */),
  cacheable: true,
  fileDependencies: [
    "/Users/fengpeng/coding/Engineering/webpack-v5.0.0-beta.12/debug/style.css",
  ],
  contextDependencies: [
  ],
  missingDependencies: [
  ],
}
```

</TabItem>
</Tabs>

从入参和结果的对比中，显然 runLoaders 会读取源文件，使用 rules 所匹配的 loaders 去转换。runLoaders 是真正读取源文件的起点，但是 loader 相关的过程暂时不去深入，loader 需要单独的章节去梳理。
从 app.js 的结果看，文件中的 import 关键字，并没有被替换掉，所以这里还没有得到最终编译的结果，只是做了一部分转换。继续看一下 `processResult`的处理

```js title="doBuild 里面的 processResult"
const processResult = (err, result) => {
  // ...略

  // result 完整的情况下是一个数组 [source, sourceMap, extraInfo]
  const source = result[0];
  const sourceMap = result.length >= 1 ? result[1] : null;
  const extraInfo = result.length >= 2 ? result[2] : null;

  // 转换为统一的source表示结果
  this._source = this.createSource(
    options.context,
    this.binary ? asBuffer(source) : asString(source),
    sourceMap,
    compilation.compiler.root
  );

  // ...略

  // loader 中是否已经转换为 ast 了，如果loader中已经返回ast，则直接复用，后面就不用重复生成了，在本例子中都是 null
  this._ast =
    typeof extraInfo === "object" &&
    extraInfo !== null &&
    extraInfo.webpackAST !== undefined
      ? extraInfo.webpackAST
      : null;
  return callback();
};
```

runLoaders 的结果完整的情况下是一个数组

```js
[source, sourceMap, extraInfo];
```

sourceMap 和 extraInfo 暂时不用关注。最后 \_source 设置就是把模块的内容保存到模块的描述实例上，`_ast`的设置是为了避免重复生成 AST，这是 loader 相关的内容，在本例中是 null。

:::note 小结
runLoaders 负责模块源内容的读取，使用匹配的 loader 进行处理转换，最终将相关的解析结果保存到 module 对象上。

runLoaders 的具体实现，执行，不在此处深入。
:::

#### parse

runLoaders 执行完成之后，调用了传入的 callback，回头看一下 `doBuild`的回调，外层做了些什么事情。

```js
doBuild(options, compilation, resolver, fs, (err) => {
  // ...略

  const handleParseResult = (result) => {
    this.dependencies.sort(
      concatComparators(
        compareSelect((a) => a.loc, compareLocations),
        keepOriginalOrder(this.dependencies)
      )
    );
    this._lastSuccessfulBuildMeta = this.buildMeta;
    this._initBuildHash(compilation);
    return callback();
  };

  let result = this.parser.parse(this._ast || this._source.source(), {
    current: this,
    module: this,
    compilation: compilation,
    options: options,
  });

  handleParseResult(result);
});
```

在 4.x 版本，parser 定义在 [lib/Parser.js](https://github.com/webpack/webpack/blob/v4.46.0/lib/Parser.js)，在 5.x 之后挪到了
`lib/JavascriptParser.js` 中

```js
class JavascriptParser extends Parser {
  parse(source, state) {
    // ...略

    // 得到ast
    ast = JavascriptParser.parse(source, {
      sourceType: this.sourceType,
      onComment: comments,
      onInsertedSemicolon: (pos) => semicolons.add(pos),
    });

    // ast分析处理
    if (this.hooks.program.call(ast, comments) === undefined) {
      this.detectStrictMode(ast.body);
      this.prewalkStatements(ast.body);
      this.blockPrewalkStatements(ast.body);
      this.walkStatements(ast.body);
    }
  }
}
```

`parser.parse` 是根据当前的 source，使用 [acorn](https://github.com/acornjs/acorn) 这个解析工具，去生成 AST。
生成 AST 之后，再调用 detectStrictMode 等一些函数，对 AST 进行检查，分析依赖等，最终得到模块更详细的描述，在 buildModule 的回调中进行依赖的处理

```js
this.buildModule(module, (err) => {
  // ...
  this.processModuleDependencies(module, (err) => {
    if (err) {
      return callback(err);
    }
    callback(null, module);
  });
});
```

依赖处理的过程中，递归执行各模块依赖项的构建，直到完成所有 entry 模块的构建，所有的模块都保存在 compilation.\_modules 中。

:::note 说明
parse 的主要作用是生成 AST，根据 AST 进行确定依赖，进行依赖模块的加载。

关于依赖处理不在此处深入，后面单独一节进行说明。
:::

#### seal

所有的模块读取，分析完成，都解析成模块的结构化描述，保存在内存中。可以根据这些内容，进行 output 的准备了。

```js
class Compilation {
  seal(callback) {
    // ...略
  }
}
```

- chunk 生成：在前面的步骤中，各模块实例保存在 compilation.\_modules 上，seal 根据 entry 生成 chunk，生成 chunk hash
- asset 生成：根据 chunk 生成 asset，在这一步，require 等引用被转换为使用内置的**webpack_require**引用

<!-- asset 和 chunk 的区别是什么？假设我使用 MiniCssExtractPlugin 提取了 css，那么编译结果如下 -->
<!-- 在 seal 阶段生成的 compilation.assets 对象，与我们最终打包出来的 Asset，只差临门一脚的输出。 -->

#### emit

compilation 执行完成之后，内存中已经有即将输出的文件了，保存在 compilation.assets，提取出来写到对应输出文件即可。

```js
assets = {
  "app.css": {
    _source: {
      children: [
        {
          _value: ".hello {\n  color: red;\n}\n",
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
