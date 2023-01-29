# new Vue

对于任意一个实例，都可以分为 实例的生成 和 实例的使用 两个阶段。于 Vue 而言，`created` 钩子的发布，是生成和使用这两个阶段的分隔界限。

本文说明从 `new Vue` 到 `created` 之间的事情，说明 实例的生成 过程。

## \_init

Vue 构造函数定义在 `src/core/instance/index.js`

```js
import { initMixin } from "./init";
import { stateMixin } from "./state";
import { renderMixin } from "./render";
import { eventsMixin } from "./events";
import { lifecycleMixin } from "./lifecycle";
import { warn } from "../util/index";

function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

export default Vue;
```

new Vue 就是执行了 prototype 上面的\_init 方法，这个方法在 initMixin 当中定义

```js
export function initMixin(Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this;
    // a uid
    vm._uid = uid++;

    // ...

    // a flag to avoid this being observed
    vm._isVue = true;

    // merge options
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor), // 这个也就是Vue这个本身
      options || {},
      vm
    );

    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);

    callHook(vm, "beforeCreate");

    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, "created");

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}
```

结构很清晰，就是合并配置，初始化生命周期、事件中心、渲染，以及常写的 injected, props, methods, data 和 computed 等。

关注 beforeCreate 和 created 这两个 hook，回答以下两个问题：

- beforeCreate 前后的 init 有什么区别？
- beforeCreate 到 created，自然是 create 了一些什么东西，那么是什么呢？

## before beforeCreate

beforeCreate 这个 hook 前的 init 如下

```js
initLifecycle(vm);
initEvents(vm);
initRender(vm);

callHook(vm, "beforeCreate");
```

请想一下这个略微有点绕的问题：

before create，before creating what ？

主角显然是 vm，但是 callHook(vm, 'beforeCreate') 不等于马上要开始 vm 的创建，一旦进入 Vue 构造函数执行的过程，vm 就已经是 creating 了，这里的 before，并不是 before create vm。

那么看看做了些什么吧，如下

```js
// initLifecycle
export function initLifecycle(vm: Component) {
  const options = vm.$options;

  // locate first non-abstract parent
  let parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

// initEvents
export function initEvents(vm: Component) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  const listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

// initRender
export function initRender(vm: Component) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees
  const options = vm.$options;
  const parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
  const renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false);
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true);

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  const parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== "production") {
    defineReactive(
      vm,
      "$attrs",
      (parentData && parentData.attrs) || emptyObject,
      () => {
        !isUpdatingChildComponent && warn(`$attrs is readonly.`, vm);
      },
      true
    );

    defineReactive(
      vm,
      "$listeners",
      options._parentListeners || emptyObject,
      () => {
        !isUpdatingChildComponent && warn(`$listeners is readonly.`, vm);
      },
      true
    );
  } else {
    defineReactive(
      vm,
      "$attrs",
      (parentData && parentData.attrs) || emptyObject,
      null,
      true
    );
    defineReactive(
      vm,
      "$listeners",
      options._parentListeners || emptyObject,
      null,
      true
    );
  }
}
```

这里先不要深入细节，我直接给出一个结论 —— **这里的 init，都是与 new Vue(options) 过程中的 options 无关的初始化**。（这里虽然用到了 options.\_parentListeners、options.\_renderChildren 等属性，但是这些都是是内部属性，并不是用户定义的部分)。

:::info
总结来说，beforeCreate 不是开始创建 vm，而是开始用 options 去设置 vm。

beforeCreate 的意思是 —— 我要开始用 options 去设置 vm 了。
:::

## beforeCreate -> created

beforeCreate 后就是根据 options 去设置 vm 的过程了，即下面几个 init

```js
callHook(vm, "beforeCreate");

initInjections(vm); // injected初始化
initState(vm); // props,data等初始化
initProvide(vm); // provide初始化

callHook(vm, "created");
```

内容如下

```js
export function initInjections(vm: Component) {
  const result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach((key) => {
      // ...省略
      defineReactive(vm, key, result[key]);
    });
    toggleObserving(true);
  }
}

export function initState(vm: Component) {
  vm._watchers = []; // _watchers和_watcher各是做设么用的
  const opts = vm.$options;
  if (opts.props) initProps(vm, opts.props);
  if (opts.methods) initMethods(vm, opts.methods);
  if (opts.data) {
    initData(vm);
  } else {
    observe((vm._data = {}), true /* asRootData */);
  }
  if (opts.computed) initComputed(vm, opts.computed);
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

export function initProvide(vm: Component) {
  const provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
  }
}
```

这几个 init 都是与开发时配置的 options 相关的初始化，比如 provide 、 injected 、 data 和 computed 等。

:::info
beforeCreate 前后区别，之前是与开发配置的 options 无关的初始化，是默认设置，之后是根据 options 去设置 vm，是具体自定义内容的初始化。
:::

## created

```js
callHook(vm, "created");

if (vm.$options.el) {
  vm.$mount(vm.$options.el);
}
```

执行完 `created` 这个 hook 之后，可以理解为 `vm` 实例化的过程已经完成了，后面的是使用的问题。

在 new Vue 时如果传递 el 属性，只是告诉程序在创建完成后按照约定的方式使用，但是对于实例的创建和使用，在逻辑上应该是分开的。如下

```js
const app = new Vue({
  data: {
    message: "页面加载于 " + new Date().toLocaleString(),
  },
});

app.mount("#app");
```

使用这种写法去实例化，就可以很清楚地看到实例的生成和实例的使用两个过程。

## 初始化顺序

在 `_init` 初始化过程中，有两个部分的初始化顺序需要关注

```js
Vue.prototype._init = function (options?: Object) {
  const vm: Component = this;

  // ...省略

  initLifecycle(vm);
  initEvents(vm);
  initRender(vm);

  callHook(vm, "beforeCreate");

  initInjections(vm); // resolve injections before data/props
  initState(vm);
  initProvide(vm); // resolve provide after data/props

  callHook(vm, "created");

  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
};
```

**在 beforeCreate 到 created 之间的初始化**

在 beforeCreate 到 created 之间，设置 vm 的顺序是从 provide 到 options 到 inject，这是一个很自然的顺序。

**initState 中各属性初始化的顺序**

在 initState 中，顺序是 props, methods, data, computed, watch，这个顺序并不需要去记忆，根据平时使用就能推断出来。 比如说，data 属性设置时可以直接获取 props 或者调用 methods 去生成，那自然 props 和 methods 要在 data 之前。如果一定要记这个顺序，可以记为 PMDCW，意为 PM 的宠物。

## 总结

本文说明了从 new Vue 到 created 的过程，这是 Vue 实例的生成过程。

beforeCreate 可以理解为 Before creating vm using options，即应用自定义配置之前。
