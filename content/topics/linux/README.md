<a name="linux"></a>
# Linux

<a name="linux-master-application"></a>
## Linux 硕士申请

一个完全免费的应用程序，用于测试您的知识 Linux.
免责声明：由存储库所有者开发

<a href="https://play.google.com/store/apps/details?id=com.codingshell.linuxmaster"><img src="../../images/linux_master.jpeg"/></a>

- [Linux](#linux)
  - [Linux 硕士申请](#linux-master-application)
  - [Linux 练习](#linux-exercises)
    - [基础知识](#basics)
    - [杂项](#misc)
  - [Linux 问题](#linux-questions)
    - [Linux 101](#linux-101)
    - [输入/输出重定向](#io-redirection)
    - [文件系统层次结构标准](#filesystem-hierarchy-standard)
    - [权限](#permissions)
    - [应用场景](#scenarios)
    - [系统](#systemd)
    - [故障排除和调试](#troubleshooting-and-debugging)
      - [应用场景](#scenarios-1)
    - [内核](#kernel)
    - [SSH](#ssh)
    - [通配符和通配符](#globbing--wildcards)
    - [启动过程](#boot-process)
    - [磁盘和文件系统](#disk-and-filesystem)
    - [绩效分析](#performance-analysis)
    - [流程](#processes)
    - [安全性](#security)
    - [网络](#networking)
    - [DNS](#dns)
    - [包装](#packaging)
    - [DNF](#dnf)
    - [应用程序和服务](#applications-and-services)
    - [用户和组](#users-and-groups)
    - [硬件](#hardware)
    - [Namespaces](#namespaces)
    - [虚拟化](#virtualization)
    - [AWK](#awk)
    - [系统调用](#system-calls)
    - [文件系统和文件](#filesystem--files)
    - [先进的网络](#advanced-networking)
    - [记忆](#memory)
    - [发行版](#distributions)
    - [塞德](#sed)
    - [杂项](#misc-1)

<a name="linux-exercises"></a>
## Linux 练习

<a name="basics"></a>
### 基础知识

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 导航 | 光盘、密码 | [练习](exercises/navigation/README.md) | [解决方案](exercises/navigation/solution.md)
| 创建和销毁 | 触摸、rm、mkdir | [练习](exercises/create_remove/README.md) | [解决方案](exercises/create_remove/solution.md)
| 复印时间 | 触摸、cp、ls | [练习](exercises/copy/README.md) | [解决方案](exercises/copy/solution.md)

<a name="misc"></a>
### 杂项

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 唯一计数 |  | [练习](exercises/uniqe_count/README.md) | [解决方案](exercises/uniqe_count/solution.md)

<a name="linux-questions"></a>
## Linux 问题

<a name="linux-101"></a>
### Linux 101

<details>
<summary>什么是 Linux?</summary><br><b>

[维基百科](https://en.wikipedia.org/wiki/Linux): "Linux 是一个开源家族 Unix类操作系统基于 Linux kernel，一个操作系统内核，由 Linus Torvalds 于 1991 年 9 月 17 日首次发布。 Linux 通常封装在 Linux 分布。”

[Red Hat](https://www.redhat.com/en/topics/linux/what-is-linux): “Linux® 是一个开源操作系统 (OS)。操作系统是直接管理系统硬件和资源的软件，例如 CPU、内存和存储。OS 位于应用程序和硬件之间，在所有软件与执行工作的物理资源之间建立连接。”

</b></details>

<details>
<summary>解释以下每个命令的作用并举例说明如何使用它：

  * 触摸
  * LS
  * rm
  * 猫
  * CP
  * 目录
  * 密码
  * 光盘
</summary><br><b>

  * touch - 更新文件的时间戳。更常用于创建文件
  * ls - 列出文件和目录
  * rm - 删除文件和目录
  * cat - 创建、查看和连接文件
  * cp - 复制文件和目录
  * mkdir - 创建目录
  * pwd - 打印当前工作目录（=用户当前所在的路径）
  * cd - 更改目录
</b></details>

<details>
<summary>以下每个命令的作用是什么？

  * 光盘 /
  * 光盘~
  * 光盘
  * 光盘..
  * 光盘。
  * 光盘-
</summary><br><b>

  * cd / -> 切换到根目录
  * cd ~ -> 切换到你的主目录
  * cd -> 切换到你的主目录
  * cd .. -> 切换到当前目录（即父目录）之上的目录
  * 光盘。 -> 切换到您当前所在的目录
  * cd - -> 更改为上次访问的路径
</b></details>

<details>
<summary>上一个问题中的一些命令可以使用 -r/-R 标志运行。它有什么作用？举个例子说明你什么时候会使用它</summary><br><b>

-r（或某些命令中的 -R）标志允许用户递归地运行某个命令。例如，递归完成时可以列出以下树下的所有文件（`ls -R`):

/dir1/
  dir2/
    file1
    file2
  dir3/
    file3

要列出所有文件，可以运行 `ls -R /dir1`
</b></details>

<details>
<summary>解释输出中的每个字段 `ls -l` 命令</summary><br><b>
它以长格式显示文件的详细列表。从左起：

* 文件权限、链接数、所有者名称、所有者组、文件大小、上次修改时间戳和目录/文件名
</b></details>

<details>
<summary>什么是隐藏文件/目录？如何列出它们？</summary><br><b>

这些是执行标准 ls 直接列表后不直接显示的文件。这些文件的一个示例是 .bashrc，它用于执行一些脚本。有些还存储有关主机上服务的配置，例如 .KUBECONFIG。用于列出它们的命令是， `ls -a`
</b></details>

<details>
<summary>做什么 > 和 < do in terms of input and output for programs?</summary><br><b>
他们接受输入（<) and output for a given file (>）使用标准输入和标准输出。

`myProgram < input.txt > executionOutput.txt`
</b></details>

<details>
<summary>解释以下每个命令的作用并举例说明如何使用它：

  * sed
  * grep
  * 切
  * awk
</summary><br><b>

  - sed：流编辑器。可用于多种目的，例如替换文件中的单词： `sed -i s/salad/burger/g`
  - grep：一个搜索工具。用于搜索、计数或匹配文件中的文本：
    - 搜索文件中包含单词的任何行： `grep 'word' file.md`
    - 或显示字符串在文件中出现的总次数： `grep -c 'This is a string' file.md`
  - cut：用于剪切文件每行选定部分的工具：
    - 语法： `cut OPTION [FILE]`
      - 从文件中的单词中删除前两个字节： `cut -b 1-2 file.md`，输出： `wo`
  - awk：一种编程语言，主要用于文本处理和数据提取。它可用于操作和修改文件中的文本：
    - 语法：awk [OPTIONS] [FILTER] [FILE]
从a中提取特定字段 CSV 文件：awk -F ',' '{print $1}' file.csv，输出：文件中每行的第一个字段
</b></details>

<details>
<summary>如何重命名文件或目录的名称？</summary><br><b>

使用 `mv` 命令。
</b></details>

<details>
<summary>指定您将在以下每种情况下使用哪个命令（以及如何使用） 

  * 删除包含文件的目录
  * 显示文件的内容
  * 为每个人提供对文件 /tmp/x 的访问
  * 将工作目录更改为用户主目录
  * 将文件 /tmp/y 中出现的所有单词“good”替换为“great”</summary><br><b>

  - `rm -rf dir`
  - `cat or less`
  - `chmod 777 /tmp/x`
  - `cd ~`
  - `sed -i s/good/great/g /tmp/y`
</b></details>

<details>
<summary>如何检查某个命令的路径是什么？</summary><br><b>

  * 哪里
  * 其中
</b></details>

<details>
<summary>这两个命令有什么区别？会产生相同的输出吗？

```
echo hello world
echo "hello world"
```
</summary><br><b>

echo 命令在第一次执行中接收两个单独的参数，在第二次执行中它收到一个参数，即字符串“hello world”。输出将是相同的。
</b></details>

<details>
<summary>解释一下管道。如何进行管道施工？</summary><br><b>

使用管道 Linux，允许您将一个命令的输出发送到另一命令的输入。例如：`cat /etc/services | 厕所-l`
</b></details>

<details>
<summary>修复以下命令：

  * sed "s/1/2/g' /tmp/myFile
  * 寻找 。 -iname \*.yaml -exec sed -i "s/1/2/g" {} ;
</summary><br><b>

```
sed 's/1/2/g' /tmp/myFile  # sed "s/1/2/g" is also fine
find . -iname "*.yaml" -exec sed -i "s/1/2/g" {} \;
```
</b></details>

<details>
<summary>如何查看您过去执行过哪些命令？</summary><br><b>

历史命令或 .bash_history 文件 
  * 也可以使用向上箭头键来访问或显示您最近键入的命令
</b></details>

<details>
<summary>运行命令 <code>df</code> 你会得到“命令未找到”。可能出了什么问题以及如何解决？</summary><br><b>
</b>
<p><b>
最有可能的是默认/生成的 $PATH 以某种方式修改或覆盖，因此不包含 <code>/bin/</code> df 通常会去哪里。
如果 bash_profile 或解释器的任何配置文件被错误修改，导致不稳定的行为，也可能会发生此问题。
你可以通过修复你的 $ 来解决这个问题PATH 变量：

要修复它，有几种选择：

1. 手动将您需要的内容添加到 $PATH <code>PATH="$PATH“：/用户/bin：/..等</code>
2. 你已经备份了奇怪的环境变量。
3. 你会寻找你的发行版默认值 $PATH 变量，使用方法 #1 复制粘贴

注意：有很多方法会导致这样的错误：如果 bash_profile 或解释器的任何配置文件被错误修改；造成不稳定的行为，
权限问题、编译错误的软件（如果您自己编译的）...没有 100% 正确的答案。
</b>
</p>
</details>

<details>
<summary>如何定期安排任务？</summary><br><b>

您可以使用命令 <code>计划任务</code> 和 <code>在</code>.
使用 cron，可以使用以下格式安排任务：

<code>*/30 * * * * bash myscript.sh</code> 每 30 分钟执行一次脚本。

<minute> <hour> <day of month> <month> <day of week> <command to execute>

任务存储在 cron 文件中，您可以使用以下命令写入其中 <code>crontab -e</code>

或者，如果您使用带有 systemd 的发行版，建议使用 systemd 计时器。
</b></details>

<a name="questions-linux-redirection"></a>
<a name="io-redirection"></a>
### 输入/输出重定向

<details>
<summary>解释一下 Linux I/O 重定向</summary><br><b>
  在 Linux, IO 重定向是更改命令或程序的默认输入/输出行为的一种方法。它允许您将输入和输出重定向到不同的源/目的地，例如文件、设备和其他命令。

以下是一些常见的示例 IO 重定向：
 * 重定向标准输出（stdout）：
  <code>ls > 文件列表.txt</code>
* 重定向标准错误 (stderr)：
  <code>ls /some/nonexistent/directory 2> error.txt</code>
* 附加到文件：
  <code>回声“你好”>> myfile.txt</code>
* 重定向输入（标准输入）：
  <code>排序 < unsorted.txt</code>
* 使用管道：管道 ("|"):
  <code>LS | grep "\.txt$"</code>         
</b></details>

<details>
<summary>示范 Linux 输出重定向</summary><br><b>

<code>ls > ls_output.txt</code>
</b></details>

<details>
<summary>示范 Linux stderr 输出重定向</summary><br><b>

<code>yippiekaiyay 2> ls_output.txt</code>
</b></details>

<details>
<summary>示范 Linux stderr 到 stdout 重定向</summary><br><b>

<code>yippiekaiyay &> 文件</code>
</b></details>

<details>
<summary>运行以下命令的结果是什么？ <code>yippiekaiyay 1>&2 顽固分子</code></code></summary><br><b>

输出类似于： `yippikaiyay: command not found...`<br>
该文件 `die_hard` 不会被创建
</b></details>

<a name="questions-linux-fhs"></a>
<a name="filesystem-hierarchy-standard"></a>
### 文件系统层次结构标准

<details>
<summary>在 Linux FHS （文件系统层次结构标准）什么是 <code>/</code>?</summary><br><b>

文件系统的根。树的开始。
</b></details>

<details>
<summary>以下每个路径中存储了什么？

  - /bin、/sbin、/usr/bin 和 /usr/sbin
  - /etc
  - /home
  - /var
  - /tmp</summary><br><b>

  * 二进制文件
  * 配置文件
  * 不同用户的主目录
  * 像日志一样容易更改和修改的文件
  * 临时文件
</b></details>

<details>
<summary>与其他目录相比，/tmp 目录有什么特别之处？</summary><br><b>

`/tmp` 文件夹会自动清理，通常是在重新启动时。
</b></details>

<details>
<summary>在/proc 中可以找到什么样的信息？</summary><br><b>
 
它包含有关当前正在运行的进程的有用信息，它被视为内核的控制和信息中心。
</b></details>

<details>
<summary>/proc 与其他文件系统有何不同？</summary><br><b>
/proc 是一个特殊的虚拟文件系统 Unix类似操作系统，包括 Linux，提供有关进程和系统资源的信息。
</b></details>

<details>
<summary>判断题：只有 root 可以在 /proc 中创建文件</summary><br><b>

错误。没有人可以直接在 /proc 中创建文件（某些操作可能导致内核在 /proc 中创建文件）。
</b></details>

<details>
<summary>/proc/cmdline 中可以找到什么？</summary><br><b>

传递给引导加载程序以运行内核的命令
</b></details>

<details>
<summary>在哪个路径中可以找到系统设备（例如块存储）？</summary><br><b>
  /dev
</b></details>

<a name="questions-linux-permissions"></a>
<a name="permissions"></a>
### 权限

<details>
<summary>如何更改文件的权限？</summary><br><b>

使用 `chmod` 命令。
</b></details>

<details>
<summary>以下权限是什么意思？：

  * 777
  * 644
  * 750</summary><br><b>

<pre>
777 - 你给所有者、组和其他：执行（1）、写入（2）和读取（4）； 4+2+1 = 7。
644 - 所有者有读（4），写（2），4+2 = 6；小组和其他人已阅读 (4)。
750 - 所有者有 x+r+w，组有读取 (4) 和执行 (1)； 4+1=5。其他没有权限。
</pre>
</b></details>

<details>
<summary>这个命令的作用是什么？ <code>chmod +x 一些_文件</code></summary><br><b>
它将执行权限添加到所有集，即用户、组和其他
</b></details>

<details>
<summary>解释一下什么是setgid和setuid</summary><br><b>

* setuid 是一种 Linux 文件权限，允许用户以该文件所有者的权限运行文件或程序。这可以通过提升当前用户权限来实现。
* setgid 是一个进程，执行时将作为拥有该文件的组运行。
</b></details>

<details>
<summary>粘性位的目的是什么？</summary><br><b>
它有点只允许所有者或root用户删除或修改文件。
</b></details>

<details>
<summary>以下命令的作用是什么？

  - chmod
  - 乔恩
  - chgrp</summary><br><b>

  * chmod - 更改文件系统对象的访问权限
  * chown - 更改文件系统文件和目录的所有者
  * chgrp - 更改与文件系统对象关联的组
</b></details>

<details>
<summary>什么是须藤？你如何设置它？</summary><br><b>
sudo 是一个命令行实用程序 Unix类似操作系统，允许用户以另一个用户（通常是超级用户（root））的权限运行程序。它代表“超级用户做的事”。

几乎所有的系统都默认安装了 sudo 程序 Linux 分布。如果需要在 Debian/Ubuntu 中安装 sudo，请使用命令 apt-get install sudo

</b></details>

<details>
<summary>判断题：为了在系统上安装软件包，必须是 root 用户或使用 sudo 命令</summary><br><b>

正确。
</b></details>

<details>
<summary>解释什么是 ACL。您建议在哪些用例中使用它们？</summary><br><b>
ACL 代表访问控制列表。我们可以使用 ACL 更精细地控制特定用户对某些文件的访问。例如，我们可以返回 ACL 使用命令的特定文件 <code>getfacl /绝对/文件/路径</code> 并修改特定文件的 ACL <code>setfacl-m</code>.
  
</b></details>

<details>
<summary>您尝试创建文件但失败。至少说出三个不同的原因来说明为什么会发生这种情况</summary><br><b>

* 没有更多磁盘空间
* 没有更多的索引节点
* 无权限
</b></details>

<details>
<summary>用户意外执行了以下操作 <code>chmod -x $（哪个 chmod）</code>。如何修复它？</summary><br><b>

使用 `sudo setfacl -m u::rx /usr/bin/chmod` 将设置执行权限 `chmod` 对于所有用户。发布此内容， `chmod` 二进制可以照常使用。
</b></details>

<a name="questions-linux-scenarios"></a>
<a name="scenarios"></a>
### 应用场景

<details>
<summary>您想将文件复制到远程 Linux 主机。你会怎么做？</summary><br><b>

有多种方法可以在主机之间传输文件。个人意见：使用 `rsync`
</b></details>

<details>
<summary>如何生成随机字符串？</summary><br><b>

一种方法是运行以下命令： `cat /proc/sys/kernel/random/uuid`
</b></details>

<details>
<summary>如何生成7个字符的随机字符串？</summary><br><b>

`mkpasswd -l 7`
</b></details>

<a name="questions-linux-systemd"></a>
<a name="systemd"></a>
### 系统

<details>
<summary>什么是systemd？</summary><br>
<b>
Systemd 是一个守护进程（System 'd'，d 代表守护进程）。

守护进程是在后台运行而不受用户直接控制的程序，尽管用户可以随时
与守护进程交谈。

systemd 具有许多功能，例如用户进程控制/跟踪、快照支持、抑制剂锁等。

如果我们将 UNIX/Linux 系统分层可视化，那么 systemd 将直接落在 Linux 内核之后。<br>
硬件 -> 内核 -> <u>守护进程</u>、系统库、服务器显示。
</b>
</details>

<details>
<summary>如何启动或停止服务？</summary><br><b>

启动服务： `systemctl start <service name>`
停止服务： `systemctl stop <service name>`
</b></details>

<details>
<summary>如何检查服务的状态？</summary><br><b>

`systemctl status <service name>`
</b></details>

<details>
<summary>在使用 systemd 的系统上，如何显示日志？</summary><br><b>

<code>日志控制</code>
</b></details>

<details>
<summary>描述如何将某个进程/应用程序变成服务</summary><br><b>
  该过程将需要一个 <code>.service</code> 要在该位置创建的文件 <code>/etc/systemd/system/service-name.service</code> 使其成为一种服务。该文件具有某些特征，需要某些输入才能工作。更多详情 <a href="https://medium.com/@benmorel/creating-a-linux-service-with-systemd-611b5c8b91d6">这里</a>.
</b></details>

<a name="troubleshooting-and-debugging"></a>
### 故障排除和调试

<details>
<summary>系统日志位于哪里？</summary><br><b>

/var/log
</b></details>

<details>
<summary>如何在附加文件内容时跟踪文件内容，而无需每次都打开文件？</summary><br><b>

尾部-f <file_name>
</b></details>

<details>
<summary>您使用什么来进行故障排除和调试 <b>网络</b> 问题？</summary><br><b>

<code>dstat-t</code> 非常适合识别网络和磁盘问题。
<code>netstat-tnlaup</code> 可用于查看哪些进程正在哪些端口上运行。
<code>lsof-i-P</code> 可以用于与 netstat 相同的目的。
<code>ngrep -d 任何元过滤器</code> 用于将正则表达式与数据包的有效负载进行匹配。
<code>tcp转储</code> 用于捕获数据包
<code>线鲨</code> 与 tcpdump 的概念相同，但具有 GUI （可选）。
</b></details>

<details>
<summary>您使用什么来进行故障排除和调试 <b>磁盘和文件系统</b> 问题？</summary><br><b>

<code>dstat-t</code> 非常适合识别网络和磁盘问题。
<code>打开监听</code> 可用于查看系统上正在打开哪些文件（实时）。
</b></details>

<details>
<summary>您使用什么来进行故障排除和调试 <b>过程</b> 问题？</summary><br><b>

<code>strace</code> 对理解程序正在做什么很有帮助。它会打印程序执行的每个系统调用。
</b></details>

<details>
<summary>你用什么来调试 CPU 相关问题？</summary><br><b>

<code>顶部</code> 会告诉你多少钱 CPU 每个进程消耗的百分比
<code>性能</code> 是采样分析器的绝佳选择，一般来说，可以了解您的 CPU 周期被“浪费”在
<code>火焰图</code> 非常适合 CPU 消费可视化（http://www.brendangregg.com/flamegraphs.html)
</b></details>

<details>
<summary>您接到某人的电话，声称“我的系统是 SLOW”。你做什么工作？</summary><br><b>

* 检查与 `top` 对于任何不寻常的事情
* 运行 `dstat -t` 检查是否与磁盘或网络有关。
* 检查是否与网络有关 `sar`
* 检查 I/O 统计信息 `iostat`
</b></details>

<details>
<summary>解释 iostat 输出</summary><br><b>
</b></details>

<details>
<summary>如何调试二进制文件？</summary><br><b>
</b></details>

<details>
<summary>有什么区别 CPU 负载和利用率？</summary><br><b>
</b></details>

<details>
<summary>如何衡量程序的执行时间？</summary><br><b>
</b></details>

<a name="scenarios-1"></a>
#### 应用场景

<details>
<summary>您有一个写入文件的进程。您不知道具体是哪个进程，您只知道文件的路径。您想终止该进程，因为不再需要它。你会如何实现它？</summary><br><b>

1. 运行 `lsof <FILE_PATH>`
2. 使用pid（进程 ID) 从 lsof 命令并运行 `kill <PID>`

</b></details>

<a name="kernel"></a>
### 内核

<details>
<summary>什么是内核，它有什么作用？</summary><br><b>

内核是操作系统的一部分，负责执行以下任务：

  * 分配内存
  * 安排流程
  * 控制 CPU
</b></details>

<details>
<summary>如何查明您的系统正在使用哪个内核版本？</summary><br><b>

`uname -a` 命令
</b></details>

<details>
<summary>什么是 Linux 内核模块以及如何加载新模块？</summary><br><b>

一个 Linux 内核模块是一段可以动态加载到内核中以扩展其功能的代码。这些模块通常用于添加对硬件设备、文件系统或系统调用的支持。内核本身是整体的，但通过模块，可以扩展其功能，而无需重新启动系统或重新编译整个内核。
</b></details>

<details>
<summary>解释用户空间与内核空间</summary><br><b>

操作系统在受保护的内存中执行内核，以防止任何人进行更改（并冒着崩溃的风险）。这就是所谓的“内核空间”。
“用户空间”是用户执行命令或应用程序的地方。创建这种分离很重要，因为我们不能依赖用户应用程序不篡改内核，导致其崩溃。

应用程序可以通过进行所谓的“系统调用”来访问系统资源并间接访问内核空间。
</b></details>

<details>
<summary>在内核生命周期的哪些阶段，您可以更改其配置？</summary><br><b>

  * 构建时间（编译时）
  * 启动时间（启动时）
  * 运行时（一旦它已经运行）
</b></details>

<details>
<summary>在哪里可以找到内核的配置？</summary><br><b>

通常它会驻留在 `/boot/config-<kernel version>.<os release>.<arch>`
</b></details>

<details>
<summary>在哪里可以找到包含传递给引导加载程序以运行内核的命令的文件？</summary><br><b>

`/proc/cmdline`
</b></details>

<details>
<summary>如何列出内核的运行时参数？</summary><br><b>

`sysctl -a`
</b></details>

<details>
<summary>会跑步 <code>系统控制-a</code> 作为普通用户与 root 用户，会产生不同的结果吗？</summary><br><b>

是的，您可能会注意到，在大多数系统中，运行时 `systctl -a` 与使用普通用户执行相同的命令相比，使用 root 用户将获得更多的运行时参数。
</b></details>

<details>
<summary>您想在内核中启用 IPv4 转发，您会怎么做？</summary><br><b>

`sudo sysctl net.ipv4.ip_forward=1`

要使其持久（例如在重新启动后应用）：插入 `net.ipv4.ip_forward = 1` 进入 `/etc/sysctl.conf`

另一种方法是运行 `echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward`
</b></details>

<details>
<summary>如何 <code>系统控制</code> 运行 sysctl 命令时是否将更改应用于内核的运行时参数？</summary><br><b>

如果你 `strace` 您可以看到 sysctl 命令是通过更改 /proc/sys/... 下的文件来实现的

过去它是通过 sysctl 系统调用完成的，但它在某些时候已被弃用。
</b></details>

<details>
<summary>内核运行时参数的更改如何持续存在？ （例如，即使重新启动系统后也适用）</summary><br><b>

有一个服务叫做 `systemd-sysctl` 它获取 /etc/sysctl.conf 的内容并应用它。这就是当更改被写入 /etc/sysctl.conf 时，即使在重新启动后仍然存在的方式
</b></details>

<details>
<summary>您对容器中的内核参数所做的更改是否也会影响容器运行所在的主机的内核参数？</summary><br><b>

不会。容器有自己的 /proc 文件系统，因此对容器内内核参数的任何更改都不会影响主机或该主机上运行的其他容器。
</b></details>

<a name="questions-linux-ssh"></a>
<a name="ssh"></a>
### SSH

<details>
<summary>什么是 SSH？如何检查是否 Linux 服务器正在运行 SSH?</summary><br><b>

[维基百科定义](https://en.wikipedia.org/wiki/SSH_(Secure_Shell)): "SSH 或安全 Shell 是一种加密网络协议，用于在不安全的网络上安全地运行网络服务。”

[Hostinger.com 定义](https://www.hostinger.com/tutorials/ssh-tutorial-how-does-ssh-work): "SSH，或安全 Shell，是一种远程管理协议，允许用户通过 Internet 控制和修改其远程服务器。”

SSH 服务器会运行 SSH daemon。根据发行版不同，你可以用类似 `systemctl status sshd` 的命令检查服务是否正在运行。
</b></details>

<details>
<summary>为什么 SSH 被认为比telnet更好吗？</summary><br><b>

Telnet 还允许您连接到远程主机，但与 SSH 在通信加密的情况下，在 telnet 中，数据以明文形式发送，因此不被认为是安全的，因为网络上的任何人都可以看到到底发送的内容，包括密码。
</b></details>

<details>
<summary>存储什么内容 <code>〜/.ssh/known_hosts</code>?</summary><br><b>

该文件存储连接到客户端的密钥指纹 SSH 服务器。此指纹在客户端和服务器之间创建信任以供将来使用 SSH 连接。
</b></details>

<details>
<summary>您尝试 ssh 到服务器，但收到“主机密钥验证失败”。这意味着什么？</summary><br><b>

这意味着远程主机的密钥已更改并且与存储在计算机上的密钥（在 ~/.ssh/known_hosts 中）不匹配。
</b></details>

<details>
<summary>有什么区别 SSH 和 SSL?</summary><br><b>
</b></details>

<details>
<summary>什么 <code>ssh 密钥生成器</code> 是用来做什么的？</summary><br><b>

<code>ssh 密钥生成器</code> 是一个生成身份验证密钥对的工具 SSH，由私钥和公钥组成。它支持多种算法来生成身份验证密钥： 
- DSA
- ECDSA
- ECDSA-SK
- ed25519
- ed25519-sk
- RSA（默认）

还可以指定密钥中的位数。下面的命令生成一个 SSH 密钥对与 RSA 4096 位：
```
$ ssh-keygen -t rsa -b 4096
```

输出如下所示：
```
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/user/.ssh/id_rsa
Your public key has been saved in /home/user/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:f5MOGnhzYfC0ZCHvbSXXiRiNVYETjxpHcXD5xSojx+M user@mac-book-pro
The key's randomart image is:
+---[RSA 4096]----+
|        . ..+***o|
|         o o++*o+|
|        . =+.++++|
|         B.oX+. .|
|        S *=o+   |
|       . o oE.   |
|      . + + +    |
|       . = + .   |
|        .   .    |
+----[SHA256]-----+
```

可以检查有多少位 SSH 关键有：
```
$ ssh-keygen -l -f /home/user/.ssh/id_rsa
```

输出应如下所示：
```
4096 SHA256:f5MOGnhzYfC0ZCHvbSXXiRiNVYETjxpHcXD5xSojx+M user@mac-book-pro (RSA)
```
它表明关键是 RSA 4096 位。

`-l` 和 `-f` 参数使用说明：
```
-l          Show the fingerprint of the key file.
-f filename Filename of the key file.
```

了解更多： [我如何知道我的 ssh 密钥有多少位？ - 超级用户](https://superuser.com/a/139311)
</b></details>

<details>
<summary>什么是 SSH 端口转发？</summary><br><b>
</b></details>

<a name="questions-linux-wildcards"></a>
<a name="globbing-wildcards"></a>
### 通配符和通配符

<details>
<summary>什么是通配符？</summary><br><b>
</b></details>

<details>
<summary>什么是通配符？您能举例说明如何使用它们吗？</summary><br><b>
</b></details>

<details>
<summary>解释一下会发生什么 <code>ls [XYZ]</code> 比赛</summary><br><b>
</b></details>

<details>
<summary>解释一下会发生什么 <code>是[^XYZ]</code> 比赛</summary><br><b>
</b></details>

<details>
<summary>解释一下会发生什么 <code>ls [0-5]</code> 比赛</summary><br><b>
</b></details>

<details>
<summary>以下各项匹配什么

  - ?
  - *</summary><br><b>

  * 的？匹配任何单个字符
  * * 匹配零个或多个字符
</b></details>

<details>
<summary>我们在以下每个命令中 grep 的目的是什么？：

  * <code>grep '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}' some_file</code>
  * <code>grep -E "错误|失败”some_file</code>
  * <code>grep '[0-9]$' some_file</code>
</summary><br><b>

1. 一个 IP 地址
2. “错误”或“失败”一词
3. 以数字结尾的行
</b></details>

<details>
<summary>运行时会打印哪些行号 `grep '\baaa\b'` 关于以下内容：

啊啊
bbb
ccc.aaa
啊啊啊</summary><br><b>

第 1 行和第 3 行。
</b></details>

<details>
<summary>单引号和双引号有什么区别？</summary><br><b>
</b></details>

<details>
<summary>什么是逃避？使用什么转义字符进行转义？</summary><br><b>
</b></details>

<details>
<summary>什么是退出代码？您熟悉哪些退出代码？</summary><br><b>

退出代码（或返回代码）表示子进程返回给其的代码
父进程。

0 是退出代码，表示成功，而大于 1 的值表示错误。
根据应用程序的开发方式，每个数字都有不同的含义。

我认为这是一篇很好的博客文章，可以阅读更多相关内容： https://shapeshed.com/unix-exit-codes
</b></details>

<a name="questions-linux-boot"></a>
<a name="boot-process"></a>
### 启动过程

<details>
<summary>告诉我你所知道的关于 Linux 启动过程</summary><br><b>

另一种提问方式是：从打开服务器到收到提示为止会发生什么
</b></details>

<details>
<summary>什么是 GRUB2?</summary><br><b>
</b></details>

<details>
<summary>什么是安全启动？</summary><br><b>
</b></details>

<details>
<summary>你可以在/boot 中找到什么？</summary><br><b>
</b></details>

<a name="questions-linux-disk-fs"></a>
<a name="disk-and-filesystem"></a>
### 磁盘和文件系统

<details>
<summary>什么是索引节点？</summary><br><b>

对于每个文件（和目录） Linux 有一个索引节点，一种存储元数据的数据结构
与文件相关，如大小、所有者、权限等。
</b></details>

<details>
<summary>inode 中不包含以下各项：

  * 链接数
  * 文件大小
  * 文件名
  * 文件时间戳</summary><br><b>

文件名（它是目录文件的一部分）
</b></details>

<details>
<summary>如何查看当前挂载了哪些磁盘？</summary><br><b>

运行 `mount`
</b></details>

<details>
<summary>你运行 <code>安装</code> 命令但你没有得到任何输出。您将如何检查系统上有哪些安装？</summary><br><b>

`cat /proc/mounts`
</b></details>

<details>
<summary>软链接和硬链接有什么区别？</summary><br><b>

硬链接是同一个文件，使用相同的索引节点。
软链接是另一个文件的快捷方式，使用不同的索引节点。
</b></details>

<details>
<summary>判断题：您可以为目录创建硬链接</summary><br><b>

错误
</b></details>

<details>
<summary>判断题：您可以在不同文件系统之间创建软链接</summary><br><b>

正确。
</b></details>

<details>
<summary>判断题：目录始终至少有 2 个链接</summary><br><b>

正确。
</b></details>

<details>
<summary>如果有软链接和硬链接，删除原文件会发生什么？</summary><br><b>
</b></details>

<details>
<summary>你能检查一下 /home 使用什么类型的文件系统吗？</summary><br><b>

这个问题有很多答案。一种方法是跑步 `df -T`
</b></details>

<details>
<summary>什么是交换分区？它有什么用？</summary><br><b>
</b></details>

<details>
<summary>如何创建一个

  - 新的空文件
  - 包含文本的文件（不使用文本编辑器）
  - 给定大小的文件</summary><br><b>
  
  * 触摸new_file.txt
  * cat > new_file [输入] 提交文本； ctrl + d 退出插入模式
  * 截断-s <size> new_file.txt
</b></details>

<details>
<summary>您正在尝试创建新文件，但收到“文件系统已满”。您使用 df 检查可用空间，发现仅使用了 20% 的空间。可能是什么问题？</summary><br><b>
</b></details>

<details>
<summary>如何检查某个目录的大小？</summary><br><b>

`du -sh`
</b></details>

<details>
<summary>什么是 LVM?</summary><br><b>
</b></details>

<details>
<summary>解释以下关于 LVM:

  * PV
  * VG
  * LV</summary><br><b>


</b></details>

<details>
<summary>什么是 NFS？它有什么用？</summary><br><b>
</b></details>

<details>
<summary>什么 RAID 是用来做什么的？你能解释一下之间的区别吗 RAID 0、1、5 和 10？</summary><br><b>
</b></details>

<details>
<summary>描述扩展文件系统磁盘空间的过程</summary><br><b>
</b></details>

<details>
<summary>什么是惰性卸载？</summary><br><b>
</b></details>

<details>
<summary>什么是 tmpfs？</summary><br><b>
</b></details>

<details>
<summary>以下每个日志中存储了什么？

  * /var/log/messages
  * /var/log/boot.log</summary><br><b>
</b></details>

<details>
<summary>判断题： /tmp 和 /var/tmp 在系统启动时被清除</summary><br><b>

错误。 /tmp 在系统启动时被清除，而 /var/tmp 每隔几天清除一次或根本不清除（取决于发行版）。
</b></details>

<a name="questions-linux-performance-analysis"></a>
<a name="performance-analysis"></a>
### 绩效分析

<details>
<summary>如何查看当前的平均负载是多少？</summary><br><b>

一个可以用 `uptime` 或 `top`
</b></details>

<details>
<summary>您知道如何查看平均负载，太棒了。但它的每一部分意味着什么？例如1.43、2.34、2.78</summary><br><b>

[这篇文章](http://www.brendangregg.com/blog/2017-08-08/linux-load-averages.html) 很好地总结了负载平均主题
</b></details>

<details>
<summary>如何查看进程使用情况？</summary><br><b>

PID统计
</b></details>

<details>
<summary>如何检查磁盘I/O？</summary><br><b>

`iostat -xz 1`
</b></details>

<details>
<summary>如何查看系统有多少可用内存？如何查看每个进程的内存消耗情况？</summary><br><b>

您可以使用命令 <code>顶部</code> 和 <code>免费</code>
</b></details>

<details>
<summary>如何检查 TCP 统计数据？</summary><br><b>

萨恩 TCP,ETCP 1
</b></details>

<a name="questions-linux-processes"></a>
<a name="processes"></a>
### 流程

<details>
<summary>如何列出系统中运行的所有进程？</summary><br><b>

“ps”命令可用于列出系统中运行的所有进程。 “ps aux”命令提供所有进程的详细列表，包括在后台运行的进程。
</b></details>

<details>
<summary>如何在后台运行进程以及为什么要这样做？</summary><br><b>

您可以通过在命令末尾指定 & 来实现这一点。
至于为什么，因为某些命令/进程可能需要很长时间才能完成
执行或永远运行，您可能希望在后台运行它们，而不是等待它们完成后再在当前会话中再次获得控制权。
</b></details>

<details>
<summary>如何找到特定进程消耗了多少内存？</summary><br><b>
<code>
内存（）
{                                                                                                      
    ps -eo rss,pid,euser,args:100 --sort %mem | grep -v grep | grep -i $@ | awk '{printf $1/1024"MB”; $1="";打印 }'
}
</code>
[来源](https://stackoverflow.com/questions/3853655/in-linux-how-to-tell-how-much-memory-processes-are-using)
</b></details>

<details>
<summary>当您运行“kill *process id*”时，默认使用什么信号？</summary><br><b>
<pre>
默认信号是 SIGTERM （15）。这个信号杀了
优雅地处理这意味着它允许它保存当前
状态配置。
</pre>
</b></details>

<details>
<summary>您熟悉哪些信号？</summary><br><b>

SIGTERM - default signal for terminating a process
SIGHUP - common usage is for reloading configuration
SIGKILL - a signal which cannot caught or ignored

查看所有可用信号运行 `kill -l`
</b></details>

<details>
<summary><code>kill 0</code> 是什么？</summary><br><b>
“kill 0”向当前进程组中的所有进程发送信号。用于检查进程是否存在
</b></details>

<details>
<summary><code>kill -0 <PID></code> 是什么？</summary><br><b>
“kill -0”用于检查给定 PID 的进程是否存在。它实际上不会向进程发送任何信号。
</b></details>

<details>
<summary>什么是陷阱？</summary><br><b>
陷阱是一种机制，允许 shell 拦截发送到进程的信号并执行特定操作，例如在终止进程之前处理错误或清理资源。

</b></details>

<details>
<summary>每隔几天，某个进程就会停止运行。您如何调查为什么会发生这种情况？</summary><br><b>
调查进程停止运行原因的一种方法是检查系统日志，例如 /var/log/messages 或journalctl 中的消息。此外，检查进程的资源使用情况和系统负载可能会提供有关导致进程停止的原因的线索
</b></details>

<details>
<summary>当你按 ctrl + c 时会发生什么？</summary><br><b>
当您按“Ctrl+C”时，它会发送 SIGINT 向前台进程发出信号，要求其正常终止。
</b></details>

<details>
<summary>什么是守护进程 Linux?</summary><br><b>

一个后台进程。大多数这些进程在实际运行任何内容之前都会等待请求或一组条件得到满足。
一些示例：sshd、crond、rpcbind。
</b></details>

<details>
<summary>一个进程可能有哪些状态 Linux?</summary><br><b>
<pre>
跑步（右）
不间断睡眠 (D) - 进程正在等待 I/O
可中断睡眠 (S)
停止（T）
死了（x）
僵尸 (z)
</pre>
</b></details>

<details>
<summary>如何杀死处于 D 状态的进程？</summary><br><b>
处于 D 状态（也称为“不间断睡眠”）的进程无法使用“kill”命令终止。终止它的唯一方法是重新启动系统。
</b></details>

<details>
<summary>什么是僵尸进程？</summary><br><b>

已完成运行但尚未退出的进程。

发生这种情况的原因之一是父进程编程不正确。每个父进程都应该执行 wait() 以从完成运行的子进程获取退出代码。但是，当父进程没有检查子进程退出代码时，子进程尽管已完成运行，但仍然可以存在。
</b></details>

<details>
<summary>如何摆脱僵尸进程？</summary><br><b>

你不能用常规方式杀死僵尸进程 `kill -9` 例如，因为它已经死了。

处理僵尸进程的一种方式是发送 SIGCHLD，通知父进程回收其子进程。如果父进程实现有问题，这种方式可能不起作用。命令是 `kill -s SIGCHLD [parent_pid]`

您还可以尝试关闭/终止父进程。这将使僵尸进程成为 init(1) 的子进程，init(1) 会定期进行清理，并在某个时刻清理僵尸进程。
</b></details>

<details>
<summary>如何找到所有的

  * 由特定用户执行/拥有的进程
  * 进程是Java进程
  * 僵尸进程
</summary><br><b>

如果您在任何时候提到带有参数的 ps 命令，请熟悉这些参数的确切作用。
</b></details>

<details>
<summary>init进程是什么？</summary><br><b>
它是系统启动期间内核执行的第一个进程。它是一个守护进程，一直运行到系统关闭为止。这就是为什么它是所有进程的父进程
</b></details>

<details>
<summary>您能描述一下流程是如何创建的吗？</summary><br><b>
</b></details>

<details>
<summary>如何改变进程的优先级？你为什么要这么做？</summary><br><b>
要更改进程的优先级，可以使用nice命令 Linux。 Nice命令允许您通过分配范围从-20到19的优先级值来指定进程的优先级。优先级值越高意味着进程的优先级越低，反之亦然。

你可能会通过调整进程优先级来影响 CPU scheduler 分配给该进程的 CPU 时间。例如，如果系统上有一个 CPU 密集型进程拖慢了其他进程，可以降低它的优先级，让其他进程获得更多 CPU 时间。
</b></details>

<details>
<summary>您能解释一下网络进程/连接是如何建立以及如何终止的吗？></summary><br></b>
当一个系统上的客户端进程想要与另一个系统上的服务器进程建立连接时，它首先使用套接字系统调用创建一个套接字。然后，客户端调用 connect 系统调用，并将服务器的地址作为参数传递。这会导致客户端和服务器之间发生三向握手，两个系统交换信息以建立连接。

一旦建立连接，客户端和服务器就可以使用读写系统调用交换数据。当不再需要连接时，客户端或服务器可以通过调用套接字上的 close 系统调用来终止连接。
</b></details>

<details>
<summary><code>strace</code> 是什么？<code>trace</code> 呢？</summary><br><b>
Strace 是一个调试工具，用于监视进程进行的系统调用。它允许您跟踪进程的执行并查看它发出的系统调用以及它接收的信号。这对于诊断进程问题非常有用，例如确定进程挂起或崩溃的原因。

另一方面，Ltrace 是一个类似的工具，用于跟踪进程进行的库调用。它允许您查看进程对共享库进行的函数调用，以及传递给这些函数的参数。这对于诊断涉及库调用的进程的问题非常有用，例如确定特定库导致问题的原因。

</b></details>

<details>
<summary>查找所有以 '.yml' 结尾的文件，并替换每个文件中 2 中的数字 1</summary><br><b>

find /some_dir -iname \*.yml -print0 | xargs -0 -r sed -i "s/1/2/g"
</b></details>

<details>
<summary>您运行 ls 并得到“/lib/ld-linux-armhf.so.3 no such file or directory”。有什么问题吗？</summary><br><b>

ls 可执行文件是为不兼容的体系结构构建的。
</b></details>

<details>
<summary>如何将 50 行文件拆分为 2 个文件，每个文件 25 行？</summary><br><b>

您可以使用 <code>分裂</code> 这样命令： <code>split -l 25 some_file</code>
</b></details>

<details>
<summary>什么是文件描述符？您熟悉哪些文件描述符？</summary><br><b>
克伯罗斯
文件描述符，也称为文件处理程序，是标识操作系统中打开的文件的唯一编号。

在 Linux （和 Unix）前三个文件描述符是：

  * 0 - 输入的默认数据流
  * 1 - 输出的默认数据流
  * 2 - 与错误相关的输出的默认数据流

这是一篇关于该主题的精彩文章： https://www.computerhope.com/jargon/f/file-descriptor.htm
</b></details>

<details>
<summary>什么是 NTP？它有什么用？</summary><br><b>
</b></details>

<details>
<summary>解释内核 OOM</summary><br><b>
</b></details>

<a name="questions-linux-security"></a>
<a name="security"></a>
### 安全性

<details>
<summary>什么是 chroot？您会在什么场景下考虑使用它？</summary><br><b>
</b></details>

<details>
<summary>什么是SELiunx？</summary><br><b>
</b></details>

<details>
<summary>什么是 Kerberos？</summary><br><b>
</b></details>

<details>
<summary>nftable是什么？</summary><br><b>
</b></details>

<details>
<summary>firewalld 守护进程负责什么？</summary><br><b>
</b></details>

<details>
<summary>您有加固服务器的经验吗？你能描述一下过程吗？</summary><br><b>
</b></details>

<details>
<summary>如何创建私钥 CA （证书颁发机构）？</summary><br><b>

一种方法是这样使用 openssl：

`openssl genrsa -aes256 -out ca-private-key.pem 4096`
</b></details>

<details>
<summary>如何为 CA （证书颁发机构）？</summary><br><b>

`openssl req -new -x509 -days 730 -key [private key file name] -sha256 -out ca.pem`

如果使用上一个问题中的私钥，则命令将是：

`openssl req -new -x509 -days 730 -key ca-private-key.pem -sha256 -out ca.pem`
</b></details>

<details>
<summary>演示一种对数据进行编码和解码的方法 Linux</summary><br><b>

编码：`echo -n“一些密码” | base64`
解码：`echo -n "allE19remO91" | base64`
</b></details>

<a name="questions-linux-networking"></a>
<a name="networking"></a>
### 网络

<details>
<summary>如何列出所有接口？</summary><br><b>

```
ip link show
```
</b></details>

<details>
<summary>什么是环回 (lo) 接口？</summary><br><b>

环回接口是一种特殊的虚拟网络接口，您的计算机使用它与自身进行通信。它主要用于诊断和故障排除，以及连接到本地计算机上运行的服务器。
</b></details>

<details>
<summary>以下命令的用途是什么？

  * IP地址
  * ip路由
  * ip链接
  * 平
  * 网络统计
  * 跟踪路由</summary><br><b>
</b></details>

<details>
<summary>什么是网络命名空间？它有什么用？</summary><br><b>
</b></details>

<details>
<summary>如何检查某个端口是否被使用？</summary><br><b>

以下其中一项可行：

```
netstat -tnlp | grep <port_number>
lsof -i -n -P | grep <port_number>
```
</b></details>

<details>
<summary>你怎样才能转动你的 Linux 服务器变成路由器？</summary><br><b>
</b></details>

<details>
<summary>什么是虚拟 IP？你会在什么情况下使用它？</summary><br><b>
</b></details>

<details>
<summary>判断题：接口的 MAC 地址由 OS 分配/设置</summary><br><b>

错误
</b></details>

<details>
<summary>在给定系统中是否可以有多个默认网关？</summary><br><b>

从技术上来说，是的。
</b></details>

<details>
<summary>什么是 telnet？为什么在生产中使用它是一个坏主意？ （或根本）</summary><br><b>

Telnet 是一种客户端-服务器协议，可用于在远程计算机（通常是服务器）上打开命令行。
默认情况下，通过 telnet 发送和接收的所有数据均以明文/纯文本形式传输，因此不应使用它，因为它不会加密客户端和服务器之间的任何数据。
</b></details>

<details>
<summary>什么是路由表？你怎么看？</summary><br><b>
</b></details>

<details>
<summary>您如何发送 HTTP 来自你的外壳的请求？</summary><br><b>
<br>
使用 nc 是一种方法<br>
</b></details>

<details>
<summary>什么是数据包嗅探器？您过去使用过吗？如果是，您使用了哪些数据包嗅探器以及目的是什么？</summary><br><b>
它是一种网络实用程序，可以分析并可以将任务注入到目标网络上传输的数据流中。
</b></details>

<details>
<summary>如何列出活动连接？</summary><br><b>
</b></details>

<details>
<summary>IPv6中如何触发邻居发现？</summary><br><b>

一种方法是 `ping6 ff02::1`
</b></details>

<details>
<summary>什么是网络接口绑定？您知道它是如何执行的吗？ Linux?</summary><br><b>
</b></details>

<details>
<summary>网络绑定模式有哪些？</summary><br><b>

有几种模式：

  * Balance-rr：循环绑定
  * active-backup：一种容错模式，只有一个处于活动状态
  * Balance-tlb：自适应传输负载平衡
  * Balance-alb：自适应负载平衡
</b></details>

<details>
<summary>什么是桥？是如何添加进去的 Linux OS?</summary><br><b>
</b></details>

<a name="questions-linux-dns"></a>
<a name="dns"></a>
### DNS

<details>
<summary>如何检查系统的主机名是什么？</summary><br><b>

`cat /etc/hostname`

你也可以运行 `hostnamectl` 或 `hostname` 但这可能只打印临时主机名。文件中的那一份是永久的。
</b></details>

<details>
<summary>什么文件 <code>/etc/resolv.conf</code> 是用来做什么的？它包括什么？</summary><br><b>
</b></details>

<details>
<summary>您使用什么命令来执行 DNS 查询（或排除故障 DNS 相关问题）？</summary><br><b>

您可以指定以下一项或多项：

 * <code>挖</code>
 * <code>主机</code>
 * <code>查找</code>
</b></details>

<details>
<summary>你跑 <code>挖掘codingshell.com</code> 并得到以下结果： 

```
ANSWER SECTION:
codingshell.com.	3515	IN	A	185.199.109.153
```

数字3515的含义是什么？
</summary><br><b>

这是 TTL。当您使用域名/主机名查找地址时，您的 OS 正在表演 DNS 通过联系解决 DNS 名称服务器来获取 IP 您正在寻找的主机/域的地址。<br>
当您收到回复时，该回复会缓存在您的 OS 在一定时间内。这段时间也称为 TTL 这就是 3515 数字的含义 - 在从缓存中删除之前，它将被缓存 3515 秒，在此期间，您将从缓存中获取值而不是询问 DNS 再次获取该地址的名称服务器。
</b></details>

<details>

<summary> 我们如何修改网络连接 `nmcli` 命令，使用 `8.8.8.8` 作为 DNS 服务器？ </summary><br><b>

1. 找到连接名称： 
    ```
    # nmcli con show
    NAME         UUID                                  TYPE      DEVICE
    System ens5  8126c120-a964-e959-ff98-ac4973344505  ethernet  ens5
    System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  --
    ```
    Here the connection name is "System ens5". Let's say we want to modify settings for this connection.

2. 修改连接以使用 8.8.8.8 作为 DNS 服务器：
    ```
    # nmcli con mod "System ens5" ipv4.dns "8.8.8.8"
    ```

3. 我们需要重新激活连接以使更改生效：
    ```
    nmcli con up "System ens5"
    ```

4. 再次检查我们的设置：
    ```
    cat /etc/resolv.conf
    nmcli -f ipv4.dns con show "System ens5"
    ```
</b>

</details>
 
<a name="questions-linux-packaging"></a>
<a name="packaging"></a>
### 包装

<details>
<summary>您有包装经验吗？ （如构建包）你能解释一下它是如何工作的吗？</summary><br><b>
</b></details>

<details>
<summary>如何在您使用的发行版上执行软件包安装/删除？</summary><br><b>

答案取决于所使用的发行版。

在 Fedora/CentOS/RHEL/Rocky 可以用它来完成 `rpm` 或 `dnf` 命令。
在 Ubuntu 中，可以使用以下命令完成 `apt` 命令。
</b></details>

<details>
<summary>RPM：解释规范格式（它应该和可以包含什么）</summary><br><b>
</b></details>

<details>
<summary>如何在不实际安装包的情况下列出包的内容？</summary><br><b>
</b></details>

<details>
<summary>如何知道系统上的文件属于哪个包？如果它不属于任何包会有问题吗？</summary><br><b>
</b></details>

<details>
<summary>存储库存储在哪里？ （基于您使用的发行版）</summary><br><b>
</b></details>

<details>
<summary>什么是档案？如何创建一个 Linux?</summary><br><b>
</b></details>

<details>
<summary>如何提取存档的内容？</summary><br><b>
</b></details>

<details>
<summary>为什么我们需要包管理器？为什么不简单地创建档案并发布它们呢？</summary><br><b>

包管理器允许您在安装、删除和更新包时管理包生命周期。<br>
此外，您可以在规范中指定如何安装某个软件包 - 在哪里复制文件、安装前运行哪些命令、安装后等。
</b></details>

<a name="questions-linux-dnf"></a>
<a name="dnf"></a>
### DNF

<details>
<summary>什么是 DNF?</summary><br><b>

从 [repo](https://github.com/rpm-software-management/dnf):

“Dandified YUM（DNF）是下一代 YUM。它使用 RPM、libsolv 和 Hawkey 库进行包管理。”

官方 [文档](https://dnf.readthedocs.io/en/latest/)

</b></details>

<details>
<summary>如何查找提供/usr/bin/git命令的包？ （不一定安装该包）</summary><br><b>

dnf 提供 /usr/bin/git
</b></details>

<a name="questions-linux-apps-and-services"></a>
<a name="applications-and-services"></a>
### 应用程序和服务

<details>
<summary>您可以在/etc/services 中找到什么？</summary><br><b>
</b></details>

<details>
<summary>如何确保服务在重启或崩溃后自动启动？</summary><br><b>

取决于初始化系统。

系统： <code> systemctl 启用 [服务名称] </code>
系统五： <code> update-rc.d [服务名称] </code> 并添加这一行 <code> 编号:5678:重生：/bin/sh /path/to/app </code> 到/etc/inittab
Upstart：在 /etc/init/service.conf 添加 Upstart 初始化脚本
</b></details>

<details>
<summary>你跑 <code>ssh 127.0.0.1</code> 但它因“连接被拒绝”而失败。可能是什么问题？</summary><br><b>

1. SSH 服务器未安装
2. SSH 服务器未运行
</b></details>

<details>
<summary>如何打印某个程序所需的共享库？它有什么用？</summary><br><b>
</b></details>

<details>
<summary>什么是 CUPS?</summary><br><b>
</b></details>

<details>
<summary>您熟悉哪些类型的网络服务器？</summary><br><b>

Nginx、Apache httpd。
</b></details>

<a name="questions-linux-users-and-groups"></a>
<a name="users-and-groups"></a>
### 用户和组

<details>
<summary>什么是“超级用户”（或根用户）？与普通用户有何不同？</summary><br><b>
</b></details>

<details>
<summary>你如何创建用户？用户信息存储在哪里？</summary><br>

创建用户的命令是 `useradd` 

语法：
`useradd [options] Username`

有2个配置文件，存放用户信息

1. `/etc/passwd` - Users information like, username, shell etc is stored in this file 

2. `/etc/shadow` - Users password is stored in encrypted format 
</details>

<details>
<summary>哪个文件存储有关组的信息？</summary><br>

`/etc/groups` 文件存储组名、组 ID，属于次要组的用户名。
</details>

<details>
<summary>如何更改/设置用户的密码？</summary><br>

`passwd <username>` 是设置/更改用户密码的命令。
</details>

<details>
<summary>哪个文件存储用户密码？每个人都可以看到吗？</summary><br>

`/etc/shadow` 文件以加密格式保存用户的密码。 NO，它仅对 `root` 用户
</details>

<details>
<summary>您知道如何在不使用 adduser/useradd 命令的情况下创建新用户吗？</summary><br>

YES，我们可以通过手动添加条目来创建新用户 `/etc/passwd` 文件。 

例如，如果我们需要创建一个名为 `john`. 

第 1 步：添加条目 `/etc/passwd` 文件，因此用户被创建。

`echo "john:x:2001:2001::/home/john:/bin/bash" >> /etc/passwd` 

步骤 2：添加条目 `/etc/group` 文件，因为每个用户都属于与用户名同名的主要组。

`echo "john:x:2001:" >> /etc/group`

步骤 3：验证用户是否已创建

`id john`

</details>

<details>
<summary>/etc/passwd 中存储了哪些信息？解释每个字段</summary><br>

`/etc/passwd` 是一个配置文件，其中包含用户信息。该文件中的每个条目都有 7 个字段，

`username:password:UID:GID:Comment:home directory:shell`

`username` - The name of the user.

`password` - This field is actually a placeholder of the password field. Due to security concerns, this field does not contain the password, just a placeholder (x) to the encrypted password stored in `/etc/shadow` 文件。

`UID` - User ID 用户的。

`GID` - Group ID 

`Comment` - This field is to provide description about the user.

`home directory` - Abousulte path of the user's home directory. This directory gets created once the user is added.

`shell` - This field contains the absolute path of the shell that will be used by the respective user.
</details>

<details>
<summary>如何在不提供新用户登录系统的能力的情况下将新用户添加到系统中？</summary><br><b>

`adduser user_name --shell=/bin/false --no-create-home`
您还可以添加用户，然后编辑 /etc/passwd。
</b></details>

<details>
<summary>如何切换到其他用户？如何切换到root用户？</summary><br><b>

su 命令。
使用su - 切换到root
</b></details>

<details>
<summary>什么是 UID 根用户？那么普通用户呢？</summary><br>

UID root用户数为0

UID_MIN 和 UID_MAX 的默认值 `/etc/login.defs`
`UID_MIN` 是 `1000`
`UID_MAX` 是 `60000`

事实上，我们可以改变这个值。但是 UID < 1000 保留给系统帐户。
因此，按照默认配置，对于普通用户 UID 开始于 `1000`. 
</details>

<details>
<summary>如果您丢失/忘记 root 密码，该怎么办？</summary><br><b>

重新安装 OS IS NOT 正确答案:)
</b></details>

<details>
<summary>/etc/skel是什么？</summary><br>

`/etc/skel` 是一个目录，包含文件或目录，因此当创建新用户时，这些文件/目录将创建在 `/etc/skel` 将被复制到用户的主目录。
</details>

<details>
<summary>如何查看登录系统的人员列表？</summary><br><b>

使用 `last` 命令。
</b></details>

<details>
<summary>解释以下每个命令的作用：

  * 用户添加
  * 用户模式
  * 瓦阿米
  * 编号</summary><br><b>

  `useradd` - Command for creating new users 
  `usermod` - Modify the users setting
  `whoami`  - Outputs, the username that we are currently logged in
  `id`      - Prints the  
</b></details>

<details>
<summary>你跑 <code>grep $（whoami）/etc/passwd</code> 但输出为空。可能的原因是什么？</summary><br><b>

您使用的用户不是本地定义的，而是来自诸如 LDAP.<br>
您可以通过以下方式验证： `getent passwd`
</b></details>

<a name="questions-linux-hardware"></a>
<a name="hardware"></a>
### 硬件

<details>
<summary>在哪里可以找到有关处理器的信息（例如 CPU 数量）？</summary><br><b>

/proc/cpuinfo

您还可以使用 `nproc` 处理器数量
</b></details>

<details>
<summary>如何打印信息 BIOS、主板、处理器和 RAM?</summary><br><b>

dmidecode
</b></details>

<details>
<summary>如何打印系统中连接的块设备的所有信息？</summary><br><b>

LSBLK
</b></details>

<details>
<summary>判断题：在用户空间中，应用程序没有对硬件资源的完全访问权限</summary><br><b>

正确。只有在内核空间他们才可以完全访问硬件资源。
</b></details>

<a name="questions-linux-namespaces"></a>
<a name="namespaces"></a>
### Namespaces

<details>
<summary>Linux namespace 有哪些类型？</summary><br><b>

  - PID namespace：隔离进程 ID 空间
  - Mount namespace：隔离和控制挂载点
  - Network namespace：隔离系统网络资源，例如路由表、接口、ARP 表等
  - UTS namespace：隔离主机名和域名
  - IPC namespace：隔离进程间通信
  - User namespace：隔离用户和组 ID
  - Time namespace：隔离系统时间视图
</b></details>

<details>
<summary>判断题：在每个 PID namespace 中，第一个进程都会被分配进程 ID 1</summary><br><b>

正确。在该 namespace 内它是 PID 1；但在父 namespace 中，它会有另一个 PID。
</b></details>

<details>
<summary>判断题：子 PID namespace 中的进程可以看到父 PID namespace 中的进程，而父 PID namespace 看不到子 PID namespace 中的进程</summary><br><b>

错误。事实恰恰相反。父 PID namespace 可以看到子 PID namespace 中的进程，而子 PID namespace 无法看到父 PID namespace 中发生的事情。
</b></details>

<details>
<summary>判断题：默认情况下，创建两个独立的网络命名空间时，从一个命名空间到另一个命名空间的 ping 操作可以正常工作</summary><br><b>

错误。network namespace 有自己的接口和路由表。一个 network namespace 默认无法访问另一个 network namespace（例如，除非创建 bridge 等连接方式）。
</b></details>

<details>
<summary>判断题：使用 UTS namespace 时，同一台主机上的进程可以看起来像运行在不同的主机名或域名下</summary><br><b>

正确。
</b></details>

<details>
<summary>判断题：子 User namespace 中不可能存在用户 ID 为 0 的 root 用户</summary><br><b>

错误。在每个子 User namespace 中，都可以有一个 UID 为 0 的独立 root 用户。
</b></details>

<details>
<summary>什么时候会使用 Time namespace？</summary><br><b>

在 Time namespace 中，进程可以看到与宿主机不同的系统时间。
</b></details>

<a name="questions-linux-virtualization"></a>
<a name="virtualization"></a>
### 虚拟化

<details>
<summary>虚拟化解决方案可用于哪些用途 Linux?</summary><br><b>

  * [KVM](https://www.linux-kvm.org/page/Main_Page)
  * [XEN](http://www.xen.org/)
  * [虚拟盒子](https://www.virtualbox.org/)
  * [Linux-虚拟服务器](http://linux-vserver.org/Welcome_to_Linux-VServer.org)
  * [用户模式 Linux](http://user-mode-linux.sourceforge.net/)
  * ...
</b></details>

<details>
<summary>什么是 KVM?</summary><br><b>

是一种用于在 x86 硬件上运行的开源虚拟化技术。 

来自官方 [文档](https://www.linux-kvm.org/page/Main_Page)
推荐阅读：
  * [Red Hat 文章 - 什么是 KVM?](https://www.redhat.com/en/topics/virtualization/what-is-KVM)
</b></details>

<details>
<summary>什么是 Libvirt？</summary><br><b>

它是用于管理虚拟机的开源软件集合。它可以与： KVM，Xen， LXC 和其他人。它也称为 Libvirt 虚拟化 API.

来自官方 [文档](https://libvirt.org/)
支持管理程序 [文档](https://libvirt.org/drivers.html)
</b></details>

<a name="questions-linux-awk"></a>
<a name="awk"></a>
### AWK

<details>
<summary>什么是 <code>awk</code> 命令呢？你用过吗？有何用？</summary><br><b>

来自维基百科：“AWK 是专为文本处理而设计的领域特定语言，通常用作数据提取和报告工具”
</b></details>

<details>
<summary>如何打印文件中的第四列？</summary><br><b>

`awk '{print $4}' file`
</b></details>

<details>
<summary>如何打印超过 79 个字符的每一行？</summary><br><b>

`awk 'length($0) > 79' file`
</b></details>

<details>
<summary>什么是 <code>拉索夫</code> 命令呢？你用过吗？有何用？</summary><br><b>
</b></details>

<details>
<summary>查找和定位有什么区别？</summary><br><b>
</b></details>

<details>
<summary>用户进程如何执行特权操作，例如从磁盘读取？</summary><br><b>

使用系统调用
</b></details>

<a name="questions-linux-system-calls"></a>
<a name="system-calls"></a>
### 系统调用

<details>
<summary>什么是系统调用？您熟悉哪些系统调用？</summary><br><b>
</b></details>

<details>
<summary>程序如何执行系统调用？</summary><br><b>

- 程序执行陷阱指令。该指令跳转到内核，同时将特权级别提升到内核空间。
- 一旦进入内核空间，它就可以执行任何特权操作
- 一旦完成，它会调用“从陷阱返回”指令，该指令返回到用户空间，同时降低用户空间的权限级别。
</b></details>

<details>
<summary>解释 fork() 系统调用</summary><br><b>

fork() 用于创建一个新进程。它通过克隆调用进程来实现这一点，但子进程有自己的进程 PID 并且任何内存锁、I/O 操作和信号量都不会被继承。
</b></details>

<details>
<summary>fork()的返回值是多少？</summary><br><b>

  - 论成功， PID 父进程中的子进程和子进程中的 0
  - 出错时，父级中为 -1
</b></details>

<details>
<summary>说出 fork() 失败的一个原因</summary><br><b>

内存不足，无法创建新进程
</b></details>

<details>
<summary>为什么我们需要 wait() 系统调用？</summary><br><b>

wait() 被父进程用来等待子进程完成执行。
如果父进程不使用 wait，则子进程可能会成为僵尸进程。
</b></details>

<details>
<summary>内核如何通知父进程子进程终止？</summary><br><b>

内核通过向父进程发送 SIGCHLD 来通知它。
</b></details>

<details>
<summary>waitpid() 与 wait() 有何不同？</summary><br><b>

waitpid() 是 wait() 函数的非阻塞版本。<br>
它还支持使用库例程（例如 system()）来等待子进程，而不会干扰该进程尚未等待的其他子进程。
</b></details>

<details>
<summary>判断题： wait() 系统调用在子进程运行并退出之前不会返回</summary><br><b>

在大多数情况下是这样，不过某些情况下 wait() 可能会在子进程退出前返回。
</b></details>

<details>
<summary>解释 exec() 系统调用</summary><br><b>

它将当前正在运行的程序转换为另一个程序。<br>
给定可执行文件的名称和一些参数，它从指定的可执行文件加载代码和静态数据，并覆盖其当前代码段和当前静态代码数据。初始化其内存空间（如堆栈和堆）后 OS 运行程序，将任何参数作为该进程的 argv 传递。
</b></details>

<details>
<summary>判断题：成功调用 exec() 永远不会返回</summary><br><b>

正确。<br>
由于成功的 exec 会替换当前进程，因此它无法向发出调用的进程返回任何内容。
</b></details>

<details>
<summary>使用什么系统调用来列出文件？</summary><br><b>
</b></details>

<details>
<summary>使用哪些系统调用来创建新进程？</summary><br><b>

fork()、exec() 和 wait() 系统调用也包含在此工作流程中。
</b></details>

<details>
<summary>execve() 的作用是什么？</summary><br><b>

执行一个程序。该程序作为文件名（或路径）传递，并且必须是二进制可执行文件或脚本。
</b></details>

<details>
<summary>malloc的返回值是多少？</summary><br><b>
</b></details>

<details>
<summary>解释 pipeline() 系统调用。它有什么用？</summary><br><b>

[Unix 管道实施](https://toroid.org/unix-pipe-implementation)

“管道提供了单向的进程间通信通道。管道有读端和写端。写入管道写端的数据可以从管道读端读取。
管道是使用 pipeline(2) 创建的，它返回两个文件描述符，一个指管道的读取端，另一个指写入端。”
</b></details>

<details>
<summary>执行时会发生什么 <code>ls-l</code>?</summary><br><b>

* Shell 使用 getline() 读取输入，它读取输入文件流并将其作为字符串存储到缓冲区中
* 缓冲区被分解为标记并以这种方式存储在数组中：{“ls”，“-l”，“NULL"}
* Shell 检查是否需要扩展（如果是 ls *.c）

* 一旦程序进入内存，它就开始执行。首先调用 readdir()

注意事项：

* getline() 起源于 GNU C 库，用于从输入流读取行并将这些行存储在缓冲区中
</b></details>

<details>
<summary>执行时会发生什么 <code>ls -l *.log</code>?</summary><br><b>
</b></details>

<details>
<summary>readdir() 系统调用的作用是什么？</summary><br><b>
</b></details>

<details>
<summary><code>alias x=y</code> 这条命令具体做了什么？</summary><br><b>
</b></details>

<details>
<summary>为什么要使用 fork() 和 exec() 系统调用来运行新程序？为什么不同 API 不是在需要一次调用来运行新程序的情况下开发的吗？</summary><br><b>

这种方式提供了很大的灵活性。例如，它允许 shell 在调用 fork() 之后但在调用 exec() 之前运行代码。此类代码可用于更改它将要运行的程序的环境。
</b></details>

<details>
<summary>简要描述一下在 shell 中执行命令时会发生什么</summary><br><b>

shell 计算出，使用 PATH 变量，命令的可执行文件驻留在文件系统中。然后它调用 fork() 创建一个新的子进程来运行该命令。一旦 fork 成功执行，它会调用 exec() 的变体来执行命令，最后使用 wait() 等待命令完成。当子进程完成时，shell 从 wait() 返回并再次打印出提示。
</b></details>

<a name="questions-linux-fs-files"></a>
<a name="filesystem-files"></a>
### 文件系统和文件

<details>
<summary>如何创建一定大小的文件？</summary><br><b>

有几种方法可以做到这一点：

  * dd if=/dev/urandom of=new_file.txt bs=2MB 计数=1
  * 截断-s 2M new_file.txt
  * Fallocate -l 2097152 new_file.txt
</b></details>

<details>
<summary>下面的块有什么作用？：

```
open("/my/file") = 5
read(5, "file content")
```
</summary><br><b>

这些系统调用正在读取文件 <code>/my/file</code> 5 是文件描述符编号。
</b></details>

<details>
<summary>描述删除文件（或其内容）的三种不同方法</summary><br><b>
</b></details>

<details>
<summary>进程和线程有什么区别？</summary><br><b>
</b></details>

<details>
<summary>什么是上下文切换？</summary><br><b>

来自 [维基百科](https://en.wikipedia.org/wiki/Context_switch)：上下文切换是存储进程或线程状态的过程，以便稍后可以恢复并继续执行
</b></details>

<details>
<summary>你发现有一台服务器很高 CPU 负载但你没有找到高的进程 CPU。这怎么可能？</summary><br><b>
</b></details>

<a name="questions-linux-advanced-networking"></a>
<a name="advanced-networking"></a>
### 先进的网络

<details>
<summary>运行 <code>ip a</code> 时会看到一个名为“lo”的设备。它是什么？为什么需要它？</summary><br><b>
</b></details>

<details>
<summary>什么是 <code>跟踪路由</code> 命令呢？它是如何运作的？</summary><br><b>

解决这个问题的另一种常见方法是“traceroute 修改了 tcp 标头的哪一部分？”
</b></details>

<details>
<summary>什么是网络绑定？您熟悉哪些类型？</summary><br><b>
</b></details>

<details>
<summary>如何链接两个独立的网络命名空间，以便可以从第二个命名空间 ping 一个命名空间上的接口？</summary><br><b>
</b></details>

<details>
<summary>什么是 cgroup？</summary><br><b>
</b></details>

<details>
<summary>解释流程描述符和任务结构</summary><br><b>
</b></details>

<details>
<summary>线程和进程有什么区别？</summary><br><b>
</b></details>

<details>
<summary>解释内核线程</summary><br><b>
</b></details>

<details>
<summary>当使用socket系统调用时会发生什么？</summary><br><b>

这是一篇关于该主题的好文章： https://ops.tips/blog/how-linux-creates-sockets
</b></details>

<details>
<summary>您执行了一个脚本，但仍在运行时，它被意外删除。是否可以在脚本仍在运行时恢复该脚本？</summary><br><b>
如果脚本被意外删除，则可以在脚本仍在运行时恢复该脚本。正在运行的脚本进程内存中仍然有代码。您可以使用 /proc 文件系统来检索正在运行的脚本的内容。
1.查找进程 ID 通过跑步 
```
ps aux | grep yourscriptname.sh
```
将 yourscriptname.sh 替换为您的脚本名称。
2. 一旦你拿到 PID，就可以通过 /proc 文件系统访问脚本的文件描述符。脚本通常位于 /proc/<PID>/fd/，其中 <PID> 是正在运行该脚本的进程 ID。通常，脚本对应的文件描述符是 0 或 1。

您可以使用 cp 命令将脚本内容复制到新文件：
```
cp /proc/<PID>/fd/0 /path_to_restore_your_file/yourscriptname.sh
```
更换 <PID> 与实际的 PID 脚本的名称和 /path_to_restore_your_file/yourscriptname.sh 以及要恢复脚本的路径。

</b></details>

<a name="questions-linux-memory"></a>
<a name="memory"></a>
### 记忆

<details>
<summary>/proc/meminfo 中的 MemFree 和 MemAvailable 有什么区别？</summary><br><b>

MemFree - 未使用的物理量 RAM 在你的系统中
MemAvailable - 基于 MemFree、Active(file)、Inactive(file) 和 SReclaimable 的新工作负载的可用内存量（不推动系统使用交换）。
</b></details>

<details>
<summary>分页和交换有什么区别？</summary><br><b>
</b></details>

<details>
<summary>解释一下是什么 OOM 杀手</summary><br><b>
</b></details>

<a name="questions-linux-distributions"></a>
<a name="distributions"></a>
### 发行版

<details>
<summary>什么是 Linux 分布？</summary><br><b>
</b></details>

<details>
<summary>什么 Linux 你熟悉发行版吗？</summary><br><b>
</b></details>

<details>
<summary>一个的组成部分是什么 Linux 分布？</summary><br><b>

* 内核
* 公用事业
* 服务
* 软件/包管理
</b></details>

<a name="questions-linux-sed"></a>
<a name="sed"></a>
### 塞德

<details>
<summary>使用 sed 从以下行中提取日期： <code>201.7.19.90 - - [1985年6月05日:13:42:99 +0000] "GET /site HTTP/1.1" 200 32421</code></summary><br><b>

`回显$行 | sed 's/.*\[//g;s/].*//g;s/:.*//g'`
</b></details>

<a name="questions-linux-misc"></a>
<a name="misc-1"></a>
### 杂项

<details>
<summary>什么是 Linux 分布？</summary><br><b>

* 软件包的集合 - 内核， GNU、第三方应用程序、...
* 有时分布会存储一些关于分布的信息 `/etc/*-release` 文件
    * 例如，对于 Red Hat 发行版，它将是 `/etc/redhat-release` 对于亚马逊来说，这将是 `/etc/os-release`
    * `lsb_release` 是可以在多个不同发行版中使用的通用命令
</b></details>

<details>
<summary>命名 5 个两个字母长的命令</summary><br><b>

ls, wc, dd, df, du, ps, ip, cp, cd ...
</b></details>

<details>
<summary>有哪些方法可以创建新的空文件？</summary><br><b>

  * 触摸新文件
  * 回声“”>新文件
</b></details>

<details>
<summary>如何 `cd -` 作品？它如何知道之前的位置？</summary><br><b>

$OLDPWD
</b></details>

<details>
<summary>列出打印当前目录下所有文件的三种方法</summary><br><b>

* LS
* 找到。
* 回声*
</b></details>

<details>
<summary>如何计算文件中的行数？那么言语呢？</summary><br><b>

对于这些我们可以使用 `wc` 命令。

1. 计算文件中的行数
```wc -l```

2. To count the number of words in file
```wc -w```
</b></details>

<details>
<summary>您在 /etc/bashrc 中定义 x=2 和 x=6 ~/.bashrc 然后登录系统。 x 的值是多少？</summary><br><b>
</b></details>

<details>
<summary>人和信息有什么区别？</summary><br><b>

可以找到很好的答案 [这里](https://askubuntu.com/questions/9325/what-is-the-difference-between-man-and-info-documentation)
</b></details>

<details>
<summary>解释“环境变量”。如何列出所有环境变量？</summary><br><b>
</b></details>

<details>
<summary>什么是 TTY 设备？</summary><br><b>
</b></details>

<details>
<summary>如何创建自己的环境变量？</summary><br><b>

`X=2` 例如。但这将持续到新的 shell 中。要将其也放入新的 shell 中，请使用 `export X=2`
</b></details>

<details>
<summary>双破折号 (--) 是什么意思？</summary><br><b>

它在命令中用于标记命令选项的结尾。一个常见的例子是与 git 一起使用时丢弃本地更改： `git checkout -- some_file`
</b></details>

<details>
<summary>通配符是在用户空间还是内核空间实现的？</summary><br><b>
</b></details>

<details>
<summary>如果我将新设备插入 Linux 机器，系统上的哪个位置将创建新的设备条目/文件？</summary><br><b>

/dev
</b></details>

<details>
<summary>人为什么有不同的部分？各个部分之间有什么区别？</summary><br><b>
</b></details>

<details>
<summary>什么是用户模式 Linux?</summary><br><b>
在 Linux，用户模式是用户的应用程序或进程运行的受限制的操作模式。用户模式是一种非特权模式，阻止用户级进程直接访问敏感的系统资源。

在用户模式下，应用程序只能通过调用操作系统提供的系统服务或函数来间接访问硬件资源。这样可以防止用户进程干扰或损坏系统资源，从而确保系统的安全性和稳定性。

此外，用户模式还提供内存保护，以防止应用程序访问未经授权的内存位置。这是通过为每个进程分配自己的虚拟内存空间来完成的，该虚拟内存空间与其他进程隔离。

与用户模式相反，内核模式是一种特权操作模式，其中操作系统的内核具有对系统资源的完全访问权限，并且可以执行低级操作，例如访问硬件设备和直接管理系统资源。

</b></details>

<details>
<summary>根据哪个许可证 Linux 是分布式的？ </summary><br><b>

GPL v2
</b></details>
