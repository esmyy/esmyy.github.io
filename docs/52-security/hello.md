# 同源与跨域

谈到跨域的时候，基本上都是说的如何合法跨域访问的问题。

## 同源策略

同源策略(Same origin policy) 是浏览器最基础的安全功能。 简单来说，同源策略就是一个“自家人”认证，不是自家人，有些事情不能做。

同源：域名，协议，端口相同

限制的操作：

- 限制 DOM 操作
- 限制 XHR 等异步请求
- 限制 Cookie 等数据读取

场景的解决跨越问题的方案有

- CORS(跨越资源共享)：客户端和服务器通过 HTTP 头部进行协商，CORS 的关键取决于服务器。CORS 又有所谓的简单请求，非简单请求，非简单请求有预检请求等。
- 服务器代理
- image pings：比如场景的一些用户行为统计
- JSONP：通过 src 去获取资源，然后提供 callback 给服务器，服务器解析封装到 callback 里面。

```js
function handleCallback(result) {
  console.log("handle callback");
}
var jsonp = document.createElement("script");
var ele = document.getElementById("demo");
jsonp.type = "text/javascript";
jsonp.src = "http://localhost:3000/api/list?callback=handleCallback";
ele.appendChild(jsonp);
ele.removeChild(jsonp);
```

而服务器端需要返回一个使用 handleCallback 封装的函数调用

```js
"handleCallback()";
```

JSONP 需要服务器配合，且返回内容会直接被执行，现在都已经不怎么用了。
