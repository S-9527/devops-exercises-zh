<a name="databases"></a>
# 数据库

- [数据库](#databases)
  - [练习](#exercises)
  - [问题](#questions)
    - [SQL](#sql)
    - [时间序列](#time-series)

<a name="exercises"></a>
## 练习

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 留言板表  | 关系型 DB 表格 | [练习](topics/databases/table_for_message_board_system.md) | [解决方案](topics/databases/solutions/table_for_message_board_system.md)

<a name="questions"></a>
## 问题


<details>
<summary>您熟悉什么类型的数据库？</summary><br><b>

关系型（SQL)
NoSQL
时间序列
</b></details>

<a name="sql"></a>
### SQL

<details>
<summary>什么是关系数据库？</summary><br><b>

  * 数据存储：系统将数据存储在表中
  * SQL：管理关系数据库的编程语言
  * 数据定义语言：用于创建、更改和删除表的标准语法

</b></details>

<details>
<summary>当数据库为A时，这意味着什么CI兼容D？</summary><br>

一个CID 代表原子性、一致性、隔离性、持久性。为了成为ACID 兼容，数据库必须满足四个标准中的每一个

**原子性** - 当数据库发生更改时，它应该整体成功或失败。

例如，如果您要更新一个表，则更新应该完全执行。如果它只执行部分，
更新整体被认为失败，不会通过—— DB 将会恢复到原来的状态
更新发生前的状态。还应该提到的是，原子性确保每个
事务作为其自己的独立“单元”完成 - 如果任何部分失败，则整个语句都会失败。

**一致性** - 对数据库所做的任何更改都应使其从一种有效状态进入下一种有效状态。

例如，如果您对 DB，它不应该破坏它。一致性是通过检查和约束来维持的
是预先定义在 DB。例如，如果您尝试将值从字符串更改为 int，当列
应该是字符串数据类型，一致 DB 将不允许此交易进行，并且该操作将
不被处决

**隔离** - 这确保数据库永远不会被看到“更新中” - 因为多个事务正在运行
同时，它仍然应该离开 DB 处于与事务按顺序运行相同的状态。

例如，假设另外 20 个人同时对数据库进行更改。在
当您执行查询时，20 项更改中的 15 项已完成，但 5 项仍在进行中。你应该
只能看到已完成的 15 项更改 - 您不会在更改进行时看到数据库的中间更新。

**持久性** - 一旦提交更改，无论发生什么，它都将保持提交状态
（电源故障、系统崩溃等）。这意味着所有已完成的交易
必须记录在非易失性存储器中。

请注意 SQL 本质上是ACID 兼容。某些 NoSQL DB可以是ACID 符合取决于
他们如何运作，但作为一般经验法则， NoSQL DB不被视为 ACID兼容
</details>

<details>
<summary>什么是分片？</summary><br><b>

分片是一种水平分区。

你能解释一下它有什么好处吗？
</b></details>

<details>
<summary>您发现您的数据库成为瓶颈，并且用户在访问数据时遇到问题。遇到这种情况你该如何处理？</summary><br><b>

没有提供太多关于它为何成为瓶颈以及当前架构是什么的信息，因此一种通用方法可能是<br>
通过将频繁访问的数据移动到内存结构来减少数据库的负载。
</b></details>

<details>
<summary>什么是连接池？</summary><br><b>

连接池是数据库连接的缓存，使用它的原因是为了避免为数据库的每个查询建立连接的开销。
</b></details>

<details>
<summary>什么是连接泄漏？</summary><br><b>

连接泄漏是指数据库连接在创建后未关闭并且不再需要的情况。
</b></details>

<details>
<summary>什么是表锁？</summary><br><b>
</b></details>

<details>
<summary>您的数据库执行速度比平常慢。更具体地说，您的查询需要花费大量时间。你会怎么做？</summary><br><b>

* 查询正在运行的查询并取消不相关的查询
* 检查连接泄漏（查询正在运行的连接并包括它们的 IP)
* 检查表锁并终止不相关的锁定会话
</b></details>

<details>
<summary>什么是数据仓库？</summary><br><b>

“数据仓库是一个面向主题的、集成的、时变的和非易失性的数据集合，用于支持组织的决策过程”
</b></details>

<details>
<summary>解释一下什么是时序数据库</summary><br><b>
</b></details>

<details>
<summary>什么是 OLTP （在线交易处理）？</summary><br><b>
</b></details>

<details>
<summary>什么是 OLAP （在线分析处理）？</summary><br><b>
</b></details>

<details>
<summary>数据库中的索引是什么？</summary><br><b>

数据库索引是一种提高表操作速度的数据结构。可以使用一列或多列创建索引，为快速随机查找和记录访问的高效排序提供基础。
</b></details>

<details>
<summary>关系数据库中有哪些数据类型？</summary><br><b>
</b></details>

<details>
<summary>解释标准化</summary><br><b>

数据库中多次使用的数据应存储一次并使用外键引用。<br>
这样做的明显好处是易于维护，您只需在一个位置更改值即可在任何地方更改它。
</b></details>

<details>
<summary>解释主键和外键</summary><br><b>

主键：每个表中的每一行都应该有一个代表该行的唯一标识符。<br>
外键：对另一个表的主键的引用。这允许您将表连接在一起以检索所需的所有信息，而无需复制数据。
</b></details>

<details>
<summary>您使用过哪些类型的数据表？</summary><br><b>

  * 主数据表：您关心的主要数据
  * 明细表：包含外键，具有一对多关系
  * 查找值表：可以是每个查找一个表，也可以是包含所有查找并具有一对多关系的表
  * 多参考表
</b></details>

<details>
<summary>什么是 ORM？它对关系数据库的使用有什么好处？</summary><br><b>

[维基百科](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping)：“是一种使用面向对象编程语言在不兼容类型系统之间转换数据的编程技术”

关于关系数据库：

  * 数据库即代码
  * 数据库抽象
  * 封装 SQL 复杂性
  * 启用代码审查流程
  * 允许作为本机使用 OOP 结构
</b></details>

<details>
<summary>什么是 DDL?</summary><br><b>

[维基百科](https://en.wikipedia.org/wiki/Data_definition_language)：“在这样的背景下 SQL，数据定义或数据描述语言（DDL) 是用于创建和修改数据库对象（例如表、索引和用户）的语法。”
</b></details>

<a name="time-series"></a>
### 时间序列

<details>
<summary>什么是时间序列数据库？</summary><br><b>

专门为基于时间序列的数据设计的数据库。

它具有多项优化：

<TODO>: 完成这个:)
</b></details>
