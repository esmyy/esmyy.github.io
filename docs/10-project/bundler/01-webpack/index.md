# webpack

> webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

相关源码说明主要基于

| pkg         | version          |
| ----------- | ---------------- |
| webpack     | v5.0.0-beta.12。 |
| webpack-cli | 4.6.0            |

webpack 的核心组成如下

| 组成    | 说明                         |
| ------- | ---------------------------- |
| Entry   | 编译入口                     |
| Output  | 输出                         |
| Loaders | 特定类型文件转换处理         |
| Plugins | 编译过程中的任务处理，可插拔 |

webpack 从 Entry 开始分析，收集依赖，生成依赖地图，通过 Loaders 转换各个模块。在整个处理过程中，在每个关键节点，根据需要应用不同的 Plugin，用于处理 Loader 之外的所有其他任务。
