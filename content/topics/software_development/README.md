<a name="software-development"></a>
## 软件开发

<a name="agile-software-development"></a>
### 敏捷软件开发

<details>
<summary>软件开发中的敏捷是什么？</summary><br><b>

[阿特拉斯](https://www.atlassian.com/agile/kanban/kanban-vs-scrum)：“是一种结构化和迭代的项目管理和产品开发方法。它认识到产品开发的波动性，并为自组织团队提供了一种方法来应对变化而不偏离轨道。”
</b></details>

<details>
<summary>软件开发中的看板是什么？</summary><br><b>

* 看板是一个敏捷的软件开发框架

* 它注重灵活流畅的流程——没有最后期限、更少的会议、更少的正式角色
* 尽管存在争议，但看板似乎更适合小型团队，而不是可能从结构化流程中受益更多的大型团队
</b></details>

<details>
<summary>软件开发中的 Scrum 是什么？</summary><br><b>

* Scrum 是一个敏捷软件开发框架

* 固定长度迭代
* 要求团队拥有 scrum master 和产品负责人等角色
</b></details>

<details>
<summary>您能比较看板和 Scrum 吗？</summary><br><b>

* 看板是连续的、流动的和可视化的过程，而 Scrum 是简短的、结构化的，工作在固定的时间间隔（称为冲刺）内交付


* 与 scrum 等其他框架相比，看板的结构性较差
* 看板是管理开发过程的更可视化方式
* 与 Scrum 等其他框架相比，看板的会议和正式角色更少
</b></details>

<a name="programming"></a>
### 编程

<details>
<summary>您更喜欢使用哪种编程语言 DevOps 相关任务？为什么特别是这个呢？</summary><br><b>

例如， Python。它具有多用途、易于学习、不断发展且开源的特点。而且今天很受欢迎
</b></details>

<details>
<summary>什么是静态类型（或简单类型）语言？</summary><br><b>

在静态类型语言中，变量类型在编译时而不是运行时已知。
这些语言有：C、C++ 和 Java
</b></details>

<details>
<summary>解释表达式和陈述</summary><br><b>

表达式是产生值的任何内容（即使该值为 None）。基本上，任何文字序列，您都可以说字符串、整数、列表……都是表达式。

语句是由解释器执行的指令，如变量赋值、for 循环和条件语句 (if-else)。
</b></details>

<details>
<summary>什么是面向对象编程？为什么它很重要？</summary><br><b>

[教育网](https://www.educative.io/blog/object-oriented-programming) “面向对象编程（OOP）是计算机科学中的一种编程范式，它依赖于类和对象的概念。它用于将软件程序构建为简单的、可重用的代码蓝图片段（通常称为类），这些蓝图用于创建对象的单独实例。”

OOP 是当今的主流范式。大多数大型服务都是用 OOP
</b></details>

<details>
<summary>解释成分</summary><br><b>

组合 - 从其他对象构建复杂对象的能力
</b></details>

<details>
<summary>什么是编译器和解释器？</summary><br><b>

[bzfar.org](https://www.bzfar.org/publ/algorithms_programming/programming_languages/translators_compiler_vs_interpetator/42-1-0-50)

编译器：

“编译器是一种用于将高级编程语言转换为低级编程语言的翻译器。它在一次会话中转换整个程序，并报告转换后检测到的错误。编译器需要时间来完成其工作，因为它将高级代码一次性翻译为较低级代码，然后将其保存到内存中。”

口译员：

“就像编译器一样，翻译器用于将高级编程语言转换为低级编程语言。它逐行转换程序，并在转换时立即报告检测到的错误。有了这个，比编译器更容易检测到错误。”
</b></details>

<details>
<summary>你熟悉吗 SOLID 设计原则？</summary><br><b>

SOLID 设计原则是：

* 使系统功能的扩展更加容易
* 使代码更具可读性，更易于维护

SOLID 是：

* 单一职责 - 一个类*应该有一个〜职责〜理由来改变。由于对原理的错误理解，由 Robert Martin 编辑
* 开放-封闭-类应该对扩展开放，但对修改封闭。这实际上意味着您应该通过添加新代码而不是修改它来扩展功能。您的系统应该分成多个组件，以便可以轻松扩展而不会破坏所有内容
* 里氏替换 - 任何派生类都应该能够替换其父类而不改变其更正。实际上，无论哪一部分使用它，代码的每一部分都会得到预期的结果
* 接口隔离——客户端永远不应该依赖于它不使用的任何东西。如果需要，必须将大接口拆分为较小的接口
* 依赖倒置 - 高层模块应该依赖于抽象，而不是低层模块

*还可以是模块、组件、实体等。取决于项目结构和编程语言
</b></details>

<details>
<summary>什么是 YAGNI？您对此有何看法？</summary><br><b>

YAGNI - You aren't gonna need it. You must add functionality that will be used. No need to add functionality that is not directly needed
</b></details>

<details>
<summary>什么是 DRY？您对此有何看法？</summary><br><b>

DRY - Don't repeat yourself. Actually it means that you shouldn't duplicate logic and use functions/classes instead. But this must be done smartly and pay attention to the domain logic. Same code lines don't always mean duplication
</b></details>

<details>
<summary>面向对象编程的四大支柱是什么？</summary><br><b>

* 抽象——你不需要知道这个类是如何实现的。你需要知道它提供什么功能（接口）以及如何使用它
* 封装 - 将用于类目的的字段保留为私有（或受保护），并在需要时提供公共方法。我们必须保证类本身中数据和代码的安全
* 继承 - 能够创建共享现有类的一些属性的类
* 多态性——相同的方法在不同的上下文中可以做不同的事情。方法重载和重写是多态性的某些形式
</b></details>

<details>
<summary>解释递归</summary><br><b>

递归 - 函数调用自身时的过程（或策略）。它有递归情况和退出情况。在递归情况下，我们再次调用函数，在退出情况下，我们完成函数而不再次调用它。如果我们没有退出情况 - 函数将无限工作，直到内存过载或调用堆栈限制
</b></details>

<details>
<summary>解释控制反转 (IoC)</summary><br><b>

Inversion of Control——设计原理，用于实现松耦合。您必须使用一些抽象层来访问某些功能（类似于 SOLID 依赖倒置）
</b></details>

<details>
<summary>解释依赖注入（DI)</summary><br><b>

依赖注入 - 设计模式，与 IoC 一起使用。我们的对象字段（依赖项）必须由外部对象配置
</b></details>

<details>
<summary>判断题：在动态类型语言中，变量类型在运行时而不是编译时确定</summary><br><b>

正确。
</b></details>

<details>
<summary>解释什么是设计模式</summary><br><b>

[重构大师](https://refactoring.guru/)：“设计模式是软件设计中常见问题的典型解决方案。它们就像预先制作的蓝图，您可以自定义它来解决代码中反复出现的设计问题。”
</b></details>

<details>
<summary>解释一下大O符号</summary><br><b>

[哈布尔网](https://habr.com/ru/post/559518/) “我们可以使用 Big O 表示法来比较和搜索不同的解决方案，以找到最好的解决方案。最好的解决方案是消耗更少时间和空间的解决方案。一般来说，时间和空间是决定算法效率的两个参数。

 大 O 表示法准确地告诉我们算法运行需要多长时间。它是算法效率的基本分析。它描述了所需的执行时间。它取决于本质上传入的输入数据的大小。大 O 表示法为我们提供了输入大小方面的算法复杂性。对于大尺寸的输入数据，与小尺寸的输入数据相比，执行时间会很慢。大O符号用于分析空间和时间。”
</b></details>

<details>
<summary>什么是“鸭子打字”？</summary><br><b>

“当我看到一只鸟像鸭子一样走路、像鸭子一样游泳、像鸭子一样嘎嘎叫时，我就称那只鸟为鸭子。”

这是编程的方向，我们检查对象的属性，但不检查它的类型
</b></details>

<details>
<summary>解释字符串插值</summary><br><b>

字符串插值 - 评估字符串文字的过程。例如（JS):</b>
```js
const messages = 5;
console.log(`You have ${messages} new messages`); // You have 5 new messages 
```
</details>

<a name="common-algorithms"></a>
##### 常用算法

<details>
<summary>二分查找：

  * 它是如何运作的？
  * 你能实施吗？ （以您喜欢的任何语言）
  * 您编写的算法的平均性能是多少？</summary><br><b>

它是一种与排序数组/列表一起使用的搜索算法，通过每次迭代划分数组并将中间值与目标值进行比较来查找目标值。如果中间值小于目标值，则在划分数组的右侧部分搜索目标值，否则在左侧搜索。这将持续下去，直到找到该值（或数组被划分最大次数）

[python实现](coding/python/binary_search.py)

上述算法的平均性能为O(log n)。最佳性能可能是 O(1)，最差性能可能是 O(log n)。
</b></details>

<a name="code-review"></a>
##### 代码审查

<details>
<summary>您的代码审查最佳实践是什么？</summary><br><b>
</b></details>

<details>
<summary>您是否同意/不同意以下各项陈述以及原因？：

  * 提交消息并不重要。在审查变更/补丁时，应重点关注实际变更
  * 在提交代码之前，您不应该测试您的代码。这就是 CI/CD 存在于.</summary><br><b>
</b></details>

<a name="strings"></a>
#### 弦乐

<details>
<summary>使用您想要的任何语言，编写一个函数来确定给定字符串是否是回文</summary><br><b>
</b></details>

<details>
<summary>使用任何您想要的语言，编写一个函数来确定两个字符串是否是 Anagrams </summary><br><b>
</b></details>

<a name="integers"></a>
#### 整数

<details>
<summary>使用您想要的任何语言，打印从 1 到给定整数的数字。例如输入：5，输出为：12345</summary><br><b>
</b></details>

<a name="time-complexity"></a>
#### 时间复杂度

<details>
<summary>描述操作的时间复杂度是多少 <code>访问</code>, <code>搜索</code> <code>插入</code> 和 <code>删除</code> 对于以下数据结构：</summary><br><b>

  * 堆栈
  * 队列
  * 链表
  * 二叉搜索树
</b></details>

<details>
<summary>以下每种算法的最佳、最差和平均情况的复杂度是多少？：

  * 快速排序
  * 归并排序
  * 桶排序
  * 基数排序</summary><br><b>
</b></details>

<a name="data-structures-types"></a>
#### 数据结构和类型

<details>
<summary>用您想要的任何语言实现 Stack</summary><br><b>
</b></details>

<details>
<summary>告诉我你所知道的关于链表的一切</summary><br><b>

  * 链表是一种数据结构
  * 它由节点的集合组成。这些节点一起代表一个序列
  * 对于需要从链表的任何位置插入或删除元素的用例很有用
  * 某些编程语言没有链表作为内置数据类型（例如 Python 例如）但它可以很容易地实现
</b></details>

<details>
<summary>描述（无需实现）如何检测链表中的循环</summary><br><b>

有多种方法可以检测链表中的循环。我在这里提三点：

最差的解决方案：<br>
两个指针，一个指向头，一个指向最后一个节点。每次将最后一个指针前进一位，并检查头指针到移动指针之间的距离是否大于上次测量的相同距离（如果不是，则有循环）。<br>
它可能是最糟糕的解决方案，因为这里的时间复杂度是 O(n^2)

体面的解决方案：<br>

创建一个哈希表并开始遍历链表。每次移动时，检查移动到的节点是否在哈希表中。如果不是，则将其插入到哈希表中。如果您确实在哈希表中的任何点找到了该节点，则意味着您有一个循环。当到达 None/Null 时，就结束了，您可以返回“无循环”值。
这个很容易实现（只需创建一个哈希表，更新它并在每次移动到下一个节点时检查该节点是否在哈希表中），但由于辅助空间是 O(n) 因为你创建了一个哈希表，所以这不是最好的解决方案

GoOD 解决方案：<br>
您可以修改链表（或者准确地说是节点）以具有“访问过”属性，而不是像前面的解决方案那样创建哈希表来记录您访问过链表中的哪些节点。每次访问节点时，都将“visited”设置为 True。<br>
时间复杂度是 O(n)，辅助空间是 O(1)，所以这是一个很好的解决方案，但唯一的问题是你必须修改链表。

最佳解决方案：<br>
您设置两个指针从头开始遍历链表。每次将一个指针移动 1 个，将另一个指针移动 2 个。如果他们在任何时候相遇，就会形成一个循环。该解决方案也称为“弗洛伊德循环寻找”<br>
时间复杂度为 O(n)，辅助空间为 O(1)。完美:)
</b></details>

<details>
<summary>用您想要的任何语言实现哈希表</summary><br><b>
</b></details>

<details>
<summary>什么是整数溢出？如何处理？</summary><br><b>
</b></details>

<details>
<summary>说出 3 种设计模式。您知道如何用您选择的任何语言实现（=提供示例）这些设计模式吗？</summary><br><b>
</b></details>

<details>
<summary>给定一个整数数组/列表，找到 3 个相加为 0 的整数（用您想要的任何语言）</summary><br><b>

```
def find_triplets_sum_to_zero(li):
    li = sorted(li)
    for i, val in enumerate(li):
        low, up = 0, len(li)-1
        while low < i < up:
            tmp = var + li[low] + li[up]
            if tmp > 0:
                up -= 1
            elif tmp < 0:
                low += 1
            else:
                yield li[low], val, li[up]
                low += 1
                up -= 1
```
</b></details>

