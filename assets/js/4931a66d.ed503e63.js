"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},c="\u4ecb\u7ecd",i={unversionedId:"frameworks/vue2/reactivity/intro",id:"frameworks/vue2/reactivity/intro",title:"\u4ecb\u7ecd",description:"\u7814\u7a76\u5b9a\u4e49\u4e86\u6570\u636e\u4e4b\u540e\uff0cVue.js \u662f\u5982\u4f55\u5904\u7406\u7684\uff0c\u6539\u4e86\u6570\u636e\u4e4b\u540e\uff0c\u89c6\u56fe\u53c8\u662f\u548b\u5b9e\u73b0\u66f4\u65b0\u7684\u3002",source:"@site/docs/05-frameworks/02-vue2/04-reactivity/01-intro.md",sourceDirName:"05-frameworks/02-vue2/04-reactivity",slug:"/frameworks/vue2/reactivity/intro",permalink:"/docs/frameworks/vue2/reactivity/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/04-reactivity/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"frameworks",previous:{title:"createElm",permalink:"/docs/frameworks/vue2/render/create-elm"},next:{title:"\u6570\u636e\u521d\u59cb\u5316",permalink:"/docs/frameworks/vue2/reactivity/data"}},l={},u=[{value:"Object.defineProperty",id:"objectdefineproperty",level:2}],s={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u7814\u7a76\u5b9a\u4e49\u4e86\u6570\u636e\u4e4b\u540e\uff0cVue.js \u662f\u5982\u4f55\u5904\u7406\u7684\uff0c\u6539\u4e86\u6570\u636e\u4e4b\u540e\uff0c\u89c6\u56fe\u53c8\u662f\u548b\u5b9e\u73b0\u66f4\u65b0\u7684\u3002"),(0,o.kt)("h2",{id:"objectdefineproperty"},"Object.defineProperty"),(0,o.kt)("p",null,"Vue2 \u7684\u54cd\u5e94\u5f0f\uff0cObject.defineProperty (opens new window)\u662f\u4e0d\u5f97\u4e0d\u8bf4\u7684\u3002 \u683c\u5f0f\u662f\u8fd9\u6837\u7684"),(0,o.kt)("p",null,"Object.defineProperty(obj, prop, descriptor)\n\u5bf9\u4e8e\u7814\u7a76\u54cd\u5e94\u5f0f\u6765\u8bf4\uff0c\u4e3b\u8981\u5173\u6ce8 descriptor \u7684 get \u548c set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const obj = {};\nlet bValue = 66;\nObject.defineProperty(obj, "level", {\n  get() {\n    console.log("beforeGet: \u6211\u53ef\u4ee5\u5728\u8fd9\u505a\u4e9b\u4e8b\u60c5\uff0c\u63a7\u5236\u8fd4\u56de\u5185\u5bb9");\n    return bValue;\n  },\n  set(newValue) {\n    console.log("beforeSet: \u6211\u53ef\u4ee5\u5728\u8fd9\u505a\u4e9b\u4e8b\u60c5\uff0c\u63a7\u5236\u8fd4\u56de\u5185\u5bb9");\n    bValue = newValue;\n    console.log("afterSet: \u6211\u53ef\u4ee5\u5728\u8fd9\u505a\u4e9b\u4e8b\u60c5\uff0c\u63a7\u5236\u8fd4\u56de\u5185\u5bb9");\n  },\n});\n\nobj.level = 77;\n\nconsole.log(obj.level); // expected output: 77\n')),(0,o.kt)("p",null,"\u6253\u5370\u7ed3\u679c\u662f\u8fd9\u6837\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"beforeSet: \u6211\u53ef\u4ee5\u5728\u8fd9\u505a\u4e9b\u4e8b\u60c5\uff0c\u63a7\u5236\u8fd4\u56de\u5185\u5bb9\nafterSet: \u6211\u53ef\u4ee5\u5728\u8fd9\u505a\u4e9b\u4e8b\u60c5\uff0c\u63a7\u5236\u8fd4\u56de\u5185\u5bb9\nbeforeGet: \u6211\u53ef\u4ee5\u5728\u8fd9\u505a\u4e9b\u4e8b\u60c5\uff0c\u63a7\u5236\u8fd4\u56de\u5185\u5bb9\n")),(0,o.kt)("p",null,"\u5c31\u662f\u8bf4\uff0c\u5728\u8bbf\u95ee\u6216\u8005\u8bbe\u7f6e\u67d0\u4e2a\u5c5e\u6027\u7684\u65f6\u5019\uff0c\u662f\u6709\u4e09\u4e2a\u65f6\u673a\u662f\u53ef\u4ee5\u641e\u4e8b\u60c5\u7684\u3002"))}f.isMDXComponent=!0}}]);