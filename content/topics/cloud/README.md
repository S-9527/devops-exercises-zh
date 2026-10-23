<a name="cloud"></a>
## 云

<details>
<summary>什么是云计算？什么是云提供商？</summary><br><b>

云计算是指提供按需计算服务 
通过互联网，按使用量付费。

简单来说，云计算是一种让您可以使用任何计算的服务
服务器、存储、网络、数据库和情报等服务， 
直接通过您的浏览器，无需拥有任何东西。你可以做任何你想做的事 
可以想到，除非它不需要你靠近你的硬件。

云服务提供商是指建立公有云、管理私有云或提供按需云计算组件（也称为云计算服务），例如基础设施即服务 (IaaS)、平台即服务 (PaaS) 和软件即服务 (SaaS) 的公司。与本地部署相比，云服务可以降低业务流程成本 IT.
</b></details>

<details>
<summary>云计算有哪些优势？至少提及 3 个优点</summary><br><b>

* 即用即付：您只需为您使用的内容付费。无需预付款，当不再使用资源时，付款就会停止。
* 可扩展：资源根据需求缩小或增加
* 高可用性：即使某些服务出现故障，资源和应用程序也能提供无缝体验
* 灾难恢复 
</b></details>

<details>
<summary>判断题：云计算是一种基于消费的模型（用户只需为他们使用的资源付费）</summary><br><b>

正确。
</b></details>

<details>
<summary>云计算服务有哪些类型？</summary><br><b>

IAAS - Infrastructure as a Service
PAAS - Platform as a Service
SAAS - Software as a Service
</b></details>

<details>
<summary>解释以下每一项并举例：

  * IAAS
  * PAAS
  * SAAS</summary><br><b>
  * IAAS - Users have control over complete 操作系统 and don't need to worry about the physical resources, which is managed by 云 Service Provider.
  * PAAS - CLoud Service Provider takes care of 操作系统, Middlewares and users only need to focus on our Data and Application.
  * SAAS - A cloud based method to provide software to users, software logics running on cloud, can be run on-premises or managed by 云 Service Provider.
</b></details>

<details>
<summary>有哪些类型的云（或云部署）？</summary><br><b>

  * 公共 - 在多个客户之间共享计算资源的云服务
  * 私有 - 计算资源仅限于特定客户或组织，由第三方或组织本身管理的云服务
  * 混合 - 公共云和私有云的组合
</b></details>

<details>
<summary>云提供商和本地解决方案之间有什么区别？</summary><br><b>

在云提供商中，其他人拥有并管理硬件，雇用相关的基础设施团队并支付房地产费用（硬件和人员）。您可以专注于您的业务。

在本地解决方案中，情况恰恰相反。您需要照顾硬件、基础设施团队并支付所有费用，这可能非常昂贵。另一方面，它是根据您的需求量身定制的。
</b></details>

<details>
<summary>什么是无服务器计算？</summary><br><b>

无服务器计算背后的主要思想是您不需要管理服务器的创建和配置。您需要关注的是将您的应用程序拆分为多个功能，这些功能将由某些操作触发。

需要注意的是：

* 无服务器计算仍在使用服务器。所以说无服务器计算中没有服务器是完全错误的
* 无服务器计算允许您拥有不同的付费模式。您基本上仅在功能运行时付费，而不是在功能运行时付费 VM 或者容器像其他支付模型一样运行
</b></details>

<details>
<summary>我们可以用无服务器取代服务器上任何类型的计算吗？</summary><br><b>
</b></details>

<details>
<summary>托管服务与 SaaS 之间有区别还是一样？</summary><br><b>
</b></details>

<details>
<summary>什么是自动缩放？</summary><br><b>

AWS 定义：“AWS Auto Scaling 监控您的应用程序并自动调整容量，以尽可能低的成本保持稳定、可预测的性能”

阅读有关自动缩放的更多信息 [这里](https://aws.amazon.com/autoscaling)
</b></details>

<details>
<summary>水平缩放和垂直缩放有什么区别？</summary><br><b>

[AWS 文档](https://wa.aws.amazon.com/wellarchitected/2020-07-02T19-33-23/wat.concept.horizontal-scaling.en.html):

“水平可扩展”系统是一种可以通过向系统添加更多计算机来增加容量的系统。这与“垂直可扩展”系统形成鲜明对比，“垂直可扩展”系统仅限于在一台计算机上运行其进程。在此类系统中，提高性能的唯一方法是以更快（或更多）CPU、内存或存储的形式向一台计算机添加更多资源。

通过启用工作负载的并行执行并将其分布在许多不同的计算机上，水平可扩展的系统通常能够胜过垂直可扩展的系统。
</b></details>

<details>
<summary>判断题： Auto Scaling 是关于添加资源（例如实例），而不是删除资源</summary><br><b>

错误。自动缩放会调整容量，这可能意味着根据使用情况和性能删除一些资源。
</b></details>

<a name="cloud---security"></a>
#### 云 - 安全

<details>
<summary>如何保护云中的实例？</summary><br><b>

  * 实例应具有所需的最低权限。您不希望实例级事件成为帐户级事件
  * 应通过负载均衡器或堡垒主机访问实例。换句话说，它们应该远离互联网（在某个子网后面的私有子网中） NAT). 
  * 使用最新的 OS 与您的实例的图像（或至少应用最新的补丁）
  </b></details>