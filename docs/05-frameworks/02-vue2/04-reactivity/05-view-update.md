# 视图更新

一般而言的组件更新，其实是指视图更新，为了和组件内部状态，数据等的更新区别，本文明确指视图更新。

## 前置内容

当视图依赖的数据改变时，会通知 render watcher，render watcher 调用 updateComponent 执行 vm.\_update，而 update 的核心过程是 patch 过程，patch 中新旧节点的比较规则，就是所谓的 diff 算法。

```js
return function patch(oldVnode, vnode, hydrating, removeOnly) {
  if (isUndef(vnode)) {
    if (isDef(oldVnode)) invokeDestroyHook(oldVnode);
    return;
  }

  let isInitialPatch = false;
  const insertedVnodeQueue = [];

  if (isUndef(oldVnode)) {
    // ...
  } else {
    const isRealElement = isDef(oldVnode.nodeType);
    if (!isRealElement && sameVnode(oldVnode, vnode)) {
      // @block1
      patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
    } else {
      // @block2
      // ...
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
};
```

初始化的过程，在 patch 已经说明了，在此只研究更新的情况。主要分成两种情况

- 新旧节点相同：对应代码中的 @block1
- 新旧节点不同：对应代码中的 @block2

## 节点相同的含义

更新时 oldVnode 和 vnode 都不为空，这个时候会进行 sameVnode 比较

```js
function sameVnode(a, b) {
  return (
    a.key === b.key &&
    ((a.tag === b.tag &&
      a.isComment === b.isComment &&
      isDef(a.data) === isDef(b.data) &&
      sameInputType(a, b)) ||
      (isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)))
  );
}

function sameInputType(a, b) {
  if (a.tag !== "input") return true;
  let i;
  const typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
  const typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
  return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB));
}
```

这是比较两个组件 vnode 节点是否一致的情况，最关键的是 key，在 key 一致的情况下，再判断同步、异步组件的其他一些属性是否相同。对于 input 元素的比较条件稍微复杂一点，因为 input 随着 type 的不同，功能和表现很不一样。

可以理解为所谓相同节点，就是没有本质的改变还能够复用的节点，而不同的节点，就是根本不能复用了。

## 新老节点相同

当新老节点相同时执行 patchVnode

```js
function patchVnode(
  oldVnode,
  vnode,
  insertedVnodeQueue,
  ownerArray,
  index,
  removeOnly
) {
  if (oldVnode === vnode) {
    return;
  }

  if (isDef(vnode.elm) && isDef(ownerArray)) {
    // clone reused vnode
    vnode = ownerArray[index] = cloneVNode(vnode);
  }

  const elm = (vnode.elm = oldVnode.elm);

  if (isTrue(oldVnode.isAsyncPlaceholder)) {
    if (isDef(vnode.asyncFactory.resolved)) {
      hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
    } else {
      vnode.isAsyncPlaceholder = true;
    }
    return;
  }

  // reuse element for static trees.
  // note we only do this if the vnode is cloned -
  // if the new node is not cloned it means the render functions have been
  // reset by the hot-reload-api and we need to do a proper re-render.
  if (
    isTrue(vnode.isStatic) &&
    isTrue(oldVnode.isStatic) &&
    vnode.key === oldVnode.key &&
    (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
  ) {
    vnode.componentInstance = oldVnode.componentInstance;
    return;
  }

  // @s1 prepatch钩子调用
  let i;
  const data = vnode.data;
  if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
    i(oldVnode, vnode);
  }

  // @s2 update钩子调用
  const oldCh = oldVnode.children;
  const ch = vnode.children;
  if (isDef(data) && isPatchable(vnode)) {
    for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
    if (isDef((i = data.hook)) && isDef((i = i.update))) i(oldVnode, vnode);
  }

  // @s3 DOM替换
  if (isUndef(vnode.text)) {
    if (isDef(oldCh) && isDef(ch)) {
      if (oldCh !== ch)
        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
    } else if (isDef(ch)) {
      if (process.env.NODE_ENV !== "production") {
        checkDuplicateKeys(ch);
      }
      if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, "");
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
    } else if (isDef(oldCh)) {
      removeVnodes(oldCh, 0, oldCh.length - 1);
    } else if (isDef(oldVnode.text)) {
      nodeOps.setTextContent(elm, "");
    }
  } else if (oldVnode.text !== vnode.text) {
    nodeOps.setTextContent(elm, vnode.text);
  }

  // @s4 postpatch
  if (isDef(data)) {
    if (isDef((i = data.hook)) && isDef((i = i.postpatch))) i(oldVnode, vnode);
  }
}
```

