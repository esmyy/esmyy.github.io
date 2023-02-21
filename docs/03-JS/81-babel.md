# Babel

> Babel is a JavaScript compiler. Use next generation JavaScript, today.

Babel 既然是 compiler，过程基本上就必不可少三个过程

```mermaid
  flowchart LR
  parse(生成AST) --> optimize(AST 优化) --> generate(代码生成)
```

| 名称  | 版本 |
| :---: | :--: |
| Bable | 7.x  |

## babel

`babel` 命令定义在 `@babel/cli` 包中

```js title="babel/packages/babel-cli/src/index.js"
#!/usr/bin/env node

import parseArgv from "./options";
import dirCommand from "./dir";
import fileCommand from "./file";

const opts = parseArgv(process.argv);

if (opts) {
  const fn = opts.cliOptions.outDir ? dirCommand : fileCommand;
  fn(opts).catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
} else {
  process.exitCode = 2;
}
```

opts 是用 commander 进行参数转换，这是 CLI 工具基本套路。这段代码的逻辑非常简单，就是根据是针对 file 还是 dir 来执行不同的命令，继续往深层稍微查找一下，可以得到这个结论 —— 对于 dir 找到每个文件执行 babel.transformFile，对于 file 执行 babel.transform。

```js
babel.transformFile(filename, options, callback);
babel.transform(code, options, callback);
```

这俩函数，最核心的逻辑是一样的，研究一个即可，这里选择 transformFile。transformFile 定义在 babel/packages/babel-core/src/transform-file.ts 文件

```js
const transformFileRunner = gensync<(filename: string, opts?: InputOptions) => FileResult | null>(function* (filename, opts: InputOptions) {
  const options = { ...opts, filename };

  const config: ResolvedConfig | null = yield* loadConfig(options);
  if (config === null) return null;

  const code = yield* fs.readFile(filename, "utf8");
  return yield* run(config, code);
});

export const transformFile = transformFileRunner.errback as TransformFile;
```

run 函数如下

```js
export function* run(
  config: ResolvedConfig,
  code: string,
  ast?: t.File | t.Program | null
): Handler<FileResult> {
  const file = yield* normalizeFile(
    config.passes,
    normalizeOptions(config),
    code,
    ast
  );

  const opts = file.opts;
  yield* transformFile(file, config.passes);

  let outputCode, outputMap;
  if (opts.code !== false) {
    ({ outputCode, outputMap } = generateCode(config.passes, file));
  }

  // ...

  return {
    metadata: file.metadata,
    options: opts,
    ast: opts.ast === true ? file.ast : null,
    code: outputCode === undefined ? null : outputCode,
    map: outputMap === undefined ? null : outputMap,
    sourceType: file.ast.program.sourceType,
  };
}
```

这里的 `normalizeFile`，`transformFile` 和 `generateCode` 就分别对应了编译的三个步骤 —— 解析，转换和代码生成。

## parse

解析过程，就是对源码根据一定的规则去分析生成 `AST`。在前面所述 `run` 函数中，解析生成 `AST` 的代码如下

```js
const file =
  yield * normalizeFile(config.passes, normalizeOptions(config), code, ast);
```

使用如下示例说明

```js
const code = `setTimeout(() => {
  console.log('welcome')
}, 3000)`;
require("@babel/core").transformAsync(code, {});
```

解析得到的 AST 结果如下

