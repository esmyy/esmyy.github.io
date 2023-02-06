"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,d=s["".concat(u,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o="\u95ed\u5305",p={unversionedId:"JS/closure",id:"JS/closure",title:"\u95ed\u5305",description:"\u95ed\u5305\u662f\u4f5c\u7528\u57df\u95ed\u5305\uff0c\u8981\u7406\u89e3\u95ed\u5305\uff0c\u5148\u7406\u89e3\u4f5c\u7528\u57df\u3002",source:"@site/docs/03-JS/05-closure.md",sourceDirName:"03-JS",slug:"/JS/closure",permalink:"/docs/JS/closure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-JS/05-closure.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"this",permalink:"/docs/JS/this"},next:{title:"object",permalink:"/docs/JS/object"}},u={},c=[{value:"\u95ed\u5305\u7684\u63cf\u8ff0",id:"\u95ed\u5305\u7684\u63cf\u8ff0",level:2},{value:"\u95ed\u5305\u7684\u5f62\u6210",id:"\u95ed\u5305\u7684\u5f62\u6210",level:2},{value:"\u9700\u6c42\u7684\u89d2\u5ea6\u770b\u95ed\u5305",id:"\u9700\u6c42\u7684\u89d2\u5ea6\u770b\u95ed\u5305",level:2},{value:"\u4f5c\u7528\u57df\u89d2\u5ea6\u770b\u95ed\u5305",id:"\u4f5c\u7528\u57df\u89d2\u5ea6\u770b\u95ed\u5305",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],i={toc:c};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u95ed\u5305"},"\u95ed\u5305"),(0,a.kt)("p",null,"\u95ed\u5305\u662f\u4f5c\u7528\u57df\u95ed\u5305\uff0c\u8981\u7406\u89e3\u95ed\u5305\uff0c\u5148\u7406\u89e3\u4f5c\u7528\u57df\u3002"),(0,a.kt)("h2",{id:"\u95ed\u5305\u7684\u63cf\u8ff0"},"\u95ed\u5305\u7684\u63cf\u8ff0"),(0,a.kt)("p",null,"\u5173\u4e8e\u95ed\u5305\uff0c\u6709\u5f88\u591a\u6bd4\u8f83\u5178\u578b\u7684\u63cf\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u4f60\u4e0d\u77e5\u9053\u7684 JS"),"\uff1a\u5f53\u51fd\u6570\u53ef\u4ee5\u8bb0\u4f4f\u5e76\u8bbf\u95ee\u6240\u5728\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\u65f6\uff0c\u5c31\u4ea7\u751f\u4e86\u95ed\u5305\uff0c\u5373\u4f7f\u51fd\u6570\u662f\u5728\u5f53\u524d\u8bcd\u6cd5\u4f5c\u7528\u57df\u4e4b\u5916\u6267\u884c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"JavaScript \u9ad8\u7ea7\u6559\u7a0b"),"\uff1a\u95ed\u5305\u6307\u7684\u662f\u90a3\u4e9b\u5f15\u7528\u4e86\u53e6\u4e00\u4e2a\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u53d8\u91cf\u7684\u51fd\u6570\uff0c\u901a\u5e38\u662f\u5728\u5d4c\u5957\u51fd\u6570\u4e2d\u5b9e\u73b0\u7684\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u53e6\u4e00\u79cd\u5f88\u666e\u904d\u7684\u63cf\u8ff0"),"\uff1a\u51fd\u6570 foo \u8fd4\u56de\u4e86\u4e00\u4e2a\u51fd\u6570 bar\uff0c\u5e76\u4e14\u51fd\u6570 bar \u4e2d\u4f7f\u7528\u4e86\u51fd\u6570 foo \u7684\u53d8\u91cf\uff0cbar \u51fd\u6570\u5c31\u53eb\u95ed\u5305\u3002\n\u4e0d\u80fd\u8bf4\u8fd9\u4e9b\u63cf\u8ff0\u4e0d\u6b63\u786e\uff0c\u90fd\u5f88\u6b63\u786e\uff0c\u4f46\u6211\u5374\u603b\u89c9\u5f97\u5dee\u70b9\u610f\u601d\uff0c\u6709\u4e9b\u8e4a\u8df7\u3002\u7167\u8fd9\u4e9b\u8bf4\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u600e\u6837\u600e\u6837....\u4ea7\u751f\u4e86\u95ed\u5305")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u95ed\u5305....\u662f\u51fd\u6570\uff0c\u662f\u51fd\u6570\uff0c\u51fd\u6570\uff0c\u6570..."))),(0,a.kt)("p",null,"\u7b2c 1 \u70b9\uff0c\u5f88\u660e\u663e\u53ea\u662f\u5728\u63cf\u8ff0\u95ed\u5305\u7684 \u5f62\uff0c\u53ea\u662f\u5728\u60f3\u65b9\u8bbe\u6cd5\u544a\u8bc9\u4f60\uff0c\u95ed\u5305\u957f\u4ec0\u4e48\u6837\u5b50\u3002\u7b2c 2 \u70b9\uff0c\u628a\u95ed\u5305\u8bf4\u6210\u662f\u67d0\u4e9b\u6761\u4ef6\u4e0b\u7684\u51fd\u6570\uff0c\u5bf9\u4e8e\u7406\u89e3\u5e76\u6ca1\u6709\u592a\u5927\u7684\u5e2e\u52a9\u3002"),(0,a.kt)("p",null,"\u8d70\u8fc7\u5343\u5c71\u4e07\u6c34\uff0c\u89c1\u79cd\u79cd\u63cf\u8ff0\uff0c\u6b64\u822c\u90a3\u822c\u89e3\u91ca\uff0c\u5bf9\u4e8e\u95ed\u5305\uff0c\u7ec8\u7a76\u9700\u8981\u81ea\u5df1\u53bb\u8865\u5168\u4ee5\u4e0a\u79cd\u79cd\u63cf\u8ff0\u4e2d\u6240\u5dee\u7684\u90a3\u70b9\u610f\u601d\u3002"),(0,a.kt)("h2",{id:"\u95ed\u5305\u7684\u5f62\u6210"},"\u95ed\u5305\u7684\u5f62\u6210"),(0,a.kt)("p",null,"\u95ed\u5305\u5178\u578b\u7684\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {\n  var a = 1;\n  function bar() {\n    console.log(a);\n  }\n\n  return bar;\n}\n\nvar baz = foo();\nbaz(); // 1\n")),(0,a.kt)("p",null,"\u6ee1\u8db3\u4e86\u4ee5\u4e0b\u4e09\u4e2a\u6761\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5d4c\u5957\u7684\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u51fd\u6570\u8bbf\u95ee\u4e86\u5916\u90e8\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u5b9a\u4e49\u7684\u51fd\u6570\u88ab\u8fd4\u56de\uff0c\u5728\u5176\u5b9a\u4e49\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\u4e4b\u5916\u8c03\u7528")),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u5e38\u8bf4\u7684"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7236\u51fd\u6570\u8fd4\u56de\u5b50\u51fd\u6570\uff0c\u5b50\u51fd\u6570\u5f15\u7528\u7236\u51fd\u6570\u4e2d\u7684\u53d8\u91cf\uff0c\u5b50\u51fd\u6570\u5728\u7236\u51fd\u6570\u4e4b\u5916\u8c03\u7528")),(0,a.kt)("p",null,"\u95ed\u5305\u957f\u8fd9\u4e2a\u6837\u5b50\uff0c\u5177\u5907\u4e86\u4ee5\u4e0b\u80fd\u529b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u72ec\u7acb\u7684\u7a7a\u95f4\u5b58\u50a8\u53d8\u91cf"),"\uff1a\u901a\u8fc7\u5916\u90e8\u51fd\u6570 foo\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a\u72ec\u7acb\u7684\u4f5c\u7528\u57df\u53bb\u5b58\u50a8\u53d8\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u63d0\u4f9b\u5916\u90e8\u4f7f\u7528\u8fd9\u4e9b\u53d8\u91cf\u7684\u65b9\u6cd5"),"\uff1a\u8fd4\u56de\u4e00\u4e2a bar \u51fd\u6570\uff0cbar \u5185\u90e8\u4f7f\u7528\u4e86\u8fd9\u4e9b\u53d8\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u53d8\u91cf\u7559\u5b58\u5728\u5185\u5b58\u4e2d"),"\uff1a\u5916\u90e8\u51fd\u6570\u6267\u884c\u5916\u4e4b\u540e\uff0c\u53d8\u91cf\u4ecd\u80fd\u591f\u5b58\u5728\uff0c\u8fd9\u6d89\u53ca\u5230\u5783\u573e\u56de\u6536\u7b56\u7565\uff0c\u88ab\u5f15\u7528\u7684\u53d8\u91cf\uff0c\u5c06\u7ee7\u7eed\u5b58\u5728\u800c\u4e0d\u88ab\u56de\u6536\u3002")),(0,a.kt)("p",null,"\u4ece\u80fd\u529b\u7684\u89d2\u5ea6\u770b\uff0c\u95ed\u5305\u5c31\u662f\u8fd9\u4e9b\u80fd\u529b\u7684\u4e00\u4e2a\u7ec4\u5408\u3002"),(0,a.kt)("h2",{id:"\u9700\u6c42\u7684\u89d2\u5ea6\u770b\u95ed\u5305"},"\u9700\u6c42\u7684\u89d2\u5ea6\u770b\u95ed\u5305"),(0,a.kt)("p",null,"\u505a\u4e00\u4ef6\u4e8b\uff0c\u5f53\u7136\u662f\u56e0\u4e3a\u8981\u6ee1\u8db3\u67d0\u4e2a\u9700\u6c42\u5566\u3002\u9996\u5148\u6765\u770b\u4e00\u4e2a\u9700\u6c42\uff0c\u5bf9\u4ee5\u4e0b\u6570\u7ec4\u6309\u7167 id \u5347\u5e8f\u6392\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [\n  { id: 2333, value: 22 name: 'mayueyue' },\n  { id: 666, value: 80, name: 'myy' },\n  { id: 888, value: 6, name: 'fengpeng' },\n]\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u5f88\u7b80\u5355\uff0c\u53ef\u4ee5\u4f7f\u7528 sort \u65b9\u6cd5\u63d0\u4f9b compareFunction \u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const sortByIdArr = arr.sort(function (a, b) {\n  const val1 = obj1["id"];\n  const val2 = obj2["id"];\n  if (val1 > val2) {\n    return 1;\n  } else if (val1 < val2) {\n    return -1;\n  } else {\n    return 0;\n  }\n});\n')),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u6837\u5199\u6cd5\u62d3\u5c55\u6027\u4e0d\u5f3a\uff0c\u5982\u679c\u53c8\u6709\u4e00\u4e2a\u9700\u6c42\u662f\u901a\u8fc7\u5176\u4ed6\u5c5e\u6027\u5982 value \u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\uff0c\u603b\u4e0d\u80fd\u62f7\u4e00\u4efd compareFunction \u53bb\u6539\u6539\u5427\uff0c\u90a3\u5c31\u592a\u96be\u770b\u4e86\u3002\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u5f15\u5165\u4e00\u4e2a\u201d\u6bd4\u8f83\u51fd\u6570\u7684\u751f\u6210\u51fd\u6570\u201c\u6765\u7075\u6d3b\u5730\u521b\u5efa compareFunction\uff0c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function createComparisonFunction(prop) {\n  return function (obj1, obj2) {\n    const val1 = obj1[prop];\n    const val2 = obj2[prop];\n    if (val1 > val2) {\n      return 1;\n    } else if (val1 < val2) {\n      return -1;\n    } else {\n      return 0;\n    }\n  };\n}\n\nconst idCompareFunction = createComparisonFunction("id");\nconst sortByIdArr = arr.sort(idCompareFunction);\n\nconst valueCompareFunction = createComparisonFunction("value");\nconst sortByValueArr = arr.sort(valueCompareFunction);\n')),(0,a.kt)("p",null,"\u8fd9\u7c7b createXXXFunction \u662f\u5f88\u5e38\u89c1\u7684\u5229\u7528\u95ed\u5305\u7684\u4f8b\u5b50\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\u9762\uff0c\u76f4\u63a5\u7684\u9700\u6c42\u662f\u8fdb\u884c\u6392\u5e8f\uff0c\u95ed\u5305\u662f\u4e00\u79cd\u5b9e\u73b0\u7684\u65b9\u6848\u3002\u6216\u8005\u4e5f\u53ef\u4ee5\u8bf4\uff0c\u95ed\u5305\u662f\u5b9e\u73b0\u7684\u4e00\u79cd\u95f4\u63a5\u7684\uff0c\u6df1\u5c42\u6b21\u7684\u9700\u6c42\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0ccreateComparisonFunction \u51fd\u6570\u4f5c\u7528\u57df\u91cc\u9762\u4fdd\u5b58\u4e86 prop\uff0c\u5728\u540e\u7eed\u6bd4\u8f83\u65f6\uff0c\u5c31\u76f8\u5f53\u4e8e\u63d0\u524d\u9884\u7f6e\u4e86\u8981\u6bd4\u8f83\u7684\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u4ece\u9700\u6c42\u7684\u89d2\u5ea6\u770b\uff0c\u95ed\u5305\u662f\u4e00\u79cd\u5b9e\u73b0\u65b9\u6848\uff0c\u5b83\u4f1a\u521b\u5efa\u72ec\u7acb\u7684\u7a7a\u95f4\uff0c\u6682\u65f6\u653e\u4e00\u4e9b\u4e1c\u897f\uff0c\u5e76\u63d0\u4f9b\u5bf9\u8fd9\u4e9b\u53d8\u91cf/\u5c5e\u6027\u7684\u64cd\u4f5c\u65b9\u6cd5\u3002\u95ed\u5305\u4f5c\u4e3a\u4e00\u79cd\u5b9e\u73b0\u65b9\u6848\uff0c\u5176\u5b9e\u5c31\u662f\u95ed\u5305\u7684 3 \u4e2a\u80fd\u529b\u7ec4\u5408\u7684\u5e94\u7528\u3002"),(0,a.kt)("h2",{id:"\u4f5c\u7528\u57df\u89d2\u5ea6\u770b\u95ed\u5305"},"\u4f5c\u7528\u57df\u89d2\u5ea6\u770b\u95ed\u5305"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u7406\u89e3\uff0c\u53ef\u4ee5\u7528\u4e00\u4e2a\u5bf9\u8c61\u63cf\u8ff0\u4f5c\u7528\u57df\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u6211\u4eec\u79f0\u4e3a\u4f5c\u7528\u57df\u5bf9\u8c61"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  // ...\n  [[outer]]: // parent scope reference\n}\n")),(0,a.kt)("p",null,"\u6bcf\u4e2a\u4f5c\u7528\u57df\u5bf9\u8c61\u4e2d\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"[[outer]]")," \u5c5e\u6027\uff0c\u7528\u4ee5\u6307\u5411\u7236\u7ea7\u4f5c\u7528\u57df\uff0c\u5f62\u6210\u4f5c\u7528\u57df\u94fe\u3002\u4ee5\u4e0b\u9762\u7684\u4f8b\u5b50\u6765\u8bf4"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Call Stack",src:n(6324).Z,width:"584",height:"293"})),(0,a.kt)("p",null,"\u4ece\u4f5c\u7528\u57df\u7684\u89d2\u5ea6\uff0c\u6211\u4eec\u5173\u5fc3\u7684\u662f\u53d8\u91cf\u67e5\u627e\u7684\u89c4\u5219\uff0c\u5bf9\u4e8e bar \u51fd\u6570\u4f5c\u7528\u57df\u800c\u8a00\uff0c\u5173\u5207\u7684\u662f\u901a\u8fc7 [","[outer]","] \u4fdd\u6301\u5bf9\u6240\u5728\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df(foo \u51fd\u6570\u4f5c\u7528\u57df)\u7684\u5f15\u7528\u3002\u6309\u7406\u8bf4\u5f15\u7528\u7684 foo \u51fd\u6570\u4f5c\u7528\u57df\u5bf9\u8c61\u5e94\u8be5\u50cf\u4e0b\u9762\u8fd9\u6837"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"foo: {\n  a;\n  b;\n  bar[[outer]];\n}\n")),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\u5374\u662f\u8fd9\u4e2a Closure (foo)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Closure(foo);\na: 1;\n")),(0,a.kt)("p",null,"Closure (foo) \u662f foo \u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u53d8\u91cf\u7684\u5b50\u96c6\uff0c\u800c\u4e0d\u662f\u6574\u4e2a foo \u51fd\u6570\u4f5c\u7528\u57df\u3002\u8fd9\u662f\u56e0\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"[","[outer]","]\u6240\u5f15\u7528\u7684\u5bf9\u8c61\uff0c\u548c \u201c\u5916\u90e8\u4f5c\u7528\u57df\u5bf9\u8c61\u201d \u4e24\u8005\u5e76\u4e0d\u4e00\u5b9a\u7b49\u4ef7"),"\u3002\u5f53 bar \u6267\u884c\u65f6\uff0cfoo \u51fd\u6570\u5df2\u7ecf\u6267\u884c\u5b8c\u6210\uff0c\u867d\u7136 bar \u8fd8\u9700\u8981 foo \u51fd\u6570\u4f5c\u7528\u57df\u5bf9\u8c61\u4e2d\u7684\u53d8\u91cf\uff0c\u4f46\u662f\u663e\u7136\u53ea\u662f\u9700\u8981\u4e00\u90e8\u5206\u3002Closure (foo) \u662f\u5c06\u6240\u9700\u8981\u7684\u90a3\u90e8\u5206\u53d8\u91cf\u8fdb\u884c\u62f7\u8d1d\uff0c\u800c\u90a3\u4e9b\u4e0d\u518d\u88ab\u5f15\u7528\u7684\u53d8\u91cf\u5c31\u53ef\u4ee5\u91ca\u653e\u4e86\u3002"),(0,a.kt)("admonition",{title:"s \u5c0f\u7ed3",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4ece\u4f5c\u7528\u57df\u7684\u89d2\u5ea6\uff0c\u95ed\u5305\u662f\u4f5c\u7528\u57df\u94fe\u4e0a\u7684\u4e00\u4e2a\u8282\u70b9\uff0c\u662f\u5185\u90e8\u51fd\u6570\u7684 [","[outer]","] \u6307\u5411\u7684\u4e00\u4e2a\u5bf9\u8c61\uff0c\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5916\u90e8\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\uff0c\u88ab\u5185\u90e8\u51fd\u6570\u5f15\u7528\u7684\u90a3\u90e8\u5206\u53d8\u91cf\u7684\u96c6\u5408\u3002"))),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u73b0\u5728\u95ed\u5305\u901a\u5e38\u662f\u6307 \u201d\u7236\u51fd\u6570\u8fd4\u56de\u5b50\u51fd\u6570\uff0c\u5b50\u51fd\u6570\u5f15\u7528\u7236\u51fd\u6570\u4e2d\u7684\u53d8\u91cf\uff0c\u5b50\u51fd\u6570\u5728\u7236\u51fd\u6570\u4e4b\u5916\u8c03\u7528\u201c \u8fd9\u6837\u7684\u4e00\u79cd\u60c5\u51b5\uff0c\u8fd9\u53ef\u8c13\u4e4b\u201d\u7ecf\u5178\u95ed\u5305\u201c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ece\u80fd\u529b\u89d2\u5ea6\uff1a"),"\u95ed\u5305\u662f 3 \u5927\u80fd\u529b\u7684\u7ec4\u5408\u3002\u50cf IIFE\uff0c\u4f5c\u4e3a namespace \u7684\u5bf9\u8c61\uff0c\u6a21\u5757\uff0c\u7b49\u5177\u5907\u7c7b\u4f3c\u4e8e\u7ecf\u5178\u95ed\u5305\u7684\u80fd\u529b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ece\u9700\u6c42\u89d2\u5ea6"),"\uff1a\u95ed\u5305\u662f\u4e00\u79cd\u5b9e\u73b0\u65b9\u6848\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ece\u4f5c\u7528\u57df\u89d2\u5ea6"),"\uff1a\u95ed\u5305\u662f\u5916\u90e8\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\uff0c\u88ab\u5185\u90e8\u51fd\u6570\u5f15\u7528\u7684\u90a3\u90e8\u5206\u53d8\u91cf\u7684\u96c6\u5408\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u7ecf\u5e38\u4f1a\u9047\u5230\u201cxxx \u662f\u4e0d\u662f\u95ed\u5305\uff1f\u201d\u8fd9\u6837\u7684\u95ee\u9898\uff0c\u901a\u5e38\u610f\u4e49\u6765\u8bf4\uff0c\u95ed\u5305\u7b49\u4e8e\u7ecf\u5178\u95ed\u5305\uff0c\u8981\u80fd\u529b\u548c\u5f62\u5f0f\u90fd\u4e00\u81f4\u624d\u884c\u3002"),(0,a.kt)("p",null,"\u91cd\u8981\u7684\u4e0d\u662f\u53bb\u5224\u65ad\u67d0\u6bb5\u4ee3\u7801\u201c\u662f\u4e0d\u662f\u95ed\u5305\u201d\uff0c\u91cd\u8981\u7684\u662f\u5177\u5907\u7684\u80fd\u529b\u4ee5\u53ca\u6ee1\u8db3\u4e86\u9700\u8981\u3002\u95ed\u5305\u662f\u4e00\u7ec4\u7279\u5b9a\u80fd\u529b\u7ec4\u5408\u7684\u79f0\u547c\uff0c\u901a\u8fc7\u8fd9\u4e2a\u80fd\u529b\u7ec4\u5408\uff0c\u4f5c\u4e3a\u4e00\u79cd\u7ecf\u5178\u7684\u89e3\u51b3\u65b9\u6848\u53bb\u5b9e\u73b0\u6211\u4eec\u7684\u9700\u6c42\u3002"))}s.isMDXComponent=!0},6324:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/call-stack-e3598f9cebca6c18689da1c27d398c92.jpg"}}]);