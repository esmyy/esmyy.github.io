# update

VDOM -> DOM

update 一般指指组件更新，但本文并不严格限制于组件更新。 本文围绕 vm.\_update 函数，关注的是从 VDOM 到 DOM 的主要过程，这包含了 initial 和 update。

## 前置内容

根据 [Watcher](/docs/frameworks/vue2/render/watcher)中的说明，Watcher 实例化的过程会主动调用 updateComponent

```js
updateComponent = () => {
  vm._update(vm._render(), hydrating);
};
```

updateComponent 会调用 `vm._update`，这是 VDOM 转换成 DOM 所在。

## vm.\_update

定义在 src/core/instance/lifecycle.js

```js
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
  const vm: Component = this;
  const prevEl = vm.$el;
  const prevVnode = vm._vnode;
  const restoreActiveInstance = setActiveInstance(vm);
  vm._vnode = vnode;
  // Vue.prototype.__patch__ is injected in entry points
  // based on the rendering backend used.
  if (!prevVnode) {
    // initial render
    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
  } else {
    vm.$el = vm.__patch__(prevVnode, vnode);
  }
  restoreActiveInstance();
  // update __vue__ reference
  if (prevEl) {
    prevEl.__vue__ = null; // 释放对旧vm的引用
  }
  if (vm.$el) {
    vm.$el.__vue__ = vm; // 更新对vm的引用
  }
  // if parent is an HOC, update its $el as well
  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
    vm.$parent.$el = vm.$el;
  }
  // updated hook is called by the scheduler to ensure that children are
  // updated in a parent's updated hook.
};
```

首先用 prevVnode 保存对 vm.\_vnode 的引用，这个 vm.\_vnode 是用来标记是否已经渲染过，即是 update 还是 initial，其赋值的位置 prevVnode 定义的下方，因此初次进来执行的是第一个**patch**，然后下面更新了**vue**的引用。

这里还用到了 vm.$el作为 patch 的参数，对于根节点，在 initial 时，$el 会被设置为 el 属性对应的 DOM 元素，而对于其他节点，在 initial 时为 undefined。

最终执行之后

```js
vm = {
  $el: div.header { // DOM 对象，仅作示意
    innerHTML: "hello <span>world</span>"
    innerText: "hello world"
    className: "header"
    outerHTML: "<div class=\"header\">hello <span>world</span></div>"
    outerText: "hello world"
    // ...
  },
  _vnode: {
    asyncFactory: undefined
    asyncMeta: undefined
    children: (2) [
      {
        elm: text  // DOM 对象，仅作示意
        text: "hello "
        ownerDocument: document // DOM 对象，仅作示意
        parentElement: div.header // DOM 对象，仅作示意
        parentNode: div.header // DOM 对象，仅作示意
        // ...
      },
      {
        children: [{
          elm: text  // DOM 对象，仅作示意
          text: "world"
        }]
        tag: "span"
        elm: span  // DOM 对象，仅作示意
      }
    ]
    componentInstance: undefined
    componentOptions: undefined
    context: Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
    data: {staticClass: "header"}
    elm: div.header // 指向所对应的 DOM 节点
    fnContext: undefined
    fnOptions: undefined
    fnScopeId: undefined
    isAsyncPlaceholder: false
    isCloned: false
    isComment: false
    isOnce: false
    isRootInsert: true
    isStatic: true
    key: "__static__0"
    ns: undefined
    parent: undefined
    raw: false
    tag: "div"
    text: undefined
    child: (...)
  }
  // ...
}
```

注意此时，所有的 VNode 节点，都生成了对应的 DOM 元素，而且已经将层级管理处理好了。$el 即 \_vnode.elm，就是我们整个模板对应的 DOM 树了，只需要 append 到页面上就完成展示了。

## 初始化和更新

不管是组件第一次渲染，还是组件更新，都是调用 vm.\_update，也都是调用 updateComponent

```js
updateComponent = () => {
  vm._update(vm._render(), hydrating);
};
```

这意味着组件更新时，也是先创建了新的虚拟 DOM 树的。 常说的 patch 或 diff，都是基于新老虚拟 DOM 树，基于两个 VDOM 的比较

```js
AST -> VDOM -> DOM
```

我们所说的虚拟 DOM 的好处，改善的是从 VDOM 到 DOM 的过程，而 AST -> VDOM 这个过程是不可少的。

## 总结

update 负责根据 VDOM 生成 DOM。 update 包含了 初始化选项 和 更新 两种情况，初始化时主动调用了一次，根据不同情况采用不同的**patch**方式来更新$el。

update 深入还有 patch 等多层重要的内容，无法在此讲清楚，因此单独讲解 patch。

至此，从 template 开始，经历了以下流程

```js
1. template(字符串)
2. parse(生成AST)
3. optimize(AST优化)
4. codegen(中间代码生成)
5. compileToFunctions(中间代码转化为render函数)
6. render(生成VDOM Tree)
7. initial update(生成 DOM)
```
