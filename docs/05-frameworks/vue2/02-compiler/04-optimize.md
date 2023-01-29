# optimize

是一个 AST，optimize 是对 AST 进行优化

parse 吃的是代码字符串，optimize 吃的是 AST，而 AST 是特定结构的对象，因此相对于解析环节，优化环节简单很多，理解也较为容易，莫慌。

## 前置内容

`optimize` 函数调用的位置在 `src/compiler/index.js`，内容如下

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

本文研究的是这一行

```js
optimize(ast, options);
```

## optimize 函数

optimize 定义在 `src/compiler/optimizer.js`，代码如下

```js
/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
export function optimize(root: ?ASTElement, options: CompilerOptions) {
  if (!root) return;
  isStaticKey = genStaticKeysCached(options.staticKeys || "");
  isPlatformReservedTag = options.isReservedTag || no;

  // first pass: mark all non-static nodes.
  markStatic(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}
```

注释已经对优化的目的进行了说明，AST 树优化的目的是检测静态子树，对静态子树做标记，对于在渲染后不会再变化的内容，在 patch 过程中直接跳过，减少不必要的创建，比对过程。

核心是 `markStatic` 和 `markStaticRoots` 这两个函数调用，下面单独说明。

## 标记静态节点

`markStatic` 代码如下

```js
function markStatic(node: ASTNode) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== "slot" &&
      node.attrsMap["inline-template"] == null
    ) {
      return;
    }

    // @block1
    for (let i = 0, l = node.children.length; i < l; i++) {
      const child = node.children[i];
      markStatic(child);
      if (!child.static) {
        node.static = false;
      }
    }

    // @block2
    if (node.ifConditions) {
      for (let i = 1, l = node.ifConditions.length; i < l; i++) {
        const block = node.ifConditions[i].block;
        markStatic(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}
```

markStatic 首先调用了 isStatic(node)来设置 node.static 标记是否是一个静态节点。

node.type 为 1 表示是一个普通节点，进入 if 块以后

- **@block1**：遍历子节点递归调用 markStatic(child)进行 static 标记，有任意的子节点不是静态节点，则父节点的 static 设为 false

- **@block2**：对于 v-else-if 和 v-else，其关系统一挂在其前面的 v-if 所在元素的 node.ifConditions 属性中，并不在 children 里面，需要遍历 ifConditions 进行 static 标记。

:::info
官方注释对 `markStatic` 的作用写的是 **mark all non-static nodes**，这个和其名称是相反的，这是因为判断是从相反的方向进行的。

mark 了 non-static 的，剩下的就是 static 的了，我们理解 markStatic 的功能是 mark all static nodes 就可以了。
:::

## 静态节点判断

说完了主要流程，来看一下 `isStatic` 函数的实现，这有助于理解什么是所谓的静态节点，代码如下

```js
function isStatic(node: ASTNode): boolean {
  if (node.type === 2) {
    // expression
    return false;
  }
  if (node.type === 3) {
    // text
    return true;
  }
  return !!(
    node.pre ||
    (!node.hasBindings && // no dynamic bindings
      !node.if &&
      !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey))
  );
}
```

首先补充说明一下 node.type 3 个可能的值

| node.type |         含义         |
| :-------: | :------------------: |
|     1     |    AST 节点默认值    |
|     2     | expression，动态节点 |
|     3     |        纯文本        |

最简单的判断是 node.type 等于 3 或者使用了 v-pre 指令，其他情况需要同时满足以下条件：

- !hasBindings：即没绑定动态属性
- !node.if：没有 v-if
- !node.for：没有 v-for
- !isBuiltInTag：不是 slot 和 component
- !isPlatformReservedTag：不是 HTML 原生标签
- !isDirectChildOfTemplateFor：不是 for 或者 template 的直接子元素
- 所有的属性都是静态属性

## 标记静态根节点

```js
function markStaticRoots(node: ASTNode, isInFor: boolean) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (
      node.static &&
      node.children.length &&
      !(node.children.length === 1 && node.children[0].type === 3)
    ) {
      node.staticRoot = true;
      return;
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (let i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (let i = 1, l = node.ifConditions.length; i < l; i++) {
        markStaticRoots(node.ifConditions[i].block, isInFor);
      }
    }
  }
}
```

对于已经判断出是 `static` 或者使用了 `v-once` 的结点，如果是在 for 循环里面，就标记 staticInFor 为 true，这个应该在后面会有用到，
再接下来就是递归对 children 和 ifConditions 里面的节点进行遍历和标记。

代码中的这块注释

```js
// For a node to qualify as a static root, it should have children that
// are not just static text. Otherwise the cost of hoisting out will
// outweigh the benefits and it's better off to just always render it fresh.
```

是说如果是元素内部只有一段纯文本，就没必要标记，staticRoot 意思是指那些包含子元素的静态节点，如果只有文本，就像是叶子节点了，没有 root 的说法。

```js
<span>hello world</span>
```

这种情况如果标记为 staticRoot 付出比收益还大，就得不偿失，直接让它保持最新就行。

## 总结

optimize 就是深度遍历 AST，检测每个子树是不是静态节点，对 AST 中的每一个节点都标记了 static 属性，对于 type 为 1 的普通元素，还标记了 staticRoot 属性，这在后面的代码生成过程中会用到。

static 是只针对单个节点的，staticRoot 表示这个节点的整个子树都是静态的，这是两者的区别。

至此我们知道 optimize 做了什么，至于为什么要这么做，需要知道 static，staticRoot 标记在后面是如何使用的，这是下一步要研究的内容。
