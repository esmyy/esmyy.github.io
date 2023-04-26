"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||c;return n?r.createElement(d,p(p({ref:t},i),{},{components:n})):r.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,p=new Array(c);p[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<c;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const c={},p="\u6587\u4ef6\u6307\u7eb9",o={unversionedId:"project/bundler/webpack/hash",id:"project/bundler/webpack/hash",title:"\u6587\u4ef6\u6307\u7eb9",description:"\u6587\u4ef6\u6307\u7eb9\uff0c\u5927\u7ea6\u53ef\u4ee5\u7406\u89e3\u4e3a\u6253\u5305\u540e\u8f93\u51fa\u7684\u6587\u4ef6\u540d\uff0c\u5e94\u5f53\u9488\u5bf9\u4e0d\u540c\u7684\u6587\u4ef6\uff0c\u4f7f\u7528\u4e0d\u540c\u7684\u6307\u7eb9\u7b56\u7565\uff0c\u4ee5\u4fbf\u5145\u5206\u5229\u7528\u7f13\u5b58\u3002 Webpack \u91cc\u9762\u6709\u4e09\u7c7b hash",source:"@site/docs/10-project/bundler/01-webpack/11-hash.md",sourceDirName:"10-project/bundler/01-webpack",slug:"/project/bundler/webpack/hash",permalink:"/docs/project/bundler/webpack/hash",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10-project/bundler/01-webpack/11-hash.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sourcemap",permalink:"/docs/project/bundler/webpack/sourcemap"},next:{title:"\u5e38\u7528\u63d2\u4ef6",permalink:"/docs/project/bundler/webpack/use"}},l={},s=[],i={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6587\u4ef6\u6307\u7eb9"},"\u6587\u4ef6\u6307\u7eb9"),(0,a.kt)("p",null,"\u6587\u4ef6\u6307\u7eb9\uff0c\u5927\u7ea6\u53ef\u4ee5\u7406\u89e3\u4e3a\u6253\u5305\u540e\u8f93\u51fa\u7684\u6587\u4ef6\u540d\uff0c\u5e94\u5f53\u9488\u5bf9\u4e0d\u540c\u7684\u6587\u4ef6\uff0c\u4f7f\u7528\u4e0d\u540c\u7684\u6307\u7eb9\u7b56\u7565\uff0c\u4ee5\u4fbf\u5145\u5206\u5229\u7528\u7f13\u5b58\u3002 Webpack \u91cc\u9762\u6709\u4e09\u7c7b hash"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u4f7f\u7528"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"fullhash"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6574\u4e2a\u9879\u76ee\u7684 hash\uff0c\u4efb\u610f\u4f9d\u8d56\u6587\u4ef6\u6539\u53d8\u5219\u53d8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u53ea\u8981\u6574\u4e2a\u9879\u76ee\u6709\u6539\u52a8\u5c31\u9700\u8981\u5237\u65b0\u7684\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"chunkhash"),(0,a.kt)("td",{parentName:"tr",align:"center"},"compilation \u9636\u6bb5 chunk \u7684 hash"),(0,a.kt)("td",{parentName:"tr",align:"center"},"output \u5e38\u7528 chunkhash")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"contenthash \u6587\u4ef6/\u6a21\u5757\u72ec\u7acb\u7684 hash\uff0c\u6587\u4ef6\u4e0d\u53d8\u5219\u4e0d\u53d8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"css\uff0cimg\uff0cfont \u7b49\u8d44\u6e90\u4f7f\u7528"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"hash"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6a21\u5757\u552f\u4e00\u7684 id\uff0c\u5bf9\u4e8e\u56fe\u7247\uff0c\u5b57\u4f53\u7b49\u8d44\u6e90\u6587\u4ef6\uff0c\u6587\u4ef6\u4e0d\u53d8\u5219\u4e0d\u53d8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"css\uff0cimg\uff0cfont \u7b49\u8d44\u6e90\u4f7f\u7528")))),(0,a.kt)("p",null,"\u54c8\u5e0c\u503c\u7684\u751f\u6210\uff0cWebpack 4 \u4e4b\u524d\u4f7f\u7528\u7684\u662f md5\uff0c\u51fa\u4e8e\u6027\u80fd\u539f\u56e0\u8c03\u6574\u4e3a md4\u3002\u9ed8\u8ba4\u4f7f\u7528 16 \u8fdb\u5236\u7f16\u7801\u53d6\u524d 20 \u4f4d\uff0c\u4ee3\u7801\u793a\u610f\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const crypto = require("crypto");\nconst hash = crypto.createHash("md4");\nconst chunkhash = hash.update(data).digest("hex").slice(0, 20);\n')),(0,a.kt)("p",null,"\u5728 output \u6709 hashFunction \u7b49\u51e0\u4e2a\u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff0c\u57fa\u672c\u4e0a\u9ed8\u8ba4\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5145\u5206\u5229\u7528\u7f13\u5b58\uff0c\u8981\u6c42\u5584\u7528\u6784\u5efa\u76f8\u5173\u7684 hash \u53bb\u8bbe\u7f6e\u6587\u4ef6\u540d\u79f0\uff0c\u7136\u540e\u4e0e Web \u670d\u52a1\u5668\u53ca CDN \u7f13\u5b58\u7b56\u7565\u7b49\u7ec4\u5408\u4f7f\u7528\u3002\u8981\u505a\u5230\u4e24\u4e2a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u80fd\u7528\u7f13\u5b58\u7684\u5c31\u7528\u7f13\u5b58\uff1a\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4e00\u4e2a\u56fe\u7247\uff0c\u5982\u679c\u6ca1\u6709\u6539\u53d8\uff0c\u4f46\u6587\u4ef6\u540d\u5374\u6bcf\u6b21\u6784\u5efa\u90fd\u53d8\u5316\uff0c\u90a3\u7f13\u5b58\u5c31\u5931\u6548\u4e86\u3002file-loader \u9ed8\u8ba4\u4f7f\u7528\u4e86","[contenthash]",".","[ext]","\u4f5c\u4e3a\u8f93\u51fa\u540d\u79f0\uff0c\u8fd9\u5c31\u6bd4\u8f83\u5408\u7406\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u66f4\u65b0\u7684\u8981\u80fd\u53ca\u65f6\u5237\u65b0\uff1a\u4e3e\u4f8b\u6765\u8bf4\uff0c\u5bf9\u4e8e\u7a0b\u5e8f main bundle\uff0c\u5982\u679c\u4f7f\u7528 app.js \u8fd9\u6837\u7684\u540d\u79f0\uff0c\u90a3\u4fee\u6539\u91cd\u65b0\u53d1\u5e03\u540e\u5c31\u4f1a\u51fa\u95ee\u9898\u3002\uff08\u5f53\u7136\uff0c\u975e\u5f97\u8bf4\u5f3a\u5236\u7981\u6b62\u7f13\u5b58\u4e5f\u80fd\u5237\u65b0\uff0c\u8fd9\u6ca1\u9519\uff0c\u4f46...\u8fd9\u4e0d\u662f\u66f4\u4e25\u91cd\u5417)")),(0,a.kt)("p",null,"\u5173\u4e8e\u6587\u4ef6\u6307\u7eb9\u7ecf\u5178\u7684\u4e00\u4e2a\u914d\u7f6e\u4f8b\u5b50\u662f css \u6587\u4ef6\u7684\u8bbe\u7f6e\u3002 \u5f53\u4f7f\u7528 MiniCssExtractPlugin \u5c06 CSS \u5bfc\u51fa\u4e3a\u5355\u72ec\u7684\u6587\u4ef6\u65f6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.config.js\nplugins: [\n  new MiniCssExtractPlugin({\n    filename: "[contenthash].css",\n  }),\n];\n')),(0,a.kt)("p",null,"\u800c \u5165\u53e3\u6587\u4ef6 app.js \u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import "./style.less";\nconst AGE = 100;\n')),(0,a.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e filename \u4e3a ","[chunkhash]",".css\uff0c\u90a3\u4e48\u5f53 style.css \u6ca1\u6709\u6539\u53d8\uff0c\u800c\u53ea\u662f app.js \u6539\u53d8\u65f6\uff0c\u751f\u6210\u7684 css \u6587\u4ef6\u540d\u79f0\u4e5f\u4f1a\u6539\u53d8\uff0c\u8fd9\u5c31\u5f88\u4e0d\u5fc5\u8981\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e filename \u914d\u7f6e\u7684\u6a21\u677f\u5b57\u7b26\u4e32\uff0c\u4e0d\u540c\u7ea7\u522b\u80fd\u591f\u4f7f\u7528\u7684\u53d8\u91cf\u662f\u4e0d\u540c\u7684\uff0c\u6ce8\u610f\u4ee5\u524d fullhash \u4e5f\u53eb\u505a hash\uff0c\u56e0\u6b64\u8fd9\u91cc\u9700\u8981\u6ce8\u610f","[hash]","\u4f7f\u7528\u7684 level\uff0c\u53c2\u8003\n",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/output/#template-strings"},"Template strings"))))}m.isMDXComponent=!0}}]);