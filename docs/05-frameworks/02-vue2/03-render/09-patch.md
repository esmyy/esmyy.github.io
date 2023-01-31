# patch

patch 的输入是 VDOM Tree，输出是 DOM Tree，是将虚拟 DOM 转换为真实 DOM 的所在。

注：为方便表述，本文所说的渲染指的是生成 DOM 的过程。

## 前置内容

patch 的调用在 vm.\_update 函数里面，在 src/core/instance/lifecycle.js 文件

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
    // updates
    vm.$el = vm.__patch__(prevVnode, vnode);
  }
};
```

也就是初次渲染调用第一个 **patch**，update 调用第二个，初次渲染有服务端还是客户端的区别，更新都是在客户端。

## 本文用例

```js
const Demo = {
  template: "<span>{{msg}}</span>",
  data() {
    return {
      msg: "山路元无雨",
    };
  },
  mounted() {
    setTimeout(() => {
      this.msg = "空翠湿人衣";
    }, 3000);
  },
};

const App = {
  components: {
    Demo,
  },

  template: `<div class="header">
    <demo></demo>
  </div>`,
  el: "#app",
};

new Vue(App);
```

## patch 函数定义

**vm.patch** 定义在 src/platforms/web/entry-runtime.js

```js
import { patch } from "./patch";
// ...

Vue.prototype.__patch__ = inBrowser ? patch : noop;
```

这里做了一个简单的运行环境判断，只在浏览器才需要进行 patch，在 server 端并不涉及到比对

再看 src/core/vdom/patch 的内容

```js title=src/core/vdom/patch
import * as nodeOps from "web/runtime/node-ops";
import { createPatchFunction } from "core/vdom/patch";
import baseModules from "core/vdom/modules/index";
import platformModules from "web/runtime/modules/index";

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules);

