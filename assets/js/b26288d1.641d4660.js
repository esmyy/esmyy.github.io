"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},s="AST",l={unversionedId:"frameworks/vue2/compiler/ast",id:"frameworks/vue2/compiler/ast",title:"AST",description:"AST \u5168\u540d Abstract Syntax Tree \uff0c\u4e2d\u6587\u53eb\u505a\u62bd\u8c61\u8bed\u6cd5\u6811\uff0cAST \u5c31\u662f\u5bf9\u6e90\u7801\u62bd\u8c61\u7684\u7ed3\u6784\u5316\u8868\u793a\u3002",source:"@site/docs/05-frameworks/02-vue2/02-compiler/02-ast.md",sourceDirName:"05-frameworks/02-vue2/02-compiler",slug:"/frameworks/vue2/compiler/ast",permalink:"/docs/frameworks/vue2/compiler/ast",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/02-compiler/02-ast.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"frameworks",previous:{title:"compiler",permalink:"/docs/frameworks/vue2/compiler/compiler"},next:{title:"parse",permalink:"/docs/frameworks/vue2/compiler/parse"}},c={},p=[{value:"AST Element",id:"ast-element",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],i={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ast"},"AST"),(0,a.kt)("p",null,"AST \u5168\u540d Abstract Syntax Tree \uff0c\u4e2d\u6587\u53eb\u505a",(0,a.kt)("strong",{parentName:"p"},"\u62bd\u8c61\u8bed\u6cd5\u6811"),"\uff0cAST \u5c31\u662f\u5bf9\u6e90\u7801\u62bd\u8c61\u7684\u7ed3\u6784\u5316\u8868\u793a\u3002"),(0,a.kt)("p",null,"\u5728\u9700\u8981\u5bf9\u6e90\u7801\u8fdb\u884c\u89e3\u6790\u7684\u5730\u65b9\uff0cAST \u5f80\u5f80\u90fd\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u4e00\u4e2a\u73af\u8282\u3002"),(0,a.kt)("h2",{id:"ast-element"},"AST Element"),(0,a.kt)("p",null,"\u6240\u8c13\u7684 AST \u5143\u7d20\uff0c\u5176\u5b9e\u6ca1\u542c\u8d77\u6765\u90a3\u4e48\u795e\u5947\uff0c\u5c31\u662f\u4e00\u4e2a\u63cf\u8ff0\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function createASTElement(\n  tag: string,\n  attrs: Array<ASTAttr>,\n  parent: ASTElement | void\n): ASTElement {\n  return {\n    type: 1,\n    tag,\n    attrsList: attrs,\n    attrsMap: makeAttrsMap(attrs),\n    rawAttrsMap: {},\n    parent,\n    children: [],\n  };\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u4e00\u4e2a\u5bf9\u8c61\u8868\u793a\u4e00\u4e2a AST \u8282\u70b9"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u770b\u4e2a\u4f8b\u5b50\u76f4\u89c2\u5730\u611f\u53d7\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const app = new Vue({\n  template: \'<div class="header">demo</div>\',\n});\n\napp.$mount("#app");\n')),(0,a.kt)("p",null,"\u751f\u6210\u7684 AST \u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  attrsList: [],\n  attrsMap: {\n    class: "header"\n  },\n  children: [\n    {\n      end: 24,\n      start: 20,\n      static: true,\n      text: "demo",\n      type: 3\n    }\n  ],\n  end: 30,\n  parent: undefined,\n  plain: false,\n  rawAttrsMap: {\n    class: {\n      end: 19,\n      name: "class",\n      start: 5,\n      value: "header"\n    }\n  },\n  start: 0,\n  static: true,\n  staticClass: "\\"header\\"",\n  staticInFor: false,\n  staticRoot: false,\n  tag: "div",\n  type: 1,\n}\n')),(0,a.kt)("p",null,"\u8bf4\u767d\u4e86\u5c31\u662f\u7528\u5bf9\u8c61\u6765\u63cf\u8ff0\u81ea\u8eab\uff0c\u63cf\u8ff0\u81ea\u5df1\u4e0e\u4ed6\u4eba\u7684\u5173\u7cfb\uff0c\u5f53\u7136\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u6a21\u677f\u662f\u7edf\u4e00\u7684\u3002"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u6a21\u677f\uff0c\u4eba\u4e0d\u597d\u7406\u89e3\uff0c\u673a\u5668\u4e5f\u4e0d\u597d\u7406\u89e3\uff0c\u8f6c\u6362\u4e3a\u5bf9\u8c61\u8868\u793a\u5c31\u597d\u591a\u4e86\uff0c\u7528\u8d77\u6765\u4e5f\u66f4\u65b9\u4fbf\u3002"))}m.isMDXComponent=!0}}]);