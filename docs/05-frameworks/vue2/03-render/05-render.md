# render

编译结果 -> VDOM

本文所说的 render，指的是使用 render 函数，利用中间代码生成 VDOM 的过程。

涉及到 render 函数和 `vm._render` 函数。

## 前置内容

根据 [Watcher](/docs/frameworks/vue2/render/watcher) 中的说明，Watcher 实例化的过程会主动调用 updateComponent

updateComponent = () => {
vm.\_update(vm.\_render(), hydrating)
}
updateComponent 会调用 vm.\_update，其第一个参数是 vm.\_render()，这就是本文研究的内容。

## 本文用例

```js
const app = new Vue({
  template: '<div class="header">hello <span>world</span></div>',
});

app.$mount("#app");
```

## vm.\_render

定义在 src/core/instance/render.js

```js
Vue.prototype._render = function (): VNode {
  const vm: Component = this;
  const { render, _parentVnode } = vm.$options;

  setSlots(); // ...

  vm.$vnode = _parentVnode;
  // render self
  let vnode;
  try {
    currentRenderingInstance = vm;
    vnode = render.call(vm._renderProxy, vm.$createElement);
  } catch (e) {
    handleRenderError(); // ...
  } finally {
    currentRenderingInstance = null;
  }

  if (Array.isArray(vnode) && vnode.length === 1) {
    vnode = vnode[0];
  }

  if (!(vnode instanceof VNode)) {
    vnode = createEmptyVNode();
  }

  vnode.parent = _parentVnode;
  return vnode;
};
```

`_render` 是原型上的一个方法，因此 `vm` 指向 Vue 实例，我们重点关注下面这个调用

```js
vnode = render.call(vm._renderProxy, vm.$createElement);
```

这个 render 就是在编译过程中最后通过 compileToFunctions 返回的包裹中间代码的函数

```js
{
  render: function anonymous() {
    with(this) {
      return _m(0)
    }
  },
  staticRenderFns: [
    function anonymous() {
      with(this){
        return _c('div',{staticClass:"header"},[_v("hello "),_c('span',[_v("world")])])}
    }
  ]
}
```

在生产环境下，`_renderProxy` 就是 `vm`，这里使用了 `with` 绑定了上下文为 vm，因此这里的 `_m`，`_c`，`_v` 是 `vm` 实例的方法，分别用以创建各类 VNode 元素。执行之后返回的 vnode 如下

```js
vnode = {
  asyncFactory: undefined
  asyncMeta: undefined
  children: (2) [VNode, VNode]
  componentInstance: undefined
  componentOptions: undefined
  context: Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
  data: {staticClass: "header"}
  elm: undefined
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
  __proto__: Object
  _parentVnode: undefined
}
```

关于 render 执行，至此我们知道返回的是一个 VNode，这个 VNode 不是单个节点，已经通过 children 和 parent 维护了层次关系，因此可以说 render 返回 VDOM Tree。

**注意，elm 属性保存的是对应的 DOM，注意此时 elm 属性为 undefined，在后面生成 DOM 时可对比理解**

继续深入，需要了解这些 `_c`，`_v` 这些内容，`_m` 是创建静态节点，`_c` 其实是最知名的 `$createElement` 方法，而 `_v` 是 createTextVNode，这些实例方法我们在后面单独讲解。

## 总结

render 这个词，当它是一个名词时，说的是编译阶段生成的 render 函数，当描述的是一个动作时，表示的是调用 render 函数生成虚拟 DOM 的过程。

如果只能记住一句话 —— render 函数的作用是中间代码生成虚拟 DOM 树

至此，从 template 开始，经历了以下流程

```text
1. template(字符串)
2. parse(生成 AST)
3. optimize(AST 优化)
4. codegen(中间代码生成)
5. compileToFunctions(中间代码转化为 render 函数)
6. render(生成 VDOM Tree)
```