```js
const ast = {
  type: "File",
  start: 0,
  end: 52,
  loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 8 } },
  errors: [],
  program: {
    type: "Program",
    start: 0,
    end: 52,
    loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 8 } },
    sourceType: "module",
    interpreter: null,
    body: [
      {
        type: "ExpressionStatement",
        start: 0,
        end: 52,
        loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 8 } },
        expression: {
          type: "CallExpression",
          start: 0,
          end: 52,
          loc: { start: { line: 1, column: 0 }, end: { line: 3, column: 8 } },
          callee: {
            type: "Identifier",
            start: 0,
            end: 10,
            loc: {
              start: { line: 1, column: 0 },
              end: { line: 1, column: 10 },
              identifierName: "setTimeout",
            },
            name: "setTimeout",
          },
          arguments: [
            {
              type: "ArrowFunctionExpression",
              start: 11,
              end: 45,
              loc: {
                start: { line: 1, column: 11 },
                end: { line: 3, column: 1 },
              },
              id: null,
              generator: false,
              async: false,
              params: [],
              body: {
                type: "BlockStatement",
                start: 17,
                end: 45,
                loc: {
                  start: { line: 1, column: 17 },
                  end: { line: 3, column: 1 },
                },
                body: [
                  {
                    type: "ExpressionStatement",
                    start: 21,
                    end: 43,
                    loc: {
                      start: { line: 2, column: 2 },
                      end: { line: 2, column: 24 },
                    },
                    expression: {
                      type: "CallExpression",
                      start: 21,
                      end: 43,
                      loc: {
                        start: { line: 2, column: 2 },
                        end: { line: 2, column: 24 },
                      },
                      callee: {
                        type: "MemberExpression",
                        start: 21,
                        end: 32,
                        loc: {
                          start: { line: 2, column: 2 },
                          end: { line: 2, column: 13 },
                        },
                        object: {
                          type: "Identifier",
                          start: 21,
                          end: 28,
                          loc: {
                            start: { line: 2, column: 2 },
                            end: { line: 2, column: 9 },
                            identifierName: "console",
                          },
                          name: "console",
                        },
                        computed: false,
                        property: {
                          type: "Identifier",
                          start: 29,
                          end: 32,
                          loc: {
                            start: { line: 2, column: 10 },
                            end: { line: 2, column: 13 },
                            identifierName: "log",
                          },
                          name: "log",
                        },
                      },
                      arguments: [
                        {
                          type: "StringLiteral",
                          start: 33,
                          end: 42,
                          loc: {
                            start: { line: 2, column: 14 },
                            end: { line: 2, column: 23 },
                          },
                          extra: { rawValue: "welcome", raw: "'welcome'" },
                          value: "welcome",
                        },
                      ],
                    },
                  },
                ],
                directives: [],
              },
            },
            {
              type: "NumericLiteral",
              start: 47,
              end: 51,
              loc: {
                start: { line: 3, column: 3 },
                end: { line: 3, column: 7 },
              },
              extra: { rawValue: 3000, raw: "3000" },
              value: 3000,
            },
          ],
        },
      },
    ],
    directives: [],
  },
  comments: [],
};
```

简单的一个 `setTimeout`，但对应的 `AST` 却相当复杂，毕竟需要准确描述出各个单元的位置，类型，具体内容等信息。简化结构如下

```js
{
  type: "ExpressionStatement",
  expression: {
    type: "CallExpression",
    callee: {
      type: "Identifier",
      name: "setTimeout"
    },
    arguments: [
      {
        type: "ArrowFunctionExpression",
        body: {
          type: "BlockStatement",
          body: [
            {
              type: "ExpressionStatement",
              expression: {
                type: "CallExpression",
                callee: {
                  type: "MemberExpression",
                  object: {
                    type: "Identifier",
                    name: "console"
                  },
                  computed: false,
                  property: {
                    type: "Identifier",
                    name: "log"
                  }
                },
                arguments: [
                  {
                    type: "StringLiteral",
                    extra: { rawValue: "welcome", raw: "'welcome'" },
                    value: "welcome"
                  }
                ]
              }
            }
          ],
          directives: []
        }
      },
      {
        type: "NumericLiteral",
        extra: { rawValue: 3000, raw: "3000" },
        value: 3000
      }
    ]
  }
}
```

仍旧不简单，但是已经能够较为清晰地看出一些逻辑。每个节点都有 type，不同的类型，有相应的其他属性描述节点的具体内容。这里涉及的类型如下

|          type           |     意义     | 出现次数 |
| :---------------------: | :----------: | :------: |
|   ExpressionStatement   |    表达式    |    2     |
|     CallExpression      |  调用表达式  |    2     |
| ArrowFunctionExpression |   箭头函数   |    1     |
|     BlockStatement      |    块声明    |    1     |
|    MemberExpression     |  成员表达式  |    1     |
|       Identifier        |    标识符    |    3     |
|      StringLiteral      | 字符串字面量 |    1     |
|     NumericLiteral      |  数字字面量  |    1     |

