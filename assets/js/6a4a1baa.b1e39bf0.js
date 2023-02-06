"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?s.createElement(h,a(a({ref:t},u),{},{components:n})):s.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(7462),r=(n(7294),n(3905));const o={},a="API",i={unversionedId:"frameworks/vue2/vuex/api",id:"frameworks/vue2/vuex/api",title:"API",description:"\u672c\u6587\u8bf4\u660e getters, state, dispatch \u548c commit",source:"@site/docs/05-frameworks/02-vue2/06-vuex/03-api.md",sourceDirName:"05-frameworks/02-vue2/06-vuex",slug:"/frameworks/vue2/vuex/api",permalink:"/docs/frameworks/vue2/vuex/api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/06-vuex/03-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"vue2",previous:{title:"\u6a21\u5757",permalink:"/docs/frameworks/vue2/vuex/module"},next:{title:"\u63d2\u4ef6",permalink:"/docs/frameworks/vue2/vuex/plugins"}},l={},c=[{value:"\u524d\u7f6e\u5185\u5bb9",id:"\u524d\u7f6e\u5185\u5bb9",level:2},{value:"getters",id:"getters",level:2},{value:"state",id:"state",level:2},{value:"commit",id:"commit",level:2},{value:"dispatch",id:"dispatch",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api"},"API"),(0,r.kt)("p",null,"\u672c\u6587\u8bf4\u660e getters, state, dispatch \u548c commit"),(0,r.kt)("h2",{id:"\u524d\u7f6e\u5185\u5bb9"},"\u524d\u7f6e\u5185\u5bb9"),(0,r.kt)("p",null,"Store \u6784\u9020\u51fd\u6570\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export class Store {\n  constructor(options = {}) {\n    // Auto install if it is not done yet and `window` has `Vue`.\n    // To allow users to avoid auto-installation in some cases,\n    // this code should be placed here. See #731\n    if (!Vue && typeof window !== "undefined" && window.Vue) {\n      install(window.Vue);\n    }\n\n    if (__DEV__) {\n      assert(Vue, `must call Vue.use(Vuex) before creating a store instance.`);\n      assert(\n        typeof Promise !== "undefined",\n        `vuex requires a Promise polyfill in this browser.`\n      );\n      assert(\n        this instanceof Store,\n        `store must be called with the new operator.`\n      );\n    }\n\n    const { plugins = [], strict = false } = options;\n\n    // store internal state\n    this._committing = false;\n    this._actions = Object.create(null);\n    this._actionSubscribers = [];\n    this._mutations = Object.create(null);\n    this._wrappedGetters = Object.create(null);\n    this._modules = new ModuleCollection(options);\n    this._modulesNamespaceMap = Object.create(null);\n    this._subscribers = [];\n\n    this._watcherVM = new Vue();\n    this._makeLocalGettersCache = Object.create(null);\n\n    // bind commit and dispatch to self\n    const store = this;\n    const { dispatch, commit } = this;\n    this.dispatch = function boundDispatch(type, payload) {\n      return dispatch.call(store, type, payload);\n    };\n    this.commit = function boundCommit(type, payload, options) {\n      return commit.call(store, type, payload, options);\n    };\n\n    // strict mode\n    this.strict = strict;\n\n    const state = this._modules.root.state;\n\n    // init root module.\n    // this also recursively registers all sub-modules\n    // and collects all module getters inside this._wrappedGetters\n    installModule(this, state, [], this._modules.root);\n\n    // initialize the store vm, which is responsible for the reactivity\n    // (also registers _wrappedGetters as computed properties)\n    resetStoreVM(this, state);\n\n    // apply plugins\n    plugins.forEach((plugin) => plugin(this));\n\n    const useDevtools =\n      options.devtools !== undefined ? options.devtools : Vue.config.devtools;\n    if (useDevtools) {\n      devtoolPlugin(this);\n    }\n  }\n  // ...\n}\n')),(0,r.kt)("h2",{id:"getters"},"getters"),(0,r.kt)("p",null,"\u4e0e getters \u76f8\u5173\u7684\u5185\u5bb9\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this._wrappedGetters = Object.create(null);\n// ...\nresetStoreVM(this, state);\n")),(0,r.kt)("p",null,"_","wrappedGetters \u5c31\u662f\u5728 modules \u5904\u7406\u7684\u8fc7\u7a0b\u4e2d\u8bbe\u7f6e\u7684 getters \u7684\u6536\u96c6\uff0c\u8fd9\u4e2a\u5728 \u6a21\u5757 \u4e00\u6587\u7684\u56fe\u4e2d\u6709\u5c55\u793a\uff0c\u672c\u6587\u4e0d\u518d\u8d58\u8ff0\uff0c\u603b\u4e4b\u6839\u636e\u4f8b\u5b50\u5f97\u5230\u7684\u7ed3\u679c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"_wrappedGetters: {\n  'b/reversedNums': \u0192 wrappedGetter(store)\n  doubleCount: \u0192 wrappedGetter(store)\n}\n")),(0,r.kt)("p",null,"resetStoreVM \u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function resetStoreVM(store, state, hot) {\n  const oldVm = store._vm;\n\n  // bind store public getters\n  store.getters = {};\n  // reset local getters cache\n  store._makeLocalGettersCache = Object.create(null);\n  const wrappedGetters = store._wrappedGetters;\n  const computed = {};\n  forEachValue(wrappedGetters, (fn, key) => {\n    // use computed to leverage its lazy-caching mechanism\n    // direct inline function use will lead to closure preserving oldVm.\n    // using partial to return function with only arguments preserved in closure environment.\n    computed[key] = partial(fn, store);\n    Object.defineProperty(store.getters, key, {\n      get: () => store._vm[key],\n      enumerable: true, // for local getters\n    });\n  });\n\n  // use a Vue instance to store the state tree\n  // suppress warnings just in case the user has added\n  // some funky global mixins\n  const silent = Vue.config.silent;\n  Vue.config.silent = true;\n  store._vm = new Vue({\n    data: {\n      $$state: state,\n    },\n    computed,\n  });\n  Vue.config.silent = silent;\n\n  // enable strict mode for new vm\n  if (store.strict) {\n    enableStrictMode(store);\n  }\n\n  if (oldVm) {\n    if (hot) {\n      // dispatch changes in all subscribed watchers\n      // to force getter re-evaluation for hot reloading.\n      store._withCommit(() => {\n        oldVm._data.$$state = null;\n      });\n    }\n    Vue.nextTick(() => oldVm.$destroy());\n  }\n}\n")),(0,r.kt)("p",null,"\u9996\u5148\u662f\u5b9a\u4e49\u4e86 computed \u53d8\u91cf\uff0c\u901a\u8fc7 forEachValue \u904d\u5386\u5bf9\u4e8e\u6bcf\u4e2a getter\uff0c\u8c03\u7528 partial \u51fd\u6570\u8bbe\u7f6e computed \u4e2d\u7684\u540c\u540d\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function partial(fn, arg) {\n  return function () {\n    return fn(arg);\n  };\n}\n")),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0ccomputed \u4f1a\u53d8\u6210\u8fd9\u4e2a\u6837\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"computed: {\n  'b/reversedNums': \u0192 ()\n  doubleCount: \u0192 ()\n}\n")),(0,r.kt)("p",null,"\u90a3\u4e48\u5f53\u6211\u4eec\u901a\u8fc7 new Vue \u53bb\u751f\u6210 store.","_","vm \u7684\u65f6\u5019"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store._vm = new Vue({\n  data: {\n    $$state: state,\n  },\n  computed,\n});\n")),(0,r.kt)("p",null,"\u5728 store.","_","vm \u4e0a\uff0c\u5c31\u4f1a\u6709 doubleCount \u548c b/reversedNums \u65b9\u6cd5\uff0c\u90a3\u4e48\u901a\u8fc7\u4e0b\u9762\u8fd9\u4e2a\u8bbe\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Object.defineProperty(store.getters, key, {\n  get: () => store._vm[key],\n  enumerable: true, // for local getters\n});\n")),(0,r.kt)("p",null,"\u8bbf\u95ee store.getters.doubleCount\uff0c\u5c31\u4f1a\u8c03\u7528 store.","_","vm.doubleCount \u51fd\u6570\uff0cgetter \u5c31\u662f\u8fd9\u6837\u5177\u5907\u4e86\u7f13\u5b58\u7684\u80fd\u529b\uff0c\u5c06\u5b83\u5f53\u505a computed \u5c5e\u6027\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"state"},"state"),(0,r.kt)("p",null,"\u5728 resetStoreVM \u4e2d\uff0cstate \u4f5c\u4e3a vm \u521d\u59cb\u5316\u7684 $$state \u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store._vm = new Vue({\n  data: {\n    $$state: state,\n  },\n  computed,\n});\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a state \u5c31\u662f\u6211\u4eec\u5728 \u6a21\u5757\u5b89\u88c5 \u7684\u65f6\u5019\u7684\u5230\u7684\u5305\u542b\u6240\u6709\u6a21\u5757\u7684 state \u7684\u5bf9\u8c61\uff0c\u5728 Vue \u5b9e\u4f8b\u5316\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u4f7f\u5176\u5177\u5907\u6570\u636e\u54cd\u5e94\u80fd\u529b\u3002\u5f53\u83b7\u53d6 state \u65f6\uff0c\u5982\u679c\u4e0d\u518d\u662f\u76f4\u63a5\u4ece state \u5bf9\u8c61\u4e2d\u53d6\u503c\uff0c\u800c\u662f\u4ece $$state \u4e2d\u53d6\u503c\uff0c\u5c31\u53ef\u4ee5\u83b7\u5f97\u54cd\u5e94\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\uff0cStore \u8bbe\u7f6e\u4e86\u5bf9 state \u7684 getter \u548c setter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export class Store {\n  constructor(options = {}) {\n    // ...\n  }\n\n  get state() {\n    return this._vm._data.$$state;\n  }\n\n  set state(v) {\n    if (__DEV__) {\n      assert(\n        false,\n        `use store.replaceState() to explicit replace store state.`\n      );\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u9632\u536b store.state \u7684\u65f6\u5019\uff0c\u5c31\u662f\u5728\u8bbf\u95ee store.","_","vm.","_","data.$$state\u3002\u50cf\u4e0b\u9762\u8fd9\u6837\u83b7\u53d6\uff0c\u5728 state.status \u66f4\u65b0\u4e4b\u540e\uff0cstatus \u4e5f\u4f1a\u968f\u4e4b\u66f4\u65b0\u3002"),(0,r.kt)("h2",{id:"commit"},"commit"),(0,r.kt)("p",null,"\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export class Store {\n  constructor (options = {}) {\n    this._committing = false\n    const store = this\n    const { dispatch, commit } = this\n    this.dispatch = function boundDispatch (type, payload) {\n      return dispatch.call(store, type, payload)\n    }\n    this.commit = function boundCommit (type, payload, options) {\n      return commit.call(store, type, payload, options)\n    }\n    // ...\n  }\n\n  commit (_type, _payload, _options) {\n    // check object-style commit\n    const {\n      type,\n      payload,\n      options\n    } = unifyObjectStyle(_type, _payload, _options)\n\n    const mutation = { type, payload }\n    const entry = this._mutations[type]\n    if (!entry) {\n      if (__DEV__) {\n        console.error(`[vuex] unknown mutation type: ${type}`)\n      }\n      return\n    }\n\n    // \u5173\u6ce8\u8fd9\u91cc\u5373\u53ef\n    this._withCommit(() => {\n      entry.forEach(function commitIterator (handler) {\n        handler(payload)\n      })\n    })\n\n    this._subscribers\n      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe\n      .forEach(sub => sub(mutation, this.state))\n\n    if (\n      __DEV__ &&\n      options && options.silent\n    ) {\n      console.warn(\n        `[vuex] mutation type: ${type}. Silent option has been removed. ` +\n        'Use the filter functionality in the vue-devtools'\n      )\n    }\n  }\n\n  _withCommit (fn) {\n    const committing = this._committing\n    this._committing = true\n    fn()\n    this._committing = committing\n  }\n\n  // ...\n}\n_subscribers\u662f\u548c\u63d2\u4ef6\u76f8\u5173\u7684\uff0c\u5982\u679c\u6709\u5dee\u8ddd\uff0c\u5728\u8c03\u7528 mutation \u66f4\u65b0\u4e4b\u540e\uff0c\u8c03\u7528\u63d2\u4ef6\u7684\u8ba2\u9605\u51fd\u6570\u3002\u73b0\u5728\u5c31\u5173\u6ce8\u4e0b\u9762\u8fd9\u4e00\u90e8\u5206\u5373\u53ef\n\nconst entry = this._mutations[type]\nthis._withCommit(() => {\n  entry.forEach(function commitIterator (handler) {\n    handler(payload)\n  })\n})\n\u8fd9\u91cc\u5c31\u662f\u4ece_mutations\u53d6\u51fatype\u6307\u5b9a\u7684\u51fd\u6570\u7136\u540e\u8c03\u7528\uff0c\u6240\u6709\u7684\u540c\u540d mutation \u90fd\u4f1a\u6267\u884c\u3002\u770b\u4e0b\u9762\u8fd9\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\n\nconst moduleB = {\n  namespaced: true,\n  state: () => ({\n    nums: []\n  }),\n  mutations: {\n    add (state, val) {\n      state.nums.push(val);\n    }\n  },\n}\n\nconst store = new Vuex.Store({\n  modules: {\n    b: moduleB,\n  }\n})\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e add \u51fd\u6570\u6765\u8bf4\uff0cstate \u5c31\u662f store.state.b\uff0c\u6216\u8005\u8bf4\u662f store.","_","vm.$$state.b\uff0c\u8fd9\u662f\u5728 \u6a21\u5757\u5b89\u88c5 \u7684\u65f6\u5019\u5c31\u8bbe\u7f6e\u597d\u7684\u95ed\u5305\u91cc\u9762\u4f20\u9012\u7684\uff0cadd \u51fd\u6570\u6267\u884c\u5c31\u662f\u76f4\u63a5\u64cd\u4f5c state.b \uff0c\u6ca1\u6709\u5176\u4ed6\u8fc7\u7a0b\u4e86\u3002"),(0,r.kt)("h2",{id:"dispatch"},"dispatch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export class Store {\n  constructor(options = {}) {\n    this._committing = false;\n    const store = this;\n    const { dispatch, commit } = this;\n    this.dispatch = function boundDispatch(type, payload) {\n      return dispatch.call(store, type, payload);\n    };\n    this.commit = function boundCommit(type, payload, options) {\n      return commit.call(store, type, payload, options);\n    };\n    // ...\n  }\n\n  dispatch(_type, _payload) {\n    // check object-style dispatch\n    const { type, payload } = unifyObjectStyle(_type, _payload);\n\n    const action = { type, payload };\n    const entry = this._actions[type];\n    if (!entry) {\n      if (__DEV__) {\n        console.error(`[vuex] unknown action type: ${type}`);\n      }\n      return;\n    }\n\n    // \u63d2\u4ef6\u76f8\u5173\uff0c\u6682\u4e0d\u5173\u6ce8\n    try {\n      this._actionSubscribers\n        .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe\n        .filter((sub) => sub.before)\n        .forEach((sub) => sub.before(action, this.state));\n    } catch (e) {\n      if (__DEV__) {\n        console.warn(`[vuex] error in before action subscribers: `);\n        console.error(e);\n      }\n    }\n\n    // \u8fd9\u91cc\u662f\u6267\u884c actions\n    const result =\n      entry.length > 1\n        ? Promise.all(entry.map((handler) => handler(payload)))\n        : entry[0](payload);\n\n    return new Promise((resolve, reject) => {\n      result.then(\n        (res) => {\n          try {\n            this._actionSubscribers\n              .filter((sub) => sub.after)\n              .forEach((sub) => sub.after(action, this.state));\n          } catch (e) {\n            if (__DEV__) {\n              console.warn(`[vuex] error in after action subscribers: `);\n              console.error(e);\n            }\n          }\n          resolve(res);\n        },\n        (error) => {\n          try {\n            this._actionSubscribers\n              .filter((sub) => sub.error)\n              .forEach((sub) => sub.error(action, this.state, error));\n          } catch (e) {\n            if (__DEV__) {\n              console.warn(`[vuex] error in error action subscribers: `);\n              console.error(e);\n            }\n          }\n          reject(error);\n        }\n      );\n    });\n  }\n\n  // ...\n}\n")),(0,r.kt)("p",null,"\u9996\u5148\u5224\u65ad\u4e86\u540c\u540d\u7684 actions \u662f\u5426\u591a\u4e2a\uff0c\u7136\u540e\u53bb\u6267\u884c\uff0c\u5982\u679c\u6709\u591a\u4e2a\u5219\u4f7f\u7528 Promise.all \u5c01\u88c5\u3002\u5728\u521d\u59cb\u5316 registerAction \u7684\u65f6\u5019\u505a\u4e86\u5904\u7406\uff0caction \u7684\u6267\u884c\u4f1a\u8fd4\u56de Promise\u3002 \u5728 result.then \u91cc\u9762\uff0c\u5176\u5b9e actions \u5df2\u7ecf\u6267\u884c\u5b8c\u6210\u4e86\uff0c\u8fd9\u4e00\u5c42 new Promise \u53ea\u662f\u4e3a\u4e86\u5904\u7406\u63d2\u4ef6\u76f8\u5173\u7684\u4e8b\u60c5\uff0c\u5982\u679c\u6ca1\u6709\u63d2\u4ef6\uff0c\u76f4\u63a5\u8fd4\u56de result \u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u63d2\u4ef6\uff0c\u901a\u8fc7","_","actionSubscribers \u4fdd\u5b58\u4e86\u6ce8\u518c\u7684\u5bf9\u4e8e action \u8c03\u7528\u7684\u8ba2\u9605\uff0c\u5728 action \u6267\u884c\u524d\u540e\u5206\u522b\u8c03\u7528\u5bf9\u5e94\u8ba2\u9605\u51fd\u6570\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"Store \u7684\u6570\u636e\u5177\u6709\u54cd\u5e94\u5f0f\u80fd\u529b\uff0c\u662f\u901a\u8fc7\u76f4\u63a5 Vue \u5b9e\u4f8b\u6765\u5b9e\u73b0\u7684\uff0cstate \u5bf9\u5e94\u5230 vm.$data\uff0c\u800c getter \u662f\u5229\u7528 computed \u5c5e\u6027\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"getters, actions, mutations \u6700\u7ec8\u90fd\u662f\u8981\u5bf9 state \u8fdb\u884c get \u6216\u8005 set"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const moduleB = {\n  state: {\n    count: 0,\n  },\n  mutations: {\n    increment(state) {\n      state.count++;\n    },\n  },\n  actions: {\n    increment(context) {\n      context.commit("increment");\n    },\n  },\n};\n')),(0,r.kt)("p",null,"state \u548c context \u662f Vuex \u63d0\u4f9b\u7ed9\u6211\u4eec\u5f00\u53d1\u7684\u65f6\u5019\u4f7f\u7528\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u53bb\u83b7\u53d6\u5230\u4e0e\u5f53\u524d\u6a21\u5757\u5bf9\u5e94\u7684 state \u6216\u8005 commit\u3002state \u548c context \u53c2\u6570\uff0c\u90fd\u662f\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u901a\u8fc7\u95ed\u5305\u4fdd\u5b58\u4e0b\u6765\u7684\u53c2\u6570\uff0c\u5df2\u7ecf\u5904\u7406\u597d\u4e86\u6a21\u5757\u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u90a3\u4e48\u5f53\u6211\u4eec\u53bb\u8c03\u7528 dispatch \u548c commit \u7684\u65f6\u5019\uff0c\u4e8b\u60c5\u5c31\u53d8\u5f97\u7b80\u5355\u4e86\uff0c\u5e72\u5c31\u5b8c\u4e86\u3002"))}p.isMDXComponent=!0}}]);