"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6867],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>v});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,v=p["".concat(i,".").concat(u)]||p[u]||m[u]||a;return t?o.createElement(v,l(l({ref:n},s),{},{components:t})):o.createElement(v,l({ref:n},s))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[p]="string"==typeof e?e:r,l[1]=d;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const a={},l="createElm",d={unversionedId:"frameworks/vue2/render/create-elm",id:"frameworks/vue2/render/create-elm",title:"createElm",description:"createElm \u5728 patch \u8fc7\u7a0b\u4e2d\u8c03\u7528\uff0c\u8d1f\u8d23\u6839\u636e vnode \u751f\u6210 DOM \u5143\u7d20\u5e76\u63d2\u5165\u5230\u5bf9\u5e94\u7684\u4f4d\u7f6e\u3002",source:"@site/docs/05-frameworks/02-vue2/03-render/10-create-elm.md",sourceDirName:"05-frameworks/02-vue2/03-render",slug:"/frameworks/vue2/render/create-elm",permalink:"/docs/frameworks/vue2/render/create-elm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/03-render/10-create-elm.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"frameworks",previous:{title:"patch",permalink:"/docs/frameworks/vue2/render/patch"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/frameworks/vue2/reactivity/intro"}},i={},c=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",level:2},{value:"createComponent",id:"createcomponent",level:2},{value:"createNode",id:"createnode",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],s={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"createelm"},"createElm"),(0,r.kt)("p",null,"createElm \u5728 patch \u8fc7\u7a0b\u4e2d\u8c03\u7528\uff0c\u8d1f\u8d23\u6839\u636e vnode \u751f\u6210 DOM \u5143\u7d20\u5e76\u63d2\u5165\u5230\u5bf9\u5e94\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,r.kt)("p",null,"createElm \u6838\u5fc3\u903b\u8f91\u7b80\u5316\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function createElm(\n  vnode,\n  insertedVnodeQueue,\n  parentElm,\n  refElm,\n  nested,\n  ownerArray,\n  index\n) {\n  vnode.isRootInsert = !nested; // for transition enter check\n  if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {\n    return;\n  }\n\n  const data = vnode.data;\n  const children = vnode.children;\n  const tag = vnode.tag;\n  if (isDef(tag)) {\n    vnode.elm = vnode.ns\n      ? nodeOps.createElementNS(vnode.ns, tag)\n      : nodeOps.createElement(tag, vnode);\n    setScope(vnode);\n\n    createChildren(vnode, children, insertedVnodeQueue);\n    if (isDef(data)) {\n      invokeCreateHooks(vnode, insertedVnodeQueue);\n    }\n    insert(parentElm, vnode.elm, refElm);\n  } else if (isTrue(vnode.isComment)) {\n    vnode.elm = nodeOps.createComment(vnode.text);\n    insert(parentElm, vnode.elm, refElm);\n  } else {\n    vnode.elm = nodeOps.createTextNode(vnode.text);\n    insert(parentElm, vnode.elm, refElm);\n  }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5e76\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u751f\u6210 vnode \u5bf9\u5e94\u7684 DOM \u8282\u70b9\uff0c\u5e76\u4fdd\u5b58\u5728 vnode.elm\u3002 \u6839\u636e vnode \u7ee7\u7eed\u5411\u4e0b\u5bf9\u5176 vnode.children \u6df1\u5ea6\u4f18\u5148\u9012\u5f52\u6267\u884c createElm\uff0c\u8fd9\u6837\u6240\u6709\u7684\u8282\u70b9\u90fd\u5b8c\u6210 elm \u7684\u751f\u6210\u3002 \u5728\u751f\u6210 vnode.elm \u4e4b\u540e\uff0c\u8c03\u7528 insert \u51fd\u6570\u5c06 vnode.elm \u63d2\u5165\u5230\u5bf9\u5e94\u7684\u7236\u7ea7 DOM \u8282\u70b9\u4e2d\u3002\u5bf9\u4e8e\u6839\u8282\u70b9\u800c\u8a00\uff0cinsert \u5c31\u662f\u63d2\u5165\u5230\u9875\u9762\u4e2d\uff0c\u8fd9\u6837\u6700\u7ec8\u6574\u4e2a\u5e94\u7528\u751f\u6210\u7684\u5185\u5bb9\uff0c\u4e5f\u5c31\u6dfb\u52a0\u5230\u4e86\u9875\u9762\u4e0a\u3002"),(0,r.kt)("p",null,"createElm \u4e3b\u8981\u5206\u6210\u4e24\u79cd\u60c5\u51b5"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7684 DOM \u751f\u6210: \u7ec4\u4ef6\u7c7b\u578b\u7684 vnode \u8f6c\u6362\u7684\u8fc7\u7a0b\uff0c\u8c03\u7528 createComponent \u5b8c\u6210\n\u5176\u4ed6\u7c7b\u578b\u8282\u70b9\u7684 DOM \u751f\u6210\uff1a\u5305\u542b\u666e\u901a\u5143\u7d20\uff0c\u6ce8\u91ca\u548c\u6587\u672c\u7b49"),(0,r.kt)("h2",{id:"createcomponent"},"createComponent"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7c7b\u578b\u7684\u8282\u70b9\u901a\u8fc7 createComponent \u751f\u6210\u5bf9\u5e94\u7684 DOM \u5143\u7d20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {\n  return;\n}\n")),(0,r.kt)("p",null,"\u4ece\u5176\u4e0d\u505a\u5224\u65ad\u800c\u76f4\u63a5 return \u6765\u770b\uff0c\u53ef\u77e5\u51fd\u6570\u5185\u90e8\u5e94\u5f53\u662f\u5148\u5305\u542b\u4e86 vnode \u4e3a\u7ec4\u4ef6\u7684\u5224\u65ad\uff0c\u7136\u540e\u518d\u662f elm \u7684\u751f\u6210\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { activeInstance } from \"../instance/lifecycle\";\n\nfunction createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {\n  let i = vnode.data;\n  if (isDef(i)) {\n    // @block1\n    const isReactivated = isDef(vnode.componentInstance) && i.keepAlive;\n    if (isDef((i = i.hook)) && isDef((i = i.init))) {\n      // @block2\n      i(vnode, false /* hydrating */);\n    }\n    // after calling the init hook, if the vnode is a child component\n    // it should've created a child instance and mounted it. the child\n    // component also has set the placeholder vnode's elm.\n    // in that case we can just return the element and be done.\n    if (isDef(vnode.componentInstance)) {\n      // @block3\n      initComponent(vnode, insertedVnodeQueue);\n      insert(parentElm, vnode.elm, refElm);\n      if (isTrue(isReactivated)) {\n        // @block4\n        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);\n      }\n      return true;\n    }\n  }\n}\n")),(0,r.kt)("p",null,"\u5982\u679c vnode \u540d\u526f\u5176\u5b9e\u662f\u4e00\u4e2a VNode \u5b9e\u4f8b\uff0c\u90a3\u4e48\u5c31\u4f1a\u5177\u6709 vnode.data \u5c5e\u6027\uff0c\u8fdb\u5165 @block1\uff0cvnode.hook.init \u662f componentVNodeHooks \u4e4b\u4e00\uff0c\u5bf9\u4e8e\u7ec4\u4ef6\u8fdb\u5165 @block2\u3002"),(0,r.kt)("p",null,"init \u94a9\u5b50\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function init(vnode: VNodeWithData, hydrating: boolean): ?boolean {\n  if (\n    vnode.componentInstance &&\n    !vnode.componentInstance._isDestroyed &&\n    vnode.data.keepAlive\n  ) {\n    // kept-alive components, treat as a patch\n    const mountedNode: any = vnode; // work around flow\n    componentVNodeHooks.prepatch(mountedNode, mountedNode);\n  } else {\n    const child = (vnode.componentInstance = createComponentInstanceForVnode(\n      vnode,\n      activeInstance\n    ));\n    child.$mount(hydrating ? vnode.elm : undefined, hydrating);\n  }\n}\n")),(0,r.kt)("p",null,"\u6682\u4e0d\u8003\u8651 keep-alive \u7684\u60c5\u51b5\uff0c\u5219\u8c03\u7528 createComponentInstanceForVnode \u53bb\u751f\u6210\u4e86 Vue \u7684\u5b9e\u4f8b\uff0c\u5e76\u4e14\u4fdd\u5b58\u5230\u4e86 node.componentInstance \u4e0a\uff0c\u6700\u540e\u662f\u8c03\u7528\u4e86 vm.$mount \u53bb\u6267\u884c\u5b50\u7ec4\u4ef6\u7684\u6302\u8f7d\u3002\u5b50\u7ec4\u4ef6\u4f1a\u5148\u4e8e\u7236\u7ec4\u4ef6\u6302\u8f7d\uff0c\u5c31\u5728\u8fd9\u91cc\u4f53\u73b0\u4e86\u3002"),(0,r.kt)("p",null,"createComponentInstanceForVnode \u4ee3\u7801\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export function createComponentInstanceForVnode(\n  vnode: any, // we know it's MountedComponentVNode but flow doesn't\n  parent: any // activeInstance in lifecycle state\n): Component {\n  const options: InternalComponentOptions = {\n    _isComponent: true,\n    _parentVnode: vnode,\n    parent,\n  };\n  // check inline-template render functions\n  const inlineTemplate = vnode.data.inlineTemplate;\n  if (isDef(inlineTemplate)) {\n    options.render = inlineTemplate.render;\n    options.staticRenderFns = inlineTemplate.staticRenderFns;\n  }\n  return new vnode.componentOptions.Ctor(options);\n}\n")),(0,r.kt)("p",null,"\u9996\u5148\u5b9a\u4e49\u4e86 options \u53c2\u6570\uff0c\u8bbe\u7f6e\u4e86 ","_","isComponent \u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5e76\u4e14\u8bbe\u7f6e\u4e86 ","_","parentVnode \u6307\u5411\u7ec4\u4ef6\u7684 vnode\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684 parent \u662f\u5728 src/core/instance/lifecycle.js \u91cc\u9762\u5b9a\u4e49\u7684\u4e00\u4e2a\u5171\u4eab\u53d8\u91cf\uff0c\u6807\u8bb0\u4e86\u6574\u4e2a\u5e94\u7528\u91cc\u9762\uff0c\u5f53\u524d\u6b63\u5728\u66f4\u65b0\u7684\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u5b83\u662f\u5728\u6bcf\u6b21\u8c03\u7528 ","_","update \u65f6\u8bbe\u7f6e\u7684\uff0c\u662f\u552f\u4e00\u7684\u3002"),(0,r.kt)("p",null,"vnode.componentOptions.Ctor \u7ec4\u4ef6\u7684\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u662f\uff0c\u7ee7\u627f\u81ea Vue\uff0c\u8fd9\u90e8\u5206\u5728 \u521b\u5efa\u7ec4\u4ef6\u7684 VNode \u6709\u8be6\u7ec6\u8bb2\u89e3\u3002"),(0,r.kt)("p",null,"init \u51fd\u6570\u6267\u884c\u4e4b\u540e\uff0cvnode.componentInstance \u88ab\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u7684 Vue \u5b9e\u4f8b\uff0c\u56e0\u6b64\u8fdb\u5165 @block3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (isDef(vnode.componentInstance)) {\n  // @block3\n  initComponent(vnode, insertedVnodeQueue);\n  insert(parentElm, vnode.elm, refElm);\n  if (isTrue(isReactivated)) {\n    // @block4\n    reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);\n  }\n  return true;\n}\n")),(0,r.kt)("p",null,"initComponent \u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function initComponent(vnode, insertedVnodeQueue) {\n  if (isDef(vnode.data.pendingInsert)) {\n    insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);\n    vnode.data.pendingInsert = null;\n  }\n  vnode.elm = vnode.componentInstance.$el;\n  if (isPatchable(vnode)) {\n    invokeCreateHooks(vnode, insertedVnodeQueue);\n    setScope(vnode);\n  } else {\n    // empty component root.\n    // skip all element-related modules except for ref (#3455)\n    registerRef(vnode);\n    // make sure to invoke the insert hook\n    insertedVnodeQueue.push(vnode);\n  }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6709\u4e24\u4e2a\u5173\u6ce8\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06 pendingInsert \u52a0\u5165\u5230 insertedVnodeQueue \u91cc\u9762\uff0c\u5c06 vnode \u52a0\u5165\u5230 insertedVnodeQueue \u91cc\u9762"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e vnode.elm \u4e3a\u7ec4\u4ef6\u5b9e\u4f8b\u7684 $el \u5b9e\u4f8b")),(0,r.kt)("p",null,"insertedVnodeQueue \u5c31\u662f\u8bb0\u5f55\u8fd9\u91cc\u751f\u6210 elm \u7684\u987a\u5e8f\uff0c\u5728\u540e\u9762\u96c6\u4e2d\u8c03\u7528 insert \u94a9\u5b50\u800c\u7528\uff0c\u5728 patch \u4e00\u6587\u8bf4\u660e\uff0c\u8fd9\u91cc\u53ea\u9700\u8981\u77e5\u9053\u5176\u5728\u6b64\u5904\u66f4\u65b0\uff0c\u5728\u6b64\u5904\u5408\u5e76 pendingInsert \u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"createnode"},"createNode"),(0,r.kt)("p",null,"\u524d\u9762\u6211\u4eec\u901a\u8fc7 createComponentNode \u8bbe\u7f6e\u4e86 elm \u4e3a\u7ec4\u4ef6\u5b9e\u4f8b\u7684 $el\uff0c\u5176\u5b9e\u53ea\u770b\u5230\u4e86 set elm\uff0c\u800c\u6ca1\u6709\u770b\u5230 create \u7684\u8fc7\u7a0b\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u6211\u4eec\u5173\u6ce8\u771f\u6b63\u7684 \u521b\u5efa elm \u5143\u7d20 \u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u7684 elm \u751f\u6210\u662f\u4e2a\u9012\u5f52\u8c03\u7528\u751f\u6210\u7684\u8fc7\u7a0b\uff0c\u8fd9\u5c31\u662f createElm \u7684\u540e\u534a\u90e8\u5206\u7684\u5185\u5bb9\uff0c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = vnode.data;\nconst children = vnode.children;\nconst tag = vnode.tag;\nif (isDef(tag)) {\n  vnode.elm = vnode.ns\n    ? nodeOps.createElementNS(vnode.ns, tag)\n    : nodeOps.createElement(tag, vnode);\n  setScope(vnode);\n\n  createChildren(vnode, children, insertedVnodeQueue);\n  if (isDef(data)) {\n    invokeCreateHooks(vnode, insertedVnodeQueue);\n  }\n  insert(parentElm, vnode.elm, refElm);\n} else if (isTrue(vnode.isComment)) {\n  vnode.elm = nodeOps.createComment(vnode.text);\n  insert(parentElm, vnode.elm, refElm);\n} else {\n  vnode.elm = nodeOps.createTextNode(vnode.text);\n  insert(parentElm, vnode.elm, refElm);\n}\n")),(0,r.kt)("p",null,"\u9996\u5148\u5224\u65ad tag \u662f\u5426\u5b58\u5728\uff0c\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\u8bf4\u660e\u53ef\u80fd\u662f\u6709\u5185\u5bb9\u7684\u5d4c\u5957\uff0c\u8c03\u7528 createChildren \u6839\u636e\u5b50\u8282\u70b9\u7684\u60c5\u51b5\u9012\u5f52\u8c03\u7528 createElm \u521b\u5efa\u5b50\u8282\u70b9\u7684 elm\u3002"),(0,r.kt)("p",null,"\u5982\u679c tag \u4e0d\u5b58\u5728\uff0c\u53ef\u80fd\u662f\u4e00\u4e2a\u6ce8\u91ca\u6216\u8005\u4e00\u4e2a\u6587\u672c\uff0c\u8fd9\u662f\u7edd\u5bf9\u7684\u53f6\u5b50\u8282\u70b9\u4e86\uff0c\u5c31\u76f4\u63a5\u8c03\u7528\u76f8\u5e94\u7684\u5de5\u5177\u51fd\u6570\u53bb\u521b\u5efa elm\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684 nodeOps \u5c31\u662f\u5bf9 DOM \u8282\u70b9\u7684\u4e00\u4e9b\u64cd\u4f5c\u65b9\u6cd5\u7684\u7b80\u5355\u5c01\u88c5\uff0c\u5728 src/platforms/web/runtime/node-ops.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ...\nexport function createTextNode(text: string): Text {\n  return document.createTextNode(text);\n}\n\nexport function createComment(text: string): Comment {\n  return document.createComment(text);\n}\n\nexport function insertBefore(\n  parentNode: Node,\n  newNode: Node,\n  referenceNode: Node\n) {\n  parentNode.insertBefore(newNode, referenceNode);\n}\n\nexport function appendChild(node: Node, child: Node) {\n  node.appendChild(child);\n}\n")),(0,r.kt)("p",null,"\u5c31\u662f\u539f\u751f\u65b9\u6cd5\u7684\u7b80\u5355\u5c01\u88c5\uff0c\u8fd9\u91cc\u5c31\u662f\u771f\u6b63\u7684\u521b\u5efa DOM \u5143\u7d20\u7684\u5730\u65b9\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u5b8c DOM \u5143\u7d20\u4e4b\u540e\uff0c\u5c31\u662f\u65b0\u5143\u7d20\u7684\u63d2\u5165\uff0c\u5728 insert \u51fd\u6570\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function insert(parent, elm, ref) {\n  if (isDef(parent)) {\n    if (isDef(ref)) {\n      if (nodeOps.parentNode(ref) === parent) {\n        nodeOps.insertBefore(parent, elm, ref);\n      }\n    } else {\n      nodeOps.appendChild(parent, elm);\n    }\n  }\n}\n")),(0,r.kt)("p",null,"ref \u662f\u8001\u7684 DOM \u8282\u70b9\u7684\u5f15\u7528\uff0c\u6839\u636e ref \u53bb\u5b9a\u4f4d\uff0cinsert \u6216\u8005 append \u5230\u5bf9\u5e94\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"createElm \u8d1f\u8d23\u6839\u636e VDOM \u53bb\u751f\u6210 DOM\uff0c\u8fd9\u662f\u4e00\u4e2a\u6df1\u5ea6\u9012\u5f52\u7684\u8fc7\u7a0b\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a vnode \u5148\u751f\u6210\u5176\u5bf9\u5e94\u7684 DOM \u5143\u7d20(elm)\uff0c\u7136\u540e\u9012\u5f52\u521b\u5efa\u5b50\u8282\u70b9\u7684 elm\uff0c\u5728\u521b\u5efa\u5b50\u8282\u70b9\u4e4b\u540e\uff0c\u8c03\u7528 insert \u51fd\u6570\u5c06\u65b0\u7684 elm \u63d2\u5165\u5230\u5bf9\u5e94\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"elm \u7684\u521b\u5efa\u662f\u4e00\u4e2a\u5148\u7236\u540e\u5b50\u7684\u8fc7\u7a0b\uff0c\u800c\u63d2\u5165\u662f\u4e00\u4e2a\u5148\u5b50\u540e\u7236\u7684\u8fc7\u7a0b\u3002\u5bf9\u4e8e\u6839\u8282\u70b9\u6765\u8bf4\uff0cparentElm \u5c31\u662f #app \u5bf9\u5e94\u7684\u7236\u5143\u7d20\uff0c\u90a3\u4e48\u6839\u5143\u7d20\u8fd9\u4e00\u6b65\u7684\u63d2\u5165\uff0c\u5c31\u662f\u6700\u7ec8\u6dfb\u52a0\u5230\u9875\u9762\u3002"))}m.isMDXComponent=!0}}]);