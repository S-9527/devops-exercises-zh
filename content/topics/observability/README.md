<a name="observability"></a>
# 可观测性

- [可观测性](#observability)
  - [监控](#monitoring)
  - [日期](#data)
  - [应用性能管理](#application-performance-management)

<details>
<summary>什么是可观察性？</summary><br><b>
  
  在分布式系统中，可观察性是收集有关程序执行、模块内部状态以及组件之间通信的数据的能力。<br>
  为了提高可观察性，软件工程师使用各种日志记录和跟踪技术来收集遥测信息，并使用工具来分析和使用它。<br>
  可观察性是站点可靠性工程的基础，因为它是分类服务中断的第一步。<sup title="wikipedia"><a href="https://en.wikipedia.org/wiki/Observability_(software)">[1]</a></sup>
  
</b></details>

<a name="monitoring"></a>
## 监控

<details>
<summary>监控什么？它与可观察性有何关系？</summary><br><b>

Google：“监控是服务所有者跟踪系统运行状况和可用性的主要手段之一”。
</b></details>

<details>
<summary>您过去熟悉和/或使用过哪些类型的监控输出？</summary><br><b>

警报<br>
门票<br>
记录<br>
</b></details>

<a name="data"></a>
## 日期

<details>
<summary>您能提到经常监控哪些类型的事物吗？ IT 行业？</summary><br><b>

- 硬件（CPU, RAM, ...)
- 基础设施（磁盘容量、网络延迟……）
- 应用程序（状态代码、日志中的错误...）
</b></details>

<details>
<summary>解释“时间序列”数据</summary><br><b>

时间序列数据是有序数据，以有序（按时间）的方式测量某些参数。

一个例子是 CPU 每小时利用率：

```
08:00   17
09:00   22
10:00   91
```
</b></details>

<details>
<summary>解释数据聚合</summary><br><b>

在监控中，聚合数据基本上是结合值的收集。它可以通过不同的方式来完成，例如取多个值的平均值、它们的总和、它们在集合中出现的次数以及主要取决于集合类型的其他方式（例如时间序列将是一种类型）。

</b></details>


<a name="application-performance-management"></a>
## 应用性能管理

<details>
<summary>什么是应用程序性能管理？</summary><br><b>

- IT 指标转化为业务洞察
- 监控应用程序见解的实践，以便我们可以提高性能、减少问题并改善整体用户体验

</b></details>

<details>
<summary>列出您可以监控的项目的三个方面 APM （例如后端）</summary><br><b>

- 前端
- 后端
- 基础设施
- ...

</b></details>

<details>
<summary>可以收集/监控什么来执行 APM 监控？</summary><br><b>

- 指标
- 日志
- 活动
- 痕迹

</b></details>
