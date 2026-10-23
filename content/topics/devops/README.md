<a name="devops"></a>
# DevOps

<a name="questions"></a>
## 问题

<a name="general"></a>
### 一般 

<details>
<summary>什么是 DevOps?</summary><br><b>

的定义 DevOps 来自选定的公司：

**亚马逊**：

"DevOps 是文化理念、实践和工具的结合，可提高组织高速交付应用程序和服务的能力：以比使用传统软件开发和基础设施管理流程的组织更快的速度发展和改进产品。这种速度使组织能够更好地服务客户并更有效地参与市场竞争。”

**微软**：

"DevOps 是人员、流程和产品的结合，旨在为我们的最终用户持续交付价值。 “Dev”和“Ops”的缩写是指取代孤立的开发和运营，以创建多学科团队，这些团队现在使用共享且高效的实践和工具进行协作。必备 DevOps 实践包括敏捷规划、持续集成、持续交付和应用程序监控。”

**Red Hat**：

"DevOps 描述了加速一个想法（如新的软件功能、增强请求或错误修复）从开发到在生产环境中部署的过程的方法，在生产环境中它可以为用户提供价值。这些方法要求开发团队和运营团队经常沟通，并以对队友的同理心来开展工作。可扩展性和灵活的配置也是必要的。与 DevOps那些最需要电力的人可以通过自助服务和自动化获得电力。开发人员通常在标准开发环境中进行编码，与 IT 加速软件构建、测试和发布的操作，而不牺牲可靠性。”

**Google**：

“......旨在提高软件交付速度、提高服务可靠性并在软件利益相关者之间建立共享所有权的组织和文化运动”
</b></details>

<details>
<summary>有什么好处 DevOps？它能帮助我们实现什么目标？</summary><br><b>

  * 协作
  * 改善交付
  * 安全性
  * 速度
  * 规模
  * 可靠性
</b></details>

<details>
<summary>什么是反模式 DevOps?</summary><br><b>

举几个例子：

* 专人负责特定任务。例如，只有一个人可以将其他人的代码合并到存储库中。
* 以不同的方式对待生产环境和开发环境。例如，没有在开发环境中实施安全性
* 不允许某人在周五投入生产；）
</b></details>

<details>
<summary>你会如何描述一个成功的 DevOps 工程师还是团队？</summary><br><b>

答案可以集中在：

* 协作
* 沟通
* 设置和改进工作流程和流程（与测试、交付等相关）
* 处理问题

需要考虑的事情：

* 什么 DevOps 团队或工程师应该 NOT 专注或做什么？
* 做 DevOps 团队或工程师是否必须将创新或实践创新作为其职责的一部分？
</b></details>

<details>
<summary>您的一位团队成员建议设定一个“每天至少部署 20 次”的目标 CD。您对此有何看法？</summary><br><b>

有几点想法：

1. 为什么这是一个重要目标？它是否会以某种方式影响业务？关键绩效指标之一？换句话说，这重要吗？
2. 这可能会带来风险，例如为了数量而失去质量
3. 您可能想要设定一个可能更好的目标，例如“能够在我们需要部署时进行部署”
</b></details>

<a name="tooling"></a>
### 工装

<details>
<summary>选择工具/技术时您会考虑什么？</summary><br><b>

需要考虑的一些想法：

  * 成熟/稳定 vs. 前沿
  * 社区规模
  * 架构方面 - 代理与无代理、主控与无主控等。
  * 学习曲线
</b></details>

<details>
<summary>您能否描述一下您在以下某些领域选择使用哪种工具或平台以及如何使用？

  * CI/CD
  * 配置基础设施
  * 配置管理
  * 监控和警报
  * 记录
  * 代码审查
  * 代码覆盖率
  * 问题追踪
  * 容器和容器编排
  * 测试</summary><br><b>

这是上一个问题的更实用的版本，您可能会被问到有关您选择的技术的其他具体问题

  * CI/CD - Jenkins, CircleCI, Travis CI, Drone, Argo CD, Zuul
  * Infrastructure as Code - Terraform, CloudFormation
  * 配置管理 - Ansible, Puppet, Chef
  * 监控和告警 - Prometheus, Nagios
  * 日志 - Logstash, Graylog, Fluentd
  * 代码审查 - Gerrit, Review Board
  * 代码覆盖率 - Cobertura、Clover、JaCoCo
  * 问题跟踪 - Jira、Bugzilla
  * 容器和容器编排 - Docker, Podman, Kubernetes, Nomad
  * 测试 - Robot Framework, Serenity, Gauge
</b></details>

<details>
<summary>您的团队成员建议更换当前的 CI/CD 组织使用新平台。你会如何回复？</summary><br><b>

