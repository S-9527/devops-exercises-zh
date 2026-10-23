<details>
<summary>什么是 Docker？你用它做什么？</summary><br><b>
</b></details>

<details>
<summary>容器与虚拟机有何不同？</summary><br><b>

容器和虚拟机之间的主要区别在于容器允许您虚拟化
操作系统上有多个工作负载，而对于虚拟机来说，硬件被虚拟化为
运行多台机器，每台机器都有自己的 OS.
</b></details>

<details>
<summary>在哪些场景中您会使用容器，在哪些场景中您更愿意使用虚拟机？</summary><br><b>

在以下情况下您应该选择虚拟机：
  * 您需要运行一个应用程序，该应用程序需要一个应用程序的所有资源和功能 OS
  * 你需要完全的隔离和安全

您应该在以下情况下选择容器：
  * 你需要一个轻量级的解决方案
  * 运行单个应用程序的多个版本或实例
</b></details>

<details>
<summary>解释一下 Docker 架构</summary><br><b>
</b></details>

<details>
<summary>详细描述你跑步时会发生什么 `docker run hello-world`?</summary><br><b>

Docker CLI 将您的请求传递给 Docker 守护进程。
Docker 守护进程从下载图像 Docker 枢纽
Docker 守护进程使用下载的镜像创建一个新容器
Docker 守护进程将输出从容器重定向到 Docker CLI 将其重定向到标准输出
</b></details>

<details>
<summary>如何运行容器？</summary><br><b>
</b></details>

<details>
<summary>什么 `docker commit` 是吗？你什么时候会使用它？</summary><br><b>
</b></details>

<details>
<summary>如何将数据从一个容器传输到另一个容器？</summary><br><b>
</b></details>

<details>
<summary>当容器存在时，容器的数据会怎样？</summary><br><b>
</b></details>

<details>
<summary>解释以下每个命令的作用：

  * 码头运行
  * 码头工人
  * 码头工人
  * 码头工人拉
  * 码头工人构建
  * 码头工人提交</summary><br><b>
</b></details>

<details>
<summary>如何删除旧的、未运行的容器？</summary><br><b>
</b></details>
