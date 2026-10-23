<a name="shell-scripting"></a>
## Shell 脚本编写

<a name="shell-scripting-exercises"></a>
### Shell 脚本练习

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
|你好世界|变量|[练习](hello_world.md)|[解决方案](solutions/hello_world.md) | 基础
|基本日期|变量|[练习](basic_date.md)|[解决方案](solutions/basic_date.md) | 基础
|美好的一天|变量|[练习](great_day.md)|[解决方案](solutions/great_day.md) | 基础
|因素|算术|[练习](factors.md)|[解决方案](solutions/factors.md) | 基础
|参数检查|条件句|[练习](argument_check.md)|[解决方案](solutions/argument_check.md) | 基础
|文件大小|For 循环|[练习](files_size.md)|[解决方案](solutions/files_size.md) | 基础
|计数字符|输入 + While 循环|[练习](count_chars.md)|[解决方案](solutions/count_chars.md) | 基础
|总和|功能|[练习](sum.md)|[解决方案](solutions/sum.md) | 基础
|参数数量|案例陈述|[练习](num_of_args.md)|[解决方案](solutions/num_of_args.md) | 基础
|空文件|杂项|[练习](empty_files.md)|[解决方案](solutions/empty_files.md) | 基础
|目录比较|杂项|[练习](directories_comparison.md)|[解决方案](solutions/directories_comparison.md) | 基础
|它还活着！|杂项|[练习](host_status.md)|[解决方案](solutions/host_status.md) | 中级

<a name="shell-scripting---self-assessment"></a>
## Shell 脚本编写 - 自我评估

<details>
<summary>shell脚本中的这一行是什么意思？： <code>#!/bin/bash</code></summary><br><b>


`#!/bin/bash` 是舍邦

/bin/bash 是最常用的 shell，用作 Linux 系统用户登录的默认 shell。该 shell 的名称是 Bourne-again shell 的缩写。 Bash 可以执行绝大多数脚本，因此被广泛使用，因为它具有更多功能、开发良好和更好的语法。

</b></details>

<details>
<summary>判断题：当shell脚本中某个命令/行失败时，shell脚本默认会退出并停止运行</summary><br><b>

取决于所使用的语言和设置。
如果脚本是 bash 脚本，则此语句为真。当脚本写成 Bash 无法运行某个命令，它将继续运行，并执行失败的命令之后提到的所有其他命令。

大多数时候，我们实际上可能希望发生相反的情况。为了使 Bash 当特定命令失败时存在，请在脚本中使用“set -e”。
</b></details>

<details>
<summary>您在编写的每个脚本中倾向于包含哪些内容？</summary><br><b>

几个例子：

  * 关于如何运行它和/或它做什么的评论
  * 如果是 shell 脚本，请添加“set -e”，因为我希望脚本在某个命令失败时退出

你可以得到完全不同的答案。它仅基于您的经验和偏好。
</b></details>

<details>
<summary>今天我们拥有像这样的工具和技术 Ansible、 Puppet、 Chef ……为什么有人仍然使用 shell 脚本？</summary><br><b>

  * 速度
  * 灵活性
  * 我们需要的模块不存在（可能是一个弱点，因为大多数 CM 技术允许使用所谓的“shell”模块）
  * 我们将脚本交付给无法访问公共网络且不一定拥有公共网络的客户 Ansible 安装在他们的系统上。
</b></details>

<a name="shell-scripting---variables"></a>
#### Shell 脚本 - 变量

<details>
<summary>如何定义一个值为“Hello World”的变量？</summary><br><b>

`HW="Hello World`
</b></details>

<details>
<summary>如何用当前日期的值定义变量？</summary><br><b>

`DATE=$(date)`
</b></details>

<details>
<summary>如何打印传递给脚本的第一个参数？</summary><br><b>

`echo $1`
</b></details>

<details>
<summary>编写一个脚本来打印“yay”，除非传递了参数，然后打印该参数</summary><br><b>

