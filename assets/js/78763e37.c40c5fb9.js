"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,m=c["".concat(i,".").concat(f)]||c[f]||p[f]||l;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={},a="\u4e8c\u53c9\u6811",s={unversionedId:"data-structure/binary-tree",id:"data-structure/binary-tree",title:"\u4e8c\u53c9\u6811",description:"\u4e8c\u53c9\u6811\uff0c\u6bcf\u4e2a\u8282\u70b9\u6700\u591a\u6709\u4e24\u4e2a\u5b50\u6811\u7684\u6811\u7ed3\u6784\uff0c\u4e00\u822c\u79f0\u4f5c\u5de6\u5b50\u6811\uff0c\u53f3\u5b50\u6811\u3002",source:"@site/docs/80-data-structure/10-binary-tree.md",sourceDirName:"80-data-structure",slug:"/data-structure/binary-tree",permalink:"/docs/data-structure/binary-tree",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/80-data-structure/10-binary-tree.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u540c\u6e90\u4e0e\u8de8\u57df",permalink:"/docs/security/hello"},next:{title:"hello",permalink:"/docs/algorightm/hello"}},i={},u=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u6700\u5927\u6df1\u5ea6",id:"\u6700\u5927\u6df1\u5ea6",level:2},{value:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",id:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22",level:2},{value:"\u524d\u5e8f",id:"\u524d\u5e8f",level:3},{value:"\u4e2d\u5e8f",id:"\u4e2d\u5e8f",level:3},{value:"\u540e\u5e8f",id:"\u540e\u5e8f",level:3},{value:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",id:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22",level:2},{value:"\u4e25\u683c\u7684 BFS",id:"\u4e25\u683c\u7684-bfs",level:3},{value:"DFS \u5b9e\u73b0 BFS",id:"dfs-\u5b9e\u73b0-bfs",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e8c\u53c9\u6811"},"\u4e8c\u53c9\u6811"),(0,o.kt)("p",null,"\u4e8c\u53c9\u6811\uff0c\u6bcf\u4e2a\u8282\u70b9\u6700\u591a\u6709\u4e24\u4e2a\u5b50\u6811\u7684\u6811\u7ed3\u6784\uff0c\u4e00\u822c\u79f0\u4f5c\u5de6\u5b50\u6811\uff0c\u53f3\u5b50\u6811\u3002"),(0,o.kt)("p",null,"\u4e8c\u53c9\u6811\u76f8\u5173\u7684\u5e38\u89c1\u573a\u666f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u904d\u5386"),(0,o.kt)("li",{parentName:"ul"},"\u67e5\u627e"),(0,o.kt)("li",{parentName:"ul"},"\u6784\u9020")),(0,o.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="TreeNode.ts"',title:'"TreeNode.ts"'},"export class TreeNode {\n  val: number;\n  left: TreeNode | null;\n  right: TreeNode | null;\n  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {\n    this.val = val === undefined ? 0 : val;\n    this.left = left === undefined ? null : left;\n    this.right = right === undefined ? null : right;\n  }\n}\n\nconst _root = new TreeNode(1);\nconst left = new TreeNode(2);\nconst right = new TreeNode(3);\n\n_root.left = left;\n_root.right = right;\n\nexport const root = _root;\n")),(0,o.kt)("h2",{id:"\u6700\u5927\u6df1\u5ea6"},"\u6700\u5927\u6df1\u5ea6"),(0,o.kt)("p",null,"\u4ece\u6839\u5230\u6700\u8fdc\u53f6\u5b50\u8282\u70b9\u7684\u5c42\u6811\uff0c\u4e5f\u662f\u8282\u70b9\u6570\u3002"),(0,o.kt)("p",null,"\u6700\u5927\u6df1\u5ea6\u7684\u8ba1\u7b97\uff0c\u9700\u8981\u505a\u4e00\u6b21\u904d\u5386\uff0c\u6bcf\u4e00\u4e2a\u8282\u70b9\u8bb0\u5f55\u81ea\u8eab\u7684\u6df1\u5ea6\uff0c\u4f9d\u6b21\u5411\u4e0b\u65f6\u6df1\u5ea6+1\uff0c\u6bd4\u8f83\u5f53\u524d\u6df1\u5ea6\u548c\u5df2\u77e5\u7684\u6700\u5927\u6df1\u5ea6\uff0c\u53d6\u6700\u5927\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="maxDepth.ts"',title:'"maxDepth.ts"'},"const maxDepth = function (root: TreeNode) {\n  if (!root) {\n    return 0;\n  }\n\n  let max = 0;\n  const traversal = function foo(node: TreeNode, depth: number) {\n    max = Math.max(depth, max);\n    if (node.left) {\n      foo(node.left, depth + 1);\n    }\n\n    if (node.right) {\n      foo(node.right, depth + 1);\n    }\n  };\n\n  traversal(root, 1);\n  return max;\n};\n")),(0,o.kt)("h2",{id:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"},"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22"),(0,o.kt)("p",null,"DFS(Depth First Search) \u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u6709\u524d\u5e8f\u3001\u4e2d\u5e8f\u548c\u540e\u5e8f\u904d\u5386\u4e09\u79cd\u60c5\u51b5\uff0c\u4e00\u822c\u904d\u5386\u540e\u8fd4\u56de\u8282\u70b9\u503c\u6570\u7ec4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type TBinaryTraversalFn = (root: TreeNode | null) => number[];\n")),(0,o.kt)("p",null,"\u9012\u5f52\u7684\u5199\u6cd5\u6bd4\u8f83\u7b80\u5355"),(0,o.kt)("h3",{id:"\u524d\u5e8f"},"\u524d\u5e8f"),(0,o.kt)("p",null,"\u4e2d -> \u5de6 -> \u53f3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="preOrderTraversal.ts"',title:'"preOrderTraversal.ts"'},'const preOrderTraversal: TBinaryTraversalFn = function (root) {\n  if (!root) {\n    return [];\n  }\n\n  const result: TreeNode["val"][] = [];\n  const traversal = function foo(node: TreeNode) {\n    result.push(node.val);\n    if (node.left) {\n      foo(node.left);\n    }\n\n    if (node.right) {\n      foo(node.right);\n    }\n  };\n\n  traversal(root);\n  return result;\n};\n\nconsole.log(preOrderTraversal(root)); // [ 1, 2, 3 ]\n')),(0,o.kt)("h3",{id:"\u4e2d\u5e8f"},"\u4e2d\u5e8f"),(0,o.kt)("p",null,"\u5de6 -> \u4e2d -> \u53f3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="inOrderTraversal.ts"',title:'"inOrderTraversal.ts"'},'const inOrderTraversal: TBinaryTraversalFn = function (root) {\n  if (!root) {\n    return [];\n  }\n\n  const result: TreeNode["val"][] = [];\n  const traversal = function foo(node: TreeNode) {\n    if (node.left) {\n      foo(node.left);\n    }\n\n    result.push(node.val);\n\n    if (node.right) {\n      foo(node.right);\n    }\n  };\n\n  traversal(root);\n  return result;\n};\n\nconsole.log(inOrderTraversal(root)); // [ 2, 1, 3 ]\n')),(0,o.kt)("h3",{id:"\u540e\u5e8f"},"\u540e\u5e8f"),(0,o.kt)("p",null,"\u5de6-> \u53f3 -> \u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="postOrderTraversal.ts"',title:'"postOrderTraversal.ts"'},'const postOrderTraversal: TBinaryTraversalFn = function (root) {\n  if (!root) {\n    return [];\n  }\n\n  const result: TreeNode["val"][] = [];\n  const traversal = function foo(node: TreeNode) {\n    if (node.left) {\n      foo(node.left);\n    }\n\n    if (node.right) {\n      foo(node.right);\n    }\n\n    result.push(node.val);\n  };\n\n  traversal(root);\n  return result;\n};\n\nconsole.log(postOrderTraversal(root)); // [ 2, 3, 1 ]\n')),(0,o.kt)("h2",{id:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"},"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22"),(0,o.kt)("p",null,"BFS(Breadth First Search) \u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u4e5f\u53eb\u5c42\u5e8f\u904d\u5386\uff0c\u5b83\u662f\u6307\u9010\u5c42\u5730\uff0c\u4ece\u5de6\u5230\u53f3\u8bbf\u95ee\u6240\u6709\u8282\u70b9\uff0c\u518d\u5230\u4e0b\u4e00\u5c42\u3002"),(0,o.kt)("h3",{id:"\u4e25\u683c\u7684-bfs"},"\u4e25\u683c\u7684 BFS"),(0,o.kt)("h3",{id:"dfs-\u5b9e\u73b0-bfs"},"DFS \u5b9e\u73b0 BFS"),(0,o.kt)("p",null,"\u5982\u679c\u53ea\u662f\u8981\u6c42\u7ed3\u679c\u4e0a\u662f\u7b26\u5408 BFS\uff0c\u4e2d\u95f4\u8fc7\u7a0b\u4e0d\u4e00\u5b9a\u662f\u5148\u4e0a\u5c42\u8bbf\u95ee\u5b8c\u518d\u5230\u4e0b\u4e00\u5c42\uff0c\u90a3\u4e48\u5176\u5b9e\u5b9e\u73b0\u8d77\u6765\u662f\u6bd4\u8f83\u7b80\u5355\u7684\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u5b50\u5c42\u7684\u8bbf\u95ee\uff0c\u5fc5\u987b\u662f\u901a\u8fc7\u4e0a\u4e00\u5c42\uff0c\u5f97\u5230\u7b26\u5408 BFS \u7684\u8282\u70b9\u987a\u5e8f\uff0c\u53ea\u9700\u8981\u628a\u524d\u9762 ",(0,o.kt)("strong",{parentName:"p"},"\u6df1\u5ea6\u8ba1\u7b97")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"\u6df1\u5ea6\u904d\u5386")," \u505a\u4e00\u4e2a\u7ed3\u5408 \u2014\u2014 \u5728\u6df1\u5ea6\u904d\u5386\u65f6\uff0c\u8bb0\u4f4f\u8282\u70b9\u6240\u5728\u5c42\uff0c\u628a\u76f8\u540c\u5c42\u7684\u5143\u7d20\u653e\u5230\u4e00\u8d77\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="levelTraversal.ts"',title:'"levelTraversal.ts"'},'import { TreeNode } from "./TreeNode";\n\nconst root = require("./TreeNode");\nconst levelTraversal = function (root: TreeNode) {\n  if (!root) {\n    return [];\n  }\n\n  const result: TreeNode["val"][][] = [];\n  const traversal = function foo(node: TreeNode, depth: number) {\n    result[depth] = result[depth] || [];\n    result[depth].push(node.val);\n\n    if (node.left) {\n      foo(node.left, depth + 1);\n    }\n\n    if (node.right) {\n      foo(node.right, depth + 1);\n    }\n  };\n\n  traversal(root, 0);\n  return result;\n};\n\nconsole.log(levelTraversal(root)); // [ [ 1 ], [ 2, 3 ] ]\n')),(0,o.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"result")," \u4e8c\u7ef4\u6570\u7ec4\u7684 result","[i]"," \u5c31\u5bf9\u5e94\u7b2c i + 1 \u5c42\u7684\u5143\u7d20\u4ece\u5de6\u5230\u53f3\u3002\u505a\u4e00\u4e2a\u6241\u5e73\u5316\u5373\u5f97\u5230\u4e86\u5c42\u5e8f\u904d\u5386\u7684\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'function flat(list: number[][]): number[] {\n  return list.join(",").split(",").map(Number);\n}\n\nflat(result); // [ 1, 2, 3 ]\n')),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.cn/leetbook/read/data-structure-binary-tree/xes3em/"},"leetcode \u4e8c\u53c9\u6811")))}c.isMDXComponent=!0}}]);