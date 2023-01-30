# createElm

createElm 在 patch 过程中调用，负责根据 vnode 生成 DOM 元素并插入到对应的位置。

## 函数定义

createElm 核心逻辑简化如下

```js
function createElm(
  vnode,
  insertedVnodeQueue,
  parentElm,
  refElm,
  nested,
  ownerArray,
  index
) {
  vnode.isRootInsert = !nested; // for transition enter check
  if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
    return;
  }

  const data = vnode.data;
  const children = vnode.children;
  const tag = vnode.tag;
  if (isDef(tag)) {
    vnode.elm = vnode.ns
      ? nodeOps.createElementNS(vnode.ns, tag)
      : nodeOps.createElement(tag, vnode);
    setScope(vnode);

    createChildren(vnode, children, insertedVnodeQueue);
    if (isDef(data)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
    }
    insert(parentElm, vnode.elm, refElm);
  } else if (isTrue(vnode.isComment)) {
    vnode.elm = nodeOps.createComment(vnode.text);
    insert(parentElm, vnode.elm, refElm);
  } else {
    vnode.elm = nodeOps.createTextNode(vnode.text);
    insert(parentElm, vnode.elm, refElm);
  }
}
```

这个函数并没有返回值，生成 vnode 对应的 DOM 节点，并保存在 vnode.elm。 根据 vnode 继续向下对其 vnode.children 深度优先递归执行 createElm，这样所有的节点都完成 elm 的生成。 在生成 vnode.elm 之后，调用 insert 函数将 vnode.elm 插入到对应的父级 DOM 节点中。对于根节点而言，insert 就是插入到页面中，这样最终整个应用生成的内容，也就添加到了页面上。

createElm 主要分成两种情况

组件的 DOM 生成: 组件类型的 vnode 转换的过程，调用 createComponent 完成
其他类型节点的 DOM 生成：包含普通元素，注释和文本等

## createComponent

组件类型的节点通过 createComponent 生成对应的 DOM 元素

```js
if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
  return;
}
```

从其不做判断而直接 return 来看，可知函数内部应当是先包含了 vnode 为组件的判断，然后再是 elm 的生成。

```js
import { activeInstance } from "../instance/lifecycle";

function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
  let i = vnode.data;
  if (isDef(i)) {
    // @block1
    const isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
    if (isDef((i = i.hook)) && isDef((i = i.init))) {
      // @block2
      i(vnode, false /* hydrating */);
    }
    // after calling the init hook, if the vnode is a child component
    // it should've created a child instance and mounted it. the child
    // component also has set the placeholder vnode's elm.
    // in that case we can just return the element and be done.
    if (isDef(vnode.componentInstance)) {
      // @block3
      initComponent(vnode, insertedVnodeQueue);
      insert(parentElm, vnode.elm, refElm);
      if (isTrue(isReactivated)) {
        // @block4
        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
      }
      return true;
    }
  }
}
```

如果 vnode 名副其实是一个 VNode 实例，那么就会具有 vnode.data 属性，进入 @block1，vnode.hook.init 是 componentVNodeHooks 之一，对于组件进入 @block2。

init 钩子如下

```js
function init(vnode: VNodeWithData, hydrating: boolean): ?boolean {
  if (
    vnode.componentInstance &&
    !vnode.componentInstance._isDestroyed &&
    vnode.data.keepAlive
  ) {
    // kept-alive components, treat as a patch
    const mountedNode: any = vnode; // work around flow
    componentVNodeHooks.prepatch(mountedNode, mountedNode);
  } else {
    const child = (vnode.componentInstance = createComponentInstanceForVnode(
      vnode,
      activeInstance
    ));
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  }
}
```

暂不考虑 keep-alive 的情况，则调用 createComponentInstanceForVnode 去生成了 Vue 的实例，并且保存到了 node.componentInstance 上，最后是调用了 vm.$mount 去执行子组件的挂载。子组件会先于父组件挂载，就在这里体现了。

createComponentInstanceForVnode 代码如下

```js
export function createComponentInstanceForVnode(
  vnode: any, // we know it's MountedComponentVNode but flow doesn't
  parent: any // activeInstance in lifecycle state
): Component {
  const options: InternalComponentOptions = {
    _isComponent: true,
    _parentVnode: vnode,
    parent,
  };
  // check inline-template render functions
  const inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options);
}
```

首先定义了 options 参数，设置了 \_isComponent 表示这是一个组件，并且设置了 \_parentVnode 指向组件的 vnode。

这里的 parent 是在 src/core/instance/lifecycle.js 里面定义的一个共享变量，标记了整个应用里面，当前正在更新的组件实例，它是在每次调用 \_update 时设置的，是唯一的。

