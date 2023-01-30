# Watcher

Watcher 实例化是了解渲染过程的关键入口，本文并不具体说明渲染和更新过程，只是概略地说明 Watcher 实例化的过程。为了解渲染和更新打个前站。

## 前置内容

在 mountComponent 中 Watcher 实例化相关代码如下

```js
export function mountComponent(
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  // ...省略
  callHook(vm, "beforeMount");

  // ...省略
  updateComponent = () => {
    vm._update(vm._render(), hydrating);
  };

  new Watcher(
    vm,
    updateComponent,
    noop,
    {
      before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, "beforeUpdate");
        }
      },
    },
    true /* isRenderWatcher */
  );

  // ...
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, "mounted");
  }
  return vm;
}
```

updateComponent 将 render 和 update 联系起来，而其调用在 Watcher 实例化的过程中，因此 new Watcher 是继续深入学习 mount 的关键入口。按照调用栈去走，需要找到调用的位置，大概了解这个过程，然后再来研究 `vm._render` 和 `vm._update` 这两个关键内容。

## 构造函数

```js
export default class Watcher {
  vm: Component;
  // ...省略其他属性

  constructor(
    vm: Component,
    expOrFn: string | Function,
    cb: Function,
    options?: ?Object,
    isRenderWatcher?: boolean
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before; // 这个为什么不判断类型呢
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];

    // Set是去重的数组
    this.depIds = new Set();
    this.newDepIds = new Set();
    this.expression =
      process.env.NODE_ENV !== "production" ? expOrFn.toString() : "";
    // parse expression for getter
    if (typeof expOrFn === "function") {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        process.env.NODE_ENV !== "production" &&
          warn(
            `Failed watching path: "${expOrFn}" ` +
              "Watcher only accepts simple dot-delimited paths. " +
              "For full control, use a function instead.",
            vm
          );
      }
    }
    this.value = this.lazy ? undefined : this.get();
  }

  // ...暂时省略其他方法
}
```

首先将当前实例保存到 `vm._watcher` 属性上，同时推入 `vm._watchers` 数组

```js
if (isRenderWatcher) {
  vm._watcher = this;
}
vm._watchers.push(this);
```

继续往下看

```js
if (options) {
  this.deep = !!options.deep;
  this.user = !!options.user;
  this.lazy = !!options.lazy;
  this.sync = !!options.sync;
  this.before = options.before; // 这个为什么不判断类型呢
} else {
  this.deep = this.user = this.lazy = this.sync = false;
}
this.cb = cb;
this.id = ++uid; // uid for batching
this.active = true;
this.dirty = this.lazy; // for lazy watchers
this.deps = [];
this.newDeps = [];

this.depIds = new Set();
this.newDepIds = new Set();
this.expression =
  process.env.NODE_ENV !== "production" ? expOrFn.toString() : "";
```

这一堆的设置，都是些属性的初始化，没有更深层模块或者实例方法调用，这些初始化不能提供能帮助我们理解的有效信息。

👨‍💻‍ Go On... 👨‍💻‍

```js
if (typeof expOrFn === "function") {
  this.getter = expOrFn;
} else {
  this.getter = parsePath(expOrFn);
  if (!this.getter) {
    this.getter = noop;
    process.env.NODE_ENV !== "production" &&
      warn(
        `Failed watching path: "${expOrFn}" ` +
          "Watcher only accepts simple dot-delimited paths. " +
          "For full control, use a function instead.",
        vm
      );
  }
}

this.value = this.lazy ? undefined : this.get();
```

这里看起来就有点料了，`getter` 这个命名是有特殊含义的，所以看到之后就需要额外注意一下。`expOrFn` 参数就是我们所关注的 `updateComponent` 函数，看到这里眼前一亮，但是 getter 也只是个赋值，没有涉及到调用，我们关注的是它在哪里调用。

在最后，调用了 get 方法，这是构造函数的最后一行代码了，而我们还没看到**期望看到的 updateComponent 调用**，因此这个看起来简单的 get 调用，值得期待

```js
export default class Watcher {
  vm: Component;
  // ...省略其他属性

  constructor(
    vm: Component,
    expOrFn: string | Function,
    cb: Function,
    options?: ?Object,
    isRenderWatcher?: boolean
  ) {
    // ...
  }
  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  get() {
    pushTarget(this);
    let value;
    const vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`);
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  }

  // ...省略其他方法
}
```

终于看到了期望看到的内容，这里调用了 **this.getter.call(vm, vm)**，也就是调用了 **updateComponent**，作用是绑定上下文到这个 vm 上。

## 总结

从编译过程的中间代码到页面展示，必然会有渲染，DOM 生成等等的第一次主动调用执行的过程， 这一切，落在了 updateComponent 这个回调里面。

看 Watcher 的实例化过程，其实想看的就是 updateComponent 是怎么使用的，怎么调用的。

Watcher 在实例化的过程中，会主动调用一次自身的 get 方法，执行一次 updateComponent 函数，这是在当前，我们看到的整个程序继续向下执行的调用。继续跟着 updateComponent 走，就可以看到渲染的地方了。

:::tips
本文只是概略地了解了 Watcher 实例化的过程，Watcher 是一个非常核心的内容，它的具体方法，它的使用，需要结合具体的过程去分析。
:::
