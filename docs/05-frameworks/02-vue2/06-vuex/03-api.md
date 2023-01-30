# API

本文说明 getters, state, dispatch 和 commit

## 前置内容

Store 构造函数如下

```js
export class Store {
  constructor(options = {}) {
    // Auto install if it is not done yet and `window` has `Vue`.
    // To allow users to avoid auto-installation in some cases,
    // this code should be placed here. See #731
    if (!Vue && typeof window !== "undefined" && window.Vue) {
      install(window.Vue);
    }

    if (__DEV__) {
      assert(Vue, `must call Vue.use(Vuex) before creating a store instance.`);
      assert(
        typeof Promise !== "undefined",
        `vuex requires a Promise polyfill in this browser.`
      );
      assert(
        this instanceof Store,
        `store must be called with the new operator.`
      );
    }

    const { plugins = [], strict = false } = options;

    // store internal state
    this._committing = false;
    this._actions = Object.create(null);
    this._actionSubscribers = [];
    this._mutations = Object.create(null);
    this._wrappedGetters = Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = Object.create(null);
    this._subscribers = [];

    this._watcherVM = new Vue();
    this._makeLocalGettersCache = Object.create(null);

    // bind commit and dispatch to self
    const store = this;
    const { dispatch, commit } = this;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store, type, payload);
    };
    this.commit = function boundCommit(type, payload, options) {
      return commit.call(store, type, payload, options);
    };

    // strict mode
    this.strict = strict;

    const state = this._modules.root.state;

    // init root module.
    // this also recursively registers all sub-modules
    // and collects all module getters inside this._wrappedGetters
    installModule(this, state, [], this._modules.root);

    // initialize the store vm, which is responsible for the reactivity
    // (also registers _wrappedGetters as computed properties)
    resetStoreVM(this, state);

    // apply plugins
    plugins.forEach((plugin) => plugin(this));

    const useDevtools =
      options.devtools !== undefined ? options.devtools : Vue.config.devtools;
    if (useDevtools) {
      devtoolPlugin(this);
    }
  }
  // ...
}
```

## getters

与 getters 相关的内容如下

```js
this._wrappedGetters = Object.create(null);
// ...
resetStoreVM(this, state);
```

\_wrappedGetters 就是在 modules 处理的过程中设置的 getters 的收集，这个在 模块 一文的图中有展示，本文不再赘述，总之根据例子得到的结果如下

```js
_wrappedGetters: {
  'b/reversedNums': ƒ wrappedGetter(store)
  doubleCount: ƒ wrappedGetter(store)
}
```

resetStoreVM 如下

```js
function resetStoreVM(store, state, hot) {
  const oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  const wrappedGetters = store._wrappedGetters;
  const computed = {};
  forEachValue(wrappedGetters, (fn, key) => {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
      enumerable: true, // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  const silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state,
    },
    computed,
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(() => {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(() => oldVm.$destroy());
  }
}
```

首先是定义了 computed 变量，通过 forEachValue 遍历对于每个 getter，调用 partial 函数设置 computed 中的同名属性

```js
export function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}
```

也就是说，computed 会变成这个样子

```js
computed: {
  'b/reversedNums': ƒ ()
  doubleCount: ƒ ()
}
```

那么当我们通过 new Vue 去生成 store.\_vm 的时候

```js
store._vm = new Vue({
  data: {
    $$state: state,
  },
  computed,
});
```

在 store.\_vm 上，就会有 doubleCount 和 b/reversedNums 方法，那么通过下面这个设置

```js
Object.defineProperty(store.getters, key, {
  get: () => store._vm[key],
  enumerable: true, // for local getters
});
```

访问 store.getters.doubleCount，就会调用 store.\_vm.doubleCount 函数，getter 就是这样具备了缓存的能力，将它当做 computed 属性即可。

## state

在 resetStoreVM 中，state 作为 vm 初始化的 $$state 属性

```js
store._vm = new Vue({
  data: {
    $$state: state,
  },
  computed,
});
```

这个 state 就是我们在 模块安装 的时候的到的包含所有模块的 state 的对象，在 Vue 实例化的过程中会使其具备数据响应能力。当获取 state 时，如果不再是直接从 state 对象中取值，而是从 $$state 中取值，就可以获得响应能力。

如下，Store 设置了对 state 的 getter 和 setter

```js
export class Store {
  constructor(options = {}) {
    // ...
  }

  get state() {
    return this._vm._data.$$state;
  }

  set state(v) {
    if (__DEV__) {
      assert(
        false,
        `use store.replaceState() to explicit replace store state.`
      );
    }
  }
}
```

当我们防卫 store.state 的时候，就是在访问 store.\_vm.\_data.$$state。像下面这样获取，在 state.status 更新之后，status 也会随之更新。

## commit

方法定义如下

