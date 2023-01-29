# 数据初始化

从 data 的初始化开始

```js
new Vue({
  data: {
    message: "123",
    list: [1, 2, 3, 4],
  },
  template: `<div class="menu-list">
    <div>message is: {{message}}</div>
    <ul v-for="item in list" :key="item">{{item}}</ul>
  </div>`,
});
```

## initData

data 的初始化，是在 Vue.prototype.\_init 中，是在 beforeCreat 到 created 之间的 initState

```js
callHook(vm, "beforeCreate");

initInjections(vm); // injected初始化
initState(vm); // props,data等初始化
initProvide(vm); // provide初始化

callHook(vm, "created");
```

initState 定义在 src/core/instance/state.js

```js
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
```

这里就是初始化我们自定义的各个属性的地方，本文关注的是 data，initData

```js
function initData(vm: Component) {
  let data = vm.$options.data;
  data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};

  // ...
  // proxy data on instance
  const keys = Object.keys(data);
  const props = vm.$options.props;
  const methods = vm.$options.methods;
  let i = keys.length;

  // 属性重复性检查
  while (i--) {
    const key = keys[i];
    if (process.env.NODE_ENV !== "production") {
      if (methods && hasOwn(methods, key)) {
        warn(
          `Method "${key}" has already been defined as a data property.`,
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== "production" &&
        warn(
          `The data property "${key}" is already declared as a prop. ` +
            `Use prop default value instead.`,
          vm
        );
    } else if (!isReserved(key)) {
      proxy(vm, `_data`, key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

export function getData(data: Function, vm: Component): any {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, `data()`);
    return {};
  } finally {
    popTarget();
  }
}
```

首先是获取 data 对象，如果是一个函数，就调用 getData 去获取，在 getData 里面通过 call 去指定上下文，因为 data 的初始化里可能会用到 props，method 等实例的其他的属性或方法。

接下来的 while 循环是做一个是否与 props 或者 method 命名重复的检查，isReserved 是判断是否是以\_后者$开头的这些内部保留属性，如果没有重复或内部属性则提示。

检查通过的属性，通过 proxy 代理到内部属性 \_data 上，然后调用 observe 函数设置这些属性的变化监听。

## proxy

定义在 src/core/instance/state.js

```js
export function proxy(target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
```

假设这里是对于 message 属性，那么就是通过 Object.defineProperty 设置了 vm.message 的访问描述器，将 vm.message 代理到了 vm.\_data.message 属性上。

**是不是觉得终于找到了最核心的地方？并没有...**

这个 proxy，只是相当于给 vm.\_data.message 加了个快捷访问，并没有在 getter 或者 setter 做什么事情。我们关注的是它在存取的时候搞了什么事情，为甚能够实现自动更新，期待的目光落在了最后的 observe 函数上。

## observe

调用如下

```js
observe(data, true /* asRootData */);
```

定义在 src/core/observer/index.js

```js
export function observe(value: any, asRootData: ?boolean): Observer | void {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  let ob: Observer | void;
  if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}
```

对于 data 属性初始化，这里 value 是 data 对象，asRootData 是 true，虽然返回了 ob，但是并没有使用，因此关键在于 new Observer 对 data 做了什么。从判断上看，实例化过程中定义了`__ob__`引用，这里的 asRootData 即表示是组件的 data 对象，不是其他子属性。

请注意这里最开始的判断，做了 value 类型的检查，这在后面其他属性再调用 observe 时会用到。

## Observer

定义在 src/core/observer/index.js

```js
export class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // number of vms that have this object as root $data

  constructor(value: any) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, "__ob__", this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  walk(obj: Object) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }

  /**
   * Observe a list of Array items.
   */
  observeArray(items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}
```

看 constructor，首先初始化了一个 Dep(dependence)，这个可以稍后再参考 Dep ，暂时不用关注。然后在 value 上设置了一个 `__ob__` 属性指向 observer 实例，其中 def 函数是对 Object.defineProperty 的一个简单封装，简化了访问描述器的设置。在设置了`__ob__`之后，根据 value 的类别分别处理，其实 value 到这里就 Array 和 Object 两种类别。

