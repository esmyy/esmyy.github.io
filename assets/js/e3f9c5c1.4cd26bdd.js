"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="\u5b57\u7b26\u5904\u7406",l={unversionedId:"ops-linux/char",id:"ops-linux/char",title:"\u5b57\u7b26\u5904\u7406",description:"\u5728\u65e5\u5fd7\u7684\u67e5\u770b\u548c\u5206\u6790\u8fc7\u7a0b\u4e2d\u7528\u7684\u6bd4\u8f83\u591a\uff0c\u5f80\u5f80\u548c\u7ba1\u9053 | \u7ed3\u5408\u8d77\u6765\u4f7f\u7528\u3002",source:"@site/docs/42-ops-linux/02-char.md",sourceDirName:"42-ops-linux",slug:"/ops-linux/char",permalink:"/docs/ops-linux/char",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/42-ops-linux/02-char.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840\u547d\u4ee4",permalink:"/docs/ops-linux/cmd"},next:{title:"alias",permalink:"/docs/ops-linux/alias"}},c={},p=[{value:"grep",id:"grep",level:2},{value:"sort",id:"sort",level:2},{value:"cut",id:"cut",level:2},{value:"awk",id:"awk",level:2},{value:"paste",id:"paste",level:2},{value:"split",id:"split",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b57\u7b26\u5904\u7406"},"\u5b57\u7b26\u5904\u7406"),(0,a.kt)("p",null,"\u5728\u65e5\u5fd7\u7684\u67e5\u770b\u548c\u5206\u6790\u8fc7\u7a0b\u4e2d\u7528\u7684\u6bd4\u8f83\u591a\uff0c\u5f80\u5f80\u548c\u7ba1\u9053 ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," \u7ed3\u5408\u8d77\u6765\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"grep"},"grep"),(0,a.kt)("p",null,"\u5e38\u7528\u6765\u8fdb\u884c\u6bd4\u8f83\u7c97\u6d45\u7684\u7b5b\u9009\u67e5\u627e\uff0c\u5148\u628a\u7b26\u5408\u6761\u4ef6\u7684",(0,a.kt)("strong",{parentName:"p"},"\u884c"),"\u7b5b\u51fa\u6765\uff0c\u518d\u4f7f\u7528\u5176\u4ed6\u5b57\u7b26\u5de5\u5177\u8fdb\u884c\u5177\u4f53\u5206\u6790\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"grep [-ivnc] \u5339\u914d\u7684\u5b57\u7b26 \u6587\u4ef6\n\n# i: case insensitive\n# v: invert match\n# n: line number\n# c: count\n# ...\n")),(0,a.kt)("p",null,"\u6bd4\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tail -f /opt/homebrew/var/log/nginx/access.log | grep local.esmyy.com\n")),(0,a.kt)("h2",{id:"sort"},"sort"),(0,a.kt)("h2",{id:"cut"},"cut"),(0,a.kt)("h2",{id:"awk"},"awk"),(0,a.kt)("h2",{id:"paste"},"paste"),(0,a.kt)("h2",{id:"split"},"split"))}u.isMDXComponent=!0}}]);