```js
export class Store {
  constructor (options = {}) {
    this._committing = false
    const store = this
    const { dispatch, commit } = this
    this.dispatch = function boundDispatch (type, payload) {
      return dispatch.call(store, type, payload)
    }
    this.commit = function boundCommit (type, payload, options) {
      return commit.call(store, type, payload, options)
    }
    // ...
  }

  commit (_type, _payload, _options) {
    // check object-style commit
    const {
      type,
      payload,
      options
    } = unifyObjectStyle(_type, _payload, _options)

    const mutation = { type, payload }
    const entry = this._mutations[type]
    if (!entry) {
      if (__DEV__) {
        console.error(`[vuex] unknown mutation type: ${type}`)
      }
      return
    }

    // 关注这里即可
    this._withCommit(() => {
      entry.forEach(function commitIterator (handler) {
        handler(payload)
      })
    })

    this._subscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .forEach(sub => sub(mutation, this.state))

    if (
      __DEV__ &&
      options && options.silent
    ) {
      console.warn(
        `[vuex] mutation type: ${type}. Silent option has been removed. ` +
        'Use the filter functionality in the vue-devtools'
      )
    }
  }

  _withCommit (fn) {
    const committing = this._committing
    this._committing = true
    fn()
    this._committing = committing
  }

  // ...
}
_subscribers是和插件相关的，如果有差距，在调用 mutation 更新之后，调用插件的订阅函数。现在就关注下面这一部分即可

const entry = this._mutations[type]
this._withCommit(() => {
  entry.forEach(function commitIterator (handler) {
    handler(payload)
  })
})
这里就是从_mutations取出type指定的函数然后调用，所有的同名 mutation 都会执行。看下面这个简单的示例

const moduleB = {
  namespaced: true,
  state: () => ({
    nums: []
  }),
  mutations: {
    add (state, val) {
      state.nums.push(val);
    }
  },
}

const store = new Vuex.Store({
  modules: {
    b: moduleB,
  }
})
```

对于 add 函数来说，state 就是 store.state.b，或者说是 store.\_vm.$$state.b，这是在 模块安装 的时候就设置好的闭包里面传递的，add 函数执行就是直接操作 state.b ，没有其他过程了。

## dispatch

```js
export class Store {
  constructor(options = {}) {
    this._committing = false;
    const store = this;
    const { dispatch, commit } = this;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store, type, payload);
    };
    this.commit = function boundCommit(type, payload, options) {
      return commit.call(store, type, payload, options);
    };
    // ...
  }

  dispatch(_type, _payload) {
    // check object-style dispatch
    const { type, payload } = unifyObjectStyle(_type, _payload);

    const action = { type, payload };
    const entry = this._actions[type];
    if (!entry) {
      if (__DEV__) {
        console.error(`[vuex] unknown action type: ${type}`);
      }
      return;
    }

    // 插件相关，暂不关注
    try {
      this._actionSubscribers
        .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
        .filter((sub) => sub.before)
        .forEach((sub) => sub.before(action, this.state));
    } catch (e) {
      if (__DEV__) {
        console.warn(`[vuex] error in before action subscribers: `);
        console.error(e);
      }
    }

    // 这里是执行 actions
    const result =
      entry.length > 1
        ? Promise.all(entry.map((handler) => handler(payload)))
        : entry[0](payload);

    return new Promise((resolve, reject) => {
      result.then(
        (res) => {
          try {
            this._actionSubscribers
              .filter((sub) => sub.after)
              .forEach((sub) => sub.after(action, this.state));
          } catch (e) {
            if (__DEV__) {
              console.warn(`[vuex] error in after action subscribers: `);
              console.error(e);
            }
          }
          resolve(res);
        },
        (error) => {
          try {
            this._actionSubscribers
              .filter((sub) => sub.error)
              .forEach((sub) => sub.error(action, this.state, error));
          } catch (e) {
            if (__DEV__) {
              console.warn(`[vuex] error in error action subscribers: `);
              console.error(e);
            }
          }
          reject(error);
        }
      );
    });
  }

  // ...
}
```

首先判断了同名的 actions 是否多个，然后去执行，如果有多个则使用 Promise.all 封装。在初始化 registerAction 的时候做了处理，action 的执行会返回 Promise。 在 result.then 里面，其实 actions 已经执行完成了，这一层 new Promise 只是为了处理插件相关的事情，如果没有插件，直接返回 result 就可以了。

对于插件，通过\_actionSubscribers 保存了注册的对于 action 调用的订阅，在 action 执行前后分别调用对应订阅函数。

## 总结

Store 的数据具有响应式能力，是通过直接 Vue 实例来实现的，state 对应到 vm.$data，而 getter 是利用 computed 属性实现。

getters, actions, mutations 最终都是要对 state 进行 get 或者 set

```js
const moduleB = {
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
};
```

state 和 context 是 Vuex 提供给我们开发的时候使用的，我们可以直接使用，不需要手动去获取到与当前模块对应的 state 或者 commit。state 和 context 参数，都是在初始化的时候通过闭包保存下来的参数，已经处理好了模块的对应关系，那么当我们去调用 dispatch 和 commit 的时候，事情就变得简单了，干就完了。