比对的基本逻辑是两个节点进行比较，保留一部分能够保留的，更新那些必要更新的内容，并执行相应的钩子函数，主要内容在代码中标记了 4 个部分 @s1 - @s4。下面依次说明主要步骤内容

### prepatch 钩子调用

```js
let i;
const data = vnode.data;
if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
  i(oldVnode, vnode);
}
```

判断是一个组件类型的节点时，执行 prepatch 钩子，定义在 src/core/vdom/create-component.js 中

```js
prepatch (oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) {
  const options = vnode.componentOptions
  const child = vnode.componentInstance = oldVnode.componentInstance
  updateChildComponent(
    child,
    options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
  )
},
```

看这个调用的参数之间的关系，像是要将旧的 instance 和新的 vnode 关联起来做更新。
用的参数之间的关系，像是要将旧的 instance 和新的 vnode 关联起来做更新。updateChildComponent 定义在 src/core/instance/lifecycle.js，

```js
export function updateChildComponent(
  vm: Component,
  propsData: ?Object,
  listeners: ?Object,
  parentVnode: MountedComponentVNode,
  renderChildren: ?Array<VNode>
) {
  if (process.env.NODE_ENV !== "production") {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  const newScopedSlots = parentVnode.data.scopedSlots;
  const oldScopedSlots = vm.$scopedSlots;
  const hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  const needsForceUpdate = !!(
    renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    const props = vm._props;
    const propKeys = vm.$options._propKeys || [];
    for (let i = 0; i < propKeys.length; i++) {
      const key = propKeys[i];
      const propOptions: any = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  const oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== "production") {
    isUpdatingChildComponent = false;
  }
}
```

代码有点长，但并不复杂，由于 vnode 改变，组件 vnode 对应的 vm 上的一些属性也要更新，这里就是将新的 vnode 的 attrs 和 listeners 等更新到 vm 上面。通过这个 prepatch，我们可以知道，更新组件时并非直接创建新的 vm 替代，而是在已有 vm 的基础上去做更新。

### update 钩子调用

```js
const oldCh = oldVnode.children;
const ch = vnode.children;
if (isDef(data) && isPatchable(vnode)) {
  for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
  if (isDef((i = data.hook)) && isDef((i = i.update))) i(oldVnode, vnode);
}
```

先缓存了新老节点的 children，然后去执行各 module 的 update 钩子，比如说在 prepatch 时更新了的 attrs，listeners 等，这里就是执行这些模块的 update 钩子函数。然后最后是执行 vnode 本身的 update 钩子函数。

### elm 更新

在 vm 更新之后，就是更新 DOM 了

```js
const oldCh = oldVnode.children;
const ch = vnode.children;

if (isUndef(vnode.text)) {
  if (isDef(oldCh) && isDef(ch)) {
    if (oldCh !== ch)
      updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
  } else if (isDef(ch)) {
    if (process.env.NODE_ENV !== "production") {
      checkDuplicateKeys(ch);
    }
    if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, "");
    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
  } else if (isDef(oldCh)) {
    removeVnodes(oldCh, 0, oldCh.length - 1);
  } else if (isDef(oldVnode.text)) {
    nodeOps.setTextContent(elm, "");
  }
} else if (oldVnode.text !== vnode.text) {
  nodeOps.setTextContent(elm, vnode.text); // 这里就是 elm.textContent = vnode.text
}
```

这里 nodeOps 是一些 DOM 操作函数的封装。这部分是判断如果是文本节点，则直接对 elm 进行文本的替换。对于非文本节点，根据 oldCh 和 ch 的情况进行处理，有以下几种情况：

- oldCh 和 ch 都有：这种情况调用 updateChildren 进行子节点的比对更新
- 只有 ch ：如果旧的节点时文本，那么先清空文本，然后再将新节点插入到 elm 下
- 只有 oldCh ：说明新节点啥也没有，则调用 removeVnodes 做老节点的清理
- oldCh 和 ch 都没有：这种情况其实就是原来有文本，现在文本清空了

这个新旧节点的子节点判断处理的过程，有点类似两个二叉树的比较或合并，如果有一方已经是叶子节点，那么就不用继续递归深入了。 updateChildren 后面单独进行说明。

### postpatch 钩子调用

```js
if (isDef(data)) {
  if (isDef((i = data.hook)) && isDef((i = i.postpatch))) i(oldVnode, vnode);
}
```

最后判断一下如果有 postpatch 钩子则执行。

总的来说，对于 sameVnode 的情况，就是 vnode 是新的，尽可能地去尝试复用，而不是根据新的 vnode 更新 vm，进而更新 elm

## 新老节点不同

