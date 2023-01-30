# compiler

在 new Vue 的说明过程中，我们知道在\_init 函数中，created 之后是 $mount

```js
Vue.prototype._init = function (options?: Object) {
  // ...
  callHook(vm, "created");

  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
};
```

$mount 定义在 src/platforms/web/entry-runtime-with-compiler.js，这级入口添加的核心内容是 compiler，这一章我们就这开始研究编译过程。

## 本文用例

本文说明过程中采用的例子是

```js
const app = new Vue({
  template: '<div class="header">hello <span>world</span></div>',
});

app.$mount("#app");
```

## 编译位置

beforeCreate 到 created，是根据 options 去设置 vm，这个过程中对 options 的使用并未用到 template，只是 data，methods 等。

模板的编译位置，在 created 之后的 mount 过程

```js
mport { compileToFunctions } from './compiler/index'

Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }

  // resolve template/el and convert to render function
  const options = this.$options
  if (!options.render) {
    // ...resolve template/el

    // template to rener functions
    if (template) {
      const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns
      // ...
    }
  }

  return mount.call(this, el, hydrating)
}
```

三个核心内容

- query el
- resolve template/el
- template to render functions

研究编译过程，关注点在第三部分，核心函数是 `compileToFunctions`，它定义在 `src/platforms/web/compiler/index.js`，代码如下

```js
import { baseOptions } from "./options";
import { createCompiler } from "compiler/index";

const { compile, compileToFunctions } = createCompiler(baseOptions);

export { compile, compileToFunctions };
```

这里的 baseOptions 就是一些内置的指令，模块等，暂时不用理会，继续深入是 `src/compiler/index.js`，这是编译器的核心

## baseCompile

src/compiler/index.js 代码如下

```js
import { parse } from "./parser/index";
import { optimize } from "./optimizer";
import { generate } from "./codegen/index";
import { createCompilerCreator } from "./create-compiler";

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  const code = generate(ast, options);
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns,
  };
});
```

baseCompile 翻译过来就是基础编译，可以理解为 **核心编译**，这里是编译的核心过程，包含三个步骤：

- parse：AST 生成；
- optimize：AST 优化；
- generate：代码生成，生成的是渲染函数 render fns；

根据本文示例，返回的内容如下

```js
{
  ast: {
    attrsList: []
    attrsMap: {class: "header"}
    children: (2) [{…}, {…}]
    end: 49
    parent: undefined
    plain: false
    rawAttrsMap: {class: {…}}
    start: 0
    static: true
    staticClass: "\"header\""
    staticInFor: false
    staticProcessed: true
    staticRoot: true
    tag: "div"
    type: 1
  },
  render:"with(this){return _m(0)}",
  staticRenderFns: [
    "with(this){return _c('div',{staticClass:\"header\"},[_v(\"hello \"),_c('span',[_v(\"world\")])])}"
  ]
}
```

**注意，到这里，`render` 和 `staticRenderFns` 保存的都是所谓的中间代码，还不是函数**。

继续深入是 createCompilerCreator，其中涉及到一个重要函数 `compile`，单独写成一小节。

## compile

createCompilerCreator 在 src/compiler/create-compiler.js，代码如下

```js
export function createCompilerCreator(baseCompile: Function): Function {
  return function createCompiler(baseOptions: CompilerOptions) {
    function compile(
      template: string,
      options?: CompilerOptions
    ): CompiledResult {
      const finalOptions = Object.create(baseOptions);
      // ...

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules = (baseOptions.modules || []).concat(
            options.modules
          );
        }

        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }

        // copy other options
        for (const key in options) {
          if (key !== "modules" && key !== "directives") {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      const compiled = baseCompile(template.trim(), finalOptions);
      if (process.env.NODE_ENV !== "production") {
        detectErrors(compiled.ast, warn);
      }
      // errors和tips用来在dev下做提示
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled;
    }

    return {
      compile,
      compileToFunctions: createCompileToFunctionFn(compile),
    };
  };
}
```

这又是一个 HOC，定义了一个 compile 函数，其功能是将系统预置的模块、指令与用户配置的做合并，就是在 baseCompile 的基础上增加了一些属性和功能，两者的关系正如两者名称表现的一样。

这里返回的另一个属性是 compileToFunctions，在下一小节单独说明。

## compileToFunctions

compileToFunctions 是 createCompileToFunctionFn 的返回，又双叒叒 HOC

```js
export function createCompileToFunctionFn(compile: Function): Function {
  const cache = Object.create(null);

  return function compileToFunctions(compile) {
    // ...
    const compiled = compile(template, options);

    // turn code into functions
    const res = {};
    const fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map((code) => {
      return createFunction(code, fnGenErrors);
    });

    // ...
    return (cache[key] = res);
  };
}
```

一路查找下来，到这里总算是没有更深一层的 HOC 了。

这个函数的功能，就是调用 createFunction，将前面在 generate 得到的 render 和 staticRenderFns 转换为真正的函数。

这是为后面的渲染过程使用准备的。

这层层的 HOC 嵌套，调用关系较为复杂，我提取整理了一下，如下

```js
function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  const code = generate(ast, options);
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns,
  };
}

function compile(template: string, options?: CompilerOptions) {
  const finalOptions = Object.create(baseOptions);
  // merge custom modules to
  // merge custom directives
  const compiled = baseCompile(template.trim(), finalOptions);
  // ...
  return compiled;
}

// 注意：这个是指内部的compileToFunctions，并不是本文一开始的那个入口的
function compileToFunctions(compile) {
  // ...
  const compiled = compile(template, options);

  // turn code into functions
  const res = {};
  const fnGenErrors = [];
  res.render = createFunction(compiled.render, fnGenErrors);
  res.staticRenderFns = compiled.staticRenderFns.map((code) => {
    return createFunction(code, fnGenErrors);
  });

  // ...
  return (cache[key] = res);
}

function createCompilerCreator() {
  return {
    compile,
    compileToFunctions,
  };
}
```

总结起来这几个函数的调用关系如下

```js
createCompilerCreator -> compileToFunctions -> compile -> baseCompile
```

最终得到的 render 函数和 staticRenderFns 如下

```js
function render() {
  with (this) {
    return _m(0);
  }
}

staticRenderFns = [
  function () {
    with (this) {
      return _c("div", { staticClass: "header" }, [
        _v("hello "),
        _c("span", [_v("world")]),
      ]);
    }
  },
];
```

这就是所谓的中间代码。

## 总结

Vue 中的模板编译，就是 template 模板转换为 AST，最后生成中间代码的过程

拨开层层 HOC，总结起来涉及到三个核心函数

- baseCompile：编译过程的三个最核心步骤，最终生成了中间代码
- compile：在 baseCompile 基础上增加 modules 和 directives 等的合并
- compileToFunctions：将编译生成的代码转换成函数，最终返回了 render 函数，staticRenderFns 函数数组

:::tip -\_-
生成 AST -> AST 优化 -> 生成中间代码 -> 中间代码转化为渲染函数
:::
