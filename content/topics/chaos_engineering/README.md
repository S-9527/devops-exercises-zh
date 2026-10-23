<a name="chaos-engineering"></a>
# 混沌工程

- [混沌工程](#chaos-engineering)
  - [混沌工程问题](#chaos-engineering-questions)
    - [基础知识](#basics)

<a name="chaos-engineering-questions"></a>
## 混沌工程问题

<a name="basics"></a>
### 基础知识

<details>
<summary>什么是混沌工程？</summary><br><b>

[维基百科](https://en.wikipedia.org/wiki/Chaos_engineering)：“混沌工程是对系统进行实验的学科，目的是建立对系统承受生产中动荡条件的能力的信心。”

[科技目标](https://www.techtarget.com/searchitoperations/definition/chaos-engineering)：“混沌工程是测试分布式计算系统以确保其能够承受意外中断的过程。”

</b></details>

<details>
<summary>典型的混沌工程工作流程是什么？</summary><br><b>

根据 [格雷姆林](gremlin.com) 共有三个步骤：

1. 规划一个实验，设计并选择一个系统无法正常运行的场景
2. 您执行尽可能最小的实验来检验您的理论
3. 如果没有出现任何问题，您可以扩大实验规模并扩大爆炸半径。如果您的系统出现故障，您可以更好地了解原因并开始处理它

然后，该过程会在相同场景或新场景中重复进行。

</b></details>

<details>
<summary>举几个用于操作混沌练习的工具</summary><br><b>

- AWS 故障注入模拟器：将故障注入 AWS 资源
- Azure Chaos Studio：注入失败 Azure 资源
- Chaos Monkey：在不同云提供商上编排 Chaos 的最著名工具之一
- Litmus - 一个框架 Kubernetes 
- 混沌网格：适用于云 Kubernetes 平台


查看详细列表 [这里](https://github.com/dastergon/awesome-chaos-engineering)

</b></details>
