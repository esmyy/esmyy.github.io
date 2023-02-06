"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),m=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return l.createElement(o.Provider,{value:n},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(t),c=a,d=u["".concat(o,".").concat(c)]||u[c]||v[c]||r;return t?l.createElement(d,s(s({ref:n},p),{},{components:t})):l.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<r;m++)s[m]=t[m];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=t(7462),a=(t(7294),t(3905));const r={},s="Node",i={unversionedId:"project/env/node",id:"project/env/node",title:"Node",description:"Node \u6211\u4f7f\u7528 nvm \u8fdb\u884c\u7ba1\u7406",source:"@site/docs/10-project/01-env/03-node.md",sourceDirName:"10-project/01-env",slug:"/project/env/node",permalink:"/docs/project/env/node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/10-project/01-env/03-node.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u8f91\u5668",permalink:"/docs/project/env/editor"},next:{title:"Git",permalink:"/docs/project/env/git"}},o={},m=[{value:"nvm \u5b89\u88c5",id:"nvm-\u5b89\u88c5",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"nvm.sh",id:"nvmsh",level:2},{value:"nvm use",id:"nvm-use",level:2},{value:"nvm alias",id:"nvm-alias",level:2},{value:"\u8bbe\u7f6e\u9ed8\u8ba4\u7248\u672c",id:"\u8bbe\u7f6e\u9ed8\u8ba4\u7248\u672c",level:3},{value:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u522b\u540d",id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u522b\u540d",level:3},{value:"reinstall",id:"reinstall",level:2},{value:"\u4e00\u70b9\u5c0f\u542f\u53d1",id:"\u4e00\u70b9\u5c0f\u542f\u53d1",level:2}],p={toc:m};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node"},"Node"),(0,a.kt)("p",null,"Node \u6211\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," \u8fdb\u884c\u7ba1\u7406"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions")),(0,a.kt)("p",null,"\u672c\u6587\u4ee5 zsh \u4e2d\u4f7f\u7528 nvm \u4e3a\u4f8b\uff0c\u770b\u4e00\u4e0b nvm \u548b\u641e\u7684\uff0c\u8bb0\u4e00\u4e9b\u503c\u5f97\u4e00\u8bf4\u7684\u5730\u65b9"),(0,a.kt)("h2",{id:"nvm-\u5b89\u88c5"},"nvm \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash\n\n# or\nwget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u65f6\u4f1a\u5728 zsh \u7684\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc"),"\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="~/.zshrc"',title:'"~/.zshrc"'},'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\n')),(0,a.kt)("p",null,"\u65b0\u589e\u7684\u914d\u7f6e\u4e0d\u4f1a\u5728\u5df2\u6253\u5f00\u7684\u7ec8\u7aef\u7a97\u53e3\u751f\u6548\uff0c\u9700\u8981\u6267\u884c\u4e00\u4e0b\u5237\u65b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.zshrc\n")),(0,a.kt)("p",null,"\u5982\u679c\u6267\u884c nvm \u547d\u4ee4\uff0c\u9047\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"command not found")," \u7684\u63d0\u793a\uff0c\u8981\u4e48\u662f .zshrc \u6ca1\u6709\u6dfb\u52a0\u6210\u529f load \u7684\u4e24\u884c\u4ee3\u7801\uff0c\u8981\u4e48\u662f\u6ca1\u6709\u5237\u65b0\u3002"),(0,a.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{11,15,20}","{11,15,20}":!0},".\n\u251c\u2500\u2500 CODE_OF_CONDUCT.md\n\u251c\u2500\u2500 CONTRIBUTING.md\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 GOVERNANCE.md\n\u251c\u2500\u2500 LICENSE.md\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 PROJECT_CHARTER.md\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 ROADMAP.md\n\u251c\u2500\u2500 alias\n\u251c\u2500\u2500 bash_completion\n\u251c\u2500\u2500 install.sh\n\u251c\u2500\u2500 nvm-exec\n\u251c\u2500\u2500 nvm.sh\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 rename_test.sh\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 update_test_mocks.sh\n\u2514\u2500\u2500 versions\n")),(0,a.kt)("p",null,"\u503c\u5f97\u5173\u6ce8\u7684\u662f\u9ad8\u4eae\u7684 3 \u4e2a\u5185\u5bb9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nvm.sh: nvm \u5de5\u5177\u4ee3\u7801\u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},"alias: node \u7248\u672c\u53f7\u522b\u540d\u5b58\u50a8"),(0,a.kt)("li",{parentName:"ul"},"versions: \u4e0d\u540c\u7248\u672c node \u6240\u5728")),(0,a.kt)("p",null,"\u672c\u6587\u5c06\u4f1a\u89e3\u91ca nvm.sh \u548c alias \u7684\u4e00\u4e9b\u4f5c\u7528\u53ca\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"nvmsh"},"nvm.sh"),(0,a.kt)("p",null,"\u5b89\u88c5\u65f6\u5728",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc"),"\u6dfb\u52a0\u7684\u4e24\u884c\u4ee3\u7801\uff0c\u503c\u5f97\u5173\u6ce8\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="~/.zshrc"',title:'"~/.zshrc"'},'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm\n')),(0,a.kt)("p",null,"\u7b2c\u4e00\u884c\u6307\u660e\u4e86 nvm \u76f8\u5173\u7684\u5185\u5bb9\u6240\u5728\u7684\u76ee\u5f55 \u2014\u2014 .nvm\uff0c\u7b2c\u4e8c\u884c\u901a\u8fc7\u52a0\u8f7d .nvm/nvm.sh\uff0c\u52a0\u8f7d\u4e86 nvm \u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm.sh")," \u91cc\u9762\u5305\u542b\u4e00\u5806\u51fd\u6570\uff0c\u7b80\u5316\u793a\u610f\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="~/.nvm/nvm.sh"',title:'"~/.nvm/nvm.sh"'},"nvm_ls() {\n  # ...\n}\nnvm_ls_remote() {\n  # ...\n}\nnvm() {\n  # ...\u5206\u53d1\u5904\u7406\n}\n# ...\n")),(0,a.kt)("p",null,"nvm \u51fd\u6570\u662f\u901a\u7528\u5165\u53e3\uff0c\u901a\u8fc7\u5b83\u6765\u5224\u65ad\u53c2\u6570\uff0c\u8fdb\u884c\u529f\u80fd\u7684\u5206\u53d1\u5904\u7406\u3002\u6bd4\u5982"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nvm ls")," \u5206\u53d1\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"nvm_ls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nvm ls-remote")," \u5206\u53d1\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"nvm_ls_remote"))),(0,a.kt)("p",null,"\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"nvm_ls")," \u8fd9\u4e9b\u51fd\u6570\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," \u51fd\u6570\u4e00\u6837\uff0c\u90fd\u88ab\u52a0\u8f7d\u5230\u4e86\u7ec8\u7aef\u73af\u5883\u4e2d\uff0c\n\u6240\u4ee5\u5728 zsh \u7ec8\u7aef\u4e2d\u76f4\u63a5\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"nvm_ls"),"\u540c\u6837\u53ef\u4ee5\u5f97\u5230\u9884\u671f\u7684\u7ed3\u679c\u3002"),(0,a.kt)("h2",{id:"nvm-use"},"nvm use"),(0,a.kt)("p",null,"use \u662f nvm \u6700\u5e38\u7528\u7684\u53c2\u6570\uff0c\u652f\u6301\u4f7f\u7528\u7248\u672c\u7684\u5168\u540d\u3001\u524d\u7f00\uff0c\u522b\u540d\u6765\u5207\u6362\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nvm use"),"\u7684\u5904\u7406\u51fd\u6570\u91cc\u9762\u6709\u8fd9\u6837\u4e00\u6bb5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Change current version\nPATH="$(nvm_change_path "${PATH}" "/bin" "${NVM_VERSION_DIR}")"\nexport PATH\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nvm_change_path"),"\u662f\u5c06\u65b0\u7684\u7248\u672c\u7684 node \u7684\u5730\u5740\uff0c\u6dfb\u52a0\u5230 PATH\uff0cexport \u5230\u5f53\u524d\u5f53\u524d\u7ec8\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ echo $PATH\n/Users/esmyy/.nvm/versions/node/v14.19.2/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin\n\u279c  ~ nvm use 16\nNow using node v16.19.0 (npm v8.19.3)\n\u279c  ~ echo $PATH\n/Users/esmyy/.nvm/versions/node/v16.19.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin\n\u279c  ~\n")),(0,a.kt)("p",null,"\u4f7f\u7528 export \u5bfc\u51fa\u7684\u53d8\u91cf\uff0c\u53ea\u662f\u4e34\u65f6\u5207\u6362\uff0c\u5728\u5f53\u524d\u7ec8\u7aef\u7a97\u53e3\u6709\u6548\uff0c\u6240\u4ee5\u6362\u5230\u65b0\u7684\u4e00\u4e2a\u7ec8\u7aef\uff0cnode \u8fd8\u662f\u4e4b\u524d\u7684\u7248\u672c\u3002"),(0,a.kt)("h2",{id:"nvm-alias"},"nvm alias"),(0,a.kt)("p",null,"\u5176\u4e2d\u5df2\u5b89\u88c5\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"lts")," node \u7248\u672c\u5177\u6709\u522b\u540d\uff0c\u4fdd\u5b58\u5728",(0,a.kt)("inlineCode",{parentName:"p"},".nvm/alias"),"\u76ee\u5f55\u91cc\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"gallium"),"\uff0c\u5176\u5185\u5bb9\u5c31\u662f\u5bf9\u5e94\u7684\u7248\u672c\u53f7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title=".nvm/alias/lts/gallium"',title:'".nvm/alias/lts/gallium"'},"v16.19.0\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nvm alias")," \u5c31\u662f\u5217\u51fa\u8fd9\u4e9b alias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"{2,7-100}","{2,7-100}":!0},"\u279c nvm alias\ndefault -> 14 (-> v14.19.2)\niojs -> N/A (default)\nunstable -> N/A (default)\nnode -> stable (-> v19.4.0) (default)\nstable -> 19.4 (-> v19.4.0) (default)\nlts/* -> lts/hydrogen (-> v18.13.0)\nlts/argon -> v4.9.1 (-> N/A)\nlts/boron -> v6.17.1 (-> N/A)\nlts/carbon -> v8.17.0 (-> N/A)\nlts/dubnium -> v10.24.1 (-> N/A)\nlts/erbium -> v12.22.12 (-> N/A)\nlts/fermium -> v14.21.2 (-> N/A)\nlts/gallium -> v16.19.0\n")),(0,a.kt)("p",null,"\u5176\u4e2d\u9ad8\u4eae\u90e8\u5206 ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"lts/x")," \u662f\u4fdd\u5b58\u5728 alias \u76ee\u5f55\u4e0b\u5bf9\u5e94\u7684\u6587\u4ef6\u3002\u5176\u4ed6\u51e0\u4e2a\u505a\u4e00\u4e0b\u8bf4\u660e"),(0,a.kt)("h3",{id:"\u8bbe\u7f6e\u9ed8\u8ba4\u7248\u672c"},"\u8bbe\u7f6e\u9ed8\u8ba4\u7248\u672c"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u9ed8\u8ba4\u7248\u672c\uff0c\u5c31\u662f\u4fee\u6539 ",(0,a.kt)("strong",{parentName:"p"},"default")," \u8fd9\u4e2a alias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nvm alias default v14.19.2\n")),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," \u53d8\u91cf\u5728\u5f53\u524d\u7ec8\u7aef\u8bb0\u5f55\u7248\u672c\u4e0d\u540c\uff0c\u8981\u6301\u4e45\u8bb0\u5f55\uff0c\u663e\u7136\u662f\u6709\u4e00\u4e2a\u78c1\u76d8\u6587\u4ef6\u53bb\u6301\u4e45\u4fdd\u5b58\u8bbe\u7f6e\u7684\u7248\u672c\uff0c\u8fd9\u4e2a\u7248\u672c\u4fdd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".nvm/alias/default")," \u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title=".nvm/alias/default"',title:'".nvm/alias/default"'},"v14.19.2\n")),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u522b\u540d"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u522b\u540d"),(0,a.kt)("p",null,"\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u522b\u540d\uff0c\u8fd9\u662f\u6709\u70b9\u610f\u601d\u7684\u5c0f\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6211\u4f1a\u8bbe\u7f6e\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," \u522b\u540d\uff0c\u6807\u8bb0\u5de5\u4f5c\u9700\u8981\u7684\u7248\u672c\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," \u4f5c\u4e3a\u6211\u5176\u4ed6\u9879\u76ee\u5b66\u4e60\u9700\u8981\u7684\u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nvm alias w v14.19.2 # \u8bbe\u5b9a\u5de5\u4f5c\u9879\u76ee\u7248\u672c\nnvm alias s v16.19.0 # \u8bbe\u5b9a\u4e2a\u4eba\u5b66\u4e60\u9879\u76ee\u6240\u7528\u7248\u672c\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u5728\u9700\u8981\u65f6\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u522b\u540d\u5207\u6362"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nvm use w\n")),(0,a.kt)("h2",{id:"reinstall"},"reinstall"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u5b89\u88c5\u65b0\u7248\u672c\u7684 node \u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"--reinstall-packages-from")," \u53c2\u6570\u662f\u4e00\u4e2a\u6bd4\u8f83\u6709\u7528\u7684\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nvm install v19.4.0 --reinstall-packages-from=16\nnvm install node --reinstall-packages-from=node # \u4ece\u5f53\u524d\u7248\u672c\u5b89\u88c5\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u53c2\u6570\uff0c\u4f1a\u5728\u65b0\u7248\u672c\u7684 node \u5b89\u88c5\u540e\uff0c\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"from"),"\u7248\u672c\u5df2\u5b89\u88c5\u7684\u5168\u5c40\u5305\u3002"),(0,a.kt)("h2",{id:"\u4e00\u70b9\u5c0f\u542f\u53d1"},"\u4e00\u70b9\u5c0f\u542f\u53d1"),(0,a.kt)("p",null,"\u50cf nvm \u8fd9\u6837\u63d0\u524d load \u8fdb\u53bb\u5c31\u884c\uff0c\u5bf9\u4e8e\u7ec4\u7ec7\u4e00\u4e9b\u5c0f\u7684\u529f\u80fd\u4f1a\u6bd4\u8f83\u6709\u7528\uff0c\u6bd4\u5982\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"utils.sh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="~/.zshrc"',title:'"~/.zshrc"'},'[ -s "$NVM_DIR/utils.sh" ] && \\. "$NVM_DIR/utils.sh" # This loads custom utils\n')),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u6709\u4e00\u4e9b\u5c0f\u529f\u80fd\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u8fd9\u91cc\u6dfb\u52a0\u51fd\u6570\u5373\u53ef\uff0c\u6bd4\u81ea\u5b9a\u4e49 bin \u64cd\u4f5c\u66f4\u5bb9\u6613\u3002"))}u.isMDXComponent=!0}}]);