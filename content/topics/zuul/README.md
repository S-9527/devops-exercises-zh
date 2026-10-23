<a name="zuul"></a>
# 祖尔

<a name="questions"></a>
## 问题

<a name="basics"></a>
### 基础知识

<details>
<summary>简单描述一下什么是 Zuul</summary><br><b>

来自 [Zuul 的文档](https://zuul-ci.org/docs/zuul/about.html)：“Zuul 是一个项目门控系统。这就像一个 CI 或 CD 系统，但重点是测试代码存储库的未来状态......

Zuul 本身是一项服务，它监听来自各种代码审查系统的事件，根据这些事件执行作业，并将结果报告回代码审查系统。”
</b></details>

<details>
<summary>什么是 Nodepool？它与 Zuul 有何关系？</summary><br><b>

“Nodepool是一个用于管理测试节点资源的系统。它支持从云提供商启动一次性测试节点以及管理对预定义的现有节点的访问。”

“Zuul 使用一个名为 Nodepool 的独立组件来提供运行作业的资源。Nodepool 与多个云提供商以及静态定义的节点一起工作（同样，同时）。”
</b></details>

<details>
<summary>Zuul 中的管道是什么？</summary><br><b>

Zuul 中的管道是一个工作流。该工作流程可以根据不同的事件执行 - 当更改提交到项目时、合并时等。<br>
管道本身可以应用于一个或多个不同的项目（=托管或私有源代码控制中的存储库）
</b></details>

<details>
<summary>Zuul 中的项目是什么？</summary><br><b>
</b></details>
