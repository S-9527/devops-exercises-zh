<a name="aws---solutions-architect-associate"></a>
## AWS - 解决方案 Architect Associate 

最后更新时间：2021 年

<a name="aws-global-infrastructure"></a>
#### AWS 全球基础设施

<details>
<summary>解释以下内容

  * 可用区
  * 地区
  * Edge Location</summary><br><b>

AWS 区域是托管在全球不同地理位置的数据中心，每个区域彼此完全独立。<br>

每个区域内都有多个隔离位置，称为可用区。多个可用区可确保在其中一个可用区发生故障时的高可用性。<br>

边缘位置基本上是内容交付网络，它缓存数据并确保更低的延迟和更快地交付给任何位置的用户。他们分布在世界各大城市。
</b></details>

<a name="aws---iam"></a>
#### AWS - IAM

<details>
<summary>什么是 IAM？它有哪些特点？</summary><br><b>

完整的解释是 [这里](https://aws.amazon.com/iam)
简而言之：它用于管理用户、组、访问策略和角色
</b></details>

<details>
<summary>判断题：IAM 配置是全局定义的，而不是按区域定义的</summary><br><b>

正确
</b></details>

<details>
<summary>判断题：当创建一个 AWS 帐户，默认创建root 账户。这是推荐在您的组织中使用和共享的帐户</summary><br><b>

错误。您应该创建用户并使用它们，而不是使用 root 帐户。
</b></details>

<details>
<summary>判断题：AWS IAM 中的 group，只能包含用户，不能包含其他组</summary><br><b>

正确
</b></details>

<details>
<summary>判断题：用户位于 AWS IAM, 只能属于一个组</summary><br><b>

错误。用户可以属于多个组。
</b></details>

<details>
<summary>什么是角色？</summary><br><b>

一种允许服务的方法 AWS 使用另一项服务 AWS。您将角色分配给 AWS 资源。
例如，您可以使用允许 EC2 用于访问 s3 存储桶（读取和写入）的服务。
</b></details>

<details>
<summary>什么是 IAM policy？</summary><br><b>

IAM policy 是用于定义用户、组或角色可以执行哪些操作的权限策略文档，格式为 JSON。
</b></details>

<details>
<summary>用户无法访问 s3 存储桶。可能是什么问题？</summary><br><b>

这可能有多个原因，其中之一是缺少相应的 IAM policy。要解决这个问题，管理员需要为该用户附加允许访问 S3 bucket 的 policy。
</b></details>

<details>
<summary>你应该用什么来：

  * 授予两个服务/资源之间的访问权限？
  * 授予用户对资源/服务的访问权限？</summary><br><b>

  * Role
  * Policy
</b></details>

<details>
<summary>新用户有什么权限？</summary><br><b>

只有登录访问权限。
</b></details>


<a name="aws-networking"></a>
#### AWS 网络

<details>
<summary>什么是 VPC?</summary><br><b>

“逻辑上孤立的部分 AWS 您可以在其中启动的云 AWS 您定义的虚拟网络中的资源”
了解更多相关信息 [这里](https://aws.amazon.com/vpc).
</b></details>

<details>
<summary>判断题：VPC 跨越多个地区</summary><br><b>

错误
</b></details>

<details>
<summary>判断题：子网属于同一网段 VPC，可以位于不同的可用区</summary><br><b>

确实如此。澄清一下，子网必须完全驻留在一个子网中 AZ.
</b></details>

<details>
<summary>什么是Internet Gateway？</summary><br><b>

“允许您的实例之间进行通信的组件 VPC 和互联网”（AWS 文档）。
了解更多相关信息 [这里](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)
</b></details>

<details>
<summary>判断题：NACL 允许或拒绝子网级别的流量</summary><br><b>

正确
</b></details>

<details>
<summary>判断题：多个 Internet 网关可以连接到一个 VPC</summary><br><b>

错误。单个Internet Gateway只能连接一个 VPC.
</b></details>

<details>
<summary>判断题：路由表用于允许或拒绝来自互联网的流量 AWS 实例</summary><br><b>

错误。
</b></details>

<details>
<summary>解释安全组和网络 ACL</summary><br><b>

* NACL - security layer on the subnet level.
* 安全组 - 实例级别的安全层。

了解更多相关信息 [这里](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html) 和 [这里](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)
</b></details>

<details>
<summary>什么是 AWS 直接连接？</summary><br><b>

允许您将公司网络连接到 AWS 网络。
</b></details>

<a name="aws-compute"></a>
#### AWS 计算

<details>
<summary>什么是 EC2?</summary><br><b>

“一种在云中提供安全、可调整大小的计算能力的网络服务”。
了解更多 [这里](https://aws.amazon.com/ec2)
</b></details>

<details>
<summary>判断题：EC2 是区域服务</summary><br><b>

确实如此。相对于 IAM 例如，这是一项全球服务， EC2 是一项区域服务。
</b></details>

<details>
<summary>什么是 AMI?</summary><br><b>

Amazon Machine Image是“Amazon Machine Image（AMI）提供启动实例所需的信息”。
了解更多 [这里](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html)
</b></details>

<details>
<summary>不同的来源有哪些 AMI是？</summary><br><b>

* 个人 AMIs- AMI你创造的
* AWS 市场 AMIs - 付费 AMI通常与许可软件捆绑在一起
* 社区 AMIs-免费
</b></details>

<details>
<summary>什么是实例类型？</summary><br><b>

“您指定的实例类型决定了用于您的实例的主机硬件”
了解有关实例类型的更多信息 [这里](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html)
</b></details>

<details>
<summary>判断题：以下是可供用户使用的实例类型 AWS:

  * 计算优化
  * 网络优化
  * 网页优化</summary><br><b>

错误。从上面的列表中，只有计算优化可用。
</b></details>

<details>
<summary>什么是 EBS?</summary><br><b>

“提供块级存储卷以供使用 EC2 实例。 EBS 卷的行为就像原始的、未格式化的块设备。”
更多关于 EBS [这里](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
</b></details>

<details>
<summary>什么 EC2 定价模式有哪些？</summary><br><b>

按需 - 按小时/秒支付固定费率，无需承诺。您可以在任何给定时间配置和终止它。
预留 - 您获得容量预留，基本上是在固定时间段内购买实例。时间越长越便宜。
现货 - 使您能够对实例出价任何您想要的价格或支付现货价格。
专用主机 - 物理 EC2 服务器专供您使用。
</b></details>

<details>
<summary>什么是安全组？</summary><br><b>

“安全组充当虚拟防火墙，控制一个或多个实例的流量”
有关此主题的更多信息 [这里](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)
</b></details>

<details>
<summary>您可以将什么附加到 EC2 实例为了存储数据？</summary><br><b>

EBS
</b></details>

<details>
<summary>什么 EC2 RI 有哪些类型？</summary><br><b>

标准型 RI - most significant discount + suited for steady-state usage
敞篷车 RI - discount + change attribute of RI + 适合稳态使用
预定 RI - launch within time windows you reserve

了解更多关于 EC2 RI [这里](https://aws.amazon.com/ec2/pricing/reserved-instances)
</b></details>

<a name="aws-containers"></a>
#### AWS 容器

<details>
<summary>什么是Amazon ECS?</summary><br><b>

Amazon 定义：“Amazon Elastic Container Service（Amazon ECS）是一个完全托管的容器编排服务。 Duolingo、三星等客户， GE和烹饪垫使用 ECS 由于其安全性、可靠性和可扩展性，能够运行最敏感和关键任务的应用程序。”

了解更多 [这里](https://aws.amazon.com/ecs)
</b></details>

<details>
<summary>什么是Amazon ECR?</summary><br><b>

Amazon 定义：“Amazon Elastic Container Registry (ECR）是一个完全托管的 Docker 容器注册表，使开发人员可以轻松存储、管理和部署 Docker 容器图像。”

了解更多 [这里](https://aws.amazon.com/ecr)
</b></details>

<details>
<summary>什么是 AWS Fargate？</summary><br><b>

Amazon 定义：“AWS Fargate 是一种适用于容器的无服务器计算引擎，可与 Amazon Elastic Container Service (ECS）和Amazon Elastic Kubernetes Service（EKS)."

了解更多 [这里](https://aws.amazon.com/fargate)
</b></details>

<a name="aws-storage"></a>
#### AWS 存储
 
<details>
<summary>解释一下是什么 AWS S3?</summary><br><b>

S3 代表3S，简单存储服务。
S3 是一种快速、可扩展且持久的对象存储服务。 S3 使客户能够上传、下载或存储最多 5 个文件或对象 TB 在尺寸上。

更多关于 S3 [这里](https://aws.amazon.com/s3) 
</b></details>

<details>
<summary>什么是桶？</summary><br><b>

安 S3 存储桶是一种类似于文件系统中的文件夹的资源，允许存储由数据组成的对象。
</b></details>

<details>
<summary>判断题：存储桶名称必须是全局唯一的</summary><br><b>

正确
</b></details>

<details>
<summary>解释与存储桶相关的文件夹和对象</summary><br><b>

* 文件夹 - s3 存储桶中的任何子文件夹
* 对象 - 存储在存储桶中的文件
</b></details>

<details>
<summary>解释以下内容：

  * 对象生命周期
  * 对象共享
  * 对象版本控制</summary><br><b>

  * 对象生命周期 - 根据定义的时间段规则在存储类之间传输对象
  * 对象共享 - 通过共享对象 URL 链接
  * 对象版本控制 - 管理对象的多个版本
</b></details>

<details>
<summary>解释对象持久性和对象可用性</summary><br><b>

对象持久性：一年内文件不会丢失的百分比
对象可用性：一年内文件可访问的百分比
</b></details>

<details>
<summary>什么是存储类？有哪些存储类别？</summary><br><b>

每个对象都分配有一个存储类，影响其可用性和持久性。这也对成本产生影响。
今天提供的存储类别：
  * 标准：
    * 用于通用的、多用途的存储（主要是需要频繁访问的存储）
    * 最昂贵的存储类别 
    * 11x9% 耐久度
    * 2x9% 可用性
    * 默认存储类别

  * 标准-IA （不常访问）
    * 长期存在、不经常访问的数据，但在访问时必须可用
    * 11x9% 耐久度
    * 99.90% 可用性

  * 一区-IA （不常访问）：
    * 长期存在、不经常访问的非关键数据
    * 比标准和标准便宜-IA 存储类别
    * 2x9% 耐久度
    * 99.50% 可用性
    
  * 智能分层：
    * 访问模式不断变化或未知的长期数据。基本上，在此类中，数据会根据使用模式自动移动到最适合您的类
    * 价格取决于所使用的类别
    * 11x9% 耐久度
    * 99.90% 可用性

  * Glacier：归档数据，检索时间从几分钟到几小时不等
  * Glacier Deep Archive：归档很少（如果有的话）需要访问的数据，检索时间以小时为单位
  * Glacier 和 Glacier Deep Archive 都是：
    * 最便宜的存储类别
    * 具有 9x9% 的耐用性 

有关存储类别的更多信息 [这里](https://aws.amazon.com/s3/storage-classes)

</b></details>

<details>
<summary>客户希望将很少访问的数据从标准存储类别转移到最便宜的类别。应该使用哪种存储类别？

  * 一区-IA
  * 冰川深处档案馆
  * 智能分层</summary><br><b>

冰川深处档案馆
</b></details>

<details>
<summary>用户可以使用哪些冰川检索选项？</summary><br><b>

加急、标准和散装
</b></details>

<details>
<summary>判断题：每个 AWS 帐户最多可存储 500 PetaByte 的数据。任何额外的存储空间都将花费双倍的费用</summary><br><b>

错误。容量无限。
</b></details>

<details>
<summary>解释什么是存储网关</summary><br><b>

"AWS 存储 Gateway 是一种混合云存储服务，可让您在本地访问几乎无限的云存储”。
有关存储网关的更多信息 [这里](https://aws.amazon.com/storagegateway)
</b></details>

<details>
<summary>解释以下 存储 Gateway 部署类型

  * 文件网关
  * 卷网关
  * 磁带网关</summary><br><b>

详细解释 [这里](https://aws.amazon.com/storagegateway/faqs)
</b></details>

<details>
<summary>存储卷和缓存卷有什么区别？</summary><br><b>

存储卷 - 数据位于客户的数据中心并定期备份到 AWS
缓存卷 - 数据存储在 AWS 云端并缓存在客户数据中心以便快速访问
</b></details>

<details>
<summary>什么是“Amazon S3 Transfer Acceleration”？</summary><br><b>

AWS 定义：“Amazon S3 Transfer Acceleration可在您的客户和客户之间实现快速、轻松且安全的长距离文件传输 S3 桶”

了解更多 [这里](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html)
</b></details>

<details>
<summary>什么是Amazon EFS?</summary><br><b>

Amazon 定义：“Amazon Elastic File System（Amazon EFS）提供了简单、可扩展、完全托管的弹性 NFS 与使用的文件系统 AWS 云服务和本地资源。”

了解更多 [这里](https://aws.amazon.com/efs)
</b></details>

<details>
<summary>什么是 AWS 雪地摩托？</summary><br><b>

"AWS Snowmobile 是一种艾字节级数据传输服务，用于将大量数据移动到 AWS."

了解更多 [这里](https://aws.amazon.com/snowmobile)
</b></details>

<a name="aws-elb"></a>
##### AWS ELB

<details>
<summary>什么是 ELB （弹性负载平衡）？</summary><br><b>

AWS 定义：“Elastic Load Balancing 自动在多个目标之间分配传入应用程序流量，例如 Amazon EC2 实例、容器、 IP 地址，以及 Lambda 功能”。

更多关于 ELB [这里](https://aws.amazon.com/elasticloadbalancing)
</b></details>

<details>
<summary>什么是Auto Scaling？</summary><br><b>

AWS 定义：“AWS Auto Scaling 监控您的应用程序并自动调整容量，以尽可能低的成本保持稳定、可预测的性能”

阅读有关Auto Scaling的更多信息 [这里](https://aws.amazon.com/autoscaling)
</b></details>

<details>
<summary>判断题：Auto Scaling 是关于添加资源（例如实例），而不是删除资源</summary><br><b>

错误。Auto Scaling会调整容量，这可能意味着根据使用情况和性能删除一些资源。
</b></details>

<details>
<summary>支持哪些类型的负载均衡器 EC2 它们的用途是什么？</summary><br><b>

  * 应用 LB - layer 7 traffic
  * 网络 LB - ultra-high performances or static IP 地址
  * 经典 LB - low costs, good for test or dev environments
</b></details>

<a name="aws-dns"></a>
#### AWS DNS

<details>
<summary>什么是 Route 53?</summary><br><b>

“Amazon Route 53 是一个高度可用且可扩展的云域名系统（DNS) 网络服务”
一些 Route 53 特点：
  * 注册域名
  * DNS 服务-域名翻译
  * 健康检查 - 验证您的应用程序是否可用

更多关于 Route 53 [这里](https://aws.amazon.com/route53)
</b></details>

<a name="aws-cloudfront"></a>
#### AWS CloudFront

<details>
<summary>解释一下是什么 CloudFront</summary><br><b>

AWS 定义：“Amazon CloudFront 是一个快速的内容交付网络（CDN) 安全地交付数据、视频、应用程序和 API为全球客户提供低延迟、高传输速度，所有这些都在开发人员友好的环境中进行。”

更多关于 CloudFront [这里](https://aws.amazon.com/cloudfront)
</b></details>

<details>
<summary>解释以下内容

  * Origin
  * Edge Location
  * Distribution</summary><br><b>
</b></details>

<a name="aws-monitoring-logging"></a>
#### AWS 监控和记录

<details>
<summary>什么是 AWS CloudWatch?</summary><br><b>

AWS 定义：“Amazon CloudWatch 是一种监控和可观察性服务......”

更多关于 CloudWatch [这里](https://aws.amazon.com/cloudwatch)
</b></details>

<details>
<summary>什么是 AWS CloudTrail?</summary><br><b>

AWS 定义：“AWS CloudTrail 是一项服务，可以对您的企业进行治理、合规性、运营审计和风险审计 AWS 帐户。”

阅读更多内容 CloudTrail [这里](https://aws.amazon.com/cloudtrail)
</b></details>

<details>
<summary>什么是简单通知服务？</summary><br><b>

AWS 定义：“一种高度可用、持久、安全、完全托管的发布/订阅消息服务，使您能够解耦微服务、分布式系统和无服务器应用程序。”

了解更多相关信息 [这里](https://aws.amazon.com/sns)
</b></details>

<details>
<summary>解释以下关于 SNS:

  * 主题
  * 订阅者
  * 出版商</summary><br><b>

  * 主题 - 用于对多个端点进行分组
  * 订阅者 - 主题向其发送消息的端点 
  * 发布者 - 消息的提供者（事件、人物……）
</b></details>

<a name="aws-security"></a>
#### AWS 安全性 

<details>
<summary>什么是共同责任模型？什么 AWS 基于共享责任模型，用户负责什么以及用户负责什么？</summary><br><b>

共担责任模型定义了客户负责什么以及负责什么 AWS 负责。

有关共同责任模型的更多信息 [这里](https://aws.amazon.com/compliance/shared-responsibility-model)
</b></details>

<details>
<summary>判断题：基于责任共担模型，Amazon 负责实例上的物理 CPU 和安全组</summary><br><b>

错误。它负责其站点中的硬件，但不负责由用户创建和管理的安全组。
</b></details>

<details>
<summary>解释关于共享责任模型的“共享控制”</summary><br><b>

AWS 定义：“适用于基础设施层和客户层，但在完全独立的上下文或视角中。在共享控制中， AWS 提供了对基础设施的要求，客户必须在其使用范围内提供自己的控制实施 AWS 服务”

了解更多相关信息 [这里](https://aws.amazon.com/compliance/shared-responsibility-model)
</b></details>

<details>
<summary>什么是 AWS 合规计划？</summary><br><b>
</b></details>

<details>
<summary>什么是 AWS 神器？</summary><br><b>

AWS 定义：“AWS Artifact 是您首选的中央资源，可获取对您而言重要的合规性相关信息。它提供按需访问 AWS’安全和合规报告并选择在线协议。”

了解更多相关信息 [这里](https://aws.amazon.com/artifact)
</b></details>

<details>
<summary>什么是 AWS 督察？</summary><br><b>

AWS 定义：“Amazon Inspector 是一项自动化安全评估服务，有助于提高部署在 AWS。 Amazon Inspector 自动评估应用程序的暴露情况、漏洞以及与最佳实践的偏差。”

了解更多 [这里](https://aws.amazon.com/inspector)
</b></details>

<details>
<summary>什么是 AWS 守卫？</summary><br><b>
</b></details>

<details>
<summary>什么是 AWS 盾牌？</summary><br><b>

AWS 定义：“AWS Shield 是一种托管的分布式拒绝服务 (DDoS) 保护服务，可保护运行在 AWS."
</b></details>

<details>
<summary>什么是 AWS WAF？举例说明如何使用它并描述您可以将其与哪些资源或服务一起使用</summary><br><b>
</b></details>

<details>
<summary>什么 AWS VPN 是用来做什么的？</summary><br><b>
</b></details>

<details>
<summary>站点到站点有什么区别 VPN 和客户 VPN?</summary><br><b>
</b></details>

<details>
<summary>什么是 AWS 云HSM？</summary><br><b>

Amazon 定义：“AWS CloudHSM是一个基于云的硬件安全模块（HSM），使您能够轻松生成并使用您自己的加密密钥 AWS 云。”

了解更多 [这里](https://aws.amazon.com/cloudhsm)
</b></details>

<details>
<summary>判断题：AWS Inspector 可以执行网络和主机评估</summary><br><b>

正确
</b></details>

<details>
<summary>什么是 AWS Acceptable Use Policy？</summary><br><b>

它描述了 AWS 网络服务中被禁止的使用方式。
更多关于 AWS Acceptable Use Policy 的信息见 [AWS AUP](https://aws.amazon.com/aup)
</b></details>

<details>
<summary>什么是 AWS 密钥管理服务（KMS)?</summary><br><b>

AWS 定义：“KMS 使您可以轻松创建和管理加密密钥并在广泛的范围内控制其使用 AWS 服务和您的应用程序中。”
更多关于 KMS [这里](https://aws.amazon.com/kms)
</b></details>

<details>
<summary>判断题：不允许用户对任何一个进行渗透测试 AWS 服务</summary><br><b>

错误。在某些服务上，例如 EC2, CloudFront 和 RDS，允许进行渗透测试。
</b></details>

<details>
<summary>判断题：DDoS 攻击是允许的渗透测试活动的一个示例</summary><br><b>

错误。
</b></details>

<details>
<summary>判断题：AWS 访问密钥是一种 MFA 设备用于 AWS 资源保护</summary><br><b>

错误。安全密钥是一个示例 MFA 设备。
</b></details>

<details>
<summary>什么是Amazon Cognito？</summary><br><b>

Amazon 定义：“Amazon Cognito 处理您的 Web 和移动应用程序的用户身份验证和授权。”

了解更多 [这里](https://docs.aws.amazon.com/cognito/index.html)
</b></details>

<details>
<summary>什么是 AWS ACM?</summary><br><b>

Amazon 定义：“AWS 证书管理器是一项服务，可让您轻松配置、管理和部署公共和私有安全套接字层/传输层安全（SSL/TLS) 证书用于 AWS 服务和您的内部连接资源。”

了解更多 [这里](https://aws.amazon.com/certificate-manager)
</b></details>

<a name="aws-databases"></a>
#### AWS 数据库

<details>
<summary>什么是 AWS RDS?</summary><br><b>
</b></details>

<details>
<summary>什么是 AWS DynamoDB?</summary><br><b>
</b></details>

<details>
<summary>解释“时间点恢复”功能 DynamoDB</summary><br><b>

Amazon 定义：“您可以创建Amazon 的按需备份 DynamoDB 表，或者您可以使用时间点恢复启用连续备份。有关按需备份的更多信息，请参阅按需备份和还原 DynamoDB."

了解更多 [这里](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html)
</b></details>

<details>
<summary>解释一下“全局表” DynamoDB</summary><br><b>

Amazon 定义：“全局表是一个或多个副本表的集合，全部由一个单一的表拥有。 AWS 帐户。”

了解更多 [这里](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html)
</b></details>

<details>
<summary>什么是 DynamoDB 加速器？</summary><br><b>

Amazon 的定义：“Amazon DynamoDB 加速器（DAX）是一个完全托管的、高度可用的内存缓存 DynamoDB 性能提升高达 10 倍——从毫秒到微秒……”

了解更多 [这里](https://aws.amazon.com/dynamodb/dax)
</b></details>

<details>
<summary>什么是 AWS Redshift 与它有何不同 RDS?</summary><br><b>

云数据仓库
</b></details>

<details>
<summary>什么是 AWS 弹性缓存？用于什么情况？</summary><br><b>

Amazon Elasticache 是一个完全托管的 Redis 或 Memcached 内存数据存储。                                                                       
它非常适合两层 Web 应用程序等用例，其中最频繁访问的数据存储在 ElastiCache 中，因此响应时间是最佳的。
</b></details>

<details>
<summary>什么是Amazon Aurora</summary><br><b>

一个 MySQL & 基于 Postgresql 的关系数据库。此外，在使用时为用户建议的默认数据库 RDS 用于创建数据库。
非常适合像两层 Web 应用程序这样的用例 MySQL 或 Postgresql 数据库层，并且您需要为应用程序自动备份。
</b></details>

<details>
<summary>什么是 Amazon DocumentDB？</summary><br><b>

Amazon 定义：“Amazon DocumentDB（带有 MongoDB 兼容性）是一种快速、可扩展、高度可用且完全托管的文档数据库服务，支持 MongoDB 工作负载。作为文档数据库，Amazon DocumentDB 可以轻松存储、查询和索引 JSON 数据。”

了解更多 [这里](https://aws.amazon.com/documentdb)
</b></details>

<details>
<summary>什么“AWS “数据库迁移服务”是用来做什么的？</summary><br><b>
</b></details>

<details>
<summary>Amazon使用什么类型的存储 RDS?</summary><br><b>

EBS
</b></details>

<details>
<summary>解释一下Amazon RDS 读取副本</summary><br><b>

AWS 定义：“Amazon RDS 只读副本提供增强的性能和耐用性 RDS 数据库（DB) 实例。它们可以轻松地弹性扩展，超出单个容量的限制 DB 用于读取繁重的数据库工作负载的实例。”
阅读更多关于 [这里](https://aws.amazon.com/rds/features/read-replicas)
</b></details>

<a name="aws-serverless-compute"></a>
#### AWS 无服务器计算

<details>
<summary>解释一下是什么 AWS Lambda</summary><br><b>

AWS 定义：“AWS Lambda 让您无需配置或管理服务器即可运行代码。您只需为消耗的计算时间付费。”

阅读更多相关内容 [这里](https://aws.amazon.com/lambda)
</b></details>

<details>
<summary>判断题：在 AWS Lambda，只要函数存在，无论它是否正在运行，您都需要付费</summary><br><b>

错误。执行代码时会产生费用。
</b></details>

<details>
<summary>以下哪一组语言 Lambda 支持？

  * R、Swift、Rust、Kotlin
  * Python, 红宝石, Go 
  * Python, 红宝石, PHP</summary><br><b>

  * Python, 红宝石, Go 
</b></details>

<a name="identify-the-service-or-tool"></a>
#### 识别服务或工具

<details>
<summary>您将使用什么来自动化代码/软件部署？</summary><br><b>

AWS CodeDeploy
</b></details>

<details>
<summary>你会用什么来轻松创建类似的 AWS 不同客户的环境/资源？</summary><br><b>

云形成
</b></details>

<details>
<summary>您会使用哪种服务来构建网站或 Web 应用程序？</summary><br><b>

光帆
</b></details>

<details>
<summary>您会使用哪种工具在预留实例或按需实例之间进行选择？</summary><br><b>

成本管理器
</b></details>

<details>
<summary>您将使用什么来检查有多少个不关联的弹性 IP 你有地址吗？</summary><br><b>

值得信赖的顾问
</b></details>

<details>
<summary>什么服务允许您将大量（PB）数据传入和传出 AWS 云？</summary><br><b>

AWS 雪球
</b></details>

<details>
<summary>什么提供了专用于您的虚拟网络 AWS 帐户？</summary><br><b>

VPC
</b></details>

<details>
<summary>您将使用什么来为具有以下功能的应用程序进行自动备份 MySQL 数据库层？</summary><br><b>

Amazon Aurora
</b></details>

<details>
<summary>您将使用什么将本地数据库迁移到 AWS?</summary><br><b>

AWS 数据库迁移服务（DMS)
</b></details>

<details>
<summary>你会用什么来检查为什么某些 EC2 实例被终止？</summary><br><b>

AWS CloudTrail
</b></details>

<details>
<summary>你会用来做什么 SQL 数据库？</summary><br><b>

AWS RDS
</b></details>

<details>
<summary>你会用来做什么 NoSQL 数据库？</summary><br><b>

AWS DynamoDB
</b></details>

<details>
<summary>你会用什么来跑步 SQL 交互式查询 S3?</summary><br><b>

AWS 雅典娜
</b></details>

<details>
<summary>您将使用什么来将图像和视频分析添加到您的应用程序中？</summary><br><b>

AWS 认可
</b></details>

<details>
<summary>您将使用哪种服务来调试和改进应用程序的性能问题？</summary><br><b>

AWS X射线
</b></details>

<details>
<summary>使用哪个服务来发送通知？</summary><br><b>

SNS
</b></details>

<details>
<summary>您将使用哪种服务来监控恶意活动和未经授权的行为 AWS 账户和工作量？</summary><br><b>

Amazon GuardDuty
</b></details>

<details>
<summary>您将使用哪种服务来集中管理多个计费、控制访问、合规性和安全性 AWS 账户？</summary><br><b>

AWS 组织机构
</b></details>

<details>
<summary>您会使用哪种服务来保护 Web 应用程序？</summary><br><b>

AWS WAF
</b></details>

<details>
<summary>您希望监控不同服务中的一些资源。您会使用哪种服务？</summary><br><b>

CloudWatch
</b></details>

<details>
<summary>您将使用哪种服务来执行安全评估？</summary><br><b>

AWS 督察
</b></details>

<details>
<summary>您将使用哪种服务来创建 DNS 记录？</summary><br><b>

Route 53
</b></details>

<details>
<summary>如果您需要完全托管的文档数据库，您会使用什么？</summary><br><b>

Amazon DocumentDB
</b></details>

<details>
<summary>您将使用哪种服务向您的网络/移动应用程序添加访问控制（或注册、登录表单）？</summary><br><b>

AWS 认知
</b></details>

<details>
<summary>如果您需要消息队列，您会使用哪种服务？</summary><br><b>

简单队列服务（SQS)
</b></details>

<details>
<summary>如果您需要托管，您会使用哪种服务 DDOS 保护？</summary><br><b>

AWS 盾牌
</b></details>

<details>
<summary>如果您需要存储常用数据以实现低延迟访问，您会使用哪种服务？</summary><br><b>

弹性缓存
</b></details>

<details>
<summary>您将使用什么在客户端和服务器之间长距离传输文件 S3 桶？</summary><br><b>

Amazon S3 Transfer Acceleration
</b></details>

<a name="aws-billing-support"></a>
#### AWS 计费与支持

<details>
<summary>什么是 AWS 组织？</summary><br><b>

AWS 定义：“AWS 随着您的工作负载的增长和扩展，组织可以帮助您集中管理您的环境 AWS."
有关组织的更多信息 [这里](https://aws.amazon.com/organizations)
</b></details>

<details>
<summary>解释一下 AWS 定价模型</summary><br><b>

它主要适用于“即用即付”，这意味着您只需为正在使用的内容和使用时间付费。
在 s3 中，您需要支付以下费用： 1. 您存储了多少数据 2. 发出请求 (PUT, POST, ...)
在 EC2 它基于购买选项（按需、现货……）、实例类型、 AMI 类型和使用的区域。

更多关于 AWS 定价模型 [这里](https://aws.amazon.com/pricing)
</b></details>

<details>
<summary>应该如何估计 AWS 例如，与本地解决方案相比，成本如何？</summary><br><b>

* TCO 计算器
* AWS 简单的计算器
* 成本管理器
</b></details>

<details>
<summary>有哪些基础支撑 AWS 包括？</summary><br><b>

* 24x7 客户服务
* 值得信赖的顾问
* AWS 个人健康仪表板
</b></details>

<details>
<summary>怎么样 EC2 实例计费吗？</summary><br><b>
</b></details>

<details>
<summary>什么 AWS 计价计算器是用来做什么的？</summary><br><b>
</b></details>

<details>
<summary>什么是 Amazon Connect？</summary><br><b>

Amazon 的定义是：“Amazon Connect 是一个易于使用的全渠道云联络中心，可帮助企业以更低的成本提供卓越的客户服务。”

了解更多 [这里](https://aws.amazon.com/connect)
</b></details>

<details>
<summary>什么是“APN 咨询合作伙伴”？</summary><br><b>

Amazon 定义：“APN 咨询合作伙伴是专业服务公司，帮助各种类型和规模的客户设计、架构、构建、迁移和管理其工作负载和应用程序 AWS，加速他们的云之旅。”

了解更多 [这里](https://aws.amazon.com/partners/consulting)
</b></details>

<details>
<summary>以下哪一项是 AWS 帐户类型（并按顺序排序）？

  * 基础版、开发者版、商业版、企业版
  * 新手、中级、专业、企业
  * 开发人员、基础版、商业版、企业版
  * 初级、专业、中级企业</summary><br><b>

  * 基础版、开发者版、商业版、企业版
</b></details>

<details>
<summary>判断题：地区是一个因素 EC2 costs/pricing</summary><br><b>

真的。您根据所选地区的不同支付不同的费用。
</b></details>

<details>
<summary>什么是“AWS 基础设施事件管理”？</summary><br><b>

AWS 定义：“AWS 基础设施事件管理是一项结构化计划，可供企业支持客户（以及额外付费的业务支持客户）使用，可帮助您规划大型活动，例如产品或应用程序发布、基础设施迁移和营销活动。”
</b></details>

<a name="aws-automation"></a>
#### AWS 自动化

<details>
<summary>什么是 AWS CodeDeploy？</summary><br><b>

Amazon 定义：“AWS CodeDeploy 是一项完全托管的部署服务，可自动将软件部署到各种计算服务，例如 Amazon EC2, AWS Fargate, AWS Lambda，以及您的本地服务器。”

了解更多 [这里](https://aws.amazon.com/codedeploy)
</b></details>

<details>
<summary>解释一下什么是 CloudFormation</summary><br><b>
</b></details>

<a name="aws-misc"></a>
#### AWS 杂项

<details>
<summary>什么是 AWS 光帆？</summary><br><b>

AWS 定义：“Lightsail 是一个易于使用的云平台，为您提供构建应用程序或网站所需的一切，以及经济高效的月度计划。”
</b></details>

<details>
<summary>什么是 AWS 认可？</summary><br><b>

AWS 定义：“Amazon Rekognition 使用经过验证的、高度可扩展的深度学习技术，可以轻松地将图像和视频分析添加到您的应用程序中，而无需使用机器学习专业知识。”

了解更多 [这里](https://aws.amazon.com/rekognition)
</b></details>

<details>
<summary>什么 AWS 资源组的用途是什么？</summary><br><b>

Amazon 定义：“您可以使用资源组来组织您的资源 AWS 资源。资源组可以更轻松地一次性管理和自动执行大量资源上的任务。 ”

了解更多 [这里](https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html)
</b></details>

<details>
<summary>什么是 AWS 全球加速器？</summary><br><b>

Amazon 定义：“AWS Global Accelerator 是一项可提高本地或全球用户应用程序的可用性和性能的服务……”

了解更多 [这里](https://aws.amazon.com/global-accelerator)
</b></details>

<details>
<summary>什么是 AWS 配置？</summary><br><b>

Amazon 定义：“AWS Config 是一项服务，使您能够评估、审核和评估您的配置 AWS 资源”。

了解更多 [这里](https://aws.amazon.com/config)
</b></details>

<details>
<summary>什么是 AWS X射线？</summary><br><b>

AWS 定义：“AWS X-Ray 帮助开发人员分析和调试生产、分布式应用程序，例如使用微服务架构构建的应用程序。”
了解更多 [这里](https://aws.amazon.com/xray)
</b></details>

<details>
<summary>什么是 AWS 行动工厂？</summary><br><b>

Amazon 定义：“AWS OpsWorks 是一项配置管理服务，提供 Chef 和 Puppet 的托管实例。”

了解更多相关信息 [这里](https://aws.amazon.com/opsworks)
</b></details>

<details>
<summary>什么是 AWS 服务目录？</summary><br><b>

Amazon 定义：“AWS 服务目录允许组织创建和管理服务目录 IT 批准使用的服务 AWS."

了解更多 [这里](https://aws.amazon.com/servicecatalog)
</b></details>

<details>
<summary>什么是 AWS CAF?</summary><br><b>

Amazon 定义：“AWS 专业服务创造了 AWS 云采用框架 (AWS CAF）帮助组织设计并走上成功采用云的加速之路。 ”

了解更多 [这里](https://aws.amazon.com/professional-services/CAF)
</b></details>

<details>
<summary>什么是 AWS Cloud9？</summary><br><b>

AWS 定义：“AWS Cloud9是一个基于云的集成开发环境（IDE）让您只需使用浏览器即可编写、运行和调试代码”
</b></details>

<details>
<summary>什么是 AWS 应用程序发现服务？</summary><br><b>

Amazon 定义：“AWS 应用程序发现服务通过收集有关其本地数据中心的信息来帮助企业客户规划迁移项目。”

了解更多 [这里](https://aws.amazon.com/application-discovery)
</b></details>

<details>
<summary>什么是值得信赖的顾问？</summary><br><b>
</b></details>

<details>
<summary>什么是 AWS 架构良好的框架及其基于哪些支柱？</summary><br><b>

AWS 定义：“架构完善的框架旨在帮助云架构师为其应用程序构建安全、高性能、弹性和高效的基础设施。基于五个支柱——卓越运营、安全性、可靠性、性能效率和成本优化”

了解更多 [这里](https://aws.amazon.com/architecture/well-architected)
</b></details>

<details>
<summary>什么 AWS 服务是无服务器的（或者可以选择无服务器）？</summary><br><b>

AWS Lambda
AWS 雅典娜
</b></details>

<details>
<summary>什么是 AWS EMR?</summary><br><b>

AWS 定义：“使用 Apache Spark、Apache Hive、Apache HBase、Apache Flink、Apache Hudi 和 Presto 等开源工具处理大量数据的大数据平台。”

了解更多 [这里](https://aws.amazon.com/emr)
</b></details>

<details>
<summary>什么是 AWS 雅典娜？</summary><br><b>

“Amazon Athena 是一项交互式查询服务，可以轻松分析 Amazon 中的数据 S3 使用标准 SQL."

了解更多关于 AWS 雅典娜 [这里](https://aws.amazon.com/athena)
</b></details>

<details>
<summary>什么是Amazon云目录？</summary><br><b>

Amazon 定义：“Amazon Cloud Directory 是一个高度可用的、基于目录的多租户存储。 AWS。这些目录根据应用程序的需要自动扩展到数亿个对象。”

了解更多 [这里](https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html)
</b></details>

<details>
<summary>什么是 AWS Elastic Beanstalk？</summary><br><b>

AWS 定义：“AWS Elastic Beanstalk 是一项易于使用的服务，用于部署和扩展 Web 应用程序和服务...您只需上传代码，Elastic Beanstalk 就会自动处理部署”

了解更多相关信息 [这里](https://aws.amazon.com/elasticbeanstalk)
</b></details>

<details>
<summary>什么是 AWS SWF?</summary><br><b>

Amazon 的定义：“Amazon SWF 帮助开发人员构建、运行和扩展具有并行或顺序步骤的后台作业。你可以想到 Amazon SWF 作为云中完全托管的状态跟踪器和任务协调器。”

了解有关 Amazon Simple Workflow Service 的更多信息 [这里](https://aws.amazon.com/swf)
</b></details>

<details>
<summary>什么是简单队列服务（SQS)?</summary><br><b>

AWS 定义：“Amazon Simple Queue Service (SQS）是一种完全托管的消息队列服务，使您能够解耦和扩展微服务、分布式系统和无服务器应用程序”。

了解更多相关信息 [这里](https://aws.amazon.com/sqs)
</b></details>

<a name="aws-disaster-recovery"></a>
#### AWS 灾难恢复

<details>
<summary>关于灾难恢复，什么是 RTO 和 RPO?</summary><br><b>

RTO - The maximum acceptable length of time that your application can be offline.

RPO - The maximum acceptable length of time during which data might be lost from your application due to an incident.
</b></details>

<details>
<summary>灾难恢复技术有哪些类型 AWS 支持？</summary><br><b>

* 冷方法 - 定期备份并将备份发送到异地<br>
* 指示灯 - 数据被镜像到始终运行的环境
* 热备 - 运行缩小版的生产环境
* 多站点 - 始终运行的重复环境
</b></details>

<details>
<summary>哪种灾难恢复选项的停机时间最长，哪种停机时间最短？</summary><br><b>

最低 - 多站点
最高-冷法
</b></details>

<a name="final-note"></a>
### 最后说明

Go祝你好运！你可以做到的:)
