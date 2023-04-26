"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),i=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=i(e.components);return o.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=i(t),c=r,k=m["".concat(u,".").concat(c)]||m[c]||p[c]||l;return t?o.createElement(k,a(a({ref:n},d),{},{components:t})):o.createElement(k,a({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var i=2;i<l;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var o=t(7462),r=(t(7294),t(3905));const l={},a="CommonJS",s={unversionedId:"JS/module/commonjs",id:"JS/module/commonjs",title:"CommonJS",description:"CommonJS \u89c4\u8303\u4e3b\u8981\u7528\u4e8e\u670d\u52a1\u5668\u7aef\u6a21\u5757\u5316\u4ee3\u7801\u7ec4\u7ec7",source:"@site/docs/03-JS/05-module/01-commonjs.md",sourceDirName:"03-JS/05-module",slug:"/JS/module/commonjs",permalink:"/docs/JS/module/commonjs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-JS/05-module/01-commonjs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u5757\u5316",permalink:"/docs/JS/module/"},next:{title:"AMD",permalink:"/docs/JS/module/amd"}},u={},i=[{value:"\u7528\u4f8b\u8bf4\u660e",id:"\u7528\u4f8b\u8bf4\u660e",level:2},{value:"\u6a21\u5757\u89e3\u6790\u8fc7\u7a0b",id:"\u6a21\u5757\u89e3\u6790\u8fc7\u7a0b",level:2},{value:"\u521d\u59cb\u5316 module",id:"\u521d\u59cb\u5316-module",level:3},{value:"\u8bfb\u53d6\u539f\u59cb\u5185\u5bb9",id:"\u8bfb\u53d6\u539f\u59cb\u5185\u5bb9",level:3},{value:"\u751f\u6210\u5bfc\u51fa\u5bf9\u8c61",id:"\u751f\u6210\u5bfc\u51fa\u5bf9\u8c61",level:3},{value:"module",id:"module",level:2},{value:"exports",id:"exports",level:2},{value:"require",id:"require",level:2},{value:"\u5b9e\u73b0\u8fc7\u7a0b",id:"\u5b9e\u73b0\u8fc7\u7a0b",level:3},{value:"\u6a21\u5757\u5206\u7c7b",id:"\u6a21\u5757\u5206\u7c7b",level:3},{value:"\u5185\u7f6e\u6a21\u5757",id:"\u5185\u7f6e\u6a21\u5757",level:5},{value:"\u5305\u540d",id:"\u5305\u540d",level:5},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"Q &amp; A",id:"q--a",level:2}],d={toc:i},m="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commonjs"},"CommonJS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/docs/latest-v16.x/api/modules.html"},"CommonJS")," \u89c4\u8303\u4e3b\u8981\u7528\u4e8e\u670d\u52a1\u5668\u7aef\u6a21\u5757\u5316\u4ee3\u7801\u7ec4\u7ec7"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9002\u7528\u4fa7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5173\u952e\u53d8\u91cf"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CommonJS"),(0,r.kt)("td",{parentName:"tr",align:null},"Server(Node)"),(0,r.kt)("td",{parentName:"tr",align:null},"module, module.exports, require, exports")))),(0,r.kt)("p",null,"CommonJS \u7684\u51e0\u4e2a\u6a21\u5757\u76f8\u5173\u7684\u6807\u8bc6\u7b26\uff0c\u5e76\u4e0d\u662f ECMAScript \u89c4\u8303\u91cc\u9762\u7684\u5173\u952e\u5b57"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(typeof module); // object\nconsole.log(typeof module.exports); // object\nconsole.log(typeof exports); // object\nconsole.log(typeof require); // function\n")),(0,r.kt)("p",null,"\u628a\u63e1\u672c\u8d28 \u2014\u2014 \u8fd9\u51e0\u4e2a\u5173\u952e\u5b57\uff0c\u90fd\u662f\u5bf9\u8c61\uff0c\u5bf9\u8c61\u65e0\u975e\u5c31\u662f\u65b9\u6cd5\uff0c\u5c5e\u6027\u8fd9\u4e9b\u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"\u7528\u4f8b\u8bf4\u660e"},"\u7528\u4f8b\u8bf4\u660e"),(0,r.kt)("p",null,"\u5728 CommonJS \u4e2d\uff0c\u6bcf\u4e2a\u6587\u4ef6\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u6a21\u5757\uff0c\u53ef\u4ee5\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u5185\u5bb9\uff0c\u4f7f\u7528 require \u5bfc\u5165\u5176\u4ed6\u6a21\u5757\uff0c\u4f7f\u7528 module.exports \u5bfc\u51fa\u81ea\u8eab\u7684\u5185\u5bb9\u3002\u5982\u4e0b\u5b9a\u4e49\u4e86\u4e00\u4e2a main --\x3e a --\x3e b \u7684\u5f15\u7528\u5173\u7cfb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// main.js\nconst a = require("./a");\nmodule.exports = {\n  name: "main",\n};\n\n// a.js\nconst b = require("./b");\nmodule.exports = {\n  name: "a",\n};\n\n// b.js\nmodule.exports = {\n  name: "b",\n};\n')),(0,r.kt)("p",null,"\u5982\u65e0\u7279\u522b\u8bf4\u660e\uff0c\u540e\u7eed\u7684\u4ecb\u7ecd\u5c06\u57fa\u4e8e\u8fd9\u4e2a\u5173\u7cfb\u8fdb\u884c\u3002"),(0,r.kt)("h2",{id:"\u6a21\u5757\u89e3\u6790\u8fc7\u7a0b"},"\u6a21\u5757\u89e3\u6790\u8fc7\u7a0b"),(0,r.kt)("p",null,"\u5728\u6bcf\u4e2a\u6a21\u5757\u4e2d\u90fd\u53ef\u4ee5\u901a\u8fc7 module.exports \u6765\u5bfc\u51fa\u5f53\u524d\u6a21\u5757\u7684\u5185\u5bb9\uff0c\u8fd9\u610f\u5473\u7740 module \u662f\u4e00\u4e2a\u5c40\u90e8\u53d8\u91cf\u3002\n\u5982\u679c module \u662f\u6a21\u5757\u4e4b\u95f4\u5171\u4eab\u7684\u5168\u5c40\u53d8\u91cf\uff0c\u662f\u4e0d\u80fd\u8fd9\u6837\u8986\u76d6 exports \u5c5e\u6027\u7684\u3002\u6bd4\u5982\uff0cprocess \u662f\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// main.js\nprocess.myWallet = {\n  balance: 0.5,\n};\n\n// a.js\nprocess.myWallet = {\n  balance: 0.01,\n};\n\n// b.js\nconsole.log(process.myWallet.balance); // 0.01\n")),(0,r.kt)("p",null,"\u540c\u4e00\u65f6\u523b\u53ea\u6709\u4e00\u4e2a\u503c\uff0c\u4e5f\u5c31\u65e0\u4ece\u5bfc\u51fa\u591a\u4e2a\u6a21\u5757\u7684\u5185\u5bb9\u4e86\u3002\u4e0d\u540c\u7684\u6a21\u5757\u91cc\u7684 module \u5bf9\u8c61\u4e0d\u662f\u540c\u4e00\u4e2a\uff0c\u6216\u8005\u8bf4\u6bcf\u4e2a\u6a21\u5757\u6587\u4ef6\u5bf9\u5e94\u4e00\u4e2a module \u5bf9\u8c61\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5b66\u4e60 CommonJS\uff0c\u5c31\u662f\u8981\u641e\u6e05\u695a\uff0c\u5982\u4f55\u5c06\u4e00\u4e2a\u201d\u6a21\u5757\u6587\u4ef6\u201c\uff0c\u8f6c\u6362\u4e3a\u4ee3\u8868\u6bcf\u4e2a\u6a21\u5757\u7684 module \u5bf9\u8c61\uff0c\u7136\u540e\u5982\u4f55\u4f7f\u7528\u3002")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316-module"},"\u521d\u59cb\u5316 module"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u6267\u884c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"node main.js")," \u7684\u65f6\u5019\uff0c\u521d\u59cb\u5316\u8fc7\u7a0b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Module._load"',title:'"Module._load"'},'Module._load = function (request, parent, isMain) {\n  // 1. \u5b50\u6a21\u5757\u52a0\u8f7d\uff0c\u7ef4\u62a4\u5f15\u7528\u5173\u7cfb\n  if (parent) {\n    // \u6dfb\u52a0\u5230 parent.children\uff0c\u61d2\u52a0\u8f7d\u7684\u5904\u7406\u7b49\n  }\n\n  // 2. \u5185\u7f6e\u6a21\u5757\u76f4\u63a5\u8fd4\u56de\n  if (StringPrototypeStartsWith(request, "node:")) {\n    const module = loadBuiltinModule(request.slice(5), request);\n    return module.exports;\n  }\n\n  // 3. \u5224\u65ad\u662f\u5426\u5df2\u7ecf\u7f13\u5b58\n  const filename = Module._resolveFilename(request, parent, isMain);\n  const cachedModule = Module._cache[filename];\n  if (cachedModule !== undefined) {\n    updateChildren(parent, cachedModule, true);\n    // ...\u5faa\u73af\u5f15\u7528\u63d0\u793a\u7b49\u7701\u7565\n    return cachedModule.exports;\n  }\n\n  // 4. \u5c1d\u8bd5\u52a0\u8f7d\u5185\u7f6e\u6a21\u5757\n  const mod = loadBuiltinModule(filename, request);\n  if (\n    mod?.canBeRequiredByUsers &&\n    BuiltinModule.canBeRequiredWithoutScheme(filename)\n  ) {\n    return mod.exports;\n  }\n\n  // 5. \u975e\u5185\u7f6e\u6a21\u5757\u5b9e\u4f8b\u5316\n  const module = new Module(filename, parent);\n  if (isMain) {\n    process.mainModule = module;\n    module.id = ".";\n  }\n\n  // 6. \u4fdd\u5b58\u63cf\u8ff0\u5bf9\u8c61\u7f13\u5b58\n  Module._cache[filename] = module;\n\n  // 7. \u52a0\u8f7d\u6a21\u5757\u771f\u5b9e\u5185\u5bb9\n  module.load(filename);\n  return module.exports;\n};\n\nModule._load("main.js", null, true);\n')),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b65\u7684\u4f5c\u7528\u662f\u5728\u89e3\u6790\u6bcf\u4e2a\u6a21\u5757\u7684\u5177\u4f53\u5185\u5bb9\u4e4b\u524d\uff0c\u4e3a\u6bcf\u4e2a\u6a21\u5757\u751f\u6210\u4e00\u4e2a\u63cf\u8ff0\u5bf9\u8c61 module\uff0c\u8fd9\u4e2a module \u5c31\u662f\u5728\u6bcf\u4e2a\u6a21\u5757\u4e2d\u76f4\u63a5\u4f7f\u7528\u7684\u90a3\u4e2a\u5173\u952e\u53d8\u91cf\u3002\n\u6bcf\u4e2a\u6a21\u5757\u90fd\u53ef\u4ee5\u7528\u8fd9\u6837\u4e00\u4e2a\u5bf9\u8c61\u53bb\u63cf\u8ff0\uff0c\u5bf9\u5e94\u7684 Module \u6784\u9020\u51fd\u6570\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Module(id = "", parent) {\n  this.id = id;\n\n  // path \u5176\u5b9e\u662f\u76ee\u5f55\u8def\u5f84\n  this.path = path.dirname(id);\n\n  // \u9ed8\u8ba4\u7684 exports \u662f {}\n  setOwnProperty(this, "exports", {});\n  moduleParentCache.set(this, parent);\n  updateChildren(parent, this, false);\n  this.filename = null;\n  // \u7528\u6765\u6807\u8bb0\u6a21\u5757\u662f\u5426\u5df2\u7ecf\u52a0\u8f7d\uff0c\u5728\u7f13\u5b58\uff0c\u5faa\u73af\u4f9d\u8d56\u7b49\u95ee\u9898\u4e0a\u53d1\u6325\u91cd\u8981\u4f5c\u7528\n  this.loaded = false;\n  this.children = [];\n}\n')),(0,r.kt)("p",null,"\u4ece\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u6bcf\u4e2a\u6a21\u5757\u7684\u9ed8\u8ba4\u503c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"\uff0c\u800c\u4e14\u5176\u4ed6\u7684\u5c5e\u6027\u9700\u8981\u67e5\u770b\u5177\u4f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," \u7684\u6267\u884c\u624d\u80fd\u786e\u8ba4\u3002"),(0,r.kt)("h3",{id:"\u8bfb\u53d6\u539f\u59cb\u5185\u5bb9"},"\u8bfb\u53d6\u539f\u59cb\u5185\u5bb9"),(0,r.kt)("p",null,"load \u51fd\u6570\u5c31\u662f module \u5177\u4f53\u5c5e\u6027\u503c\u7684\u8bbe\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Module.prototype.load = function (filename) {\n  this.filename = filename;\n  this.paths = Module._nodeModulePaths(path.dirname(filename));\n\n  // \u627e\u51fa\u62d3\u5c55\u540d\uff0c\u6bd4\u5982 main.js \u662f .js\n  // highlight-next-line\n  const extension = findLongestRegisteredExtension(filename);\n  // highlight-next-line\n  Module._extensions[extension](this, filename);\n\n  this.loaded = true;\n};\n")),(0,r.kt)("p",null,"\u5176\u4e2d\u5173\u952e\u7684\u662f\u6839\u636e\u62d3\u5c55\u540d\u8c03\u7528\u5bf9\u5e94\u7684 handler \u51fd\u6570\u53bb\u6267\u884c\u5177\u4f53\u5185\u5bb9\u7684\u52a0\u8f7d\u8fc7\u7a0b\u3002\n\u4ee5 .js \u4e3a\u4f8b\u8bf4\u660e\uff0c\u5904\u7406\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Module._extensions[".js"] = function (module, filename) {\n  // 1. \u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\u5185\u5bb9\u6216\u8bfb\u53d6\u5185\u5bb9\n  const cached = cjsParseCache.get(module);\n  let content;\n  if (cached?.source) {\n    content = cached.source;\n    cached.source = undefined;\n  } else {\n    content = fs.readFileSync(filename, "utf8");\n  }\n\n  // ...\n\n  module._compile(content, filename);\n};\n')),(0,r.kt)("p",null,"\u62d3\u5c55\u540d\u5904\u7406\u51fd\u6570\uff0c\u5c31\u662f\u6839\u636e\u62d3\u5c55\u540d\u8bfb\u53d6\u6a21\u5757\u7684 content\u3002\u8fd9\u91cc\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"module.loaded")," \u662f\u6574\u4e2a\u6a21\u5757\u8f6c\u6362\u5b8c\u6210\u4ee5\u540e\uff0c\u624d\u4f1a\u8bbe\u7f6e\u4e3a true\u3002"),(0,r.kt)("h3",{id:"\u751f\u6210\u5bfc\u51fa\u5bf9\u8c61"},"\u751f\u6210\u5bfc\u51fa\u5bf9\u8c61"),(0,r.kt)("p",null,"\u8bfb\u53d6\u4e4b\u540e\u662f\u89e3\u6790\u5176\u5185\u5bb9\uff0c\u6267\u884c content \u4e2d\u7684\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Module.prototype._compile"',title:'"Module.prototype._compile"'},"Module.prototype._compile = function compiler(content, filename) {\n  // 1. \u5305\u88f9\u6e90\u6a21\u5757\u5185\u5bb9\uff0c\u751f\u6210\u6a21\u5757\u5305\u88c5\u51fd\u6570\n  const compiledWrapper = wrapper(filename, content, this);\n\n  // 2. \u751f\u6210\u5173\u952e\u53d8\u91cf\n  const dirname = path.dirname(filename);\n  const require = makeRequireFunction(this, redirects);\n  let result;\n  const exports = this.exports;\n  const thisValue = exports;\n  const module = this;\n\n  // 3. \u4f20\u9012\u5173\u952e\u53d8\u91cf\uff0c\u6267\u884c\u8fd4\u56de\u6a21\u5757\u5185\u5bb9\n  return Reflect.apply(compiledWrapper, thisValue, [\n    exports,\n    require,\n    module,\n    filename,\n    dirname,\n  ]);\n};\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"_compile")," \u662f\u7406\u89e3 CommonJS \u7684\u5173\u952e\u4e2d\u7684\u5173\u952e\u3002\n\u5728\u8fd9\u91cc\u5bf9\u6a21\u5757\u672c\u8eab\u7684\u5185\u5bb9\u8fdb\u884c\u4e86\u4e00\u4e2a\u5305\u88c5\uff0c\u751f\u6210\u4e00\u4e2a\u6a21\u5757\u521b\u5efa\u51fd\u6570 compiledWrapper\uff0c\u7136\u540e\u751f\u6210\u6a21\u5757\u6240\u9700\u7684 exports, require \u7b49\u53c2\u6570\uff0c\u8c03\u7528 compiledWrapper \u5b8c\u6210\u4e86\u6a21\u5757\u7684\u89e3\u6790\u3002"),(0,r.kt)("p",null,"compiledWrapper \u5305\u88c5\u5b9e\u73b0\u8fc7\u7a0b\u6709\u4e9b\u590d\u6742\uff0c\u4f46\u57fa\u672c\u7684\u903b\u8f91\u662f\u7b80\u5355\u7684\uff0c\u53ef\u4ee5\u770b\u505a\u4e0b\u9762\u8fd9\u4e2a\u7b80\u5355\u5305\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * script: \u6bcf\u4e2a\u6a21\u5757\u7684\u5185\u5bb9\n */\nfunction wrapper(script: string) {\n  const wrapperArr = [\n    "(function (exports, require, module, __filename, __dirname) { ",\n    "\\n});",\n  ];\n  return wrapperArr[0] + script + wrapperArr[1];\n}\n')),(0,r.kt)("p",null,"\u6700\u7ec8\u6a21\u5757\u8bbe\u7f6e\u8fc7\u7a0b\uff0c\u5c31\u662f\u4f7f\u7528\u5173\u952e\u53d8\u91cf\uff0c\u6267\u884c\u5305\u88c5\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"script"),"\uff0c\u7406\u89e3\u4e3a eval \u6267\u884c\u5c31\u53ef\u4ee5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function compile() {\n  const script = wrapper(script: string);\n  const dirname = path.dirname(filename);\n  const require = makeRequireFunction(this, redirects);\n  const exports = this.exports;\n  const thisValue = exports;\n  const module = this;\n\n  eval(wrapper(script));\n}\n")),(0,r.kt)("p",null,"_","compile \u51fd\u6570\u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports")," \u5c31\u5305\u542b\u4e86\u6a21\u5757\u5bfc\u51fa\u7684\u5185\u5bb9\u3002"),(0,r.kt)("h2",{id:"module"},"module"),(0,r.kt)("p",null,"module \u662f Module \u7684\u5b9e\u4f8b\uff0c\u6bcf\u4e2a\u6a21\u5757\u91cc\u9762\u90fd\u6709\u4e00\u4e2a module \u5bf9\u8c61\uff0c\u4ee3\u8868\u5f53\u524d\u6a21\u5757\u3002\n\u53ef\u4ee5\u76f4\u63a5\u65ad\u70b9\u6216\u8005\u6253\u5370 module \u5bf9\u8c61\uff0c\u67e5\u770b\u5176\u5177\u4f53\u5185\u5bb9\u3002\u5982\u4e0b\uff0c\u5728 main.js \u6dfb\u52a0\u6253\u5370"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'const a = require("./a");\nmodule.exports = {\n  name: "main",\n};\n\nconsole.log(module);\n')),(0,r.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  // \u5b9a\u4e49\u81ea\u8eab\n  id: '.',\n  path: '/Users/esmyy/node/demo',\n  filename: '/Users/esmyy/node/demo/main.js',\n\n  // \u5bfc\u51fa\u5185\u5bb9\n  exports: {\n    name: 'main',\n  },\n\n  // \u52a0\u8f7d\u72b6\u6001\u6807\u8bb0\n  loaded: false,\n\n  // \u5f53\u524d\u6a21\u5757 require \u7684\u6a21\u5757\n  children: [\n    {\n      id: '/Users/esmyy/node/demo/a.js',\n      path: '/Users/esmyy/node/demo',\n      exports: {\n        name: 'a',\n      },\n      filename: '/Users/esmyy/node/demo/a.js',\n      loaded: true,\n      children: [\n        {\n          id: '/Users/esmyy/node/demo/b.js',\n          path: '/Users/esmyy/node/demo',\n          exports: {\n            name: 'b',\n          },\n          filename: '/Users/esmyy/node/demo/b.js',\n          loaded: true,\n          children: [],\n          paths: [\n            '/Users/esmyy/node/demo/node_modules',\n            '/Users/esmyy/node/node_modules',\n            '/Users/esmyy/node_modules',\n            '/Users/node_modules',\n            '/node_modules',\n          ],\n        },\n      ],\n      paths: [\n        '/Users/esmyy/node/demo/node_modules',\n        '/Users/esmyy/node/node_modules',\n        '/Users/esmyy/node_modules',\n        '/Users/node_modules',\n        '/node_modules',\n      ],\n    },\n  ],\n  // \u6a21\u5757\u67e5\u627e\u8def\u5f84\n  paths: [\n    '/Users/esmyy/node/demo/node_modules',\n    '/Users/esmyy/node/node_modules',\n    '/Users/esmyy/node_modules',\n    '/Users/node_modules',\n    '/node_modules',\n  ],\n};\n")),(0,r.kt)("p",null,"module \u5bf9\u8c61\u6e05\u6670\u7b80\u6d01\u5730\u63cf\u8ff0\u4e86\u6a21\u5757\u7684\u5185\u5bb9\uff0c\u5e76\u4e14\u901a\u8fc7 children \u7ef4\u62a4\u4e86\u6a21\u5757\u95f4\u7684\u5f15\u7528\u5173\u7cfb\u3002\n\u6709\u4e86 Module \u8fd9\u6837\u7684\u4e00\u4e2a\u6784\u9020\u51fd\u6570/\u7c7b\u578b\uff0c\u73b0\u5728\u53ef\u4ee5\u629b\u5f00\u6587\u4ef6\u7684\u6982\u5ff5\uff0c\u4ece\u5bf9\u8c61\u7684\u89d2\u5ea6\u53bb\u770b\u5f85\u6bcf\u4e00\u4e2a\u6a21\u5757\u3002"),(0,r.kt)("h2",{id:"exports"},"exports"),(0,r.kt)("p",null,"exports \u662f module.exports \u7684\u5f15\u7528\uff0c\u6700\u7ec8\u5916\u90e8\u80fd\u591f\u5f15\u7528\u662f\u7684 module \u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"exports = module.exports;\n")),(0,r.kt)("p",null,"\u5bf9 exports \u8d4b\u503c\u662f\u6ca1\u6709\u7528\u7684\uff0c\u4e5f\u5c31\u662f\u4e0d\u80fd\u76f4\u63a5\u8d4b\u503c\u505a\u9ed8\u8ba4\u5bfc\u51fa\uff0c\u628a exports \u5f53\u505a ES Module \u7684\u5177\u540d\u53d8\u91cf\u5bfc\u51fa\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'exports.a = "a";\nexports.foo = {};\n')),(0,r.kt)("p",null,"\u6700\u7b80\u5355\u7684\uff0c\u5c31\u662f exports \u4f7f\u7528\u65f6\uff0c\u59cb\u7ec8\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"exports.xxx")," \u5c5e\u6027\u8bbe\u7f6e\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"require"},"require"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"require")," \u672c\u8eab\u662f\u4e00\u4e2a\u51fd\u6570"),(0,r.kt)("h3",{id:"\u5b9e\u73b0\u8fc7\u7a0b"},"\u5b9e\u73b0\u8fc7\u7a0b"),(0,r.kt)("p",null,"require \u672c\u8eab\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4ece\u6211\u4eec\u4f7f\u7528\u4e0a\u6765\u8bf4\uff0c\u5f88\u660e\u663e\u8fd4\u56de\u7684\u7ed3\u679c\u663e\u7136\u5e94\u8be5\u662f\u6a21\u5757\u7684\u5f15\u7528\u3002require \u662f\u6bcf\u4e2a\u6a21\u5757\u4e2d\u7684\u53d8\u91cf\uff0c\u4e0d\u662f\u5bf9\u5916\u5bfc\u51fa\u7684\u5185\u5bb9\uff0c\n\u5728\u6bcf\u4e2a\u6a21\u5757\u4e2d\uff0crequire \u662f\u4e0d\u4e00\u6837\u7684\uff0c\u662f\u5728\u6a21\u5757\u89e3\u6790\u8fc7\u7a0b\u4e2d\u5b9a\u4e49\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const require = makeRequireFunction(module, redirects);\n\nfunction makeRequireFunction(mod, redirects) {\n  const Module = mod.constructor;\n\n  let require = function require(path) {\n    return mod.require(path);\n  };\n\n  // \u6a21\u5757\u8def\u5f84\u5904\u7406\n  function resolve(request, options) {\n    validateString(request, "request");\n    return Module._resolveFilename(request, mod, false, options);\n  }\n\n  require.resolve = resolve;\n\n  // \u901a\u8fc7 paths \u67e5\u627e\u6a21\u5757\n  function paths(request) {\n    validateString(request, "request");\n    return Module._resolveLookupPaths(request, mod);\n  }\n\n  resolve.paths = paths;\n\n  // \u4e0d\u540c\u6a21\u5757\u7684 require \u53c2\u6570\u4e2d\uff0c\u8fd9\u4e9b\u5c5e\u6027\u90fd\u662f\u4e00\u6837\u7684\n  setOwnProperty(require, "main", process.mainModule);\n  require.extensions = Module._extensions;\n  require.cache = Module._cache;\n\n  return require;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cache")," \u7b49\u5c5e\u6027\u662f\u5171\u4eab\u7684\u5bf9\u8c61\u5f15\u7528\uff0c\u5e76\u4e0d\u662f\u6bcf\u4e2a\u6a21\u5757\u79c1\u6709\u7684\uff0c\u8fd9\u662f\u907f\u514d\u5faa\u73af\u5bfc\u5165\uff0c\u91cd\u590d\u5bfc\u5165\u7684\u5173\u952e\u3002\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"resolve"),"\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"paths"),"\u8fd9\u4e9b\u5de5\u5177\u51fd\u6570\uff0c\u5176\u5b9e\u5904\u7406\u7684\u90fd\u662f\u548c\u5f53\u524d\u6a21\u5757\u76f8\u5173\u7684\u8ba1\u7b97\u3002\u6a21\u5757\u5185\u7684 require \u90fd\u662f\u57fa\u4e8e Module.prototype.require \u7684\u62d3\u5c55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Loads a module at the given file path. Returns that module\'s\n// `exports` property.\nModule.prototype.require = function (id) {\n  validateString(id, "id");\n  if (id === "") {\n    throw new ERR_INVALID_ARG_VALUE("id", id, "must be a non-empty string");\n  }\n  requireDepth++;\n  try {\n    return Module._load(id, this, /* isMain */ false);\n  } finally {\n    requireDepth--;\n  }\n};\n')),(0,r.kt)("p",null,"Module.","_","load \u8fd4\u56de\u7684\u662f\u88ab\u5bfc\u5165\u6a21\u5757\u7684 module.exports \u5bf9\u8c61\u3002"),(0,r.kt)("h3",{id:"\u6a21\u5757\u5206\u7c7b"},"\u6a21\u5757\u5206\u7c7b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"require")," \u5bfc\u5165\u7684\u5185\u5bb9\u53ef\u4ee5\u5206\u6210 3 \u7c7b"),(0,r.kt)("mermaid",{value:'  flowchart LR\n  id("require(id)")\n  subgraph builtin["\u5185\u7f6e\u6a21\u5757"]\n    fs("require(\'fs\')")\n    assert("require(\'node:fs\')")\n    other(...)\n  end\n  subgraph path[\u8def\u5f84]\n    relative("require(\'./a\')")\n    absolute("require(\'/opt/a\')")\n    other1(...)\n  end\n  subgraph pkg[\u5305\u540d]\n    lodash("require(\'lodash\')")\n    axios("require(\'axios\')")\n    other2(...)\n  end\n  id --- builtin\n  id --\x3e path\n  id --\x3e pkg'}),(0,r.kt)("p",null,"\u76f8\u5bf9\u8def\u5f84\u6216\u8005\u7edd\u5bf9\u8def\u5f84\u7684\u6bd4\u8f83\u597d\u627e\uff0c\u5c31\u662f resolve \u4e00\u4e0b\u7edd\u5bf9\u8def\u5f84\u5373\u53ef\uff0c\u5176\u4ed6\u4e24\u4e2a\u7684\u67e5\u627e\u8fc7\u7a0b\u6709\u4e00\u4e9b\u6ce8\u610f\u70b9"),(0,r.kt)("h5",{id:"\u5185\u7f6e\u6a21\u5757"},"\u5185\u7f6e\u6a21\u5757"),(0,r.kt)("p",null,"\u5185\u7f6e\u6a21\u5757\u7684\u5bfc\u5165\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6a21\u5757\u540d\u79f0\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"node:"),"\u524d\u7f00\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"node:"),"\u524d\u7f00\n\u53ef\u4ee5\u786e\u4fdd\u5bfc\u5165\u7684\u662f\u5185\u7f6e\u6a21\u5757\uff0c\u4e0d\u4f1a\u88ab\u8986\u76d6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const fakeFs = {\n  name: "fakeFs",\n};\nrequire.cache["fs"] = { exports: fakeFs };\nrequire.cache["node:fs"] = { exports: fakeFs };\nconsole.log(require("fs") === fakeFs); // true\nconsole.log(require("node:fs") === fakeFs); // false\n')),(0,r.kt)("h5",{id:"\u5305\u540d"},"\u5305\u540d"),(0,r.kt)("p",null,"\u5bf9\u4e8e npm \u5305\u7684\u67e5\u627e\uff0c\u5c06\u4f1a\u6309\u7167\u524d\u9762 ",(0,r.kt)("inlineCode",{parentName:"p"},"module.paths")," \u6570\u7ec4\u987a\u5e8f\u5c1d\u8bd5\u67e5\u627e\uff0c\u5c31\u662f\u4ece\u5f53\u524d\u76ee\u5f55\u4e00\u7ea7\u4e00\u7ea7\u5411\u4e0a\u627e node_modules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  paths: [\n    '/Users/esmyy/node/demo/node_modules',\n    '/Users/esmyy/node/node_modules',\n    '/Users/esmyy/node_modules',\n    '/Users/node_modules',\n    '/node_modules',\n  ],\n}\n")),(0,r.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5c06 CommonJS \u7684\u6a21\u5757\u6587\u4ef6\u5f53\u505a\u67d0\u79cd\u7279\u5b9a\u6a21\u677f\u683c\u5f0f\u7684\u6587\u4ef6\uff0c\u8fd9\u79cd\u6587\u4ef6\u4e0d\u88ab JS \u6240\u652f\u6301\uff0c\u6240\u4ee5\u9700\u8981\u8f6c\u6362\u6210\u67d0\u79cd\u88ab\u652f\u6301\u7684\u5f62\u5f0f\u3002\nCommonJS \u5de7\u5999\u5730\u5c06 require\uff0c exports \u5b9e\u73b0\u4e3a JS \u5df2\u7ecf\u652f\u6301\u7684\u5bf9\u8c61\uff0c\u628a\u6a21\u5757\u751f\u6210\u8fc7\u7a0b\u8f6c\u6362\u4e3a\u4e86\u4e00\u4e2a\u51fd\u6570\u6267\u884c\u7684\u8fc7\u7a0b\u3002CommonJS \u6a21\u5757\u7684\u5b9e\u73b0\u548c IIFE \u672c\u8d28\u662f\u76f8\u901a\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'(function (exports, require, module, __filename, __dirname) {\n  const module = {};\n  // ...\n  module.exports = {\n    name: "a",\n  };\n  return module;\n})(exports, require, module, __filename, __dirname);\n')),(0,r.kt)("p",null,"\u6a21\u5757\u89e3\u6790\u7684\u7ed3\u679c\u662f\u4e00\u4e2a Module \u5bf9\u8c61\uff0c\u7edf\u4e00\u7f13\u5b58\u5728 Module.","_","cache \u5f53\u4e2d\uff0c\u8fd9\u662f CommonJS \u5185\u90e8\u7684\u5e94\u7528\u3002\nrequire \u8fd4\u56de\u7684\u662f module.exports \u5bf9\u8c61\uff0c\u8fd9\u662f\u6bcf\u4e2a\u6a21\u5757\u5bf9\u5916\u4f7f\u7528\u7684\u5bf9\u8c61\u3002"),(0,r.kt)("h2",{id:"q--a"},"Q & A"),(0,r.kt)("p",null,"\u7406\u89e3 CommonJS \u6a21\u5757\uff0c\u6709\u5fc5\u8981\u770b\u4e00\u4e0b\u5b98\u65b9\u7684\u4ecb\u7ecd \u2014\u2014\n",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/docs/latest-v16.x/api/modules.html"},"Node.js Modules")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"module.exports \u548c exports \u6709\u4ec0\u4e48\u533a\u522b"),(0,r.kt)("div",null,"\u7b80\u5355\u6765\u8bf4\u521d\u59cb\u65f6 exports \u548c module.exports \u4e24\u8005\u6307\u5411\u540c\u4e00\u4e2a\u5f15\u7528\uff0c\u6700\u7ec8\u5bf9\u5916\u5bfc\u51fa\u662f\u7528\u7684 module.exports \u7684\u5f15\u7528\u3002\u6211\u7684\u5b9e\u8df5\u662f\u4e0d\u8981\u6df7\u7528\u4e24\u8005\uff0c\u59cb\u7ec8\u5bfc\u51fa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4e0d\u8981\u53bb\u7ea0\u7ed3\u90a3\u4e9b\u4e0d\u597d\u7684\u7528\u6cd5\u7684\u4e03\u4e03\u516b\u516b\u7684\u7834\u95ee\u9898\u3002")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"require \u5982\u4f55\u89e3\u51b3\u91cd\u590d\u52a0\u8f7d\u95ee\u9898"),(0,r.kt)("div",null,"\u6bcf\u4e2a\u6a21\u5757\u52a0\u8f7d\u4e4b\u540e\uff0c\u4ee5\u7edd\u5bf9\u8def\u5f84\u4e3a key\uff0c\u4fdd\u5b58\u5728 Module \u5bf9\u8c61\u7684\u9759\u6001\u5c5e\u6027\u4e0a\uff0c\u4e0b\u6b21\u5f15\u5165\u65f6\u5224\u65ad\u6709\u7f13\u5b58\u76f4\u63a5\u8fd4\u56de\u3002")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"CommonJS \u52a8\u6001\u52a0\u8f7d\u4e86\u89e3\u4e00\u4e0b\uff1f"),(0,r.kt)("div",null,"\u52a8\u6001\u4e0d\u7b49\u4e8e\u5f02\u6b65\uff0c\u53cd\u800c\u662f\u8868\u73b0\u7684\u540c\u6b65\u7684\u7279\u70b9\u3002CommonJS \u4e2d\uff0crequire \u8c03\u7528\u6216\u8005 exports \u7684\u8bbe\u7f6e\u662f\u540c\u6b65\u7684\uff0c\u4e0d\u540c\u5730\u65b9require\uff0c\u867d\u7136\u5f15\u7528\u662f\u4e00\u6837\u7684\uff0c\u4f46\u662f\u5bf9\u8c61\u7684\u5c5e\u6027\u53ef\u80fd\u8fd8\u6ca1\u8bbe\u7f6e\u4e0a\u3002\u52a8\u6001\u52a0\u8f7d\u5c31\u662f\u5c3d\u91cf\u614e\u7528\uff0c\u7136\u540e\u4fdd\u6301require\u5728\u9876\u90e8\uff0cexports \u5728\u5e95\u90e8\u662f\u4e00\u4e2a\u597d\u7684\u5b9e\u8df5\u3002")))}p.isMDXComponent=!0}}]);