需要考虑的事情：

* 这样做我们能得到什么？新平台有什么新功能吗？新平台是否解决了当前平台中存在的一些限制？
* 这个建议的依据是什么？换句话说，他/她是否尝试过新平台？是否进行了广泛的技术研究？
* 从一种平台切换到另一种平台对组织有何要求？例如，培训使用该平台的用户？团队需要在这样的举措上投入多少时间？
</b></details>

<a name="version-control"></a>
### 版本控制

<details>
<summary>什么是版本控制？</summary><br><b>
	
* 版本控制是跟踪和管理软件代码更改的系统。
* 它可以帮助软件团队管理源代码随时间的变化。
* 版本控制还可以帮助开发人员更快地行动，并允许软件团队在团队规模扩大以包含更多开发人员时保持效率和敏捷性。
</b></details>

<details>
<summary>什么是提交？</summary><br><b>
	
* 在 Git，提交是您的存储库在特定时间点的快照。
* git commit 命令将把所有分阶段的更改以及用户的简短描述保存到本地存储库的“提交”中。
</b></details>

<details>
<summary>什么是合并？</summary><br><b>

* 合并是 Git 将分离的提交历史重新整合到一起的方式。`git merge` 命令允许你把由 Git branch 创建的独立开发线整合到单个 branch 中。
</b></details>

<details>
<summary>什么是合并冲突？</summary><br><b>

* 合并冲突是发生在以下情况的事件： Git 无法自动解决两次提交之间的代码差异。当代码中的所有更改发生在不同行或不同文件中时， Git 无需您的帮助即可成功合并提交。
</b></details>

<details>
<summary>您熟悉哪些关于版本控制的最佳实践？</summary><br><b>
	
* 使用描述性提交消息
* 使每个提交成为一个逻辑单元
* 经常合并他人的更改
* 经常分享您的更改
* 与你的同事协调
* 不要提交生成的文件
* 不要提交二进制文件
</b></details>

<details>
<summary>您更喜欢“配置->部署”模型还是“部署->配置”？为什么？</summary><br><b>

两者都有优点和缺点。
以“配置->部署”模型为例，您构建一个映像供多个部署使用，部署彼此不同的可能性较小，因此它具有一致环境的明显优势。
</b></details>

<details>
<summary>解释可变与不可变基础设施</summary><br><b>

在可变基础设施范例中，更改会应用在现有基础设施之上，并且随着时间的推移
基础设施建立了变化的历史。 Ansible、Puppet 和 Chef 是工具的示例，
遵循可变基础设施范式。

在不可变基础设施范式中，每一次变化实际上都是一个新的基础设施。所以改变一下
到服务器将导致新服务器而不是更新它。 Terraform 是技术的一个例子
它遵循不可变的基础设施范例。
</b></details>

<a name="software-distribution"></a>
### 软件分发

<details>
<summary>解释“软件分发”</summary><br><b>

