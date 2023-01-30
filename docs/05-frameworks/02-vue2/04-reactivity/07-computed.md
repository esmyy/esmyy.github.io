# Computed

computed 对应一类数据更新订阅者，我称之为 computed watcher。

## 本文用例

```js
new Vue({
  data: {
    name: "mayueyue",
    age: 25,
  },
  template: `<div>
    <div>{{ welcomeText }}</div>
  </div>`,
  computed: {
    welcomeText() {
      return `Hello, ${this.name}`;
    },
  },
  mounted() {
    setTimeout(() => {
      this.name = "fengpeng";
    }, 2000);
  },
}).$mount("#app");
```

## 初始化

在 src/core/instance/state.js

```js
function initComputed(vm: Component, computed: Object) {
  // $flow-disable-line
  const watchers = (vm._computedWatchers = Object.create(null));
  // computed properties are just getters during SSR
  const isSSR = isServerRendering();

  for (const key in computed) {
    const userDef = computed[key];
    const getter = typeof userDef === "function" ? userDef : userDef.get;
    if (process.env.NODE_ENV !== "production" && getter == null) {
      warn(`Getter is missing for computed property "${key}".`, vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== "production") {
      if (key in vm.$data) {
        warn(`The computed property "${key}" is already defined in data.`, vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(
          `The computed property "${key}" is already defined as a prop.`,
          vm
        );
      }
    }
  }
}
```

对每个 computed 属性，获取到定义的 getter 函数，然后实例化 Watcher，在 Watcher 的 constructor 中会调用 getter，完成依赖收集的过程。最后是将各个 computed 属性添加到 vm 对象上。

## 触发更新

搞清楚 watcher，从 watcher 的角度出发理解即可

- vm 初始化，创建了 render watcher
- data 初始化时通过 defineReactive 闭包给 name 属性设置了一个依赖收集器 dep
- welcomeText 的初始化，getter 访问了 name 属性，则订阅了 name 的更新
- 视图中使用了 welcomeText，则 render watcher 订阅了 welcomeText 的更新

于是 name 的修改，依次通知 welcomeText 订阅者，render watcher。
