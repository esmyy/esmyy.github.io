# DNS

## 查询过程

在对外查询之前，本机的查找过程是

```mermaid
  flowchart LR
  A(浏览器缓存) --> B(系统缓存) --> hosts(hosts) --> 向外查询
```

### 本地查找

##### 浏览器

以 Chrome 为例，在之前的版本，DNS 相关的内容可以在以下页面查看

```text
chrome://net-internals/#dns
```

新版的 Chrome 已经移除了具体的缓存展示，只有 lookup 和 clear 功能。现在需要在 [chrome://net-export](chrome://net-export) 导出缓存文件，然后使用 [netlog_viewer](https://netlog-viewer.appspot.com/) 查看。

> The net-internals events viewer and related functionality has been removed. Please use [chrome://net-export](chrome://net-export) to save netlogs and the external [netlog_viewer](https://netlog-viewer.appspot.com/) to view them.

示例如下

![dns log viewer](../assets/dns-log.jpg)

浏览器中的 TTL 是毫秒数，表示浏览器缓存的时间，与 Expires 有对应关系。域名的 TTL 在权威 DNS 配置，本地 DNS 会缓存记录，
浏览器查到的 DNS 记录一般是本地 DNS 提供的，一般而言

```text
浏览器里面的 TTL = 权威 NS 配置的 TTL - 本地 NS 已经缓存的时间
```

:::caution ？
TODO: 缓存时间是完全由 DNS 解析时设置的，还是浏览器会结合着看？
:::

##### 系统缓存

操作系统中的缓存这块是和 `mDNSResponder` 这个程序有关，应该是在内存中，而不是持久到文件里面了，没有特别直接的方式能够查看缓存列表。
这块一般不关注到也没有太多关系。

清理缓存的方式是

```shell
sudo killall -HUP mDNSResponder
```

##### hosts

`/etc/hosts` 是一个本地持久的映射表，一般用来配置 localhost。

修改 hosts 文件后需要刷新系统缓存。

### 服务器查找

服务器查找就是常说的递归查询和迭代查询两个过程。不考虑缓存的情况，查询过程如下

```mermaid
  flowchart LR

  subgraph "递归查询就是 A - B - C - X... 这样的过程"
    host(请求主机)
    local(本地DNS服务器)
    host --1--> local
    local --8--> host
  end

  local --- local2

  subgraph "迭代查询：B - C, B - D, B - X..."
    local2(本地DNS服务器)
    root(根DNS服务器)
    top(顶级域DNS服务器)
    auth(权威DNS服务器)
    local2 --2--> root
    root --3--> local2
    local2 --4--> top
    top --5--> local2
    local2 --6--> auth
    auth --7--> local2
  end
```

## DNS 缓存

有人的地方就有江湖，有 DNS 的地方就有缓存。

<!-- 本地DNS的理解，是一个重点 -->

## HttpDNS

传统的 DNS 解析，在数据缓存更新，域名转发，域名更新(如机房切换)等存在一些问题。HTTP DNS，就是不走传统 DNS，自己搭建基于 HTTP 的 DNS 服务器集群。一般 HttpDNS 用于手机端应用，使用 SDK 加载缓存 HttpDNS Server 的 IP 列表，通过 HTTP 绕过传统 DNS 获得 IP。

## CdnDNS

CDN 一般会在权威 DNS 服务器中设置 CNAME，当访问某个域名，返回的不再是源站的 IP 地址，而是返回一个 CDN 域名，本地 DNS 服务器拿到这个域名之后，去访问 CDN 自己搭建的权威 DNS 服务器，这个 DNS 服务器再次返回负载均衡器的 CNAME，本地 DNS 再次请求负载均衡器即可得到缓存服务器的 IP。在获取到缓存服务器的 IP 之后，再依次访问边缘节点，区域节点，中心节点，最后回源。

![DNS](../assets/cdn-dns.jpg)

## 缓存刷新

## 缓存设置

ping

## 如何使用

<!-- https://help.aliyun.com/document_detail/39799.html -->

## 缓存查看

<!-- 经过实验，OS 缓存会参考 ttl 值，但是不完全等于 ttl 值， -->

找不到方式查看 Mac 的 DNS 缓存，能够清除，但是不知道清除的具体操作，保存了在哪里，内存？那个文件，搜遍全网

完全找不到，不可能没有系统缓存呀
，系统缓存和 hosts 文件之间的关系是什么

### DNS TTL