新老节点不同时，就没法复用了。要做的事情简单来说是用新的节点替换掉老的节点，这个时候主要有 3 个步骤

1. 创建新节点
2. 更新占位节点
3. 销毁老节点

### 创建新节点

```js
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
```

首先保存 oldElm 和 parentElm，然后调用 createElm 根据 vnode 去生成 newElm，createElm 中会以 oldElm 作为插入位置的参考调用 insertBefore，以将 newElm 插入到 parentElm 里面去。具体创建和插入的过程说明在 [创建 Node](/docs/frameworks/vue2/render/create-elm) 。

### 更新占位节点

```js
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
```

如果 vnode.parent 成立，说明是子组件，在父组件使用的时候，子组件是以一个 placeholder node 的身份存在的，这里就是递归查找占位节点，更新占位节点的 elm 为 vnode.elm，也就是 DOM 的引用。其他的一些钩子函数的调用暂时不去关注。

### 销毁老节点

```js
// destroy old node
if (isDef(parentElm)) {
  removeVnodes([oldVnode], 0, 0);
} else if (isDef(oldVnode.tag)) {
  invokeDestroyHook(oldVnode);
}
```

如果父元素存在，调用 removeVnodes，否则如果不是一个文本节点，就执行 invokeDestroyHook。相关的函数如下

```js
function removeVnodes(vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    const ch = vnodes[startIdx];
    if (isDef(ch)) {
      if (isDef(ch.tag)) {
        removeAndInvokeRemoveHook(ch);
        invokeDestroyHook(ch);
      } else {
        // Text node
        removeNode(ch.elm);
      }
    }
  }
}

function invokeDestroyHook(vnode) {
  let i, j;
  const data = vnode.data;
  if (isDef(data)) {
    if (isDef((i = data.hook)) && isDef((i = i.destroy))) i(vnode);
    for (i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
  }
  if (isDef((i = vnode.children))) {
    for (j = 0; j < vnode.children.length; ++j) {
      invokeDestroyHook(vnode.children[j]);
    }
  }
}

function removeAndInvokeRemoveHook(vnode, rm) {
  if (isDef(rm) || isDef(vnode.data)) {
    let i;
    const listeners = cbs.remove.length + 1;
    if (isDef(rm)) {
      // we have a recursively passed down rm callback
      // increase the listeners count
      rm.listeners += listeners;
    } else {
      // directly removing
      rm = createRmCb(vnode.elm, listeners);
    }
    // recursively invoke hooks on child component root node
    if (
      isDef((i = vnode.componentInstance)) &&
      isDef((i = i._vnode)) &&
      isDef(i.data)
    ) {
      removeAndInvokeRemoveHook(i, rm);
    }
    for (i = 0; i < cbs.remove.length; ++i) {
      cbs.remove[i](vnode, rm);
    }
    if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
      i(vnode, rm);
    } else {
      rm();
    }
  } else {
    removeNode(vnode.elm);
  }
}

function removeNode(el) {
  const parent = nodeOps.parentNode(el);
  // element may have already been removed due to v-html / v-text
  if (isDef(parent)) {
    nodeOps.removeChild(parent, el);
  }
}
```

cbs 就是 attrs, directives, events 等这些与标签属性相关的模块的钩子函数。

- removeVnodes：执行 vnode 的删除，包含相关的 DOM 的删除，钩子调用等
- invokeDestroyHook：执行 vnode 本身的 destroy 钩子，以及与当前节点相关的属性 destroy 钩子，理解为执行我自己的销毁，执行附加在我身上的内容的销毁。
- removeAndInvokeRemoveHook：这里的 remove 是指对应 vnode.elm DOM 元素从文档中移除，功能是删除 DOM 元素并执行 remove 相关钩子。

## updateChildren

在 VDOM Tree 的比对过程中，如果两个节点判断出是相同的，且都具有子节点，通过 updateChildren 继续向下比对子节点。代码如下

