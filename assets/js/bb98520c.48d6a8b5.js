"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(k,a(a({ref:t},c),{},{components:n})):o.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={},a="optimize",l={unversionedId:"frameworks/vue2/compiler/optimize",id:"frameworks/vue2/compiler/optimize",title:"optimize",description:"\u662f\u4e00\u4e2a AST\uff0coptimize \u662f\u5bf9 AST \u8fdb\u884c\u4f18\u5316",source:"@site/docs/05-frameworks/02-vue2/02-compiler/04-optimize.md",sourceDirName:"05-frameworks/02-vue2/02-compiler",slug:"/frameworks/vue2/compiler/optimize",permalink:"/docs/frameworks/vue2/compiler/optimize",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-frameworks/02-vue2/02-compiler/04-optimize.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"vue2",previous:{title:"parse",permalink:"/docs/frameworks/vue2/compiler/parse"},next:{title:"codegen",permalink:"/docs/frameworks/vue2/compiler/codegen"}},s={},p=[{value:"\u524d\u7f6e\u5185\u5bb9",id:"\u524d\u7f6e\u5185\u5bb9",level:2},{value:"optimize \u51fd\u6570",id:"optimize-\u51fd\u6570",level:2},{value:"\u6807\u8bb0\u9759\u6001\u8282\u70b9",id:"\u6807\u8bb0\u9759\u6001\u8282\u70b9",level:2},{value:"\u9759\u6001\u8282\u70b9\u5224\u65ad",id:"\u9759\u6001\u8282\u70b9\u5224\u65ad",level:2},{value:"\u6807\u8bb0\u9759\u6001\u6839\u8282\u70b9",id:"\u6807\u8bb0\u9759\u6001\u6839\u8282\u70b9",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"optimize"},"optimize"),(0,i.kt)("p",null,"\u662f\u4e00\u4e2a AST\uff0coptimize \u662f\u5bf9 AST \u8fdb\u884c\u4f18\u5316"),(0,i.kt)("p",null,"parse \u5403\u7684\u662f\u4ee3\u7801\u5b57\u7b26\u4e32\uff0coptimize \u5403\u7684\u662f AST\uff0c\u800c AST \u662f\u7279\u5b9a\u7ed3\u6784\u7684\u5bf9\u8c61\uff0c\u56e0\u6b64\u76f8\u5bf9\u4e8e\u89e3\u6790\u73af\u8282\uff0c\u4f18\u5316\u73af\u8282\u7b80\u5355\u5f88\u591a\uff0c\u7406\u89e3\u4e5f\u8f83\u4e3a\u5bb9\u6613\uff0c\u83ab\u614c\u3002"),(0,i.kt)("h2",{id:"\u524d\u7f6e\u5185\u5bb9"},"\u524d\u7f6e\u5185\u5bb9"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optimize")," \u51fd\u6570\u8c03\u7528\u7684\u4f4d\u7f6e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/compiler/index.js"),"\uff0c\u5185\u5bb9\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { parse } from "./parser/index";\nimport { optimize } from "./optimizer";\nimport { generate } from "./codegen/index";\nimport { createCompilerCreator } from "./create-compiler";\nexport const createCompiler = createCompilerCreator(function baseCompile(\n  template: string,\n  options: CompilerOptions\n): CompiledResult {\n  const ast = parse(template.trim(), options);\n  if (options.optimize !== false) {\n    optimize(ast, options);\n  }\n  const code = generate(ast, options);\n  return {\n    ast,\n    render: code.render,\n    staticRenderFns: code.staticRenderFns,\n  };\n});\n')),(0,i.kt)("p",null,"\u672c\u6587\u7814\u7a76\u7684\u662f\u8fd9\u4e00\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"optimize(ast, options);\n")),(0,i.kt)("h2",{id:"optimize-\u51fd\u6570"},"optimize \u51fd\u6570"),(0,i.kt)("p",null,"optimize \u5b9a\u4e49\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/compiler/optimizer.js"),"\uff0c\u4ee3\u7801\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Goal of the optimizer: walk the generated template AST tree\n * and detect sub-trees that are purely static, i.e. parts of\n * the DOM that never needs to change.\n *\n * Once we detect these sub-trees, we can:\n *\n * 1. Hoist them into constants, so that we no longer need to\n *    create fresh nodes for them on each re-render;\n * 2. Completely skip them in the patching process.\n */\nexport function optimize(root: ?ASTElement, options: CompilerOptions) {\n  if (!root) return;\n  isStaticKey = genStaticKeysCached(options.staticKeys || "");\n  isPlatformReservedTag = options.isReservedTag || no;\n\n  // first pass: mark all non-static nodes.\n  markStatic(root);\n  // second pass: mark static roots.\n  markStaticRoots(root, false);\n}\n')),(0,i.kt)("p",null,"\u6ce8\u91ca\u5df2\u7ecf\u5bf9\u4f18\u5316\u7684\u76ee\u7684\u8fdb\u884c\u4e86\u8bf4\u660e\uff0cAST \u6811\u4f18\u5316\u7684\u76ee\u7684\u662f\u68c0\u6d4b\u9759\u6001\u5b50\u6811\uff0c\u5bf9\u9759\u6001\u5b50\u6811\u505a\u6807\u8bb0\uff0c\u5bf9\u4e8e\u5728\u6e32\u67d3\u540e\u4e0d\u4f1a\u518d\u53d8\u5316\u7684\u5185\u5bb9\uff0c\u5728 patch \u8fc7\u7a0b\u4e2d\u76f4\u63a5\u8df3\u8fc7\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u521b\u5efa\uff0c\u6bd4\u5bf9\u8fc7\u7a0b\u3002"),(0,i.kt)("p",null,"\u6838\u5fc3\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"markStatic")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"markStaticRoots")," \u8fd9\u4e24\u4e2a\u51fd\u6570\u8c03\u7528\uff0c\u4e0b\u9762\u5355\u72ec\u8bf4\u660e\u3002"),(0,i.kt)("h2",{id:"\u6807\u8bb0\u9759\u6001\u8282\u70b9"},"\u6807\u8bb0\u9759\u6001\u8282\u70b9"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"markStatic")," \u4ee3\u7801\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'function markStatic(node: ASTNode) {\n  node.static = isStatic(node);\n  if (node.type === 1) {\n    // do not make component slot content static. this avoids\n    // 1. components not able to mutate slot nodes\n    // 2. static slot content fails for hot-reloading\n    if (\n      !isPlatformReservedTag(node.tag) &&\n      node.tag !== "slot" &&\n      node.attrsMap["inline-template"] == null\n    ) {\n      return;\n    }\n\n    // @block1\n    for (let i = 0, l = node.children.length; i < l; i++) {\n      const child = node.children[i];\n      markStatic(child);\n      if (!child.static) {\n        node.static = false;\n      }\n    }\n\n    // @block2\n    if (node.ifConditions) {\n      for (let i = 1, l = node.ifConditions.length; i < l; i++) {\n        const block = node.ifConditions[i].block;\n        markStatic(block);\n        if (!block.static) {\n          node.static = false;\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"markStatic \u9996\u5148\u8c03\u7528\u4e86 isStatic(node)\u6765\u8bbe\u7f6e node.static \u6807\u8bb0\u662f\u5426\u662f\u4e00\u4e2a\u9759\u6001\u8282\u70b9\u3002"),(0,i.kt)("p",null,"node.type \u4e3a 1 \u8868\u793a\u662f\u4e00\u4e2a\u666e\u901a\u8282\u70b9\uff0c\u8fdb\u5165 if \u5757\u4ee5\u540e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@block1"),"\uff1a\u904d\u5386\u5b50\u8282\u70b9\u9012\u5f52\u8c03\u7528 markStatic(child)\u8fdb\u884c static \u6807\u8bb0\uff0c\u6709\u4efb\u610f\u7684\u5b50\u8282\u70b9\u4e0d\u662f\u9759\u6001\u8282\u70b9\uff0c\u5219\u7236\u8282\u70b9\u7684 static \u8bbe\u4e3a false")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"@block2"),"\uff1a\u5bf9\u4e8e v-else-if \u548c v-else\uff0c\u5176\u5173\u7cfb\u7edf\u4e00\u6302\u5728\u5176\u524d\u9762\u7684 v-if \u6240\u5728\u5143\u7d20\u7684 node.ifConditions \u5c5e\u6027\u4e2d\uff0c\u5e76\u4e0d\u5728 children \u91cc\u9762\uff0c\u9700\u8981\u904d\u5386 ifConditions \u8fdb\u884c static \u6807\u8bb0\u3002"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5b98\u65b9\u6ce8\u91ca\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"markStatic")," \u7684\u4f5c\u7528\u5199\u7684\u662f ",(0,i.kt)("strong",{parentName:"p"},"mark all non-static nodes"),"\uff0c\u8fd9\u4e2a\u548c\u5176\u540d\u79f0\u662f\u76f8\u53cd\u7684\uff0c\u8fd9\u662f\u56e0\u4e3a\u5224\u65ad\u662f\u4ece\u76f8\u53cd\u7684\u65b9\u5411\u8fdb\u884c\u7684\u3002"),(0,i.kt)("p",{parentName:"admonition"},"mark \u4e86 non-static \u7684\uff0c\u5269\u4e0b\u7684\u5c31\u662f static \u7684\u4e86\uff0c\u6211\u4eec\u7406\u89e3 markStatic \u7684\u529f\u80fd\u662f mark all static nodes \u5c31\u53ef\u4ee5\u4e86\u3002")),(0,i.kt)("h2",{id:"\u9759\u6001\u8282\u70b9\u5224\u65ad"},"\u9759\u6001\u8282\u70b9\u5224\u65ad"),(0,i.kt)("p",null,"\u8bf4\u5b8c\u4e86\u4e3b\u8981\u6d41\u7a0b\uff0c\u6765\u770b\u4e00\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"isStatic")," \u51fd\u6570\u7684\u5b9e\u73b0\uff0c\u8fd9\u6709\u52a9\u4e8e\u7406\u89e3\u4ec0\u4e48\u662f\u6240\u8c13\u7684\u9759\u6001\u8282\u70b9\uff0c\u4ee3\u7801\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function isStatic(node: ASTNode): boolean {\n  if (node.type === 2) {\n    // expression\n    return false;\n  }\n  if (node.type === 3) {\n    // text\n    return true;\n  }\n  return !!(\n    node.pre ||\n    (!node.hasBindings && // no dynamic bindings\n      !node.if &&\n      !node.for && // not v-if or v-for or v-else\n      !isBuiltInTag(node.tag) && // not a built-in\n      isPlatformReservedTag(node.tag) && // not a component\n      !isDirectChildOfTemplateFor(node) &&\n      Object.keys(node).every(isStaticKey))\n  );\n}\n")),(0,i.kt)("p",null,"\u9996\u5148\u8865\u5145\u8bf4\u660e\u4e00\u4e0b node.type 3 \u4e2a\u53ef\u80fd\u7684\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"node.type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u542b\u4e49"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"AST \u8282\u70b9\u9ed8\u8ba4\u503c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"expression\uff0c\u52a8\u6001\u8282\u70b9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u7eaf\u6587\u672c")))),(0,i.kt)("p",null,"\u6700\u7b80\u5355\u7684\u5224\u65ad\u662f node.type \u7b49\u4e8e 3 \u6216\u8005\u4f7f\u7528\u4e86 v-pre \u6307\u4ee4\uff0c\u5176\u4ed6\u60c5\u51b5\u9700\u8981\u540c\u65f6\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"!hasBindings\uff1a\u5373\u6ca1\u7ed1\u5b9a\u52a8\u6001\u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},"!node.if\uff1a\u6ca1\u6709 v-if"),(0,i.kt)("li",{parentName:"ul"},"!node.for\uff1a\u6ca1\u6709 v-for"),(0,i.kt)("li",{parentName:"ul"},"!isBuiltInTag\uff1a\u4e0d\u662f slot \u548c component"),(0,i.kt)("li",{parentName:"ul"},"!isPlatformReservedTag\uff1a\u4e0d\u662f HTML \u539f\u751f\u6807\u7b7e"),(0,i.kt)("li",{parentName:"ul"},"!isDirectChildOfTemplateFor\uff1a\u4e0d\u662f for \u6216\u8005 template \u7684\u76f4\u63a5\u5b50\u5143\u7d20"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u5c5e\u6027\u90fd\u662f\u9759\u6001\u5c5e\u6027")),(0,i.kt)("h2",{id:"\u6807\u8bb0\u9759\u6001\u6839\u8282\u70b9"},"\u6807\u8bb0\u9759\u6001\u6839\u8282\u70b9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function markStaticRoots(node: ASTNode, isInFor: boolean) {\n  if (node.type === 1) {\n    if (node.static || node.once) {\n      node.staticInFor = isInFor;\n    }\n    // For a node to qualify as a static root, it should have children that\n    // are not just static text. Otherwise the cost of hoisting out will\n    // outweigh the benefits and it's better off to just always render it fresh.\n    if (\n      node.static &&\n      node.children.length &&\n      !(node.children.length === 1 && node.children[0].type === 3)\n    ) {\n      node.staticRoot = true;\n      return;\n    } else {\n      node.staticRoot = false;\n    }\n    if (node.children) {\n      for (let i = 0, l = node.children.length; i < l; i++) {\n        markStaticRoots(node.children[i], isInFor || !!node.for);\n      }\n    }\n    if (node.ifConditions) {\n      for (let i = 1, l = node.ifConditions.length; i < l; i++) {\n        markStaticRoots(node.ifConditions[i].block, isInFor);\n      }\n    }\n  }\n}\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5df2\u7ecf\u5224\u65ad\u51fa\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," \u6216\u8005\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"v-once")," \u7684\u7ed3\u70b9\uff0c\u5982\u679c\u662f\u5728 for \u5faa\u73af\u91cc\u9762\uff0c\u5c31\u6807\u8bb0 staticInFor \u4e3a true\uff0c\u8fd9\u4e2a\u5e94\u8be5\u5728\u540e\u9762\u4f1a\u6709\u7528\u5230\uff0c\n\u518d\u63a5\u4e0b\u6765\u5c31\u662f\u9012\u5f52\u5bf9 children \u548c ifConditions \u91cc\u9762\u7684\u8282\u70b9\u8fdb\u884c\u904d\u5386\u548c\u6807\u8bb0\u3002"),(0,i.kt)("p",null,"\u4ee3\u7801\u4e2d\u7684\u8fd9\u5757\u6ce8\u91ca"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// For a node to qualify as a static root, it should have children that\n// are not just static text. Otherwise the cost of hoisting out will\n// outweigh the benefits and it's better off to just always render it fresh.\n")),(0,i.kt)("p",null,"\u662f\u8bf4\u5982\u679c\u662f\u5143\u7d20\u5185\u90e8\u53ea\u6709\u4e00\u6bb5\u7eaf\u6587\u672c\uff0c\u5c31\u6ca1\u5fc5\u8981\u6807\u8bb0\uff0cstaticRoot \u610f\u601d\u662f\u6307\u90a3\u4e9b\u5305\u542b\u5b50\u5143\u7d20\u7684\u9759\u6001\u8282\u70b9\uff0c\u5982\u679c\u53ea\u6709\u6587\u672c\uff0c\u5c31\u50cf\u662f\u53f6\u5b50\u8282\u70b9\u4e86\uff0c\u6ca1\u6709 root \u7684\u8bf4\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<span>hello world</span>\n")),(0,i.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u5982\u679c\u6807\u8bb0\u4e3a staticRoot \u4ed8\u51fa\u6bd4\u6536\u76ca\u8fd8\u5927\uff0c\u5c31\u5f97\u4e0d\u507f\u5931\uff0c\u76f4\u63a5\u8ba9\u5b83\u4fdd\u6301\u6700\u65b0\u5c31\u884c\u3002"),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"optimize \u5c31\u662f\u6df1\u5ea6\u904d\u5386 AST\uff0c\u68c0\u6d4b\u6bcf\u4e2a\u5b50\u6811\u662f\u4e0d\u662f\u9759\u6001\u8282\u70b9\uff0c\u5bf9 AST \u4e2d\u7684\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u6807\u8bb0\u4e86 static \u5c5e\u6027\uff0c\u5bf9\u4e8e type \u4e3a 1 \u7684\u666e\u901a\u5143\u7d20\uff0c\u8fd8\u6807\u8bb0\u4e86 staticRoot \u5c5e\u6027\uff0c\u8fd9\u5728\u540e\u9762\u7684\u4ee3\u7801\u751f\u6210\u8fc7\u7a0b\u4e2d\u4f1a\u7528\u5230\u3002"),(0,i.kt)("p",null,"static \u662f\u53ea\u9488\u5bf9\u5355\u4e2a\u8282\u70b9\u7684\uff0cstaticRoot \u8868\u793a\u8fd9\u4e2a\u8282\u70b9\u7684\u6574\u4e2a\u5b50\u6811\u90fd\u662f\u9759\u6001\u7684\uff0c\u8fd9\u662f\u4e24\u8005\u7684\u533a\u522b\u3002"),(0,i.kt)("p",null,"\u81f3\u6b64\u6211\u4eec\u77e5\u9053 optimize \u505a\u4e86\u4ec0\u4e48\uff0c\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u8981\u8fd9\u4e48\u505a\uff0c\u9700\u8981\u77e5\u9053 static\uff0cstaticRoot \u6807\u8bb0\u5728\u540e\u9762\u662f\u5982\u4f55\u4f7f\u7528\u7684\uff0c\u8fd9\u662f\u4e0b\u4e00\u6b65\u8981\u7814\u7a76\u7684\u5185\u5bb9\u3002"))}d.isMDXComponent=!0}}]);