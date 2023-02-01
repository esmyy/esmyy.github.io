"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6985],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},i="createElement \u7684\u4f5c\u7528\u662f\u6839\u636e\u4e2d\u95f4\u4ee3\u7801\u751f\u6210 vnode",l={unversionedId:"frameworks/vue2/render/create-element",id:"frameworks/vue2/render/create-element",title:"createElement \u7684\u4f5c\u7528\u662f\u6839\u636e\u4e2d\u95f4\u4ee3\u7801\u751f\u6210 vnode",description:"\u524d\u7f6e\u5185\u5bb9",source:"@site/docs/05-frameworks/02-vue2/03-render/07-create-element.md",sourceDirName:"05-frameworks/02-vue2/03-render",slug:"/frameworks/vue2/render/create-element",permalink:"/docs/frameworks/vue2/render/create-element",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/03-render/07-create-element.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"vue2",previous:{title:"update",permalink:"/docs/frameworks/vue2/render/update"},next:{title:"createComponentVNode",permalink:"/docs/frameworks/vue2/render/create-vnode"}},d={},c=[{value:"\u524d\u7f6e\u5185\u5bb9",id:"\u524d\u7f6e\u5185\u5bb9",level:2},{value:"createElement",id:"createelement",level:2},{value:"simpleNormalizeChildren",id:"simplenormalizechildren",level:2},{value:"normalizeChildren",id:"normalizechildren",level:2},{value:"\u521b\u5efa vnode",id:"\u521b\u5efa-vnode",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"createelement-\u7684\u4f5c\u7528\u662f\u6839\u636e\u4e2d\u95f4\u4ee3\u7801\u751f\u6210-vnode"},"createElement \u7684\u4f5c\u7528\u662f\u6839\u636e\u4e2d\u95f4\u4ee3\u7801\u751f\u6210 vnode"),(0,a.kt)("h2",{id:"\u524d\u7f6e\u5185\u5bb9"},"\u524d\u7f6e\u5185\u5bb9"),(0,a.kt)("p",null,"\u7f16\u8bd1\u751f\u6210\u7684\u4e2d\u95f4\u4ee3\u7801\uff0c\u8c03\u7528\u7684","_","c \u662f$createElement \u7684\u522b\u540d\uff0c\u5b9a\u4e49\u5728 src/core/instance/render.js\uff0c\u662f\u5728 vm.","_","init \u6267\u884c\u7684\u65f6\u8c03\u7528\u7684 initRender \u4e2d\u5b9a\u4e49\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { createElement } from "../vdom/create-element";\n// ...\n\nexport function initRender(vm: Component) {\n  vm._vnode = null; // the root of the child tree\n\n  vm._staticTrees = null; // v-once cached trees\n  const options = vm.$options;\n  const parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree\n  const renderContext = parentVnode && parentVnode.context;\n  vm.$slots = resolveSlots(options._renderChildren, renderContext);\n  vm.$scopedSlots = emptyObject;\n  // bind the createElement fn to this instance\n  // so that we get proper render context inside it.\n  // args order: tag, data, children, normalizationType, alwaysNormalize\n  // internal version is used by render functions compiled from templates\n  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false);\n  // normalization is always applied for the public version, used in\n  // user-written render functions.\n  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true);\n\n  // $attrs & $listeners are exposed for easier HOC creation.\n  // they need to be reactive so that HOCs using them are always updated\n  const parentData = parentVnode && parentVnode.data;\n\n  /* istanbul ignore else */\n  if (process.env.NODE_ENV !== "production") {\n    defineReactive(\n      vm,\n      "$attrs",\n      (parentData && parentData.attrs) || emptyObject,\n      () => {\n        !isUpdatingChildComponent && warn(`$attrs is readonly.`, vm);\n      },\n      true\n    );\n\n    // options._parentListeners\u662f\u4ec0\u4e48\u65f6\u5019\u5b9a\u4e49\u7684\u3002\n    defineReactive(\n      vm,\n      "$listeners",\n      options._parentListeners || emptyObject,\n      () => {\n        !isUpdatingChildComponent && warn(`$listeners is readonly.`, vm);\n      },\n      true\n    );\n  } else {\n    defineReactive(\n      vm,\n      "$attrs",\n      (parentData && parentData.attrs) || emptyObject,\n      null,\n      true\n    );\n    defineReactive(\n      vm,\n      "$listeners",\n      options._parentListeners || emptyObject,\n      null,\n      true\n    );\n  }\n}\n')),(0,a.kt)("p",null,"_","c \u548c$createElement \u5b9e\u8d28\u90fd\u662f createElement\uff0c\u4e24\u8005\u7684 alwaysNormalize \u9ed8\u8ba4\u53c2\u6570\u4e0d\u540c\uff0c\u7528\u9014\u4e0d\u540c\u3002"),(0,a.kt)("p",null,"vm.","_","c\uff1a\u7f16\u8bd1\u6a21\u677f\u4e4b\u540e\uff0c\u5728\u4e2d\u95f4\u4ee3\u7801\u4e2d\u4f1a\u4f7f\u7528 this.","_","c \u6765\u521b\u5efa\u8282\u70b9\n$createElement\uff1a\u4f7f\u7528\u81ea\u5b9a\u4e49 render \u65b9\u6cd5\u65f6\uff0c\u6bd4\u5982 render: (h) => h(App) \u8fd9\u4e2a h \u5c31\u662f $createElement"),(0,a.kt)("h2",{id:"createelement"},"createElement"),(0,a.kt)("p",null,"createElement \u51fd\u6570\u5b9a\u4e49\u5728 src/core/vdom/create-element.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export function createElement(\n  context: Component,\n  tag: any,\n  data: any,\n  children: any,\n  normalizationType: any,\n  alwaysNormalize: boolean\n): VNode | Array<VNode> {\n  if (Array.isArray(data) || isPrimitive(data)) {\n    normalizationType = children;\n    children = data;\n    data = undefined;\n  }\n\n  if (isTrue(alwaysNormalize)) {\n    normalizationType = ALWAYS_NORMALIZE;\n  }\n  return _createElement(context, tag, data, children, normalizationType);\n}\n")),(0,a.kt)("p",null,"createElement \u5bf9","_","createElement \u7684\u5c01\u88c5\uff0c\u8fd9\u5c42\u5c01\u88c5\u662f\u505a\u53c2\u6570\u5904\u7406\uff0c\u5957\u4e86\u4e00\u5c42\u5bf9\u4e0d\u540c\u7684\u8c03\u7528\u573a\u666f\u505a\u9002\u914d\uff0c\u4fdd\u6301\u6838\u5fc3\u903b\u8f91\u7684\u4e00\u81f4\u3002 \u6ce8\u610f\u4e0b normalizationType\uff0c$createElement \u8fd9\u4e2a\u522b\u540d\u8c03\u7528\u65f6\u9ed8\u8ba4\u4f20\u9012\u7684\u5c31\u662f ALWAYS_NORMALIZE\uff0c\u800c vm.","_","c \u8c03\u7528\u65f6\u5219\u4e0d\u662f\u3002"),(0,a.kt)("p",null,"_","createElement \u6838\u5fc3\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export function _createElement(\n  context: Component,\n  tag?: string | Class<Component> | Function | Object,\n  data?: VNodeData,\n  children?: any,\n  normalizationType?: number\n): VNode | Array<VNode> {\n  // ...\n\n  if (normalizationType === ALWAYS_NORMALIZE) {\n    children = normalizeChildren(children);\n  } else if (normalizationType === SIMPLE_NORMALIZE) {\n    children = simpleNormalizeChildren(children);\n  }\n\n  let vnode, ns;\n  if (typeof tag === "string") {\n    let Ctor;\n    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);\n    if (config.isReservedTag(tag)) {\n      vnode = new VNode(\n        config.parsePlatformTagName(tag),\n        data,\n        children,\n        undefined,\n        undefined,\n        context\n      );\n    } else if (\n      (!data || !data.pre) &&\n      isDef((Ctor = resolveAsset(context.$options, "components", tag)))\n    ) {\n      // component\n      vnode = createComponent(Ctor, data, context, children, tag);\n    } else {\n      // unknown or unlisted namespaced elements\n      // check at runtime because it may get assigned a namespace when its\n      // parent normalizes children\n      vnode = new VNode(tag, data, children, undefined, undefined, context);\n    }\n  } else {\n    // direct component options / constructor\n    vnode = createComponent(tag, data, context, children);\n  }\n\n  if (Array.isArray(vnode)) {\n    return vnode;\n  } else if (isDef(vnode)) {\n    if (isDef(ns)) applyNS(vnode, ns);\n    if (isDef(data)) registerDeepBindings(data);\n    return vnode;\n  } else {\n    return createEmptyVNode();\n  }\n}\n')),(0,a.kt)("p",null,"\u5c31\u662f\u5728\u521b\u5efa VNode \u4e4b\u524d\uff0c\u5148\u505a\u4e00\u4e9b\u6807\u51c6\u5316\u7684\u5904\u7406\uff0c\u5c31\u8ddf\u51fd\u6570\u5e38\u5e38\u9700\u8981\u5148\u5224\u65ad\u53c2\u6570\uff0c\u5904\u7406\u53c2\u6570\u4e00\u6837\u3002 \u5f53\u7136\uff0c\u4e24\u79cd\u6807\u51c6\u5316\u90fd\u662f\u6709\u6761\u4ef6\u7684\uff0c\u5e76\u4e0d\u662f\u6bcf\u4e2a\u8282\u70b9\u90fd\u9700\u8981\u8fdb\u884c\u6807\u51c6\u5316\u3002"),(0,a.kt)("p",null,"\u8001\u5b9e\u8bf4\uff0c\u8fd9\u91cc\u7684\u6807\u51c6\u5316\uff0c\u662f\u86ee\u96be\u7406\u89e3\u7684\u3002 \u5927\u591a\u6570\u7684\u4ecb\u7ecd\u7684\u6587\u7ae0\u90fd\u53ea\u662f\u7ed9\u6ce8\u91ca\u505a\u4e2a\u7ffb\u8bd1\uff0c\u5e76\u6ca1\u6709\u89e3\u91ca\u8bf8\u591a\u7591\u95ee\uff0c\u6807\u51c6\u5316\u505a\u4e86\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\u8981\u505a\u6807\u51c6\u5316\uff0c\u4e24\u79cd\u6807\u51c6\u5316\u7684\u533a\u522b\u53c8\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("h2",{id:"simplenormalizechildren"},"simpleNormalizeChildren"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// 1. When the children contains components - because a functional component\n// may return an Array instead of a single root. In this case, just a simple\n// normalization is needed - if any child is an Array, we flatten the whole\n// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep\n// because functional components already normalize their own children.\nexport function simpleNormalizeChildren(children: any) {\n  for (let i = 0; i < children.length; i++) {\n    if (Array.isArray(children[i])) {\n      return Array.prototype.concat.apply([], children);\n    }\n  }\n  return children;\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5c31\u662f\u901a\u8fc7 Array.prototype.concat \u51fd\u6570\u628a children \u6253\u5e73\u6210\u4e00\u7ef4\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u6ce8\u91ca\u91cc\u9762\u7684\u63cf\u8ff0\u662f\u4e0d\u5177\u4f53\u7684"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"a functional component may return an Array instead of a single root"))),(0,a.kt)("p",null,"\u53ea\u662f\u8bf4\u53ef\u80fd\u51fa\u73b0\uff0c\u800c\u4e0d\u662f\u5177\u4f53\u4e3e\u4f8b\uff0c\u8fd9\u5c31\u8ba9\u4eba\u975e\u5e38\u5934\u5927\u4e86\u3002"),(0,a.kt)("h2",{id:"normalizechildren"},"normalizeChildren"),(0,a.kt)("p",null,"\u5f53\u8c03\u7528 $createElement \u65f6\u4f1a\u6267\u884c normalizeChildren"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// 2. When the children contains constructs that always generated nested Arrays,\n// e.g. <template>, <slot>, v-for, or when the children is provided by user\n// with hand-written render functions / JSX. In such cases a full normalization\n// is needed to cater to all possible types of children values.\nexport function normalizeChildren(children: any): ?Array<VNode> {\n  return isPrimitive(children)\n    ? [createTextVNode(children)]\n    : Array.isArray(children)\n    ? normalizeArrayChildren(children)\n    : undefined;\n}\n")),(0,a.kt)("p",null,"\u5224\u65ad children \u662f\u5426 isPrimitive(\u8868\u793a string\uff0cnumber\uff0csymbol\uff0cboolean)\uff0c\u5982\u679c\u662f\u5219\u5f53\u505a\u6587\u672c\u8282\u70b9\u521b\u5efa\u3002 \u5982\u679c chldren \u662f\u6570\u7ec4\uff0c\u5219\u8c03\u7528 normalizeArrayChildren \u53bb\u904d\u5386\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u8bf7\u5173\u6ce8\u8fd4\u56de\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"?Array<VNode>"),"\uff0cnormalizeChildren \u505a\u7684\u4e8b\u60c5\uff0c\u5c31\u662f\u5c06 children \u8f6c\u6362\u4e3a vnode \u6570\u7ec4\u3002 \u56e0\u4e3a\u624b\u5199 render \u65f6\uff0c\u4ea4\u7ed9 createElement \u7684 children \u5e76\u4e0d\u662f vnode\uff0c\u9700\u8981\u8f6c\u6362\u4e3a vnode\u3002"),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\u6765\u770b\u4e00\u4e0b\uff0c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const app = new Vue({\n  render: function (createElement) {\n    return createElement("div", "test");\n  },\n});\n\napp.$mount("#app");\n')),(0,a.kt)("p",null,'\u6b64\u65f6 children \u53c2\u6570\u662f "test"\uff0c\u5219\u5f53\u505a\u4e00\u4e2a\u7eaf\u6587\u672c\u8282\u70b9\u8c03\u7528 createTextVNode \u751f\u6210\u4e0b\u9762\u7684 VNode \u6570\u7ec4'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'children = [\n  { // VNode\n    asyncFactory: undefined\n    asyncMeta: undefined\n    children: undefined\n    componentInstance: undefined\n    componentOptions: undefined\n    context: undefined\n    data: undefined\n    elm: undefined\n    fnContext: undefined\n    fnOptions: undefined\n    fnScopeId: undefined\n    isAsyncPlaceholder: false\n    isCloned: false\n    isComment: false\n    isOnce: false\n    isRootInsert: true\n    isStatic: false\n    key: undefined\n    ns: undefined\n    parent: undefined\n    raw: false\n    tag: undefined\n    text: "test"\n    child: (...)\n  }\n]\n')),(0,a.kt)("h2",{id:"\u521b\u5efa-vnode"},"\u521b\u5efa vnode"),(0,a.kt)("p",null,"\u6807\u51c6\u5316\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u751f\u6210 vnode \u4e86\uff0c\u5f53 tag \u4e3a\u5b57\u7b26\u4e32\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export function _createElement(\n  context: Component,\n  tag?: string | Class<Component> | Function | Object,\n  data?: VNodeData,\n  children?: any,\n  normalizationType?: number\n): VNode | Array<VNode> {\n  normalize(); // ...\n\n  if (typeof tag === "string") {\n    let Ctor;\n    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);\n    if (config.isReservedTag(tag)) {\n      // platform built-in elements\n      vnode = new VNode(\n        config.parsePlatformTagName(tag),\n        data,\n        children,\n        undefined,\n        undefined,\n        context\n      );\n    } else if (\n      (!data || !data.pre) &&\n      isDef((Ctor = resolveAsset(context.$options, "components", tag)))\n    ) {\n      // component\n      vnode = createComponent(Ctor, data, context, children, tag);\n    } else {\n      // unknown or unlisted namespaced elements\n      // check at runtime because it may get assigned a namespace when its\n      // parent normalizes children\n      vnode = new VNode(tag, data, children, undefined, undefined, context);\n    }\n  } else {\n    // direct component options / constructor\n    vnode = createComponent(tag, data, context, children);\n  }\n}\n')),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4fdd\u7559\u7684\u5143\u7d20(\u5982 div,span)\u548c\u672a\u6ce8\u518c\u7684\u5143\u7d20\uff0c\u76f4\u63a5\u8c03\u7528 new VNode \u5b9e\u4f8b\u5316\u521b\u5efa\u4e86\u666e\u901a\u7684 vnode\u3002\u5bf9\u4e8e\u5df2\u6ce8\u518c\u7684\u7ec4\u4ef6\u8c03\u7528 createComponent \u521b\u5efa\u4e86\u7ec4\u4ef6\u7c7b\u578b\u7684 vnode\uff0c\u8fd9\u4e2a\u65f6\u5019\u5176\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f Ctor\uff0c\u8fd9\u4e2a\u51fd\u6570\u81ea\u7136\u4e5f\u8fd4\u56de\u4e00\u4e2a vnode\uff0c\u4e0d\u8fc7\u7531\u4e8e\u7ec4\u4ef6\u7c7b\u522b\u9700\u8981\u66f4\u591a\u7684\u8bbe\u7f6e\u548c\u5904\u7406\u800c\u72ec\u7acb\u51fa\u6765\u4e86\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e direct component options / constructor\uff0c\u573a\u666f\u4e4b\u4e00\u662f\u76f4\u63a5\u8c03\u7528$createElement\uff0c\u8fd9\u4e2a\u65f6\u5019 tag \u662f\u7ec4\u4ef6\u7684 options\uff0c\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const app = new Vue({\n  render: (h) => h(App),\n});\n\napp.$mount("#app");\n')),(0,a.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u5219\u8c03\u7528 createComponent \u53bb\u6ce8\u518c\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"createElement \u8c03\u7528\u4e00\u822c\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u4e2d\u95f4\u4ee3\u7801\u4e2d\u901a\u8fc7 ","_","c \u8c03\u7528\uff0c\u6216\u8005\u901a\u8fc7\u81ea\u5b9a\u4e49 render \u65b9\u6cd5\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u6309\u7167\u6a21\u677f\u7f16\u8bd1\u751f\u6210\u4e2d\u95f4\u4ee3\u7801\u8fd9\u79cd\u60c5\u51b5\u770b\uff0ccreateElement \u662f\u6839\u636e\u7f16\u8bd1\u751f\u6210\u7684\u4e2d\u95f4\u4ee3\u7801\uff0c\u751f\u6210 vnode."),(0,a.kt)("admonition",{title:"s",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"createElement \u7684\u4f5c\u7528\u5c31\u662f\u521b\u5efa vnode \u5143\u7d20\uff0c\u6240\u4ee5\u6211\u79f0\u4f5c createVNodeElement\uff0c\u8fd9\u66f4\u80fd\u4f53\u73b0\u5176\u4f5c\u7528")))}p.isMDXComponent=!0}}]);