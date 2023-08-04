"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(i,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},o="\u57fa\u7840\u8981\u70b9",p={unversionedId:"JS/base",id:"JS/base",title:"\u57fa\u7840\u8981\u70b9",description:"\u57fa\u7840\u77e5\u8bc6\u70b9\u68c0\u67e5\u53ca\u7b80\u8981\u4ecb\u7ecd\u3002",source:"@site/docs/03-JS/00-base.md",sourceDirName:"03-JS",slug:"/JS/base",permalink:"/docs/JS/base",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-JS/00-base.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u62d3\u5c55\u5e94\u7528",permalink:"/docs/CSS/scheme"},next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/docs/JS/types/"}},i={},u=[{value:"\u53d8\u91cf\u63d0\u5347",id:"\u53d8\u91cf\u63d0\u5347",level:2},{value:"let &amp; const",id:"let--const",level:2},{value:"TDZ",id:"tdz",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u57fa\u7840\u8981\u70b9"},"\u57fa\u7840\u8981\u70b9"),(0,a.kt)("p",null,"\u57fa\u7840\u77e5\u8bc6\u70b9\u68c0\u67e5\u53ca\u7b80\u8981\u4ecb\u7ecd\u3002"),(0,a.kt)("h2",{id:"\u53d8\u91cf\u63d0\u5347"},"\u53d8\u91cf\u63d0\u5347"),(0,a.kt)("p",null,"\u5728\u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," \u7684\u5e74\u4ee3\uff0c\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u6807\u8bc6\u7b26\uff0c\u53ef\u4ee5\u62c6\u5206\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u58f0\u660e")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u8d4b\u503c")," \u4e24\u4e2a\u6b65\u9aa4\u53bb\u7406\u89e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'console.log(a); // undefined\nfoo(); // in foo\n\nvar a = 12;\nfunction foo() {\n  console.log("in foo");\n}\n')),(0,a.kt)("p",null,"\u5982\u4e0a\u6240\u793a\uff0c\u5b9a\u4e49\u4e86\u4e24\u4e2a\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," \u548c\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"\u3002\u5728\u5b9a\u4e49",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\u7684\u4f4d\u7f6e\u4e4b\u524d\u8bbf\u95ee\uff0c\u6ca1\u6709\u62a5\u9519\uff0c\u6253\u5370\u51fa\u6765\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u8fd9\u8bf4\u660e\u5728\u6253\u5370\u7684\u4f4d\u7f6e\uff0c\u7f16\u8bd1\u5668\u662f\u77e5\u9053\u6709\u8fd9\u73a9\u610f\u7684\uff0c\u8fd9\u79cd\u60c5\u51b5\u89e3\u91ca\u4e3a\n",(0,a.kt)("strong",{parentName:"p"},"\u58f0\u660e\u63d0\u5347\uff0c\u8d4b\u503c\u4e0d\u63d0\u5347"),"\u3002\u51fd\u6570\u5728\u58f0\u660e\u7684\u4f4d\u7f6e\u4e4b\u524d\u8c03\u7528\uff0c\u5e76\u6ca1\u6709\u62a5\u9519\uff0c\u8bf4\u660e\u5728\u8c03\u7528\u7684\u4f4d\u7f6e\uff0c\u7f16\u8bd1\u5668\u662f\u80fd\u77e5\u9053\u51fd\u6570\u5b58\u5728\uff0c\u5e76\u4e14\u62ff\u5230\u4e86\u5b83\u7684\u5185\u5bb9\uff0c\u8fd9\u79cd\u60c5\u51b5\u79f0\u4e4b\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u58f0\u660e\u63d0\u5347\uff0c\u8d4b\u503c\u4e5f\u63d0\u5347"),"\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"var \u53d8\u91cf\u63d0\u5347\uff0c\u53ef\u4ee5\u89e3\u91ca\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u666e\u904d\u53d8\u91cf\u7684\u58f0\u660e\u63d0\u5347\uff0c\u4f46\u662f\u8d4b\u503c\u4e0d\u63d0\u5347\uff0c\u51fd\u6570\u7684\u58f0\u660e\u63d0\u5347\uff0c\u8d4b\u503c\u4e5f\u63d0\u5347"),"\u3002")),(0,a.kt)("h2",{id:"let--const"},"let & const"),(0,a.kt)("p",null,"\u5728\u5f15\u5165\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"const")," \u548c\u5757\u7ea7\u4f5c\u7528\u57df\u4e4b\u540e\uff0c\u201c\u58f0\u660e\u201d\u8fd9\u4e00\u4e2a\u63cf\u8ff0\u5c31\u4e0d\u591f\u5177\u4f53\u4e86\uff0c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  console.log(a); // undefined\n  var a;\n}\n\n{\n  console.log(b); // Uncaught ReferenceError: Cannot access 'a' before initialization\n  let b;\n}\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"\u58f0\u660e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u8bbf\u95ee\u4f1a\u6253\u5370\u9ed8\u8ba4\u503c undefined\u3002\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," \u58f0\u660e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),"\uff0c\u4f1a\u76f4\u63a5\u62a5\u9519\uff0c\u63d0\u793a\u9700\u8981\u5148\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u7406\u89e3\uff0c\u5f15\u5165\u4e86 let \u548c const \u4e4b\u540e\uff0c\u53ef\u4ee5\u5c06\u53d8\u91cf\u7684\u5b9a\u4e49\u8fc7\u7a0b\uff0c\u65b0\u589e\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"\u5360\u4f4d")," \u9636\u6bb5"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9636\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5360\u4f4d"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5360\u4e86\u6807\u8bc6\u7b26\u540d\u79f0\uff0c\u4f46\u4e0d\u5141\u8bb8\u8bbf\u95ee")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e\u8bed\u53e5\u6267\u884c\uff0c\u4f46\u4e0d\u8d4b\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8d4b\u503c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u6211\u4eec\u7684\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\uff0c\u7b2c\u4e00\u6b21\u8d4b\u503c")))),(0,a.kt)("p",null,"\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  console.log(b); // Uncaught ReferenceError: Cannot access 'a' before initialization\n\n  // \u5360\u4f4d\uff1a\u5728\u58f0\u660e\u4e4b\u524d\uff0c\u4e0d\u5141\u8bb8\u8bbf\u95eeb\n  let b;\n  // \u58f0\u660e\uff1a\u4f7f\u7528let\u58f0\u660e\uff0c\u4f46\u672a\u8d4b\u503c\uff0c\u8fd9\u9636\u6bb5\u8bbf\u95ee\u662f\u9ed8\u8ba4\u503c\n  b = 666;\n  // \u8d4b\u503c\uff1a\u8bbe\u7f6e\u503c\u4e4b\u540e\n}\n")),(0,a.kt)("p",null,"\u6240\u8c13\u7684\u5360\u4f4d\u9636\u6bb5\uff0c\u5c31\u662f\u6211\u4eec\u8bf4\u7684\u5e38\u8bf4\u7684 TDZ(\u6682\u65f6\u6027\u6b7b\u533a)\u3002"),(0,a.kt)("h2",{id:"tdz"},"TDZ"),(0,a.kt)("p",null,"TDZ(\u6682\u65f6\u6027\u6b7b\u533a)\u8868\u793a\u4f60\u8981\u7684\u4e1c\u897f\u5b58\u5728\uff0c\u4f46\u662f\u4f60\u8fd8\u4e0d\u80fd\u62ff\u3002\u8fd9\u4e5f\u6697\u542b\u7740\u4e00\u5c42\u610f\u601d \u2014\u2014 \u7f16\u8bd1\u5668\u662f\u77e5\u9053\u8fd9\u4e2a\u4e1c\u897f\u5b58\u5728\u7684\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4ece\u7f16\u8bd1\u7684\u89d2\u5ea6\u53bb\u770b\uff0c\u4e0d\u7ba1\u662f\u4f55\u79cd\u65b9\u5f0f\u58f0\u660e\uff0c\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u53d8\u91cf\u90fd\u4f1a\u88ab\u8bc6\u522b\uff0c\u52a0\u5165\u5230\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u3002"),(0,a.kt)("p",null,"\u4ece\u5b9e\u73b0\u4e0a\uff0c\u53ef\u4ee5\u8fd9\u4e48\u53bb\u6a21\u62df TDZ"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9636\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6a21\u62df\u64cd\u4f5c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5360\u4f4d"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86 getter \u51fd\u6570\uff0c\u8bbf\u95ee\u5373\u629b\u51fa ReferenceError")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u58f0\u660e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u91cd\u65b0\u5b9a\u4e49\u4e86 getter \u51fd\u6570\uff0c\u8bbf\u95ee\u8f93\u51fa undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8d4b\u503c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u91cd\u65b0\u5b9a\u4e49\u4e86 getter \u51fd\u6570\u5141\u8bb8\u6b63\u5e38\u8bbf\u95ee")))),(0,a.kt)("p",null,"\u5982\u679c\u5c06\u53d8\u91cf\u63d0\u5347\u62c6\u5206\u6210 ",(0,a.kt)("strong",{parentName:"p"},"\u5360\u4f4d\u63d0\u5347"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u63d0\u5347"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u8d4b\u503c\u63d0\u5347")," \u4e09\u4e2a\u90e8\u5206\uff0c\u90a3\u4e48 let \u662f \u5360\u4f4d\u63d0\u5347\uff0c\u4f46\u662f\u58f0\u660e\u548c\u8d4b\u503c\u4e0d\u63d0\u5347\u3002"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"TDZ \u662f\u5fc5\u8981\u7684\u5417"),(0,a.kt)("div",null,"\u662f\u4e5f\u4e0d\u662f\uff0c\u53d6\u51b3\u4e8e\u4f60\u770b\u7684\u89d2\u5ea6\u3002TDZ \u7ea6\u5b9a\u4e0d\u8981\u5728\u58f0\u660e\u4e4b\u524d\u4f7f\u7528\uff0c\u662f\u4e3a\u4e86\u51cf\u5c11\u9519\u8bef\u53d1\u751f\u6982\u7387\u7684\u7b56\u7565\u9009\u62e9\u800c\u5df2\u3002\u5c31\u8ddf\u559d\u80a5\u5b85\u5feb\u4e50\u6c34\u4e00\u6837\uff0c\u4e0d\u559d\u5feb\u4e50\u6c34\u80fd\u6b7b\u5417\uff1f\u4e5f\u8bb8\u4e0d\u4f1a\uff0c\u4f46\u662f\u559d\u4e86\u4f1a\u5f88\u5feb\u4e50\u5440\uff0c\u4f60\u8bf4\u559d\u8fd9\u4e2a\u5feb\u4e50\u6c34\u662f\u4e0d\u662f\u5fc5\u8981\u5462\uff1f")))}m.isMDXComponent=!0}}]);