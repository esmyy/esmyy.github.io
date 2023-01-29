# createComponentVNode

在 Vue 源码中有不止一个 createComponent，我根据其作用取了别名。

本文要说的 createComponent 函数，其作用是生成组件对应的 vnode，因此别名为 createComponentVNode。

createComponent 有两种方式调用

```js
// component
vnode = createComponent(Ctor, data, context, children, tag);

// direct component options / constructor
vnode = createComponent(tag, data, context, children);
```

createComponent 伪代码描述如下

```js
export function createComponent(
  Ctor: Class<Component> | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array<VNode>,
  tag?: string
): VNode | Array<VNode> | void {
  normalizeCtor(); // ...

  installComponentHooks(data);

  createPlaceholderVnode(); // ...

  return vnode;
}
```

有三个关键步骤

- **构造子类构造函数**: Ctor 对外支持了多种类型的参数以适用多种调用场景，在内部需要处理成统一的形式。
- **组件钩子安装**: 这个钩子不是 created 那类组件生命周期钩子，而是 内部的 针对 vnode 的创建，比较和销毁等的钩子，两者是关联的，在一定程度上可以理解为一个是外部的，一个是内部的。
- **创建 vnode**: 组件的 vnode 是比较特殊的，这里被称作 placeholder vnode，是一个占位的形式存在，套了个马甲。

## 本文用例

```js
const Demo = {
  template: "<div>demo</div>",
};

new Vue({
  components: {
    Demo,
  },

  template: `<div class="header">
    <demo></demo>
  </div>`,
  el: "#app",
});
```

## 组件构造函数

所谓 **组件构造函数**，就是要在基础类的基础上拓展一些内容，这些拓展的内容是组件自身的 options，每个自定义组件有自己的 Vue 子类构造函数。

```js
if (isUndef(Ctor)) {
  return;
}

const baseCtor = context.$options._base;

// plain options object: turn it into a constructor
if (isObject(Ctor)) {
  Ctor = baseCtor.extend(Ctor);
}

// if at this stage it's not a constructor or an async component factory,
// reject.
if (typeof Ctor !== "function") {
  if (process.env.NODE_ENV !== "production") {
    warn(`Invalid Component definition: ${String(Ctor)}`, context);
  }
  return;
}

// async component
let asyncFactory;
if (isUndef(Ctor.cid)) {
  asyncFactory = Ctor;
  Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
  if (Ctor === undefined) {
    // return a placeholder node for async component, which is rendered
    // as a comment node but preserves all the raw information for the node.
    // the information will be used for async server-rendering and hydration.
    return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
  }
}
// ...
```

先获取到 baseCtor，\_base 其实就是 Vue 构造函数，这是在 initGlobalAPI 里面设置的。 当 Ctor 是一个 plain object 时，使用 extend 生成一个组件构造函数，我们写.vue 文件的时候在 script 部分 export default 导出的对象，就是这里 plain object 的一种。

Ctor 的示例结果如下

```js
{
  cid: 1
  component: function() {}
  directive: function() {}
  extend: function() {}
  extendOptions: {template: "<div>demo</div>", _Ctor: {…}}
  filter: function() {}
  mixin: ƒ (mixin)
  options: {
    components: {}
    directives: {}
    filters: {}
    template: "<div>demo</div>"
    _Ctor: {0: ƒ}
    _base: ƒ Vue(options)
  }
}
```

展示这个示例结果，主要所想在此直观看一下 Ctor 的作用，并再次强调子类构造函数的功能。 可以将这个 Ctor 和 我们写的组件文件对应起来，它其实就是我们写的组件，换了个马甲而已。

注：这个 Ctor 会被设置为 vnode.componentOptions.Ctor，在后面组件的实例化的过程中使用。

## 安装组件钩子

```js
export function createComponent(
  Ctor: Class<Component> | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array<VNode>,
  tag?: string
): VNode | Array<VNode> | void {
  // ...
  data = data || {};
  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  const listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    const slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  installComponentHooks(data);

  // ...
}
```

我们暂时只考虑 `data` 默认为 `undefined` 的情况，这个时候 `installComponentHooks` 函数的参数是一个普通的对象，我们就当做是下面这样的继续学习

```js
{
  on: undefined;
}
```

installComponentHooks 相关代码如下

```js
// inline hooks to be invoked on component VNodes during patch
const componentVNodeHooks = {
  init(vnode: VNodeWithData, hydrating: boolean): ?boolean {
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
  },

  prepatch(oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) {
    const options = vnode.componentOptions;
    const child = (vnode.componentInstance = oldVnode.componentInstance);
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert(vnode: MountedComponentVNode) {
    const { context, componentInstance } = vnode;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, "mounted");
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy(vnode: MountedComponentVNode) {
    const { componentInstance } = vnode;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  },
};

const hooksToMerge = Object.keys(componentVNodeHooks);

function installComponentHooks(data: VNodeData) {
  const hooks = data.hook || (data.hook = {});
  for (let i = 0; i < hooksToMerge.length; i++) {
    const key = hooksToMerge[i];
    const existing = hooks[key];
    const toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;
    }
  }
}
```

`installComponentHooks` 的作用，就是将这些钩子函数添加到 `data.hook` 中，这样每个组件都有了这些钩子，这些钩子暂时还没有使用，直观扫一眼可以看到是和 lifecycle 相关，具体内容在后面 patch 时使用到再说明。安装钩子之后 data 变成下面这样

```js
{
  hook: {
    destroy: function() {
      // ...
    },
    init: function() {
      // ...
    },
    insert: function() {
      // ...
    },
    prepatch: function() {
      // ...
    },
  }
  on: undefined
}
```

## placeholder vnode

```js
export function createComponent(
  Ctor: Class<Component> | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array<VNode>,
  tag?: string
): VNode | Array<VNode> | void {
  // ...

  // return a placeholder vnode
  const name = Ctor.options.name || tag;
  const vnode = new VNode(
    `vue-component-${Ctor.cid}${name ? `-${name}` : ""}`,
    data,
    undefined,
    undefined,
    undefined,
    context,
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  );

  return vnode;
}
```

对于组件来说，生成的 vnode 是一个 placeholder vnode，它只是一个占位。 组件占位节点的标签名包含了 cid 和 name，这能帮助我们在调试时直观地区分出是哪个组件。

最终，生成的组件 VNode 是下面这样的

```js
{
  asyncFactory: undefined
  asyncMeta: undefined
  children: undefined
  componentInstance: undefined
  componentOptions: {propsData: undefined, listeners: undefined, tag: "demo", children: undefined, Ctor: ƒ}
  context: Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}
  data: {on: undefined, hook: {…}}
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
  tag: "vue-component-1-demo"
  text: undefined
  child: (...)
}
```

需要注意的是，占位节点的 elm 和 children 始终是为空的。

## 总结

创建组件的 vnode 有三个步骤

- 生成组件构造函数
- 安装默认的内部钩子
- 实例化生成 vnode

组件包含着复用能力，而复用，就体现在一个组件多个实例，在内部实现上，这体现在每个组件继承自 Vue，构造自己的构造函数。

创建组件 vnode 过程中的钩子，是针对 vnode 而言的，相当于对于组件而言，在 vnode 也有一个生命周期。
