# 模块

本文说明 Store 实例化过程中的 modules，围绕着 modules 的处理过程，理解 state, mutations, actions 各部分组成在内部是如何整合的。

## 本文例子

根据这个示例进行说明

```js
const moduleA = {
  state: () => ({
    count: 0,
  }),
  mutations: {
    increment(state) {
      state.count++;
    },
  },

  modules: {
    aSub: {
      state: () => ({
        age: 0,
      }),
    },
  },

  actions: {
    incrementAction(context) {
      context.commit("increment");
    },
  },

  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
};

const moduleB = {
  namespaced: true,
  state: () => ({
    nums: [],
  }),

  mutations: {
    add(state, val) {
      state.nums.push(val);
    },
  },

  actions: {
    addAction(context, val) {
      context.commit("add", val);
    },
  },

  getters: {
    reversedNums(state) {
      return state.nums.reverse();
    },
  },
};

const store = new Vuex.Store({
  state: () => ({
    status: "open",
  }),
  mutations: {
    toggleStatus(state, status) {
      state.status = state.status === "open" ? "close" : "open";
    },
  },
  modules: {
    a: moduleA,
    b: moduleB,
  },
});
```

请注意，这里设置了 moduleB 的 namespaced 为 true，这个在后面模块安装时会有重要作用。

下面我们从 new Vuex.Store 实例化过程去看 modules 的处理。

## Store

```js
export class Store {
  constructor(options = {}) {
    // Auto install if it is not done yet and `window` has `Vue`.
    // To allow users to avoid auto-installation in some cases,
    // this code should be placed here. See #731
    if (!Vue && typeof window !== "undefined" && window.Vue) {
      install(window.Vue);
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

  // ...暂时省略其他方法
}
```

暂不关注那些空对象属性的初始化，主要可以分成几个内容：

- 模块收集
- 模块安装
- 响应式设置
- commit 和 dispatch 等 API 定义

本文关注模块相关的，只讲前两个

```js
// 模块收集
this._modules = new ModuleCollection(options);

// 模块安装
installModule(this, state, [], this._modules.root);
```

## 模块收集

模块收集即下面这行代码

```js
this._modules = new ModuleCollection(options);
```

ModuleCollection 在 src/module/module-collection.js

```js
export default class ModuleCollection {
  constructor(rawRootModule) {
    // register root module (Vuex.Store options)
    this.register([], rawRootModule, false);
  }

  // ...这里先不展示方法，使用时说明
}
```

rawRootModule 就是 Store 初始化时传入的 options，constructor 里面调用了 register 函数进行 root module 的注册

```js
export default class ModuleCollection {
  // ...

  register(path, rawModule, runtime = true) {
    if (__DEV__) {
      assertRawModule(path, rawModule);
    }

    const newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      const parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }

    // register nested modules
    if (rawModule.modules) {
      forEachValue(rawModule.modules, (rawChildModule, key) => {
        this.register(path.concat(key), rawChildModule, runtime);
      });
    }
  }

  // ...
}
```

首先是调用 new Module 进行实例化，生成 root，判断如果 path.length 为 0 说明是根模块初始化，设置 root，而对于子模块，则设置父子模块关系。下面 if (rawModule.modules)判断如果有嵌套的模块，对每个模块再次调用 register 进行初始化。

这里需要关注 path 的值，在根组件初始化时是[]，在子模块的初始化时，会拼接上子模块的 key，我们在下面讲述 Module 的时候再说明，path 与 父子模块连接的关系。

下面我们来关注核心的 new Module 的过程，在 src/module/module.js

```js
import { forEachValue } from "../util";

// Base data struct for store's module, package with some attribute and method
export default class Module {
  constructor(rawModule, runtime) {
    this.runtime = runtime;
    // Store some children item
    this._children = Object.create(null);
    // Store the origin module object which passed by programmer
    this._rawModule = rawModule;
    const rawState = rawModule.state;

    // Store the origin module's state
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  }

  get namespaced() {
    return !!this._rawModule.namespaced;
  }

  addChild(key, module) {
    this._children[key] = module;
  }

  removeChild(key) {
    delete this._children[key];
  }

  getChild(key) {
    return this._children[key];
  }

  hasChild(key) {
    return key in this._children;
  }

  update(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  }

  forEachChild(fn) {
    forEachValue(this._children, fn);
  }

  forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  }

  forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  }

  forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  }
}
```

在 constructor 里面的处理是比较简单的，只是设置了 children，\_rawModule 和 state 实例属性，并没有做过多的处理，然后提供了非常多的模块操作的方法。

