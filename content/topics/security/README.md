<a name="security"></a>
# 安全性

<details>
<summary>什么是 DevSecOps？它的主要核心是什么？</summary><br><b>

所选公司的一些报价：

[斯尼克](https://snyk.io/series/devsecops): "DevSecOps 指将安全实践集成到 DevOps 软件交付模型。它的基础是一种通过流程和工具实现开发和运营的文化，以共同承担交付安全软件的责任。”

[Red Hat](https://www.redhat.com/en/topics/devops/what-is-devsecops): “DevSecOps 代表开发、安全和运营。这是一种文化、自动化和平台设计方法，将安全性作为整个 IT 生命周期中的共同责任。”

[杰蛙](https://jfrog.com/devops-tools/what-is-devsecops): "DevSecOps 原则和实践与传统的 DevOps 与集成的多学科团队共同努力，实现安全的持续软件交付。的 DevSecOps 开发生命周期是一个重复的过程，从开发人员编写代码开始，触发构建，将软件包部署到生产环境并监视运行时发现的问题，但包括每个阶段的安全性。”
</b></details>

<details>
<summary>“零信任”概念意味着什么？组织如何应对？</summary><br><b>

[Codefresh 定义](https://codefresh.io/security-testing/codefresh-runner-overview)：“零信任是一种安全概念，其核心思想是组织永远不应该信任并非源自其域的任何人或任何事物。寻求零信任的组织会自动假设其委托的任何外部服务存在安全漏洞，并可能泄露敏感信息”
</b></details>

<details>
<summary>解释最小权限原则</summary><br><b>

最小权限原则是指只向用户、角色和 ServiceAccount 授予完成其职责所需的最小权限。如果一个实体不需要某项访问权限，就不应该拥有该权限。
</b></details>

<details>
<summary>是什么意思“FIPS 符合”？</summary><br><b>
</b></details>

<details>
<summary>什么是证书颁发机构？</summary><br><b>
 
 [维基百科](https://en.wikipedia.org/wiki/Certificate_authority) ：存储、签署和颁发证书的证书颁发机构。
 
 证书证明网站提供的公钥的真实性。它可以防止 [中间人](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) 通过提供大量识别公钥的信息来进行攻击。内提供的重要信息 [X.509](https://www.ssl.com/faqs/what-is-an-x-509-certificate/) 证书就像：
  * 版本号
  * 序列号
  * 签名算法 ID
  * 发行人名称 
  * 有效期
  * 主题名称
  * 主题公钥信息
 
每个证书都必须由受信任的颁发机构签名，证书链是由更受信任的颁发机构签名的多个证书的串联，这些证书由网站传递给根证书颁发机构（CA）。根证书颁发机构是最受信任的顶级颁发机构，每个浏览器都原生地使用其证书。
 
</b></details>

<details>
<summary>解释一下 RBAC （基于角色的访问控制）</summary><br><b>

基于用户角色的访问控制（即，用户基于给定角色的显式或隐式假设而接收的访问授权的集合）。角色权限可以通过角色层次结构继承，并且通常反映在组织内执行定义的功能所需的权限。给定的角色可以适用于单个人或多个人。

- RBAC 映射到工作职能，假设一个人将在组织内承担不同的角色、加班以及与以下方面相关的不同职责 IT 系统。
</b></details>

<a name="security---authentication-and-authorization"></a>
#### 安全 - 身份验证和授权

<details>
<summary>解释身份验证和授权</summary><br><b>

身份验证是识别服务或个人是否是其声称的身份的过程。
授权是识别服务或人员拥有的访问级别的过程（身份验证完成后）
</b></details>

<details>
<summary>有哪些认证方法？</summary><br><b>
</b></details>

<details>
<summary>举例说明基本的身份验证过程</summary><br><b>

用户使用浏览器向某些服务器进行身份验证。它通过使用授权字段来实现这一点，该字段由用户名和密码与单个冒号组合而成。结果字符串使用特定的字符集进行编码，该字符集兼容 US-ASCII. 授权方法+一个空格被添加到编码字符串之前。
</b></details>

<details>
<summary>身份验证的三个主要因素是什么？分别举出三个例子</summary><br><b>

你有的东西
- 智能卡
- 物理认证装置
- 软件令牌

你知道的事
- 密码
- PIN
- 密码

你是什么东西
- 指纹
- 虹膜或视网膜扫描
- 步态分析
</b></details>

<details>
<summary>解释基于令牌的身份验证</summary><br><b>
</b></details>

<details>
<summary>解释基于风险的身份验证</summary><br><b>
</b></details>

<details>
<summary>解释什么是单点登录</summary><br><b>

SSO （单点登录）是一种访问控制方法，使用户只需登录一次即可访问多个软件系统的资源，而不会提示再次登录。
</b></details>

<details>
<summary>解释 Kerberos 身份验证协议如何工作 SSO 解决方案</summary><br><b>

Kerberos 的工作原理是 SSO 解决方案仅要求用户在特定的有效时间窗口内使用其凭据登录一次。 Kerberos 身份验证向用户授予票证授予票证 (TGT）来自受信任的身份验证服务器，然后可以使用该服务器请求服务票证以访问各种服务和资源。通过传递这个加密的 TGT 用户无需为每个与 Kerberos 集成的资源多次登录，而不需要凭据。
</b></details>

<details>
<summary>Kerberos 是否使用对称加密、非对称加密、两者都使用，还是两者都不使用？</summary><br><b>

对称加密 - Kerberos 仅使用具有预共享密钥的对称加密来传输加密信息和授权用户。
</b></details>

<details>
<summary>解释一下 MFA （多重身份验证）</summary><br><b>

多重身份验证（也称为 2FA）。允许用户在登录帐户时出示两项证据（凭据）。

- 凭据属于以下三类中的任何一类：您知道的东西（例如密码或 PIN）、您拥有的东西（例如智能卡）或您的东西（例如您的指纹）。  凭证必须来自两个不同类别以增强安全性。
</b></details>

<details>
<summary>解释 OAuth</summary><br><b>
</b></details>

<a name="security---passwords"></a>
#### 安全 - 密码

<details>
<summary>您如何在不同的工具和平台中管理敏感信息（例如密码）？</summary><br><b>
</b></details>

<details>
<summary>您熟悉哪些密码攻击？</summary><br><b>

  * 字典
  * 暴力破解
  * 密码喷洒
  * 社会工程
    * 捕鲸
    * 语音钓鱼
    * 网络钓鱼
    * 捕鲸
</b></details>

<details>
<summary>如何减轻密码攻击？</summary><br><b>

  * 强密码策略
  * 不要重复使用密码
  * 验证码
  * 培训反社会工程人员
  * 基于风险的身份验证
  * 速率限制
  * MFA
</b></details>

<details>
<summary>什么是密码加盐？它有助于阻止什么攻击？</summary><br><b>

密码加盐是在对新的组合值进行哈希处理之前，在用户密码前面或后面添加一系列字符的处理。对于每个用户，该值应该不同，但每次验证时都应将相同的盐应用于相同的用户密码。

 这确保了具有相同密码的用户在密码数据库中存储的哈希值仍然非常不同。此过程特别有助于阻止彩虹表攻击，因为需要为数据库中的每个用户计算新的彩虹表。
</b></details>

<a name="security---cookies"></a>
#### 安全 - Cookie

<details>
<summary>什么是cookie？解释基于 cookie 的身份验证</summary><br><b>
</b></details>

<details>
<summary>判断题：基于 Cookie 的身份验证是有状态的</summary><br><b>

正确。基于 Cookie 的身份验证会话必须同时保留在服务器端和客户端。
</b></details>

<details>
<summary>解释一下cookies的使用流程</summary><br><b>

1. 用户输入凭据
2. 服务器验证凭据 -> 创建会话并将其存储在数据库中
3. 带有会话的 cookie ID 在该用户的浏览器中设置
4. 根据每个请求，会话 ID 已根据数据库进行验证
5. 当用户注销时，会话将被销毁（在客户端和服务器端）
</b></details>

<a name="security---ssh"></a>
#### 安全 - SSH

<details>
<summary>什么是 SSH 它是如何运作的？</summary><br><b>

[维基百科定义](https://en.wikipedia.org/wiki/SSH_(Secure_Shell)): "SSH 或安全 Shell 是一种加密网络协议，用于在不安全的网络上安全地运行网络服务。”

[Hostinger.com 定义](https://www.hostinger.com/tutorials/ssh-tutorial-how-does-ssh-work): "SSH，或安全 Shell，是一种远程管理协议，允许用户通过 Internet 控制和修改其远程服务器。”

[这个网站](https://www.hostinger.com/tutorials/ssh-tutorial-how-does-ssh-work) 以一种很好的方式解释它。
</b></details>

<details>
<summary>的作用是什么 SSH 钥匙？</summary><br><b>
 
[维基百科定义](https://en.wikipedia.org/wiki/Secure_Shell) : SSH 使用公钥加密技术对远程计算机进行身份验证并允许其对用户进行身份验证。创建两个密钥，私钥存储在用户的计算机内以解密通信，然后公钥存储在用户想要连接的远程计算机内，并用于加密通信。
 
</b></details>

<a name="security---cryptography"></a>
#### 安全 - 密码学

<details>
<summary>解释对称加密</summary><br><b>

对称加密是使用密钥来加密和解密数据/整个通信的任何技术。
</b></details>

<details>
<summary>解释非对称加密</summary><br><b>

非对称加密是使用两个不同密钥用于加密和解密的任何技术，这些密钥称为公钥和私钥。
</b></details>

<details>
<summary>什么是密码学中的“密钥交换”（或“密钥建立”）？</summary><br><b>

[维基百科](https://en.wikipedia.org/wiki/Key_exchange)：“密钥交换（也称为密钥建立）是密码学中的一种方法，通过该方法在两方之间交换加密密钥，从而允许使用加密算法。”
</b></details>

<details>
<summary>判断题：对称加密利用公钥和私钥，其中私钥用于解密用公钥加密的数据</summary><br><b>

错误。这个描述符合非对称加密。
</b></details>

<details>
<summary>判断题：私钥可以根据公钥以数学方式计算出来</summary><br><b>
错误。
</b></details>

<details>
<summary>判断题：如果是 SSH，整个过程没有使用非对称加密 SSH 会话</summary><br><b>

正确。仅在对称加密的密钥交换算法中使用。
</b></details>

<details>
<summary>什么是哈希？</summary><br><b>

散列是一种数学函数，用于将任意大小的数据映射到固定大小的值。此函数生成数据的“摘要”，可用于验证数据是否未被修改（以及其他用途）
</b></details>

<details>
<summary>散列与加密有何不同？</summary><br><b>

加密数据可以解密为其原始值。哈希数据无法反转以查看原始数据 - 哈希是一种单向函数。
</b></details>

<details>
<summary>哈希是如何组成的 SSH?</summary><br><b>

哈希值用于 SSH 验证消息的真实性并验证接收到的数据没有被篡改。
</b></details>

<a name="security---attacks-threats-and-vulnerabilities"></a>
#### 安全 - 攻击、威胁和漏洞
<details>
<summary>解释以下内容：

  * 漏洞
  * 功绩
  * 风险
  * 威胁</summary><br><b>
</b></details>

<details>
<summary>你熟悉“OWASP 前 10 名”？</summary><br><b>

阅读相关内容 [这里](https://owasp.org/www-project-top-ten)
</b></details>

<details>
<summary>什么是 XSS?</summary><br><b>

跨站脚本（XSS）是一种攻击，攻击者将浏览器可执行代码插入到 HTTP 回应。现在注入的攻击不会存储在Web应用程序中，它只会影响打开恶意制作的链接或第三方网页的用户。成功的攻击允许攻击者访问浏览器保留并用于该站点的任何 cookie、会话令牌或其他敏感信息 

您可以通过检测用户定义的变量以及如何输入它们来进行测试。这包括隐藏或不明显的输入，例如 HTTP 参数， POST 数据、隐藏表单字段值以及预定义的单选或选择值。然后，您分析每个找到的向量，看看它们是否是潜在的漏洞，然后当找到时，您可以使用每个输入向量制作输入数据。然后测试精心设计的输入并查看其是否有效。
</b></details>

<details>
<summary>什么是 SQL 注射？如何管理呢？</summary><br><b>

SQL 注入是一种由插入部分或全部内容组成的攻击 SQL 通过从浏览器向 Web 应用程序输入数据进行查询。当一个成功的 SQL 注入发生后，攻击者将能够读取存储在 Web 应用程序数据库中的敏感信息。 

您可以使用存储过程进行测试，因此应用程序必须清理用户输入以消除代码注入的风险。如果没有，那么用户可能会输入错误 SQL，然后将在过程中执行
</b></details>

<details>
<summary>什么是认证机构？</summary><br><b>
</b></details>

<details>
<summary>您如何识别和管理漏洞？</summary><br><b>
</b></details>

<details>
<summary>解释一下“权限限制”</summary><br><b>
</b></details>

<details>
<summary>如何 HTTPS 不同于 HTTP?</summary><br><b>
中的“S” HTTPS 代表“安全”。 HTTPS 使用 TLS 提供加密 HTTP 请求和响应，以及通过对请求和响应进行数字签名来提供验证。结果， HTTPS 比安全得多 HTTP 大多数现代网站默认使用。
</b></details>

<details>
<summary>有哪些类型的防火墙？</summary><br><b>
</b></details>

<details>
<summary>什么是 DDoS 攻击？你如何处理它？</summary><br><b>
</b></details>

<details>
<summary>什么是端口扫描？什么时候使用？</summary><br><b>
</b></details>

<details>
<summary>异步加密和同步加密有什么区别？</summary><br><b>
</b></details>

<details>
<summary>解释一下中间人攻击</summary><br><b>
</b></details>

<details>
<summary>解释一下 CVE 和 CVSS</summary><br><b>
 
  [Red Hat](https://www.redhat.com/en/topics/security/what-is-cve#how-does-it-work)：当有人提到 CVE（Common Vulnerabilities and Exposures，通用漏洞披露）时，通常指的是已分配 CVE ID 的漏洞条目。CVE 本身不包含完整技术细节，也不直接给出风险、影响或修复方案。因此，CVE 主要是一个标准化标识符，格式通常是 `CVE-年份-编号`。
 任何人都可以提交漏洞， [利用数据库](https://www.exploit-db.com/submit) 解释如何提交。
  
然后 CVSS 代表通用漏洞评分系统，它尝试为漏洞分配严重性分数，从而允许根据威胁对响应和资源进行排序和优先级排序。 
 
</b></details>

<details>
<summary>什么是 ARP 中毒？</summary><br><b>
</b></details>

<details>
<summary>描述如何保护公共存储库</summary><br><b>
</b></details>

<details>
<summary>什么是 DNS 欺骗？如何预防呢？</summary><br><b>

DNS 当特定的 DNS 服务器的“欺骗”或恶意更改记录以将流量重定向到攻击者。这种流量重定向允许攻击者传播恶意软件、窃取数据等。

**预防**
- 使用加密数据传输协议 - 使用端到端加密 vian SSL/TLS 将有助于减少网站/其访问者受到损害的机会 DNS 欺骗。
- 使用 DNS美国证券交易委员会- DNSSEC（域名系统安全扩展）使用数字签名 DNS 记录以帮助确定数据的真实性。
- 实施 DNS 欺骗检测机制 - 实施很重要 DNS 欺骗检测软件。 XArp 等产品可帮助产品对抗 ARP 通过在传输数据之前检查通过的数据来进行缓存中毒。
</b></details>

<details>
<summary>关于 Stuxnet，你能告诉我什么吗？</summary><br><b>

Stuxnet 是一种计算机蠕虫病毒，最初针对伊朗核设施，后来发生变异并传播到其他工业和能源生产设施。最初的 Stuxnet 恶意软件攻击针对的是用于自动化机器流程的可编程逻辑控制器 (PLC)。它在 2010 年被发现后引起了媒体的广泛关注，因为它是第一个已知的能够破坏硬件的病毒，而且外界普遍认为它与美国国家安全局（NSA/CIA）和以色列情报部门有关。
</b></details>

<details>
<summary>关于 BootHole 漏洞，您能告诉我什么吗？</summary><br><b>
</b></details>

<details>
<summary>关于《幽灵》你能告诉我什么吗？</summary><br><b>

Spectre 是一种允许黑客“偷偷阅读”其无法访问的程序的攻击方法。使用代码，黑客迫使程序提取其加密密钥，从而允许完全访问该程序
</b></details>

<details>
<summary>解释“格式字符串漏洞”</summary><br><b>
</b></details>


<details>
<summary>解释一下 DMZ</summary><br><b>
</b></details>

<details>
<summary>解释一下 TLS</summary><br><b>
</b></details>

<details>
<summary>什么是 CSRF？如何处理 CSRF?</summary><br><b>

跨站请求伪造（CSRF）是一种攻击，使最终用户在用户具有经过身份验证的会话的 Web 应用程序上发起不需要的操作，攻击者可能会使用电子邮件并强制最终用户单击链接，然后执行恶意操作。当 CSRF 攻击成功将危及最终用户数据 

您可以使用 OWASP ZAP 分析“请求”，如果安全级别设置为 0 时似乎没有针对跨站点请求伪造的保护（csrf-token 的值为 安全IsDisabled）。可以使用此请求中的数据来准备一个 CSRF 使用攻击 OWASP ZAP
</b></details>

<details>
<summary>解释一下 HTTP 标头注入漏洞</summary><br><b>

HTTP 当用户输入不安全地包含在服务器响应标头中时，就会出现标头注入漏洞。如果攻击者可以将换行符注入标头，那么他们就可以注入新的 HTTP 标头，并且还通过注入空行，将标头突破到消息正文中，并将任意内容写入应用程序的响应中。
</b></details>

<details>
<summary>您使用哪些安全来源来了解最新消息？</summary><br><b>
</b></details>

<details>
<summary>什么 TCP 和 UDP 您熟悉漏洞吗？</summary><br><b>
</b></details>

<details>
<summary>使用 VLAN 有助于网络安全吗？</summary><br><b>
</b></details>

<details>
<summary>安全架构要求有哪些示例？</summary><br><b>
</b></details>

<details>
<summary>什么是气隙网络（或气隙环境）？它的优点和缺点是什么？</summary><br><b>
</b></details>

<details>
<summary>解释一下什么是缓冲区溢出</summary><br><b>

当数据量超过内存缓冲区的存储容量时，就会发生缓冲区溢出（或缓冲区溢出）。结果，尝试将数据写入缓冲区的程序会覆盖相邻的存储位置。
</b></details>

<details>
<summary>什么是随机数？</summary><br><b>
</b></details>

<details>
<summary>什么是 SSRF?</summary><br><b>

SSRF （服务器端请求伪造）这是一个漏洞，您可以使服务器向您想要的任何地方发出任意请求。

阅读更多相关信息，请访问 [港口网站](https://portswigger.net/web-security/ssrf)
</b></details>

<details>
<summary>解释一下 MAC 洪水攻击</summary><br><b>

MAC 地址泛洪攻击（CAM 表洪水攻击）是一种网络攻击，连接到交换机端口的攻击者使用大量具有不同虚假源的以太网帧淹没交换机接口 MAC 地址。
</b></details>

<details>
<summary>什么是端口泛洪？</summary><br><b>
</b></details>

<details>
<summary>什么是“Diffie-Hellman 密钥交换”以及它如何工作？</summary><br><b>

你听说过吗 [二将军的问题](https://en.wikipedia.org/wiki/Two_Generals%27_Problem)？ Diffie-Hellman 密钥交换是此问题的解决方案，允许通过加密通道安全交换加密密钥。

它使用公钥/私钥对（非对称加密）来工作。希望通过公共通道安全通信的两方将各自生成公钥/私钥对并将公钥分发给另一方（请注意，公钥可以通过公共通道自由交换）。从这里，每一方都可以使用他们的个人私钥和另一方的公钥的组合来导出共享密钥。该组合密钥现在可以用作通信的对称加密密钥。
</b></details>

<details>
<summary>解释“前向保密”</summary><br><b>
</b></details>

<details>
<summary>什么是缓存中毒拒绝服务？</summary><br><b>

CPDoS 或缓存中毒拒绝服务。它使人中毒 CDN 缓存。通过操纵某些标头请求，攻击者迫使源服务器返回一个 Bad Request 错误，该错误存储在 CDN的缓存。因此，攻击后发出的每个请求都会收到一个错误页面。
</b></details>

<details>
<summary>如果有的话有什么区别 SSL 和 TLS?</summary><br><b>
</b></details>

<details>
<summary>什么是 SSL 终止（或 SSL 卸载）？</summary><br><b>

SSL 终止是解密加密流量的过程。优势在于 SSL 终止是服务器不必执行它，我们可以使用 SSL 终止以减少服务器上的负载，加速某些进程，并允许服务器专注于其核心功能（例如交付内容）
</b></details>

<details>
<summary>什么是 SNI （服务器名称指示）？</summary><br><b>

[维基百科](https://en.wikipedia.org/wiki/Server_Name_Indication)：“传输层安全的扩展（TLS）计算机网络协议，客户端通过该协议在握手过程开始时指示它尝试连接到哪个主机名”
</b></details>

<details>
<summary>有什么好处 SNI 介绍？</summary><br><b>

SNI 允许单个服务器使用相同的证书来提供多个证书 IP 和港口。<br>
实际上，这意味着单个 IP 可以服务器多个 Web 服务/页面，每个服务/页面使用不同的证书。
</b></details>

<details>
<summary>解释“Web 缓存欺骗附加”</summary><br><b>

[这篇博文](https://omergil.blogspot.com/2017/02/web-cache-deception-attack.html) 详细解释一下。
</b></details>

<a name="security---threats"></a>
#### 安全 - 威胁

<details>
<summary>解释“高级持续威胁（APT)"</summary><br><b>
</b></details>

<details>
<summary>什么是信息安全中的“后门”？</summary><br><b>
</b></details>

<a name="software-supply-chain-security"></a>
#### 软件供应链与安全 

<details>
<summary>简要描述什么是软件供应链。 </summary><br><b>

公司的软件供应链由任何可用于危害最终产品的第三方或开源组件组成。这样的组件通常是一个 API 由演员提供。例如提供移动通信的 Twilio API给他们的客户。 

[白源](https://www.whitesourcesoftware.com/resources/blog/software-supply-chain-security-the-basics-and-four-critical-best-practices/)：“企业软件项目越来越依赖第三方和开源组件。这些组件由未受雇于开发主要软件的组织的个人创建和维护，并且不一定使用与组织相同的安全策略。这会带来安全风险，因为这些策略之间的差异或不一致可能会造成攻击者试图利用的被忽视的漏洞区域。” 
</b></details>

<details>
<summary>软件供应链有哪些好处？ </summary><br><b>

[增量](https://increment.com/apis/apis-supply-chain-software/)：节省资源。使用现有的解决方案并付费来解决资源密集型问题可以节省时间和金钱。因此，为消费者开发和部署软件产品提供了高效、廉价和更多的机会。 
</b></details>

<details>
<summary> 给出与软件供应链相关的三种潜在安全威胁的三个示例并进行描述。</summary><br><b>

[IEEE](https://ieeexplore.ieee.org/abstract/document/9203862): 

  * 敏感数据被泄露或丢失。
    * 在软件供应链中，敏感数据可能会在整个供应链中传递。安全威胁涉及此类数据的丢失或暴露，例如客户信用卡详细信息。
  * 云技术。
    * 云中的数据共享可能会危及链内数据的隐私。
  * 第三方供应商。
    * 第三方供应商的代码解决方案可能无法提供足够的网络安全性，并且存在潜在的数据泄露风险。
</b></details>

<a name="package-management-security"></a>
#### 包管理和安全 

<details>
<summary> 什么是包管理器？
</summary><br><b>

[鲍德里等人。](https://arxiv.org/pdf/2001.07808.pdf)：“该工具可让您轻松下载、添加并在项目中重用编程库。”例如npm 或纱线。
</b></details>

<details>
<summary> 什么是构建工具？
</summary><br><b>

[鲍德里等人。](https://arxiv.org/pdf/2001.07808.pdf)：“一种获取编译、测试和部署应用程序所需的包（依赖项）的工具。” 
</b></details>

<details>
<summary> 描述臃肿的依赖关系。
</summary><br><b>

[鲍德里等人。](https://arxiv.org/pdf/2001.07808.pdf): 
应用程序通常具有不同的依赖关系。通常，构建和运行应用程序并不需要所有这些。臃肿的依赖项是指在构建和运行应用程序时包含不必要的依赖项的概念。 
</b></details>

<details>
<summary> 解释臃肿的依赖关系的一些缺点。
</summary><br><b>

[鲍德里等人。](https://arxiv.org/pdf/2001.07808.pdf): 

  * 管理起来有挑战性。
  * 降低应用程序的性能。
  * 威胁行为者可以利用的恶意代码风险。 
</b></details>

<details>
<summary> 有哪些解决方案可以管理项目依赖关系？
</summary><br><b>

[Npm.js 文档](https://docs.npmjs.com/cli/v8/commands/npm-prune)：使用通常由包管理器作者提供的清理命令。例如， npm prune 将删除任何无关的包。另一个命令是 npmaudit，它将扫描您的存储库并报告发现的任何易受攻击的依赖项。
</b></details>

<details>
<summary> 什么是威胁行为者以及该行为者如何利用开源或第三方供应商的软件包/库？ 
</summary><br><b>

[维基百科](https://en.wikipedia.org/wiki/Threat_actor)：威胁行为者是指以软件、网络和/或设备等技术工件为目标并以对其造成损害的一个或多个人。

[AquaSec](https://www.aquasec.com/cloud-native-academy/devsecops/supply-chain-security/)：攻击者可能会识别、瞄准开源包或第三方供应商代码中的脆弱部分，并注入恶意软件。代码使用者可能在不知情的情况下通过整个 pipeline 部署恶意代码，从而感染自己的项目。SolarWinds 攻击就是这类供应链攻击的例子之一：[SolarWinds](https://www.npr.org/2021/04/16/985439655/a-worst-nightmare-cyberattack-the-untold-story-of-the-solarwinds-hack)。
</b></details>

<details>
<summary> 如何确保您的项目使用值得信赖的包？
</summary><br><b>

你不能。一旦开始使用开源或供应商软件包，您将始终面临安全风险。目标是最大限度地降低风险，以避免安全漏洞。这可以通过以下方式完成：

  * 定期更新项目的依赖项以应用最新的错误修复和漏洞清理。
  * 但是，除非您信任作者，否则不要立即更新您的依赖项，因为最近的软件包更新已成为黑客的常见目标。
  * 检查以前版本中文件内容的更改。 
</b></details>

<details>
<summary> 解释一下校验和。
</summary><br><b>

[弗雷德·科恩（需要许可）](https://reader.elsevier.com/reader/sd/pii/0167404887900319?token=D5339ABC064AD9A2B50B74D8CE890B0E22A302A0BC461A50078D407BEA01052737DC6AAEF95A854E72A73B6D0C67E260&originRegion=eu-west-1&originCreation=20220502180611)：校验和是一种在没有内置保护的系统中验证信息完整性的方法。换句话说，它提供了一种验证文件或包/库的内容是否完整的方法。这很有用，因为在文件传输过程中可能会发生攻击或错误。但是，它要求包作者为文件/包运行校验和函数，该函数为该版本的文件创建特定的哈希值。文件内容的微小更改将导致不同的校验和。如果您有权访问文件的原始校验和，您可以自行运行校验和。如果生成的校验和与原始校验和匹配，则文件中没有进行任何更改。您现在可以得出结论，在文件传输过程中没有发生错误或恶意注入。 
</b></details>

<a name="microsegmentation"></a>
## 微分段

<details>
<summary>什么是微分段？</summary><br><b>

- 安全方法
- 管理端点（进程、设备、实例）之间的网络访问
- 应用安全策略限制流量的方法
  - 基于“零信任”和“最小特权”等概念
- 微分段的结果应该是：
  - 攻击能力降低
  - 更好的违规遏制
</b></details>

<details>
<summary>为什么我们需要微分段解决方案？为什么仅使用防火墙之类的东西还不够？</summary><br><b>

- 防火墙专注于南北流量。基本上是公司范围之外的交通
- 被认为是东西向、内部工作流程和通信的流量通常不予处理
</b></details>

<details>
<summary>微分段是如何应用的？</summary><br><b>

 应用微分段有不同的方法：

- 云原生：使用云嵌入式功能，例如安全组、防火墙等。
- 代理：运行在不同端点（实例、服务等）上的代理
- 网络：修改网络设备及其配置以创建微分段 

</b></details>

<details>
<summary>微分段背景下的短暂环境是什么？</summary><br><b>

- 这些是短暂的资源，例如快速启动和停止的容器或无服务器功能。
- 由于它们的持续时间不长，因此它们需要能够快速变化的安全规则。
- 微分段可以为每个人提供其所需的网络访问权限，仅此而已。

</b></details>

<details>
<summary>微分段如何帮助防止横向移动？</summary><br><b>

- 它为服务或系统如何相互通信制定了严格的规则。
- 如果一个系统遭到黑客攻击，攻击者就无法轻易转移到其他系统。
- 通过将系统划分为更小的区域，可以使整个网络更难被入侵。

</b></details>

<details>
<summary>扩展微分段时会出现哪些挑战？</summary><br><b>

- 随着更多系统的添加，管理所有规则变得更加困难。
- 当一切都在不断变化时，很难保持安全规则的一致性。
- 您还必须小心，在保证一切安全的同时不要放慢速度。

</b></details>
