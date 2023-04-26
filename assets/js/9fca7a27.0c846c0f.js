"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2697],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),c=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?l.createElement(k,o(o({ref:n},u),{},{components:t})):l.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var l=t(7462),r=(t(7294),t(3905));const a={},o="compilation",i={unversionedId:"project/bundler/webpack/compilation/index",id:"project/bundler/webpack/compilation/index",title:"compilation",description:"compilation \u8d1f\u8d23\u4e00\u6b21\u5177\u4f53\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u5173\u6ce8\u7684\u662f\u4ece entry \u7684\u8bfb\u5230 output \u7684\u5199\u3002",source:"@site/docs/10-project/bundler/01-webpack/04-compilation/index.mdx",sourceDirName:"10-project/bundler/01-webpack/04-compilation",slug:"/project/bundler/webpack/compilation/",permalink:"/docs/project/bundler/webpack/compilation/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10-project/bundler/01-webpack/04-compilation/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"compiler",permalink:"/docs/project/bundler/webpack/compiler"},next:{title:"buildModule",permalink:"/docs/project/bundler/webpack/compilation/build-module"}},s={},c=[{value:"\u524d\u7f6e\u6982\u89c8",id:"\u524d\u7f6e\u6982\u89c8",level:2},{value:"\u5b9a\u4f4d\u5165\u53e3",id:"\u5b9a\u4f4d\u5165\u53e3",level:2},{value:"\u6dfb\u52a0\u5165\u53e3",id:"\u6dfb\u52a0\u5165\u53e3",level:2},{value:"\u6a21\u5757\u89e3\u6790",id:"\u6a21\u5757\u89e3\u6790",level:2},{value:"createModule",id:"createmodule",level:3},{value:"addModule",id:"addmodule",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},d=u("Tabs"),p=u("TabItem"),m={toc:c},k="wrapper";function y(e){let{components:n,...t}=e;return(0,r.kt)(k,(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compilation"},"compilation"),(0,r.kt)("p",null,"compilation \u8d1f\u8d23\u4e00\u6b21\u5177\u4f53\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u5173\u6ce8\u7684\u662f\u4ece entry \u7684\u8bfb\u5230 output \u7684\u5199\u3002"),(0,r.kt)("h2",{id:"\u524d\u7f6e\u6982\u89c8"},"\u524d\u7f6e\u6982\u89c8"),(0,r.kt)("p",null,"\u5728 compiler \u5bf9\u8c61\u7684"),(0,r.kt)("h2",{id:"\u5b9a\u4f4d\u5165\u53e3"},"\u5b9a\u4f4d\u5165\u53e3"),(0,r.kt)("p",null,"\u5728 compiler \u521d\u59cb\u5316\u5b8c\u6210\u4e4b\u540e\uff0c\u8c03\u7528\u4e86 compiler.compile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lib/Compiler.js"',title:'"lib/Compiler.js"'},"compile(callback) {\n  this.hooks.beforeCompile.callAsync(params, err => {\n    const compilation = this.newCompilation(params);\n\n    // ...\n    this.hooks.make.callAsync(compilation, err => {\n      // ...\n    });\n  });\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hooks.make.tap"),"\u662f\u4e00\u6b21\u7f16\u8bd1\u7684\u53d1\u4ee4\u67aa\uff0c\u5177\u4f53\u7684\u6267\u884c\u8fc7\u7a0b\u5728\u4e8b\u4ef6\u7684\u8ba2\u9605\u51fd\u6570\u5f53\u4e2d\u3002\u901a\u8fc7\u641c\u7d22 ",(0,r.kt)("inlineCode",{parentName:"p"},"hooks.make.tap")," \u627e\u5230\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"grep -rn hooks.make.tap ./lib\n")),(0,r.kt)("p",null,"\u5f97\u5230"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'./lib/AutomaticPrefetchPlugin.js:  compiler.hooks.make.tapAsync(\n./lib/PrefetchPlugin.js:  compiler.hooks.make.tapAsync("PrefetchPlugin", (compilation, callback) => {\n./lib/EntryPlugin.js:  compiler.hooks.make.tapAsync("EntryPlugin", (compilation, callback) => {\n./lib/DynamicEntryPlugin.js:  compiler.hooks.make.tapAsync(\n./lib/DllEntryPlugin.js:  compiler.hooks.make.tapAsync("DllEntryPlugin", (compilation, callback) => {\n')),(0,r.kt)("p",null,"make \u5177\u4f53\u505a\u7684\u4e8b\u60c5\u5c31\u5728\u8fd9\u51e0\u4e2a\u56de\u8c03\u51fd\u6570\u91cc\u9762\u3002\u4ece\u540d\u5b57\u53ef\u4ee5\u533a\u5206\u5927\u6982\u662f\u4ec0\u4e48\u5185\u5bb9\uff0c\u6211\u4eec\u4ece EntryPlugin.js \u5f00\u59cb\u7814\u7a76\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u662f\u7528\u6765\u5904\u7406\u914d\u7f6e\u7684 entry\uff0c\u7f16\u8bd1\u81ea\u7136\u662f\u4ece entry \u5f00\u59cb\u5904\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lib/EntryPlugin.js"',title:'"lib/EntryPlugin.js"'},'const EntryDependency = require("./dependencies/EntryDependency");\n\nclass EntryPlugin {\n  constructor(context, entry, name) {\n    this.context = context;\n    this.entry = entry;\n    this.name = name;\n  }\n\n  apply(compiler) {\n    // ...\n\n    compiler.hooks.make.tapAsync("EntryPlugin", (compilation, callback) => {\n      const { entry, name, context } = this;\n      const dep = EntryPlugin.createDependency(entry, name);\n      compilation.addEntry(context, dep, name, (err) => {\n        callback(err);\n      });\n    });\n  }\n\n  static createDependency(entry, name) {\n    const dep = new EntryDependency(entry);\n    dep.loc = { name };\n    return dep;\n  }\n}\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684 entry \u5bf9\u5e94\u5230 webpack.config.js \u91cc\u9762\u914d\u7f6e\u7684\u4e00\u4e2a\u5165\u53e3\u6587\u4ef6\uff0c\u6ce8\u610f\u662f\u4e00\u4e2a\u3002\u5bf9\u4e8e\u591a\u5165\u53e3\u7684\u914d\u7f6e\uff0c\u5728 compiler \u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"WebpackOptionsApply"),"\u91cc\u9762\u5df2\u7ecf\u5904\u7406\uff0c\u7406\u89e3\u4e3a\u4ee5\u4e0b\u6d41\u7a0b\u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"entries.forEach((entry) => {\n  addEntry(entry);\n});\n")),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u5165\u53e3"},"\u6dfb\u52a0\u5165\u53e3"),(0,r.kt)("p",null,"addEntry \u7684\u8c03\u7528\u94fe\u6bd4\u8f83\u957f\uff0c\u4e2d\u95f4\u5177\u4f53\u8fc7\u7a0b\u5c31\u4e0d\u5c55\u793a\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"addEntry -> addModuleChain -> handleModuleCreation -> factorizeModule --\x3e factorizeQueue.add\n")),(0,r.kt)("p",null,"factorizeQueue \u662f compilation \u7684\u6784\u9020\u51fd\u6570\u4e2d\u58f0\u660e\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const AsyncQueue = require("./util/AsyncQueue");\nclass Compilation {\n  constructor(compiler) {\n    // ...\u7565\n    this.factorizeQueue = new AsyncQueue({\n      name: "factorize",\n      parallelism: options.parallelism || 100,\n      processor: this._factorizeModule.bind(this),\n    });\n  }\n}\n')),(0,r.kt)("p",null,"AsyncQueue \u7c7b\u4e2d add \u65b9\u6cd5\u7684\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lib/util/AsyncQueue.js"',title:'"lib/util/AsyncQueue.js"'},"class AsyncQueue {\n  constructor({ name, parallelism, processor, getKey }) {\n    this._entries = new Map();\n    this._queued = [];\n  }\n  // ...\u7565\n\n  add(item, callback) {\n    // ...\u7565\n    this.hooks.beforeAdd.callAsync(item, (err) => {\n      // ...\u7565\n      const key = this._getKey(item);\n      const entry = this._entries.get(key);\n      if (entry !== undefined) {\n        entry.callbacks.push(callback);\n        return;\n      }\n\n      // highlight-next-line\n      const newEntry = new AsyncQueueEntry(item, callback);\n      this._entries.set(key, newEntry);\n      this._queued.push(newEntry);\n\n      // highlight-next-line\n      setImmediate(this._ensureProcessing);\n      this.hooks.added.call(item);\n    });\n  }\n}\n")),(0,r.kt)("p",null,"\u9605\u8bfb\u8fd9\u6bb5\u4ee3\u7801\uff0c\u9700\u8981\u5f97\u5230\u4e00\u4e2a\u6bd4\u8f83\u6982\u51b5\u7684\u7ed3\u8bba \u2014\u2014 \u8fd9\u4e2a add \u5230 added \u7684\u8fc7\u7a0b\uff0c\u662f\u505a\u4e86\u4ec0\u4e48\uff1f\u7b80\u5355\u5bf9\u6bd4\u4e00\u4e0b\uff0c\u8f93\u5165\u662f\u4ec0\u4e48\u7ed3\u6784\uff0c\u800c\u201c\u8f93\u51fa\u201d newEntry \u53c8\u662f\u4ec0\u4e48\u7ed3\u6784"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(p,{value:"item",label:"item",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  context: "/Users/esmyy/webpack-v5.0.0-beta.12"\n  currentProfile: undefined\n  originModule: null\n  dependencies: [\n    {\n      weak: false,\n      optional: false,\n      loc: {\n        name: "app",\n      },\n      request: "/Users/esmyy/webpack-v5.0.0-beta.12/debug/app.js",\n      userRequest: "/Users/esmyy/webpack-v5.0.0-beta.12/debug/app.js",\n      range: undefined,\n    }\n  ],\n}\n'))),(0,r.kt)(p,{value:"newEntry",label:"newEntry",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  item: {\n    // ...\u7565\n  },\n  callbacks = undefined,\n  result = undefined,\n  error = undefined,\n  callback: (err, newModule) => {\n    // ...\u7565\n  }\n}\n"))),(0,r.kt)(p,{value:"AsyncQueueEntry",label:"AsyncQueueEntry",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class AsyncQueueEntry {\n  constructor(item, callback) {\n    this.item = item;\n    this.callback = callback;\n    this.callbacks = undefined;\n    this.result = undefined;\n    this.error = undefined;\n  }\n}\n")))),"\u4ece\u4e0a\u9762\u7684\u5bf9\u6bd4\u770b\uff0citem \u53ea\u662f entry \u4f4d\u7f6e\u7684\u4e00\u4e2a\u63cf\u8ff0\uff0c newEntry \u662f\u505a\u4e86\u4e00\u4e9b\u5904\u7406\u7684\u7ed3\u6784\u5316\u63cf\u8ff0\u3002\u6ce8\u610f\u5bf9\u4e8e \\_ensureProcessing \u4f7f\u7528\u4e86\u5f02\u6b65\u7684 setImmediate\uff0c\u5219\u5bf9\u4e8e\u591a\u5165\u53e3\u989d\u914d\u7f6e\uff0caddEntry \u53ef\u4ee5\u7406\u89e3\u4e3a",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"entries.forEach((entry) => {\n  addEntry(entry);\n  setImmediate(this._ensureProcessing);\n});\n")),(0,r.kt)("p",null,"_","ensureProcessing \u867d\u7136\u662f\u5f02\u6b65\u6267\u884c\uff0c\u4f46\u4e5f\u662f\u6709\u987a\u5e8f\u7684\uff0c\u5165\u53e3\u7684\u6dfb\u52a0\u4ecd\u65e7\u662f\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\u4e00\u4e2a entry \u5904\u7406\u5b8c\u4e86\u8fdb\u5165\u4e0b\u4e00\u4e2a\u3002\n\u6700\u7ec8\u6240\u6709\u7684 entry \u4f1a\u88ab\u4fdd\u5b58\u5230 compilation.factorizeQueue.","_","entries \u91cc\u9762\u53bb\u3002"),(0,r.kt)("p",null,"_","ensureProcessing \u7684\u5b9e\u73b0\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="_ensureProcessing"',title:'"_ensureProcessing"'},"class AsyncQueue {\n  // ...\u7565\n  _ensureProcessing() {\n    while (this._activeTasks < this._parallelism && this._queued.length > 0) {\n      const entry = this._queued.pop();\n      this._activeTasks++;\n      entry.state = PROCESSING_STATE;\n      this._startProcessing(entry);\n    }\n    this._willEnsureProcessing = false;\n  }\n\n  _startProcessing(entry) {\n    // ...\u7565\n    this._processor(entry.item, (e, r) => {\n      inCallback = true;\n      this._handleResult(entry, e, r);\n    });\n    this.hooks.started.call(entry.item);\n  }\n}\n")),(0,r.kt)("p",null,"\u4ece\u961f\u5217\u4e2d\u53d6\u51fa entry\uff0c\u5bf9\u6bcf\u4e2a entry \u6807\u8bb0\u72b6\u6001\uff0c\u7136\u540e\u8c03\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"_processor"),"\u8fdb\u884c\u5904\u7406\u3002 ","_","processor \u662f\u5728 compilation \u91cc\u9762\u521d\u59cb\u5316\u65f6\u8c03\u7528\u7684\uff0c\u4e5f\u5c31\u662f compilation.","_","factorizeModule"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class Compilation {\n  // ...\u7565\n  _factorizeModule(\n    { currentProfile, factory, dependencies, originModule, context },\n    callback\n  ) {\n    factory.create(\n      {\n        contextInfo: {\n          issuer: originModule ? originModule.nameForCondition() : "",\n          compiler: this.compiler.name,\n        },\n        resolveOptions: originModule ? originModule.resolveOptions : undefined,\n        context: context\n          ? context\n          : originModule\n          ? originModule.context\n          : this.compiler.context,\n        dependencies: dependencies,\n      },\n      (err, result) => {\n        // ...\n        callback(null, newModule);\n      }\n    );\n  }\n}\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684 factory \u662f NormalModuleFactory\uff0c\u4ece\u5b57\u9762\u610f\u4e49\u4e0a\uff0cfactory.create \u662f\u6a21\u5757\u7684\u521b\u5efa\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u521b\u5efa\u4e0d\u597d\u7406\u89e3\uff0c\u5728\u4e00\u4e2a\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u600e\u6837\u53eb\u505a\u521b\u5efa\u6a21\u5757\uff0c\u662f\u8981\u8f6c\u6362\u4e3a\u4e00\u79cd\u600e\u6837\u7684\u65b9\u5f0f\u53bb\u63cf\u8ff0\u6a21\u5757\uff1f\u8fd9\u662f\u9700\u8981\u56de\u7b54\u7684\u95ee\u9898\u3002"),(0,r.kt)("admonition",{title:"\u5c0f\u7ed3",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5165\u53e3\u6a21\u5757\u7684\u6dfb\u52a0\uff0c\u662f\u4e00\u4e2a\u4e2a\u5b8c\u6210\u7684\uff0c\u662f addSingleEntry\uff0c\u4e0d\u662f addEntries\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4ece addEntry \u8c03\u7528\u5230 added\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u662f entry \u5bf9\u8c61\u7684\u521d\u59cb\u5316\uff0c\u505a\u597d\u4ece\u5165\u53e3\u5f00\u59cb\u89e3\u6790\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c\u3002\u6700\u7ec8\u6240\u6709\u7684 entry \u90fd\u88ab\u4fdd\u5b58\u5230\u4e86 compilation.","_","entries \u91cc\u9762\u53bb\uff0c\u7136\u540e\u518d\u5f00\u59cb\u9010\u4e2a\u53bb\u89e3\u6790\u6784\u5efa\u3002")),(0,r.kt)("h2",{id:"\u6a21\u5757\u89e3\u6790"},"\u6a21\u5757\u89e3\u6790"),(0,r.kt)("p",null,"\u524d\u9762\u5728 addEntry \u4e2d\uff0c\u5bf9\u4e8e entry \u53ea\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u63cf\u8ff0\uff0c\u505a\u4e86\u4e00\u4e9b\u521d\u59cb\u7684\u51c6\u5907\u5de5\u4f5c\uff0c\u5e76\u4e0d\u8db3\u4ee5\u63cf\u8ff0\u6574\u4e2a\u6a21\u5757\u7684\u5185\u5bb9\uff0c\u4e5f\u5c1a\u672a\u6d89\u53ca\u5230\u6a21\u5757\u7684\u8bfb\u5199\u7b49\u5185\u5bb9\u3002\u8fd8\u6ca1\u6709\u5230\u6700\u53d7\u671f\u5f85\u7684\u201c\u5f00\u59cb\u8bfb\u201d\u7684\u5730\u65b9"),(0,r.kt)("h3",{id:"createmodule"},"createModule"),(0,r.kt)("p",null,"\u4ece\u5b57\u9762\u4e0a\u770b\uff0cfactory \u5e38\u7528\u6765\u521b\u5efa\u5bf9\u8c61\uff0c\u4e0b\u9762\u770b\u4e00\u4e0b factory.create \u505a\u4e86\u4ec0\u4e48\u4e8b\u60c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lib/NormalModuleFactory.js"',title:'"lib/NormalModuleFactory.js"'},"class NormalModuleFactory extends ModuleFactory {\n  // ...\n  create(data, callback) {\n    const resolveData = {\n      // ...\u7565\n    };\n\n    this.hooks.beforeResolve.callAsync(resolveData, (err, result) => {\n      // ...\u7565\n      this.hooks.factorize.callAsync(resolveData, (err, module) => {\n        // ...\u7565\n        const factoryResult = {\n          module,\n          fileDependencies,\n          missingDependencies,\n          contextDependencies,\n        };\n\n        callback(null, factoryResult);\n      });\n    });\n  }\n}\n")),(0,r.kt)("p",null,"\u5728 create \u91cc\u9762\uff0c\u8fdb\u884c\u4e86\u6240\u8c13\u7684 resolve \u64cd\u4f5c\uff0c\u4e5f\u5c31\u662f\u8def\u5f84\u7684\u5904\u7406\uff0c\u5224\u65ad entry \u662f\u5426\u5b58\u5728\u7b49\uff0c\u4e0d\u540c\u7279\u522b\u5173\u6ce8\u3002\u5173\u952e\u5728\u4e8e\u8fd9\u4e2a hooks.factorize\uff0c\u53ef\u4ee5\u770b\u5230 factoryResult \u7684\u5b9a\u4e49\u4e2d\u5305\u542b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"xxxDependencies")," \u8fd9\u6837\u7684\u5185\u5bb9\uff0c\u5f88\u660e\u663e\uff0c\u5982\u679c\u8fd9\u91cc\u662f\u6a21\u5757\u7684\u4f9d\u8d56\uff0c\u90a3\u4e48\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"factorize")," \u4e8b\u4ef6\u7684\u6267\u884c\u4e2d\uff0c\u6bd4\u5982\u6d89\u53ca\u5230\u6a21\u5757\u7684\u8bfb\u53d6\u548c\u5206\u6790\u8fc7\u7a0b\uff0c\u4e0d\u7136\u600e\u4e48\u53ef\u80fd\u77e5\u9053\u6a21\u5757\u7684\u4f9d\u8d56?"),(0,r.kt)("p",null,"\u641c\u7d22 hooks.factorize \u627e\u5230\u6ce8\u518c\u5904\u7406\u51fd\u6570\u7684\u5730\u65b9\uff0c\u5728\u6784\u9020\u51fd\u6570\u4e2d\uff0c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="hooks.factorize"',title:'"hooks.factorize"'},'class NormalModuleFactory extends ModuleFactory {\n  constructor({ context, fs, resolverFactory, options }) {\n    // ...\u7565\n    this.hooks.factorize.tapAsync(\n      {\n        name: "NormalModuleFactory",\n        stage: 100,\n      },\n      (resolveData, callback) => {\n        this.hooks.resolve.callAsync(resolveData, (err, result) => {\n          // ...\u7565\n          this.hooks.afterResolve.callAsync(resolveData, (err, result) => {\n            // ...\u7565\n            // highlight-next-line\n            createdModule = new NormalModule(createData);\n            createdModule = this.hooks.module.call(\n              createdModule,\n              createData,\n              resolveData\n            );\n\n            return callback(null, createdModule);\n          });\n        });\n      }\n    );\n  }\n}\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684 NormalModule \u5c31\u662f\u6a21\u5757\u7684\u63cf\u8ff0\u7c7b\uff0c\u5728\u5185\u90e8\u6709\u6a21\u5757\u7684\u8bfb\u548c\u5206\u6790\u7b49\u73af\u8282\u3002\u5728\u521d\u59cb\u5316\u5b8c\u6210\u4e4b\u540e\uff0c\u8c03\u7528 hooks.module \u629b\u51fa\u4e8b\u4ef6\uff0c\u7136\u540e\u5c31\u8fdb\u884c\u4e86\u8fd4\u56de\u3002NormalModule \u6784\u9020\u51fd\u6570\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class NormalModule extends Module {\n  constructor({\n    type,\n    request,\n    userRequest,\n    rawRequest,\n    loaders,\n    resource,\n    matchResource,\n    parser,\n    generator,\n    resolveOptions,\n  }) {\n    super(type, getContext(resource));\n    this.request = request;\n    this.resource = resource;\n    this.loaders = loaders;\n    this.useSourceMap = false;\n    // ...\u7565\n  }\n  // ...\u7565\n}\n")),(0,r.kt)("p",null,"\u53ea\u662f\u7b80\u5355\u505a\u4e86\u4e00\u4e9b\u5fc5\u8981\u7684\u5c5e\u6027\u7684\u521d\u59cb\u5316\u3002\u90a3\u4e48\u7ecf\u8fc7\u5c42\u5c42\u56de\u8c03\u7684\u8fd4\u56de\uff0c\u6700\u7ec8\u5728 factorizeModule \u8c03\u7528\u7684\u56de\u8c03\u4e2d\uff0c\u8fdb\u884c\u6a21\u5757\u7684\u4e0b\u4e00\u6b65\u64cd\u4f5c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="handleModuleCreation"',title:'"handleModuleCreation"'},"factorizeModule(\n  { currentProfile, factory, dependencies, originModule, context },\n  (err, newModule) => {\n    // ...\u7565\n    this.addModule(newModule, (err, module) => {\n      this.buildModule(module, (err) => {\n        // ...\u7565\n        this.processModuleDependencies(module, (err) => {\n          // ...\u7565\n          callback(null, module);\n        });\n      });\n    });\n  }\n);\n")),(0,r.kt)("h3",{id:"addmodule"},"addModule"),(0,r.kt)("p",null,"\u4e0e factorizeQueue \u7c7b\u4f3c\uff0c addModule \u7684\u8c03\u7528\u8fc7\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"addModule -> addModuleQueue.add -> ... -> _addModule\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="addModule"',title:'"addModule"'},"class Compilation {\n  addModule(module, callback) {\n    this.addModuleQueue.add(module, callback);\n  }\n  _addModule(module, callback) {\n    // \u5224\u65ad\u7f13\u5b58\n    if (alreadyAddedModule) {\n      return callback(null, alreadyAddedModule);\n    }\n\n    // \u751f\u6210\u6a21\u5757\u540d\u79f0\n    // highlight-next-line\n    const cacheName = `${this.compilerPath}/module/${identifier}`;\n    this.cache.get(cacheName, null, (err, cacheModule) => {\n      // \u6dfb\u52a0\u5230 Map\n      // highlight-next-line\n      this._modules.set(identifier, module);\n\n      // \u6dfb\u52a0\u5230 Set\n      this.modules.add(module);\n\n      // \u6dfb\u52a0\u5230\u6a21\u5757\u5730\u56fe\n      // highlight-next-line\n      ModuleGraph.setModuleGraphForModule(module, this.moduleGraph);\n      callback(null, module);\n    });\n  }\n}\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u64cd\u4f5c\uff0c\u5c31\u662f\u6dfb\u52a0\u5230 compilation \u7684\u5c5e\u6027\u4e0a\uff0c\u4fdd\u5b58\u6a21\u5757\u63cf\u8ff0\u8bb0\u5f55\uff0c\u505a\u7f13\u5b58\u3002"))}y.isMDXComponent=!0}}]);