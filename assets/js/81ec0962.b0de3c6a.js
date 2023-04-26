"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={},o="\u591a\u8fdb\u7a0b\u67b6\u6784",i={unversionedId:"browser/process",id:"browser/process",title:"\u591a\u8fdb\u7a0b\u67b6\u6784",description:"\u5728 \u4ee5 Chrome \u4e3a\u4f8b\uff0c\u8bf4\u660e\u6d4f\u89c8\u5668\u7684\u591a\u8fdb\u7a0b\u67b6\u6784\uff0c\u591a\u8fdb\u7a0b\u67b6\u6784\u7684\u597d\u5904\uff0c\u4e00\u4e9b\u6ce8\u610f\u70b9\u3002",source:"@site/docs/21-browser/01-process.md",sourceDirName:"21-browser",slug:"/browser/process",permalink:"/docs/browser/process",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/21-browser/01-process.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7248\u672c\u63a7\u5236",permalink:"/docs/project/version"},next:{title:"\u6e32\u67d3\u6d41\u7a0b",permalink:"/docs/browser/render"}},s={},p=[{value:"\u8fdb\u7a0b\u5206\u7c7b",id:"\u8fdb\u7a0b\u5206\u7c7b",level:2},{value:"\u672a\u6765\u5df2\u6765 - SOA",id:"\u672a\u6765\u5df2\u6765---soa",level:2},{value:"\u6e32\u67d3\u8fdb\u7a0b\u7684\u9694\u79bb\u4e0e\u5171\u4eab",id:"\u6e32\u67d3\u8fdb\u7a0b\u7684\u9694\u79bb\u4e0e\u5171\u4eab",level:2},{value:"\u6e32\u67d3\u8fdb\u7a0b\u5171\u4eab",id:"\u6e32\u67d3\u8fdb\u7a0b\u5171\u4eab",level:3},{value:"\u6e32\u67d3\u8fdb\u7a0b\u9694\u79bb",id:"\u6e32\u67d3\u8fdb\u7a0b\u9694\u79bb",level:3},{value:"\u603b\u7ed3\u4e0e\u53c2\u8003",id:"\u603b\u7ed3\u4e0e\u53c2\u8003",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u591a\u8fdb\u7a0b\u67b6\u6784"},"\u591a\u8fdb\u7a0b\u67b6\u6784"),(0,a.kt)("p",null,"\u5728 \u4ee5 Chrome \u4e3a\u4f8b\uff0c\u8bf4\u660e\u6d4f\u89c8\u5668\u7684\u591a\u8fdb\u7a0b\u67b6\u6784\uff0c\u591a\u8fdb\u7a0b\u67b6\u6784\u7684\u597d\u5904\uff0c\u4e00\u4e9b\u6ce8\u610f\u70b9\u3002"),(0,a.kt)("h2",{id:"\u8fdb\u7a0b\u5206\u7c7b"},"\u8fdb\u7a0b\u5206\u7c7b"),(0,a.kt)("p",null,"\u5728 Chrome \u6807\u7b7e\u680f\u7a7a\u767d\u5904\u53f3\u952e -> Task Manager\uff0c\u663e\u793a\u7684\u8fdb\u7a0b\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"task manager",src:r(6176).Z,width:"680",height:"492"})),(0,a.kt)("p",null,"\u6709 Browser\uff0cTab\uff0cExtension\uff0cGPU \u7b49\u51e0\u7c7b\u8fdb\u7a0b\uff0c\u5404\u7c7b\u8fdb\u7a0b\u4e4b\u95f4\u7684\u5173\u7cfb\u5982\u56fe\u4e2d\u6240\u793a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"browser-arch2",src:r(6753).Z,width:"865",height:"499"})),(0,a.kt)("p",null,"Browser \u8fdb\u7a0b\u662f\u4e3b\u8fdb\u7a0b\uff0c\u8d1f\u8d23\u6574\u4f53\u7684\u8c03\u5ea6\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 IPC \u4e0e\u5176\u4ed6\u8fdb\u7a0b\u8fdb\u884c\u4ea4\u4e92\uff0c\u5176\u4ed6\u8fdb\u7a0b\u7684 Storage \u548c Network \u7b49\u57fa\u7840\u670d\u52a1\uff0c\u90fd\u5fc5\u987b\u901a\u8fc7\u4e3b\u8fdb\u7a0b\u95f4\u63a5\u8c03\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browser\uff1a\u8fdb\u7a0b\u8d1f\u8d23\u6574\u4f53\u7684\u8c03\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"Utility\uff1a\u5e95\u5c42\u7684\u57fa\u7840\u670d\u52a1\uff0c\u6bd4\u5982\u7f51\u7edc\u8bf7\u6c42\uff0c\u5b58\u50a8\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"Plugin\uff1a\u8d1f\u8d23\u6d4f\u89c8\u5668\u63d2\u4ef6\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"Renderer Process: \u8d1f\u8d23\u9875\u9762\u89e3\u6790\u6e32\u67d3\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u5e73\u65f6\u8bf4\u7684\u6e32\u67d3\u8fdb\u7a0b\uff0c\u662f\u6211\u4eec\u5f00\u53d1\u65f6\u4e3b\u8981\u5173\u6ce8\u7684\u8fdb\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"GPU Process: \u8d1f\u8d23\u6574\u4e2a\u6d4f\u89c8\u5668\u754c\u9762\u7684\u663e\u793a")),(0,a.kt)("p",null,"\u5177\u4f53\u5230\u6d4f\u89c8\u5668\u7684\u6574\u4e2a\u754c\u9762\u4e0a\uff0c\u5404\u7c7b\u8fdb\u7a0b\u8d1f\u8d23\u7684\u90e8\u5206\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"browserui",src:r(1200).Z,width:"865",height:"441"})),(0,a.kt)("p",null,"\u56fe\u6e90 developers.google.com"),(0,a.kt)("p",null,"Tab \u680f\u548c\u5730\u5740\u680f\u8fd9\u4e9b\u6d4f\u89c8\u5668\u7684\u201d\u64cd\u4f5c\u201c\uff0c\u90fd\u7531\u4e3b\u8fdb\u7a0b\u5904\u7406\uff0c\u7531\u6b64\u6211\u4eec\u53ef\u4ee5\u60f3\u5230\u5728\u5730\u5740\u680f\u8f93\u5165 URL \u65f6\uff0c\u4e3b\u8fdb\u7a0b\u548c\u6e32\u67d3\u8fdb\u7a0b\uff0c\u7f51\u7edc\u8fdb\u7a0b\u7b49\u4e4b\u95f4\u4f1a\u8fdb\u884c\u4e00\u4e9b\u901a\u4fe1\u3002"),(0,a.kt)("h2",{id:"\u672a\u6765\u5df2\u6765---soa"},"\u672a\u6765\u5df2\u6765 - SOA"),(0,a.kt)("p",null,"\u5728\u4e0a\u4e00\u8282 Task Manager \u7684\u663e\u793a\u4e2d\uff0cStorage\uff0cNetwork \u7b49 Utility \u670d\u52a1\uff0c\u4e5f\u662f\u4ee5\u8fdb\u7a0b\u7684\u5f62\u5f0f\u5b58\u5728\u3002\u4f46\u662f\u8fd9\u4e9b\u670d\u52a1\uff0c\u5176\u201d\u8fdb\u7a0b\u201c\u7684\u7279\u5f81\u5728\u9010\u6e10\u5f31\u5316\uff0c\u9010\u6e10\u8d70\u5411\u5e55\u540e\u505a\u9ed8\u9ed8\u8d21\u732e\uff0c\u8fd9\u662f Chrome \u67b6\u6784\u8d70\u5411 SOA(Services Oriented Architecture\uff0c\u9762\u5411\u670d\u52a1\u7684\u67b6\u6784) \u7684\u4e00\u4e2a\u4f53\u73b0"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"servicfication",src:r(3851).Z,width:"1000",height:"550"})),(0,a.kt)("p",null,"Chrome \u7684\u5f39\u6027\u67b6\u6784\uff0c\u80fd\u591f\u6839\u636e\u8bbe\u5907\u7684\u60c5\u51b5\uff0c\u9009\u62e9\u5c06 Utility \u670d\u52a1\u4f5c\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u8fdb\u7a0b\uff0c\u8fd8\u662f\u5408\u5e76\u5230\u4e3b\u8fdb\u7a0b\u4e2d\u8fdb\u884c\u4f7f\u7528\u3002\u6761\u4ef6\u597d\uff0c\u5c31\u653e\u8086\u73a9\u800d\uff0c\u6bcf\u4e2a\u670d\u52a1\u4f5c\u4e3a\u8fdb\u7a0b\u5355\u72ec\u7ed9\u8d44\u6e90\uff0c\u6761\u4ef6\u5dee\u70b9\uff0c\u5c31\u5927\u5bb6\u6324\u6324\u3002"),(0,a.kt)("h2",{id:"\u6e32\u67d3\u8fdb\u7a0b\u7684\u9694\u79bb\u4e0e\u5171\u4eab"},"\u6e32\u67d3\u8fdb\u7a0b\u7684\u9694\u79bb\u4e0e\u5171\u4eab"),(0,a.kt)("p",null,"\u6e32\u67d3\u8fdb\u7a0b\u662f\u6211\u4eec\u4e3b\u8981\u5173\u6ce8\u7684\u8fdb\u7a0b\uff0c\u9996\u5148\u63d0\u51fa\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u6709\u7684\u65f6\u5019\u9875\u9762\u5d29\u6e83\uff0c\u662f\u4e00\u6279\u9875\u9762\u4e00\u8d77\u5d29\u6e83\uff1f"),(0,a.kt)("li",{parentName:"ul"},"\u9875\u9762\u548c\u9875\u9762\u4e2d\u7684 iframe \u662f\u5171\u7528\u6e32\u67d3\u8fdb\u7a0b\u7684\u5417\uff1f")),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"http://demo.mayueyue.com/html/browser-process/a.html"},"\u4e00\u4e2a\u4f8b\u5b50")," \u6765\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"render-process.jpg",src:r(4764).Z,width:"1347",height:"548"})),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a \u9875\u9762\uff1aiframe \u5d4c\u5957\u4e86 b \u9875\u9762 \u548c \u767e\u5ea6\u9996\u9875"),(0,a.kt)("li",{parentName:"ul"},"b \u9875\u9762\uff1aiframe \u5d4c\u5957\u4e86 c \u9875\u9762 \u548c \u6781\u5ba2\u65f6\u95f4\u9996\u9875"),(0,a.kt)("li",{parentName:"ul"},"a,b,c,d \u9875\u9762\u662f\u540c\u4e00\u4e2a\u7ad9\u70b9\u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"c \u9875\u9762\u7531 a \u9875\u9762\u94fe\u63a5\u6253\u5f00"),(0,a.kt)("li",{parentName:"ul"},"d \u9875\u9762\u4ece\u5730\u5740\u680f\u8f93\u5165\u56de\u8f66\u6253\u5f00")),(0,a.kt)("p",null,"\u7531\u6700\u7ec8\u7ed3\u679c\u53ef\u77e5"),(0,a.kt)("h3",{id:"\u6e32\u67d3\u8fdb\u7a0b\u5171\u4eab"},"\u6e32\u67d3\u8fdb\u7a0b\u5171\u4eab"),(0,a.kt)("p",null,"\u540c\u4e00\u4e2a\u7ad9\u70b9\u7684\u9875\u9762\uff0c\u4e24\u79cd\u60c5\u51b5\u4f1a\u5171\u4eab"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 iframe \u5d4c\u5957"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u94fe\u63a5\u6253\u5f00")),(0,a.kt)("p",null,"\u6b63\u662f\u7531\u4e8e\u6e32\u67d3\u8fdb\u7a0b\u590d\u7528\uff0c\u5c24\u5176\u662f\u7b2c\u4e8c\u79cd\u60c5\u51b5\u7684\u590d\u7528\uff0c\u5bfc\u81f4\u5728\u9875\u9762\u5d29\u6e83\u65f6\uff0c\u5f88\u591a\u65f6\u5019\u662f\u591a\u4e2a\u9875\u9762\u4e00\u8d77\u5d29\u3002"),(0,a.kt)("h3",{id:"\u6e32\u67d3\u8fdb\u7a0b\u9694\u79bb"},"\u6e32\u67d3\u8fdb\u7a0b\u9694\u79bb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"iframe \u5d4c\u5957\u7684\u9875\u9762\uff0c\u5982\u679c\u4e0d\u540c\u7ad9\u70b9\uff0c\u662f\u5355\u72ec\u7684\u6e32\u67d3\u8fdb\u7a0b"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5730\u5740\u680f\u6253\u5f00\u7684\u9875\u9762\uff0c\u4e0d\u4e0e\u5176\u4ed6\u9875\u9762\u590d\u7528\uff0c\u6709\u5355\u72ec\u6e32\u67d3\u8fdb\u7a0b")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u65b0\u5730\u5740")),(0,a.kt)("h2",{id:"\u603b\u7ed3\u4e0e\u53c2\u8003"},"\u603b\u7ed3\u4e0e\u53c2\u8003"),(0,a.kt)("p",null,"Chrome \u7684\u591a\u8fdb\u7a0b\u67b6\u6784\uff0c\u6b63\u5904\u5728\u7531\u539f\u6765\u7684\u591a\u8fdb\u7a0b\u67b6\u6784\u5230\u9762\u5411\u670d\u52a1\u7684\u67b6\u6784\u6f14\u53d8\u5f53\u4e2d\uff0c\u670d\u52a1\u5316\u662f\u4e00\u4e2a\u8d8b\u52bf\uff0c\u800c Chrome \u4e5f\u8d8a\u6765\u8d8a\u50cf\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"\u76f8\u5173\u7684\u6982\u5ff5\u4e4b\u524d\u96f6\u96f6\u6563\u6563\u5927\u6982\u90fd\u77e5\u9053\uff0c\u672c\u6587\u8f83\u5927\u7a0b\u5ea6\u53c2\u8003\u4e86\u8fd9\u4e2a\u6587\u7ae0\uff0c\u4e3b\u8981\u662f\u501f\u7528\u4e86\u56fe\u7247\uff0c\u501f\u7528\u4e00\u4e9b\u56fe\u4f8b\u8fdb\u884c\u4e00\u4e2a\u603b\u7ed3\u6982\u62ec\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2018/09/inside-browser-part1"},"Inside look at modern web browser (part 1)")),(0,a.kt)("p",null,"\u5728\u4e86\u89e3\u4e86\u591a\u8fdb\u7a0b\u67b6\u6784\u4e4b\u540e\uff0c\u53ef\u4ee5\u518d\u8fdb\u4e00\u6b65\u7814\u7a76 IPC\uff0c\u7814\u7a76\u5728\u4e00\u4e2a\u6e32\u67d3\u6d41\u6c34\u7ebf\u4e2d\u5404\u4e2a\u8fdb\u7a0b\u4e4b\u95f4\u7684\u914d\u5408\u8fc7\u7a0b\uff0c\u53ef\u53c2\u8003\u4e0b\u9762\u8fd9\u7bc7\u6587\u7ae0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2018/09/inside-browser-part2"},"Inside look at modern web browser (part 2)")))}m.isMDXComponent=!0},6753:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/browser-arch2-3954fe659570c101cc0f58982590b401.png"},1200:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/browserui-e829ea0bc87e83dca3698518b13d6b9f.png"},4764:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/render-process-00cc3cc984e66ceebfc48719a8ae68f4.jpg"},3851:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servicfication-38ac8093553d7aa9a5816fb059e6f11e.svg"},6176:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/task-manager-b0383447eab7108910103e9c2e88a45b.jpg"}}]);