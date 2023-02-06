"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},l="ICMP",i={unversionedId:"network/icmp",id:"network/icmp",title:"ICMP",description:"ICMP \u5168\u79f0 Internet Control Message Protocol\uff0c\u5173\u952e\u5728\u4e8e Message\uff0c\u6839\u636e\u5f97\u5230\u7684\u6d88\u606f\u505a\u76f8\u5e94\u7684\u5904\u7406\uff0c\u8fd9\u4e2a\u6d88\u606f\u6709\u4e3b\u52a8\u83b7\u53d6\u7684\uff0c\u6709\u88ab\u52a8\u63a5\u6536\u7684\u3002",source:"@site/docs/51-network/04-icmp.md",sourceDirName:"51-network",slug:"/network/icmp",permalink:"/docs/network/icmp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/51-network/04-icmp.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DHCP",permalink:"/docs/network/dhcp"},next:{title:"HTTP",permalink:"/docs/network/http"}},p={},c=[{value:"\u62a5\u6587\u683c\u5f0f",id:"\u62a5\u6587\u683c\u5f0f",level:2},{value:"ping",id:"ping",level:3},{value:"traceroute",id:"traceroute",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"Q &amp; A",id:"q--a",level:2},{value:"ICMP \u662f\u54ea\u5c42\u7684\u534f\u8bae",id:"icmp-\u662f\u54ea\u5c42\u7684\u534f\u8bae",level:3}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"icmp"},"ICMP"),(0,o.kt)("p",null,"ICMP \u5168\u79f0 Internet Control Message Protocol\uff0c\u5173\u952e\u5728\u4e8e Message\uff0c\u6839\u636e\u5f97\u5230\u7684\u6d88\u606f\u505a\u76f8\u5e94\u7684\u5904\u7406\uff0c\u8fd9\u4e2a\u6d88\u606f\u6709\u4e3b\u52a8\u83b7\u53d6\u7684\uff0c\u6709\u88ab\u52a8\u63a5\u6536\u7684\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 ICMP \u7684\u5de5\u5177 ping, traceroute \u7b49"),(0,o.kt)("h2",{id:"\u62a5\u6587\u683c\u5f0f"},"\u62a5\u6587\u683c\u5f0f"),(0,o.kt)("p",null,"\u4f7f\u7528 ping \u53d1\u9001 ICMP \u62a5\u6587\u7684\u6293\u5305\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ICMP \u6293\u5305",src:r(2132).Z,width:"2746",height:"1215"})," ICMP \u62a5\u6587\u4e2d\uff0c\u9700\u8981\u7a0d\u5fae\u5173\u6ce8\u7684\u5b57\u6bb5(\u8a00\u4e0b\u4e4b\u610f\u5c31\u662f\u4e0d\u9700\u8981\u8bb0...\u8bb0\u4e0d\u4f4f)\u7684\u662f type \u548c code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type\uff1a\u6d88\u606f\u7c7b\u578b\uff0c\u6bd4\u5982\u56de\u663e(echo) \u8bf7\u6c42\uff0c\u56de\u663e\u8bf7\u6c42\u7684\u5e94\u7b54\uff0cping \u8bf7\u6c42\u662f 8\uff0cping \u7684\u54cd\u5e94\u662f 0\uff0c\u4e0d\u53ef\u8fbe\u6d88\u606f\u662f 3\u3002 \u6d88\u606f\u542b\u4e49\u7684\u6982\u62ec"),(0,o.kt)("li",{parentName:"ul"},"code\uff1a\u6982\u62ec\u6d88\u606f\u542b\u4e49 \u5178\u578b\u7684\u662f type \u4e3a 3 \u7684\u60c5\u51b5\u8868\u793a\u4e0d\u53ef\u8fbe\uff0c\u800c code \u8fdb\u4e00\u6b65\u8868\u793a\u4e86\u662f\u4ec0\u4e48\u4e0d\u53ef\u8fbe\uff0c\u662f\u534f\u8bae(code 2)\uff0c\u8fd8\u662f\u7aef\u53e3(code 3)\u3002\n\u4ece\u622a\u56fe\u4e2d\u53ef\u4ee5\u770b\u5230\uff0cICMP \u662f\u57fa\u4e8e IP \u534f\u8bae\u7684\uff0c\u6240\u4ee5 ICMP \u9700\u8981\u5148\u53d1 DNS \u67e5\u8be2\uff0c\u8fd9\u5c31\u4e0d\u7528\u591a\u89e3\u91ca\u4e86\u5427...ICMP \u57fa\u4e8e IP\uff0cIP \u8981\u67e5\u7684\u561b\u3002")),(0,o.kt)("h1",{id:"\u62a5\u6587\u5206\u7c7b"},"\u62a5\u6587\u5206\u7c7b"),(0,o.kt)("p",null,"ICMP \u62a5\u6587\u4e00\u822c\u5206\u4e3a \u67e5\u8be2\u62a5\u6587 \u548c \u5dee\u9519\u62a5\u6587\uff0c\u67e5\u8be2\u62a5\u6587\u5c31\u662f\u7b80\u5355\u770b\u4e00\u4e0b\u80fd\u4e0d\u80fd\u901a\uff0ccode \u6ca1\u6709\u66f4\u591a\u5177\u4f53\u4fe1\u606f\uff0c\u800c\u5dee\u9519\u62a5\u6587\uff0ccode \u4f1a\u662f\u6982\u62ec\u9519\u8bef\u4fe1\u606f\u7684\u9519\u8bef\u7f16\u53f7\u3002"),(0,o.kt)("p",null,"\u76f4\u767d\u4e00\u70b9\u5427\uff0c\u67e5\u8be2\u62a5\u6587\u5c31\u662f \u56de\u663e\u8bf7\u6c42 \u548c \u56de\u663e\u8bf7\u6c42\u7684\u54cd\u5e94 \u8fd9\u4e24\u79cd\u3002\u7406\u89e3\u4e3a\u5927\u7ea6\u7b49\u4ef7\u4e8e ping \u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u4e5f\u6210\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ping request\uff1atype \u4e3a 0\uff0ccode \u4e3a 0"),(0,o.kt)("li",{parentName:"ul"},"ping response: type \u4e3a 8\uff0ccode \u4e3a 0")),(0,o.kt)("p",null,"\u67e5\u8be2\u62a5\u6587\u6709\u4fe9\u7279\u70b9\uff0c\u8bf7\u6c42\u662f\u4e3b\u52a8\u53d1\u51fa\u7684\uff0c\u5176\u6b21\u5728 code\uff0ccode \u4e0d\u4ee3\u8868\u66f4\u591a\u4fe1\u606f\u4e86\uff0c\u56e0\u4e3a\u4e5f\u4e0d\u9700\u8981\u66f4\u591a\u4fe1\u606f\uff0c\u8fd9\u662f\u4e00\u4e2a\u201d\u662f\u6216\u8005\u5426\u201c\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5dee\u9519\u62a5\u6587\u5c31\u6bd4\u8f83\u590d\u6742\u4e86\uff0c\u4e0d\u540c\u7684 type \u548c code \u7ec4\u5408\u4ee3\u8868\u4e86\u5404\u79cd\u5404\u6837\u7684\u5dee\u9519\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"ping"},"ping"),(0,o.kt)("p",null,"ping \u5c31\u662f\u7b80\u5355\u7684\u53d1\u9001 ICMP \u5305\uff0c\u53ef\u4ee5\u7528\u6765\u63a2\u6d4b\u4e3b\u673a\u662f\u5426\u53ef\u8fbe\uff0c\u8ba1\u7b97\u5f80\u8fd4\u65f6\u95f4\u7b49\u3002"),(0,o.kt)("p",null,"\u53cd\u6b63\u4e00\u822c\u89c9\u5f97\u53ef\u80fd\u7f51\u7edc\u6709\u95ee\u9898\u4e86\uff0c\u6211\u5f80\u5f80\u7528\u6765\u8bd5\u4e00\u4e0b\u7f51\u7edc\u662f\u4e0d\u662f\u901a\u7684\uff0c\u8fd9\u4e5f\u662f\u5e73\u65f6\u4e0d\u591a\u7684\u7528\u5230 \u767e\u5ea6 \u7684\u5730\u65b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ping baidu.com\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ping \u6765\u770b\u4e00\u4e0b\u6240\u8c13\u7684\u5dee\u9519\u62a5\u6587"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Mac \u662f -m, Linux -t\nping baidu.com -m 1\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u6307\u5b9a\u4e86\u5728 IP \u62a5\u6587\u4e2d\u8bbe\u7f6e TTL \u4e3a 1\uff0c\u8fd9\u6837\u5c31\u4f1a\u8d85\u65f6\uff0c\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ICMP \u5dee\u9519\u62a5\u6587",src:r(9640).Z,width:"2744",height:"1575"})),(0,o.kt)("p",null,"\u7531\u4e8e\u6211\u8bbe\u7f6e\u7684 TTL \u4e3a 1\uff0c\u6240\u4ee5\u7531\u6211\u623f\u95f4\u91cc\u7684\u8def\u7531\u5668(168.0.0.1)\u8fd4\u56de\u4e86 ICMP \u5dee\u9519\u62a5\u6587\u3002\u4ece\u56fe\u4e2d\u4e5f\u53ef\u4ee5\u770b\u5230\uff0c\u4e0d\u7528\u53bb\u8bb0\u90a3\u4e9b\u5565 type\uff0ccode \u5440\uff0c\u6293\u5305\u5de5\u5177\u4f1a\u544a\u8bc9\u6211\u4eec\u5177\u4f53\u4fe1\u606f\u7684\uff0c\u9760\u8bb0...\u54ea\u6210\u5440\u3002"),(0,o.kt)("h3",{id:"traceroute"},"traceroute"),(0,o.kt)("p",null,"traceroute \u4f7f\u7528 UDP \u534f\u8bae\uff0c\u6307\u5b9a\u4e00\u4e2a\u4e0d\u53ef\u8fbe\u7aef\u53e3\uff0c\u6bcf\u6b21\u4f9d\u6b21\u53d1\u9001\u7684\u62a5\u6587 TTL \u4ece 1 \u9012\u589e\uff0c\u94fe\u8def\u4e0a\u5404\u4e2a\u8def\u7531\u5668\u7531\u4e8e TTL \u8d85\u65f6\uff0c\u8fd4\u56de\u4e00\u4e2a ICMP \u6d88\u606f\u901a\u77e5\u6e90\u4e3b\u673a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"traceroute",src:r(7314).Z,width:"1400",height:"756"})),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"ping \u548c traceroute \u90fd\u662f\u4f7f\u7528\u7684 ICMP \u534f\u8bae\u3002traceroute \u57fa\u4e8e UDP\uff0c\u901a\u8fc7\u8bbe\u7f6e TTL\uff0c\u4e2d\u95f4\u8def\u7531\u5728\u89e3\u6790\u53d1\u73b0\u8d85\u65f6\u4e4b\u540e\u5411\u6e90\u4e3b\u673a\u53d1\u9001 ICMP \u5dee\u9519\u62a5\u6587\u3002"),(0,o.kt)("p",null,"\u867d\u7136\u662f\u53eb\u505a ICMP\uff0c\u4f46\u662f\u5176\u5b9e\u662f M\uff0c\u7136\u540e C\uff0c\u662f\u63a5\u6536\u5230\u6d88\u606f\uff0c\u7136\u540e\u8fdb\u884c\u76f8\u5e94\u7684\u63a7\u5236\u5904\u7406\u3002"),(0,o.kt)("h2",{id:"q--a"},"Q & A"),(0,o.kt)("h3",{id:"icmp-\u662f\u54ea\u5c42\u7684\u534f\u8bae"},"ICMP \u662f\u54ea\u5c42\u7684\u534f\u8bae"),(0,o.kt)("p",null,"\u867d\u7136 ICMP \u662f\u57fa\u4e8e IP \u7684\uff0c\u4f46\u4e00\u822c\u8ba4\u4e3a ICMP \u5c5e\u4e8e\u7f51\u7edc\u5c42\u3002\u8fd9\u4e2a\u5c31\u6ca1\u5fc5\u8981\u7ea0\u7ed3\u662f\u54ea\u4e00\u5c42\u4e86\uff0c\u5404\u79cd\u89e3\u91ca\uff0c\u7406\u7531\u6709\u4e00\u5927\u5806\u3002\u6211\u89c9\u5f97 IP \u662f\u7528\u4e8e host-to-host \u901a\u4fe1\u7684\uff0c\u800c ICMP \u9488\u5bf9\u7684\u662f\u76ee\u6807\u4e3b\u673a\uff0c\u6216\u8005\u8bf4\u76ee\u6807 IP\uff0c\u80fd\u4e0d\u80fd\u5230\u8fbe\uff0c\u597d\u4e0d\u597d\u5230\u8fbe\uff0c\u662f\u770b\u8fd9\u4e2a IP \u201c\u597d\u4e0d\u597d\u7528\u201d\u3002RFC (opens new window)\u7684\u8bf4\u660e\u5982\u4e0b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ICMP, uses the basic support of IP as if it were a higher level protocol, however, ICMP is actually an integral part of IP, and must be implemented by every IP module.")))}s.isMDXComponent=!0},9640:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/icmp-error-79630474ba9a813af4e4a74adf04a9e7.jpg"},2132:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/icmp-fe6728a3d629e64726d3d15620c5a18e.jpg"},7314:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/traceroute-bd6e295b9bf64eb6b5730460524be459.jpg"}}]);