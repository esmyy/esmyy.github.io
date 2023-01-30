# codegen

codegen 是编译过程的最后一步，这一步的输入是 optimize 后的 AST，输出是可执行的中间代码。

## 前置内容

代码生成的位置在 `src/compiler/index.js`，内容如下

```js
import { parse } from "./parser/index";
import { optimize } from "./optimizer";
import { generate } from "./codegen/index";
import { createCompilerCreator } from "./create-compiler";
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

本文研究的对象是 `generate` 函数

```js
const code = generate(ast, options);
```

## generate

在 `src/compiler/codegen/index.js`，如下

```js
export type CodegenResult = {
  render: string,
  staticRenderFns: Array<string>,
};

export function generate(
  ast: ASTElement | void,
  options: CompilerOptions
): CodegenResult {
  const state = new CodegenState(options);
  const code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: `with(this){return ${code}}`,
    staticRenderFns: state.staticRenderFns,
  };
}
```

实例化了 CodegenState 得到一个实例 state，然后调用了 genElement(ast, state) 生成了 code，最后是整合了一下进行返回，从这里可以看到最核心的应该是 genElement。

**CodegenState** 定义如下

```js
export class CodegenState {
  options: CompilerOptions;
  warn: Function;
  transforms: Array<TransformFunction>;
  dataGenFns: Array<DataGenFunction>;
  directives: { [key: string]: DirectiveFunction };
  maybeComponent: (el: ASTElement) => boolean;
  onceId: number;
  staticRenderFns: Array<string>;
  pre: boolean;

  constructor(options: CompilerOptions) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, "transformCode");
    this.dataGenFns = pluckModuleFunction(options.modules, "genData");
    this.directives = extend(extend({}, baseDirectives), options.directives);
    const isReservedTag = options.isReservedTag || no;
    this.maybeComponent = (el: ASTElement) =>
      !!el.component || !isReservedTag(el.tag);
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  }
}
```

其名称 CodegenState 理解起来就是代码生成过程中的状态，可以理解为就是定义了一个状态标记对象，在 genElement 函数中会用到

genElement 定义如下

```js
export function genElement(el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state);
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state);
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state);
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.tag === "template" && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || "void 0";
  } else if (el.tag === "slot") {
    return genSlot(el, state);
  } else {
    // component or element
    let code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      let data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData(el, state);
      }

      const children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = `_c('${el.tag}'${
        data ? `,${data}` : "" // data
      }${
        children ? `,${children}` : "" // children
      })`;
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code;
  }
}
```

首先根据函数定义，可以看到最终生成的 code 是一个字符串，往下看，判断是否具有不同的属性标记，调用不同的生成函数进行 code 的生成。

在 optimize 环节添加的 staticRoot 标记之前并不清楚其作用，在这里使用到了，因此这里首先关注 genStatic(el, state)。

## genStatic

```js
// hoist static sub-trees out
function genStatic(el: ASTElement, state: CodegenState): string {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  const originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(`with(this){return ${genElement(el, state)}}`);
  state.pre = originalPreState;
  return `_m(${state.staticRenderFns.length - 1}${
    el.staticInFor ? ",true" : ""
  })`;
}
```

执行 genStatic 的前提是 el.staticRoot 成立，也就是说这是一个**静态子树**。调用 getElement 返回了一个字符串的 code，将其推入到 staticRenderFns 数组中，然后返回值里面使用了 staticRenderFns 数组的最后一个元素的下标，也就是刚刚创建的 code 所在的下标。

假设有如下例子

```js
const app = new Vue({
  template: '<div class="header">hello <span>world</span></div>',
});

app.$mount("#app");
```

那么返回值如下

```js
"\_m(0)";
```

而此时，传入的 state，其 `staticRenderFns` 结果如下

```js
staticRenderFns: [
  'with(this){return _c(\'div\',{staticClass:"header"},[_v("hello "),_c(\'span\',[_v("world")])])}',
];
```

generate 函数返回结果如下

```js
{
  render: "with(this){return _m(0)}",
  staticRenderFns: [
    "with(this){return _c('div',{staticClass:\"header\"},[_v(\"hello \"),_c('span',[_v(\"world\")])])}"
  ]
}
```

render 返回的是一个中间代码，而 staticRenderFns 是提取出来的那些静态子树的中间代码描述，显然这里的`\_m(0)`大概意思是说**使用 staticRenderFns 里面下标为 0 位置的中间代码**。

## 总结

parse 生成的 AST，描述了元素自身属性，元素之间的关系，用特定的结构向我们展示了整个要生成是个怎样的 DOM。codegen 通过\_c，\_v，\_m 这些函数，说明了每一步要用什么工具，怎么做能够生成这个 DOM。

parse 有点像是给你菜谱，而 codegen 是给你把各种厨具工具，食材给你准备好了。

这里使用了 with，在运行的时候，this 指向 vm，而这些\_x 函数，也正是我们在 Vue 构造函数 说过的那些实例方法
