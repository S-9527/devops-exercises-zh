<a name="dns"></a>
## DNS

<details>
<summary>什么是 DNS？它有什么用？</summary><br><b>

DNS （域名系统）是用于将域名转换为 IP 地址。<br>
计算机网络（位于第 3 层） OSP 模型）完成了 IP 地址，但对于人类来说很难记住 IP 地址，更容易记住名字。这就是为什么我们需要诸如 DNS 将我们输入的任何域名转换为 IP 地址。你可以思考一下 DNS 作为一个巨大的电话簿或数据库，其中每个对应的名字都有一个 IP.
</b></details>

<details>
<summary>什么是 DNS 分辨率？</summary><br><b>

翻译的过程 IP 地址到域名。
</b></details>

<details>
<summary>什么是名称服务器？</summary><br><b>

负责解析的服务器 DNS 查询。
</b></details>

<details>
<summary>www.site.com 的解析顺序是什么</summary><br><b>

按以下顺序解决：

1) .
2) .com
3) 网站
4) www.site.com
</b></details>

<details>
<summary>什么是域名注册商？</summary><br><b>

[云耀](https://www.cloudflare.com/en-gb/learning/dns/glossary/what-is-a-domain-name-registrar)：“域名注册商向公众提供域名注册服务。一个常见的误解是注册商出售域名；这些域名实际上归注册管理机构所有，只能由用户租赁。”
</b></details>

<details>
<summary>鉴于以下 FQDN， <code>www.blipblop.com</code>，根是什么？</summary><br><b>

`.` 是根
</b></details>

<details>
<summary>鉴于以下 FQDN， <code>www.blipblop.com</code>，什么是顶级域名？</summary><br><b>

`.com.` 是顶级域名
</b></details>

<details>
<summary>鉴于以下 FQDN， <code>www.blipblop.com</code>，什么是二级域名？</summary><br><b>

`blipblop.com.` 是二级域名
</b></details>

<details>
<summary>鉴于以下 FQDN， <code>www.blipblop.com</code>，什么是域？</summary><br><b>

`www.blipblop.com.` 是域
</b></details>

<details>
<summary>描述 DNS 高层解决工作流程</summary><br><b>

一般来说，流程如下：

  * 用户在 Web 浏览器中输入地址 (some_site.com)
  * 操作系统从浏览器获取请求来翻译用户输入的地址
  * 创建的查询用于检查系统中是否存在该地址的本地条目。如果没有，请求将转发到 DNS 解析器
  * 解析器是一个服务器，通常由您配置 ISP 当您连接到互联网时，负责通过联系其他人来解决您的疑问 DNS 服务器
  * 解析器联系根名称服务器（也称为 .）
  * 根名称服务器要么使用您正在查找的地址进行响应，要么使用相关顶级域的地址进行响应 DNS 服务器（如果您的地址以 org 结尾，则 org TLD)
  * 然后解析器联系 TLD DNS. TLD DNS 可能会回复您正在寻找的地址。如果没有该信息，它将提供地址 SLD DNS 服务器
  * SLD DNS 服务器将地址回复给解析器
  * 解析器将此信息传递给浏览器，而您的 OS 也将这些信息存储在缓存中
  * 用户开心地浏览网站:D
</b></details>

<a name="dns---records"></a>
##### DNS - Records

<details>
<summary>什么是 DNS 记录？</summary><br><b>

域名和域名之间的映射 IP 地址。
</b></details>

<details>
<summary>有哪些类型 DNS 记录有吗？</summary><br><b>

  * 一个
  * CNAME
  * PTR
  * MX
  * AAAA
  ...

更详细的列表，可以找到 [这里](https://www.nslookup.io/learning/dns-record-types)
</b></details>

<details>
<summary>什么是A记录？</summary><br><b>

A（地址）：将主机名映射到 IPv4 地址。

当计算机有多个适配器卡并且 IP 地址，应该有多个地址记录。
</b></details>

<details>
<summary>什么是 AAAA 记录？</summary><br><b>

AAAA record 与 A record 作用类似，但它指向的是 IPv6 地址。
</b></details>

<details>
<summary>什么是 CNAME 记录？</summary><br><b>

CNAME：将一个主机名映射到另一个主机名。

目标应该是一个域名，必须带有 A 或 AAAA 记录。将其视为别名记录。
</b></details>

<details>
<summary>什么是 PTR 记录？</summary><br><b>

虽然 A 记录将域名指向 IP 地址，一个 PTR record 做相反的事情并解决 IP 地址到域名。
</b></details>

<details>
<summary>什么是 MX 记录？</summary><br><b>

MX （邮件交换）指定域的邮件交换服务器，它允许将邮件传递到域中正确的邮件服务器。
</b></details>

<details>
<summary>什么是 NS 记录？</summary><br><b>

NS：可以响应的名称服务器 DNS 查询
</b></details>

<a name="dns---ttl"></a>
##### DNS - TTL

<details>
<summary>解释一下 DNS 记录 TTL</summary><br><b>

[varonis.com](https://www.varonis.com/blog/dns-ttl): "DNS TTL （生存时间）是一个设置，告诉 DNS 解析器在请求新查询之前将查询缓存多长时间。然后，收集到的信息将存储在递归或本地解析器的缓存中，以供 TTL 在它返回收集新的、更新的详细信息之前。”
</b></details>

<a name="dns---misc"></a>
##### DNS - 杂项

<details>
<summary>是 DNS 使用 TCP 或 UDP?</summary><br><b>

DNS 使用 UDP 端口 53 用于解决常规或反向查询。 DNS 使用 TCP 用于区域传输。
</b></details>

<details>
<summary>判断题： DNS 可用于负载平衡</summary><br><b>

正确。
</b></details>

<details>
<summary>哪些技术是 DNS 可以用于负载均衡吗？</summary><br><b>
有几种技术可以 DNS 可用于负载平衡，包括：

* 循环赛 DNS

* 加权循环赛 DNS

* 最少连接数

* 地理DNS
</b></details>

<details>
<summary>什么是 DNS 区？</summary><br><b>
一个 DNS zone 是一个逻辑容器，包含所有 DNS 特定域名的资源记录。
</b></details>

<details>
<summary>有哪些类型的区域？</summary><br><b>
有几种类型，包括：

* 主区域：主区域是存储在主控中的读/写区域 DNS 服务器。

* 辅助区域：辅助区域是存储在从属区域中的主区域的只读副本 DNS 服务器。 

* 存根区域：存根区域是一种仅包含有关域名的基本信息的区域。它用于减少 DNS 并提高交通效率 DNS 解决过程。
</b></details>