那么解析出来不同的节点之后，在后面就可以根据 type 进行转换，比如说识别出 `ArrowFunctionExpression` ，那就可以做相应的函数降级转换

## transform

就是对 AST 进行遍历优化，在这个过程中会遍历 AST 进行处理。首先来看一下前面例子

```js
const code = `setTimeout(() => {
  console.log('welcome')
}, 3000)`;
require("@babel/core").transformAsync(code, {});
```

在源码的转换函数中添加以下代码

```js
const parsedAstString = JSON.stringify(file.ast);
yield * transformFile(file, config.passes);
const transformedAstString = JSON.stringify(file.ast);
console.log(parsedAstString === transformedAstString); // true
```

**转换前后的 AST 完全一样**

此事看起来有点蹊跷，其实原因也很明显，压根没有配置 preset 或者 plugins，没给出任何转换的指示。

接下来我们来详细看一下转换具体过程，看看 preset 和 plugins 是如何生效的。

转换过程的核心函数 transformFile 如下

```js
function* transformFile(file: File, pluginPasses: PluginPasses): Handler<void> {
  for (const pluginPairs of pluginPasses) {
    const passPairs = [];
    const passes = [];
    const visitors = [];

    for (const plugin of pluginPairs.concat([loadBlockHoistPlugin()])) {
      const pass = new PluginPass(file, plugin.key, plugin.options);

      passPairs.push([plugin, pass]);
      passes.push(pass);
      visitors.push(plugin.visitor);
    }

    for (const [plugin, pass] of passPairs) {
      const fn = plugin.pre;
      if (fn) {
        const result = fn.call(pass, file);
        // ...
      }
    }

    // merge all plugin visitors into a single visitor
    const visitor = traverse.visitors.merge(
      visitors,
      passes,
      file.opts.wrapPluginVisitorMethod
    );
    traverse(file.ast, visitor, file.scope);

    for (const [plugin, pass] of passPairs) {
      const fn = plugin.post;
      if (fn) {
        const result = fn.call(pass, file);
        // ...
      }
    }
  }
}
```

代码是很清晰的，前后是 `plugin.pre` 和 `plugin.post` 钩子函数的调用，中间主体是调用 `traverse` 函数来遍历。 这里涉及到了 `traverse` 和 `visitor` 这两个内容，后面单独小节进行讲解。

## traverse

traverse 在 @babel/traverse 模块，其基本语法为 traverse(ast, visitor)(不完全准确，不影响理解)，示例如下

```js
const traverse = require("@babel/traverse").default;
const parser = require("@babel/parser");

const code = `setTimeout(() => {
  console.log('welcome')
}, 3000)`;

const ast = parser.parse(code);
traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "setTimeout" })) {
      console.log("enter setTimeout");
    }
  },
});
```

traverse 就是用来做 AST 遍历的。这里请关注第二个参数 visitor，visitor 负责挂载节点访问相关的钩子函数，enter 是一个通用的的访问钩子。还可以根据节点的类型设置

```js
traverse(ast, {
  Identifier() {
    console.log("Called!");
  },
});
```

这段代码就表示，在节点类型为 `Identifier` 时执行对应的函数。

traverse 负责遍历，而 visitor 就像是处理函数，负责添加钩子进行处理，于是在访问节点的时候，可以在钩子中去做节点的跳过，删除和替换等操作。

## visitor

`Visitor` 译为访问者，就是一个对象，描述了进入(或曰访问)或离开一个 AST 节点时要做什么。通过下方示例说明

```js
// 每次进入一个 Identifier 节点做什么
const myVisitor = {
  Identifier() {
    console.log("Called!");
  },
};

traverse(ast, myVisitor);
```

以上添加了 Identifier 节点访问钩子。在另一种配置方法里面，访问者有两个钩子 enter 和 exit

```js
const myVisitor = {
  BlockStatement: {
    enter() {
      console.log("Entered");
    },
    exit() {
      console.log("Exited");
    },
  },
  "Identifier|ArrowFunctionExpression"() {
    // ...
  },
};

traverse(ast, myVisitor);
```

以上代码中，添加了 `BlockStatement` 类型节点访问和退出时的钩子函数，`exit` 是在子树遍历完成向上返回到这个节点的时候执行，类似于事件的捕获和冒泡流程。

