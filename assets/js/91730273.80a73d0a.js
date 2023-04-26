"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3817],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(y,l(l({ref:n},i),{},{components:t})):r.createElement(y,l({ref:n},i))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},l="\u5e38\u7528\u7c7b\u578b",p={unversionedId:"TS/type",id:"TS/type",title:"\u5e38\u7528\u7c7b\u578b",description:"\u5f52\u7eb3\u5e38\u7528\u7c7b\u578b\uff0c\u4f5c\u4e3a\u9879\u76ee\u5f00\u53d1\u57fa\u7840\u7684\u7c7b\u578b\u5de5\u5177\uff0c\u63d0\u9ad8\u6548\u7387\u3002",source:"@site/docs/04-TS/01-type.md",sourceDirName:"04-TS",slug:"/TS/type",permalink:"/docs/TS/type",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-TS/01-type.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u547d\u540d\u7ea6\u5b9a",permalink:"/docs/TS/convention"},next:{title:"\u5b9e\u7528\u6280\u5de7",permalink:"/docs/TS/skill"}},s={},c=[{value:"\u6570\u5b57",id:"\u6570\u5b57",level:2},{value:"boolean",id:"boolean",level:2},{value:"null",id:"null",level:2},{value:"undefined",id:"undefined",level:2},{value:"\u65f6\u95f4",id:"\u65f6\u95f4",level:2},{value:"\u8054\u5408",id:"\u8054\u5408",level:2},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"\u5bf9\u8c61\u5c5e\u6027",id:"\u5bf9\u8c61\u5c5e\u6027",level:2}],i={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u7528\u7c7b\u578b"},"\u5e38\u7528\u7c7b\u578b"),(0,o.kt)("p",null,"\u5f52\u7eb3\u5e38\u7528\u7c7b\u578b\uff0c\u4f5c\u4e3a\u9879\u76ee\u5f00\u53d1\u57fa\u7840\u7684\u7c7b\u578b\u5de5\u5177\uff0c\u63d0\u9ad8\u6548\u7387\u3002"),(0,o.kt)("p",null,"TypeScript \u66f4\u65b0\u5f88\u5feb\uff0c\u6211\u7528\u7684\u6bd4\u8f83\u591a\u7684\u662f 4.x\u3002"),(0,o.kt)("h2",{id:"\u6570\u5b57"},"\u6570\u5b57"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const ID_INVALID = -1;\nexport const ID_LOADING = 0;\nexport const ID_DEFAULT = 0;\n\nexport const ONE = 1;\nexport const TEN = 10;\nexport const HUNDRED = 100;\nexport const THOUSAND = 1_000;\nexport const MILLION = 1_000_000;\n")),(0,o.kt)("h2",{id:"boolean"},"boolean"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export type Falsy = false | "" | 0 | null | undefined;\n')),(0,o.kt)("h2",{id:"null"},"null"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type Nullable<T> = T | null;\nexport type NonNull<T> = T extends null ? never : T;\n")),(0,o.kt)("h2",{id:"undefined"},"undefined"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type UndefinedAble<T> = T | undefined;\nexport type NonUndefined<T> = T extends undefined ? never : T;\n")),(0,o.kt)("h2",{id:"\u65f6\u95f4"},"\u65f6\u95f4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * S_X \u6807\u8bc6 X \u65f6\u95f4\u95f4\u9694\u7684\u79d2\u6570\n * MS_X \u6807\u8bc6 X \u65f6\u95f4\u95f4\u9694\u7684\u6beb\u79d2\u6570\n */\nexport const S_SECOND = 1;\nexport const S_MINUTE = 60;\nexport const S_HOUR = 3600;\nexport const S_DAY = 86400;\nexport const MS_SECOND = 1_000;\nexport const MS_MINUTE = 60_000;\nexport const MS_HOUR = 3_600_000;\nexport const MS_DAY = 864_000_000;\n\nexport const DATE_FORMAT = "YYYY-MM-DD";\nexport const DATE_FORMAT_CN = "YYYY\u5e74MM\u6708DD\u65e5";\nexport const TIME_FORMAT = "HH:mm:ss";\nexport const TIME_FORMAT_CN = "HH\u65f6mm\u5206ss\u79d2";\nexport const TIME_FORMAT_NOW = "YYYYMMDDHHmmss";\nexport const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;\nexport const DATE_TIME_FORMAT_CN = `${DATE_FORMAT_CN} ${TIME_FORMAT_CN}`;\n')),(0,o.kt)("h2",{id:"\u8054\u5408"},"\u8054\u5408"),(0,o.kt)("p",null,"\u5b98\u65b9\u63d0\u4f9b\u4e86 Exclude \u548c Extract\uff0c\u57fa\u4e8e\u8fd9\u4e24\u4e2a\u53ef\u4ee5\u884d\u751f\u5176\u4ed6\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// \u4ea4\u96c6\u76f8\u5bf9\u5e76\u96c6\u7684\u8865\u96c6\nexport type SetInOnlyOne<A, B> = Exclude<A | B, A & B>;\n")),(0,o.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @description \u9ed8\u8ba4\u51fd\u6570\u5b9a\u4e49\uff0c\u7528\u4e8e\u4e0d\u5173\u6ce8\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u573a\u666f\n */\nexport type Noop = (...args: any[]) => any;\n\n/**\n * @description \u6ca1\u6709\u53c2\u6570\uff0c\u4e00\u4e2a\u53c2\u6570\uff0c\u4e24\u4e2a\u53c2\u6570\u7684\u51fd\u6570\n * @example\n * const foo:F0<string> = () => 'yueyue';\n * const foo:F0 = () => undefined;\n */\nexport type F0<R = void> = () => R;\nexport type F1<A2, R = void> = (a1: A2) => R;\nexport type F2<A1, A2, R = void> = (arg1: A1, arg2: A2) => R;\n\n/**\n * @description \u7f16\u8f91\u83b7\u53d6\u51fd\u6570\u7b2c n \u4e2a\u53c2\u6570\u7684\u7c7b\u578b\n * @example\n * ```ts\n * function foo(a: string, b: number, c: null | Record<string, any>) {\n *   console.log(a, b, c);\n * }\n *\n * type TooA0 = A0<typeof foo>; // string\n * ```\n */\nexport type A0<T extends Noop> = Parameters<T>[0];\nexport type A1<T extends Noop> = Parameters<T>[1];\nexport type A2<T extends Noop> = Parameters<T>[2];\n")),(0,o.kt)("h2",{id:"\u5bf9\u8c61\u5c5e\u6027"},"\u5bf9\u8c61\u5c5e\u6027"))}d.isMDXComponent=!0}}]);