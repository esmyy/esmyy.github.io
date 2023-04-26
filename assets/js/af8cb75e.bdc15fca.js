"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6843],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const l={},o="AMD",i={unversionedId:"JS/module/amd",id:"JS/module/amd",title:"AMD",description:"AMD \u662f RequireJS \u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u4ea7\u51fa\u7684\uff0cRequireJS \u662f\u5e94\u7528 AMD \u7684\u4e00\u4e2a\u52a0\u8f7d\u5668\u5e93\u3002RequireJS \u7684\u7ed3\u6784\u5982\u4e0b",source:"@site/docs/03-JS/05-module/02-amd.md",sourceDirName:"03-JS/05-module",slug:"/JS/module/amd",permalink:"/docs/JS/module/amd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-JS/05-module/02-amd.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CommonJS",permalink:"/docs/JS/module/commonjs"},next:{title:"ES Module",permalink:"/docs/JS/module/esm"}},u={},s=[{value:"define",id:"define",level:2},{value:"require",id:"require",level:2},{value:"\u4e00\u70b9\u611f\u53d7",id:"\u4e00\u70b9\u611f\u53d7",level:2},{value:"Q &amp; A",id:"q--a",level:2}],c={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"amd"},"AMD"),(0,a.kt)("p",null,"AMD \u662f RequireJS \u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u4ea7\u51fa\u7684\uff0cRequireJS \u662f\u5e94\u7528 AMD \u7684\u4e00\u4e2a\u52a0\u8f7d\u5668\u5e93\u3002RequireJS \u7684\u7ed3\u6784\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var requirejs, require, define;\n(function (global, setTimeout) {\n  // ...\n})(this, (typeof setTimeout === 'undefined' ? undefined : setTimeout)));\n")),(0,a.kt)("p",null,"\u8fd9\u4e0e CommonJS \u91cc\u9762\u4e00\u4e2a\u6a21\u5757\u7684\u89e3\u6790\u5f88\u50cf\uff0c\u4e5f\u5c31\u662f\u4e00\u4e2a IIFE\u3002"),(0,a.kt)("h2",{id:"define"},"define"),(0,a.kt)("p",null,"define \u4e0e CommonJS \u7684 module.exports \u662f\u7c7b\u4f3c\u7684\uff0c\u7528\u4e8e\u5b9a\u4e49\u6a21\u5757\u7684\u5bfc\u51fa\u5185\u5bb9\uff0c\u5b83\u5e94\u8be5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5982\u679c\u4e0d\u8fd4\u56de\uff0c\u5c31\u76f8\u5f53\u4e8e\u662f IIFE \u4e86\u3002\ndefine \u901a\u7528\u5b9a\u4e49\u683c\u5f0f\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"define = function (name, deps, callback) {\n  // ...\n};\n")),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e86\u6a21\u5757\u7684\u540d\u79f0\uff0c\u4f9d\u8d56\u7684\u6a21\u5757\uff0c\u4ee5\u53ca\u4e00\u4e2a\u56de\u8c03\u3002\u7406\u89e3\u4e0a\u662f\u5f88\u7b80\u5355\u7684 \u2014\u2014 ",(0,a.kt)("strong",{parentName:"p"},"\u6211\u662f xxx\uff0c\u6211\u4f9d\u8d56\u6a21\u5757 ABC\uff0c\u7b49\u8fd9\u4e9b\u6a21\u5757\u52a0\u8f7d\u5b8c\u4e86\uff0c\u6267\u884c\u6211\u8fd9\u4e2a callback"),"\u3002\n\u540c\u65f6\u8fd8\u63d0\u4f9b\u4e86\u5176\u4ed6\u5feb\u6377\u5b9a\u4e49\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u72ec\u7acb\u6a21\u5757:\u4e0d\u4f9d\u8d56\u5176\u4ed6\u6a21\u5757\u7684\u72ec\u7acb\u6a21\u5757\uff0c\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\ndefine({\n  name: \"a\",\n});\n\n// deps \u66f4\u7b80\u5355\u7684\u5199\u6cd5\ndefine(\n  function (require) {\n    var dep1 = require('dep1'),\n    // ...\n\n    return {\n      // ...\n    }\n  }\n);\n")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u4f7f\u7528\u7ec6\u8282\u4e0d\u9700\u8981\u8fc7\u4e8e\u5728\u610f\uff0c\u53ea\u662f\u901a\u7528\u5199\u6cd5\u7684\u5feb\u6377\u65b9\u5f0f\u800c\u5df2\uff0c\u73b0\u5728\u4e5f\u4e0d\u600e\u4e48\u4f1a\u7528 AMD \u4e86\u3002"),(0,a.kt)("h2",{id:"require"},"require"),(0,a.kt)("p",null,"require \u7684\u4f7f\u7528\u8bed\u6cd5\u4e0e define \u662f\u76f8\u4f3c\u7684\uff0cdefine \u662f\u5b9a\u4e49\u65f6\u4f9d\u8d56\u4e00\u4e9b\u6a21\u5757\uff0c\u800c require \u662f\u4f7f\u7528\u65f6\u4f9d\u8d56\u4e00\u4e9b\u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'require(["foo", "bar"], function (foo, bar) {\n  // ...\n});\n')),(0,a.kt)("h2",{id:"\u4e00\u70b9\u611f\u53d7"},"\u4e00\u70b9\u611f\u53d7"),(0,a.kt)("p",null,"require.js \u91cc\u9762\u7684\u4e00\u4e9b\u5199\u6cd5\u6211\u4e2a\u4eba\u633a\u53cd\u611f\u7684\uff0c\u6bd4\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'req = requirejs = function (deps, callback, errback, optional) {\n  //Find the right context, use default\n  var context,\n    config,\n    contextName = defContextName;\n\n  // Determine if have config object in the call.\n  if (!isArray(deps) && typeof deps !== "string") {\n    // deps is a config object\n    config = deps;\n    if (isArray(callback)) {\n      // Adjust args if there are dependencies\n      deps = callback;\n      callback = errback;\n      errback = optional;\n    } else {\n      deps = [];\n    }\n  }\n\n  // ...\n};\n')),(0,a.kt)("p",null,"\u6211\u4e2a\u4eba\u4e0d\u592a\u559c\u6b22\u8fd9\u6837\u7684\u8fde\u7eed\u8d4b\u503c\u548c\u7e41\u7410\u7684\u53c2\u6570\u5224\u65ad\u8fc7\u7a0b\u3002\u7279\u522b\u662f\u8fd9\u4e2a\u505a\u91cd\u8f7d\u5224\u65ad\uff0c\u7ed9\u53c2\u6570\u8d4b\u503c\u7684\u5b9e\u73b0\u3002\u6211\u4f1a\u9009\u62e9\u8c03\u6574\u53c2\u6570\u7684\u5f62\u5f0f\uff0c\u6bd4\u5982\u7edf\u4e00\u7528 options \u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"req = requirejs = function (options) {\n  const { deps, callback, errback, optional } = options;\n\n  // ...\n};\n")),(0,a.kt)("p",null,"\u6839\u636e\u53c2\u6570\u505a\u76f8\u5e94\u7684\u5904\u7406\u5c31\u884c\u4e86\uff0c\u4e0d\u5fc5\u975e\u5f97\u90a3\u4e48\u660e\u663e\u5730\u4f53\u73b0\u201d\u91cd\u8f7d\u201c\u3002\u5c24\u5176\u662f\u7ed9\u53c2\u6570\u8d4b\u503c\uff0c\u6211\u4e2a\u4eba\u662f\u4e0d\u559c\u6b22\u7684\uff0c\u6211\u7684\u539f\u5219\u662f\u5c3d\u91cf\u4fdd\u8bc1\u53c2\u6570\u53ea\u662f RHS(Right Hand Side)\u3002"),(0,a.kt)("h2",{id:"q--a"},"Q & A"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"AMD \u7684\u4e00\u4e9b\u5f02\u8bae\u95ee\u9898\u6709\u4e86\u89e3\u5417\uff1f"),(0,a.kt)("div",null,"\u4e3b\u8981\u662fAMD\u7684\u4f9d\u8d56\u524d\u7f6e\u95ee\u9898\uff0c\u4e0d\u7ba1\u6709\u65e0\u7528\u5230\uff0c\u5217\u5728\u4f9d\u8d56\u8868\u4e2d\u5c31\u4f1a\u5168\u90e8\u52a0\u8f7d\u3002define \u7684\u56de\u8c03\u51fd\u6570\u6267\u884c\u7684\u65f6\u5019\uff0c\u5176\u5b9e\u5df2\u7ecf deps \u7684\u6a21\u5757\u5df2\u7ecf\u52a0\u8f7d\u5e76\u6267\u884c\u3002\u5728callback\u4e2d\u4f7f\u7528 require \u7684\u65f6\u5019\uff0c\u53ea\u662f\u83b7\u5f97\u6a21\u5757\u7684exports\u5f15\u7528\u3002\u53c2\u8003[\u524d\u7aef\u6a21\u5757\u5316\u5f00\u53d1\u90a3\u70b9\u5386\u53f2](https://github.com/seajs/seajs/issues/588)")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u8bf4\u4e00\u4e0bCMD\uff0c\u548cAMD\u6709\u4ec0\u4e48\u533a\u522b"),(0,a.kt)("div",null,"CMD\u662f\u963f\u91cc\u7684\u7389\u4f2f\u5728\u5f00\u53d1 SeaJS \u65f6\u63d0\u51fa\u7684\u89c4\u8303\uff0c\u8fd9\u79cd\u6a21\u5f0f\u6574\u5408\u4e86 CommonJS \u548c AMD \u7684\u4e00\u4e9b\u4f18\u70b9\u3002\u4e3b\u8981\u7684\u533a\u522b\u5728\u4e8e\u6a21\u5757\u7684\u6267\u884c\u65f6\u673a\uff0c\u4f9d\u8d56\u7684\u81ea\u52a8\u6536\u96c6\u3002AMD \u7684\u53c2\u8003[\u4e0e RequireJS \u7684\u5f02\u540c](https://github.com/seajs/seajs/issues/277)")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"AMD\uff0c CMD \u52a0\u8f7d\u65b9\u5f0f\u7684\u533a\u522b"),(0,a.kt)("div",null,"AMD\u524d\u7f6e\u52a0\u8f7d\uff0cCMD\u5c31\u8fd1\u52a0\u8f7d")))}d.isMDXComponent=!0}}]);