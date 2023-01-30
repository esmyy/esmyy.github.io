# install

基于 3.x，插件安装函数定义在 src/store.js

```js
export function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (__DEV__) {
      console.error(
        "[vuex] already installed. Vue.use(Vuex) should be called only once."
      );
    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}
```

applyMixin 定义在 src/mixin.js

```js
export default function (Vue) {
  const version = Number(Vue.version.split(".")[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    const _init = Vue.prototype._init;
    Vue.prototype._init = function (options = {}) {
      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit() {
    const options = this.$options;
    // store injection
    if (options.store) {
      this.$store =
        typeof options.store === "function" ? options.store() : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}
```

对于 2 以上版本，就是使用 Vue.mixin 添加了一个 beforeCreate 钩子，对于 1.x 版本做了一个兼容处理。

在 vuexInit 中，将 $store 设置到每个 vm 实例上。Vuex 的这个设置，和 Vue Router 是类似的，从中我们也可以看到，Vuex 的实例并非绑定到 Vue.prototype 上，而是绑定在了一个 Vue 实例里面，也就是说你真的想的话，是可以搞多个 Vuex 实例的。

在 Vue Router 中，这个接收 options 参数的 Vue 实例被称为 \_routerRoot，这里其实也可以称为一个\_storeRoot。