关键的地方在于 register 里面对于子模块注册的那部分处理

```js
export default class ModuleCollection {

const newModule = new Module(rawModule, runtime)
if (path.length === 0) {
  this.root = newModule
} else {
  const parent = this.get(path.slice(0, -1))
  parent.addChild(path[path.length - 1], newModule)
}
```

当 aSub 模块初始化的时候 path 是["a", "aSub"]，这个时候进入 else 逻辑 会调用 get 方法。从 root 开始，根据 path 来查找到 aSub 模块的父级模块，即 moduleA，然后调用 addChild 将 aSub 对应的 module 实例添加到 moduleA.\_children 上。

也就是说，ModuleCollection 处理之后，最终 collect 得到的结果示意如下

```js
{
  root: {
    runtime: false
    state: {
      status: "open"
    }
    namespaced: false
    _rawModule: // 就是 options
    _children: {
      a: {
        runtime: false
        state: {
          count: 0
        }
        namespaced: false
        _rawModule: // 就是 new Vuex.Store(options) 的 options.modules.a
        _children: {
          aSub: {
            runtime: false
            state: {
              age: 0
            }
            namespaced: false
            _rawModule: // options.modules.a.aSub
            _children: {}
          }
        }
      },
      b: {
        runtime: false
        state: {
          nums: []
        }
        namespaced: true
        _rawModule: // options.modules.b
        _children: {}
      }
    }
  }
}
```

这就是所谓的收集的结果了，可以看到核心就是通过\_children 去维护了父子关系。

## 模块安装

模块收集设置了一些标记，通过\_children 属性去维护了模块之间的关系，而模块安装，是在这个基础上，对 state，actions，mutations 等各部分进行整合，以便更方便的进行模块操作。

```js
const state = this._modules.root.state;
// init root module.
// this also recursively registers all sub-modules
// and collects all module getters inside this._wrappedGetters
installModule(this, state, [], this._modules.root);
```

注释中说明，installModule 模块会递归注册所有的模块，并且会收集在 this.\_wrapperdGetters 中的所有 getter，下面我们深入来验证这个说明。

installModule 定义如下