## path

`path` 既是节点描述对象，同时也是结点操作工具，包含了节点描述，节点判断方法，节点操作方法等。示意如下

```js
const MyVisitor = {
  BlockStatement(path) {
    // 节点描述
    console.log(path.node.type); // BlockStatement

    // 类型判断方法
    console.log(path.isBlockStatement()); // true
    console.log(path.isIdentifier()); // false

    // 操作方法
    console.log(typeof path.remove); // 'function'
    path.remove();
  },
};

traverse(ast, MyVisitor);
```

以上，分别展示了 path 对象的几类属性。

## 对比

当我们未指定任何 `preset` 或者 `plugin` 的时候，转换函数执行前后的 AST 完全一样，也就是转换函数对 AST 啥也没干，现在添加一个插件来看一下

```js
const code = `setTimeout(() => {
  console.log('welcome')
}, 3000)`;
require("@babel/core").transformAsync(code, {
  plugins: ["@babel/plugin-transform-arrow-functions"],
});
```

在这个例子中，添加了一个箭头函数处理插件，AST 对比结果如

```js
< type: "ArrowFunctionExpression",
---
> type: "FunctionExpression",
```

`ArrowFunctionExpression` 节点类型被转换为了 `FunctionExpression`，则后续在代码生成时，就可以用 `function` 替换掉 `=>`了。

通过这个插件 `plugin-transform-arrow-functions` 可以直观感受到插件在转换过程中的作用，具体关于插件的实现，插件与 `visitor` 的关系等，在后面通过单独的小节进行说明。

## 小结

traverse，visitor 和 path 这三部分的内容，可以与 switch 进行一个对比理解

```js
ast.forEach((node) => {
  switch (node.type) {
    case "BlockStatement":
      // ...
      break;
    case "Identifier":
    case "ArrowFunctionExpression":
      break;
  }
});
```

traverse 就类似于这个 forEach 遍历，而 visitor 是这个 switch，具体的每个 case 怎么去做，就由 path 提供的操作方法组合使用。

## generate

代码生成，就是根据转换后的 AST，去还原出兼容的代码，相关的包是@babel/generator

```js
class Generator extends Printer {
  // ...
  generate() {
    return super.generate(this.ast);
  }
}
```

而 Printer 如下

```js
class Printer {
  declare _buf: Buffer;

  // ...
  generate(ast) {
    this.print(ast);
    this._maybeAddAuxComment();

    return this._buf.get();
  }

  print(node, parent?) {
    // ...
  }
}
```

\_buf 用来存储已转换部分的结果，实际转换的地方，就在 print 函数。用以下一个简单的 code 例子来看一下，是如何还原的

```js
const parser = require("@babel/parser");
const babel = require("@babel/core");
const code = `() => {}`;
const ast = parser.parse(code, {});
const result = babel.transformFromAst(ast, code, {
  plugins: ["@babel/plugin-transform-arrow-functions"],
});
```

此时转换后的 `AST` 主体部分如下

```js
{
  type: "ExpressionStatement",
  start: 0,
  end: 8,
  loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 8 } },
  expression: {
    type: "FunctionExpression",
    start: 0,
    end: 8,
    loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 8 } },
    id: null,
    generator: false,
    async: false,
    params: [],
    body: {
      type: "BlockStatement",
      start: 6,
      end: 8,
      loc: { start: { line: 1, column: 6 }, end: { line: 1, column: 8 } },
      body: [],
      directives: []
    }
  }
}
```

还原的过程，就是遍历这些节点，根据 `type` 去生成新的代码，代码如下

```js
class Printer {
  // ...
  print(node, parent) {
    // ...
    const printMethod = this[node.type];
    const loc = t.isProgram(node) || t.isFile(node) ? null : node.loc;
    this.withSource("start", loc, () => {
      printMethod.call(this, node, parent);
    });
  }
}
```

`node.type` 对应的转换方法在 `Printer` 的原型链上，其中 `FunctionExpression` 如下

```js
export function FunctionExpression(this: Printer, node: t.FunctionExpression) {
  this._functionHead(node);
  this.space();
  this.print(node.body, node);
}

export function _functionHead(this: Printer, node: any) {
  if (node.async) {
    this.word("async");
    this.space();
  }
  this.word("function");
  if (node.generator) this.token("*");

  this.space();
  if (node.id) {
    this.print(node.id, node);
  }

  this._params(node);
  this._predicate(node);
}
```

