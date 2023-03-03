# HTTP

了解 HTTP 协议的发展，各关键版本的一些基本知识。

## 0.9 - 单行协议

这个时候的 HTTP 是个“单行协议”，只支持 GET 请求，很纯粹地描述了需求 —— 给我一个 HTML。

```bash
GET /mypage.html
```

这个时候的 HTML 页面不会异步请求其他资源，就是直接返回一个 HTML 就是完整的页面，只包含文本。
在这个情况下，一次连接就完成 HTML 的传输就结束了。

## 1.0 - 支持多种文件

随着互联网的发展，浏览器和服务器迅速扩展内容，支持双端的互操作，支持图像、样式和脚本等更丰富的资源。

要实现不同文件传输，需要在 C/S 之间进行协商

- 客户端需要提供更明确的需求
- 服务器需要返回文件的一些描述

这种协商是通过引入 HTTP Header，添加具体的描述字段而实现。

| 功能         | 解释                    |
| ------------ | ----------------------- |
| 支持多种文件 | Content-Type, accept-\* |
| 支持内容推送 | 引入 POST 请求          |
| 支持状态说明 | 引入 Status Code        |
| 其他         | 缓存和认证等            |

### 客户端需求描述

为了识别 CSS 和 JavaScript 等不同的文件。在请求头部中添加了 `accept`，`accept-*` 提出了进一步的内容协商

```bash
accept: text/html
accept-encoding: gzip, deflate, br
accept-charset: utf-8
accept-language: zh-CN,zh
```

### 服务器应答说明

服务器在收到请求后，也需要对应答的文件做一些描述，以便客户端确认和处理。服务器通过 `Content-Type` 等字段进行描述被返回的文件

```bash
content-length: 3495
content-encoding: br
content-type: text/html; charset=utf-8
content-language: en-US
```

服务器不一定能够满足客户端的要求，增加 Status Code 来向客户端表明发生了什么。比如说 `accept-language` 的要求我服务器实在做不到，就可以通过 406 来表示。

```bash
Status Code: 406
```

### TCP 连接问题

HTTP/1.0 并不是一个严格的标准，更像是 HTTP 发展过程中一个探索阶段的代称。我的理解，HTTP/1.0 是当时状态下各种 HTTP 拓展实现的一个实践指南，是分析当时 HTTP 发展的状态，思考以后的发展的一个承上启下的阶段性归纳。

0.9 之后，C/S 的迅速发展，有各种各样的拓展实现，也带来了一些问题，其中最突出的是 TCP 频繁连接断开的问题。

在 0.9，一个页面就是单纯 HTML 文本，一次请求就完事了。随着支持其他资源，完整显示一个页面需要发送多个请求库，默认情况下，HTTP/1.0 对每个资源请求，需要建立单独的 TCP 连接，频繁的 TCP 连接的建立和断开会消耗资源，导致页面显示的延迟

![HTTP 1.0](../assets/http-1.jpg)

## 1.1 - 长连接

HTTP/1.1 最核心的内容，是针对 1.0 中的连接问题支持了 TCP 长连接和管线化。

### TCP 连接复用

也叫持久连接或者长连接。通过复用连接，减少了 TCP 的建立和断开带来的消耗

![HTTP 1.1](../assets/http-1-1.jpg)

但是在同一个 TCP 连接中，HTTP 1.1 采用的是管线化的方案，也就是

- 客户端不必等待响应返回之后再发起下一个请求
- 服务器阻塞性处理，必须先到的先返回

简单来说，就是你可以一下子给我很多需求，但我只能一个一个处理。

管线化意外着如果前面某个请求没有及时返回，我后面的也没法玩，这就是所谓的 **队头阻塞问题**。

Chrome 中对同一个域名使用 6 个 TCP 并行连接，正是因为 队头阻塞 问题。本来采用持久连接就是为了减少 TCP 连接，而最后却仍需要采用多 TCP 连接来解决效率问题，这并不完美。

### 引入了分块传输

HTTP/1.1 引入了 分块传输(Chunk Transfer)机制来解决动态生成内容，大文件传输等方面的问题。Chunk Transer 机制，允许服务器对数据进行分块，这个时候传输的 HTTP 包，称为 不定长包体，打个比方来说

定长包体传输是直接告诉你长度是多少，你就照着接收就好
不定长包体，分块传输是让你先接收着，到结束的时候我会告诉你的
分块传输，通过使用 [Transer-Encoding](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Transfer-Encoding) 指明使用分块传输方式，这个时候就不必在响应时指定 Content-Length 了，可以边压缩边传输，大文件也可以拆开了。以一个简单的例子看一下

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("Transfer-Encoding", "chunked");
  let text = "Hello Wolrd";
  for (let i = 0, len = text.length; i < len; i++) {
    res.write(text.charAt(i) + "\n");
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

从 WireShark 可以看到在返回中分成了一块块的数据，最后再合并起来。

[Chunk 传输](../assets/chunk.jpg)

### 支持虚拟主机

不再要求域名和 IP 的一一对应关系，一个服务器可以支持多个域名，如今我们已经当做自然而然的 Web 服务器虚拟主机的配置，是在 1.1 才添加的。

## 2.0 - 多路复用

HTTP/1.1 长连接的队头阻塞问题，是因为在一个 TCP 连接中 HTTP 请求只能串行执行，由于这个问题，Chrome 等采用了多 TCP 连接的方式。那么，我们自然就能想到，如果允许在一个 TCP 中并发执行 HTTP 请求，是否就能解决阻塞问题，是否就可以不再需要多 TCP 连接？这就是 HTTP/2.0 的解决方案

> 一个域名只使用一个 TCP 长连接，并且通过多路复用消除阻塞问题

如下所示

![二进制分帧层](../assets/binary-framing-layer.svg)

图源谷歌开发者网站

通过引入**二进制分帧层**，将传输的 HTTP 包分成了更小的帧，采用二进制进行编码。每个帧都标记了所属 HTTP 请求的 ID，然后通过建立的通道进行**交错发送**。

服务端接收到多个请求后，可以根据自身的优先级设置，有选择地决定先返回哪些内容。而浏览器接收到信息知乎，根据 ID 筛选，将内容拼接为完整的 HTTP 响应数据。

### HTTP2 的其他特性

请求优先级设置：支持设置请求优先级，让服务器优先处理高优请求。
服务端推送：支持将数据主动推送到浏览器。
头部压缩：HTTP/2.0 对请求头和响应头进行了压缩。

### HTTP 3.0

## 其他

很多重要的字段在 HTTP/1.0 也已经定义，如

- User-Agent 和 Server 表明客户端和服务器的一些信息
- Location 告诉客户端在某种情况下的下一步操作
- Pragma，Cache(If-Modified-Since，Expires) 等利用缓存节约流量

```mermaid
  flowchart LR
  subgraph 0.9[0.9]
    09(单行协议)
    getOnly(只支持GET)
  end
  0.9(0.9) --> 10
  subgraph 10[1.0]
    核心(不同文件的下载)
  end
```

<!-- HTTP 1.1 为什么要支持管线化 -->
