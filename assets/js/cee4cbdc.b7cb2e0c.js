"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1012],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var o=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,o,l=function(n,e){if(null==n)return{};var t,o,l={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var p=o.createContext({}),s=function(n){var e=o.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=s(n.components);return o.createElement(p.Provider,{value:e},n.children)},m="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(n,e){var t=n.components,l=n.mdxType,r=n.originalType,p=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),m=s(t),k=l,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||r;return t?o.createElement(d,a(a({ref:e},c),{},{components:t})):o.createElement(d,a({ref:e},c))}));function d(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=t.length,a=new Array(r);a[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i[m]="string"==typeof n?n:l,a[1]=i;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},729:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=t(7462),l=(t(7294),t(3905));const r={},a="\u5de5\u4f5c\u6d41\u7a0b",i={unversionedId:"tools/webpack/flow",id:"tools/webpack/flow",title:"\u5de5\u4f5c\u6d41\u7a0b",description:"Webpack \u7684\u5de5\u4f5c\u6d41\u7a0b\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u4e8b\u4ef6\u6d41\u673a\u5236\uff0c\u6bcf\u4e00\u4e2a\u4e8b\u4ef6\u4e0a\u53ef\u4ee5\u6ce8\u518c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u6ce8\u518c\u5904\u7406\u51fd\u6570\u7684\u65b9\u5f0f\u662f\u63d2\u4ef6\u3002",source:"@site/docs/43-tools/88-webpack/02-flow.md",sourceDirName:"43-tools/88-webpack",slug:"/tools/webpack/flow",permalink:"/docs/tools/webpack/flow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/43-tools/88-webpack/02-flow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Webpack",permalink:"/docs/tools/webpack/overview"},next:{title:"loader",permalink:"/docs/tools/webpack/loader"}},p={},s=[{value:"1. create compiler",id:"1-create-compiler",level:3},{value:"\u5b9e\u4f8b\u5316 Compiler",id:"\u5b9e\u4f8b\u5316-compiler",level:4},{value:"\u6267\u884c plugins",id:"\u6267\u884c-plugins",level:4},{value:"\u53d1\u5e03\u73af\u5883\u4e8b\u4ef6",id:"\u53d1\u5e03\u73af\u5883\u4e8b\u4ef6",level:4},{value:"\u6839\u636e options \u8bbe\u7f6e\u63d2\u4ef6",id:"\u6839\u636e-options-\u8bbe\u7f6e\u63d2\u4ef6",level:4},{value:"2. run/watch",id:"2-runwatch",level:3},{value:"3. compilation",id:"3-compilation",level:3},{value:"4. emit",id:"4-emit",level:3}],c={toc:s};function m(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5de5\u4f5c\u6d41\u7a0b"},"\u5de5\u4f5c\u6d41\u7a0b"),(0,l.kt)("p",null,"Webpack \u7684\u5de5\u4f5c\u6d41\u7a0b\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u4e8b\u4ef6\u6d41\u673a\u5236\uff0c\u6bcf\u4e00\u4e2a\u4e8b\u4ef6\u4e0a\u53ef\u4ee5\u6ce8\u518c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u6ce8\u518c\u5904\u7406\u51fd\u6570\u7684\u65b9\u5f0f\u662f\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"Webpack \u7684\u4e8b\u4ef6\u6d41\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/webpack/tapable"},"Tapable")," \u5b9e\u73b0\u3002Tapable \u7c7b\u4f3c\u4e8e EventEmitter\uff0c\u6216\u8005\u66f4\u7b80\u5355\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/developit/mitt"},"mitt"),"\uff0c\u662f\u4e00\u4e2a\u4e8b\u4ef6\u53d1\u5e03/\u8ba2\u9605\u7684\u5de5\u5177\u3002\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const { SyncHook } = require("tapable");\n\n// \u5b9a\u4e49 hooks\nclass Car {\n  constructor() {\n    this.hooks = {\n      accelerate: new SyncHook(["newSpeed"]),\n      brake: new SyncHook(),\n      calculateRoutes: new AsyncParallelHook([\n        "source",\n        "target",\n        "routesList",\n      ]),\n    };\n  }\n}\n\nconst myCar = new Car();\n\n// \u6ce8\u518c\u94a9\u5b50\u51fd\u6570\nmyCar.hooks.brake.tap("test", () => console.log("test"));\n\n// \u89e6\u53d1\u4e8b\u4ef6\nmyCar.hooks.brake.call();\n')),(0,l.kt)("p",null,"\u63d0\u4f9b\u4e86\u65b9\u6cd5\u8fdb\u884c\u4e8b\u4ef6\u8ba2\u9605\uff0c\u4e8b\u4ef6\u53d1\u5e03\uff0c\u901a\u8fc7\u5b9a\u4e49 hooks \u5c5e\u6027\uff0cCar \u7684\u5b9e\u4f8b\u5177\u5907\u4e86\u6d88\u606f\u53d1\u5e03/\u8ba2\u9605\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u8df3\u8fc7\u5165\u53e3\u67e5\u627e\u7684\u8fc7\u7a0b\uff0c\u76f4\u63a5\u4ece Webpack \u7684\u5b9e\u4f8b\u5316\u5f00\u59cb\u3002\u5982\u679c\u628a Webpack \u5f53\u505a\u4e00\u4e2a\u7c7b\u4f3c\u4e8e Vue \u8fd9\u6837\u7684\u6784\u9020\u51fd\u6570\uff0c\u5927\u6982\u53ef\u4ee5\u8ba4\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"compiler = new Webpack(options);\n")),(0,l.kt)("p",null,"\u867d\u4e0d\u4e2d\uff0c\u4ea6\u4e0d\u8fdc\u77e3\u3002compiler \u662f Webpack \u4e2d\u7684\u4e24\u4e2a\u6838\u5fc3\u5bf9\u8c61\u4e4b\u4e00\uff0c\u8d1f\u8d23\u6574\u4e2a\u6784\u5efa\u8fc7\u7a0b\u7684\u8c03\u5ea6\u548c\u72b6\u6001\u7ef4\u62a4\u3002\u53e6\u4e00\u4e2a\u6838\u5fc3\u5bf9\u8c61\u662f compilation\uff0c\u8868\u793a\u7f16\u8bd1\uff0c\u8d1f\u8d23\u4e00\u6b21\u5177\u4f53\u7684\u7f16\u8bd1\u8fc7\u7a0b\u3002 \u5982\u679c\u7528 Node \u670d\u52a1\u505a\u4e2a\u5bf9\u6bd4\uff0ccompiler \u5c31\u50cf node process\uff0c\u800c compilation \u53ea\u662f\u4e00\u6b21\u8bf7\u6c42\u7684\u5904\u7406\u8fc7\u7a0b\uff0c\u662f ctx\u3002Webpack \u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u5c31\u56f4\u7ed5\u7740\u8fd9\u4e24\u4e2a\u5bf9\u8c61\u5c55\u5f00"),(0,l.kt)("h3",{id:"1-create-compiler"},"1. create compiler"),(0,l.kt)("p",null,"webpack \u5b9a\u4e49\u5728 lib/webpack.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const webpack = (options, callback) => {\n  let compiler = createCompiler(options);\n  // ...\n  return compiler;\n};\n")),(0,l.kt)("p",null,"createCompiler"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const createCompiler = (options) => {\n  // \u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u6bd4\u5982\u8bf4\u5982\u679c\u6ca1\u914d\u7f6e options.target\uff0c\u5c31\u8bbe\u7f6e options.target \u4e3a web\n  options = new WebpackOptionsDefaulter().process(options);\n\n  // \u521d\u59cb\u5316 compiler\n  const compiler = new Compiler(options.context);\n  compiler.options = options;\n\n  // \u5185\u7f6e\u63d2\u4ef6\u5b9e\u4f8b\u5316\u5e76\u8c03\u7528\n  new NodeEnvironmentPlugin({\n    infrastructureLogging: options.infrastructureLogging,\n  }).apply(compiler);\n\n  // plugins \u8c03\u7528\n  if (Array.isArray(options.plugins)) {\n    for (const plugin of options.plugins) {\n      if (typeof plugin === "function") {\n        plugin.call(compiler, compiler);\n      } else {\n        plugin.apply(compiler);\n      }\n    }\n  }\n\n  // \u53d1\u5e03\u73af\u5883\u72b6\u6001\u4e8b\u4ef6\n  compiler.hooks.environment.call();\n  compiler.hooks.afterEnvironment.call();\n\n  // \u6839\u636e options \u8bbe\u7f6e\u63d2\u4ef6\n  compiler.options = new WebpackOptionsApply().process(options, compiler);\n  return compiler;\n};\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u5185\u5bb9\u5f88\u591a\uff0c\u5df2\u7ecf\u5728\u4ee3\u7801\u4e2d\u505a\u4e86\u7b80\u8981\u6ce8\u91ca\u3002\u7406\u89e3 hooks \u548c plugin \u76f8\u5173\u7684\u521d\u59cb\u5316\uff0c\u5bf9\u4e8e\u7406\u89e3 Webpack \u5de5\u4f5c\u6d41\u7a0b\u81f3\u5173\u91cd\u8981\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5316 Compiler"),(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c plugins"),(0,l.kt)("li",{parentName:"ul"},"\u53d1\u5e03\u73af\u5883\u4e8b\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e options \u8bbe\u7f6e\u63d2\u4ef6")),(0,l.kt)("p",null,"\u9010\u6b65\u6765\u770b\u5176\u4e2d\u7684\u5185\u5bb9"),(0,l.kt)("h4",{id:"\u5b9e\u4f8b\u5316-compiler"},"\u5b9e\u4f8b\u5316 Compiler"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"compiler = new Compiler(options.context);\n")),(0,l.kt)("p",null,"\u6765\u770b\u4e00\u4e0b Compiler \u7684\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const {\n  SyncHook,\n  SyncBailHook,\n  AsyncParallelHook,\n  AsyncSeriesHook,\n} = require("tapable");\n\nclass Compiler {\n  /**\n   * @param {string} context the compilation path\n   */\n  constructor(context) {\n    this.hooks = Object.freeze({\n      shouldEmit: new SyncBailHook(["compilation"]),\n      done: new AsyncSeriesHook(["stats"]),\n      /** @type {SyncHook<[Stats]>} */\n      afterDone: new SyncHook(["stats"]),\n      /** @type {AsyncSeriesHook<[]>} */\n      additionalPass: new AsyncSeriesHook([]),\n      /** @type {AsyncSeriesHook<[Compiler]>} */\n      beforeRun: new AsyncSeriesHook(["compiler"]),\n      /** @type {AsyncSeriesHook<[Compiler]>} */\n      run: new AsyncSeriesHook(["compiler"]),\n      /** @type {AsyncSeriesHook<[Compilation]>} */\n      emit: new AsyncSeriesHook(["compilation"]),\n      /** @type {AsyncSeriesHook<[string, AssetEmittedInfo]>} */\n      assetEmitted: new AsyncSeriesHook(["file", "info"]),\n      /** @type {AsyncSeriesHook<[Compilation]>} */\n      afterEmit: new AsyncSeriesHook(["compilation"]),\n      // ...\u7701\u7565\u5176\u4ed6 hooks \u5b9a\u4e49\n    });\n\n    // ...\u4e00\u5806\u5c5e\u6027\u521d\u59cb\u5316\n  }\n\n  watch(watchOptions, handler) {\n    // ...\n  }\n\n  run(callback) {\n    // ...\n  }\n\n  // ...\n\n  compile(callback) {\n    // ...\n  }\n\n  close(callback) {\n    this.cache.shutdown(callback);\n  }\n}\n')),(0,l.kt)("p",null,"\u6784\u9020\u51fd\u6570\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"context")," \u53c2\u6570\u662f\u7f16\u8bd1\u8def\u5f84\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"/abs/path/to/webpack-demo"),"\u3002 compiler.hooks \u4f7f\u7528 tapable \u5bfc\u51fa\u7684\u5de5\u5177\u51fd\u6570\u8fdb\u884c\u4e86\u4f17\u591a\u4e8b\u4ef6\u7684\u5b9a\u4e49\uff0c\u7531\u6b64 compiler \u5177\u5907\u4e86\u4e8b\u4ef6\u53d1\u5e03/\u8ba2\u9605\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u603b\u4e4b ",(0,l.kt)("inlineCode",{parentName:"p"},"new Compiler"),"\uff0c\u5c31\u662f\u4f7f\u7528 tapable \u7ed9 compiler \u5b9e\u4f8b\u5b9a\u4e49\u4e86\u8bf8\u591a\u7f16\u8bd1\u5668\u6267\u884c\u76f8\u5173\u7684\u4e8b\u4ef6\u3002"),(0,l.kt)("h4",{id:"\u6267\u884c-plugins"},"\u6267\u884c plugins"),(0,l.kt)("p",null,"\ud83d\udc68\u200d\ud83d\udcbb\u200d Go On... \ud83d\udc68\u200d\ud83d\udcbb\u200d \u4e0b\u9762\u8fd9\u4e24\u5757\u5185\u5bb9\uff0c\u90fd\u662f\u63d2\u4ef6\u7684\u8c03\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const createCompiler = (options) => {\n  // ...\n  new NodeEnvironmentPlugin({\n    infrastructureLogging: options.infrastructureLogging,\n  }).apply(compiler);\n\n  if (Array.isArray(options.plugins)) {\n    for (const plugin of options.plugins) {\n      if (typeof plugin === "function") {\n        plugin.call(compiler, compiler);\n      } else {\n        plugin.apply(compiler);\n      }\n    }\n  }\n\n  // ...\n};\n')),(0,l.kt)("p",null,"\u63d2\u4ef6\u7684\u8c03\u7528\u5176\u5b9e\u5c31\u662f\u6ce8\u518c\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u4e0d\u7ba1\u662f NodeEnvironmentPlugin \u8fd8\u662f options.plugins \u91cc\u9762\u4f20\u5165\u7684\u63d2\u4ef6\uff0c\u90fd\u662f\u4e00\u6837\u7684\u3002 \u4ee5\u8fd9\u91cc\u7684 NodeEnvironmentPlugin \u4e3a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'class NodeEnvironmentPlugin {\n  constructor(options) {\n    this.options = options || {};\n  }\n\n  apply(compiler) {\n    // ...\n    compiler.hooks.beforeRun.tap("NodeEnvironmentPlugin", (compiler) => {\n      if (compiler.inputFileSystem === inputFileSystem) {\n        inputFileSystem.purge();\n      }\n    });\n  }\n}\n')),(0,l.kt)("p",null,"\u524d\u9762 new Compiler \u5b9a\u4e49\u4e86 beforeRun \u4e8b\u4ef6\uff0c\u8fd9\u91cc\u5c31\u662f\u7ed9 beforeRun \u6dfb\u52a0\u4e00\u4e2a\u8ba2\u9605\u51fd\u6570\u800c\u5df2\u3002"),(0,l.kt)("h4",{id:"\u53d1\u5e03\u73af\u5883\u4e8b\u4ef6"},"\u53d1\u5e03\u73af\u5883\u4e8b\u4ef6"),(0,l.kt)("p",null,"\ud83d\udc68\u200d\ud83d\udcbb\u200d Go On... \ud83d\udc68\u200d\ud83d\udcbb\u200d \u5728\u5b9a\u4e49\u4e86\u4e8b\u4ef6\uff0c\u4e5f\u6dfb\u52a0\u4e86\u4e00\u4e9b\u8ba2\u9605\u4e8b\u4ef6\u4e4b\u540e\uff0c\u662f\u5185\u7f6e\u7684\u73af\u5883\u76f8\u5173\u4e8b\u4ef6\u7684\u53d1\u5e03\uff0c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createCompiler = (options) => {\n  // ...\u53d1\u5e03\u73af\u5883\u72b6\u6001\u76f8\u5173\u7684\u4e8b\u4ef6\n  compiler.hooks.environment.call();\n  compiler.hooks.afterEnvironment.call();\n\n  // \u6839\u636eoptions \u8bbe\u7f6e\u63d2\u4ef6\n  compiler.options = new WebpackOptionsApply().process(options, compiler);\n  return compiler;\n};\n")),(0,l.kt)("h4",{id:"\u6839\u636e-options-\u8bbe\u7f6e\u63d2\u4ef6"},"\u6839\u636e options \u8bbe\u7f6e\u63d2\u4ef6"),(0,l.kt)("p",null,"\u521b\u5efa\u7f16\u8bd1\u5668\u7684\u6700\u540e\u662f\u6839\u636e\u4f20\u9012\u7684 options\uff0c\u6216\u8005\u8bf4\u6211\u4eec\u7f16\u5199\u7684 webpack.config.js \u4e2d\u7684\u914d\u7f6e\uff0c\u53bb\u8bbe\u7f6e\u63d2\u4ef6\u3002\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createCompiler = (options) => {\n  compiler.options = new WebpackOptionsApply().process(options, compiler);\n};\n")),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u91cd\u8981\u7684\u521d\u59cb\u5316\uff0c\u5b83\u8d1f\u8d23\u5c06 options \u53c2\u6570\uff0c\u8f6c\u6362\u4e3a Webpack \u5185\u90e8\u63d2\u4ef6\u6765\u5904\u7406\uff0c\u90e8\u5206\u5185\u5bb9\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'class WebpackOptionsApply extends OptionsApply {\n  // ...\n  process(options, compiler) {\n    // ...\n    new EntryOptionPlugin().apply(compiler); // \u5728\u8fd9\u91cc\u5bf9 entry \u591a\u79cd\u914d\u7f6e\u5f62\u5f0f\u8fdb\u884c\u4e86\u7edf\u4e00\u5904\u7406\u8f6c\u6362\n    compiler.hooks.entryOption.call(options.context, options.entry);\n    // ...\n    if (typeof options.mode !== "string") {\n      const WarnNoModeSetPlugin = require("./WarnNoModeSetPlugin");\n      new WarnNoModeSetPlugin().apply(compiler);\n    }\n    if (options.optimization.removeAvailableModules) {\n      const RemoveParentModulesPlugin = require("./optimize/RemoveParentModulesPlugin");\n      new RemoveParentModulesPlugin().apply(compiler);\n    }\n    if (options.optimization.removeEmptyChunks) {\n      const RemoveEmptyChunksPlugin = require("./optimize/RemoveEmptyChunksPlugin");\n      new RemoveEmptyChunksPlugin().apply(compiler);\n    }\n    // ...\n    return options;\n  }\n}\n')),(0,l.kt)("p",null,"\u4ee5\u4e0a\u53ea\u5c55\u793a\u4e86\u539f\u4ee3\u7801\u7684\u4e00\u5c0f\u90e8\u5206\u5185\u5bb9\u3002\u6982\u62ec\u6765\u8bf4\uff0c\u8fd9\u5c31\u662f\u6839\u636e options \u4e2d\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u5f15\u5165\u4e00\u4e2a\u4e2a\u5185\u90e8\u63d0\u4f9b\u7684\u63d2\u4ef6\u8fdb\u884c\u5904\u7406\u3002\u57fa\u672c\u4e0a\u662f\u4e0b\u9762\u8fd9\u6837\u7684\u4e00\u4e2a\u8f6c\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"if (options.someplugin) {\n  const Plugin = require('./relative/path/to/someplugin')\uff1b\n  new Plugin().apply(compiler);\n}\n")),(0,l.kt)("p",null,"\u603b\u7ed3\u6765\u8bf4\uff0c\u6574\u4e2a compiler \u521d\u59cb\u5316\u7684\u8fc7\u7a0b\uff0c\u90fd\u56f4\u7ed5\u7740 hooks \u548c plugins\uff0c\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u8ba2\u9605\u4e8b\u4ef6\u3002 options \u914d\u7f6e\u548c\u63d2\u4ef6\u662f\u6709\u5bf9\u5e94\u5173\u7cfb\u7684\uff0c\u4f1a\u5c06\u53c2\u6570\u914d\u7f6e\u8f6c\u6362\u4e3a plugin \u53bb\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"2-runwatch"},"2. run/watch"),(0,l.kt)("p",null,"\u521b\u5efa\u4e86 compiler \u4e4b\u540e\uff0c\u5c31\u662f\u5f00\u59cb\u7f16\u8bd1\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const webpack = (options, callback) => {\n  // ...\n  compiler = createCompiler(options);\n  watch = options.watch;\n  watchOptions = options.watchOptions || {};\n  if (callback) {\n    if (watch) {\n      compiler.watch(watchOptions, callback);\n    } else {\n      compiler.run((err, stats) => {\n        compiler.close((err2) => {\n          callback(err || err2, stats);\n        });\n      });\n    }\n  }\n  return compiler;\n};\n")),(0,l.kt)("p",null,"\u5224\u65ad\u662f\u5426\u662f watch \u6a21\u5f0f\u6267\u884c compiler.watch \u6216\u8005 compiler.run\uff0cwatch \u6a21\u5f0f\u662f dev \u76f8\u5173\u7684\uff0c\u7814\u7a76 run \u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Compiler {\n  /**\n   * @param {string} context the compilation path\n   */\n  constructor(context) {\n    // ...\n  },\n  run(callback) {\n    // ...\n    this.cache.endIdle(err => {\n      if (err) return finalCallback(err);\n\n      this.hooks.beforeRun.callAsync(this, err => {\n        if (err) return finalCallback(err);\n\n        this.hooks.run.callAsync(this, err => {\n          if (err) return finalCallback(err);\n\n          this.readRecords(err => {\n            if (err) return finalCallback(err);\n\n            this.compile(onCompiled);\n          });\n        });\n      });\n    });\n  }\n}\n")),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u770b\uff0c\u4f9d\u6b21\u89e6\u53d1 ",(0,l.kt)("inlineCode",{parentName:"p"},"beforeRun"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \u4e24\u4e2a\u4e8b\u4ef6\uff0c\u6700\u7ec8\u8c03\u7528 compile \u51fd\u6570\uff0ccompile \u8868\u793a\u4e00\u6b21\u7f16\u8bd1\u3002onCompiled \u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u662f\u7f16\u8bd1\u5b8c\u6210\u4e4b\u540e\u6267\u884c\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'compile(callback) {\n  const params = this.newCompilationParams();\n  this.hooks.beforeCompile.callAsync(params, err => {\n    if (err) return callback(err);\n\n    this.hooks.compile.call(params);\n\n    const compilation = this.newCompilation(params);\n\n    const logger = compilation.getLogger("webpack.Compiler");\n\n    logger.time("make hook");\n    this.hooks.make.callAsync(compilation, err => {\n      logger.timeEnd("make hook");\n      if (err) return callback(err);\n\n      process.nextTick(() => {\n        logger.time("finish compilation");\n        compilation.finish(err => {\n          logger.timeEnd("finish compilation");\n          if (err) return callback(err);\n\n          logger.time("seal compilation");\n          compilation.seal(err => {\n            logger.timeEnd("seal compilation");\n            if (err) return callback(err);\n\n            logger.time("afterCompile hook");\n            this.hooks.afterCompile.callAsync(compilation, err => {\n              logger.timeEnd("afterCompile hook");\n              if (err) return callback(err);\n\n              return callback(null, compilation);\n            });\n          });\n        });\n      });\n    });\n  });\n}\n')),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4f9d\u6b21\u89e6\u53d1\u4e86 beforeCompile, compile, make\uff0c\u800c hooks.make \u5373\u5f00\u59cb\u7f16\u8bd1\u3002 \u4ece\u8c03\u7528 compiler.run \u5230 hooks.make\uff0c\u57fa\u672c\u4e0a\u90fd\u53ea\u662f\u5728\u505a\u5404\u4e2a\u7ec6\u5206\u4e8b\u4ef6\u7684\u89e6\u53d1\uff0c\u6709\u70b9\u50cf DOM \u4e8b\u4ef6\u7684\u6355\u83b7\u7684\u8fc7\u7a0b\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u901a\u77e5\u4e00\u4e0b\uff0c\u8d70\u8fc7\u5343\u5c71\u4e07\u6c34\uff0c\u5957\u8def\u4e07\u5343\uff0c\u5230\u4e86 make \u8ddf\u524d\uff0c\u6700\u540e\u5927\u54c4\u4e00\u58f0 \u2014\u2014 \u73b0\u5728\u8001\u5b50\u771f\u7684\u8981\u5f00\u59cb\u4e86\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u7684\u7f16\u8bd1\u7531 compilation\uff0ccompilation \u662f\u7f16\u8bd1\u6700\u6838\u5fc3\u7684\u8fc7\u7a0b\uff0c\u6bd4\u8f83\u590d\u6742\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u5355\u72ec\u7684\u73af\u8282\u53bb\u5206\u6790\u3002 \u603b\u4e4b\u5728\u8fd9\u91cc make \u5b8c\u6210\u4e4b\u540e\uff0c\u8868\u793a\u6587\u4ef6\u5df2\u7ecf\u8fdb\u884c\u4e86\u4e00\u6b21\u7f16\u8bd1\uff0c\u4e4b\u540e\u662f\u8c03\u7528 compilation.finish \u548c compilation.seal \u53bb\u505a\u4e00\u4e9b\u6536\u5c3e\u5de5\u4f5c\u3002"),(0,l.kt)("h3",{id:"3-compilation"},"3. compilation"),(0,l.kt)("p",null,"compilation \u8d1f\u8d23\u4e00\u6b21\u5177\u4f53\u7f16\u8bd1\u8fc7\u7a0b\u3002\u5177\u4f53\u7684\u6a21\u5757\u7f16\u8bd1\u8c03\u5ea6\uff0ccompilation \u6839\u636e entry\uff0c\u4f7f\u7528 loader \u5bf9\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1\uff0c\u751f\u6210 bundle\u3002"),(0,l.kt)("p",null,"compiler.hooks.make \u7684\u89e6\u53d1\u662f\u7f16\u8bd1\u7684\u53d1\u4ee4\u67aa\uff0c\u901a\u8fc7\u641c\u7d22 hooks.make.tap \u627e\u5230\u5bf9\u5e94\u7684\u8ba2\u9605\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"grep -rn hooks.make.tap ./lib\n")),(0,l.kt)("p",null,"\u5f97\u5230"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'./lib/AutomaticPrefetchPlugin.js:  compiler.hooks.make.tapAsync(\n./lib/PrefetchPlugin.js:  compiler.hooks.make.tapAsync("PrefetchPlugin", (compilation, callback) => {\n./lib/EntryPlugin.js:  compiler.hooks.make.tapAsync("EntryPlugin", (compilation, callback) => {\n./lib/DynamicEntryPlugin.js:  compiler.hooks.make.tapAsync(\n./lib/DllEntryPlugin.js:  compiler.hooks.make.tapAsync("DllEntryPlugin", (compilation, callback) => {\n')),(0,l.kt)("p",null,"\u7531\u6b64\u53ef\u4ee5\u5f97\u77e5 make \u5177\u4f53\u505a\u7684\u4e8b\u60c5\uff0c\u5c31\u5728\u8fd9\u51e0\u4e2a\u5730\u65b9\u6ce8\u518c\u7684\u8ba2\u9605\u51fd\u6570\u91cc\u9762\u3002 \u6211\u4eec\u7814\u7a76 EntryPlugin.js(\u8f83\u65e9\u7248\u672c\u91cc\u9762\u662f SingleEntryPlugin.js)\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u662f\u7528\u6765\u5904\u7406\u914d\u7f6e\u7684 entry\uff0c\u7f16\u8bd1\u81ea\u7136\u662f\u4ece\u5165\u53e3\u5f00\u59cb\u5904\u7406\u7684"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const EntryDependency = require("./dependencies/EntryDependency");\n\nclass EntryPlugin {\n  constructor(context, entry, name) {\n    this.context = context;\n    this.entry = entry;\n    this.name = name;\n  }\n\n  apply(compiler) {\n    // ...\n\n    compiler.hooks.make.tapAsync("EntryPlugin", (compilation, callback) => {\n      const { entry, name, context } = this;\n      const dep = EntryPlugin.createDependency(entry, name); // \u5c06\u5728webpack.config.js \u4e2d\u7684entry\u6587\u4ef6\u8f6c\u6362\u4e3a\u4e00\u4e2a\u63cf\u8ff0\u5bf9\u8c61\n      compilation.addEntry(context, dep, name, (err) => {\n        callback(err);\n      });\n    });\n  }\n\n  static createDependency(entry, name) {\n    const dep = new EntryDependency(entry);\n    dep.loc = { name };\n    return dep;\n  }\n}\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684 entry \u5df2\u7ecf\u662f\u5355\u4e2a\u6587\u4ef6\uff0c\u662f\u5728 compiler \u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u5df2\u7ecf\u5904\u7406\u8fc7\u7684\uff0c\u901a\u8fc7 addEntry \u5f00\u59cb\u7f16\u8bd1\u5177\u4f53\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"addEntry(context, entry, name, callback) {\n  this.hooks.addEntry.call(entry, name);\n\n  let entriesArray = this.entryDependencies.get(name);\n  if (entriesArray === undefined) {\n    entriesArray = [];\n    this.entryDependencies.set(name, entriesArray);\n  }\n  entriesArray.push(entry);\n\n  this.addModuleChain(context, entry, (err, module) => {\n    if (err) {\n      this.hooks.failedEntry.call(entry, name, err);\n      return callback(err);\n    }\n    this.hooks.succeedEntry.call(entry, name, module);\n\n    return callback(null, module);\n  });\n}\n")),(0,l.kt)("p",null,"\u4ee5 entry \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u6a21\u5757\u5f00\u59cb\u6784\u5efa\uff0c\u5728 addModuleChain \u7684\u56de\u8c03\u51fd\u6570\u4e2d\u89e6\u53d1\u4e86 succeedEntry \u4e8b\u4ef6\uff0c\u8fd9\u8bf4\u660e\u5728\u56de\u8c03\u6267\u884c\u65f6\u5f53\u524d entry \u5df2\u7ecf\u6784\u5efa\u5b8c\u6210\u3002"),(0,l.kt)("p",null,"\u4e2d\u95f4\u8fc7\u7a0b\u5176\u5b9e\u6bd4\u8f83\u590d\u6742\uff0c\u6d89\u53ca\u5230\u4f9d\u8d56\u7684\u5206\u7c7b\uff0cNormalModule \u548c ContextModule \u4e0d\u540c\u6784\u9020\u65b9\u6cd5\u7b49\u7b49\uff0c\u8fd9\u4e9b\u5185\u5bb9\u8fc7\u7ec6\u4e86\u3002\u4e3e\u6700\u5e38\u89c1\u7684\u4f8b\u5b50\u6765\u8bf4\uff0c\u5728\u6a21\u5757\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u8c03\u7528\u5185\u7f6e\u7684 NormalModule \u6784\u9020\u51fd\u6570\u53bb\u751f\u6210\u6a21\u5757\u5b9e\u4f8b\uff0c\u6a21\u5757\u5b9e\u4f8b\u4f1a\u88ab\u4fdd\u5b58\u5230 compilation.modules \u6570\u7ec4\u91cc\u9762\uff0c\u7136\u540e\u6267\u884c\u6a21\u5757\u7684 build \u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const { getContext, runLoaders } = require("loader-runner");\n\nclass NormalModule extends Module {\n  // ...\n  doBuild(options, compilation, resolver, fs, callback) {\n    // ...\n    runLoaders(\n      {\n        resource: this.resource,\n        loaders: this.loaders,\n        context: loaderContext,\n        readResource: fs.readFile.bind(fs),\n      },\n      (err, result) => {\n        // ...\n      }\n    );\n  }\n\n  build(options, compilation, resolver, fs, callback) {\n    // ...\n\n    return this.doBuild(options, compilation, resolver, fs, (err) => {\n      // ...\n      result = this.parser.parse(this._ast || this._source.source(), {\n        current: this,\n        module: this,\n        compilation: compilation,\n        options: options,\n      });\n      handleParseResult(result);\n    });\n  }\n  // ...\n}\n')),(0,l.kt)("p",null,"\u5728 doBuild \u51fd\u6570\u4e2d\uff0c\u8c03\u7528\u4e86 runLoaders \u53bb\u8fd0\u884c loader \u5bf9\u6587\u4ef6\u8fdb\u884c\u5177\u4f53\u8f6c\u6362\u3002\u5047\u8bbe\u6709\u8fd9\u6837\u4e00\u4e2a app.js \u4f5c\u4e3a entry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import "./style.less";\nconst AGE = 100;\n')),(0,l.kt)("p",null,"loader \u914d\u7f6e\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'rules: [\n  {\n    test: /\\.js/i,\n    use: {\n      loader: "babel-loader",\n      options: {\n        presets: [["@babel/preset-env", { targets: "defaults" }]],\n      },\n    },\n  },\n  {\n    test: /\\.less$/i,\n    loader: ["style-loader", "css-loader", "less-loader"],\n  },\n];\n')),(0,l.kt)("p",null,"\u90a3\u4e48\u5728 runLoaders \u8fd4\u56de\u7684\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"'import \\'./style.less\\';\\nvar AGE = 100;';\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"parser.parse")," \u662f\u6839\u636e\u5f53\u524d\u7684 source\uff0c\u4f7f\u7528 acorn (opens new window)\u8fd9\u4e2a\u89e3\u6790\u5de5\u5177\uff0c\u53bb\u751f\u6210 AST\uff0c\u6839\u636e AST \u63d0\u53d6\u5230\u8fd9\u4e2a\u6a21\u5757\u7684\u4f9d\u8d56\u9879\uff0c\u7136\u540e\u7ee7\u7eed\u9012\u5f52\u6267\u884c\u6a21\u5757\u7684\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u76f4\u5230\u6240\u6709\u7684\u4f9d\u8d56\u90fd\u5904\u7406\u5b8c\u6210\u3002\u6700\u7ec8\u6574\u4e2a\u4f9d\u8d56\u5904\u7406\u5b8c\u6210\u540e\uff0c\u8fdb\u5165\u5230\u6a21\u5757\u7684 seal \u73af\u8282\uff0cseal \u6709\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"chunk \u751f\u6210\uff1a\u5728\u524d\u9762\u7684\u6b65\u9aa4\u4e2d\uff0c\u5404\u6a21\u5757\u5b9e\u4f8b\u4fdd\u5b58\u5728 compilation.modules \u4e0a\uff0cseal \u6839\u636e entry \u751f\u6210 chunk\uff0c\u751f\u6210 chunk hash"),(0,l.kt)("li",{parentName:"ul"},"asset \u751f\u6210\uff1a\u6839\u636e chunk \u751f\u6210 asset\uff0c\u5728\u8fd9\u4e00\u6b65\uff0crequire \u7b49\u5f15\u7528\u88ab\u8f6c\u6362\u4e3a\u4f7f\u7528\u5185\u7f6e\u7684",(0,l.kt)("strong",{parentName:"li"},"webpack_require"),"\u5f15\u7528")),(0,l.kt)("p",null,"asset \u548c chunk \u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f\u5047\u8bbe\u6211\u4f7f\u7528 MiniCssExtractPlugin \u63d0\u53d6\u4e86 css\uff0c\u90a3\u4e48\u7f16\u8bd1\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"        Asset      Size  Chunks             Chunk Names\napp.bundle.js  4.31 KiB     app  [emitted]  app\n      app.css  4.18 KiB     app  [emitted]  app\n      ```\n")),(0,l.kt)("p",null,"\u5728 seal \u9636\u6bb5\u751f\u6210\u7684 compilation.assets \u5bf9\u8c61\uff0c\u4e0e\u6211\u4eec\u6700\u7ec8\u6253\u5305\u51fa\u6765\u7684 Asset\uff0c\u53ea\u5dee\u4e34\u95e8\u4e00\u811a\u7684\u8f93\u51fa\u3002"),(0,l.kt)("h3",{id:"4-emit"},"4. emit"),(0,l.kt)("p",null,"compilation \u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c\u5185\u5b58\u4e2d\u5df2\u7ecf\u6709\u5373\u5c06\u8f93\u51fa\u7684\u6587\u4ef6\u4e86\uff0c\u4fdd\u5b58\u5728 compilation.assets\uff0c\u63d0\u53d6\u51fa\u6765\u5199\u5230\u5bf9\u5e94\u8f93\u51fa\u6587\u4ef6\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'assets = {\n  "app.css": {\n    _source: {\n      children: [\n        {\n          _value:\n            ".hello {\\n  color: red;\\n}\\n.hello .world {\\n  color: blue;\\n}\\n",\n        },\n        "\\n",\n      ],\n    },\n    // ...\n  },\n  "app.bundle.js": {\n    // ...\n  },\n};\n')))}m.isMDXComponent=!0}}]);