```
echo "${1:-yay}"
```
</b></details>

<details>
<summary>以下脚本的输出是什么？

```
#!/usr/bin/env bash
NINJA_TURTLE=Donatello
function the_best_ninja_turtle {
        local NINJA_TURTLE=Michelangelo
        echo $NINJA_TURTLE
}
NINJA_TURTLE=Raphael
the_best_ninja_turtle
```
</summary><br><b>
米开朗基罗
</b></details>

<details>
<summary>解释每个命令的结果是什么：

  * <code>回声 $0</code>
  * <code>回声$？</code>
  * <code>回声$$</code>
  * <code>回声$#</code></summary><br><b>
</b></details>

<details>
<summary>什么是 <code>$@</code>?</summary><br><b>
</b></details>

<details>
<summary>有什么区别 <code>$@</code> 和 <code>$*</code>?</summary><br><b>

`$@` 是传递给脚本的所有参数的数组
`$*` 是传递给脚本的所有参数的单个字符串
</b></details>

<details>
<summary>如何在 shell 脚本中获取用户的输入？</summary><br><b>

使用关键字 <code>读</code> 例如 <code>读x</code> 将等待用户输入并将其存储在变量 x 中。
</b></details>

<details>
<summary>如何比较变量长度？</summary><br><b>

```
if [ ${#1} -ne ${#2} ]; then
    ...
```
</b></details>

<a name="shell-scripting---conditionals"></a>
#### Shell 脚本编写 - 条件

<details>
<summary>解释条件并演示如何使用它们</summary><br><b>
</b></details>

<details>
<summary>在shell脚本中，如何否定条件？</summary><br><b>
</b></details>

<details>
<summary>在 shell 脚本中，如何检查给定参数是否为数字？</summary><br><b>

```
regex='^[0-9]+$'
if [[ ${var//*.} =~ $regex ]]; then
...
```
</b></details>

<a name="shell-scripting---arithmetic-operations"></a>
#### Shell 脚本编写 - 算术运算

<details>
<summary>如何对数字进行算术运算？</summary><br><b>

一种方式： `$(( 1 + 2 ))`
另一种方式： `expr 1 + 2`
</b></details>

<details>
<summary>如何对数字进行算术运算？</summary><br><b>
</b></details>

<details>
<summary>如何检查给定数字是否有 4 作为因数？</summary><br><b>

`if [ $(($1 % 4)) -eq 0 ]; then`
</b></details>

<a name="shell-scripting---loops"></a>
#### Shell 脚本 - 循环

<details>
<summary>什么是循环？您熟悉哪些类型的循环？</summary><br><b>
</b></details>

<details>
<summary>演示如何使用循环</summary><br><b>
</b></details>

<a name="shell-scripting---troubleshooting"></a>
#### Shell 脚本编写 - 故障排除

<details>
<summary>如何调试 shell 脚本？</summary><br><b>

答案取决于您用于编写脚本的语言。如果 Bash 例如使用：

  * 将 -x 添加到我正在运行的脚本中 Bash
  * 添加 echo 语句的老好方法

如果 Python，那么使用pdb就非常有用了。
</b></details>

<details>
<summary>运行以下 bash 脚本，我们没有得到 2 结果，为什么？

```
x = 2
echo $x
```
</summary><br><b>

应该是 `x=2`
</b></details>

<a name="shell-scripting---substring"></a>
#### Shell 脚本 - 子字符串

<details>
<summary>如何提取字符串中最后一个点之后的所有内容？</summary><br><b>

`${var//*.}`
</b></details>

<details>
<summary>如何提取字符串中最后一个点之前的所有内容？</summary><br><b>

${var%.*}
</b></details>

<a name="shell-scripting---misc"></a>
#### Shell 脚本编写 - 其他

<details>
<summary>生成8位随机数</summary><br><b>

shuf -i 9999999-99999999 -n 1
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

<details>
<summary>你用什么来测试 shell 脚本？</summary><br><b>

蝙蝠
</b></details>

