<a name="site-reliability-engineering"></a>
# 可靠性工程网站

<a name="sre-questions"></a>
## SRE 问题

<details>
<summary>什么是 SLI （服务水平指标）？</summary>
<b>
SLI 是用于衡量服务实际性能或可靠性的指标，也是定义 SLO 的基础。

示例：
- 请求延迟
- 处理量
- 单位时间内请求失败次数

阅读更多： [Google SRE 手册](https://sre.google/sre-book/table-of-contents/)
</b>
</details></br>

<details>
<summary>什么是 SLO （服务水平目标）？</summary>
<b>

SLO 是围绕 SLI 定义的服务水平目标值或目标范围。

示例：特定 SLI 集合在 30 天内达到 99%。

还值得注意的是 SLO 也作为下限，表明没有必要比必要的更可靠，因为这样做可能会延迟新功能的发布。

阅读更多： [Google SRE 手册](https://sre.google/sre-book/table-of-contents/)
</b>
</details><br>

<details>
<summary>什么是 SLA （服务水平协议）？</summary>
<b>

AN SLA 是服务提供商和客户之间的正式协议，指定预期的服务质量以及不满足服务质量的后果。

SRE 通常不会参与构建 SLA，因为 SLA 与业务和产品决策密切相关

阅读更多： [Google SRE 手册](https://sre.google/sre-book/table-of-contents/)
</b>
</details><br>

<details>
<summary>什么是错误预算？</summary>
<b>

错误预算表示服务在仍满足其要求的情况下可能遇到的可接受的停机时间或错误量 SLO.

误差预算是 1 减去 SLO 的服务。 99.9% SLO 服务的错误预算为 0.1%。

如果我们的服务在四个星期内收到 1,000,000 个请求，则可用性为 99.9% SLO 为我们提供了该期间 1,000 个错误的预算。

误差预算是一种平衡创新与稳定性的机制。如果 SRE 无法执行错误预算，整个系统就会崩溃。

阅读更多： [Google SRE 手册](https://sre.google/sre-book/table-of-contents/)
</b>
</details></br>

<details>
<summary>什么是辛劳？</summary>
<b>

辛劳是一种往往是手动的、重复性的、自动化的、战术性的工作，缺乏持久的价值，并且随着服务的增长而线性扩展。

如果您可以自动执行一项任务，那么您可能应该自动执行该任务。

自动化显着减少了劳力。投资自动化可以带来具有持久影响的有价值的工作，在系统扩展时只需进行最少的调整即可提供可扩展性潜力。

阅读更多： [Google SRE 手册](https://sre.google/sre-book/table-of-contents/)
</b>
</details>
