# CDN

CDN 内容分发网络，目的在于解决长距离访问缓慢的问题。CDN 的基本思路是将源站的内容分发到不同的机房去，用户请求时，直接用最近的站点响应。就跟很多连锁的服务门店是类似的。

## 组成

CDN 有两个核心组成，全局负载均衡(GSLB)和缓存系统。

### GSLB

GSLB 是 CDN 的大脑，负责智能调度，根据请求携带的信息，综合分析返回”最近“的缓存服务器的地址。

![DNS](./assets/cdn-dns.jpg)

如图中 1-8 步骤所示，CDN 一般会在权威 DNS 中设置 CNAME，当访问某个域名，返回的不再是源站的 IP 地址，而是返回一个 CDN 域名。
LocalDNS 访问 CDN 自己搭建的权威 NS，这个 NS 再次返回负载均衡器的 CNAME，LocalDNS 向 GSLB 请求，GSLB 返回缓存服务器的 IP。

:::info 🤔
简单来说，GSLB 是告诉你去哪里找，告诉你一个大概率准确的地址。
:::

### 缓存系统

GSLB 是告诉你去哪里找，而缓存系统决定了你到了地方之后，能不能找到，容不容易找到。

![DNS](./assets/cdn-dns.jpg)

如图中 9 开始的步骤所示，源主机获取到边缘的缓存服务器的 IP 之后发起请求，CDN 缓存系统会依次尝试从边缘节点，区域节点，中心节点提取匹配的缓存，实在找不到，最后只能回源。

##### 命中率和回源率

缓存查找过程有两个比例需要了解

- 命中率：在 CDN 能够找到缓存的数据量(字节数)，占总数据量的比例
- 回源率：需要回源的数据量，占总数据量的比例，也叫回源流量比。

还有另一个层面的指标，就是从请求数量层面

- 命中率：在 CDN 能够找到缓存的请求数，占总请求数的比例
- 回源率：需要回源的请求数，占总请求数的比例

一般是指数据总量的，毕竟流量主要看数据大小。为了区分，有时候也称为字节命中率，请求命中率。

:::info 🤔
CDN 系统的设计，就是如何更靠近用户，提高命中率降低回源率
:::

## 缓存配置

对于不同的静态文件，设置不同的缓存时间。一般对于 HTML，可以设置较短的缓存时间，对于 JS，CSS 等设置较长的时间。

当然了，需要结合时效性的要求具体情况具体分析。比如很多时候通过 Webpack 等构建工具，是改变文件的 hash 做 CDN 的增量更新，这个时候设置过短的缓存就不应该了。

参考 [CDN 基础入门：CDN 缓存配置及优化](https://developer.aliyun.com/article/985861?spm=a2c4g.11186623.0.0.3109c0d2EmkZi9#slide-1)

##### 刷新和预热

| 功能 | 描述                                                                   | 应用场景                         |
| ---- | ---------------------------------------------------------------------- | -------------------------------- |
| 刷新 | 根据一定规则删除 CDN 所有节点上的缓存内容， 用户再访问时回源并再次缓存 | 资源更新，项目发布，违规资源清理 |
| 预热 | 主动将源站的内容推动的 CDN 节点，减少回源                              | 运营活动，安装包发布             |

CDN 的刷新，也可以叫做删除，根据实际需要，可以先刷新后预热。

:::info 🤔
缓存这块，需要结合源站(Nginx), HTTP，CDN 三者的相关知识进行理解，是比较考验综合理解能力的。
:::

## Q & A

参考 [阿里云 CDN 常见问题](https://help.aliyun.com/document_detail/147730.html)

<details>
  <summary>刷新和预热如何验证</summary>
  <div>抓住根本。从使用需求上思考？总得有一些方法供我们比较方便地去验证，那么和服务端的交互之间，不就是响应本身嘛，不然还能怎么描述呢？CDN的一些状态信息都会在 HTTP 响应头部有相应的标识，比如阿里云的 `Via`, `X-Cache`等自定义头部。</div>
</details>

<details>
  <summary>如何避免 CDN 为 PC 端缓存移动端页面</summary>
  <div>
    <p>这个问题的前提是PC、移动端共用一个域名，实现是两套代码。PC和移动端的区别在于 User-Agent 的不同，针对于CDN而已，那就需要看CDN能针对不同的UA做怎样的区别处理。在CDN中，可以使用`Vary: User-Agent`响应头，根据不同的UA返回不同的版本，这需要源站配合进行一些处理。Vary 的问题在于，UA 太多时导致缓存失效的情况太多，无法发挥CDN缓存的作用。</p>
  </div>
</details>

<details>
  <summary>什么是动态内容和静态内容？</summary>
  <div>动态，就是不同的请求可能不一样的数据。比如根据UA，用户不同而不同的SSR渲染内容，数据库内容。而静态，就是不管是谁访问，都是一样的内容。一般在实践中，CDN配置的是单独的域名，与接口，HTML页面所使用的域名不一样，这样方便对不同的内容做不同的缓存设置。</div>
</details>

<details>
  <summary>CDN和源站都设置了缓存，如何生效？</summary>
  <div>
  以阿里云为例，如果源站配置了no-cache,no-store就不缓存，否则优先应用CDN的配置，再应用源站的配置。
  从便利性的角度来说，在CDN配置，是比在源站配置更方便的，当变更服务器时，不需要过多复制缓存配置。
  </div>
</details>
