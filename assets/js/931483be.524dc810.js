"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2182],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={},i="Nginx",l={unversionedId:"ops-linux/nginx",id:"ops-linux/nginx",title:"Nginx",description:"\u5e38\u89c1\u95ee\u9898",source:"@site/docs/42-ops-linux/10-nginx.md",sourceDirName:"42-ops-linux",slug:"/ops-linux/nginx",permalink:"/docs/ops-linux/nginx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/42-ops-linux/10-nginx.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"alias",permalink:"/docs/ops-linux/alias"},next:{title:"\u7f51\u7edc\u6d4b\u8bd5",permalink:"/docs/ops-linux/test"}},s={},p=[{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"80 \u7aef\u53e3\u88ab\u5360\u7528",id:"80-\u7aef\u53e3\u88ab\u5360\u7528",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nginx"},"Nginx"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h3",{id:"80-\u7aef\u53e3\u88ab\u5360\u7528"},"80 \u7aef\u53e3\u88ab\u5360\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nginx: [emerg] bind() to 0.0.0.0:80 failed (48: Address already in use)\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u5148\u5c1d\u8bd5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"reload")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"stop")," \u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nginx -s reload\n")),(0,a.kt)("p",null,"\u5982\u679c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx")," \u8fd0\u884c\u4e2d\uff0c\u6267\u884c\u6210\u529f\uff0c\u5982\u679c\u662f\u5176\u4ed6\u7a0b\u5e8f\u5360\u7528\uff0c\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u67e5\u770b\u88ab\u8c01\u5360\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'lsof -i:80\n\n# \u6211\u7684 alias\nalias p80 ="lsof -i:80"\n')),(0,a.kt)("p",null,"\u6740\u6b7b\u5360\u7528\u7684\u8fdb\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kill -9 9527\n")))}u.isMDXComponent=!0}}]);