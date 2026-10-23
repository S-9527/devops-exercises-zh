<details>
<summary>解释一下下面的代码：

<code>:(){ :|:& };:</code>

</summary><br><b>
</b></details>

<details>
<summary>你能给一些人举个例子吗 Bash 最佳实践？</summary><br><b>
</b></details>

<details>
<summary>什么是三元运算符？你如何在 bash 中使用它？</summary><br><b>

使用 if/else 的简短方法。一个例子：

[[ $a = 1 ]] && b="是，等于" || b=“不”
</b></details>

<details>
<summary>下面的代码有什么作用以及什么时候使用它？
	
<code>差异 <(ls /tmp) <(ls /var/tmp)</code>

</summary><br>
这被称为“流程替代”。它提供了一种在使用管道时将命令的输出传递到另一个命令的方法 <code>|</code> 是不可能的。当命令不支持时可以使用 <code>STDIN</code> 或者您需要多个命令的输出。 
https://superuser.com/a/1060002/167769
</details>


<a name="sql"></a>
## SQL

<a name="sql-beginner"></a>
<a name="baby-beginner"></a>
#### :baby: 初学者

<details>
<summary>什么是 SQL 代表？</summary><br><b>

结构化查询语言

</b></details>

<details>
<summary>怎么样 SQL 不同于 NoSQL</summary><br><b>

主要区别在于 SQL 数据库是结构化的（数据以以下形式存储）
具有行和列的表格 - 就像 Excel 电子表格一样） NoSQL 是 
非结构化，并且数据存储可能会根据存储方式的不同而变化 NoSQL DB 是这样设置的
如键值对、面向文档等。
</b></details>

<details>
<summary>当数据库为A时，这意味着什么CI兼容D？</summary><br>

一个CID 代表原子性、一致性、隔离性、持久性。为了成为ACID 兼容，数据库非常了解四个标准中的每一个

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
<summary>什么时候使用最好 SQL? NoSQL?</summary><br><b>

SQL - Best used when data integrity is crucial. SQL 通常由许多实施
金融领域内的业务和领域，因为它是 ACID 合规性。

NoSQL - Great if you need to scale things quickly. NoSQL 是用网络应用程序设计的 
因此，如果您需要快速将相同的信息传播给其他人，那么它会非常有效 
多个服务器

另外，由于 NoSQL 不遵守严格的表的列和行结构
根据关系数据库的要求，您可以将不同的数据类型存储在一起。
</b></details>

<details>
<summary>什么是笛卡尔积？</summary><br>

笛卡尔积是指第一个表中的所有行都连接到第二个表中的所有行
表。这可以通过不定义连接键来隐式完成，或者通过显式完成 
呼叫一个 CROSS JOIN 在两个表上，如下所示：

从客户中选择 * **CROSS JOIN** 订单；

请注意，笛卡尔积也可能是一件坏事 - 在执行连接时
在两个都没有唯一键的表上，这可能会导致返回信息
是不正确的。 
</details>

<a name="sql-specific-questions"></a>
##### SQL 具体问题

对于这些问题，我们将使用如下所示的客户和订单表：

**客户**

Customer_ID | Customer_Name | Items_in_cart | Cash_spent_to_Date
------------ | ------------- | ------------- | -------------
100204 | 约翰·史密斯 | 0 | 20.00
100205 | 简·史密斯 | 3 | 40.00
100206 | 鲍比·弗兰克 | 1 | 100.20

**ORDERS**

Customer_ID | Order_ID | 项目 | 价格 | Date_sold
------------ | ------------- | ------------- | ------------- | -------------
100206 | A123 | 橡皮鸭 | 2.20 | 2019-09-18
100206 | A123 | 泡泡浴 | 8.00 | 2019-09-18
100206 | Q987 | 80 包 TP | 90.00 | 2019-09-20
100205 | Z001 | 猫粮 - 金枪鱼 | 10.00 | 2019-08-05
100205 | Z001 | 猫粮 - 鸡肉 | 10.00 | 2019-08-05
100205 | Z001 | 猫粮 - 牛肉 | 10.00 | 2019-08-05
100205 | Z001 | 猫粮 - Kitty 油炸玉米粉饼 | 10.00 | 2019-08-05
100204 | X202 | 咖啡 | 20.00 | 2019-04-29

<details>
<summary>我如何从此表中选择所有字段？</summary><br><b>

选择* <br>
来自客户；
</b></details>

<details>
<summary>约翰的购物车中有多少件商品？</summary><br><b>

选择购物车中的商品 <br>
来自客户 <br>
其中 Customer_Name =“约翰·史密斯”；
</b></details>

<details>
<summary>所有客户花费的现金总和是多少？</summary><br><b>

选择 SUM(Cash_spent_to_Date) 为 SUM_CASH <br>
来自客户；
</b></details>

<details>
<summary>告诉我你最近从事的大型项目/任务</summary><br><b>
</b></details>

<details>
<summary>您从事的项目中最具挑战性的部分是什么？</summary><br><b>
</b></details>

<details>
<summary>你为什么想在这里工作？</summary><br><b>
</b></details>

<details>
<summary>您是如何得知我们的？</summary><br><b>

告诉他们你是怎么听说他们的:D
放松，这里没有错误或正确的答案......我想。
</b></details>