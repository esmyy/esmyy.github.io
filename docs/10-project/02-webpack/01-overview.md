# Webpack

Webpack 的工作流程及 loader, plugin 等的原理，结构分析。

基于 Webpack 4.x

两个核心模块是

loader: 负责语法转换，文件转换等事情
plugin: 负责其他的事情
两个核心对象

compiler: 负责整体调度
compilation: 负责一次具体的编译过程，每次编译生成新的 compilation 对象
在流程上

创建编译器：事件的定义，参数处理转化为对应的 plugin，plugin 去订阅一些事件
具体编译：创建 compilation 负责具体的编译过程，调用 loader-runner 对文件进行处
