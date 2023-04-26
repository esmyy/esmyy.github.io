"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={},o="\u6267\u884c\u4e0a\u4e0b\u6587",i={unversionedId:"JS/context",id:"JS/context",title:"\u6267\u884c\u4e0a\u4e0b\u6587",description:"\u4e0b\u9762\u8fd9\u884c\u4ee3\u7801\u7684\u6267\u884c\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/03-JS/11-context.mdx",sourceDirName:"03-JS",slug:"/JS/context",permalink:"/docs/JS/context",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-JS/11-context.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ES Module",permalink:"/docs/JS/module/esm"},next:{title:"\u4f5c\u7528\u57df",permalink:"/docs/JS/scope"}},p={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5206\u7c7b",id:"\u5206\u7c7b",level:2},{value:"\u53d8\u91cf\u73af\u5883",id:"\u53d8\u91cf\u73af\u5883",level:2},{value:"\u8bcd\u6cd5\u73af\u5883",id:"\u8bcd\u6cd5\u73af\u5883",level:2},{value:"\u53d8\u91cf\u67e5\u627e",id:"\u53d8\u91cf\u67e5\u627e",level:2},{value:"\u6267\u884c\u4e0a\u4e0b\u6587\u6808",id:"\u6267\u884c\u4e0a\u4e0b\u6587\u6808",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},d=u("MyImg"),s=u("Mindmap"),m={toc:c},k="wrapper";function f(e){let{components:t,...r}=e;return(0,l.kt)(k,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6267\u884c\u4e0a\u4e0b\u6587"},"\u6267\u884c\u4e0a\u4e0b\u6587"),(0,l.kt)("p",null,"\u4e0b\u9762\u8fd9\u884c\u4ee3\u7801\u7684\u6267\u884c\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"console.log(a);\n")),(0,l.kt)("p",null,"\u8981\u6b63\u786e\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898\uff0c\u5149\u8fd9\u70b9\u4fe1\u606f\u662f\u4e0d\u591f\u7684\uff0c\u9700\u8981\u77e5\u9053\u6267\u884c\u5230\u8be5\u884c\u4ee3\u7801\u65f6\u7684\u73af\u5883\u662f\u600e\u6837\u7684\uff0c\u4e5f\u5c31\u662f\u7a0b\u5e8f\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u3002"),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"\u6267\u884c\u4e0a\u4e0b\u6587\u662f JavaScript \u6267\u884c\u4e00\u6bb5\u4ee3\u7801\u65f6\u7684\u8fd0\u884c\u73af\u5883\u3002\u73af\u5883\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u73af\u5883\u662f\u6307\u76f8\u5bf9\u5e76\u76f8\u5173\u67d0\u9879\u4e2d\u5fc3\u4e8b\u7269\u7684\u5468\u8fb9\u4e8b\u7269")),(0,l.kt)("p",null,"\u9488\u5bf9\u67d0\u4e00\u6bb5\uff0c\u6216\u8005\u67d0\u4e00\u884c\u4ee3\u7801\u6765\u8bf4\u5b83\u6240\u5904\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u65f6\uff0c\u6839\u636e ",(0,l.kt)("a",{parentName:"p",href:"https://262.ecma-international.org/5.1/#sec-10.3"},"ECMA \u89c4\u8303\u4e2d\u7684\u5b9a\u4e49"),"\uff0c\u8fd9\u4e2a\u201d\u5468\u8fb9\u4e8b\u7269\u201c\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210"),(0,l.kt)(d,{src:n(2532),width:"400px",mdxType:"MyImg"}),(0,l.kt)("p",null,"\u7b80\u5355\u8bf4\u6765\uff0c\u8fd9 3 \u4e2a\u7ec4\u6210\u90e8\u5206\u7684\u542b\u4e49\u5982\u4e0b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7ec4\u6210"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u73af\u5883"),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 var, function \u58f0\u660e\u7684\u90a3\u4e9b\u53d8\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8bcd\u6cd5\u73af\u5883"),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7 let, const \u58f0\u660e\u7684\u90a3\u4e9b\u53d8\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"this"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u73af\u5883\u4e2d\u6240\u9ed8\u8ba4\u7ed1\u5b9a\u7684\u5bf9\u8c61")))),(0,l.kt)("p",null,"\u6267\u884c\u4e0a\u4e0b\u6587\u4e5f\u53ef\u4ee5\u63cf\u8ff0\u4e3a\uff0c\u5f53\u7a0b\u5e8f\u6267\u884c\u5230\u67d0\u4e00\u5904\u65f6\uff0c\u6216\u8005\u662f\u5728\u67d0\u4e00\u6bb5\u4ee3\u7801\u8303\u56f4\u5185\uff0c\u80fd\u591f\u8bbf\u95ee\u54ea\u4e9b\u53d8\u91cf\uff0cthis \u662f\u4ec0\u4e48\u3002"),(0,l.kt)(s,{chart:"\n  mindmap\n    Object((\u6267\u884c\u4e0a\u4e0b\u6587))\n      \u6211\u80fd\u8bbf\u95ee\u54ea\u4e9b\u53d8\u91cf\n      \u8fd9\u4e9b\u53d8\u91cf\u4ec0\u4e48\u503c\n      this\u7ed1\u5b9a\u5bf9\u8c61\u662f\u8c01\n",mdxType:"Mindmap"}),(0,l.kt)("admonition",{title:"\u6ce8",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u65b9\u4fbf\u7406\u89e3\uff0c\u9996\u5148\u6587\u4e2d\u6240\u8bf4\u7684\u53d8\u91cf\u662f\u6cdb\u6307\u58f0\u660e\u7684\u6807\u8bc6\u7b26\uff0c\u5305\u542b var, let, function, const \u58f0\u660e\u7684\u3002")),(0,l.kt)("h2",{id:"\u5206\u7c7b"},"\u5206\u7c7b"),(0,l.kt)("p",null,"\u4e0a\u4e0b\u6587\u4e2d\u201d\u4e00\u6bb5\u201c\u7684\u6982\u5ff5\u5f88\u91cd\u8981\uff0c\u8fd9\u4e2a\u201d\u4e00\u6bb5\u201c\u662f\u7ba1\u7406\u533a\u95f4\u7684\u5212\u5206\uff0c\u5bf9\u5e94\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u5206\u7c7b\uff0c\u5982\u4e0b"),(0,l.kt)("mermaid",{value:"  flowchart TB\n  ctx((\u5206\u7c7b)) --\x3e B(\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587)\n  ctx --\x3e C(\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587)\n  ctx --\x3e D(eval \u6267\u884c\u4e0a\u4e0b\u6587)"}),(0,l.kt)("p",null,"\u5168\u5c40\uff0c\u51fd\u6570\uff0ceval\uff0c\u6709\u4e00\u4e2a\u7279\u70b9 \u2014\u2014 \u76f8\u5bf9\u72ec\u7acb\u7684\u201c\u4e00\u6bb5\u201d\uff0c\u5176\u5185\u90e8\u4ee3\u7801\uff0c\u5728\u6267\u884c\u65f6\u5230\u8be5\u6bb5\u65f6\u624d\u4f1a\u8fdb\u884c\u7f16\u8bd1\u3002\n\u6211\u4eec\u8bf4\u7684\u4e0a\u4e0b\u6587\uff0c\u4e3b\u8981\u5c31\u662f\u6307\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u9488\u5bf9\u51fd\u6570\u8fd9\u6837\u7684\u201d\u4e00\u6bb5\u201c\u800c\u8a00\uff0c\u7a0b\u5e8f\u6267\u884c\u4e0a\u4e0b\u6587\u53ef\u4ee5\u7406\u89e3\u4e3a\u5728\u51fd\u6570\u91cc\u9762\u6267\u884c\u65f6\uff0c\u51fd\u6570\u5185\u90e8\u7684\u53d8\u91cf\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u662f\u4e3b\u8981\u5173\u6ce8\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u8bf4\u6267\u884c\u4e0a\u4e0b\u6587\u65f6\u8bf4\u7684\u90a3\u4e2a\u201c\u4e00\u6bb5\u201d\u4e3b\u8981\u5c31\u662f\u6307\u51fd\u6570\u3002"),(0,l.kt)("h2",{id:"\u53d8\u91cf\u73af\u5883"},"\u53d8\u91cf\u73af\u5883"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifies the Lexical Environment whose environment record holds bindings created by VariableStatements and FunctionDeclarations within this execution context.")),(0,l.kt)("p",null,"\u53d8\u91cf\u73af\u5883\u4e5f\u53ef\u4ee5\u79f0\u4e3a\u53d8\u91cf\u5bf9\u8c61\uff0c\u4fdd\u5b58\u4e86\u53d8\u91cf\u63d0\u5347\u7684\u5185\u5bb9\u3002\u5982\u4e0b\u4f7f\u7528 var, let, const \u58f0\u660e\u4e86\u4e00\u4e9b\u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {\n  var a = 1;\n  let b = 2;\n  let c = 3;\n  // highlight-next-line\n  var d = 4;\n  const e = 5;\n}\n\nfoo();\n")),(0,l.kt)("p",null,"\u5f53\u7a0b\u5e8f\u6267\u884c\u5230\u9ad8\u4eae\u5904\u65f6\uff0c\u6b64\u65f6\u53d8\u91cf\u73af\u5883\u662f"),(0,l.kt)("mermaid",{value:'  flowchart LR\n  subgraph ve[\u53d8\u91cf\u73af\u5883]\n    A["a = 1"]\n    D["d = undefined"]\n  end'}),(0,l.kt)("p",null,"\u7ee7\u7eed\u6267\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {\n  var a = 1;\n  let b = 2;\n  let c = 3;\n  var d = 4;\n  // highlight-next-line\n  const e = 5;\n}\n\nfoo();\n")),(0,l.kt)("p",null,"\u6b64\u65f6\u53d8\u91cf\u73af\u5883\u662f"),(0,l.kt)("mermaid",{value:'  flowchart LR\n  subgraph ve[\u53d8\u91cf\u73af\u5883]\n    A["a = 1"]\n    D["d = 4"]\n  end'}),(0,l.kt)("p",null,"\u8fd9\u5c31\u662f\u53d8\u91cf\u73af\u5883\uff0c\u5305\u542b\u4e86\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u901a\u8fc7 var \u548c function \u58f0\u660e\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u4f46\u4e0d\u5305\u542b\u901a\u8fc7 let, const \u58f0\u660e\u7684\u53d8\u91cf\u3002\n\u8fd9\u4e2a\u65f6\u5019\u6267\u884c\u4e0a\u4e0b\u6587\u53ef\u4ee5\u8868\u793a\u4e3a"),(0,l.kt)(d,{src:n(361),width:"400px",mdxType:"MyImg"}),(0,l.kt)("admonition",{title:"\ud83e\udd14",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u6574\u4e2a\u53d8\u91cf\u63d0\u5347\u662f\u4e0a\u4e0b\u6587\u7ea7\u522b\u7684\uff0c\u6574\u4e2a\u4e0a\u4e0b\u6587\u7ea7\u522b\u53ea\u6709\u4e00\u4e2a\u53d8\u91cf\u73af\u5883\uff0c\u56e0\u6b64\u53d8\u91cf\u73af\u5883\u4e5f\u53ef\u4ee5\u79f0\u4f5c\u53d8\u91cf\u5bf9\u8c61\u3002")),(0,l.kt)("h2",{id:"\u8bcd\u6cd5\u73af\u5883"},"\u8bcd\u6cd5\u73af\u5883"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifies the Lexical Environment used to resolve identifier references made by code within this execution context.")),(0,l.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u6240\u6709\u548c let, const \u76f8\u5173\u7684\u53d8\u91cf\uff0c\u90fd\u5f52\u5c5e\u4e8e\u8bcd\u6cd5\u73af\u5883\u3002\u5982\u4f55\u7406\u89e3\u5462\uff0c\u8fd8\u662f\u521a\u624d\u7684 \ud83c\udf30"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {\n  var a = 1;\n  let b = 2;\n  let c = 3;\n  var d = 4;\n  const e = 5;\n  // highlight-next-line\n}\n\nfoo();\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u8bcd\u6cd5\u73af\u5883\u662f\u4e0b\u9762\u8fd9\u6837\u7684"),(0,l.kt)("mermaid",{value:'  flowchart LR\n  subgraph ve[\u8bcd\u6cd5\u73af\u5883]\n    B["b = 2"]\n    C["c = 3"]\n    E["e = 5"]\n  end'}),(0,l.kt)("p",null,"let, const \u5728\u5757\u7ea7\u4f5c\u7528\u57df\u58f0\u660e\u53d8\u91cf\u65f6\uff0c\u60c5\u51b5\u5c31\u4e0d\u4e00\u6837\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {\n  var a = 1;\n  let b = 2;\n  let c = 3;\n  var d = 4;\n  const e = 5;\n  // highlight-next-line\n  console.log(b);\n  {\n    let b = 6;\n    const f = 8;\n    const g = 9;\n    // highlight-next-line\n    console.log(b);\n  }\n}\n\nfoo();\n")),(0,l.kt)("p",null,"ES6 \u652f\u6301\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u5728\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"\u5757\u7ea7\u4f5c\u7528\u57df\u4e2d\u662f\u80fd\u591f\u8bbf\u95ee\u5916\u90e8",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\u4f5c\u7528\u57df\u4e2d\u7684\u53d8\u91cf\u7684\uff0c\u8fd9\u8bf4\u660e\u540c\u4e00\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\uff0c\u4f1a\u540c\u65f6\u5b58\u5728\u4e24\u4e2a\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\u3002\u5982\u679c\u6211\u4eec\u628a\u8bcd\u6cd5\u73af\u5883\uff0c\u4e5f\u770b\u505a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u5c82\u4e0d\u662f\u8bf4\u4eba\u5bb6\u5bf9\u8c61\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"2b")," \u5c5e\u6027\uff1f\u8fd9\u4e0d\u597d\uff0c\u5f71\u54cd\u793e\u4f1a\u548c\u8c10\u5bb6\u5ead\u5e78\u798f\u56fd\u5bb6\u547d\u8fd0\u4e16\u754c\u548c\u5e73\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u7684\u8bcd\u6cd5\u73af\u5883\uff0c\u5176\u5b9e\u662f\u4e00\u4e2a\u6808\u3002")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\u51fd\u6570\u4e2d\uff0c\u5b58\u5728\u7740\u5d4c\u5957\u7684\u4f5c\u7528\u57df"),(0,l.kt)("mermaid",{value:'  flowchart LR\n  subgraph foo["foo\u51fd\u6570\u4f5c\u7528\u57df"]\n    block["\u5757\u7ea7\u4f5c\u7528\u57df {}"]\n  end'}),(0,l.kt)("p",null,"\u5f15\u5165\u4e00\u4e2a\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61\u7684\u6982\u5ff5\uff0c\u5b83\u5305\u542b\u4f5c\u7528\u57df\u4e2d\u7684\u6240\u6709 let,const \u58f0\u660e\u7684\u53d8\u91cf\u3002\u4f5c\u7528\u57df\u548c\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61\u4e00\u4e00\u5bf9\u5e94\uff0c\u5d4c\u5957\u7684\u4f5c\u7528\u57df\u4f9d\u6b21\u5165\u6808\u81ea\u8eab\u7684\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61\uff0c\u67e5\u627e\u53d8\u91cf\u65f6\u4f9d\u6b21\u4ece\u6240\u5728\u4f4d\u7f6e\u5411\u6808\u5e95\u67e5\u627e\uff0c\u8fd9\u6837\uff0c\u8bcd\u6cd5\u73af\u5883\u53ef\u4ee5\u8868\u793a\u4e3a"),(0,l.kt)("mermaid",{value:'  flowchart LR\n  subgraph le["foo\u6267\u884c\u4e0a\u4e0b\u6587\u8bcd\u6cd5\u73af\u5883\u6808"]\n    subgraph block["{} \u5757\u7ea7\u4f5c\u7528\u57df"]\n      direction TB\n      bb["b = 6"]\n      ff["f = 8"]\n      gg["g = 9"]\n    end\n    subgraph foo["foo\u4f5c\u7528\u57df"]\n      direction TB\n      b["b = 2"]\n      c["c = 3"]\n      e["e = 5"]\n    end\n    block --\x3e foo\n  end\n\n  style le fill:#05a89d,stroke:#05a89d\n  style le color:#fff'}),(0,l.kt)("p",null,"\u8fd9\u4e5f\u662f\u5c40\u90e8\u4f5c\u7528\u57df\u80fd\u591f\u5b9e\u73b0\u7684\u57fa\u672c\u539f\u7406\uff0c\u901a\u8fc7\u6808\u7ed3\u6784\u7ef4\u62a4\u4e86\u53d8\u91cf\u67e5\u627e\u7684\u89c4\u5219\u3002"),(0,l.kt)("admonition",{title:"\ud83e\udd14",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u9488\u5bf9\u4e0a\u4e0b\u6587\u6765\u8bf4\u65f6\uff0c\u8bcd\u6cd5\u73af\u5883\u6307\u7684\u662f\u8bcd\u6cd5\u73af\u5883\u6808\uff0c\u5f53\u7279\u6307\u5230\u5177\u4f53\u7684\u4f5c\u7528\u57df\u65f6\uff0c\u8bcd\u6cd5\u73af\u5883\u6307\u7684\u662f\u4f5c\u7528\u57df\u7684\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,"TODO: \u8fd9\u4e2a\u65f6\u5019\u6709\u4e00\u4e2a\u95ee\u9898, e \u5904\u4e8e TDZ\uff0c\u662f\u5426\u5e94\u5f53\u5f52\u5c5e\u4e8e\u8bcd\u6cd5\u73af\u5883"),(0,l.kt)("h2",{id:"\u53d8\u91cf\u67e5\u627e"},"\u53d8\u91cf\u67e5\u627e"),(0,l.kt)("p",null,"\u67e5\u627e\u7684\u89c4\u5219\u662f\u5148\u8bcd\u6cd5\u73af\u5883\u6808\uff0c\u518d\u53d8\u91cf\u73af\u5883\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function foo() {\n  var a = 1;\n  let b = 2;\n  {\n    let c = 3;\n    var d = 4;\n    const e = 5;\n\n    let b = 66;\n    // highlight-next-line\n    console.log("a + b is: ", a + b + c + d + e);\n  }\n}\n\nfoo();\n')),(0,l.kt)("p",null,"\u5bf9\u4e8e\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\uff0c\u5728\u8bcd\u6cd5\u73af\u5883\u6808\u7684\u6808\u9876\u7684\u5bf9\u8c61\u5c31\u67e5\u627e\u5230\u4e86\u662f 66\uff0c\u5176\u4ed6\u7684\u53d8\u91cf\u67e5\u627e\u7684\u8fc7\u7a0b\u4e5f\u662f\u4e00\u6837\u7684\uff0c\u56e0\u6b64\u6700\u7ec8\u8f93\u51fa\u662f 79"),(0,l.kt)(d,{src:n(7125),width:"400px",mdxType:"MyImg"}),(0,l.kt)("h2",{id:"\u6267\u884c\u4e0a\u4e0b\u6587\u6808"},"\u6267\u884c\u4e0a\u4e0b\u6587\u6808"),(0,l.kt)("p",null,"\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u5c31\u662f\u5e38\u8bf4\u7684\u8c03\u7528\u6808\uff0c\u662f\u7528\u6765\u7ba1\u7406\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u3002\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u662f\u4e3b\u8981\u5173\u6ce8\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u8c03\u7528\u6808\u662f\u7528\u6765\u7ef4\u62a4\u51fd\u6570\u8c03\u7528\u5173\u7cfb\u7684\u3002\u524d\u9762\u7684\u4f8b\u5b50\u505a\u4e00\u4e9b\u4fee\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function foo() {\n  var a = 1;\n  let b = 2;\n  function bar() {\n    let c = 3;\n    var d = 4;\n    const e = 5;\n    let b = 66;\n    // highlight-next-line\n    console.log("a + b is: ", a + b + c + d + e);\n  }\n\n  bar();\n}\n\nfoo();\n')),(0,l.kt)("p",null,"\u6b64\u65f6\u6267\u884c\u4e0a\u4e0b\u6587\u6808\u53ef\u8868\u793a\u4e3a\u5982\u4e0b"),(0,l.kt)(d,{src:n(3065),width:"400px",mdxType:"MyImg"}),(0,l.kt)("p",null,"\u90a3\u4e48\u5bf9\u4e8e\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u663e\u7136\u8de8\u4e86\u4f5c\u7528\u57df\uff0c\u751a\u81f3\u662f\u5728\u4e0d\u540c\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u4e86\u3002\u662f\u5982\u4f55\u67e5\u627e\u5230\u7684\u5462\uff1f\u770b\u8d77\u6765\u662f\u5728 bar \u6267\u884c\u4e0a\u4e0b\u6587\u627e\u4e0d\u5230\uff0c\u5c31\u5230 foo \u6267\u884c\u4e0a\u4e0b\u6587\u627e\u3002\u4f46\u662f\u8fd9\u6837\u5e76\u4e0d\u51c6\u786e\uff0c\u5f53\u6d89\u53ca\u5230\u95ed\u5305\u7684\u65f6\u5019\uff0c\u95ee\u9898\u53d8\u5f97\u590d\u6742\u4e86 \u2014\u2014 \u5982\u679c\u8fd4\u56de\u4e86 bar\uff0c\u7136\u540e\u5728\u5916\u90e8\u8c03\u7528\uff0c\u5219\u8c03\u7528\u65f6\u6808\u4e2d\u5df2\u7ecf\u6ca1\u6709 foo \u7684\u6267\u884c\u4e0a\u4e0b\u6587\u3002"),(0,l.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u53d8\u91cf\u7684\u67e5\u627e\u4e0d\u80fd\u7b80\u5355\u7684\u6309\u7167\u4e0a\u4e0b\u6587\u53bb\u7406\u89e3\uff0c\u5e94\u8be5\u59cb\u7ec8\u662f\u4ece\u4f5c\u7528\u57df\u7684\u89d2\u5ea6\u53bb\u7406\u89e3\uff0c\u8fd9\u4e9b\u95ee\u9898\u5c06\u5728\u95ed\u5305\uff0c\u4f5c\u7528\u57df\u7b49\u76f8\u5173\u6587\u7ae0\u4e2d\u8fdb\u884c\u8bf4\u660e\u3002")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u5728\u5f15\u5165\u5757\u7ea7\u4f5c\u7528\u57df\u4e4b\u524d\uff0c\u7528\u4e00\u4e2a\u5bf9\u8c61\u53bb\u4fdd\u5b58\u6240\u6709\u53d8\u91cf\u7684\u5f15\u7528\u5c31\u53ef\u4ee5\u4e86\uff0c\u8fd9\u5728\u4ee5\u524d\u53eb\u505a\u53d8\u91cf\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u5f15\u5165\u5757\u7ea7\u4f5c\u7528\u57df\u4e4b\u540e\uff0c\u7531\u4e8e\u666e\u901a\u5757\u7ea7\u4f5c\u7528\u57df\u6267\u884c\u5e76\u4e0d\u521b\u5efa\u65b0\u7684\u4e0a\u4e0b\u6587\uff0c\u901a\u8fc7\u5c06\u53d8\u91cf\u5bf9\u8c61\u62c6\u5206\uff0c\u7528\u53d8\u91cf\u73af\u5883\u6765\u66ff\u4ee3\u539f\u53d8\u91cf\u5bf9\u8c61\uff0c\u7528\u8bcd\u6cd5\u73af\u5883\u6765\u9694\u79bb\u5d4c\u5957\u4f5c\u7528\u57df\u4e2d\u7684\u540c\u540d\u53d8\u91cf\uff0c\u901a\u8fc7\u8bcd\u6cd5\u73af\u5883\u6808\u6765\u7ef4\u62a4\u53d8\u91cf\u67e5\u627e\u987a\u5e8f\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u91cf\u73af\u5883/\u53d8\u91cf\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d var \u548c function \u58f0\u660e\u7684\u53d8\u91cf\uff0c",(0,l.kt)("br",null),"\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u8bcd\u6cd5\u73af\u5883")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8bcd\u6cd5\u73af\u5883"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7279\u6307\u5230\u5177\u4f53\u7684\u4f5c\u7528\u57df\u540d\u65f6\uff0c\u6307\u7684\u662f\u4f5c\u7528\u57df\u7684\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61\u3002",(0,l.kt)("br",null),"\u5f53\u9488\u5bf9\u4e0a\u4e0b\u6587\u65f6\uff0c\u6307\u7684\u662f\u8bcd\u6cd5\u73af\u5883\u6808")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7279\u5b9a\u4f5c\u7528\u57df\u7684\u8bcd\u6cd5\u73af\u5883")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8bcd\u6cd5\u73af\u5883\u6808"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u6808\u5143\u7d20\u662f\u4e00\u4e2a\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61")))))}f.isMDXComponent=!0},3065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/call-stack-cascader-d9a2687e35e2921f469c4c58e04e9e20.jpg"},2532:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/ctx-composition-e806e7ff2940c08b3535bce9eee8ee56.jpg"},7125:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/ctx-identifier-9bb46d985cf6ab8b772ab149ec051cf9.jpg"},361:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/ctx-ve-6818ebb27613f020f3f5a6e13efeee2a.jpg"}}]);