\_functionHead 用以添加函数相关关键字，word 函数用以向\_buf 中添加已经确认部分对应的标识符，而 this.\_params(node)对参数进行转换，this.print(node.body, node)继续向下处理主体部分。

## plugin

前面我们已经提到了，插件要介入到代码转换的过程，就应该是通过添加 visitor 的方式，去对节点进行操作。以插件 plugin-transform-arrow-functions 为例，源码如下

```js
import { declare } from "@babel/helper-plugin-utils";
import type NodePath from "@babel/traverse";

export default declare((api, options) => {
  api.assertVersion(7);

  const noNewArrows = api.assumption("noNewArrows") ?? !options.spec;

  return {
    name: "transform-arrow-functions",

    visitor: {
      ArrowFunctionExpression(
        path: NodePath<BabelNodeArrowFunctionExpression>
      ) {
        // In some conversion cases, it may have already been converted to a function while this callback
        // was queued up.
        if (!path.isArrowFunctionExpression()) return;

        path.arrowFunctionToExpression({
          // While other utils may be fine inserting other arrows to make more transforms possible,
          // the arrow transform itself absolutely cannot insert new arrow functions.
          allowInsertArrow: false,
          noNewArrows,

          // TODO(Babel 8): This is only needed for backward compat with @babel/traverse <7.13.0
          specCompliant: !noNewArrows,
        });
      },
    },
  };
});
```

与前面所料不差，插件正是通过添加 visitor，根据 node.type 针对 ArrowFunctionExpression 类型，通过 path 提供的方法对 node 进行了更新。插件的逻辑都是类似的，通过 visitor 注册处理函数，具体的处理方法在 path 对象提供。

## preset

preset 顾名思义就是 “预设”，其实就是常用插件的集合，是一个常用套装。

在 parse 之前，load config 环节，babel 就会对 presets 配置进行处理，生成对应的插件列表保存在 config.passes 数组中，然后在 transform 环节，遍历插件列表，整合插件的 visitor，执行 AST 的转换。

`@babel/preset-env` 其实是如下插件列表

```js
plugins: [
  "proposal-numeric-separator",
  "proposal-logical-assignment-operators",
  "proposal-nullish-coalescing-operator",
  "proposal-optional-chaining",
  "proposal-json-strings",
  "proposal-optional-catch-binding",
  "transform-parameters",
  "proposal-async-generator-functions",
  "proposal-object-rest-spread",
  "transform-dotall-regex",
  "proposal-unicode-property-regex",
  "transform-named-capturing-groups-regex",
  "transform-async-to-generator",
  "transform-exponentiation-operator",
  "transform-template-literals",
  "transform-literals",
  "transform-function-name",
  "transform-arrow-functions",
  "transform-block-scoped-functions",
  "transform-classes",
  "transform-object-super",
  "transform-shorthand-properties",
  "transform-duplicate-keys",
  "transform-computed-properties",
  "transform-for-of",
  "transform-sticky-regex",
  "transform-unicode-escapes",
  "transform-unicode-regex",
  "transform-spread",
  "transform-destructuring",
  "transform-block-scoping",
  "transform-typeof-symbol",
  "transform-new-target",
  "regenerator-transform",
  "transform-member-expression-literals",
  "transform-property-literals",
  "transform-reserved-words",
  "proposal-export-namespace-from",
  "transform-modules-commonjs",
  "proposal-dynamic-import",
];
```

## 总结

babel 转码分成三个步骤

- parse：生成 AST
- transform：根据提供的插件去对节点进行处理转化，这一步完成了 AST 层面兼容，节点的 type 转换为对应的兼容类型，
  - traverse：迭代节点
  - visitor：注册节点转换处理函数
  - path：提供节点操作方法
- generate：根据 node.type 去调用预定义好的各种类型节点的生成函数，生成新的代码。

先解析成 AST，然后根据配置的插件和 presets 进行转换，最终再根据 AST 生成转换后的代码。

<!-- 没有抓住核心，太多杂七杂八的东西了 -->