```js
function updateChildren(
  parentElm,
  oldCh,
  newCh,
  insertedVnodeQueue,
  removeOnly
) {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let oldKeyToIdx, idxInOld, vnodeToMove, refElm;

  // removeOnly is a special flag used only by <transition-group>
  // to ensure removed elements stay in correct relative positions
  // during leaving transitions
  const canMove = !removeOnly;

  if (process.env.NODE_ENV !== "production") {
    checkDuplicateKeys(newCh);
  }

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
    } else if (isUndef(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(
        oldStartVnode,
        newStartVnode,
        insertedVnodeQueue,
        newCh,
        newStartIdx
      );
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(
        oldEndVnode,
        newEndVnode,
        insertedVnodeQueue,
        newCh,
        newEndIdx
      );
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      // Vnode moved right
      patchVnode(
        oldStartVnode,
        newEndVnode,
        insertedVnodeQueue,
        newCh,
        newEndIdx
      );
      canMove &&
        nodeOps.insertBefore(
          parentElm,
          oldStartVnode.elm,
          nodeOps.nextSibling(oldEndVnode.elm)
        );
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      // Vnode moved left
      patchVnode(
        oldEndVnode,
        newStartVnode,
        insertedVnodeQueue,
        newCh,
        newStartIdx
      );
      canMove &&
        nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      if (isUndef(oldKeyToIdx))
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdx[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
      if (isUndef(idxInOld)) {
        // New element
        createElm(
          newStartVnode,
          insertedVnodeQueue,
          parentElm,
          oldStartVnode.elm,
          false,
          newCh,
          newStartIdx
        );
      } else {
        vnodeToMove = oldCh[idxInOld];
        if (sameVnode(vnodeToMove, newStartVnode)) {
          patchVnode(
            vnodeToMove,
            newStartVnode,
            insertedVnodeQueue,
            newCh,
            newStartIdx
          );
          oldCh[idxInOld] = undefined;
          canMove &&
            nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
        } else {
          // same key but different element. treat as new element
          createElm(
            newStartVnode,
            insertedVnodeQueue,
            parentElm,
            oldStartVnode.elm,
            false,
            newCh,
            newStartIdx
          );
        }
      }
      newStartVnode = newCh[++newStartIdx];
    }
  }
  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
    addVnodes(
      parentElm,
      refElm,
      newCh,
      newStartIdx,
      newEndIdx,
      insertedVnodeQueue
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
}
```

很多时候成堆的 `if-else` 虽然看起来不太优雅，但是却逻辑清楚，这儿并没有咋看起来那么可怕，仔细去看一下就能理解其逻辑。

### 用例说明

举个例子进行说明

```js
new Vue({
  data() {
    return {
      list: [
        { title: '呱 1', id: 1 },
        { title: '呱 2', id: 2 },
        { title: '呱 3', id: 3},
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.list = [
        { title: '咕 2', id: 2 },
        { title: '咕 1', id: 1 },
        { title: '咕 3', id: 3},
        { title: '咕 4', id: 4},
      ];
    }, 3000);
  },

  template: `<div class="header">
    <li v-for="item in list" :key="item.id">{{item.title}}</li>
  </div>`,
  el: '#app',
}
```

在定时器执行之后，显然 oldCh 和 newCh 参数如下

```js
// oldCh
[
  { key: 1, tag: 'li', elm: /*<li>呱 1</li>元素引用*/ },
  { key: 2, tag: 'li',  elm: /*<li>呱 2</li>元素引用*/ },
  { key: 3, tag: 'li',  elm: /*<li>呱 3</li>元素引用*/ }
]

// newCh
[
  { key: 2, elm: undefined }, // title: '咕 2'
  { key: 1, elm: undefined }, // title: '咕 1',
  { key: 3, elm: undefined }, // title: '咕 3',
  { key: 4, elm: undefined }, // title: '咕 4',
]
```

那一堆条件判断做的事情，是在 oldCh 和 newCh 数组中，尽量通过 sameVnode 在这两个数组里面确定对应关系，如果找到之后调用 patchVnode，根据 olcCh 的 elm 去生成新的 elm 保存到 newCh 的 elm 上，如果没有相同节点就调用 createElm 直接取生成新的 elm。那堆条件判断可以分成三个部分

- 前面 2 个判断：设置 oldStartVnode 和 oldEndVnode，是初始化两个指针。
- 中间 4 个判断：newCh 和 oldCh 的头尾指针节点之间直接做对比，判断是否相同，对于 children 来说，往往是前后元素的增减，顺序的变换，因此这样的对比其实有点类似于“快捷方式”。
- 最后的 else 判断：如果 newCh 和 oldCh 的头尾指针节点都不相同，那么就生成 oldCh 节点的 keyMap，去查找 newStartVnode 在 oldCh 中的下标位置，能找到就 patchVnode 比较，找不到就 createElm 生成新的。

## 总结

视图更新时，首先根据中间代码及数据，去生成新的 VDOM Tree，根据 oldTree 和 newTree 去逐个进行节点比较。

节点的更新，主要分成新旧节点相同和新旧节点不同两种情况

- 新旧节点相同：尝试复用，对于组件，如果可以复用，就通过 newVnode 结合 oldVm 对 vm 进行更新，而非创建新的 vm，更新了 vm 后，再重新生成组件对应的 DOM。
- 新旧节点不同：创建新的