vnode.componentOptions.Ctor 组件的子类构造函数是，继承自 Vue，这部分在 创建组件的 VNode 有详细讲解。

init 函数执行之后，vnode.componentInstance 被定义为一个的 Vue 实例，因此进入 @block3

```js
if (isDef(vnode.componentInstance)) {
  // @block3
  initComponent(vnode, insertedVnodeQueue);
  insert(parentElm, vnode.elm, refElm);
  if (isTrue(isReactivated)) {
    // @block4
    reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
  }
  return true;
}
```

initComponent 如下

```js
function initComponent(vnode, insertedVnodeQueue) {
  if (isDef(vnode.data.pendingInsert)) {
    insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    vnode.data.pendingInsert = null;
  }
  vnode.elm = vnode.componentInstance.$el;
  if (isPatchable(vnode)) {
    invokeCreateHooks(vnode, insertedVnodeQueue);
    setScope(vnode);
  } else {
    // empty component root.
    // skip all element-related modules except for ref (#3455)
    registerRef(vnode);
    // make sure to invoke the insert hook
    insertedVnodeQueue.push(vnode);
  }
}
```

这里有两个关注点

- 将 pendingInsert 加入到 insertedVnodeQueue 里面，将 vnode 加入到 insertedVnodeQueue 里面
- 设置 vnode.elm 为组件实例的 $el 实例

insertedVnodeQueue 就是记录这里生成 elm 的顺序，在后面集中调用 insert 钩子而用，在 patch 一文说明，这里只需要知道其在此处更新，在此处合并 pendingInsert 即可。

## createNode

前面我们通过 createComponentNode 设置了 elm 为组件实例的 $el，其实只看到了 set elm，而没有看到 create 的过程。

这一小节我们关注真正的 创建 elm 元素 的位置。

组件的 elm 生成是个递归调用生成的过程，这就是 createElm 的后半部分的内容，如下

```js
const data = vnode.data;
const children = vnode.children;
const tag = vnode.tag;
if (isDef(tag)) {
  vnode.elm = vnode.ns
    ? nodeOps.createElementNS(vnode.ns, tag)
    : nodeOps.createElement(tag, vnode);
  setScope(vnode);

  createChildren(vnode, children, insertedVnodeQueue);
  if (isDef(data)) {
    invokeCreateHooks(vnode, insertedVnodeQueue);
  }
  insert(parentElm, vnode.elm, refElm);
} else if (isTrue(vnode.isComment)) {
  vnode.elm = nodeOps.createComment(vnode.text);
  insert(parentElm, vnode.elm, refElm);
} else {
  vnode.elm = nodeOps.createTextNode(vnode.text);
  insert(parentElm, vnode.elm, refElm);
}
```

首先判断 tag 是否存在，存在的情况下说明可能是有内容的嵌套，调用 createChildren 根据子节点的情况递归调用 createElm 创建子节点的 elm。

如果 tag 不存在，可能是一个注释或者一个文本，这是绝对的叶子节点了，就直接调用相应的工具函数去创建 elm。

这里的 nodeOps 就是对 DOM 节点的一些操作方法的简单封装，在 src/platforms/web/runtime/node-ops.js

```js
// ...
export function createTextNode(text: string): Text {
  return document.createTextNode(text);
}

export function createComment(text: string): Comment {
  return document.createComment(text);
}

export function insertBefore(
  parentNode: Node,
  newNode: Node,
  referenceNode: Node
) {
  parentNode.insertBefore(newNode, referenceNode);
}

export function appendChild(node: Node, child: Node) {
  node.appendChild(child);
}
```

就是原生方法的简单封装，这里就是真正的创建 DOM 元素的地方。

创建完 DOM 元素之后，就是新元素的插入，在 insert 函数中

```js
function insert(parent, elm, ref) {
  if (isDef(parent)) {
    if (isDef(ref)) {
      if (nodeOps.parentNode(ref) === parent) {
        nodeOps.insertBefore(parent, elm, ref);
      }
    } else {
      nodeOps.appendChild(parent, elm);
    }
  }
}
```

ref 是老的 DOM 节点的引用，根据 ref 去定位，insert 或者 append 到对应的位置。

## 总结

createElm 负责根据 VDOM 去生成 DOM，这是一个深度递归的过程。

对于每个 vnode 先生成其对应的 DOM 元素(elm)，然后递归创建子节点的 elm，在创建子节点之后，调用 insert 函数将新的 elm 插入到对应的位置。

elm 的创建是一个先父后子的过程，而插入是一个先子后父的过程。对于根节点来说，parentElm 就是 #app 对应的父元素，那么根元素这一步的插入，就是最终添加到页面。
