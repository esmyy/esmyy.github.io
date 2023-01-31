# 派发更新

大白话说，就是在数据改变了的时候，通知数据的使用方。

派发更新/发布更新，是向谁派发/发布？是向订阅者派发，而谁是订阅者，在 Vue 中就是 Watcher 实例。数据更新的订阅者，具体来说是 Watcher，而非组件，组件的 View 更新，只是其中一类 Watcher 收到通知后的具体行为而已。

## 订阅者分类

此处所说的订阅者，是数据变化的订阅者，那么在 Vue 中，谁需要知道数据变化呢？是以下三类数据使用方：

- 视图：比如 SFC 中 HTML 部分绑定了某个属性，则数据变化时需要更新视图
- computed：依赖属性变化后需要重新计算
- watch：依赖属性变化后，需要执行

在 vm 中，与 watcher 相关的属性有 vm.\_watcher 和 vm.\_watchers

- vm.\_watcher：单个 Watcher 实例，这个是所谓的 render watcher，对应视图
- vm.\_watchers：computed 和 watch 对应的 watcher 都保存在此处。这类 watcher 也被称作 user watcher，我分别称为 computed watcher 和 watch watcher

## 前置内容

在 data 初始化时，对于 Object 类型的属性，会调用 defineReactive 对每个属性定义 getter/setter，以进行依赖收集和更新派发。

```js
walk (obj: Object) {
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i])
  }
}

export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get
  const setter = property && property.set
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key]
  }

  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      // ...
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}
```

setter 就是有效修改数据时必要经过的地方，是对更新进行派发的开始，是本文研究的内容。

## setter

```js
set: function reactiveSetter (newVal) {
  const value = getter ? getter.call(obj) : val
  /* eslint-disable no-self-compare */
  if (newVal === value || (newVal !== newVal && value !== value)) {
    return
  }
  /* eslint-enable no-self-compare */
  if (process.env.NODE_ENV !== 'production' && customSetter) {
    customSetter()
  }
  // #7981: for accessor properties without setter
  if (getter && !setter) return
  if (setter) {
    setter.call(obj, newVal)
  } else {
    val = newVal
  }
  childOb = !shallow && observe(newVal)
  dep.notify()
}
```

对 newVal 和 value 做了一个相等性比较，如果没有改变就直接返回，然后就是调用自定义 setter 或者设置 val 等于新的值。

```js
childOb = !shallow && observe(newVal);
```

就是对新的值做响应式的监听，这就是为什么**重新给整个对象赋值可以触发更新**。

dep.notify() 就是通知所有订阅者 —— 我升级了！

## notify

简单介绍下 dep.notify

```js
export default class Dep {
  // ...
  notify() {
    const subs = this.subs.slice();

    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
```

就是对于每个订阅者调用其 update 方法，这里的订阅者都是 Watcher 实例

```js
export default class Watcher {
  // ...
  update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  }
  // ...
}
```

lazy 是用于 computed 的，而 sync 表示需要立即执行 watcher 的回调，而不是按照普通情况通过 nextTick 执行。现在主要关注 queueWatcher，定义在 src/core/observer/scheduler.js。

```js
let has: { [key: number]: ?true } = {};
let circular: { [key: number]: number } = {};
let waiting = false;
let flushing = false;
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
export function queueWatcher(watcher: Watcher) {
  const id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      let i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (process.env.NODE_ENV !== "production" && !config.async) {
        flushSchedulerQueue();
        return;
      }
      nextTick(flushSchedulerQueue);
    }
  }
}
```

逻辑上而言，调用 update 就是要执行对应的更新，是调用注册在 watcher 上的回调，但这里并不是立即调用，而是引入了 scheduler 调度器对要更新的 watcher 进行管理调度。

scheduler 负责从接收更新消息到调用 updated 生命周期钩子，其作用就是对更新过程进行优化，进行集中更新，而非实时更新。

这里涉及的东西是比较多的，我们使用一个例子进行讲解

```js
new Vue({
  data: {
    name: "fengpeng",
  },
  template: `<div>
    <div>name is: {{name}}</div>
  </div>`,
  mounted() {
    setTimeout(() => {
      this.name = "方南君";
      this.name = "马月月";
    }, 3000);
  },
}).$mount("#app");
```

更新 this.name 时，会经过前面所描述的流程，进入到这里的 queueWatcher 函数。首先通过 has[id]判断 watcher 是否添加到了队列里面，确保每个 watcher 只被加入一次，像这里连续两次的赋值，会两次进入到 queueWatcher，但第二次就不会进入到 if 内部了。

