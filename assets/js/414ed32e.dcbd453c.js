"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6269],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>f});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=o.createContext({}),s=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):d(d({},e),n)),t},l=function(n){var e=s(n.components);return o.createElement(c.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,c=n.parentName,l=i(n,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(f,d(d({ref:e},l),{},{components:t})):o.createElement(f,d({ref:e},l))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,d=new Array(a);d[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[p]="string"==typeof n?n:r,d[1]=i;for(var s=2;s<a;s++)d[s]=t[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8231:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={},d="createComponentVNode",i={unversionedId:"frameworks/vue2/render/create-vnode",id:"frameworks/vue2/render/create-vnode",title:"createComponentVNode",description:"\u5728 Vue \u6e90\u7801\u4e2d\u6709\u4e0d\u6b62\u4e00\u4e2a createComponent\uff0c\u6211\u6839\u636e\u5176\u4f5c\u7528\u53d6\u4e86\u522b\u540d\u3002",source:"@site/docs/05-frameworks/02-vue2/03-render/08-create-vnode.md",sourceDirName:"05-frameworks/02-vue2/03-render",slug:"/frameworks/vue2/render/create-vnode",permalink:"/docs/frameworks/vue2/render/create-vnode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/03-render/08-create-vnode.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"frameworks",previous:{title:"createElement \u7684\u4f5c\u7528\u662f\u6839\u636e\u4e2d\u95f4\u4ee3\u7801\u751f\u6210 vnode",permalink:"/docs/frameworks/vue2/render/create-element"},next:{title:"patch",permalink:"/docs/frameworks/vue2/render/patch"}},c={},s=[{value:"\u672c\u6587\u7528\u4f8b",id:"\u672c\u6587\u7528\u4f8b",level:2},{value:"\u7ec4\u4ef6\u6784\u9020\u51fd\u6570",id:"\u7ec4\u4ef6\u6784\u9020\u51fd\u6570",level:2},{value:"\u5b89\u88c5\u7ec4\u4ef6\u94a9\u5b50",id:"\u5b89\u88c5\u7ec4\u4ef6\u94a9\u5b50",level:2},{value:"placeholder vnode",id:"placeholder-vnode",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],l={toc:s},p="wrapper";function u(n){let{components:e,...t}=n;return(0,r.kt)(p,(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"createcomponentvnode"},"createComponentVNode"),(0,r.kt)("p",null,"\u5728 Vue \u6e90\u7801\u4e2d\u6709\u4e0d\u6b62\u4e00\u4e2a createComponent\uff0c\u6211\u6839\u636e\u5176\u4f5c\u7528\u53d6\u4e86\u522b\u540d\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u8981\u8bf4\u7684 createComponent \u51fd\u6570\uff0c\u5176\u4f5c\u7528\u662f\u751f\u6210\u7ec4\u4ef6\u5bf9\u5e94\u7684 vnode\uff0c\u56e0\u6b64\u522b\u540d\u4e3a createComponentVNode\u3002"),(0,r.kt)("p",null,"createComponent \u6709\u4e24\u79cd\u65b9\u5f0f\u8c03\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// component\nvnode = createComponent(Ctor, data, context, children, tag);\n\n// direct component options / constructor\nvnode = createComponent(tag, data, context, children);\n")),(0,r.kt)("p",null,"createComponent \u4f2a\u4ee3\u7801\u63cf\u8ff0\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function createComponent(\n  Ctor: Class<Component> | Function | Object | void,\n  data: ?VNodeData,\n  context: Component,\n  children: ?Array<VNode>,\n  tag?: string\n): VNode | Array<VNode> | void {\n  normalizeCtor(); // ...\n\n  installComponentHooks(data);\n\n  createPlaceholderVnode(); // ...\n\n  return vnode;\n}\n")),(0,r.kt)("p",null,"\u6709\u4e09\u4e2a\u5173\u952e\u6b65\u9aa4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6784\u9020\u5b50\u7c7b\u6784\u9020\u51fd\u6570"),": Ctor \u5bf9\u5916\u652f\u6301\u4e86\u591a\u79cd\u7c7b\u578b\u7684\u53c2\u6570\u4ee5\u9002\u7528\u591a\u79cd\u8c03\u7528\u573a\u666f\uff0c\u5728\u5185\u90e8\u9700\u8981\u5904\u7406\u6210\u7edf\u4e00\u7684\u5f62\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7ec4\u4ef6\u94a9\u5b50\u5b89\u88c5"),": \u8fd9\u4e2a\u94a9\u5b50\u4e0d\u662f created \u90a3\u7c7b\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0c\u800c\u662f \u5185\u90e8\u7684 \u9488\u5bf9 vnode \u7684\u521b\u5efa\uff0c\u6bd4\u8f83\u548c\u9500\u6bc1\u7b49\u7684\u94a9\u5b50\uff0c\u4e24\u8005\u662f\u5173\u8054\u7684\uff0c\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u662f\u5916\u90e8\u7684\uff0c\u4e00\u4e2a\u662f\u5185\u90e8\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u521b\u5efa vnode"),": \u7ec4\u4ef6\u7684 vnode \u662f\u6bd4\u8f83\u7279\u6b8a\u7684\uff0c\u8fd9\u91cc\u88ab\u79f0\u4f5c placeholder vnode\uff0c\u662f\u4e00\u4e2a\u5360\u4f4d\u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u5957\u4e86\u4e2a\u9a6c\u7532\u3002")),(0,r.kt)("h2",{id:"\u672c\u6587\u7528\u4f8b"},"\u672c\u6587\u7528\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Demo = {\n  template: "<div>demo</div>",\n};\n\nnew Vue({\n  components: {\n    Demo,\n  },\n\n  template: `<div class="header">\n    <demo></demo>\n  </div>`,\n  el: "#app",\n});\n')),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u6784\u9020\u51fd\u6570"},"\u7ec4\u4ef6\u6784\u9020\u51fd\u6570"),(0,r.kt)("p",null,"\u6240\u8c13 ",(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u6784\u9020\u51fd\u6570"),"\uff0c\u5c31\u662f\u8981\u5728\u57fa\u7840\u7c7b\u7684\u57fa\u7840\u4e0a\u62d3\u5c55\u4e00\u4e9b\u5185\u5bb9\uff0c\u8fd9\u4e9b\u62d3\u5c55\u7684\u5185\u5bb9\u662f\u7ec4\u4ef6\u81ea\u8eab\u7684 options\uff0c\u6bcf\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6709\u81ea\u5df1\u7684 Vue \u5b50\u7c7b\u6784\u9020\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if (isUndef(Ctor)) {\n  return;\n}\n\nconst baseCtor = context.$options._base;\n\n// plain options object: turn it into a constructor\nif (isObject(Ctor)) {\n  Ctor = baseCtor.extend(Ctor);\n}\n\n// if at this stage it\'s not a constructor or an async component factory,\n// reject.\nif (typeof Ctor !== "function") {\n  if (process.env.NODE_ENV !== "production") {\n    warn(`Invalid Component definition: ${String(Ctor)}`, context);\n  }\n  return;\n}\n\n// async component\nlet asyncFactory;\nif (isUndef(Ctor.cid)) {\n  asyncFactory = Ctor;\n  Ctor = resolveAsyncComponent(asyncFactory, baseCtor);\n  if (Ctor === undefined) {\n    // return a placeholder node for async component, which is rendered\n    // as a comment node but preserves all the raw information for the node.\n    // the information will be used for async server-rendering and hydration.\n    return createAsyncPlaceholder(asyncFactory, data, context, children, tag);\n  }\n}\n// ...\n')),(0,r.kt)("p",null,"\u5148\u83b7\u53d6\u5230 baseCtor\uff0c","_","base \u5176\u5b9e\u5c31\u662f Vue \u6784\u9020\u51fd\u6570\uff0c\u8fd9\u662f\u5728 initGlobalAPI \u91cc\u9762\u8bbe\u7f6e\u7684\u3002 \u5f53 Ctor \u662f\u4e00\u4e2a plain object \u65f6\uff0c\u4f7f\u7528 extend \u751f\u6210\u4e00\u4e2a\u7ec4\u4ef6\u6784\u9020\u51fd\u6570\uff0c\u6211\u4eec\u5199.vue \u6587\u4ef6\u7684\u65f6\u5019\u5728 script \u90e8\u5206 export default \u5bfc\u51fa\u7684\u5bf9\u8c61\uff0c\u5c31\u662f\u8fd9\u91cc plain object \u7684\u4e00\u79cd\u3002"),(0,r.kt)("p",null,"Ctor \u7684\u793a\u4f8b\u7ed3\u679c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  cid: 1\n  component: function() {}\n  directive: function() {}\n  extend: function() {}\n  extendOptions: {template: "<div>demo</div>", _Ctor: {\u2026}}\n  filter: function() {}\n  mixin: \u0192 (mixin)\n  options: {\n    components: {}\n    directives: {}\n    filters: {}\n    template: "<div>demo</div>"\n    _Ctor: {0: \u0192}\n    _base: \u0192 Vue(options)\n  }\n}\n')),(0,r.kt)("p",null,"\u5c55\u793a\u8fd9\u4e2a\u793a\u4f8b\u7ed3\u679c\uff0c\u4e3b\u8981\u6240\u60f3\u5728\u6b64\u76f4\u89c2\u770b\u4e00\u4e0b Ctor \u7684\u4f5c\u7528\uff0c\u5e76\u518d\u6b21\u5f3a\u8c03\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u7684\u529f\u80fd\u3002 \u53ef\u4ee5\u5c06\u8fd9\u4e2a Ctor \u548c \u6211\u4eec\u5199\u7684\u7ec4\u4ef6\u6587\u4ef6\u5bf9\u5e94\u8d77\u6765\uff0c\u5b83\u5176\u5b9e\u5c31\u662f\u6211\u4eec\u5199\u7684\u7ec4\u4ef6\uff0c\u6362\u4e86\u4e2a\u9a6c\u7532\u800c\u5df2\u3002"),(0,r.kt)("p",null,"\u6ce8\uff1a\u8fd9\u4e2a Ctor \u4f1a\u88ab\u8bbe\u7f6e\u4e3a vnode.componentOptions.Ctor\uff0c\u5728\u540e\u9762\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u5316\u7684\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6\u94a9\u5b50"},"\u5b89\u88c5\u7ec4\u4ef6\u94a9\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function createComponent(\n  Ctor: Class<Component> | Function | Object | void,\n  data: ?VNodeData,\n  context: Component,\n  children: ?Array<VNode>,\n  tag?: string\n): VNode | Array<VNode> | void {\n  // ...\n  data = data || {};\n  // extract listeners, since these needs to be treated as\n  // child component listeners instead of DOM listeners\n  const listeners = data.on;\n  // replace with listeners with .native modifier\n  // so it gets processed during parent component patch.\n  data.on = data.nativeOn;\n\n  if (isTrue(Ctor.options.abstract)) {\n    // abstract components do not keep anything\n    // other than props & listeners & slot\n\n    // work around flow\n    const slot = data.slot;\n    data = {};\n    if (slot) {\n      data.slot = slot;\n    }\n  }\n\n  installComponentHooks(data);\n\n  // ...\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u6682\u65f6\u53ea\u8003\u8651 ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u7684\u60c5\u51b5\uff0c\u8fd9\u4e2a\u65f6\u5019 ",(0,r.kt)("inlineCode",{parentName:"p"},"installComponentHooks")," \u51fd\u6570\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u666e\u901a\u7684\u5bf9\u8c61\uff0c\u6211\u4eec\u5c31\u5f53\u505a\u662f\u4e0b\u9762\u8fd9\u6837\u7684\u7ee7\u7eed\u5b66\u4e60"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  on: undefined;\n}\n")),(0,r.kt)("p",null,"installComponentHooks \u76f8\u5173\u4ee3\u7801\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// inline hooks to be invoked on component VNodes during patch\nconst componentVNodeHooks = {\n  init(vnode: VNodeWithData, hydrating: boolean): ?boolean {\n    if (\n      vnode.componentInstance &&\n      !vnode.componentInstance._isDestroyed &&\n      vnode.data.keepAlive\n    ) {\n      // kept-alive components, treat as a patch\n      const mountedNode: any = vnode; // work around flow\n      componentVNodeHooks.prepatch(mountedNode, mountedNode);\n    } else {\n      const child = (vnode.componentInstance = createComponentInstanceForVnode(\n        vnode,\n        activeInstance\n      ));\n      child.$mount(hydrating ? vnode.elm : undefined, hydrating);\n    }\n  },\n\n  prepatch(oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) {\n    const options = vnode.componentOptions;\n    const child = (vnode.componentInstance = oldVnode.componentInstance);\n    updateChildComponent(\n      child,\n      options.propsData, // updated props\n      options.listeners, // updated listeners\n      vnode, // new parent vnode\n      options.children // new children\n    );\n  },\n\n  insert(vnode: MountedComponentVNode) {\n    const { context, componentInstance } = vnode;\n    if (!componentInstance._isMounted) {\n      componentInstance._isMounted = true;\n      callHook(componentInstance, "mounted");\n    }\n    if (vnode.data.keepAlive) {\n      if (context._isMounted) {\n        // vue-router#1212\n        // During updates, a kept-alive component\'s child components may\n        // change, so directly walking the tree here may call activated hooks\n        // on incorrect children. Instead we push them into a queue which will\n        // be processed after the whole patch process ended.\n        queueActivatedComponent(componentInstance);\n      } else {\n        activateChildComponent(componentInstance, true /* direct */);\n      }\n    }\n  },\n\n  destroy(vnode: MountedComponentVNode) {\n    const { componentInstance } = vnode;\n    if (!componentInstance._isDestroyed) {\n      if (!vnode.data.keepAlive) {\n        componentInstance.$destroy();\n      } else {\n        deactivateChildComponent(componentInstance, true /* direct */);\n      }\n    }\n  },\n};\n\nconst hooksToMerge = Object.keys(componentVNodeHooks);\n\nfunction installComponentHooks(data: VNodeData) {\n  const hooks = data.hook || (data.hook = {});\n  for (let i = 0; i < hooksToMerge.length; i++) {\n    const key = hooksToMerge[i];\n    const existing = hooks[key];\n    const toMerge = componentVNodeHooks[key];\n    if (existing !== toMerge && !(existing && existing._merged)) {\n      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"installComponentHooks")," \u7684\u4f5c\u7528\uff0c\u5c31\u662f\u5c06\u8fd9\u4e9b\u94a9\u5b50\u51fd\u6570\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"data.hook")," \u4e2d\uff0c\u8fd9\u6837\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u6709\u4e86\u8fd9\u4e9b\u94a9\u5b50\uff0c\u8fd9\u4e9b\u94a9\u5b50\u6682\u65f6\u8fd8\u6ca1\u6709\u4f7f\u7528\uff0c\u76f4\u89c2\u626b\u4e00\u773c\u53ef\u4ee5\u770b\u5230\u662f\u548c lifecycle \u76f8\u5173\uff0c\u5177\u4f53\u5185\u5bb9\u5728\u540e\u9762 patch \u65f6\u4f7f\u7528\u5230\u518d\u8bf4\u660e\u3002\u5b89\u88c5\u94a9\u5b50\u4e4b\u540e data \u53d8\u6210\u4e0b\u9762\u8fd9\u6837"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  hook: {\n    destroy: function() {\n      // ...\n    },\n    init: function() {\n      // ...\n    },\n    insert: function() {\n      // ...\n    },\n    prepatch: function() {\n      // ...\n    },\n  }\n  on: undefined\n}\n")),(0,r.kt)("h2",{id:"placeholder-vnode"},"placeholder vnode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export function createComponent(\n  Ctor: Class<Component> | Function | Object | void,\n  data: ?VNodeData,\n  context: Component,\n  children: ?Array<VNode>,\n  tag?: string\n): VNode | Array<VNode> | void {\n  // ...\n\n  // return a placeholder vnode\n  const name = Ctor.options.name || tag;\n  const vnode = new VNode(\n    `vue-component-${Ctor.cid}${name ? `-${name}` : ""}`,\n    data,\n    undefined,\n    undefined,\n    undefined,\n    context,\n    { Ctor, propsData, listeners, tag, children },\n    asyncFactory\n  );\n\n  return vnode;\n}\n')),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7ec4\u4ef6\u6765\u8bf4\uff0c\u751f\u6210\u7684 vnode \u662f\u4e00\u4e2a placeholder vnode\uff0c\u5b83\u53ea\u662f\u4e00\u4e2a\u5360\u4f4d\u3002 \u7ec4\u4ef6\u5360\u4f4d\u8282\u70b9\u7684\u6807\u7b7e\u540d\u5305\u542b\u4e86 cid \u548c name\uff0c\u8fd9\u80fd\u5e2e\u52a9\u6211\u4eec\u5728\u8c03\u8bd5\u65f6\u76f4\u89c2\u5730\u533a\u5206\u51fa\u662f\u54ea\u4e2a\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u6700\u7ec8\uff0c\u751f\u6210\u7684\u7ec4\u4ef6 VNode \u662f\u4e0b\u9762\u8fd9\u6837\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  asyncFactory: undefined\n  asyncMeta: undefined\n  children: undefined\n  componentInstance: undefined\n  componentOptions: {propsData: undefined, listeners: undefined, tag: "demo", children: undefined, Ctor: \u0192}\n  context: Vue {_uid: 0, _isVue: true, $options: {\u2026}, _renderProxy: Proxy, _self: Vue, \u2026}\n  data: {on: undefined, hook: {\u2026}}\n  elm: undefined\n  fnContext: undefined\n  fnOptions: undefined\n  fnScopeId: undefined\n  isAsyncPlaceholder: false\n  isCloned: false\n  isComment: false\n  isOnce: false\n  isRootInsert: true\n  isStatic: false\n  key: undefined\n  ns: undefined\n  parent: undefined\n  raw: false\n  tag: "vue-component-1-demo"\n  text: undefined\n  child: (...)\n}\n')),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5360\u4f4d\u8282\u70b9\u7684 elm \u548c children \u59cb\u7ec8\u662f\u4e3a\u7a7a\u7684\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u521b\u5efa\u7ec4\u4ef6\u7684 vnode \u6709\u4e09\u4e2a\u6b65\u9aa4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u7ec4\u4ef6\u6784\u9020\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u9ed8\u8ba4\u7684\u5185\u90e8\u94a9\u5b50"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5316\u751f\u6210 vnode")),(0,r.kt)("p",null,"\u7ec4\u4ef6\u5305\u542b\u7740\u590d\u7528\u80fd\u529b\uff0c\u800c\u590d\u7528\uff0c\u5c31\u4f53\u73b0\u5728\u4e00\u4e2a\u7ec4\u4ef6\u591a\u4e2a\u5b9e\u4f8b\uff0c\u5728\u5185\u90e8\u5b9e\u73b0\u4e0a\uff0c\u8fd9\u4f53\u73b0\u5728\u6bcf\u4e2a\u7ec4\u4ef6\u7ee7\u627f\u81ea Vue\uff0c\u6784\u9020\u81ea\u5df1\u7684\u6784\u9020\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u7ec4\u4ef6 vnode \u8fc7\u7a0b\u4e2d\u7684\u94a9\u5b50\uff0c\u662f\u9488\u5bf9 vnode \u800c\u8a00\u7684\uff0c\u76f8\u5f53\u4e8e\u5bf9\u4e8e\u7ec4\u4ef6\u800c\u8a00\uff0c\u5728 vnode \u4e5f\u6709\u4e00\u4e2a\u751f\u547d\u5468\u671f\u3002"))}u.isMDXComponent=!0}}]);