<a name="azure"></a>
# Azure

- [Azure](#azure)
  - [问题](#questions)
    - [Azure 101](#azure-101)
    - [Azure 资源管理器](#azure-resource-manager)
    - [计算](#compute)
    - [网络](#network)
    - [存储](#storage)
    - [安全性](#security)

<a name="questions"></a>
## 问题

<a name="azure-101"></a>
### Azure 101

<details>
<summary>什么是 Azure Portal？</summary><br><b>

[Microsoft Learn](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/what-is-microsoft-azure)：“Azure Portal 是一个基于 Web 的统一控制台，可作为命令行工具的替代方案。通过 Azure Portal，你可以使用图形界面管理 Azure 订阅。”
</b></details>

<details>
<summary>什么是 Azure Marketplace？</summary><br><b>

[Microsoft Learn](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/what-is-microsoft-azure): “Azure Marketplace 帮助用户连接 Microsoft 合作伙伴、独立软件供应商和初创公司，这些组织提供针对 Azure 优化的解决方案和服务。”
</b></details>

<details>
<summary>解释可用性集和可用性区域</summary><br><b>

可用性集是虚拟机的逻辑分组，允许 Azure 了解您的应用程序是如何构建的以提供冗余和可用性。建议在可用性集中创建两个或更多虚拟机，以提供高可用性应用程序并满足 99.95% Azure SLA.
</b></details>

<details>
<summary>什么是 Azure Policy？</summary><br><b>


[Microsoft Learn](https://learn.microsoft.com/en-us/azure/governance/policy/overview): “Azure Policy 有助于执行组织标准并大规模评估合规性。通过合规性仪表板，它提供聚合视图来评估环境整体状态，也可以下钻到每个资源、每条 policy 的粒度。它还可以通过批量修复现有资源、自动修复新资源，帮助资源达到合规要求。”
</b></details>

<details>
<summary>解释一下 Azure 托管磁盘</summary><br><b>
</b></details>

<a name="azure-resource-manager"></a>
### Azure 资源管理器

<details>
<summary>解释一下什么是 Azure Resource Manager</summary><br><b>

来自 [Azure 文档](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview): “Azure Resource Manager 是 Azure 的部署和管理服务。它提供一个管理层，使你能够创建、更新和删除 Azure 账户中的资源。部署后，可以使用访问控制、锁和 tag 等管理功能来保护和组织资源。”
</b></details>

<details>

<summary>有哪些 ARM 模板的部分？</summary><br><b>

[Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)：模板包含以下部分：

参数 - 在部署期间提供允许同一模板用于不同环境的值。

变量 - 定义在模板中重复使用的值。它们可以根据参数值构造。

用户定义的函数 - 创建可简化模板的自定义函数。

资源 - 指定要部署的资源。

输出 - 从已部署资源返回值。
</b></details>

<details>

<summary>什么是 Azure 资源组？</summary><br><b>

来自 [Azure 文档](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)：“资源组是一个容器，保存某个对象的相关资源 Azure 解决方案。资源组可以包含解决方案的所有资源，也可以仅包含您想要作为一个组进行管理的资源。”
</b></details>

<a name="compute"></a>
### 计算

<details>
<summary>你熟悉哪些 Azure compute 服务？</summary><br><b>

  * Azure 虚拟机
  * Azure 批次
  * Azure 服务结构
  * Azure 容器实例
  * Azure 虚拟机规模集
</b></details>

<details>

<summary>Azure Virtual Machines 服务用于什么场景？</summary><br><b>

Azure VM 支持 Windows 和 Linux OS。它们可用于托管 Web server、应用程序、备份、数据库，也可作为 jump server 或 Azure self-hosted agent 来构建和部署应用程序。
</b></details>

<details>
<summary>Azure Virtual Machine Scale Sets 服务用于什么场景？</summary><br><b>

缩放 Linux 或 Windows 虚拟机；它允许您创建和管理一组负载平衡的虚拟机。数量 VM 实例可以根据需求或定义的计划自动增加或减少。
</b></details>

<details>
<summary>Azure Functions 服务用于什么场景？</summary><br><b>

Azure Functions 是 Azure 的 serverless compute 服务。
</b></details>

<details>
<summary>什么是 Azure Durable Functions？</summary>
<br>

[Microsoft Learn](https://docs.microsoft.com/en-us/learn/modules/intro-to-azure-fundamentals/what-is-microsoft-azure)：Durable Functions 是 Azure Functions 的扩展，允许你在无服务器计算环境中编写有状态函数。
</details>

<details>
<summary>Azure Container Instances 服务用于什么场景？</summary><br><b>

运行容器化应用程序（无需配置虚拟机）。
</b></details>

<details>
<summary>Azure Batch 服务用于什么场景？</summary><br><b>

运行并行和高性能计算应用程序
</b></details>

<details>
<summary>Azure Service Fabric 服务用于什么场景？</summary><br><b>
</b></details>

<details>
<summary>Azure Kubernetes Service 用于什么场景？</summary><br><b>
</b></details>

<a name="network"></a>
### 网络

<details>
<summary>你熟悉哪些 Azure networking 服务？</summary><br><b>
</b></details>
<details>
<summary>解释 VNet 对等互连</summary><br><b>

VNet 对等互连可以连接虚拟网络。这意味着您可以通过 IPv4 地址在所连接的 VNet 资源之间私下路由流量。连接同一区域内的 VNet 称为区域 VNet 对等互连，但是跨区域连接 VNet Azure 区域称为全球 VNet 对等互连。

</b></details>

<details>
<summary>什么是 Azure 地区？</summary><br><b>

Azure Region 是部署在特定地理区域内、并通过专用低延迟网络连接的一组数据中心。
</b></details>

<details>
<summary>什么是N层架构？</summary><br><b>

N 层架构将应用程序分为逻辑层和物理层。每一层都有特定的职责。各层在物理上是分开的，在不同的机器上运行。 N 层应用程序可以具有封闭层架构或开放层架构。 N 层架构通常作为基础架构即服务 (IaaS) 应用程序实现，每一层都在一组单独的 VM 上运行
</b></details>

<a name="storage"></a>
### 存储

<details>
<summary>你熟悉哪些 Azure storage 服务？</summary><br><b>
</b></details>

<details>
<summary>有哪些存储选项 Azure 支持？</summary><br><b>
</b></details>

<a name="security"></a>
### 安全性

<details>
<summary>什么是 Azure 安全中心？它有哪些特点？</summary><br><b>

它是一项监控服务，可为所有服务提供威胁防护 Azure.
更具体地说，它：

* 根据您的使用情况提供安全建议
* 监控安全设置并持续监控所有服务
* 分析并识别潜在的入站攻击
* 使用机器学习检测并阻止恶意软件
</b></details>

<details>
<summary>什么是 Azure 活动目录？</summary><br><b>

Azure AD 是一种基于云的身份服务。您可以将其用作独立服务，也可以将其与已运行的现有 Active Directory 服务集成。
</b></details>

<details>
<summary>什么是 Azure 高级威胁防护？</summary><br><b>
</b></details>

<details>
<summary>组成部分有哪些 Azure ATP?</summary><br><b>
</b></details>

<details>
<summary>日志存储在哪里 Azure 监控？</summary><br><b>
</b></details>

<details>
<summary>解释一下 Azure 站点恢复</summary><br><b>
</b></details>

<details>
<summary>解释顾问的职责</summary><br><b>
</b></details>

<details>

<summary>哪些协议可用于配置运行状况探测</summary><br><b>
</b></details>

<details>
<summary>解释一下 Azure 活跃</summary><br><b>
</b></details>

<details>
<summary>什么是订阅？有哪些类型的订阅？</summary><br><b>
</b></details>

<details>
<summary>解释什么是 Blob 存储服务</summary><br><b>
</b></details>
