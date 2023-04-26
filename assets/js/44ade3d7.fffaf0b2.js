"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),v=a,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},s="\u6570\u636e\u521d\u59cb\u5316",i={unversionedId:"frameworks/vue2/reactivity/data",id:"frameworks/vue2/reactivity/data",title:"\u6570\u636e\u521d\u59cb\u5316",description:"\u4ece data \u7684\u521d\u59cb\u5316\u5f00\u59cb",source:"@site/docs/05-frameworks/02-vue2/04-reactivity/02-data.md",sourceDirName:"05-frameworks/02-vue2/04-reactivity",slug:"/frameworks/vue2/reactivity/data",permalink:"/docs/frameworks/vue2/reactivity/data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/04-reactivity/02-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"frameworks",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/frameworks/vue2/reactivity/intro"},next:{title:"\u4f9d\u8d56\u6536\u96c6",permalink:"/docs/frameworks/vue2/reactivity/collect-deps"}},l={},p=[{value:"initData",id:"initdata",level:2},{value:"proxy",id:"proxy",level:2},{value:"observe",id:"observe",level:2},{value:"Observer",id:"observer",level:2},{value:"\u6570\u7ec4\u7684\u521d\u59cb\u5316",id:"\u6570\u7ec4\u7684\u521d\u59cb\u5316",level:2},{value:"\u5bf9\u8c61\u7684\u521d\u59cb\u5316",id:"\u5bf9\u8c61\u7684\u521d\u59cb\u5316",level:2},{value:"defineReactive",id:"definereactive",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u636e\u521d\u59cb\u5316"},"\u6570\u636e\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u4ece data \u7684\u521d\u59cb\u5316\u5f00\u59cb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'new Vue({\n  data: {\n    message: "123",\n    list: [1, 2, 3, 4],\n  },\n  template: `<div class="menu-list">\n    <div>message is: {{message}}</div>\n    <ul v-for="item in list" :key="item">{{item}}</ul>\n  </div>`,\n});\n')),(0,a.kt)("h2",{id:"initdata"},"initData"),(0,a.kt)("p",null,"data \u7684\u521d\u59cb\u5316\uff0c\u662f\u5728 Vue.prototype.","_","init \u4e2d\uff0c\u662f\u5728 beforeCreate \u5230 created \u4e4b\u95f4\u7684 initState"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'callHook(vm, "beforeCreate");\n\ninitInjections(vm); // injected\u521d\u59cb\u5316\ninitState(vm); // props,data\u7b49\u521d\u59cb\u5316\ninitProvide(vm); // provide\u521d\u59cb\u5316\n\ncallHook(vm, "created");\n')),(0,a.kt)("p",null,"initState \u5b9a\u4e49\u5728 src/core/instance/state.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function initState(vm: Component) {\n  vm._watchers = []; // _watchers\u548c_watcher\u5404\u662f\u505a\u8bbe\u4e48\u7528\u7684\n  const opts = vm.$options;\n  if (opts.props) initProps(vm, opts.props);\n  if (opts.methods) initMethods(vm, opts.methods);\n  if (opts.data) {\n    initData(vm);\n  } else {\n    observe((vm._data = {}), true /* asRootData */);\n  }\n  if (opts.computed) initComputed(vm, opts.computed);\n  if (opts.watch && opts.watch !== nativeWatch) {\n    initWatch(vm, opts.watch);\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u5c31\u662f\u521d\u59cb\u5316\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u5404\u4e2a\u5c5e\u6027\u7684\u5730\u65b9\uff0c\u672c\u6587\u5173\u6ce8\u7684\u662f data\uff0cinitData"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function initData(vm: Component) {\n  let data = vm.$options.data;\n  data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};\n\n  // ...\n  // proxy data on instance\n  const keys = Object.keys(data);\n  const props = vm.$options.props;\n  const methods = vm.$options.methods;\n  let i = keys.length;\n\n  // \u5c5e\u6027\u91cd\u590d\u6027\u68c0\u67e5\n  while (i--) {\n    const key = keys[i];\n    if (process.env.NODE_ENV !== "production") {\n      if (methods && hasOwn(methods, key)) {\n        warn(\n          `Method "${key}" has already been defined as a data property.`,\n          vm\n        );\n      }\n    }\n    if (props && hasOwn(props, key)) {\n      process.env.NODE_ENV !== "production" &&\n        warn(\n          `The data property "${key}" is already declared as a prop. ` +\n            `Use prop default value instead.`,\n          vm\n        );\n    } else if (!isReserved(key)) {\n      proxy(vm, `_data`, key);\n    }\n  }\n  // observe data\n  observe(data, true /* asRootData */);\n}\n\nexport function getData(data: Function, vm: Component): any {\n  // #7573 disable dep collection when invoking data getters\n  pushTarget();\n  try {\n    return data.call(vm, vm);\n  } catch (e) {\n    handleError(e, vm, `data()`);\n    return {};\n  } finally {\n    popTarget();\n  }\n}\n')),(0,a.kt)("p",null,"\u9996\u5148\u662f\u83b7\u53d6 data \u5bf9\u8c61\uff0c\u5982\u679c\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5c31\u8c03\u7528 getData \u53bb\u83b7\u53d6\uff0c\u5728 getData \u91cc\u9762\u901a\u8fc7 call \u53bb\u6307\u5b9a\u4e0a\u4e0b\u6587\uff0c\u56e0\u4e3a data \u7684\u521d\u59cb\u5316\u91cc\u53ef\u80fd\u4f1a\u7528\u5230 props\uff0cmethod \u7b49\u5b9e\u4f8b\u7684\u5176\u4ed6\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u7684 while \u5faa\u73af\u662f\u505a\u4e00\u4e2a\u662f\u5426\u4e0e props \u6216\u8005 method \u547d\u540d\u91cd\u590d\u7684\u68c0\u67e5\uff0cisReserved \u662f\u5224\u65ad\u662f\u5426\u662f\u4ee5","_","\u540e\u8005$\u5f00\u5934\u7684\u8fd9\u4e9b\u5185\u90e8\u4fdd\u7559\u5c5e\u6027\uff0c\u5982\u679c\u6ca1\u6709\u91cd\u590d\u6216\u5185\u90e8\u5c5e\u6027\u5219\u63d0\u793a\u3002"),(0,a.kt)("p",null,"\u68c0\u67e5\u901a\u8fc7\u7684\u5c5e\u6027\uff0c\u901a\u8fc7 proxy \u4ee3\u7406\u5230\u5185\u90e8\u5c5e\u6027 ","_","data \u4e0a\uff0c\u7136\u540e\u8c03\u7528 observe \u51fd\u6570\u8bbe\u7f6e\u8fd9\u4e9b\u5c5e\u6027\u7684\u53d8\u5316\u76d1\u542c\u3002"),(0,a.kt)("h2",{id:"proxy"},"proxy"),(0,a.kt)("p",null,"\u5b9a\u4e49\u5728 src/core/instance/state.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function proxy(target: Object, sourceKey: string, key: string) {\n  sharedPropertyDefinition.get = function proxyGetter() {\n    return this[sourceKey][key];\n  };\n  sharedPropertyDefinition.set = function proxySetter(val) {\n    this[sourceKey][key] = val;\n  };\n  Object.defineProperty(target, key, sharedPropertyDefinition);\n}\n")),(0,a.kt)("p",null,"\u5047\u8bbe\u8fd9\u91cc\u662f\u5bf9\u4e8e message \u5c5e\u6027\uff0c\u90a3\u4e48\u5c31\u662f\u901a\u8fc7 Object.defineProperty \u8bbe\u7f6e\u4e86 vm.message \u7684\u8bbf\u95ee\u63cf\u8ff0\u5668\uff0c\u5c06 vm.message \u4ee3\u7406\u5230\u4e86 vm.","_","data.message \u5c5e\u6027\u4e0a\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u662f\u4e0d\u662f\u89c9\u5f97\u7ec8\u4e8e\u627e\u5230\u4e86\u6700\u6838\u5fc3\u7684\u5730\u65b9\uff1f\u5e76\u6ca1\u6709...")),(0,a.kt)("p",null,"\u8fd9\u4e2a proxy\uff0c\u53ea\u662f\u76f8\u5f53\u4e8e\u7ed9 vm.","_","data.message \u52a0\u4e86\u4e2a\u5feb\u6377\u8bbf\u95ee\uff0c\u5e76\u6ca1\u6709\u5728 getter \u6216\u8005 setter \u505a\u4ec0\u4e48\u4e8b\u60c5\u3002\u6211\u4eec\u5173\u6ce8\u7684\u662f\u5b83\u5728\u5b58\u53d6\u7684\u65f6\u5019\u641e\u4e86\u4ec0\u4e48\u4e8b\u60c5\uff0c\u4e3a\u751a\u80fd\u591f\u5b9e\u73b0\u81ea\u52a8\u66f4\u65b0\uff0c\u671f\u5f85\u7684\u76ee\u5149\u843d\u5728\u4e86\u6700\u540e\u7684 observe \u51fd\u6570\u4e0a\u3002"),(0,a.kt)("h2",{id:"observe"},"observe"),(0,a.kt)("p",null,"\u8c03\u7528\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"observe(data, true /* asRootData */);\n")),(0,a.kt)("p",null,"\u5b9a\u4e49\u5728 src/core/observer/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export function observe(value: any, asRootData: ?boolean): Observer | void {\n  if (!isObject(value) || value instanceof VNode) {\n    return;\n  }\n  let ob: Observer | void;\n  if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {\n    ob = value.__ob__;\n  } else if (\n    shouldObserve &&\n    !isServerRendering() &&\n    (Array.isArray(value) || isPlainObject(value)) &&\n    Object.isExtensible(value) &&\n    !value._isVue\n  ) {\n    ob = new Observer(value);\n  }\n\n  if (asRootData && ob) {\n    ob.vmCount++;\n  }\n  return ob;\n}\n')),(0,a.kt)("p",null,"\u5bf9\u4e8e data \u5c5e\u6027\u521d\u59cb\u5316\uff0c\u8fd9\u91cc value \u662f data \u5bf9\u8c61\uff0casRootData \u662f true\uff0c\u867d\u7136\u8fd4\u56de\u4e86 ob\uff0c\u4f46\u662f\u5e76\u6ca1\u6709\u4f7f\u7528\uff0c\u56e0\u6b64\u5173\u952e\u5728\u4e8e new Observer \u5bf9 data \u505a\u4e86\u4ec0\u4e48\u3002\u4ece\u5224\u65ad\u4e0a\u770b\uff0c\u5b9e\u4f8b\u5316\u8fc7\u7a0b\u4e2d\u5b9a\u4e49\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"__ob__"),"\u5f15\u7528\uff0c\u8fd9\u91cc\u7684 asRootData \u5373\u8868\u793a\u662f\u7ec4\u4ef6\u7684 data \u5bf9\u8c61\uff0c\u4e0d\u662f\u5176\u4ed6\u5b50\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\u8fd9\u91cc\u6700\u5f00\u59cb\u7684\u5224\u65ad\uff0c\u505a\u4e86 value \u7c7b\u578b\u7684\u68c0\u67e5\uff0c\u8fd9\u5728\u540e\u9762\u5176\u4ed6\u5c5e\u6027\u518d\u8c03\u7528 observe \u65f6\u4f1a\u7528\u5230\u3002"),(0,a.kt)("h2",{id:"observer"},"Observer"),(0,a.kt)("p",null,"\u5b9a\u4e49\u5728 src/core/observer/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export class Observer {\n  value: any;\n  dep: Dep;\n  vmCount: number; // number of vms that have this object as root $data\n\n  constructor(value: any) {\n    this.value = value;\n    this.dep = new Dep();\n    this.vmCount = 0;\n    def(value, "__ob__", this);\n    if (Array.isArray(value)) {\n      if (hasProto) {\n        protoAugment(value, arrayMethods);\n      } else {\n        copyAugment(value, arrayMethods, arrayKeys);\n      }\n      this.observeArray(value);\n    } else {\n      this.walk(value);\n    }\n  }\n\n  /**\n   * Walk through all properties and convert them into\n   * getter/setters. This method should only be called when\n   * value type is Object.\n   */\n  walk(obj: Object) {\n    const keys = Object.keys(obj);\n    for (let i = 0; i < keys.length; i++) {\n      defineReactive(obj, keys[i]);\n    }\n  }\n\n  /**\n   * Observe a list of Array items.\n   */\n  observeArray(items: Array<any>) {\n    for (let i = 0, l = items.length; i < l; i++) {\n      observe(items[i]);\n    }\n  }\n}\n')),(0,a.kt)("p",null,"\u770b constructor\uff0c\u9996\u5148\u521d\u59cb\u5316\u4e86\u4e00\u4e2a Dep(dependence)\uff0c\u8fd9\u4e2a\u53ef\u4ee5\u7a0d\u540e\u518d\u53c2\u8003 Dep \uff0c\u6682\u65f6\u4e0d\u7528\u5173\u6ce8\u3002\u7136\u540e\u5728 value \u4e0a\u8bbe\u7f6e\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"__ob__")," \u5c5e\u6027\u6307\u5411 observer \u5b9e\u4f8b\uff0c\u5176\u4e2d def \u51fd\u6570\u662f\u5bf9 Object.defineProperty \u7684\u4e00\u4e2a\u7b80\u5355\u5c01\u88c5\uff0c\u7b80\u5316\u4e86\u8bbf\u95ee\u63cf\u8ff0\u5668\u7684\u8bbe\u7f6e\u3002\u5728\u8bbe\u7f6e\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"__ob__"),"\u4e4b\u540e\uff0c\u6839\u636e value \u7684\u7c7b\u522b\u5206\u522b\u5904\u7406\uff0c\u5176\u5b9e value \u5230\u8fd9\u91cc\u5c31 Array \u548c Object \u4e24\u79cd\u7c7b\u522b\u3002"),(0,a.kt)("h2",{id:"\u6570\u7ec4\u7684\u521d\u59cb\u5316"},"\u6570\u7ec4\u7684\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6570\u7ec4\u7c7b\u578b\u7684\u6570\u636e\uff0c\u8bbe\u7f6e\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (Array.isArray(value)) {\n  if (hasProto) {\n    protoAugment(value, arrayMethods);\n  } else {\n    copyAugment(value, arrayMethods, arrayKeys);\n  }\n  this.observeArray(value);\n}\n")),(0,a.kt)("p",null,"\u5148\u770b observeArray"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Observe a list of Array items.\n */\nobserveArray (items: Array<any>) {\n  for (let i = 0, l = items.length; i < l; i++) {\n    observe(items[i])\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a observeArray \u7684\u610f\u601d\u5c31\u662f\uff0c\u5bf9\u4e8e\u6570\u7ec4\u91cc\u9762\u7684\u6bcf\u4e00\u9879\uff0c\u5982\u679c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u8bbe\u7f6e\u76d1\u542c\u3002\u5728 observe \u4e2d\u4e00\u5f00\u59cb\u5c31\u4f1a\u5224\u65ad\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"items[i](item)")," \u662f\u4e00\u4e2a\u5bf9\u8c61\u5219\u8bbe\u7f6e\u76d1\u542c\uff0c\u7ed9 item \u6dfb\u52a0 Observer \u5b9e\u4f8b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"item.__ob__")," \u4e0a\uff0c\u5982\u679c\u662f\u4e2a\u539f\u59cb\u503c\uff0c\u76f4\u63a5\u5c31\u6482\u6311\u5b50\u8fd4\u56de\u4e86\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\u4e24\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"xxxAugment")," \u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function protoAugment(target, src: Object) {\n  /* eslint-disable no-proto */\n  target.__proto__ = src;\n  /* eslint-enable no-proto */\n}\n\nfunction copyAugment(target: Object, src: Object, keys: Array<string>) {\n  for (let i = 0, l = keys.length; i < l; i++) {\n    const key = keys[i];\n    def(target, key, src[key]);\n  }\n}\n")),(0,a.kt)("p",null,"\u5224\u65ad\u662f\u5426\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")," \uff0c\u5982\u679c\u652f\u6301\uff0c\u5c31\u76f4\u63a5\u8bbe\u7f6e\u5176\u4e3a arrayMethods\uff0c\u5982\u679c\u4e0d\u652f\u6301\uff0c\u5219\u901a\u8fc7 Object.defineProperty \u5b9a\u4e49\u5404\u4e2a\u65b9\u6cd5\u7684 getter \u548c setter\u3002"),(0,a.kt)("p",null,"arrayMethods \u5b9a\u4e49\u5728 src/core/observer/array.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const arrayProto = Array.prototype\nconst arrayMethods = Object.create(arrayProto)\n\nconst methodsToPatch = [\n  'push',\n  'pop',\n  'shift',\n  'unshift',\n  'splice',\n  'sort',\n  'reverse'\n]\n\n/**\n * Intercept mutating methods and emit events\n */\nmethodsToPatch.forEach(function (method) {\n  // cache original method\n  const original = arrayProto[method]\n  def(arrayMethods, method, function mutator (...args) {\n    const result = original.apply(this, args)\n    const ob = this.__ob__\n    let inserted\n    switch (method) {\n      case 'push':\n      case 'unshift':\n        inserted = args\n        break\n      case 'splice':\n        inserted = args.slice(2)\n        break\n    }\n    if (inserted) ob.observeArray(inserted)\n    // notify change\n    ob.dep.notify()\n    return result\n  })\n})\n\nconst arrayKeys = Object.getOwnPropertyNames(arrayMethods)\n\nexport arrayMethods;\n")),(0,a.kt)("p",null,"\u901a\u8fc7 Object.create(Array.prototype) \u6765\u521b\u5efa\u4e86 arrayMethods\uff0c\u7136\u540e\u901a\u8fc7\u904d\u5386\u6570\u7ec4\u5bf9 methodsToPatch \u5217\u8868\u4e2d\u7684\u90a3\u4e9b\u6570\u7ec4\u65b9\u6cd5\u8fdb\u884c\u4e86\u91cd\u65b0\u5b9a\u4e49\u3002\u5f53\u8bbe\u7f6e target.",(0,a.kt)("strong",{parentName:"p"},"proto")," = arrayMethods \u540e\uff0c\u8fd9\u4e2a target \u6570\u7ec4\u7684\u539f\u578b\u5c31\u4e0d\u518d\u662f\u539f\u6765\u7684 Array.prototype \u4e86\u3002"),(0,a.kt)("p",null,"methodsToPatch \u4e2d\u7684\u65b9\u6cd5\uff0c\u90fd\u662f\u90a3\u4e9b \u4fee\u6539\u539f\u6570\u7ec4\u7684\u65b9\u6cd5\uff0c\u5728\u6570\u7ec4\u4fee\u6539\u4e4b\u540e\uff0c\u627e\u51fa inserted \u7684\u90a3\u90e8\u5206\u5143\u7d20\uff0c\u5bf9\u8fd9\u4e9b\u5143\u7d20\u6267\u884c observe \u521d\u59cb\u5316\uff0c\u4e8e\u662f\u65b0\u7684\u5143\u7d20\u5c31\u5177\u5907\u4e86\u6570\u636e\u54cd\u5e94\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u662f\u8c03\u7528 ob.dep.notify \u53bb\u53d1\u5e03\u66f4\u65b0\u3002"),(0,a.kt)("h2",{id:"\u5bf9\u8c61\u7684\u521d\u59cb\u5316"},"\u5bf9\u8c61\u7684\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5bf9\u8c61\u7684\u521d\u59cb\u5316\uff0c\u4e0d\u7ba1\u662f data \u4e2d\u7684\u5bf9\u8c61\u5c5e\u6027\uff0c\u8fd8\u662f\u6570\u7ec4\u4e2d\u7684\u5bf9\u8c61\u5143\u7d20\uff0c\u6700\u7ec8\u90fd\u662f\u4f1a\u6267\u884c walk \u8bbe\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"walk (obj: Object) {\n  const keys = Object.keys(obj)\n  for (let i = 0; i < keys.length; i++) {\n    defineReactive(obj, keys[i])\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a walk \u51fd\u6570\uff0c\u662f\u6570\u636e\u7684\u521d\u59cb\u5316\u8fc7\u7a0b\u7684\u7ec8\u70b9\u3002\u5728\u6b64\u4e4b\u524d\uff0c\u505a\u4e86\u5f88\u591a\u4e8b\u60c5\uff0c\u6539\u5199\u4e86\u6570\u7ec4\u7c7b\u578b\u5c5e\u6027\u7684\u539f\u578b\uff0c\u5bf9\u4e8e\u6bcf\u4e2a\u5bf9\u8c61\u8c03\u7528\u4e86 observe \u65b9\u6cd5\u53bb\u5b9e\u4f8b\u5316\u4e00\u4e2a Observer \u5b9e\u4f8b\uff0c\u4f46\u8fd9\u4e9b\u4e8b\u60c5\uff0c\u5176\u5b9e\u90fd\u8fd8\u5dee\u4e86\u6700\u6838\u5fc3\u7684\u4e00\u90e8\u5206 \u2014\u2014 \u6ce8\u518c\u56de\u8c03\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u7684\u76ee\u6807\u662f\u6570\u636e\u66f4\u65b0\u65f6\uff0c\u80fd\u591f\u81ea\u52a8\u54cd\u5e94\uff0c\u8fd9\u5176\u5b9e\u7b49\u4ef7\u4e8e\u8bf4\uff0c\u5f53\u4fee\u6539\u6570\u636e\u65f6\uff0c\u8c03\u7528\u76f8\u5e94\u7684\u56de\u8c03\u51fd\u6570\u3002\u8fd9\u4e00\u5207\uff0c\u90fd\u7740\u843d\u5728 defineReactive \u4e4b\u4e0a\u3002"),(0,a.kt)("h2",{id:"definereactive"},"defineReactive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export function defineReactive(\n  obj: Object,\n  key: string,\n  val: any,\n  customSetter?: ?Function,\n  shallow?: boolean\n) {\n  const dep = new Dep();\n\n  const property = Object.getOwnPropertyDescriptor(obj, key);\n  if (property && property.configurable === false) {\n    return;\n  }\n\n  // cater for pre-defined getter/setters\n  const getter = property && property.get;\n  const setter = property && property.set;\n  if ((!getter || setter) && arguments.length === 2) {\n    val = obj[key];\n  }\n\n  let childOb = !shallow && observe(val);\n  Object.defineProperty(obj, key, {\n    enumerable: true,\n    configurable: true,\n    get: function reactiveGetter() {\n      const value = getter ? getter.call(obj) : val;\n      if (Dep.target) {\n        dep.depend();\n        if (childOb) {\n          childOb.dep.depend();\n          if (Array.isArray(value)) {\n            dependArray(value);\n          }\n        }\n      }\n      return value;\n    },\n    set: function reactiveSetter(newVal) {\n      const value = getter ? getter.call(obj) : val;\n      /* eslint-disable no-self-compare */\n      if (newVal === value || (newVal !== newVal && value !== value)) {\n        return;\n      }\n      /* eslint-enable no-self-compare */\n      if (process.env.NODE_ENV !== "production" && customSetter) {\n        customSetter();\n      }\n      // #7981: for accessor properties without setter\n      if (getter && !setter) return;\n      if (setter) {\n        setter.call(obj, newVal);\n      } else {\n        val = newVal;\n      }\n      childOb = !shallow && observe(newVal);\n      dep.notify();\n    },\n  });\n}\n')),(0,a.kt)("p",null,"\u5148\u662f\u5b9a\u4e49\u4e86\u4e00\u4e2a Dep \u7684\u5b9e\u4f8b dep \uff0c\u8fd9\u4e2a dep \u5176\u5b9e\u4e0d\u5e94\u8be5\u5b9a\u4e49\u5728\u6700\u524d\u9762\uff0c\u56e0\u4e3a\u6709\u53ef\u80fd\u4f1a\u63d0\u524d return \u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5224\u65ad\u6709\u65e0\u81ea\u5b9a\u4e49\u7684 getter \u548c setter \uff0c\u8fdb\u884c\u6574\u5408\uff0c\u901a\u8fc7 Object.defineProperty \u91cd\u65b0\u5b9a\u4e49\u4e86 getter \u548c setter\u3002 getter \u662f\u4f9d\u8d56\u6536\u96c6\u7684\u8fc7\u7a0b\uff0c\u901a\u8fc7\u8c03\u7528 dep.depend \u4fdd\u5b58\u4e86\u4f9d\u8d56\u5173\u7cfb\uff0csetter \u662f\u6d3e\u53d1\u66f4\u65b0\u7684\u6240\u5728\uff0c\u901a\u8fc7\u8c03\u7528 dep.notify \u901a\u77e5\u76f8\u5173\u7684\u4f9d\u8d56\u65b9\u3002\u5173\u4e8e\u4f9d\u8d56\u6536\u96c6\u548c\u6d3e\u53d1\u66f4\u65b0\u7684\u5185\u5bb9\uff0c\u540e\u9762\u5355\u72ec\u7ae0\u8282\u8fdb\u884c\u8be6\u7ec6\u8bb2\u89e3\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u672c\u6587\u8bf4\u660e\u4e86\u5bf9\u4e8e data \u6570\u636e\u7684\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e Array \u6570\u636e\uff0c\u80fd\u591f\u68c0\u6d4b\u5230\u5176\u53d8\u5316\u662f\u901a\u8fc7\u91cd\u65b0\u5b9a\u4e49\u5176\u539f\u578b\u94fe\u4e0a\u7684\u6570\u7ec4\u65b9\u6cd5\uff0c\u76f8\u5f53\u4e8e\u5728\u539f\u578b\u94fe\u4e0a\u63d2\u5165\u4e86\u6700\u8fd1\u7684\u4e00\u7ea7\u8282\u70b9\u3002\u5f53\u66f4\u65b0\u6570\u7ec4\u65f6\uff0c\u5bf9\u65b0\u63d2\u5165\u7684\u5bf9\u8c61\u6dfb\u52a0 observe\uff0c\u53d1\u5e03\u6570\u7ec4\u66f4\u65b0\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e Object \u6570\u636e(\u5305\u62ec data \u8fd4\u56de\u7684\u5bf9\u8c61\uff0c\u5b50\u5bf9\u8c61\uff0c\u6570\u7ec4\u5143\u7d20\u4e2d\u7684\u5bf9\u8c61\u7b49)\uff0c\u5219\u662f\u5bf9\u6bcf\u4e2a\u5c5e\u6027\uff0c\u8c03\u7528 defineReactive \u53bb\u5b9a\u4e49 getter/setter\uff0c\u4ee5\u5b9e\u73b0\u4f9d\u8d56\u6536\u96c6\u548c\u66f4\u65b0\u6d3e\u53d1\u3002"),(0,a.kt)("p",null,"\u5728\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u6bcf\u4e2a Array \u6216\u8005 Object \u7c7b\u578b\u7684\u6570\u636e\u90fd\u5c06\u5177\u6709\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"ob")," \u5c5e\u6027\uff0c\u5f15\u7528\u4e00\u4e2a Observer \u5b9e\u4f8b\uff0c\u8fd9\u4e2a Observer \u5b9e\u4f8b\uff0c\u8d1f\u8d23\u7ef4\u62a4\u6240\u6709\u5bf9\u8be5\u6570\u636e\u7684\u8ba2\u9605\u3002"))}d.isMDXComponent=!0}}]);