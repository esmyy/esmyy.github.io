# DNS

DNS 相关的内容，包含

```mermaid
  flowchart
  DNS((DNS)) --> 查询过程(查询过程)
  DNS --> DNS缓存(DNS缓存)
  DNS --> 特别的DNS(特别的DNS)
  DNS --> 常用工具(常用工具)
```

为了方便，后面统一使用 NS 表示 DNS 服务器

## 查询过程

在对外查询之前，本机的查找过程是

```mermaid
  flowchart LR
  A(浏览器缓存) --> B(系统缓存) --> hosts(hosts) --> 向外查询
```

### 本地查找

在本设备查找缓存的过程

##### 浏览器

以 Chrome 为例，在之前的版本，DNS 相关的内容可以在以下页面查看

```text
chrome://net-internals/#dns
```

新版的 Chrome 已经移除了具体的缓存展示，只有 lookup 和 clear 功能。现在需要在 [chrome://net-export](chrome://net-export) 导出缓存文件，然后使用 [netlog_viewer](https://netlog-viewer.appspot.com/) 查看。

> The net-internals events viewer and related functionality has been removed. Please use [chrome://net-export](chrome://net-export) to save netlogs and the external [netlog_viewer](https://netlog-viewer.appspot.com/) to view them.

示例如下

![dns log viewer](../assets/dns-log.jpg)

浏览器中的 TTL 是毫秒数，表示浏览器缓存的有效时间，与 Expires 有对应关系。域名的 TTL 在权威 DNS 配置，LocalDNS 会缓存记录，
浏览器查到的 DNS 记录一般是 LocalDNS 提供的

```text
浏览器里面的 TTL = 权威 NS 配置的 TTL - 本地 NS 已经缓存的时间
```

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

### 向外查询

服务器查找就是常说的递归查询和迭代查询两个过程。不考虑缓存的情况，查询过程如下

```mermaid
  flowchart LR

  subgraph "递归查询就是 A - B - C - X... 这样的过程"
    host(Client)
    local(LocalDNS)
    host --1--> local
    local --8--> host
  end

  local --- local2

  subgraph "迭代查询：B - C, B - D, B - X..."
    local2(LocalDNS)
    root(RootDNS)
    top(TopDNS)
    auth(AuthDNS)
    local2 --2--> root
    root --3--> local2
    local2 --4--> top
    top --5--> local2
    local2 --6--> auth
    auth --7--> local2
  end
```

#### 本地 NS

通过 DHCP 接入网络时，会将 LocalDNS 的地址下发到接入设备，在 MacOS/Linux 中会缓存到 `/etc/resolv.conf` 中

```text
#
# macOS Notice
#
# This file is not consulted for DNS hostname resolution, address
# resolution, or the DNS query routing mechanism used by most
# processes on this system.
#
# To view the DNS configuration used by this system, use:
#   scutil --dns
#
# SEE ALSO
#   dns-sd(1), scutil(8)
#
# This file is automatically generated.
#
nameserver 172.16.1.21
nameserver 172.16.1.22
```

一般我们看到的是本地局域网的一个网关地址，但最终都是转发到运营商的，所以将 LocalDNS 理解为运营商的 DNS 就可以了。

大部分的情况下，都可以在 LocalDNS 找到缓存记录，并不会很频繁地继续走递归和迭代查询的过程。

<details>
  <summary>本地NS如何知道根NS的地址？好像并没有人告诉它呀</summary>
  <div>没有人给，但它又有，那就是写死的呗，只有13个且固定的IP</div>
</details>

### 权威 NS

权威 NS ，是距离研发人员比较近的，就是那些在阿里云，或者腾讯云域名解析时的服务提供商。

很多大厂都搭建了自己的 NS，比如前面看到的百度的一个 NS

```bash
ns7.baidu.com
```

又或者腾讯的

```bash
ns2.qq.com
```

## LocalDNS 的问题

有 DNS 的地方就有缓存，有缓存的地方就需要考虑到刷新，同步这些内容。

不论是完整的向外查询的解析路径，还是缓存返回，LocalDNS 都是关键节点，也是问题多发区域。主要有以下这些问题

### 域名缓存

当我们说“域名缓存问题”，有两个方面

- 一是指预期之中的 LocalDNS 的缓存，在有效时间内不向权威 DNS 服务器查询
- 二是 LocalDNS 可能有一些不按你指定的规矩来的处理

我个人认为，LocalDNS 只要按照权威 NS 中设定的规矩来操作，那么这种情况的缓存问题，是在使用 DNS 时就可以预见的，不能说是 LocalDNS 的问题。

### 域名劫持

域名劫持就是经过人家门口问路，结果人家不讲武德，给你指了一条错路，空路，或者给你带到奇奇怪怪的地方去。比如广告劫持，恶意劫持，还有 LocalDNS 为了降低跨网成本等进行的劫持。

域名劫持和域名缓存问题有明显的区别，域名缓存只是不实时查询更新，但来源仍旧是之前查询的结果，而域名劫持是直接换成了其他的地址。

### 跨网转发

在不同的运营商之间转发，比如联通，电信都部署了网站，通过联通网络访问时，DNS 服务器转发给了电信，电信的 DNS 服务器会向电信的权威 DNS 服务器查询，返回部署在电信的地址，那么这样就会比较慢。

:::note
只是我的粗浅理解，并不是对联通的网络问题有什么意见。
:::

### 其他

- 域名更新问题：当域名解析地址变更的时候，全网刷新的时间比较长

- 解析延迟问题：延迟解析时如果涉及到迭代查找的过程比较漫长。

其实我个人觉得，所谓的域名更新问题，也只是域名缓存的一部分而已，做过多的区别并不必要。

## 特别的 NS

### HttpDNS

HttpDNS 用于客户端 App，简单来说，就是 本地 DNS + HTTP 请求更新

```mermaid
  flowchart LR
  Client[客户端SDK] --> 本地缓存 --> HttpDNS服务器
```

最简单的情况，假设服务 IP 永远不会变，直接在 APP 打包一个 <域名,IP> 表。考虑到 IP 可能会变，通过 HTTP 请求，向 HttpDNS 服务器请求进行更新即可。

- 客户端：客户端可以提供运营商，地区等信息
- 服务器：根据客户端提供的信息，综合网络，位置等因素返回最合适的 IP 地址

HttpDNS 服务器的地址应该是保持不变的，当然，都应当做好兜底。

### CdnDNS

CDN 一般会在权威 NS 中设置 CNAME，当访问某个域名，返回的不再是源站的 IP 地址，而是返回一个 CDN 域名
![DNS](../assets/cdn-dns.jpg)

LocalDNS 拿到域名之后，去访问 CDN 自己搭建的权威 NS ，这个 NS 再次返回负载均衡器的 CNAME，LocalDNS 再次请求负载均衡器即可得到缓存服务器的 IP。在获取到缓存服务器的 IP 之后，再依次访问边缘节点，区域节点，中心节点，最后回源。

## 相关工具

主要是 dig 和 nslookup。nslookup 用于诊断域名解析是否正常，dig 用于追踪解析过程。

##### dig 追踪迭代查找过程

使用 dig 追踪迭代查找过程结果如下

```bash
➜  coding git:(master) dig www.baidu.com +trace

; <<>> DiG 9.10.6 <<>> www.baidu.com +trace
;; global options: +cmd
.   49654 IN NS a.root-servers.net.
.   49654 IN NS b.root-servers.net.
.   49654 IN NS c.root-servers.net.
.   49654 IN NS d.root-servers.net.
.   49654 IN NS e.root-servers.net.
.   49654 IN NS f.root-servers.net.
.   49654 IN NS g.root-servers.net.
.   49654 IN NS h.root-servers.net.
.   49654 IN NS i.root-servers.net.
.   49654 IN NS j.root-servers.net.
.   49654 IN NS k.root-servers.net.
.   49654 IN NS l.root-servers.net.
.   49654 IN NS m.root-servers.net.
.   49654 IN RRSIG NS 8 0 518400 20230305170000 20230220160000 951 . xU5kKOHDoGfyQVeW8Huv74NJxyAaKyuDUxli5P0K08z+vvLlA3N87OVL bhwoihWpKg+Of2S2nI6jx80n+S2Ty74PSOijnu9sW7vvTD30Wg1Vgtda rrOc2gf9UmDkT+mLda/IiX7DtAla76k9t+owykaxyPHfdkLH1cfZmGj6 0KPRJDf9gnopBomQIBa4/m3UqwJlefYA0Wr01Bs+BaCKHPQEnrBSsBYJ jBbFOkadtuXtVym5Bapg8TYJQQfJxlutIuuEyC1BDSqw33poKUcKzXg3 v7VIeHSq+wKaOyDt7m9wrCxOhj3uZurNO+b88xmtV4pX+HxRGs+Yx2QY kCGskQ==
;; Received 525 bytes from 8.8.8.8#53(8.8.8.8) in 97 ms
# 返回了根DNS的地址
# 从上面可以看到 DNS 使用了 8.8.8.8，而不是默认的DHCP下发的网关，这是绕过了本地DNS，使用8.8.8.8作为本地DNS

com.   172800 IN NS d.gtld-servers.net.
com.   172800 IN NS f.gtld-servers.net.
com.   172800 IN NS j.gtld-servers.net.
com.   172800 IN NS a.gtld-servers.net.
com.   172800 IN NS l.gtld-servers.net.
com.   172800 IN NS c.gtld-servers.net.
com.   172800 IN NS h.gtld-servers.net.
com.   172800 IN NS e.gtld-servers.net.
com.   172800 IN NS i.gtld-servers.net.
com.   172800 IN NS b.gtld-servers.net.
com.   172800 IN NS g.gtld-servers.net.
com.   172800 IN NS k.gtld-servers.net.
com.   172800 IN NS m.gtld-servers.net.
com.   86400 IN DS 30909 8 2 E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CF C41A5766
com.   86400 IN RRSIG DS 8 1 86400 20230306050000 20230221040000 951 . GUAFdN2uybWtSv+N6uD2wXAooWUW4Cj3m0I+QHuypzTiBP0zJ7wN4wsD G3h0ft6euO83kGNFWIem4WkZdLgnPvCXNItRJutzWU8+wfNeLosBRhQX YWRlkFRfxp91NDUZ9xwCx1jMuElbmm+8tNl/q1r2BkdOK7FQvySRMjYa 2Hj+o9T1OKdCEmWNVR9y5m9nI7RP7HZ3PHcd5ust7UB5nYa9ArWOv11a kcaaJUJkq1IS8jrQfBG98p13t+0rwIJgpOmKjsYsysY9Xcj8kuh7qkMh Tj6H6QBgzYaPmvEE6Njwj+tHBxuRluB5sd16FnTM5nI7zBU7eSoYAZjS dn//Ng==
;; Received 1176 bytes from 193.0.14.129#53(k.root-servers.net) in 339 ms
# 根DNS返回了顶级DNS地址

baidu.com.  172800 IN NS ns2.baidu.com.
baidu.com.  172800 IN NS ns3.baidu.com.
baidu.com.  172800 IN NS ns4.baidu.com.
baidu.com.  172800 IN NS ns1.baidu.com.
baidu.com.  172800 IN NS ns7.baidu.com.
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN NSEC3 1 1 0 - CK0Q2D6NI4I7EQH8NA30NS61O48UL8G5  NS SOA RRSIG DNSKEY NSEC3PARAM
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN RRSIG NSEC3 8 2 86400 20230227052255 20230220041255 36739 com. YJw2xFEhDVUfIlym8yUrXw8rVYLxS+e/EkIJVmOkBANnfCmNPVATcGuM /DIrUz8PTWTezM5z6f2tM+KnzzXYMNL1ScDIgO/jaJUrs4aOz1EOPwD4 hk5rJ/pRSY9C87vRoxqdryDIHxg3TwwEfQglqQ9hk+P1qvU7qY5nd0yc tO+IV8Vqd0sRiteg/P1h6Bpp79v/kZNjntRTdnWLI2oW2g==
HPVV07LPQ3T8RQS9HETLBJF268LK3OQ2.com. 86400 IN NSEC3 1 1 0 - HPVV8SARM2LDLRBTVC5EP1CUB1EF7LOP  NS DS RRSIG
HPVV07LPQ3T8RQS9HETLBJF268LK3OQ2.com. 86400 IN RRSIG NSEC3 8 2 86400 20230225070303 20230218055303 36739 com. FQeSaunxrF7FE6Co6JgBsrP7awaHJkPuymX94sw+oemonApN2aLc1Ug6 v7F2Wkf4NeSCtfuHsyf1E6khUnkI5kOkTaKpMnNOtwu4xBPV64yWBI7X K7S5w4RzYTj5utuXypx2yz98Au6lW+/ZFWJAbEnV8luqT95D3l9zO/Mo AEfdxc6+mKcZPJa/SLkSXNazgQOW/evN36o+36XiZ731GA==
;; Received 849 bytes from 192.55.83.30#53(m.gtld-servers.net) in 254 ms
# 顶级DNS 返回了权威DNS地址

www.baidu.com.  1200 IN CNAME www.a.shifen.com.
;; Received 72 bytes from 180.76.76.92#53(ns7.baidu.com) in 9 ms
# 权威DNS返回了ip地址
```

<!-- https://help.aliyun.com/document_detail/39799.html -->

## Q & A

<details>
  <summary>根服务器，顶级服务器，权威服务器，一般都不止一个，本地NS如何知道向哪个发起请求？</summary>
  <div>不知道，一个列表里面的都会尝试去发送请求，直到收到第一个有效的结果。</div>
</details>

<details>
  <summary>根NS只有13个，中国没有？那怎么办呢？</summary>
  <div></div>
</details>

<!-- 根NS的数据是同步的吗？如何知道某个域名已经被注册 -->

<!-- 本地dns为何不缓存顶级DNS？ -->

<!-- 跨运营商访问的问题 -->

<!-- 114.114.114.114、8.8.8.8 -->
<!-- 添加解析记录后多久生效？
修改或删除解析后多久生效？
修改DNS服务器后多久生效？ -->
<!-- https://support.huaweicloud.com/dns_faq/dns_faq_013.html -->
<!-- DNS 劫持是什么 -->
