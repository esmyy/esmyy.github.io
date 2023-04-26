"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o="\u8bed\u4e49\u5316",i={unversionedId:"HTML/semantic",id:"HTML/semantic",title:"\u8bed\u4e49\u5316",description:"Using the correct HTML elements to describe your document content.",source:"@site/docs/01-HTML/02-semantic.md",sourceDirName:"01-HTML",slug:"/HTML/semantic",permalink:"/docs/HTML/semantic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-HTML/02-semantic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u7840",permalink:"/docs/HTML/basic"},next:{title:"iframe",permalink:"/docs/HTML/iframe"}},s={},c=[{value:"\u597d\u5904",id:"\u597d\u5904",level:2},{value:"div + css",id:"div--css",level:2},{value:"\u6807\u7b7e\u4f7f\u7528",id:"\u6807\u7b7e\u4f7f\u7528",level:2},{value:"\u65e0\u969c\u788d\u5f00\u53d1",id:"\u65e0\u969c\u788d\u5f00\u53d1",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8bed\u4e49\u5316"},"\u8bed\u4e49\u5316"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Using the correct HTML elements to describe your document content.")),(0,a.kt)("p",null,"\u5982\u4eca\u8bf4\u8d77\u8bed\u4e49\u5316\u7684\u65f6\u5019\uff0c\u5176\u5b9e\u6211\u4eec\u8bf4\u7684\u662f\u201c\u66f4\u660e\u786e\u7684\u8bed\u4e49\u201d\uff0c\u662f\u7528\u8bed\u4e49\u66f4\u660e\u786e\u7684\u6807\u7b7e\u6765\u63cf\u8ff0\u6587\u6863\uff0c\u662f\u5728\u8bed\u4e49\u5316\u7684\u8def\u4e0a\u5b9e\u8d28\u6027\u524d\u8fdb\uff0c\u662f 1.0 \u5230 2.0\uff0c\u4e0d\u662f 0 \u5230 1\u3002"),(0,a.kt)("p",null,"\u5e76\u4e0d\u662f\u8bf4 div+css \u5c31\u6ca1\u6709\u8bed\u4e49\u4e86\uff0cdiv \u548c span \u672c\u8eab\u5c31\u6709\u4e00\u5b9a\u8bed\u4e49\uff0c\u53ea\u662f\u4e0d\u591f\u5177\u4f53\uff0c\u4e0d\u591f\u660e\u786e\u3002"),(0,a.kt)("h2",{id:"\u597d\u5904"},"\u597d\u5904"),(0,a.kt)("p",null,"\u8bed\u4e49\u5316\u7684\u597d\u5904\uff0c\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u4eba\uff0c\u5bf9\u673a\u5668\u66f4\u53ef\u8bfb"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4eba\u66f4\u53ef\u8bfb\uff0c\u81ea\u7136\u5c31\u6709\u4e86\u66f4\u597d\u7684"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u8bfb\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u7ef4\u62a4\u6027")),(0,a.kt)("p",null,"\u5bf9\u673a\u5668\u66f4\u53ef\u8bfb\uff0c\u5c31\u6709\u66f4\u597d\u7684"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SEO"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u969c\u788d\u9605\u8bfb")),(0,a.kt)("p",null,"\u7528\u8bed\u4e49\u66f4\u5177\u4f53\u7684\u6807\u7b7e\uff0c\u5408\u7406\u5730\u7ec4\u7ec7\uff0c\u7f16\u5199\u9ad8\u53ef\u8bfb\u6027\u7684 HTML \u6587\u6863\uff0c\u4ee5\u8fbe\u7684\u76ee\u7684\u3002"),(0,a.kt)("h2",{id:"div--css"},"div + css"),(0,a.kt)("p",null,"div + css \u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u8fd8\u5728\u821e\u53f0\u4e0a\uff0c\u5e76\u4e14\u4ecd\u5c06\u957f\u671f\u5b58\u5728\u3002\u5728\u4f7f\u7528 div/span + css \u5e03\u5c40\u65f6\uff0c\u6587\u6863\u7ed3\u6784\u7684\u53ef\u8bfb\uff0c\u4e3b\u8981\u9760 class/id \u6765\u5b9a\u4e49\uff0c\u8868\u660e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u4e2a\u4ec0\u4e48 div/span?")),(0,a.kt)("p",null,"\u8fd9\u8981\u6c42\u5f00\u53d1\u8005\u63d0\u4f9b\u6070\u5f53\u7684\u81ea\u5b9a\u4e49\u547d\u540d\u4ee5\u4fbf\u4e8e\u4eba\u9605\u8bfb\uff0c\u800c\u7a0b\u5e8f\u8981\u8bfb\u61c2\u8fd9\u4e9b\u547d\u540d\uff0c\u662f\u5f88\u96be\u7684\uff0c\u5373\u4f7f\u80fd\u505a\u5230\uff0c\u4e5f\u4e0d\u662f\u89e3\u51b3\u95ee\u9898\u7684\u597d\u529e\u6cd5\u3002\nSemantic HTML \u4f7f\u7528 header\u3001section\u3001footer \u7b49\u8bed\u4e49\u66f4\u660e\u786e\u7684\u6807\u7b7e\uff0cclass/id \u53ea\u662f\u4e00\u4e2a\u589e\u5f3a\u7684\u4fee\u9970\uff0c\u800c\u4e0d\u662f\u201d\u5b9a\u4e49\u201c\uff0c\u901a\u8fc7\u66f4\u5177\u8bed\u4e49\u7684\u6807\u7b7e\uff0c\u66f4\u5c11\u501f\u52a9 class/id \u53bb\u63cf\u8ff0\u6587\u6863\u5185\u5bb9\u672c\u8eab\uff0c\u540c\u65f6\u6587\u6863\u7684\u5185\u5bb9\u7ed3\u6784\u4ecd\u662f\u76f4\u89c2\u53ef\u89c1\u7684\u3002\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/learn/html/semantic-html/"},"Semantic HTML")," \u4e2d\uff0c\u6211\u89c9\u5f97\u6709\u4e00\u6bb5\u8bdd\u8bf4\u7684\u7279\u522b\u597d"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"HTML should be used to structure content, not to define content's appearance"),". The appearance is the realm of CSS. While some elements are defined to appear a certain way, don't use an element based on how the user agent stylesheet makes that element appear by default. Rather, select each element based on the element's semantic meaning and functionality. Coding HTML in a logical, semantic, and meaningful way helps to ensure CSS is applied as intended.")),(0,a.kt)("h2",{id:"\u6807\u7b7e\u4f7f\u7528"},"\u6807\u7b7e\u4f7f\u7528"),(0,a.kt)("p",null,"\u5c31\u6211\u4e2a\u4eba\u800c\u8a00\uff0c\u5bf9\u4e8e\u4e00\u4e9b\u6bd4\u8f83\u660e\u786e\u7684\u5927\u5757\u5185\u5bb9\uff0c\u4f1a\u4e60\u60ef\u5730\u4f7f\u7528\u8bed\u4e49\u5316\u6807\u7b7e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <header>Header</header>\n  <nav>Nav</nav>\n  <main>\n    <article></article>\n  </main>\n  <aside>Aside</aside>\n  <footer>Footer</footer>\n</body>\n")),(0,a.kt)("p",null,"\u4e00\u4e9b\u7ec6\u5904\uff0c\u5c0f\u7684\u5730\u65b9\u6ca1\u6709\u7279\u522b\u7814\u7a76\u8bed\u4e49\u5316\u7684\u4f7f\u7528\uff0c\u8fd8\u662f\u4e60\u60ef\u4f7f\u7528 div/span + css\u3002"),(0,a.kt)("p",null,"\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\uff0c\u5f80\u5f80\u6ca1\u6709\u7cbe\u7ec6\u7684\u8bed\u4e49\u5316\u8981\u6c42\uff0c\n\u4f46\u505a\u4e00\u4e0b\u6709\u6548\u68b3\u7406\uff0c\u6709\u4e2a\u5927\u6982\u7684\u628a\u63e1\uff0c\u662f\u6709\u610f\u4e49\u7684\u3002"),(0,a.kt)("h2",{id:"\u65e0\u969c\u788d\u5f00\u53d1"},"\u65e0\u969c\u788d\u5f00\u53d1"),(0,a.kt)("p",null,"\u8fd9\u65b9\u9762\u63a5\u89e6\u5e94\u7528\u7684\u6bd4\u8f83\u5c11\uff0c\u53ef\u53c2\u8003\n",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7190341213126410298#heading-23"},"\u897f\u74dc\u89c6\u9891\u524d\u7aef\u6280\u672f\u56e2\u961f - \u804a\u804a\u524d\u7aef\u65e0\u969c\u788d\u5b9e\u8df5")))}d.isMDXComponent=!0}}]);