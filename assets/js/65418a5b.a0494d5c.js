"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),i=u(r),f=o,d=i["".concat(l,".").concat(f)]||i[f]||m[f]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[i]="string"==typeof e?e:o,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>i,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={},c="source map",p={unversionedId:"tools/webpack/sourcemap",id:"tools/webpack/sourcemap",title:"source map",description:"source map \u53ef\u4ee5\u7406\u89e3\u8d44\u6e90\u5730\u56fe\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u6a21\u5757\u5b57\u5178\uff0c\u5728 Devtool (opens new window)\u4e2d\u7684\u8bf4\u660e\u5f88\u8be6\u7ec6\u4e86\u3002 \u4e0d\u8fc7\u5e76\u4e0d\u9700\u8981\u8fc7\u5206\u5173\u6ce8\u5176\u7ec6\u8282\uff0csource map \u4e00\u4e2a\u662f\u7528\u6765\u5f00\u53d1\u73af\u8282\u8c03\u8bd5\uff0c\u4e00\u4e2a\u662f\u7528\u6765\u505a\u751f\u4ea7\u73af\u5883\u9519\u8bef\u8ffd\u8e2a\u3002",source:"@site/docs/43-tools/88-webpack/08-sourcemap.md",sourceDirName:"43-tools/88-webpack",slug:"/tools/webpack/sourcemap",permalink:"/docs/tools/webpack/sourcemap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/43-tools/88-webpack/08-sourcemap.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8f93\u51fa\u7ed3\u6784",permalink:"/docs/tools/webpack/output"},next:{title:"\u5e38\u7528\u63d2\u4ef6",permalink:"/docs/tools/webpack/use"}},l={},u=[],s={toc:u};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"source-map"},"source map"),(0,o.kt)("p",null,"source map \u53ef\u4ee5\u7406\u89e3\u8d44\u6e90\u5730\u56fe\uff0c\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u6a21\u5757\u5b57\u5178\uff0c\u5728 Devtool (opens new window)\u4e2d\u7684\u8bf4\u660e\u5f88\u8be6\u7ec6\u4e86\u3002 \u4e0d\u8fc7\u5e76\u4e0d\u9700\u8981\u8fc7\u5206\u5173\u6ce8\u5176\u7ec6\u8282\uff0csource map \u4e00\u4e2a\u662f\u7528\u6765\u5f00\u53d1\u73af\u8282\u8c03\u8bd5\uff0c\u4e00\u4e2a\u662f\u7528\u6765\u505a\u751f\u4ea7\u73af\u5883\u9519\u8bef\u8ffd\u8e2a\u3002"),(0,o.kt)("p",null,"\u9700\u8981\u77e5\u9053 inline\uff0ccheap \u7b49\u524d\u7f00\u7684\u57fa\u672c\u542b\u4e49\uff0c\u77e5\u9053\u5728\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u8be5\u5982\u4f55\u4f7f\u7528\u5373\u53ef\uff0c\u6bd4\u5982\u6211\u4e00\u822c\u9009\u62e9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dev: eval-source-map"),(0,o.kt)("li",{parentName:"ul"},"prod: source-map")),(0,o.kt)("p",null,"\u8fd8\u6709\u4e00\u4e9b\u5c0f\u77e5\u8bc6\u70b9\uff0c\u9700\u8981\u7a0d\u5fae\u4e86\u89e3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"source map \u5728\u6d4f\u89c8\u5668\u4e2d\u662f\u901a\u8fc7 //# sourceURL=","[url]"," \u6807\u8bc6\u7684")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"eval")," \u6a21\u5f0f\u8f93\u51fa\u7ed3\u6784\u4e2d\uff0c\u6bcf\u4e2a\u6a21\u5757\u672b\u5c3e\u6709\u4ee5\u4e0b\u683c\u5f0f\u7684\u6ce8\u91ca"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//# sourceURL=webpack:///./print.js\n")),(0,o.kt)("p",null,"\u6d4f\u89c8\u5668\u4f1a\u6839\u636e\u8fd9\u4e2a\u6ce8\u91ca\u53bb\u89e3\u6790\u6587\u4ef6\uff0c\u5728\u5f00\u53d1\u8005\u5de5\u5177\u7684 Sources Page \u9762\u677f\u4e2d\u5c55\u793a\u5bf9\u5e94\u7684\u6587\u4ef6\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u751f\u6210\u72ec\u7acb\u7684 .map \u6587\u4ef6\uff0c\u5e94\u5f53\u53ea\u653e\u5728\u670d\u52a1\u7aef\uff0c\u4e0d\u5141\u8bb8\u5ba2\u6237\u7aef\u8bbf\u95ee\uff0c\u8f93\u51fa\u4ee3\u7801\u4e0d\u5e94\u63d0\u4f9b\u8fc7\u4e8e\u5177\u4f53\u7684\u6e90\u7801\u4fe1\u606f")))}i.isMDXComponent=!0}}]);