## 数组的初始化

数组类型的数据，设置代码如下

```js
if (Array.isArray(value)) {
  if (hasProto) {
    protoAugment(value, arrayMethods);
  } else {
    copyAugment(value, arrayMethods, arrayKeys);
  }
  this.observeArray(value);
}
```

先看 observeArray

```js
/**
 * Observe a list of Array items.
 */
observeArray (items: Array<any>) {
  for (let i = 0, l = items.length; i < l; i++) {
    observe(items[i])
  }
}
```

这个 observeArray 的意思就是，对于数组里面的每一项，如果是一个对象，则设置监听。在 observe 中一开始就会判断，如果 items[i](item) 是一个对象则设置监听，给 item 添加 Observer 实例到 `item.__ob__` 上，如果是个原始值，直接就撂挑子返回了。

其中两个 `xxxAugment` 如下

```js
function protoAugment(target, src: Object) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

function copyAugment(target: Object, src: Object, keys: Array<string>) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    def(target, key, src[key]);
  }
}
```

判断是否支持 `__proto__` ，如果支持，就直接设置其为 arrayMethods，如果不支持，则通过 Object.defineProperty 定义各个方法的 getter 和 setter。

arrayMethods 定义在 src/core/observer/array.js

```js
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})

const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

export arrayMethods;
```

通过 Object.create(Array.prototype) 来创建了 arrayMethods，然后通过遍历数组对 methodsToPatch 列表中的那些数组方法进行了重新定义。当设置 target.**proto** = arrayMethods 后，这个 target 数组的原型就不再是原来的 Array.prototype 了。

methodsToPatch 中的方法，都是那些 修改原数组的方法，在数组修改之后，找出 inserted 的那部分元素，对这些元素执行 observe 初始化，于是新的元素就具备了数据响应能力。

最后是调用 ob.dep.notify 去发布更新。

## 对象的初始化

对于对象的初始化，不管是 data 中的对象属性，还是数组中的对象元素，最终都是会执行 walk 设置

```js
walk (obj: Object) {
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i])
  }
}
```

这个 walk 函数，是数据的初始化过程的终点。在此之前，做了很多事情，改写了数组类型属性的原型，对于每个对象调用了 observe 方法去实例化一个 Observer 实例，但这些事情，其实都还差了最核心的一部分 —— 注册回调。

我们的目标是数据更新时，能够自动响应，这其实等价于说，当修改数据时，调用相应的回调函数。这一切，都着落在 defineReactive 之上。

## defineReactive

```js
export function defineReactive(
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep();

  const property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get;
  const setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  let childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      const value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      const value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return;
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== "production" && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return;
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    },
  });
}
```

先是定义了一个 Dep 的实例 dep ，这个 dep 其实不应该定义在最前面，因为有可能会提前 return 的情况。

接下来判断有无自定义的 getter 和 setter ，进行整合，通过 Object.defineProperty 重新定义了 getter 和 setter。 getter 是依赖收集的过程，通过调用 dep.depend 保存了依赖关系，setter 是派发更新的所在，通过调用 dep.notify 通知相关的依赖方。关于依赖收集和派发更新的内容，后面单独章节进行详细讲解。

## 总结

本文说明了对于 data 数据的处理。

对于 Array 数据，能够检测到其变化是通过重新定义其原型链上的数组方法，相当于在原型链上插入了最近的一级节点。当更新数组时，对新插入的对象添加 observe，发布数组更新事件。

对于 Object 数据(包括 data 返回的对象，子对象，数组元素中的对象等)，则是对每个属性，调用 defineReactive 去定义 getter/setter，以实现依赖收集和更新派发。

在初始化之后，每个 Array 或者 Object 类型的数据都将具有一个 **ob** 属性，引用一个 Observer 实例，这个 Observer 实例，负责维护所有对该数据的订阅。
