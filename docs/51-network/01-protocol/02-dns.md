# DNS

## 解析过程

在对外查找之前，本机的查找过程是

```mermaid
  flowchart LR
  A(浏览器缓存) --> B(系统缓存) --> hosts(hosts)
```

### 浏览器缓存

以 Chrome 为例，在之前的版本，DNS 相关的内容可以在以下页面查看

```text
chrome://net-internals/#dns
```

新版的 Chrome 已经移除了具体的缓存展示，只有 lookup 和 clear 功能。现在需要在 [chrome://net-export](chrome://net-export) 导出缓存文件，然后使用 [netlog_viewer](https://netlog-viewer.appspot.com/) 查看。

> The net-internals events viewer and related functionality has been removed. Please use [chrome://net-export](chrome://net-export) to save netlogs and the external [netlog_viewer](https://netlog-viewer.appspot.com/) to view them.

## DNS

DNS 用于根据域名获取 IP 地址，需要了解常规的 DNS，以及 CDN DNS 和 HTTP DNS，还需要了解 SLB。

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