阅读 [这个](https://venam.nixers.net/blog/unix/2020/03/29/distro-pkgs.html) 关于这个主题的精彩文章。

文章中写道：“因此，软件分发是关于一种机制和社区，它们承担起负担和决策来构建可交付的连贯软件集合。”
</b></details>

<details>
<summary>为什么有多个软件发行版？他们可以有什么区别？</summary><br><b>

不同的发行版可以专注于不同的事情，例如：专注于不同的环境（服务器、移动、桌面）、支持特定的硬件、专注于不同的领域（安全、多媒体等）等。基本上，软件的不同方面及其支持的内容在每个发行版中获得不同的优先级。
</b></details>

<details>
<summary>什么是软件存储库？</summary><br><b>

维基百科：“软件存储库，简称“repo”，是软件包的存储位置。通常存储目录以及元数据。”

了解更多 [这里](https://en.wikipedia.org/wiki/Software_repository)
</b></details>

<details>
<summary>有哪些方式可以分发软件？每种方法的优点和缺点是什么？</summary><br><b>

  * 来源 - 在版本控制系统中维护构建脚本，以便用户可以在克隆存储库后构建您的应用程序。优点：用户可以快速查看不同版本的应用程序。缺点：需要在用户计算机上安装构建工具。
  * 存档 - 将所有应用程序文件收集到一个存档中（例如 tar）并将其交付给用户。优点：用户可以在一个文件中获得他需要的一切。缺点：更新时需要重复相同的过程，如果有很多依赖项则不好。
  * 套餐 - 取决于 OS，您可以使用您的 OS 包格式（例如 RHEL/费福德拉它是 RPM）以使用标准打包器命令安装、卸载和更新软件的方式交付您的软件。优点：包管理器负责安装、卸载、更新和依赖管理的支持。缺点：需要管理包存储库。
  * 图像 - 任一 VM 或容器映像，其中您的包包含成功运行所需的一切。优点：一切都是预装的，环境隔离度高。缺点：需要构建和优化图像的知识。
</b></details>

<details>
<summary>你熟悉《大教堂与集市模型》吗？解释一下每个模型</summary><br><b>

* Cathedral——软件发布时发布源代码
* Bazaar - 源代码始终公开可用（例如 Linux 内核）
</b></details>

<details>
<summary>什么是缓存？它是如何运作的？为什么它很重要？</summary><br><b>

缓存是对经常使用的资源的快速访问，这些资源的计算成本很高或 IO 密集且不经常改变。可以有多层缓存，可以从以下几层开始： CPU 缓存到分布式缓存系统。常见的是内存缓存和分布式缓存。 <br/> 缓存通常是包含一些数据的数据结构，例如哈希表或字典。然而，任何数据结构都可以提供缓存功能，例如集合、排序集合、排序字典等。虽然缓存在许多应用程序中使用，但如果未正确实现或正确使用，它们可能会产生微妙的错误。例如，缓存失效、过期或更新通常非常具有挑战性和困难。
</b></details>

<details>
<summary>解释无状态与有状态</summary><br><b>

无状态应用程序不在主机中存储任何数据，这使其成为水平扩展和微服务的理想选择。
有状态应用程序依赖于存储来保存状态和数据，通常数据库是有状态应用程序。
</b></details>

<details>
<summary>什么是可靠性？怎么样？ DevOps?</summary><br><b>

可靠性，当用于 DevOps 上下文，是系统从基础设施故障或中断中恢复的能力。其中一部分还在于能够根据您的组织或团队的需求进行扩展。
</b></details>

<details>
<summary>“可用性”是什么意思？有哪些方法可以跟踪服务的可用性？</summary><br><b>
</b></details>

<details>
<summary>为什么 100% 可用性不是目标？为什么大多数公司或团队都设置为99%.X？</summary><br><b>
</b></details>

<details>
<summary>描述设置某种类型的 Web 服务器（Apache、 IIS、雄猫、...)</summary><br><b>
</b></details>

<details>
<summary>网络服务器如何工作？</summary><br><b>
<a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server" title="Click here to redirect to MDN official page" style="background-color:#FFFFFF;color:#000000;text-decoration:none">根据 MDN 网络文档 -</a>
	
我们可以从两个角度来理解Web服务器，即：
	
	(i) 硬件 (ii) 软件

(i) 网络服务器只不过是存储网站组件文件的远程计算机（HTML,CSS 和 Javascript 文件）和 Web 服务器的软件。Web 服务器连接到
      the Internet and supports physical data interchange with other devices connected to the web.
	
(ii) 从软件角度看，Web Server 包含用于控制网络用户如何访问托管文件的组件。至少，它包含一个 HTTP Server。HTTP Server 能够理解 URL（网址）和 HTTP（浏览器用于访问网页的协议）。HTTP Server 可以通过其托管网站的域名被访问，并将网站内容传送到最终用户的设备。
	
<a name="how-communication-between-web-server-and-web-browsers-established"></a>
## Web 服务器和 Web 浏览器之间的通信如何建立：
	
 每当浏览器需要托管在 Web 服务器上的文件时，浏览器就会向 Web 服务器请求该页面，而 Web 服务器会使用该页面进行响应。
Web 浏览器和 Web 服务器之间的通信通过以下方式进行：

(1)用户在浏览器中输入域名，浏览器搜索 IP 输入名称的地址。可以通过两种方式完成 - 
	
    -By searching in its cache. 
    -By requesting one or more DNS (Domain Name System) Servers.

（2）了解后 IP 地址，浏览器通过以下方式请求文件 HTTP 并且请求到达正确的（硬件）Web 服务器。

(3) （软件） HTTP 服务器接受请求，找到所请求的文档，并将其发送回浏览器，也是通过 HTTP。 （如果服务器找不到所请求的文档，则会返回 404 响应。）

(4) 浏览器最终获取网页并显示，或者显示错误信息。

</b></details>

<details>
<summary>解释一下“开源”</summary><br><b>
</b></details>

<details>
<summary>描述您设计和/或实现的服务/应用程序/项目/...的架构</summary><br><b>
</b></details>

<details>
<summary>您熟悉哪些类型的测试？</summary><br><b>

造型、单元、功能、 API、整合、烟雾、场景、...

您应该能够解释您提到的那些内容。
</b></details>

<details>
<summary>您需要定期在不同的操作系统（Ubuntu、 RHEL，...）。你会怎么做？</summary><br><b>

回答这个问题有多种方法（这里没有对错之分）：

* 简单的计划任务
* 结合配置管理技术的 pipeline（例如 Puppet、Ansible、Chef 等）
...
</b></details>

<details>
<summary>什么是混沌工程？</summary><br><b>

维基百科：“混沌工程是在生产中对软件系统进行实验的学科，目的是建立对系统承受动荡和意外条件能力的信心”

了解混沌工程 [这里](https://en.wikipedia.org/wiki/Chaos_engineering)
</b></details>

<details>
<summary>什么是“基础设施即代码”？执行什么 IAC 你熟悉吗？</summary><br><b>

IAC （基础设施即代码）是定义系统基础设施或体系结构的声明性方法。一些实现是 ARM 模板用于 Azure 和 Terraform 可以跨多个云提供商工作。
</b></details>

<details>
<summary>基础设施即代码有什么好处？</summary><br><b>

- 完全自动化的配置、修改和删除基础设施的过程
- 基础设施的版本控制，使您可以快速回滚到以前的版本
- 通过自动化测试和代码审查来验证基础设施的质量和稳定性
- 减少基础设施任务的重复性
</b></details>

<details>
<summary>您如何管理构建工件？</summary><br><b>

构建工件通常存储在存储库中。它们可以在发布管道中用于部署目的。构建工件通常有保留期。
</b></details>

<details>
<summary>您正在使用/喜欢哪种持续集成解决方案？为什么？</summary><br><b>
</b></details>

<details>
<summary>您熟悉或使用过哪些部署策略？</summary><br><b>

	有以下几种部署策略：
	* 滚动
	* 蓝绿部署
	* 金丝雀发布
	* 重建策略

</b></details>

<details>
<summary>您加入了一个团队，其中每个人都开发一个项目，实践是在其工作站上本地运行测试，如果测试通过，则将其推送到存储库。目前的流程存在什么问题以及如何改进？</summary><br><b>
</b></details>

<details>
<summary>解释测试驱动开发（TDD)</summary><br><b>
</b></details>

<details>
<summary>解释敏捷软件开发</summary><br><b>
</b></details>

<details>
<summary>你对下面这句话有什么看法？：“实施或实践 DevOps 带来更安全的软件”</summary><br><b>
</b></details>

<details>
<summary>你知道什么是“事后剖析会议”吗？您对此有何看法？</summary><br><b>
</b></details>

<details>
<summary>什么是配置漂移？它造成了什么问题？</summary><br><b>

当在具有完全相同的配置和软件的服务器环境中，某个服务器时，就会发生配置漂移
或者服务器正在应用其他服务器无法获得的更新或配置，随着时间的推移，这些服务器会变得
与其他人略有不同。

这种情况可能会导致难以识别和重现的错误。
</b></details>

<details>
<summary>如何处理配置漂移？</summary><br><b>
	可以通过所需的状态配置来避免配置漂移（DSC）实施。期望的状态配置可以是定义系统应该如何的声明性文件。有一些工具可以强制执行所需的状态，例如 terraform 或 azure dsc。有增量或完整策略。
</b></details>

<details>
<summary>解释声明式和过程式风格。您熟悉（或使用）的技术使用的是过程式还是声明式风格？</summary><br><b>

声明式 - 您编写指定所需最终状态的代码<br>
程序性 - 您描述达到所需最终状态的步骤

声明式工具 - Terraform、Puppet、CloudFormation、Ansible<br>
程序工具 - Chef

为了更好地强调差异，请考虑创建两个虚拟实例/服务器。
在声明式风格中，您将指定两个服务器，该工具将确定如何达到该状态。
在程序风格中，您需要指定达到两个实例/服务器的最终状态的步骤 - 例如，创建一个循环并在循环的每次迭代中创建一个实例（当然运行循环两次）。
</b></details>

<details>
<summary>您有测试跨项目变更的经验吗？ （又名交叉依赖）</summary><br><b>

注意：交叉依赖是指您对单独的项目有两个或多个更改，并且您希望在相互构建中测试它们，而不是单独测试每个更改。
</b></details>

<details>
<summary>您为开源项目做出过贡献吗？告诉我这次经历</summary><br><b>
</b></details>

<details>
<summary>什么是分布式追踪？</summary><br><b>
</b></details>

<a name="gitops"></a>
### Git行动

<details>
<summary>什么是 Git行动？</summary><br><b>

GitLab: "GitOps 是一个操作框架，它需要 DevOps 用于应用程序开发的最佳实践，例如版本控制、协作、合规性和 CI/CD 工具，并将其应用于基础设施自动化”。

了解更多 [这里](https://about.gitlab.com/topics/gitops)
</b></details>

<details>
<summary>申请有哪些优势 Git行动？</summary><br><b>

* 它引入了对基础设施的有限/细粒度访问
* 它可以更轻松地追踪谁对基础设施进行了更改

</b></details>

<details>
<summary>当存储库被称为“GitOps 存储库”是什么意思？</summary><br><b>

一个存储库，不保存应用程序源代码，但保存测试和部署应用程序所需的配置、基础设施等文件。
</b></details>

<details>
<summary>有哪些实际的实现或做法 Git欧普？</summary><br><b>

* 将 Infra 文件存储在版本控制存储库中（例如 Git)
* 应用变更审核/批准流程
</b></details>

<details>
<summary>您团队中的两名工程师争论将某个应用程序的配置和基础设施相关文件放在哪里。其中之一建议将其放在与应用程序存储库相同的存储库中，另一位建议将其放在自己的单独存储库中。你对此有何看法？</summary><br><b>

有人可能会说我们需要更多细节来了解这些配置和基础设施文件到底是什么样子以及应用程序及其复杂程度 CI/CD 管道，但一般来说，大多数时候您会希望将配置和基础设施相关文件放在自己单独的存储库中，而不是放在应用程序的存储库中，原因有多种：

* 提交到配置的每个更改都不应触发 CI/CD 应用程序的，它应该测试并应用修改后的配置，而不是应用程序本身
* 当您将应用程序代码与配置和基础设施相关文件混合时
</b></details>

<a name="sre"></a>
#### SRE

<details>
<summary>两者有什么区别 SRE 和 DevOps?</summary><br><b>

Google：“可以把 DevOps 看作若干核心 SRE 原则向更广泛的组织、管理结构和人员范围的泛化。”

了解更多相关信息 [这里](https://sre.google/sre-book/introduction)
</b></details>

<details>
<summary>什么 SRE 团队负责？</summary><br><b>

Google 提到：“SRE 团队负责其服务的可用性、延迟、性能、效率、变更管理、监控、应急响应和容量规划。”

了解更多相关信息 [这里](https://sre.google/sre-book/introduction)
</b></details>

<details>
<summary>什么是错误预算？</summary><br><b>

Atlassian：“错误预算是指技术系统发生故障而不产生合同后果的最长时间。”

了解更多相关信息 [这里](https://www.atlassian.com/incident-management/kpis/error-budget)
</b></details>

<details>
<summary>您如何看待以下说法：“100% 是系统唯一正确的可用性目标”</summary><br><b>

错了。没有系统可以保证 100% 的可用性，因为没有系统可以安全地经历零停机。
许多系统和服务的正常运行时间会落在 99% 到 100% 之间（或者至少大多数系统和服务应该是这样）。
</b></details>

<details>
<summary>什么是 MTTF （平均无故障时间）和 MTTR （平均修复时间）？这些指标可以帮助我们评估什么？</summary><br><b>

	* MTTF （平均故障时间）也称为正常运行时间，可以定义为系统出现故障之前运行的时间。
	* MTTR 另一方面，（平均恢复时间）是修复损坏的系统所需的时间。
	* MTBF （平均故障间隔时间）是系统故障之间的时间量。
</b></details>

<details>
<summary>监控的作用是什么 SRE?</summary><br><b>

Google：“监控是服务所有者跟踪系统运行状况和可用性的主要手段之一”

了解更多相关信息 [这里](https://sre.google/sre-book/introduction)
</b></details>

<details>
<summary>主要有哪两个 SRE 关键绩效指标</summary><br><b>

服务水平指标（SLI）和服务水平目标（SLO).
</b></details>

<details>
<summary>什么是辛劳？</summary><br><b>

Google：Toil 是一种与运行生产服务相关的工作，往往是手动的、重复的、自动化的、战术性的、缺乏持久价值的，并且随着服务的增长而线性扩展

了解更多相关信息 [这里](https://sre.google/sre-book/eliminating-toil/) 
</b></details>


<details>
<summary>什么是尸检？ </summary><br><b>

事后分析是事件发生后应进行的过程。其目的是确定事件的根本原因以及应采取的措施以避免此类事件再次发生。 </b></details>


<details>
<summary>在谈论事后分析时经常提出的核心价值是什么？</summary><br><b>

无罪。 
事后剖析必须是无可指责的，并且这种价值应该在每次事后剖析开始时得到赎回。这是确保人们玩游戏是为了找到根本原因而不是试图隐藏可能的错误的最佳方式。</b></details>

