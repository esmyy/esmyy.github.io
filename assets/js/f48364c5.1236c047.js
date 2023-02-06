"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="\u53d8\u91cf\u63d0\u5347",l={unversionedId:"JS/var-hoist",id:"JS/var-hoist",title:"\u53d8\u91cf\u63d0\u5347",description:"\u5728\u53ea\u6709 var \u7684\u5e74\u4ee3\uff0c\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u6807\u8bc6\u7b26\uff0c\u53ef\u4ee5\u62c6\u5206\u4e3a \u58f0\u660e \u548c \u8d4b\u503c \u4e24\u4e2a\u6b65\u9aa4\u53bb\u7406\u89e3\u3002",source:"@site/docs/03-JS/10-var-hoist.md",sourceDirName:"03-JS",slug:"/JS/var-hoist",permalink:"/docs/JS/var-hoist",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-JS/10-var-hoist.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"object",permalink:"/docs/JS/object"},next:{title:"\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/JS/base"}},p={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u53d8\u91cf\u63d0\u5347"},"\u53d8\u91cf\u63d0\u5347"),(0,o.kt)("p",null,"\u5728\u53ea\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," \u7684\u5e74\u4ee3\uff0c\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u6807\u8bc6\u7b26\uff0c\u53ef\u4ee5\u62c6\u5206\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"\u58f0\u660e")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"\u8d4b\u503c")," \u4e24\u4e2a\u6b65\u9aa4\u53bb\u7406\u89e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log(a); // undefined\nfoo(); // in foo\n\nvar a = 12;\nfunction foo() {\n  console.log("in foo");\n}\n')),(0,o.kt)("p",null,"\u5982\u4e0a\u6240\u793a\uff0c\u5b9a\u4e49\u4e86\u4e24\u4e2a\u53d8\u91cf ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," \u548c\u51fd\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u58f0\u660e\u63d0\u5347\uff0c\u8d4b\u503c\u4e0d\u63d0\u5347"),"\uff1a\u5728\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"li"},"a"),"\u7684\u4f4d\u7f6e\u4e4b\u524d\u8bbf\u95ee\uff0c\u6ca1\u6709\u62a5\u9519\uff0c\u6253\u5370\u51fa\u6765\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u8fd9\u8bf4\u660e\u5728\u6253\u5370\u7684\u4f4d\u7f6e\uff0c\u7f16\u8bd1\u5668\u662f\u77e5\u9053\u6709\u8fd9\u73a9\u610f\u7684"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u58f0\u660e\u63d0\u5347\uff0c\u8d4b\u503c\u4e5f\u63d0\u5347"),"\uff1a\u51fd\u6570\u5728\u58f0\u660e\u7684\u4f4d\u7f6e\u4e4b\u524d\u8c03\u7528\uff0c\u5e76\u6ca1\u6709\u62a5\u9519\uff0c\u8bf4\u660e\u5728\u8c03\u7528\u7684\u4f4d\u7f6e\uff0c\u7f16\u8bd1\u5668\u662f\u80fd\u77e5\u9053\u51fd\u6570\u5b58\u5728\uff0c\u5e76\u4e14\u62ff\u5230\u4e86\u5b83\u7684\u5185\u5bb9")),(0,o.kt)("p",null,"\u53d8\u91cf\u63d0\u5347\uff0c\u53ef\u4ee5\u89e3\u91ca\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"\u58f0\u660e\u63d0\u5347\uff0c\u4f46\u662f\u8d4b\u503c\u4e0d\u63d0\u5347"),"\u3002"),(0,o.kt)("p",null,"\u53d8\u91cf\u63d0\u5347\u73b0\u5728\u53ef\u4ee5\u79f0\u4f5c ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," \u63d0\u5347\u3002"))}u.isMDXComponent=!0}}]);