export const patch: Function = createPatchFunction({ nodeOps, modules });
```

从上面的导入导出结构，可以看到 createPatchFunction 是一个高阶函数，返回的 patch 函数如下

```js
function patch(oldVnode, vnode, hydrating, removeOnly) {
  if (isUndef(vnode)) {
    if (isDef(oldVnode)) invokeDestroyHook(oldVnode);
    return;
  }

  let isInitialPatch = false;
  const insertedVnodeQueue = [];

  if (isUndef(oldVnode)) {
    // @block1 非根组件初次渲染
    // empty mount (likely as component), create new root element
    isInitialPatch = true;
    createElm(vnode, insertedVnodeQueue);
  } else {
    // @block2 组件更新 或 根组件初次渲染
    const isRealElement = isDef(oldVnode.nodeType);
    if (!isRealElement && sameVnode(oldVnode, vnode)) {
      // @block3 组件更新 —— 新老节点相同的情况
      // patch existing root node
      patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
    } else {
      if (isRealElement) {
        // ...@block4 根组件初次渲染
        // mounting to a real element
        // check if this is server-rendered content and if we can perform
        // a successful hydration.
        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
          oldVnode.removeAttribute(SSR_ATTR);
          hydrating = true;
        }

        if (isTrue(hydrating)) {
          if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
            invokeInsertHook(vnode, insertedVnodeQueue, true);
            return oldVnode;
          } else if (process.env.NODE_ENV !== "production") {
            warn(
              "The client-side rendered virtual DOM tree is not matching " +
                "server-rendered content. This is likely caused by incorrect " +
                "HTML markup, for example nesting block-level elements inside " +
                "<p>, or missing <tbody>. Bailing hydration and performing " +
                "full client-side render."
            );
          }
        }
        // either not server-rendered, or hydration failed.
        // create an empty node and replace it
        oldVnode = emptyNodeAt(oldVnode);
      }

      // @block5 组件更新 —— 新老节点不同的情况
      // replacing existing element
      const oldElm = oldVnode.elm;
      const parentElm = nodeOps.parentNode(oldElm);

      // create new node
      createElm(
        vnode,
        insertedVnodeQueue,
        // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm,
        nodeOps.nextSibling(oldElm)
      );

      // update parent placeholder node element, recursively
      if (isDef(vnode.parent)) {
        let ancestor = vnode.parent;
        const patchable = isPatchable(vnode);
        while (ancestor) {
          for (let i = 0; i < cbs.destroy.length; ++i) {
            cbs.destroy[i](ancestor);
          }
          ancestor.elm = vnode.elm;
          if (patchable) {
            for (let i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, ancestor);
            }
            // #6513
            // invoke insert hooks that may have been merged by create hooks.
            // e.g. for directives that uses the "inserted" hook.
            const insert = ancestor.data.hook.insert;
            if (insert.merged) {
              // start at index 1 to avoid re-invoking component mounted hook
              for (let i = 1; i < insert.fns.length; i++) {
                insert.fns[i]();
              }
            }
          } else {
            registerRef(ancestor);
          }
          ancestor = ancestor.parent;
        }
      }

      // destroy old node
      if (isDef(parentElm)) {
        removeVnodes([oldVnode], 0, 0);
      } else if (isDef(oldVnode.tag)) {
        invokeDestroyHook(oldVnode);
      }
    }
  }

  invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
  return vnode.elm;
}
```

上面使用 @block 标记了 patch 各主要区块，标记了各块内容的主要功能。 主要是根据新老节点判断是什么场景的比对，是初始化还是更新，根据不同的情况执行不同的比对过程。 具体内容在下面各小节结合具体例子说明

## 根组件初次渲染

对于根组件初次渲染，显然执行的是

```js
// initial render
vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
```

注意此时将 vm.$el 作为 oldVnode 参数传入，则一次进入上面所述的 @block4 和 @block5。

在 @block4 中，根据 vm.$el 创建了一个 oldVnode

```js
oldVnode = {
  asyncFactory: undefined
  asyncMeta: undefined
  children: []
  componentInstance: undefined
  componentOptions: undefined
  context: undefined
  data: {}
  elm: div#app // DOM 元素，原 vm.$el 指向的 DOM 元素
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
  child: (...)
}
```

则在 @block5 中

```js
const oldElm = oldVnode.elm;
const parentElm = nodeOps.parentNode(oldElm);
```

这里的 oldElm 就是 div#app 这个 DOM，而 parentElm 将是 body 元素。

接下来就到了最重要的 createElm 函数

```js
// create new node
createElm(
  vnode,
  insertedVnodeQueue,
  // extremely rare edge case: do not insert if old element is in a
  // leaving transition. Only happens when combining transition +
  // keep-alive + HOCs. (#4590)
  oldElm._leaveCb ? null : parentElm,
  nodeOps.nextSibling(oldElm)
);
```

首先看其参数，传入了 vnode 和 parentElm。

createElm 是从 VNode 到 Node，从 VDOM 到 DOM 过程的所在，是 DOM 元素创建和插入的地方，核心中的核心，详细说明单独写在了 [创建 Node](/docs/frameworks/vue2/render/create-element) 。

这里不对 createElm 做详细展开，但需要概述一下其功能。 在 createElm 内部，会生成 vnode 对应的 DOM 节点，并保存在 vnode.elm， 根据 vnode 继续向下对其 vnode.children 深度优先递归执行 createElm，这样所有的节点都完成 elm 的生成。

createElm 有一个很关键的地方是它会完成 elm 的插入，它会调用 insert 函数

```js
insert(parentElm, vnode.elm, refElm);
```

refElm 是 oldElm 的 nextSibling，insert 的作用就是将 elm insert/append 到父节点对应的位置。 对于本文示例的根节点而言，insert 就是插入到了 body 中，这样整个应用生成的内容，也就添加到了页面上。

## 非根组件初次渲染

Demo 组件初次生成 DOM 时，调用的是

```js
// initial render
vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
```

此时 vm.$el 的值是 undefined，因此 patch 函数进入 @block1 执行

```js
if (isUndef(oldVnode)) {
  // empty mount (likely as component), create new root element
  isInitialPatch = true;
  createElm(vnode, insertedVnodeQueue);
}
```

注意此处的 createElm 并没有传递第 3 个参数 parentElm，而根据上一小节的描述，我们知道 createElm 是需要设置 DOM 元素的父子关系的，这是怎么回事呢？ 这就涉及到 placeholder vnode 的知识了，这里的 vnode，其实是占位节点，而不是组件真实的根 vnode 节点。

Demo 组件的占位节点，长下面这样

```js
{
  children: undefined
  elm: undefined
  tag: "vue-component-1-demo"
  text: undefined
  child: (...)
  parent: undefined
  // ...
}
```

注意其 children 属性和 parent 属性，在 createElm 时，会根据这个 tag，去生成对应组件子 VDOM 树，如下

```js
demo = {
  children: [
    {
      // ...
      tag: undefined
      text: "demo"
      elm: text // DOM 文本节点
    }
  ]
  componentInstance: undefined
  componentOptions: undefined
  context: VueComponent {_uid: 1, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
  data: undefined
  parent: VNode {tag: "vue-component-1-demo", data: {…}, children: undefined, text: undefined, elm: undefined, …}
  elm: undefined
  raw: false
  tag: "span"
  text: undefined
  // ...
}
```

此时 demo.parent 是占位节点，最终插入后

占位组件(placeholder)的 elm 会变成 demo.elm
demo.elm 会插入到 `<div class="header">` 这个元素中
总结来说，对于非根组件，在 VDOM 树中是以 placeholder node 的形式存在，根据 placeholder node 可以生成组件的 VDOM(记为 C-VDOM)，进而生成 DOM。 组件对应的 DOM 会被保存到 placeholder.elm，C-VDOM 更像一个中间产物，并不会保存。

## 视图更新

当 Model 改变之后，如果需要触发 View 更新，则首先会调用 `vm._render`，根据中间代码与 Model，去生成新的 VDOM。

所谓的 diff，diff 啥？就是新老虚拟 DOM 树的比较，而所谓 VDOM 的性能优势，就体现在根据新老 VDOM 比较，进而生成 DOM 这个过程。

视图更新的情况，涉及到诸多比较，在 [视图更新](../04-reactivity/05-view-update.md) 单独说明。

## 总结

从输入输出来说，patch 输入的 VDOM Tree，输出是 DOM。

通过深度优先递归遍历，每个 VNode 生成自身的 DOM，保存在 elm 属性上，并插入到父级 DOM 中，而最终根组件插入到父级 DOM，就是添加到页面。

对于非根组件来说，在 VDOM 树中是以 placeholder node 的形式存在，根据 placeholder node 可以生成组件的 VDOM(记为 C-VDOM)，进而生成 DOM。 组件对应的 DOM 会被保存到 placeholder.elm，C-VDOM 更像一个中间产物，并不会保存。
