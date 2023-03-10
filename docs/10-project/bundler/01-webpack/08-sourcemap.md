# sourcemap

source map 可以理解资源地图，也可以理解为模块字典，在 Devtool (opens new window)中的说明很详细了。 不过并不需要过分关注其细节，source map 一个是用来开发环节调试，一个是用来做生产环境错误追踪。

需要知道 inline，cheap 等前缀的基本含义，知道在开发环境和生产环境该如何使用即可，比如我一般选择

- dev: eval-source-map
- prod: source-map

还有一些小知识点，需要稍微了解

- source map 在浏览器中是通过 //# sourceURL=[url] 标识的

在 `eval` 模式输出结构中，每个模块末尾有以下格式的注释

```js
//# sourceURL=webpack:///./print.js
```

浏览器会根据这个注释去解析文件，在开发者工具的 Sources Page 面板中展示对应的文件。

- 如果生成独立的 .map 文件，应当只放在服务端，不允许客户端访问，输出代码不应提供过于具体的源码信息
