<a name="openshift"></a>
## OpenShift

<a name="openshift-exercises"></a>
### OpenShift 练习

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 项目101 | 项目 | [练习](projects_101.md) | [解决方案](solutions/projects_101.md)
| 我的第一个应用程序 | 应用领域 | [练习](my_first_app.md) | [解决方案](solutions/my_first_app.md)

<a name="openshift-self-assessment"></a>
### OpenShift 自我评估

* [OpenShift 101](#Openshift-101)
* [OpenShift 架构](#Openshift-architecture)
* [OpenShift 实践基础知识](#Openshift-hands-on-basics)
* [OpenShift 项目](#Openshift-projects)

<a name="openshift-101"></a>
### OpenShift 101

<details>
<summary>什么是 OpenShift?</summary><br><b>

OpenShift 是一个基于容器编排平台 Kubernetes.<br>
它可用于部署应用程序，同时管理开销最小。
</b></details>

<details>
<summary>如何 OpenShift 与 Kubernetes?</summary><br><b>

OpenShift 是建立在 Kubernetes 除了内置资源之外，还定义自己的自定义资源。
</b></details>

<details>
<summary>判断题： OpenShift 是一个 IaaS（基础设施即服务）解决方案</summary><br><b>

错误。 OpenShift 是一个 PaaS（平台即服务）解决方案。
</b></details>

<details>
<summary>判断题： OpenShift CLI 支持一切 kubectl 支持以及附加功能</summary><br><b>

正确。
</b></details>

<details>
<summary>有哪些 OpenShift 在之上添加了功能 Kubernetes?</summary><br><b>

- UI: OpenShift 提供统一的 UI 开箱即用
- 路由：公开服务的简单过程
- 开发人员工作流程支持：内置 CI/CD （openshift pipelines），内置容器注册表和工具，用于构建从源到容器映像的工件
</b></details>

<details>
<summary>判断题：运行容器 OpenShift，你必须拥有root权限</summary><br><b>

错误。 OpenShift 默认支持无根容器。
</b></details>

<a name="openshift-architecture"></a>
<a name="openshift---architecture"></a>
## OpenShift - Architecture

<details>
<summary>有哪些类型的节点 OpenShift 有？</summary><br><b>

- Workers：最终用户应用程序运行的地方
- Masters：负责管理集群
</b></details>

<details>
<summary>哪个组件负责确定 Pod 放置？</summary><br><b>

Scheduler。
</b></details>

<details>
<summary>除了 Pod 放置之外，Scheduler 还负责什么？</summary><br><b>

通过在工作节点之间传播 pod 副本来实现应用程序高可用性
</b></details>

<a name="openshift-hands-on-basics"></a>
<a name="openshift---hands-on-basics"></a>
## OpenShift - Hands-On Basics

<details>
<summary>OpenShift 支持许多资源。如何获取所有这些资源的列表？</summary><br><b>

`oc api-resources`
</b></details>

<details>
<summary>解释一下 OpenShift CLI 喜欢 <code>奥克</code> 和 <code>奥多</code></summary><br><b>

oc is used for creating applications, but also for administrating OpenShift cluster<br>
odo 仅用于管理应用程序 OpenShift （主要从开发人员的角度）并且与管理集群无关
</b></details>

<a name="openshift-projects"></a>
<a name="openshift---projects"></a>
## OpenShift - Projects

<details>
<summary>什么是项目 OpenShift?</summary><br><b>

一个项目在 OpenShift 是一个 Kubernetes 带注释的命名空间。<br>
简而言之，将其视为用户管理和组织资源的隔离环境（例如 Pods, Deployments、服务等）。
</b></details>

<details>
<summary>如何列出所有项目？什么是“STATUS“列意味着项目列表输出？</summary><br><b>

`oc get projects` 将列出所有项目。的“STATUS" 列可用于查看当前哪些项目处于活动状态。
</b></details>

<details>
<summary>您有一位新的团队成员，您希望为他分配您项目中的“管理员”角色 OpenShift。如何实现这一目标？</summary><br><b>

`oc adm policy add-role-to-user <role> <user> -n <project>`
</b></details>

<a name="openshift---applications"></a>
#### OpenShift - Applications

<details>
<summary>如何创建一个 MySQL 应用程序使用来自的图像 Docker Hub？</summary><br><b>

`oc new-app mysql`
</b></details>

<a name="openshift---images"></a>
#### OpenShift - Images

<details>
<summary>什么是图像流？</summary><br><b>
</b></details>

<details>
<summary>运行和管理多个项目的最佳方式是什么？ OpenShift 环境？</summary><br><b>

联合会
</b></details>

<a name="openshift---federation"></a>
#### OpenShift - Federation

<details>
<summary>什么是 OpenShift 联邦？</summary><br><b>

从单个集群跨多个独立集群管理和部署服务和工作负载 API
</b></details>

<details>
<summary>解释以下有关联邦的内容：

  * 多集群
  * 联邦集群
  * 主机集群
  * 会员集群
</summary><br><b>

  * 多集群 - 多个集群独立部署，彼此不知晓
  * 联合集群 - 由联合集群管理的多个集群 OpenShift 联邦控制平面
  * 主机集群 - 运行联合控制平面的集群
  * 成员集群 - 属于联合集群一部分并连接到联合控制平面的集群
</b></details>

<a name="openshift---storage"></a>
## OpenShift - Storage

<details>
<summary>什么是存储设备？有哪些存储设备？</summary><br><b>

* 硬盘
* SSD
* USB
* 磁带
</b></details>

<details>
<summary>什么是随机寻道时间？</summary><br><b>

磁盘到达数据所在位置并读取单个块/扇区所需的时间。

Bones问题：随机寻道时间是多少 SSD 和磁盘？
答：磁力大约是10ms SSD 介于 0.08 到 0.16ms 之间
</b></details>

<a name="openshift---pods"></a>
#### OpenShift - Pods

<details>
<summary>当 Pod 由于容器崩溃而失败或退出时会发生什么</summary><br><b>

主节点会自动重新启动 pod，除非它经常失败。
</b></details>

<details>
<summary>当 Pod 频繁失败时会发生什么？</summary><br><b>

它被主节点标记为坏并且暂时不再重新启动。
</b></details>

<details>
<summary>如何知道某个pod正在哪个节点上运行？</summary><br><b>

`oc get po -o wide`
</b></details>

<a name="openshift---services"></a>
#### OpenShift - Services

<details>
<summary>解释服务及其好处</summary><br><b>

  - 服务于 OpenShift 定义一组或多组 Pod 的访问策略。<br>
  - 他们通过启用应用程序之间的通信将应用程序连接在一起
  - 他们提供永久的内部 IP 应用程序的地址和主机名
  - 他们能够提供基本的内部负载平衡
</b></details>

<a name="openshift---labels"></a>
#### OpenShift - Labels

<details>
<summary>解释一下标签。它们是什么？你什么时候使用它们？</summary><br><b>

  - 标签用于分组或选择 API 物体
  - 它们是简单的键值对，可以包含在某些对象的元数据中
  - 常见用例：对 pod、服务、部署进行分组……所有这些都与某个应用程序相关
</b></details>

<a name="openshift---service-accounts"></a>
#### OpenShift - Service Accounts

<details>
<summary>如何列出 ServiceAccount？</summary><br><b>

`oc get serviceaccounts`
</b></details>

<a name="openshift---networking"></a>
#### OpenShift - 网络ing

<details>
<summary>什么是路线？</summary><br><b>

路由通过提供外部可访问的主机名来公开服务
</b></details>

<details>
<summary>路线由什么组成？</summary><br><b>

  - 姓名
  - 服务选择器
  - （可选）安全配置
</b></details>

<details>
<summary>判断题： Router容器只能运行在Master节点上</summary><br><b>

错误。它可以在任何节点上运行。
</b></details>

<details>
<summary>给出如何使用路由器的示例</summary><br><b>

1. 客户端正在使用运行的应用程序的地址 OpenShift
2. DNS 解析为运行路由器的主机
3. 路由器检查路由是否存在
4. Router 将请求代理到内部 pod 
</b></details>

<a name="openshift---security"></a>
#### OpenShift - Security

<details>
<summary>什么是“安全上下文约束”？</summary><br><b>

来自 [OpenShift 文档](https://docs.openshift.com/container-platform/4.7/authentication/managing-security-context-constraints.html)：“类似于 RBAC 资源控制用户访问，管理员可以使用安全上下文约束（SCC）来控制 Pod 的权限”。
</b></details>

<details>
<summary>如何为用户添加能力 `user1` 查看项目 `wonderland` 假设您有权这样做</summary><br><b>

oc adm policy add-role-to-user view user1 -n wonderland
</b></details>

<details>
<summary>如何检查当前上下文是什么？</summary><br><b>

`oc whoami --show-context`
</b></details>

<a name="openshift---serverless"></a>
#### OpenShift - Serverless

<details>
<summary>什么是 OpenShift 无服务器？</summary><br><b>

  - 一般来说，“无服务器”是一种云计算模型，其中为应用程序开发人员负责扩展和配置，因此他们可以专注于开发方面而不是基础设施相关的任务
  - OpenShift 无服务器允许您动态扩展应用程序，并提供构建事件驱动应用程序的能力，无论源是否存在 Kubernetes、云或本地解决方案
  - OpenShift Serverless 基于 Knative 项目。
</b></details>

<details>
<summary>您可以使用哪些事件源 OpenShift 无服务器？</summary><br><b>

  * Kafka
  * Kubernetes APIs
  * AWS 运动
  * AWS SQS
  * JIRA
  * 松弛

更多的支持和提供 OpenShift.
</b></details>

<details>
<summary>解释无服务器功能</summary><br><b>
</b></details>

<details>
<summary>Serverless容器和Serverless函数有什么区别？</summary><br><b>
</b></details>

<a name="openshift---misc"></a>
#### OpenShift - Misc

<details>
<summary>什么是复制控制器？</summary><br><b>

Replication Controller 负责确保指定数量的 pod 始终运行。<br>
如果运行的 Pod 数量多于需要 -> 它会删除其中的一些<br>
如果没有足够的 pod 正在运行 -> 它会创建更多
</b></details>
