# 热更新

Webpack 中的文件监听，基本原理是周期性比较文件的最后编辑时间，监听的源码变化时重新构建。 Rebuild 存在的问题/不足 是需要手动刷新浏览器，还有就是构建的内容在硬盘上，有 I/O 成本。

手动刷新自然是需要优化的，要做到自动更新，逻辑上也很简单，就是将构建后的输出推送给客户端(如 SPA 应用)，客户端自动刷新，这就是所谓热更新。

热更新，打个比方来说，就是空中加油。

要实现将构建后的输出推送给页面，需要建立 Webpack Compiler 和 Application 之间的通信，需要用到 WebSocket。 由于通信和更新的需要，Compiler 和 Application 必然需要增加 WS 相关的代码，Application 必然需要增加更新相关的代码。

```js
// Webpack
setInterval(() => {
  if (hasChange()) {
    rebuild();
    socket.send(output);
  }
}, 1000); // poll prop in webpack.config.js

// Application
socket.onmessage = function (data) {
  update(data);
};
```
