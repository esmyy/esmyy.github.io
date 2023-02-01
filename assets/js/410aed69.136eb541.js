"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},s="Koa",c={unversionedId:"frameworks/koa",id:"frameworks/koa",title:"Koa",description:"Koa \u7531 Express \u5e55\u540e\u7684\u539f\u73ed\u4eba\u9a6c\u6253\u9020\u3002 Koa \u4e2d\u95f4\u4ef6\u9009\u62e9\u4e86\u6d0b\u8471\u5708\u6a21\u578b\uff0c\u4f7f\u7528 async/await \u6765\u5b9e\u73b0\u540e\u7f6e\u5904\u7406\u903b\u8f91\uff0c\u589e\u52a0\u4e86 Context \u6765\u8868\u793a\u5f53\u524d\u8bf7\u6c42\u7684\u4e0a\u4e0b\u6587\u3002",source:"@site/docs/05-frameworks/52-koa.md",sourceDirName:"05-frameworks",slug:"/frameworks/koa",permalink:"/docs/frameworks/koa",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/52-koa.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Express",permalink:"/docs/frameworks/express"},next:{title:"Egg",permalink:"/docs/frameworks/egg"}},l={},i=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"Context",id:"context",level:2},{value:"Middleware",id:"middleware",level:2},{value:"\u5bf9\u6bd4 Express",id:"\u5bf9\u6bd4-express",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],p={toc:i};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"koa"},"Koa"),(0,o.kt)("p",null,"Koa \u7531 Express \u5e55\u540e\u7684\u539f\u73ed\u4eba\u9a6c\u6253\u9020\u3002 Koa \u4e2d\u95f4\u4ef6\u9009\u62e9\u4e86\u6d0b\u8471\u5708\u6a21\u578b\uff0c\u4f7f\u7528 async/await \u6765\u5b9e\u73b0\u540e\u7f6e\u5904\u7406\u903b\u8f91\uff0c\u589e\u52a0\u4e86 Context \u6765\u8868\u793a\u5f53\u524d\u8bf7\u6c42\u7684\u4e0a\u4e0b\u6587\u3002"),(0,o.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"lib\n\u251c\u2500\u2500 application.js\n\u251c\u2500\u2500 context.js\n\u251c\u2500\u2500 request.js\n\u2514\u2500\u2500 response.js\n")),(0,o.kt)("p",null,"Koa \u7684\u6e90\u7801\u76ee\u5f55\u7ed3\u6784\u5341\u5206\u7b80\u5355\uff0c\u5c31\u662f\u4ee5\u4e0a\u6240\u793a 4 \u4e2a\u5185\u5bb9\uff0c\u5176\u4ed6\u7684\u90fd\u62bd\u79bb\u6210\u72ec\u7acb\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"\u4f7f\u7528 Context(ctx) \u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u6765\u6574\u5408 request \u548c response \u7b49\u76f8\u5173\u7684\u4e0a\u4e0b\u6587"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Application extends Emitter {\n  // ...\n  createContext(req, res) {\n    const context = Object.create(this.context);\n    const request = (context.request = Object.create(this.request));\n    const response = (context.response = Object.create(this.response));\n    context.app = request.app = response.app = this;\n    context.req = request.req = response.req = req;\n    context.res = request.res = response.res = res;\n    request.ctx = response.ctx = context;\n    request.response = response;\n    response.request = request;\n    context.originalUrl = request.originalUrl = req.url;\n    context.state = {};\n    return context;\n  }\n\n  // ...\n}\n")),(0,o.kt)("p",null,"Express \u53ea\u6709 request \u548c response\uff0c\u5f53\u9700\u8981\u8bbe\u7f6e\u4e00\u4e9b\u8d2f\u7a7f\u6574\u4e2a\u8bf7\u6c42\u5904\u7406\u8fc7\u7a0b\u7684\u6570\u636e\u65f6\uff0c\u5f80\u5f80\u8bbe\u7f6e\u5728 request \u8fd8\u662f response\uff0c\u90fd\u4e0d\u5408\u9002\u3002"),(0,o.kt)("p",null,"Koa \u589e\u52a0\u4e86 Context\uff0c\u66f4\u52a0\u7b26\u5408\u8bed\u4e49\u3002"),(0,o.kt)("h2",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"\u4e2d\u95f4\u4ef6\u4f7f\u7528\u4e86\u6240\u8c13\u7684\u6d0b\u8471\u5708\u6a21\u578b"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6d0b\u8471\u5377\u6a21\u578b",src:n(6737).Z,width:"478",height:"435"})),(0,o.kt)("p",null,"\u6d0b\u8471\u5708\u5b9e\u73b0\u6240\u8c13\u7684\u540e\u7f6e\u5904\u7406\uff0c\u53ef\u901a\u8fc7 co(generator/yield) \u6216\u8005 async/await \u6765\u5b9e\u73b0\u7684\u3002\u4e00\u4e2a\u793a\u4f8b\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const Koa = require("./lib/application");\nconst Router = require("./koa-router-7.4.0/lib/router.js");\nconst app = new Koa();\nconst router = new Router();\n\napp.use(async (ctx, next) => {\n  console.log(ctx.query, ctx.request.query);\n  console.log(1);\n  await next();\n  console.log(2);\n});\n\napp.use(async (ctx, next) => {\n  console.log(3);\n  await next();\n  console.log(4);\n});\n\nrouter.get("/foo", (ctx, next) => {\n  console.log(5);\n  ctx.body = "foo page";\n});\n')),(0,o.kt)("p",null,"\u8f93\u51fa\u987a\u5e8f\u662f 1-3-5-4-2"),(0,o.kt)("admonition",{title:"why",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4e3a\u4ec0\u4e48\u8981\u8fd9\u6837\u8bbe\u7f6e\uff1f")),(0,o.kt)("h2",{id:"\u5bf9\u6bd4-express"},"\u5bf9\u6bd4 Express"),(0,o.kt)("p",null,"\u4f7f\u7528 async/await \u6765\u5904\u7406\u56de\u8c03\uff0c\u5b9e\u73b0\u540e\u7f6e\u5904\u7406\u903b\u8f91\n\u6ca1\u6709\u9ed8\u8ba4\u7684 query \u7b49\u63d2\u4ef6\uff0cquery\uff0crouter \u7b49\u90fd\u63d0\u53d6\u4e3a\u5355\u72ec\u7684\u4e2d\u95f4\u4ef6\n\u65b0\u589e Context\uff0c\u66f4\u52a0\u7b26\u5408\u8bed\u4e49\nMiddleware \u91c7\u7528\u6d0b\u8471\u6a21\u578b"),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"Koa \u548c Express \u4e00\u6837\uff0c\u90fd\u662f\u57fa\u7840\u6027\u6846\u67b6\uff0c\u662f\u5bf9\u539f\u59cb Node.js \u7684\u4e00\u5c42\u5c01\u88c5\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u57fa\u77f3\uff0c\u5728\u6b64\u57fa\u7840\u4e0a\u8bbe\u8ba1\u4e00\u5957\u5b8c\u6574\u7684\u9879\u76ee\u5b9e\u65bd\u65b9\u6848\u800c\u540e\u5e94\u7528\u3002"))}u.isMDXComponent=!0},6737:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/onions-9a0799af93c0eb47143bae8af65a7057.png"}}]);