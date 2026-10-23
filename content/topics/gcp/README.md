<a name="google-cloud-platform"></a>
# Google Cloud Platform

- [Google Cloud Platform](#google-cloud-platform)
  - [练习](#exercises)
    - [账户设置](#account-setup)
    - [计算引擎](#compute-engine)
  - [问题](#questions)
    - [全球基础设施](#global-infrastructure)
      - [gcloud](#gcloud)
    - [资源层次结构](#resource-hierarchy)
    - [IAM 和角色](#iam-and-roles)
    - [标签和标签](#labels-and-tags)
      - [gcloud](#gcloud-1)
    - [计算引擎](#compute-engine-1)
      - [gcloud](#gcloud-2)
    - [其他](#other)
    - [Google Kubernetes Engine（GKE）](#google-kubernetes-engine-gke)
    - [Anthos](#anthos)
  
<a name="exercises"></a>
## 练习

<a name="account-setup"></a>
### 账户设置

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 创建一个项目 | 组织机构 | [练习](exercises/create_project/exercise.md) | [解决方案](exercises/create_project/solution.md) | |
| 分配角色 | IAM | [练习](exercises/assign_roles/exercise.md) | [解决方案](exercises/assign_roles/solution.md) | |


<a name="compute-engine"></a>
### 计算引擎

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 创建实例 | 计算、标签 | [练习](exercises/instance_101/exercise.md) | [解决方案](exercises/instance_101/solution.md) | |


<a name="questions"></a>
## 问题

<a name="global-infrastructure"></a>
### 全球基础设施

<details>
<summary>解释以下每一项

  * 专区
  * 地区
</summary><br><b>

GCP 区域是托管在全球不同地理位置的数据中心。<br>

每个区域内都有多个孤立的位置，称为区域。每个区域都是一个或多个具有冗余网络、连接和电源的数据中心。多个区域确保高可用性，以防其中一个区域出现故障

</b></details>

<details>
<summary>判断题：每个 GCP Region 都被设计为与其他 GCP Region 完全隔离</summary><br><b>

正确。
</b></details>

<details>
<summary>选择时要考虑哪些因素 GCP 运行新应用程序的区域？</summary><br><b>

* 服务可用性：并非所有服务（及其所有功能）在每个地区都可用
* 减少延迟：将应用程序部署在靠近客户的区域
* 合规性：一些国家有更严格的规则和要求，例如确保数据保留在该国家或地区的境内。在这种情况下，只能使用特定区域来运行应用程序
* 定价：不同地区的定价可能不一致，因此同一服务在不同地区的价格可能会有所不同。
</b></details>

<details>
<summary>判断题：所有 GCP 服务都会在每个 Region 提供</summary><br><b>

错误。你可以在 [这里](https://cloud.google.com/about/locations) 查看每个 Region 提供哪些产品/服务。
</b></details>

<a name="gcloud"></a>
#### gcloud

<details>
<summary>如何列出所有地区？</summary><br><b>

`gcloud compute regions list`
</b></details>

<a name="resource-hierarchy"></a>
### 资源层次结构

<details>
<summary>解释资源层次结构 GCP</summary><br><b>

组织机构
  文件夹
    Project
      Resources

* 组织机构 - 公司
* 文件夹 - 通常用于部门、团队、产品等。
* 项目 - 可以是不同的项目或同一项目但不同的环境（开发、登台、生产）
* 资源 - 实际 GCP 服务（计算、应用程序引擎、存储等）

</b></details>

<details>
<summary>判断题：在一个项目中，您可以拥有一个或多个组织</summary><br><b>

错误。事实恰恰相反。首先有一个组织，在组织下您可以拥有一个或多个包含一个或多个项目的文件夹。
</b></details>

<details>
<summary>判断题：一项资源必须与至少一个项目关联</summary><br><b>

正确。您不能将资源与任何项目关联。
</b></details>

<details>
<summary>判断题：项目名称必须是全球唯一的</summary><br><b>

正确。
</b></details>

<a name="iam-and-roles"></a>
### IAM 和角色

<details>
<summary>解释角色和权限</summary><br><b>

角色是权限集的封装。例如，“所有者”角色对不同组件和服务拥有超过 3000 个分配的权限 GCP.
</b></details>

<details>
<summary>判断题：宽松的父级 policy 总是会覆盖限制更严格的子级 policy</summary><br><b>

正确。
</b></details>

<a name="labels-and-tags"></a>
### 标签和标签

<details>
<summary>什么是标签？</summary><br><b>

你可以考虑标签 GCP 作为您附加到不同的便笺 GCP 资源。例如，这使得搜索特定资源变得更容易（例如应用名为“web-app”的标签并搜索以某种方式与“web-app”相关的所有资源）
</b></details>

<details>
<summary>您能否提供一些标签使用示例 GCP?</summary><br><b>

* 地点（成本中心）
* 项目（或环境、文件夹等）
* 服务类型
* 服务负责人
* 应用类型
* 应用程序所有者
</b></details>

<details>
<summary>什么是网络标签以及它们与标签有何不同？ </summary><br><b>

顾名思义，网络标签只能应用于网络资源。
虽然标签不会影响它们所应用的资源，但网络标签确实会影响资源（例如防火墙访问和网络路由）
</b></details>

<a name="gcloud-1"></a>
#### gcloud

<details>
<summary>列出名为“instance-1”的实例的标签</summary><br><b>

`gcloud compute instances describe instance-1 --format "yaml(labels)"`
</b></details>

<details>
<summary>将名为“instance-1”的实例的标签更新为“app=db”</summary><br><b>

`gcloud compute instances update instance-1 --update-labels app=db`
</b></details>

<details>
<summary>从名为“instance-1”的实例中删除标签“env”</summary><br><b>

`gcloud compute instances update instance-1 --remove-labels env`
</b></details>

<a name="compute-engine-1"></a>
### 计算引擎

<a name="gcloud-2"></a>
#### gcloud

<details>
<summary>创建具有以下属性的实例：

* 名称：实例1
* 机器类型：e2-micro
* 标签：app=web、env=dev
</summary><br><b>

`gcloud compute instances create instance-1 --labels app=web,env=dev --machine-type=e2-micro`
</b></details>

<a name="other"></a>
### 其他

<details>
<summary>告诉我你知道什么 GCP 网络</summary><br><b>

虚拟私有云(VPC）网络是物理网络的虚拟版本，实现于 Google 的内部网络。 VPC 是全球资源 GCP.
子网（subnet）是区域性资源，即可以在区域内创建子网。

VPC 以两种模式创建，

1. 自动模式 VPC - One subnet in each region is created automatically by GCP 在创作时 VPC

2. 自定义模式 VPC - No subnets are automatically created. This type of network provides complete control over the subnets creation to the users. 
</b></details>

<details>
<summary>解释云函数</summary><br><b>

Google Cloud Functions 是一个用于构建和连接云服务的无服务器执行环境。使用云函数，您可以编写简单的单一用途函数，这些函数附加到从云基础设施和服务发出的事件。当正在监视的事件被触发时，您的函数就会被触发。

</b></details>

<details>
<summary>什么是云数据存储？</summary><br><b>

Cloud Datastore 是 Google Cloud 上的无模式 NoSQL 数据存储。应用程序可以使用类似 SQL 的查询来查询数据，并支持过滤和排序。Datastore 会跨多个数据中心复制数据，从而提供较高的读写可用性。

</b></details>

<details>
<summary>网络标签的用途是什么？</summary><br><b>

网络标记允许您将防火墙规则和路由应用到特定实例或一组实例：您可以使用目标标记和源标记使防火墙规则适用于特定实例。

</b></details>

<details>
<summary>什么是流日志？它们在哪里启用？</summary><br><b>

VPC Flow Logs 会记录 VM 实例之间发送和接收的网络流样本，包括作为 Google Kubernetes Engine 节点运行的实例。这些日志可用于网络监控、取证、实时安全分析和费用优化。

启用流日志

1. 打开 VPC 网络输入 GCP 控制台

2. 单击子网名称 

3. 点击 EDIT 按钮

4. 将流日志设置为打开

5. 单击“保存”



</b></details>

<details>
<summary>如何列出存储桶？</summary><br><b>
    Two ways to do that:
	 
   $ gsutil ls
	 
   $ gcloud alpha storage ls
	
</b></details>
 
<details>
<summary>什么计算元数据键允许您在启动时运行代码？</summary><br><b>

启动脚本
</b></details>

<details>
<summary>以下命令的作用是什么？ `gcloud deployment-manager deployments create`</summary><br><b>

Deployment 管理器创建一个新的部署。 

</b></details>

<details>
<summary>什么是云代码？</summary><br><b>
Cloud Code 是一组帮助开发人员编写、运行和调试基于 GCP 和 Kubernetes 的应用程序的工具。它为开发和生产 K8s 环境中的快速迭代、调试和运行应用程序提供内置支持。
</b></details>

<a name="google-kubernetes-engine-gke"></a>
### Google Kubernetes Engine（GKE）

<details>
<summary>什么是 GKE</summary><br><b>

* GKE 是 GCP 上的托管 Kubernetes 服务，用于在 Google 基础设施上部署、管理和扩展容器化应用。
</b></details>

<a name="anthos"></a>
### Anthos

<details>
<summary>什么是 Anthos</summary><br><b>
它是一个托管应用程序平台，适用于需要快速现代化和一定水平的企业等组织
混合或多云世界中遗留应用程序的一致性。从这个解释中可以得出这些陈述的核心思想；

* 托管 -> 客户无需担心底层软件集成，他们只需启用 API.
* 应用平台 -> 由K8s、Knative等开源工具组成 Istio 和泰克顿
* 企业 -> 这些通常是具有复杂需求的组织
* 一致性 -> 以声明方式启动相同的策略，以便在任何地方（例如本地）安全地运行， GCP 或其他云（AWS 或 Azure)

有趣的事实：Anthos 在希腊语中是花，它们生长在地面（地球）中，但需要云中的雨水才能茂盛。
</b></details>

<details>
<summary>列出构成 Anthos 的技术组件</summary><br><b>

* 基础设施管理 - Google Kubernetes Engine（GKE）
* 集群管理—— GKE, Ingress 对于 Anthos
* 服务管理 - Anthos Service Mesh
* Policy enforcement - Anthos Config Management、Anthos Enterprise Data Protection、Policy Controller
* 应用部署- CI/CD 云构建等工具， GitLab
* 应用开发-云代码
</b></details>

<details>
<summary>Anthos 轻松管理工作负载部署的主要计算环境是什么？</summary><br><b>

* Google Kubernetes Engine（GKE）
</b></details>

<details>
<summary>Anthos 如何处理控制平面和节点组件 GKE?</summary><br><b>

在 GCP 上，Kubernetes API Server 是唯一暴露给客户的控制平面组件；节点则作为 Compute Engine 实例在项目中运行。
</b></details>

<details>
<summary>哪些负载平衡选项可用？</summary><br><b>

* 网络负载平衡 L4 和 HTTP(S) 负载平衡 L7 这都是不需要的托管服务
  额外的配置。
* Ingress 对于 Anthos，它允许部署负载均衡器，为跨多个集群的应用程序提供服务
  上 GKE
</b></details>

<details>
<summary>您可以将 Anthos 部署在 AWS?</summary><br><b>

* 是的，Anthos 已开启 AWS 现在是 GA。如需了解更多，请阅读 [这里](https://cloud.google.com/anthos/gke/docs/aws)
</b></details>

<details>
<summary>列出并解释 Anthos 提供的企业安全功能</summary><br><b>

* 控制平面安全 - GCP 开箱即用地管理和维护 K8s 控制平面。用户可以使用主授权网络和私有集群来保护 api 服务器的安全。这些允许用户禁用对公共的访问 IP 通过分配私有地址 IP 给主人的地址。
* 节点安全性 - 默认情况下，工作负载是在使用的计算引擎实例上配置的 Google 的容器优化 OS。该操作系统实现了锁定防火墙、禁用 root 的有限用户帐户和只读文件系统。还有一个选项可以启用 GKE 沙盒可在多租户部署场景中提供更强的隔离。
* 网络安全 - 在集群所在的 VPC 内，Anthos GKE 利用软件定义网络实现 Pod 到 Pod 的通信。NetworkPolicy 可以限制指定 namespace 中的入站和出站连接；对于需要外部访问的服务，也可以通过允许列表过滤进入负载均衡器的 CIDR IP 范围。
* 工作负载安全性 - 默认情况下，工作负载以受限权限运行，并且 Docker/AppArmor 安全策略会应用到所有 Kubernetes Pod。Anthos GKE 的 Workload Identity 将开源 Kubernetes ServiceAccount 与 GCP Service Account 权限关联起来。
* 审核日志记录 - 管理员可以保留、查询、处理已部署环境的事件并发出警报。
</b></details>

<details>
<summary>如何在 Anthos 上部署工作负载 GKE 本地集群安全地连接到 Google Cloud 服务？</summary><br><b>

* Google Cloud 虚拟专用网络（云 VPN) - 这是为了安全网络
* Google Cloud 密钥管理服务（云 KMS) - 用于密钥管理
</b></details>

<details>
<summary>关于 Anthos 中网络的孤岛模式配置是什么 GKE 本地部署？</summary><br><b>

* 这是指 Pod 可以在集群内直接相互通信，但无法从集群外部访问，从而在网络内形成一个不与外部网络连接的“孤岛”。
</b></details>

<details>
<summary>解释 Anthos 配置管理</summary><br><b>

它是 Anthos 堆栈的核心组件，为平台、服务和安全Operator提供跨本地和云环境的单一、统一的多集群管理方法。它紧密遵循 K8 最佳实践，支持声明式方法而不是命令式操作，并主动监视集群状态并应用中定义的所需状态 Git。它包括以下三个关键组件：

1. 从中央读取数据的进口商 Git 存储库
2. 将存储的配置数据同步到 K8s 对象中的组件
3. 该组件可监控所需集群配置与实际集群配置之间的偏差，并能够在需要时进行协调。
</b></details>

<details>
<summary>Anthos Config Management 有什么帮助？</summary><br><b>

它遵循常见的现代软件开发实践，使集群配置、管理和策略更改可审核、可恢复和可版本控制，轻松执行 IT 治理和统一组织中的资源管理。
</b></details>

<details>
<summary>什么是 Anthos Service Mesh？</summary><br><b>

* 它是一套工具，可帮助监控和管理 Anthos 上部署的各种形状和规模的服务，无论是在云、混合或多云环境中运行。它利用了 API和核心部件来自 Istio，一个高度可配置的开源服务网格平台。
</b></details>

<details>
<summary>描述 Anthos Service Mesh 的两个主要组件</summary><br><b>

1. 数据平面 - 它由一组分布式代理组成，用于调解各个服务之间的所有入站和出站网络流量，这些服务是使用集中控制平面和开放式配置进行配置的。 API
2. 控制平面 - 是 Anthos 之外的完全托管产品 GKE 集群以简化管理开销并确保尽可能高的可用性。
</b></details>

<details>
<summary>Anthos Service Mesh 的托管控制平面由哪些组件组成？</summary><br><b>

1. 交通总监 - 是的 GCP的完全托管的服务网格流量控制平面，负责翻译 Istio API 对象转换为分布式代理的配置信息，以及引导服务网格入口和出口流量
2. 托管 CA - is a centralised certificate authority responsible for providing SSL 每个分布式代理的证书、身份验证信息和分发Secret
3. 操作工具 - 以前称为 stackdriver，为可观察性和遥测提供托管摄取点，特别是监视、跟踪和记录每个代理生成的数据。这为操作员提供了可观察性仪表板，可以直观地检查他们的服务和服务依赖关系，从而帮助实施 SRE 监控 SLI 和建立 SLO 的最佳实践。
</b></details>

<details>
<summary>Anthos Service Mesh 有什么帮助？</summary><br><b>
构成 Anthos 服务网格的工具和技术集成为 Anthos 环境带来了显着的运营优势，同时将额外开销降至最低，如下所示：

* 统一的可观察性——数据平面将服务与服务之间的通信报告回控制平面，生成服务依赖图。代理的流量检查插入标头以促进分布式跟踪、捕获和报告服务日志以及服务级别指标（即延迟、错误、可用性）。
* 操作敏捷性 - 提供用于管理网格间（南北）和网格内（东西）流量的细粒度控制。
* 策略驱动的安全性——由于服务通信默认受到保护，因此可以跨不同的协议和运行时一致地执行策略。
</b></details>

<details>
<summary>列出可在 Anthos Service Mesh 中实施的流量控制的可能用例</summary><br><b>

* 跨不同服务版本进行流量拆分以进行金丝雀或 A/B 测试
* 熔断以防止级联故障
* 故障注入有助于构建弹性和容错部署
* HTTP 各个服务或版本之间基于标头的流量转向
</b></details>

<details>
<summary>什么是 Cloud Run for Anthos？</summary><br><b>

它是 Anthos 堆栈的一部分，为 Anthos 带来无服务器容器体验，在 K8s 集群之上提供高级平台体验。它是用 Knative 构建的，Knative 是 K8s 的开源Operator，带来无服务器应用程序服务和事件功能。
</b></details>

<details>
<summary>Cloud Run for Anthos 如何简化操作？</summary><br><b>

希望为开发人员提供额外工具来测试、部署和运行应用程序的组织中的平台团队可以使用 Knative 来增强 Anthos as Cloud Run 上的体验。以下是一些好处；

* 从 K8s 部署轻松迁移 - 没有 Cloud Run，平台工程师必须配置部署、服务和 HorizontalPod自动定标器(HPA）反对负载均衡器和自动缩放。如果应用程序已经在提供流量，则很难有效地更改配置或回滚。使用 Cloud Run 管理所有这些，因此 Knative 服务清单描述了要自动缩放和负载平衡的应用程序
* 自动缩放 - 突然的流量高峰可能会导致 K8s 中的应用程序容器因过载而崩溃，因此执行高效的自动自动缩放来服务高流量
* 网络 - 它具有内置的负载平衡功能和在应用程序的多个版本之间分配流量的策略。
* 发布和发布 - 支持 Knatibe 的概念 API的修订版通过拆分流量来描述应用程序的新版本或不同配置以及金丝雀部署。
* 监控 - 观察和记录延迟、错误率和每秒请求数等指标。
</b></details>

<details>
<summary>列出并解释 Cloud Run for Anthos 提供的三种高级开箱即用自动缩放原语，这些原语在 K8s 中并不存在</summary><br><b>

* 基于请求的快速自动扩缩 - 默认自动扩缩器会监控请求指标，使 Cloud Run for Anthos 能够顺利处理尖峰流量模式
* 并发控制 - 强制执行每个容器的最大飞行请求数等限制，以确保容器不会过载和崩溃。添加更多容器来处理尖峰流量，缓冲请求。
* 缩放至零 - 如果应用程序一段时间不活动，Cloud Run 会将其缩小至零以减少其占用空间。或者，可以关闭缩放至零以防止冷启动。
</b></details>

<details>
<summary>列出一些 Cloud Run for Anthos 用例</summary><br><b>

由于它不支持有状态应用程序或粘性会话，因此它适合运行无状态应用程序，例如：

* 机器学习模型预测，例如 TensorFlow Serving 容器
* API 网关， API 中间件、Web 前端和微服务
* 事件处理程序， ETL
</b></details>
