# npm

JS 包管理，有三个组成部分

|   组成   | 说明                           | 例子                                                                    |
| :------: | ------------------------------ | ----------------------------------------------------------------------- |
|   网站   | 对外查询有哪些包，包的说明等   | <https://www.npmjs.com> <https://npmmirror.com/>                        |
|   cli    | 包管理命令行工具               | [npm](https://github.com/npm/cli), [cnpm](https://github.com/cnpm/cnpm) |
| registry | 包管理的数据库，也就是常说的源 | <https://registry.npmjs.org/>                                           |

逻辑上，包管理其实很简单

- 共享：将 JS 包添加到共享平台
- 使用：使用时从平台下载所需的包

## 为什么

为什么要研究 npm 命令？

:::caution
这个问题要想清楚，不要为了看源码而看源码，做的研究，真的有价值么？
:::

## npm 命令

阅读一下 npm 命令的源码，看一看其实现

### 定位命令

查看 npm 命令所在

```shell
➜  ~ which npm
/Users/esmyy/.nvm/versions/node/v16.19.0/bin/npm
➜  ~ la /Users/esmyy/.nvm/versions/node/v16.19.0/bin/npm
lrwxr-xr-x  1 esmyy  esmyy    38B 12 13 15:19 /Users/esmyy/.nvm/versions/node/v16.19.0/bin/npm -> ../lib/node_modules/npm/bin/npm-cli.js
```

本机 node 是通过 nvm 安装的，这个地址是一个软链接，可以看到实际 npm 命令是指向了 npm-cli.js。

事实上，在 **node/v16.19.0/bin/** 目录下的命令，除了 node，其他都是软连接，指向位置都是 **node_modules**里面的某个文件

```shell
➜  bin git:(9600617) pwd
/Users/esmyy/.nvm/versions/node/v16.19.0/bin
➜  bin git:(9600617) la
total 181928
lrwxr-xr-x  1 esmyy  esmyy    45B 12 13 15:19 corepack -> ../lib/node_modules/corepack/dist/corepack.js
lrwxr-xr-x  1 esmyy  esmyy    32B 12 27 19:16 lerna -> ../lib/node_modules/lerna/cli.js
-rwxr-xr-x  1 esmyy  esmyy    75M 12 13 15:19 node
lrwxr-xr-x  1 esmyy  esmyy    38B 12 13 15:19 npm -> ../lib/node_modules/npm/bin/npm-cli.js
lrwxr-xr-x  1 esmyy  esmyy    38B 12 13 15:19 npx -> ../lib/node_modules/npm/bin/npx-cli.js
lrwxr-xr-x  1 esmyy  esmyy    30B  1  3 10:53 nrm -> ../lib/node_modules/nrm/cli.js
lrwxr-xr-x  1 esmyy  esmyy    36B 12 26 12:34 yarn -> ../lib/node_modules/yarn/bin/yarn.js
lrwxr-xr-x  1 esmyy  esmyy    36B 12 26 12:34 yarnpkg -> ../lib/node_modules/yarn/bin/yarn.js
lrwxr-xr-x  1 esmyy  esmyy    33B  1  3 18:47 yo -> ../lib/node_modules/yo/lib/cli.js
lrwxr-xr-x  1 esmyy  esmyy    46B  1  3 18:47 yo-complete -> ../lib/node_modules/yo/lib/completion/index.js
➜  bin git:(9600617)
```

这个对应关系，是在各个包的 package.json 里面维护的，比如对于 npm 命令，在`.nvm/versions/node/v16.19.0/lib/node_modules/npm/package.json`有这个以下定义

```json
"bin": {
  "npm": "bin/npm-cli.js",
  "npx": "bin/npx-cli.js"
},
```

### 源码解读

## .npmrc

`rc`文件一般是某个命令行工具的配置文件，`.npmrc` 就是 `npm` 命令执行的依据。

与很多工具一样，涉及到配置的文件，一般都是分级，有多个文件，然后工具按照某个顺序去查找。

npmrc 分 4 级，日常工作使用，关注用户级别和工程级别就可以了

```shell
# 项目级配置，一般都是用来切换到内部源，加载内部的组件，工具等
project/.npmrc

# 用户级配置，一般结合 nrm 工具使用，比较常用的就是切换到 taobao 加速
~/.npmrc
```

一个最简单的 ~/.npmrc 文件如下

```shell
registry=https://registry.npmjs.org/
```

这就是指定了使用 npm 安装时，是从哪里获取。当我们说”使用 nrm 切换到阿里源“时，其实就是要改这个文件

```shell
➜  ~  nrm use taobao

  Registry has been set to: https://registry.npmmirror.com/

➜  ~ cat .npmrc
registry=https://registry.npmmirror.com/
home=https://npm.taobao.org
```

## nrm

逻辑很简单，就是选择一个源，更新配置文件 `.npmrc`。

同时提供的一些命令还是蛮有趣有用的

- add：添加自定义的源，比如可以添加私有源

由于`.npmrc` 文件是 [ini 格式](https://baike.baidu.com/item/ini%E6%96%87%E4%BB%B6/9718973)，
为了实现编辑而非覆盖，需要借助 [npm/ini](https://github.com/npm/ini) 工具进行解析，辅助读写。

## npx

> Run a command from a local or remote npm package

npx 的主要作用，就是按照某些查找路径，去查找命令，绕过了原来命令执行的限制，便利了一些命令的执行。

常用场景有两个

1. 不配置 package.json 的 scripts，直接执行项目内的 ./node_modules/.bin/xxx 命令

```shell
npx xxx
```

1. 不安装某个命令，直接从远程临时下载执行

```shell
ts-node hello.ts
```

npx 只是一些偶尔需要时的便利，对于工程本身并无特别作用。

## pnpm

## 私有 npm

一般具备条件的团队，都会自建内部的私有 npm，用于管理公司级别的组件库，工具包等。

```

```

## npm 和 node 版本的关系

```

```

## 参考文档

[npmrc](https://docs.npmjs.com/cli/v9/configuring-npm/npmrc)

[nrm](https://github.com/Pana/nrm)

[npx](https://github.com/zkat/npx)
