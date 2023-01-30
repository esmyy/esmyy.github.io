# CSRF

CSRF，Cross Site Request Forgery，中文是跨站点请求伪造。CSRF 是真的跨站了，不像 XSS 那样，说跨站又不跨站，不成样子。CSRF 的基本流程如下

用户登录 a.com，并保留了登录凭证 Cookie
攻击者引诱受害者访问了 b.com
b.com 向 a.com 发送请求，浏览器会默认携带 a.com 的 Cookie
a.com 接收到请求后，误以为是用户发送的正常请求，按照正常逻辑处理，但是这并不是真实用户期望的
CSRF 的关键在于“伪造请求”，伪造请求并不一定是第三方网站的，只是第三方网站更容易被攻击者掌握，更普遍而已。伪造能够实现的原因是 b.com 向 a.com 请求的时候，会带上 a.com 的 cookie。那么只要用户同时访问了正常网站和第三方攻击网站，攻击就有可能发生。

CSRF 的防范：抓住两个关键点 第三方网站，cookie。有以下防范方案

方案 原理
同源检测 利用 Referer 和 Origin 检查判断请求来源
CSRF Token 第三方网站无法直接读取 cookie
双重 cookie 第三方网站无法直接读取 cookie
Samesite Cookie 从源头上解决，限制第三方网站利用 cookie
csrf 可参考前端安全系列（二）：如何防止 CSRF 攻击？
