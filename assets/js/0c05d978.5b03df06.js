"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3188],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=c(r),s=a,k=d["".concat(i,".").concat(s)]||d[s]||m[s]||l;return r?n.createElement(k,o(o({ref:e},u),{},{components:r})):n.createElement(k,o({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:a,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3463:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={},o="ICMP",p={unversionedId:"network/protocol/icmp",id:"network/protocol/icmp",title:"ICMP",description:"ICMP \u56e0\u7279\u7f51\u6d88\u606f\u63a7\u5236\u534f\u8bae\uff0c\u5b83\u5c31\u50cf\u4e00\u4e2a\u4fa6\u5bdf\u5175\uff0c\u5feb\u901f\u4fa6\u5bdf\uff0c\u5411\u6e90\u4e3b\u673a\u53cd\u9988\u60c5\u51b5\uff0c\u4ee5\u4fbf\u6e90\u4e3b\u673a\u51b3\u7b56\u3002",source:"@site/docs/51-network/01-protocol/30-icmp.md",sourceDirName:"51-network/01-protocol",slug:"/network/protocol/icmp",permalink:"/docs/network/protocol/icmp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/51-network/01-protocol/30-icmp.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TCP",permalink:"/docs/network/protocol/tcp"},next:{title:"CDN",permalink:"/docs/network/cdn"}},i={},c=[{value:"\u62a5\u6587\u683c\u5f0f",id:"\u62a5\u6587\u683c\u5f0f",level:2},{value:"\u67e5\u8be2\u62a5\u6587",id:"\u67e5\u8be2\u62a5\u6587",level:2},{value:"\u5dee\u9519\u62a5\u6587",id:"\u5dee\u9519\u62a5\u6587",level:2},{value:"traceroute",id:"traceroute",level:2}],u=(d="MyImg",function(t){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)});var d;const m={toc:c},s="wrapper";function k(t){let{components:e,...l}=t;return(0,a.kt)(s,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"icmp"},"ICMP"),(0,a.kt)("p",null,"ICMP \u56e0\u7279\u7f51\u6d88\u606f\u63a7\u5236\u534f\u8bae\uff0c\u5b83\u5c31\u50cf\u4e00\u4e2a\u4fa6\u5bdf\u5175\uff0c\u5feb\u901f\u4fa6\u5bdf\uff0c\u5411\u6e90\u4e3b\u673a\u53cd\u9988\u60c5\u51b5\uff0c\u4ee5\u4fbf\u6e90\u4e3b\u673a\u51b3\u7b56\u3002"),(0,a.kt)("p",null,"\u4e00\u822c\u5206\u4e3a \u67e5\u8be2\u62a5\u6587 \u548c \u5dee\u9519\u62a5\u6587\uff0c\u67e5\u8be2\u62a5\u6587\u5c31\u662f\u7b80\u5355\u770b\u4e00\u4e0b\u80fd\u4e0d\u80fd\u901a\uff0c\u5dee\u9519\u62a5\u6587\u662f\u7528\u6765\u62a5\u544a\u53d1\u751f\u4e86\u600e\u6837\u7684\u9519\u8bef\u3002"),(0,a.kt)("mermaid",{value:"  flowchart LR\n  ICMP --\x3e \u67e5\u8be2\u62a5\u6587 --\u5e94\u7528--\x3e ping\n  ICMP --\x3e \u5dee\u9519\u62a5\u6587 --\u5e94\u7528--\x3e traceroute"}),(0,a.kt)("h2",{id:"\u62a5\u6587\u683c\u5f0f"},"\u62a5\u6587\u683c\u5f0f"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ping")," \u53d1\u9001 ICMP \u62a5\u6587\u7684\u6293\u5305\u7ed3\u679c\u5982\u4e0b"),(0,a.kt)(u,{src:r(9514),width:"600px",mdxType:"MyImg"}),(0,a.kt)("p",null,"type \u548c code \u4e24\u4e2a\u5b57\u6bb5\u662f\u6700\u91cd\u8981\u7684\u6807\u8bb0"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"code"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u542b\u4e49\u6982\u62ec")))),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\u6765\u8bf4\u660e\uff0c\u4e00\u822c\u63a5\u53e3\u8fd4\u56de\u503c\u7c7b\u4f3c\u8fd9\u6837\u7684\u683c\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  code: 200,\n  message: "",\n  data: {}\n}\n')),(0,a.kt)("p",null,"type \u5c31\u50cf\u7f51\u7edc\u5c42\u9762\u7684 HTTP Code\uff0c\u800c code \u5c31\u662f\u4e1a\u52a1\u5c42\u9762\u7684\u9519\u8bef\u4fe1\u606f\u6807\u8bb0\u3002"),(0,a.kt)("h2",{id:"\u67e5\u8be2\u62a5\u6587"},"\u67e5\u8be2\u62a5\u6587"),(0,a.kt)("p",null,"\u67e5\u8be2\u62a5\u6587\u4e3b\u52a8\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u671f\u671b\u83b7\u5f97\u4e00\u4e2a\u7b54\u590d\u3002\n\u53d1\u9001\u67e5\u8be2\u62a5\u6587\u6700\u5e38\u7528\u7684\u5de5\u5177\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ping"),"\uff0c\u5b83\u7528\u6765\u63a2\u6d4b\u4e3b\u673a\u662f\u5426\u53ef\u8fbe\uff0c\u8ba1\u7b97\u5f80\u8fd4\u65f6\u95f4\u7b49\u3002\n\u4e00\u822c\u7528\u6765\u8bd5\u4e00\u4e0b\u7f51\u7edc\u662f\u4e0d\u662f\u901a\u7684\uff0c\u8fd9\u662f\u5e73\u65f6\u4f7f\u7528\u767e\u5ea6\u641c\u7d22\u6700\u9891\u7e41\u7684\u573a\u666f \ud83e\udd37\u200d\u2642\ufe0f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u62a5\u6587\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"code"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ping request"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ping reply"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"0")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ping baidu.com -c 2\n")),(0,a.kt)("h2",{id:"\u5dee\u9519\u62a5\u6587"},"\u5dee\u9519\u62a5\u6587"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"\u62a5\u6587\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec8\u70b9\u4e0d\u53ef\u8fbe\u4e3a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6e90\u6291\u5236")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"\u91cd\u5b9a\u5411")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6")))),(0,a.kt)("p",null,"\u5f53\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\uff0c\u5411\u6e90\u4e3b\u673a\u53d1\u751f\u4e00\u4e2a\u5dee\u9519\u62a5\u6587\uff0c\u544a\u8bc9\u6e90\u4e3b\u673a\u53d1\u751f\u4e86\u4ec0\u4e48\u95ee\u9898\u3002"),(0,a.kt)(u,{src:r(6925),width:"600px",mdxType:"MyImg"}),(0,a.kt)("h2",{id:"traceroute"},"traceroute"),(0,a.kt)("p",null,"traceroute \u4f7f\u7528 UDP \u534f\u8bae\uff0c\u6307\u5b9a\u4e00\u4e2a\u4e0d\u53ef\u8fbe\u7aef\u53e3\uff0c\u6bcf\u6b21\u4f9d\u6b21\u53d1\u9001\u7684\u62a5\u6587 TTL \u4ece 1 \u9012\u589e\uff0c\u94fe\u8def\u4e0a\u5404\u4e2a\u8def\u7531\u5668\u7531\u4e8e TTL \u8d85\u65f6\uff0c\u8fd4\u56de\u4e00\u4e2a ICMP \u6d88\u606f\u901a\u77e5\u6e90\u4e3b\u673a"),(0,a.kt)(u,{src:r(1112),width:"600px",mdxType:"MyImg"}))}k.isMDXComponent=!0},9514:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n=r.p+"assets/images/2023-02-20-16-17-23-079572e4730593d2e8cf44d34a31e516.png"},6925:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n=r.p+"assets/images/2023-02-22-17-39-58-fce7a687987cf80a6ab86eeed9dfc127.png"},1112:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n=r.p+"assets/images/traceroute-bd6e295b9bf64eb6b5730460524be459.jpg"}}]);