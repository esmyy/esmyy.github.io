"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},i="TCP",o={unversionedId:"network/protocol/tcp",id:"network/protocol/tcp",title:"TCP",description:"\u8bf4\u5230 TCP\uff0c\u90a3\u5185\u5bb9\u5c31\u592a\u591a\u4e86\uff0c\u7b80\u5355\u634b\u4e00\u4e0b\u8fde\u63a5\u548c\u65ad\u5f00\u7b49\u5185\u5bb9\u3002",source:"@site/docs/51-network/01-protocol/20-tcp.md",sourceDirName:"51-network/01-protocol",slug:"/network/protocol/tcp",permalink:"/docs/network/protocol/tcp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/51-network/01-protocol/20-tcp.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP",permalink:"/docs/network/protocol/http"},next:{title:"ICMP",permalink:"/docs/network/protocol/icmp"}},p={},c=[{value:"\u62a5\u6587\u683c\u5f0f",id:"\u62a5\u6587\u683c\u5f0f",level:2},{value:"\u5efa\u7acb\u8fde\u63a5",id:"\u5efa\u7acb\u8fde\u63a5",level:2},{value:"ISN",id:"isn",level:3},{value:"ACK \u4e0e ack",id:"ack-\u4e0e-ack",level:3},{value:"\u4e3a\u4ec0\u4e48\u662f\u4e09\u6b21\u63e1\u624b",id:"\u4e3a\u4ec0\u4e48\u662f\u4e09\u6b21\u63e1\u624b",level:3},{value:"\u65ad\u5f00\u8fde\u63a5",id:"\u65ad\u5f00\u8fde\u63a5",level:2},{value:"\u53ef\u9760\u4f20\u8f93",id:"\u53ef\u9760\u4f20\u8f93",level:2},{value:"\u62e5\u585e\u63a7\u5236",id:"\u62e5\u585e\u63a7\u5236",level:2},{value:"\u961f\u5934\u963b\u585e\u95ee\u9898",id:"\u961f\u5934\u963b\u585e\u95ee\u9898",level:2},{value:"Q &amp; A",id:"q--a",level:2}],u=(s="MyImg",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var s;const d={toc:c},k="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(k,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tcp"},"TCP"),(0,a.kt)("p",null,"\u8bf4\u5230 TCP\uff0c\u90a3\u5185\u5bb9\u5c31\u592a\u591a\u4e86\uff0c\u7b80\u5355\u634b\u4e00\u4e0b\u8fde\u63a5\u548c\u65ad\u5f00\u7b49\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u62a5\u6587\u683c\u5f0f"},"\u62a5\u6587\u683c\u5f0f"),(0,a.kt)(u,{src:n(2207),width:"600px",mdxType:"MyImg"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3\u53f7"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7a0b\u5e8f\u7684\u6807\u8bc6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5e8f\u53f7"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u7684\u6570\u636e\u7684\u8d77\u59cb\u5b57\u8282\u5e8f\u53f7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u786e\u8ba4\u53f7"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7\u7684\u6570\u636e\u7684\u8d77\u59cb\u5b57\u8282\u53f7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6 bits \u6807\u8bb0\u5b57\u6bb5"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP \u62a5\u6587\u7684\u5206\u7c7b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7a97\u53e3\u5b57\u6bb5"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6d41\u91cf\u63a7\u5236")))),(0,a.kt)("h2",{id:"\u5efa\u7acb\u8fde\u63a5"},"\u5efa\u7acb\u8fde\u63a5"),(0,a.kt)("p",null,"TCP \u7684\u8fde\u63a5\uff0c\u4e5f\u5c31\u662f\u5e38\u8bf4\u7684\u4e09\u6b21\u63e1\u624b\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,"\u8fde\u63a5\u662f\u4e24\u4e2a\u901a\u4fe1\u7aef\u7cfb\u7edf\u7684 TCP \u7a0b\u5e8f\u4e2d\u4e4b\u95f4\u5efa\u7acb\u7684\u5173\u7cfb\uff0c\u5bf9\u4e8e\u4e2d\u95f4\u94fe\u8def\u6765\u8bf4\uff0c\u662f\u6ca1\u6709\u8fde\u63a5\u8fd9\u4ef6\u4e8b\u7684\uff0c\u8fd9\u4e5f\u662f\u5e38\u8bf4\u7684 TCP ",(0,a.kt)("strong",{parentName:"p"},"\u70b9\u5bf9\u70b9\u7684\u8fde\u63a5"),"\u3002"),(0,a.kt)("mermaid",{value:"  sequenceDiagram\n    participant Client\n    participant Server\n    Client->>Server: SYN=1, seq=client_isn\n    Server->>Client: SYN=1, ACK=1, seq=server_isn, ack=client_isn+1\n    Client->>Server: SYN=0, ACK=1, seq=client_isn+1, ack=server_isn+1"}),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u62a5\u6587\u79f0\u4f5c SYN \u62a5\u6587\uff0c\u7b2c\u4e8c\u4e2a\u62a5\u6587\u79f0\u4f5c SYNACK \u62a5\u6587\uff0c\u8fd9\u4e24\u4e2a\u62a5\u6587\u90fd\u662f\u6bd4\u8f83\u7279\u6b8a\u7684\u3002\u7ecf\u8fc7\u524d\u9762\u7684\u786e\u8ba4\uff0c\u7b2c 3 \u4e2a\u62a5\u6587\u5df2\u7ecf\u5927\u6982\u7387\u4f1a\u8fbe\u6210\u5408\u79df\uff0c\u5df2\u7ecf\u53ef\u4ee5\u987a\u4fbf\u643a\u5e26\u90e8\u5206\u6570\u636e\u53bb\u51c6\u5907\u5f00\u59cb\u6b63\u5f0f\u5408\u4f5c\u4e86\u3002"),(0,a.kt)("h3",{id:"isn"},"ISN"),(0,a.kt)("p",null,"\u4e09\u6b21\u63e1\u624b\u9664\u4e86\u5efa\u7acb\u8fde\u63a5\uff0c\u8fd8\u6709\u4e00\u4e2a\u6838\u5fc3\u7684\u4f5c\u7528\u662f\u540c\u6b65\u521d\u59cb\u5316\u5e8f\u5217\u53f7(ISN\uff0cInitial Sequence Number)\uff0c\u8fd9\u662f\u540e\u7eed\u53cc\u65b9\u6109\u5feb\u5730\u5408\u4f5c\u7684\u57fa\u7840\u3002"),(0,a.kt)("p",null,"\u6570\u636e\u6d41\u4e4b\u95f4\u662f\u6709\u987a\u5e8f\u7684\uff0c\u8fd9\u4e2a\u6bcb\u5eb8\u7f6e\u7591\uff0c\u5f53\u6211\u4eec\u8bf4 ISN \u7684\u65f6\u5019\uff0c\u4e0d\u662f\u8bf4\u7684\u5b83\u6709\u6ca1\u6709\u5fc5\u8981\uff0c\u800c\u662f\u5b83\u4e3a\u4ec0\u4e48\u4e0d\u662f\u4e00\u4e2a\u786e\u5b9a\u7684\u503c\uff0c\u6bd4\u5982\u8bf4\u6bcf\u6b21\u90fd\u4ece 1 \u5f00\u59cb\uff1f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b80\u5355\u6765\u8bf4\uff0c\u662f\u4e3a\u4e86\u5728\u4e0d\u540c\u7684\u8fde\u63a5\u91cc\u9762\u6570\u636e\u4e0d\u8981\u4e32\u4e86\u3002")),(0,a.kt)(u,{src:n(3581),width:"500px",mdxType:"MyImg"}),(0,a.kt)("p",null,"TCP \u4e0a\u9762\u662f\u5e94\u7528\u5c42\uff0c\u6216\u8005\u8bf4\u662f\u7a0b\u5e8f\uff0c\u7a0b\u5e8f\u901a\u8fc7\u7aef\u53e3\u53f7\u6765\u6807\u8bc6\uff0c\u901a\u8fc7\u5957\u63a5\u5b57\u4e0e TCP \u7a0b\u5e8f\u4ea4\u4e92\u3002\u5982\u679c\u6bcf\u6b21 TCP \u8fde\u63a5\u90fd\u4ece 1 \u5f00\u59cb\uff0c\u90a3\u4e48\u5047\u5982\u524d\u9762\u4e00\u4e2a\u8fde\u63a5\u53d1\u51fa 1,2,3\uff0c\u800c\u5ba2\u6237\u7aef\u53c8\u56e0\u4e3a\u67d0\u4e9b\u539f\u56e0\u65ad\u5f00\u4e86\u8fde\u63a5\uff0c\u518d\u6b21\u8fde\u63a5\u65f6\u53c8\u53d1\u51fa\u4e86 1,2,3\u3002"),(0,a.kt)("p",null,"\u540c\u4e00\u4e2a\u7a0b\u5e8f\u5f88\u53ef\u80fd\u4f7f\u7528\u540c\u6837\u7684\u7aef\u53e3\uff0c\u800c\u4e0d\u540c\u7684\u7a0b\u5e8f\u4e5f\u53ef\u80fd\u4f7f\u7528\u540c\u6837\u7684\u7aef\u53e3\uff0c\u8fd9\u4e24\u6b21\u53d1\u9001\u7684\u540c\u4e00\u4e2a\u7f16\u53f7\u7684\u6570\u636e\u662f\u65e0\u6cd5\u786e\u5b9a\u8c01\u5148\u5230\u7684\uff0c\u7aef\u53e3\u53c8\u90fd\u4e00\u6837\uff0c\u5206\u4e0d\u6e05\u8c01\u5c5e\u4e8e\u54ea\u4e2a\u8fde\u63a5\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1 ISN \u7684\u552f\u4e00\u6027\uff0cSYN \u4e00\u822c\u662f\u4e0e\u65f6\u95f4\u76f8\u5173\u7684\u4e00\u4e2a\u8ba1\u6570\u503c\uff0c\u5177\u4f53\u7b97\u6cd5\u4e0d\u540c\u7684 OS \u6709\u4e0d\u540c\u7684\u5b9e\u73b0\uff0c\u53ea\u8981\u786e\u4fdd\u552f\u4e00\u6027\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"ack-\u4e0e-ack"},"ACK \u4e0e ack"),(0,a.kt)("p",null,"\u4e00\u822c ACK \u6307\u7684\u662f\u6807\u8bb0\u4f4d\u4e2d 1 \u6bd4\u7279\u7684 ACK\uff0c\u800c ack \u662f 32 \u4f4d\u7684\u786e\u8ba4\u53f7\uff0c\u8fd9\u4e24\u4e2a\u5728\u8fde\u63a5\u8fc7\u7a0b\u4e2d\u90fd\u662f\u91cd\u8981\u7684\u3002"),(0,a.kt)(u,{src:n(5042),width:"600px",mdxType:"MyImg"}),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u662f\u4e09\u6b21\u63e1\u624b"},"\u4e3a\u4ec0\u4e48\u662f\u4e09\u6b21\u63e1\u624b"),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48\u662f 3 \u6b21\u63e1\u624b\uff0c\u4e0d\u662f 2 \u6b21\uff0c\u4e0d\u662f 4 \u6b21\uff1f100 \u6b21\u90fd\u53ef\u4ee5\uff0c\u4f46\u662f 3 \u6b21\u662f\u8f83\u4e3a\u5408\u9002\u7684\u3002"),(0,a.kt)("p",null,"\u7ecf\u8fc7 3 \u6b21\u63e1\u624b\uff0c\u53cc\u65b9\u90fd\u7ecf\u8fc7\u4e86\u4e00\u6b21\u53d1\u9001\u4e00\u6b21\u63a5\u6536\uff0c\u5efa\u7acb\u4e86\u521d\u6b65\u7684\u4fe1\u4efb\uff0c\u800c\u4e14\u7b2c 3 \u6b21\u5ba2\u6237\u7aef\u5c31\u53ef\u4ee5\u643a\u5e26\u6570\u636e\u4e86\u3002\u5f53\u7136\uff0c\u6bcf\u4e00\u6b65\u90fd\u53ef\u80fd\u4f1a\u4e22\u4e86\uff0c\u4f46\u6ca1\u5173\u7cfb\uff0c\u53cc\u65b9\u90fd\u6709\u9884\u671f\uff0c\u4e2d\u95f4\u4e22\u4e86\u5c31\u4e0d\u4f1a\u6536\u5230\u56de\u590d\uff0c\u6ca1\u4e22\u4f1a\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u6536\u5230\u56de\u590d\uff0c\u7740\u6025\u7684\u81ea\u5df1\u518d\u95ee\u95ee\u3002\u8fde\u63a5\u8fc7\u7a0b\u4e2d\u7684\u72b6\u6001\u53d8\u5316\u5982\u4e0b"),(0,a.kt)(u,{src:n(3233),width:"600px",mdxType:"MyImg"}),(0,a.kt)("p",null,"\u53ea\u6709\u8fbe\u5230\u4e00\u53d1\u4e00\u6536\u7684\u72b6\u6001\uff0c\u53cc\u65b9\u624d\u505a\u7f6e\u529e\u7684\u51c6\u5907\uff0c\u4e5f\u5c31\u662f\u5230\u8fbe ESTABLISHED \u7684\u72b6\u6001\uff0c\u6b63\u5f0f\u5206\u914d\u8d44\u6e90\uff0c\u7f6e\u529e\u4e1c\u897f\u51c6\u5907\u62db\u5f85\u5bf9\u65b9\u3002"),(0,a.kt)("h2",{id:"\u65ad\u5f00\u8fde\u63a5"},"\u65ad\u5f00\u8fde\u63a5"),(0,a.kt)("p",null,"\u65ad\u5f00\u8fde\u63a5\u7684\u8fc7\u7a0b\uff0c\u5c31\u662f\u5e38\u8bf4\u7684\u56db\u6b21\u6325\u624b\u7684\u8fc7\u7a0b\u3002\u7b80\u5355\u6765\u7406\u89e3\uff0c\u4e4b\u6240\u4ee5\u662f 4 \u6b21\u6325\u624b\uff0c\u662f\u56e0\u4e3a TCP \u662f\u5168\u53cc\u5de5\u901a\u4fe1\uff0c\u5ba2\u6237\u7aef\u8bf4\u8981\u65ad\u5f00\u8fde\u63a5\u4e86\uff0c\u670d\u52a1\u7aef\u4e0d\u4e00\u5b9a\u80fd\u7acb\u5373\u65ad\u5f00\uff0c\u5408\u4f5c\u662f\u76f8\u4e92\u7684\uff0c\u4e0d\u662f\u53ea\u6709\u4e00\u65b9\u6709\u8bc9\u6c42\u3002\u65ad\u5f00\u8fde\u63a5\u7684\u72b6\u6001\u56fe\u5982\u4e0b"),(0,a.kt)(u,{src:n(1159),width:"600px",mdxType:"MyImg"}),(0,a.kt)("p",null,"\u5047\u8bbe\u5de6\u4fa7\u662f A\uff0c\u53f3\u4fa7\u662f B\u3002\u5176\u5b9e\u5c31\u662f\u7531\u4e8e\u5168\u53cc\u5de5\uff0c\u90fd\u53ef\u80fd\u72ec\u7acb\u5730\u7ed9\u5bf9\u65b9\u53d1\u6d88\u606f\uff0c\u9700\u8981\u5bf9\u4e24\u6761\u6570\u636e\u901a\u9053\u5206\u522b\u505a\u4e00\u6b21\u6765\u56de\u7684\u786e\u8ba4\u3002\n\u6362\u6210\u901a\u4fd7\u7684\u5bf9\u8bdd\u5f62\u5f0f\u4e5f\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837"),(0,a.kt)("mermaid",{value:"  sequenceDiagram\n    participant Client\n    participant Server\n    Client->>Server: \u6211\u6ca1\u6709\u6570\u636e\u8981\u7ed9\u4f60\u4e86\uff0c\u4f60\u4e5f\u51c6\u5907\u51c6\u5907\u65ad\u5f00\u5427\n    Server->>Client: \u6536\u5230\uff0c\u6211\u8fd9\u8fb9\u4e0d\u518d\u4e3a\u4f60\u9884\u7559\u7a7a\u95f4\u63a5\u6536\u4f60\u7684\u6570\u636e\uff0c\u6211\u8fd9\u8fb9\u7684\u4e5f\u6b63\u5728\u6536\u5c3e\n    Server->>Client: \u6211\u4e5f\u5904\u7406\u597d\u4e86\uff0c\u4e5f\u6ca1\u4e1c\u897f\u8981\u7ed9\u4f60\u4e86\n    Client->>Server: \u597d\u7684\uff0c\u4e0b\u6b21\u518d\u5408\u4f5c\uff0c\u90a3\u5c31\u518d\u89c1\u4e86\uff01"}),(0,a.kt)("p",null,"\u9488\u5bf9\u6b65\u9aa4 2\uff0c3\uff0c\u4ece\u65ad\u5f00\u8981\u505a\u7684\u4e8b\u60c5\u4e0a\u53bb\u7406\u89e3\uff0c\u53ef\u4ee5\u77e5\u9053"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 \u548c 3 \u4e0d\u4e00\u5b9a\u8fde\u7eed\u7684\uff0c\u4e2d\u95f4\u8fd8\u53ef\u80fd\u6709\u5176\u4ed6\u64cd\u4f5c\uff0c\u6bd4\u5982 B \u6d88\u606f\u6ca1\u53d1\u5b8c\uff0c\u53ef\u80fd\u8fd8\u662f\u4f1a\u7ed9 A \u53d1\u6d88\u606f"),(0,a.kt)("li",{parentName:"ul"},"2 \u548c 3 \u751a\u81f3\u53ef\u4ee5\u5408\u5e76\uff0c\u8fd9\u8fb9\u63d0\u4e86\u5206\u624b\u90a3\u8fb9\u521a\u597d\u4e5f\u51c6\u5907\u597d\u63d0\u5206\u624b")),(0,a.kt)("p",null,"A \u4e0d\u80fd\u76f4\u63a5\u8dd1\u8def\uff0c\u53ea\u80fd\u4e00\u6b65\u4e00\u6b65\u6765\uff0c\u4e0d\u7136 B \u7684\u90e8\u5206\u6570\u636e\u53ef\u80fd\u5c31\u4e22\u4e86\uff0c\u6240\u4ee5\u8981\u5728\u4fdd\u7559\u63a5\u6536\u80fd\u529b\u7684\u60c5\u51b5\u4e0b\uff0c\u542f\u52a8\u5173\u95ed\u6d41\u7a0b\u3002"),(0,a.kt)("p",null,"\u5728 B \u53d1\u9001 FIN \u4e4b\u540e\uff0cB \u8fdb\u5165\u5230 LAST_ACK \u72b6\u6001\uff0c\u8868\u793a\u671f\u5f85\u6536\u5230\u4e00\u4e2a\u786e\u8ba4\uff0c\u800c A \u6536\u5230\u540e\uff0c\u4f1a\u53d1\u9001\u4e00\u4e2a\u786e\u8ba4\uff0c\u8fdb\u5165 TIME_WAIT(2 MSL\uff0cMaximum Segment Lifetime\uff0c\u62a5\u6587\u6700\u5927\u751f\u5b58\u65f6\u95f4) \u72b6\u6001\u3002B \u5728\u671f\u5f85\u4e00\u4e2a ACK\uff0c\u5982\u679c\u6ca1\u6709\u6536\u5230\u5b83\u4f1a\u91cd\u53d1\uff0c\u56e0\u800c A \u7b49\u5f85 2MSL \u7684\u65f6\u95f4\uff0c\u6700\u540e\u6ca1\u518d\u6536\u5230 B \u7684\u7ed3\u675f\u901a\u77e5\uff0c\u5c31\u5173\u95ed\u4e86\u3002"),(0,a.kt)("h2",{id:"\u53ef\u9760\u4f20\u8f93"},"\u53ef\u9760\u4f20\u8f93"),(0,a.kt)("h2",{id:"\u62e5\u585e\u63a7\u5236"},"\u62e5\u585e\u63a7\u5236"),(0,a.kt)("h2",{id:"\u961f\u5934\u963b\u585e\u95ee\u9898"},"\u961f\u5934\u963b\u585e\u95ee\u9898"),(0,a.kt)("h2",{id:"q--a"},"Q & A"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u4e3a\u4ec0\u4e48\u662f3\u6b21\u63e1\u624b\uff0c\u4e0d\u662f2\u6b21\uff0c\u4e0d\u662f4\u6b21"),(0,a.kt)("div",null,"100\u6b21\u90fd\u53ef\u4ee5\uff0c\u4f46\u662f3\u6b21\u662f\u8f83\u4e3a\u5408\u9002\u7684\u3002\u7ecf\u8fc73\u6b21\u63e1\u624b\uff0c\u53cc\u65b9\u90fd\u7ecf\u8fc7\u4e86\u4e00\u6b21\u53d1\u9001\u4e00\u6b21\u63a5\u6536\uff0c\u5efa\u7acb\u4e86\u521d\u6b65\u7684\u4fe1\u4efb\uff0c\u800c\u4e14\u7b2c3\u6b21\u5ba2\u6237\u7aef\u5c31\u53ef\u4ee5\u643a\u5e26\u6570\u636e\u4e86\u3002\u5f53\u7136\uff0c\u6bcf\u4e00\u6b65\u90fd\u53ef\u80fd\u4f1a\u4e22\u4e86\uff0c\u4f46\u6ca1\u5173\u7cfb\uff0c\u53cc\u65b9\u90fd\u6709\u9884\u671f\uff0c\u4e2d\u95f4\u4e22\u4e86\u5c31\u4e0d\u4f1a\u6536\u5230\u56de\u590d\uff0c\u6ca1\u4e22\u4f1a\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u6536\u5230\u56de\u590d\uff0c\u7740\u6025\u7684\u81ea\u5df1\u518d\u95ee\u95ee\u3002\u53ea\u6709\u8fbe\u5230\u4e00\u53d1\u4e00\u6536\u7684\u72b6\u6001\uff0c\u53cc\u65b9\u624d\u505a\u7f6e\u529e\u7684\u51c6\u5907\uff0c\u5206\u914d\u8d44\u6e90\uff0c\u7f6e\u529e\u4e1c\u897f\u51c6\u5907\u62db\u5f85\u5bf9\u65b9\u3002")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"TCP \u7684\u5168\u53cc\u5de5\uff0c\u5728\u4e09\u6b21\u63e1\u624b\u91cc\u9762\u5982\u4f55\u4f53\u73b0\u7684"),(0,a.kt)("div",null)))}m.isMDXComponent=!0},5042:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/2023-03-06-16-08-35-061db70e1ea058807bd087e1c947a377.png"},3581:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/2023-03-06-23-07-44-c656031ee8e6cacf6ff06a6b1762e9b9.png"},2207:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/2023-03-06-23-37-22-14171b031f8bf565f99f7185a752d4ec.png"},3233:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/handshake-status-1-62c5590c90e3b0fa83d8a90bf91a0f06.jpg"},1159:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/tcp-close-a38b3b9b7ab9fded5d9799e485427ef2.jpg"}}]);