由于这里是第一次更新，!flushing 和!waiting 成立，会将 watcher 推入到队列里面，然后执行了 nextTick(flushSchedulerQueue)，nextTick 需要单独进行讲解，就按照字面意义，理解为下一个的事件循环“tick”中执行即可。

我们先直接取看 flushSchedulerQueue 的内容

```js
/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  let watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort((a, b) => a.id - b.id);

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== "production" && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          "You may have an infinite update loop " +
            (watcher.user
              ? `in watcher with expression "${watcher.expression}"`
              : `in a component render function.`),
          watcher.vm
        );
        break;
      }
    }
  }

  // keep copies of post queues before resetting state
  const activatedQueue = activatedChildren.slice();
  const updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit("flush");
  }
}
```

逐步拆解来理解

```js
queue.sort((a, b) => a.id - b.id);
```

这一步是根据 id 对 watcher 去做排序。在组件初始化的时候，是先创建父组件，然后创建子组件，而且组件内是先设置 computed 和 watch 等内容，然后才是渲染，因此这个排序可以确保以下这几件很重要的事情：

- 确保先父后子的顺序：created 始终是先父后子的，确保这个之后，props 和 injected 等就可以在子组件获取到更新后的值。
- 确保先 user watchers，再 render watcher：所谓的 user watchers 就是 computed 和 watch 对应的 watcher，而 render watcher 是组件视图所用的 watcher，可以理解为代表着 html template 部分。也就是在渲染更新之前，要先计算 computed，要先执行 watch。
- 如果父组件的 watcher 执行期间，子组件被销毁，那么子组件的 watcher 就可以跳过了。

接下来是遍历队列执行 watcher

```js
// do not cache length because more watchers might be pushed
// as we run existing watchers
for (index = 0; index < queue.length; index++) {
  watcher = queue[index];
  if (watcher.before) {
    watcher.before();
  }
  id = watcher.id;
  has[id] = null;
  watcher.run();
}
```

这里注释说，不要缓存 length 属性，因为在 watcher.run 中可能还会增加新的 watcher，在这执行了 watcher.run 函数

```js
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
run () {
  if (this.active) {
    const value = this.get()
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      const oldValue = this.value
      this.value = value
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue)
        } catch (e) {
          handleError(e, this.vm, `callback for watcher "${this.expression}"`)
        }
      } else {
        this.cb.call(this.vm, value, oldValue)
      }
    }
  }
}
```

watcher.run 就是执行了 watcher.get 函数，根据前面在 [Watcher](/docs/frameworks/vue2/render/watcher) 中的说明，对于 render watcher，这个就是进入到 updateComponent 的过程，即更新组件，也就是说 DOM 的更新是在这里实现的。

再往下

```js
// keep copies of post queues before resetting state
const activatedQueue = activatedChildren.slice();
const updatedQueue = queue.slice();
```

activatedQueue 是和 keep-alive 组件相关的，keep-alive 相关的内容后续在其他文章中详细讲解。updatedQueue 将 queue 复制了一份。

继续往下

```js
resetSchedulerState();
```

定义如下

```js
/**
 * Reset the scheduler's state.
 */
function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== "production") {
    circular = {};
  }
  waiting = flushing = false;
}
```

这是重置调度器的状态，重置了 waiting, flushing 状态为初始状态，重置 has 和 index 这些遍历相关迭代判断数据。

最后是执行生命周期钩子函数

```js
// call component updated and activated hooks
callActivatedHooks(activatedQueue);
callUpdatedHooks(updatedQueue);
```

```js
function callUpdatedHooks(queue) {
  let i = queue.length;
  while (i--) {
    const watcher = queue[i];
    const vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, "updated");
    }
  }
}
```

这里是调用 updated 钩子的地方，它的判断其实体现了很多有价值的内容。

首先每个 watcher 都有一个 watcher.vm 指向所在的组件，而 vm.\_watcher 是 render watcher，只有是 vm.\_watcher 的更新才是组件视图渲染更新，需要执行相应的组件钩子，而其他如 computed 所对应的 user watcher，就不需要。

执行完 updated 之后，组件更新的过程就完成了。

## 总结

更新数据时，执行 setter，setter 调用 dep.notify 通知所有的订阅者，这时候引入了更新的优化策略，使用 scheduler 来进行更新的调度，先将所有的订阅者(watcher)添加到 queueWatcher 队列里面，然后调用 nextTick 执行更新。

对于组件更新，需要有这样一个认识 —— 组件更新并不意味着 updated 生命周期钩子的执行。 从一个应用程序的角度看，在调用 updated 钩子之前的 computed 等的更新也是更新，updated 钩子的执行，是一个往往伴随着视图层改变的更新，是一个标志性的状态，但在之前，有很多内部的更新。
