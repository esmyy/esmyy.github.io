# 目录结构

在 src 目录下 tree -L 1 结果如下

```bash
.
├── compiler
├── core
├── platforms
├── server
├── sfc
└── shared
```

## compiler

编译的核心三步在这里实现，将 template 转换成中间代码

AST 生成
AST 优化
中间代码生成
这三个步骤是后续学习的一个重点。后面会说到的 entry-runtime-with-compiler.js 入口，相对于 runtime/index.js，就是加上了 compiler，具备了运行时编译 template 的能力。

## core

Vue 核心，目录如下

```bash
.
├── components
├── global-api
├── instance
├── observer
├── util
├── vdom
├── config.js
└── index.js
```

包含了 内置组件、全局 API、构造函数、观察者、Vitual DOM 和一些工具函数，这是 Vue 的核心。

## platforms

子目录如下

```bash
.
├── web
└── weex
```

针对不同平台的入口配置，web 和面向 Native 的 weex 所需的内容并不完全一致，因此需要做不同的打包，我们主要研究 web 平台的入口。

## server

SSR 相关的逻辑，SSR 是需要单独深入的部分。

## sfc

sfc 是 single-file components (单文件组件) 的缩写，也就是.vue 文件， 这个目录下就一个 parser.js 文件，负责识别 script，template 和 style 各部分，将 .vue 文件解析成 JS 对象。

## shared

公共变量，方法的定义，理解为 share between client and server 即可。比较典型的是 data-server-rendered 这个 SSR 时使用到的标记，即是在此定义的。
