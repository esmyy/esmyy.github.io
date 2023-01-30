# Virtual DOM

DOM 本身就是一种抽象描述，而我们所说的 Virtual DOM 就是另一种描述而已。VDOM 就像一种本地化的描述，根据我们的需要去抽象一个结构，方便我们使用。

虚拟 DOM 的作用有两个方面

- 减少 JavaScript 直接操作 DOM 的计算成本
- 通过虚拟 DOM 这一层抽象，将渲染过程和平台解耦，提供了跨平台的能力

前者的核心是 `diff` 算法，而对于后者，既然提供了一层抽象描述，那么针对不同的平台只是需要做实现。

## VDOM Tree

看个直观的示例感受一下什么是 VDOM。下面的这个 html

```js
<div class="header">hello</div>
```

用 VDOM 描述如下

```js
{
  asyncFactory: undefined
  asyncMeta: undefined
  children: [
    {
      asyncFactory: undefined
      asyncMeta: undefined
      children: undefined
      componentInstance: undefined
      componentOptions: undefined
      context: undefined
      data: undefined
      elm: undefined
      fnContext: undefined
      fnOptions: undefined
      fnScopeId: undefined
      isAsyncPlaceholder: false
      isCloned: false
      isComment: false
      isOnce: false
      isRootInsert: true
      isStatic: false
      key: undefined
      ns: undefined
      parent: undefined
      raw: false
      tag: undefined
      text: "hello"
    }
  ]
  componentInstance: undefined
  componentOptions: undefined
  context: // ...
  data: undefined
  elm: undefined
  fnContext: undefined
  fnOptions: undefined
  fnScopeId: undefined
  isAsyncPlaceholder: false
  isCloned: false
  isComment: false
  isOnce: false
  isRootInsert: true
  isStatic: false
  key: undefined
  ns: undefined
  parent: undefined
  raw: false
  tag: "div"
  text: undefined
}
```

## VNode

VNode 是 虚拟 DOM 树中每个节点的结构定义，在 src/core/vdom/vnode.js

```js
export default class VNode {
  tag: string | void;
  data: VNodeData | void;
  children: ?Array<VNode>;
  text: string | void;
  elm: Node | void;
  ns: string | void;
  context: Component | void; // rendered in this component's scope
  key: string | number | void;
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: Object | void;
  isAsyncPlaceholder: boolean;
  ssrContext: Object | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions: ?ComponentOptions; // for SSR caching
  devtoolsMeta: ?Object; // used to store functional render context for devtools
  fnScopeId: ?string; // functional scope id support

  constructor(
    tag?: string,
    data?: VNodeData,
    children?: ?Array<VNode>,
    text?: string,
    elm?: Node,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  }

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  get child(): Component | void {
    return this.componentInstance;
  }
}
```

VNode 并不仅仅是对 DOM 元素做一个简单的抽象，还添加了很多标志和引用属性，这是与 Vue 框架具体实现相关的，不同的框架有不同的抽象实现

## VDOM 与渲染

`VDOM` 是对 DOM 的抽象，是用于渲染的，因此是在渲染前进行的创建。

渲染的基本过程：在 `vm.\_render` 函数中调用编译过程生成的 compileToFunctions 去生成 render 方法，在初次渲染时调用 render 生成 VDOM Tree，然后根据 VDOM Tree 生成每个 vnode 节点对应的 DOM 元素，然后插入到对应的位置上。

更新的基本过程：要更新的组件重新生成 VDOM Tree，新旧的 VDOM Tree 进行 patch，更新对应的 DOM 元素。
