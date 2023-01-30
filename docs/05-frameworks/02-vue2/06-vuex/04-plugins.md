# 插件

本文以内置的 devtool 插件为例，说明 Vuex 插件的机制，稍微说一下 Vue.js devtools 这个 Chrome 插件。定义在 src/plugins/devtool.js

```js
const target =
  typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : {};
const devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

export default function devtoolPlugin(store) {
  if (!devtoolHook) return;

  store._devtoolHook = devtoolHook;

  devtoolHook.emit("vuex:init", store);

  devtoolHook.on("vuex:travel-to-state", (targetState) => {
    store.replaceState(targetState);
  });

  store.subscribe(
    (mutation, state) => {
      devtoolHook.emit("vuex:mutation", mutation, state);
    },
    { prepend: true }
  );

  store.subscribeAction(
    (action, state) => {
      devtoolHook.emit("vuex:action", action, state);
    },
    { prepend: true }
  );
}
```

**VUE_DEVTOOLS_GLOBAL_HOOK**是 Vue.js devtools 添加的，然后 devtoolHook 具有 emit 和 on 函数，说明是一个类似 mitt (opens new window)这样的事件发布/订阅器，这里实际上是 EventMitter。

然后下面的 subscribe，就是订阅了每次 mutation 的改动，在每次 mutation 执行之后调用。在介绍 dispatch API 的时候进行过一点简单说明，在 action 的订阅可以分为 before，after,error 三种，默认是 before

```js
subscribeAction (fn, options) {
  const subs = typeof fn === 'function' ? { before: fn } : fn
  return genericSubscribe(subs, this._actionSubscribers, options)
}
```

也就是说这里的订阅函数会在 action 执行之前调用。

## 总结

devtool 插件通过订阅 action 和 mutation，拿到每次 state 修改后的值，把东西给 Chrome 插件，然后 —— 反正你能拿到数据，你也能拿到 window 上的其他东西，自个折腾去吧。

总结...就这样...结束了
