<a name="datadog"></a>
# DataDog

- [DataDog](#datadog)
  - [问题](#questions)
    - [基础知识](#basics)
  - [Datadog 代理](#datadog-agent)
  - [Datadog 集成](#datadog-integrations)

<a name="questions"></a>
## 问题

<a name="basics"></a>
### 基础知识


<details>
<summary>描述至少三个使用类似的用例 Datadog。可以如您所愿具体</summary><br><b>

* 监控实例/服务器停机时间
* 检测异常并在发生时发送警报
* 服务请求或响应延迟

</b></details>

<details>
<summary>有哪些方式可以收集或发送数据 Datadog?</summary><br><b>

* Datadog 安装在您要监控的设备或位置上的代理
* 使用 Datadog API
* 内置集成

</b></details>

<details>
<summary>主机是什么意思 Datadog?</summary><br><b>

任何受监控的物理或虚拟实例 Datadog。几个例子：

- 云实例、虚拟机
- 裸机节点
- 平台或服务特定节点，例如 Kubernetes 节点

基本上任何具有以下功能的设备或位置 Datadog 代理已安装并正在运行。
</b></details>

<details>
<summary>什么是 Datadog 代理？</summary><br><b>

一个软件运行在 Datadog 主机。其目的是从主机收集数据并发送给 Datadog （指标、日志等数据）
</b></details>

<details>
<summary>什么是 Datadog 标签？</summary><br><b>

Datadog 标签用于标记具有独特属性的不同信息。例如，您可能希望使用“环境：生产”标记某些数据，同时使用“环境：暂存”标记来自临时或开发环境的信息。
</b></details>

<a name="datadog-agent"></a>
## Datadog 代理

<details>
<summary>一个的组成部分有哪些 Datadog 代理？</summary><br><b>

* 收集器：它的作用是从安装它的主机上收集数据。目前的默认时间段是每 15 秒一次。
* 转发器：负责将数据发送到 Datadog 结束 HTTPS
</b></details>

<a name="datadog-integrations"></a>
## Datadog 集成


<details>
<summary>你能讲述什么 Datadog 整合？</summary><br><b>

- Datadog 有许多支持与不同服务、平台等的集成。
- 每个集成都包含有关如何应用它、如何使用它以及它支持哪些配置选项的信息
</b></details>

<details>
<summary>打开一些集成窗口/页面，有一个名为“监视器”的部分。在那里可以找到什么？</summary><br><b>

通常你可以发现一些异常类型 Datadog 建议监控和跟踪。
</b></details>