```js
function installModule(store, rootState, path, module, hot) {
  const isRoot = !path.length;
  const namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && __DEV__) {
      console.error(
        `[vuex] duplicate namespace ${namespace} for the namespaced module ${path.join(
          "/"
        )}`
      );
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    const parentState = getNestedState(rootState, path.slice(0, -1));
    const moduleName = path[path.length - 1];
    store._withCommit(() => {
      if (__DEV__) {
        if (moduleName in parentState) {
          console.warn(
            `[vuex] state field "${moduleName}" was overridden by a module with the same name at "${path.join(
              "."
            )}"`
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  const local = (module.context = makeLocalContext(store, namespace, path));

  module.forEachMutation((mutation, key) => {
    const namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction((action, key) => {
    const type = action.root ? key : namespace + key;
    const handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter((getter, key) => {
    const namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild((child, key) => {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}
```

首先请注意这个 getNamespace，它在 src/module/module-collection.js 中，它会根据 path 生成子模块的 namespace，比如这里 moduleA 没有设置命名空间，结果就是 ""，而 moduleB 是 "b/"，注意这里带上了一个/。

考虑 root 模块安装的情况，root 模块安装会跳过前面两个 if 判断，直接进入到下面 module.context 的初始化， 这个 local 就是我们 actions 方法参数中的那个 context

```js
incrementAction (context) {
  context.commit('increment')
}
```

是的，没错就是这个 context，我们看一下它在 makeLocalContext 中是如何生成的

```js
/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext(store, namespace, path) {
  const noNamespace = namespace === "";

  const local = {
    dispatch: noNamespace
      ? store.dispatch
      : (_type, _payload, _options) => {
          const args = unifyObjectStyle(_type, _payload, _options);
          const { payload, options } = args;
          let { type } = args;

          if (!options || !options.root) {
            type = namespace + type;
            if (__DEV__ && !store._actions[type]) {
              console.error(
                `[vuex] unknown local action type: ${args.type}, global type: ${type}`
              );
              return;
            }
          }

          return store.dispatch(type, payload);
        },

    commit: noNamespace
      ? store.commit
      : (_type, _payload, _options) => {
          const args = unifyObjectStyle(_type, _payload, _options);
          const { payload, options } = args;
          let { type } = args;

          if (!options || !options.root) {
            type = namespace + type;
            if (__DEV__ && !store._mutations[type]) {
              console.error(
                `[vuex] unknown local mutation type: ${args.type}, global type: ${type}`
              );
              return;
            }
          }

          store.commit(type, payload, options);
        },
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? () => store.getters
        : () => makeLocalGetters(store, namespace),
    },
    state: {
      get: () => getNestedState(store.state, path),
    },
  });

  return local;
}
```

分成两类，state 没有判断命名空间，其他三个属性都判断了命名空间

```js
function getNestedState(state, path) {
  return path.reduce((state, key) => state[key], state);
}
```

从这里可以看到什么呢？—— state 不分是否设置了 namespaced，全都是设置在 store.state 上的。最终在我们的例子中，store.state 如下

```js
state: {
  a: {
    count:0,
    aSub: {
      age:0
    }
  },
  b: {
    nums: [],
  },
  status:"open"
}
```

dispatch, commit, getters
这三个都判断是否设置了命名空间，如果模块没有命名空间，那么都会注册到全局命名空间。如果有命名空间，会对参数做一层与命名空间有关转换。举例来说，对于 moduleB 里面的 addAction

```js
actions: {
  addAction (context, val) {
    context.commit('add', val)
  }
},
```

这里最终会变成下面这个调用

```js
store.commit("b/add", val);
```

// 这就是为什么，context.commit b/ 前缀，this.$store.commit('b/add', 23) 直接调用却需要带前缀
这这里体现了一个重要的处理 —— 对于具有 namespaced 的模块，其 mutations 是做了一个名称的转换的。这个其实就是 官方文档这里 (opens new window)所说的：启用了命名空间的 getter 和 action 会收到局部化的 getter，dispatch 和 commit。换言之，你在使用模块内容（module assets）时不需要在同一模块内额外添加空间名前缀。更改 namespaced 属性后不需要修改模块内的代码。

现在，查看官网这个关于 actions 参数 context 的说明 (opens new window)：

```js
{
  state, // 等同于 `store.state`，若在模块中则为局部状态
    rootState, // 等同于 `store.state`，只存在于模块中
    commit, // 等同于 `store.commit`
    dispatch, // 等同于 `store.dispatch`
    getters, // 等同于 `store.getters`
    rootGetters; // 等同于 `store.getters`，只存在于模块中
}
```

现在应该能够更好的理解了，也应该知道，这里说的“等同于”，对于具有命名空间的模块，其实是有些区别的。

在 context 初始化完成后，就是对 mutation，action 和 getter 做注册。 以 mutation 为例进行说明，相关的函数如下

```js
module.forEachMutation((mutation, key) => {
  const namespacedType = namespace + key
  registerMutation(store, namespacedType, mutation, local)
})

forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn)
  }
}

function forEachValue (obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

function registerMutation (store, type, handler, local) {
  const entry = store._mutations[type] || (store._mutations[type] = [])
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload)
  })
}
```

其实就是从模块中取出 mutations，然后对其中的每一个 mutation，添加了命名空间前缀，设置到 store.\_mutations 里面，然后去绑定上下文为 store，设置传递给 mutation 的参数。

需要注意一下，这里 \_mutations[type]是一个数组，在多个模块具有同名的 mutation 的时候，都会存储到一起，不过各自在比保重已经绑定了 local.state 作为第二参数，后面直接调用是 OK 的。

对于 moduleB

```js
  mutations: {
    add (state, val) {
      state.nums.push(val);
    }
  },

  actions: {
    addAction (context, val) {
      context.commit('add', val);
      console.log(context.commit === this.commit, context.commit); // => false ƒ (_type, _payload, _options)
    }
  },
```

这里的 state，是 store.b，这里的 context.commit 不是 store.commit。最终，当我们安装完成之后，得到的结果如下，从中我们可以清晰地看到对各模块，对模块内 state, vuex。

## 总结

namespaced 为 true 会改变传递给 actions 方法的 context 上下文，这就是官方文档所说的 模块的局部状态对象。namespaced 为 true 的模块会拥有自己的 dispatch 和 commit，这两个方法做了模块前缀的处理，就是为什么在子模块内部不需要带上前缀去调用 dispatch 和 commit。

不管 namespaced 是否为 true，最终所有的同类内容都会维护到一起的，state, mutations, actions，getters 都是各自维护到一个地方。

最终经过本文的学习，应该能够对 官方文档的说明 (opens new window)有更深的理解，能够知道那一些平平无奇的描述，并不简单。
