<a name="containers"></a>
# 容器

- [容器](#containers)
  - [练习](#exercises)
    - [运行容器](#running-containers)
    - [镜像](#images)
    - [杂项](#misc)
  - [问题](#questions)
    - [容器101](#containers-101)
    - [常用命令](#commands-commands)
    - [镜像](#images-1)
      - [Registry](#registry)
      - [标签](#tags)
      - [Containerfile](#containerfile)
    - [存储](#storage)
    - [架构](#architecture)
    - [Docker 架构](#docker-architecture)
    - [Docker Compose](#docker-compose)
    - [网络](#networking)
    - [Docker 网络](#docker-networking)
    - [安全性](#security)
    - [Docker 生产中](#docker-in-production)
    - [OCI](#oci)
    - [应用场景](#scenarios)


<a name="exercises"></a>
## 练习

<a name="exercises-running-containers"></a>
<a name="running-containers"></a>
### 运行容器

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
|运行容器|基础知识|[练习](running_containers.md)|[解决方案](solutions/running_containers.md)
|容器化Web服务器|应用领域|[练习](containerized_web_server.md)|[解决方案](solutions/containerized_web_server.md)
|容器化数据库|应用领域|[练习](containerized_db.md)|[解决方案](solutions/containerized_db.md)
|具有持久存储的容器化数据库|应用领域|[练习](containerized_db_persistent_storage.md)|[解决方案](solutions/containerized_db_persistent_storage.md)

<a name="exercises-containers-images"></a>
<a name="images"></a>
### 镜像

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
|处理镜像|镜像|[练习](working_with_images.md)|[解决方案](solutions/working_with_images.md)
|共享镜像（无需注册表）|镜像|[练习](sharing_images.md)|[解决方案](solutions/sharing_images.md)
|即时创建镜像|镜像|[练习](commit_image.md)|[解决方案](solutions/commit_image.md)
|我的第一次 Containerfile|Containerfile|[练习](write_containerfile_run_container.md)|

<a name="exercises-containers-misc"></a>
<a name="misc"></a>
### 杂项

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
|奔跑，森林，奔跑！|重启策略|[练习](run_forest_run.md)|[解决方案](solutions/run_forest_run.md)
|一层一层|镜像层|[练习](image_layers.md)|[解决方案](solutions/image_layers.md)
|将应用程序容器化 | 容器化 |[练习](containerize_app.md)|[解决方案](solutions/containerize_app.md)
|多阶段构建|多阶段构建|[练习](multi_stage_builds.md)|[解决方案](solutions/multi_stage_builds.md)

<a name="questions"></a>
## 问题

<a name="questions-containers-101"></a>
<a name="containers-101"></a>
### 容器101

<details>
<summary>什么是容器？</summary><br><b>

这个问题可能很难回答，因为创建容器的方法有很多：

  - Docker
  - systemd-nspawn
  - LXC

如果专注于OCI 基于开放容器倡议（Open Container Initiative）的容器，它提供以下功能 [定义](https://github.com/opencontainers/runtime-spec/blob/master/glossary.md#container)：“具有可配置隔离和资源限制的执行进程的环境。例如，命名空间、资源限制和挂载都是容器环境的一部分。”
</b></details>

<details>
<summary>为什么需要容器？他们的目标是什么？</summary><br><b>

OCI 提供了良好的 [解释](https://github.com/opencontainers/runtime-spec/blob/master/principles.md#the-5-principles-of-standard-containers)：“定义一个称为标准容器的软件交付单元。标准容器的目标是以自描述和可移植的格式封装软件组件及其所有依赖项，以便任何兼容的运行时都可以在没有额外依赖项的情况下运行它，而不管底层计算机和容器的内容如何。”
</b></details>

<details>
<summary>什么是容器镜像？</summary><br><b>

* 容器的镜像包含应用程序、其依赖项以及执行应用程序的操作系统。<br>
* 它是只读层的集合。这些层是松散耦合的
  * 每一层都由一个或多个文件组装而成
</b></details>

<details>
<summary>容器与虚拟机 (VM) 有何不同？</summary><br><b>

容器和虚拟机之间的主要区别在于容器允许您虚拟化
单个操作系统上有多个工作负载，而对于虚拟机来说，硬件被虚拟化以运行多台机器，每台机器都有自己的来宾 OS.
您也可以将其视为容器 OS级虚拟化，而虚拟机用于硬件虚拟化。

* 容器不需要整个来宾操作系统作为虚拟机。与虚拟机不同，容器共享系统内核。它们通过使用内核功能（例如命名空间和 cgroup）来隔离自己
* 设置容器通常需要几秒钟，而虚拟机可能需要几分钟或至少比容器更长的时间，因为存在一个完整的容器。 OS 启动和初始化，而不是共享底层的容器 OS
* 虚拟机被认为比容器更安全
* 与容器相比，虚拟机的可移植性被认为是有限的
</b></details>

<details>
<summary>在哪些场景中您会使用容器，在哪些场景中您更愿意使用虚拟机？</summary><br><b>

在以下情况下您应该选择虚拟机：
  * 您需要运行一个应用程序，该应用程序需要一个应用程序的所有资源和功能 OS
  * 您需要完全隔离和安全

您应该在以下情况下选择容器：
  * 您需要一个轻量级的解决方案
  * 运行单个应用程序的多个版本或实例
</b></details>

<details>
<summary>描述容器化应用程序的过程</summary><br><b>

1. 编写一个 Containerfile/Dockerfile，包含应用程序、运行命令以及依赖项
2. 使用你编写的 Containerfile/Dockerfile 构建镜像
3. 您可能想将镜像推送到注册表
4. 使用您构建的镜像运行容器
</b></details>

<details>
<summary>使用容器有哪些优点？您可以与虚拟机等其他选项进行比较</summary><br><b>

* 可重用：容器可以被多个不同的用户用于不同的用途——生产与登台、开发、测试等。
* 轻量级：容器相当轻量级，这意味着部署可以快速完成，因为您不需要安装完整的 OS （例如在虚拟机中）
* 隔离：容器是隔离的环境，通常对容器进行更改 OS 不会影响容器，反之亦然
</b></details>

<a name="questions-common-commands"></a>
<a name="commands-commands"></a>
### 常用命令

注：答案中使用了 `Podman`，但也可以使用其他容器引擎，例如 Docker。

<details>
<summary>如何运行容器？</summary><br><b>

`podman run ubuntu`
</b></details>

<details>
<summary>为什么运行 <code>podman container run ubuntu</code> 后，<code>podman container ls</code> 输出为空？</summary><br><b>

因为运行 ubuntu 镜像后容器会立即退出。这是正常且符合预期的，因为容器通常用于运行服务或应用程序，并在进程结束后退出。要查看已退出的容器，可以运行 `podman ps -a`。

如果您希望容器继续运行，您可以运行如下命令 `sleep 100` 它将运行 100 秒，或者您可以使用类似的命令附加到容器的终端： `podman container run -it ubuntu /bin/bash`
</b></details>

<details>
<summary>如何列出本地主机上的所有容器？</summary><br><b>

`podman container ls`
</b></details>

<details>
<summary>如何将 shell 连接到正在运行的容器的终端？</summary><br><b>

`podman container exec -it [container id/name] bash`

这可以在运行容器时提前完成： `podman container run -it [image:tag] /bin/bash`
</b></details>

<details>
<summary>判断题：如果容器仍处于运行状态，即使它没有运行任何实际业务，也可以直接删除它</summary><br><b>

错误。在移除容器之前，必须先停止容器。
</b></details>

<details>
<summary>如何停止和移除容器？</summary><br><b>

`podman container stop <container id/name> && podman container rm <container id/name>`
</b></details>

<details>
<summary>运行 <code>docker container run ubuntu</code> 时会发生什么？</summary><br><b>

1. Docker 客户端将命令发布到 API 服务器作为一部分运行 Docker 守护进程
2. Docker 守护进程检查本地镜像是否存在
  1. 如果存在，它将使用它
  2. 如果不存在，就会去远程 registry（Docker 默认使用 Docker Hub）并拉取镜像到本地
3. Docker daemon 指示 containerd 和 runc 创建并启动容器
</b></details>

<details>
<summary>如何在后台运行容器？</summary><br><b>

使用 -d 标志。它将在后台运行，不会将其附加到终端。

`docker container run -d httpd` 或 `podman container run -d httpd`
</b></details>

<details>
<summary>如果你在容器内运行 <code>sleep 100</code>，在宿主机上列出所有进程时能看到它吗？为什么？</summary><br><b>
</b></details>

<details>
<summary>判断题：如果镜像 <code>httpd-service</code> 的 ENTRYPOINT 会运行 httpd 服务，那么 <code>podman run httpd-service ls</code> 也会启动 httpd 服务</summary><br><b>

错误。运行该命令会覆盖默认命令，因此 httpd 服务不会运行，Podman 会运行 `ls` 命令。
</b></details>

<details>
<summary>判断题：运行 <code>podman restart CONTAINER_NAME</code> 会杀死容器内的主进程，并从头重新运行它</summary><br><b>

错误。`podman restart` 会重启同一个容器，而不是创建一个全新的容器；容器文件系统和状态会被保留。
</b></details>

<details>
<summary>您希望在容器内运行 Web 服务器，但能够从本地主机访问它。演示如何做到这一点</summary><br><b>

```
podman run -d --name apache1 -p 8080:8080 registry.redhat.io/rhel8/httpd-24
curl 127.0.0.1:8080
```
</b></details>

<details>
<summary>运行一个容器后它停止了，<code>podman ps</code> 什么也不显示。如何查看它的详细信息？</summary><br><b>

`podman ps -a` 还将显示已停止容器的详细信息。
</b></details>

<details>
<summary>如何列出给定容器镜像的所有镜像标签？</summary><br><b>

`podman search --list-tags IMAGE_NAME`
</b></details>

<a name="questions-images"></a>
<a name="images-1"></a>
### 镜像

<details>
<summary>为什么容器镜像比较小？</summary><br><b>

* 大多数镜像不包含内核。它们共享并访问它们所运行的主机所使用的主机
* 在大多数情况下，容器旨在运行特定的应用程序。这意味着它们只保存应用程序运行所需的内容
</b></details>

<details>
<summary>您有兴趣运行带有贪吃蛇游戏应用程序的容器。如何搜索这样的镜像并检查它是否存在？</summary><br><b>

`podman search snake-game`。令人惊讶的是，有几场比赛:)

```
INDEX       NAME                                                                DESCRIPTION                                      STARS
docker.io   docker.io/dyego/snake-game                                                                                           0
docker.io   docker.io/ainizetap/snake-game                                                                                       0
docker.io   docker.io/islamifauzi/snake-games                                                                                    0
docker.io   docker.io/harish1551/snake-game                                                                                      0
docker.io   docker.io/spkane/snake-game                                         A console based snake game in a container        0
docker.io   docker.io/rahulgadre/snake-game                                     This repository contains all the files to ru...  0
```
</b></details>

<details>
<summary>如何列出特定主机上的容器镜像？</summary><br><b>

```
CONTAINER_BINARY=podman
$CONTAINER_BINARY images
```

注意：您还可以使用 `$CONTAINER_RUNTIME image ls`
</b></details>

<details>
<summary>如何在不实际运行容器的情况下下载/拉取容器镜像？</summary><br><b>

```
CONTAINER_BINARY=podman
$CONTAINER_BINARY pull rhel
```
</b></details>

<details>
<summary>判断题：如果某个容器正在使用某个镜像，则无法删除该镜像</summary><br><b>

正确。在尝试删除它使用的镜像之前，你应该停止并删除容器。
</b></details>

<details>
<summary>判断题：如果拉取镜像时未指定标签，则使用“最新”标签</summary><br><b>

正确。
</b></details>

<details>
<summary>判断题：拉取镜像时使用“最新”标签意味着您正在拉取最近发布的镜像</summary><br><b>

错误。虽然在某些情况下这可能是正确的，但不能保证使用 `latest` 标签时拉取到的一定是最新发布的镜像。<br>
例如，某些镜像会使用 `edge` 标签表示最近发布的镜像。
</b></details>

<details>
<summary>拉取的镜像存储在哪里？</summary><br><b>

取决于所使用的容器技术。例如使用 Docker 时，镜像存储在 `/var/lib/docker/`。
</b></details>

<details>
<summary>解释容器镜像层</summary><br><b>

  - 镜像 layer 用于存储内容，例如代码、文件等。
  - 每个 layer 都是独立的。
  - 每个 layer 都有一个基于内容 hash 生成的 ID。
  - layer 和镜像一样是不可变的，因此可以很容易识别某一层是否发生变化。
</b></details>

<details>
<summary>判断题：更改任意镜像层的内容都会导致镜像的哈希内容发生变化</summary><br><b>

正确。这些 hash 基于内容生成，并且由于镜像及其 layer 是不可变的，任何更改都会导致 hash 变化。
</b></details>

<details>
<summary>如何列出镜像的图层？</summary><br><b>

如果使用 Docker，可以运行 `docker image inspect <name>`。
</b></details>

<details>
<summary>判断题：在大多数情况下，容器镜像包含自己的内核</summary><br><b>

错误。容器镜像通常不包含自己的内核，容器会共享其所在 host 的内核。
</b></details>

<details>
<summary>判断题：单个容器镜像可以有多个标签</summary><br><b>

正确。列出镜像时，你可能会看到两个内容相同、image ID 相同但 tag 不同的镜像。
</b></details>

<details>
<summary>什么是悬挂镜像？</summary><br><b>

这是一张没有附加标签的镜像。
一种常见情况是：构建了一个与已有镜像名称和 tag 完全相同的新镜像。旧镜像失去 tag 后仍可通过完整的 content SHA 引用。
</b></details>

<details>
<summary>如何查看给定镜像随时间的变化？</summary><br><b>

如果是 Docker，你可以使用 `docker history <name>`
</b></details>

<details>
<summary>`podman commit` 是什么？什么时候会使用它？</summary><br><b>

从正在运行的容器创建新镜像。用户可以应用额外的更改以保存在新镜像版本中。

`podman commit` 更常见的使用场景是保存对运行中容器的临时修改，以便调试。它不太适合作为常规镜像构建方式，因为 commit 可能把日志、临时文件或运行时进程产生的数据一起保存进去，导致镜像包含不必要的数据并变得更大。
</b></details>

<details>
<summary>判断题：多个镜像可以共享图层</summary><br><b>

正确。<br>
可以在拉取镜像中找到这一点的证据。有时，当您拉取镜像时，您会看到类似于以下内容的行：<br>
`fa20momervif17: already exists`

这是因为它识别主机上已经存在该层，因此无需两次拉取同一层。
</b></details>

<details>
<summary>什么是镜像的摘要？它解决什么问题？</summary><br><b>

标签是可变的。这意味着我们可以拥有两个具有相同名称和相同标签的不同镜像。在您的环境中看到两个具有相同名称和相同标签的镜像可能会非常令人困惑。你怎么知道它们是否真的相同或不同？<br>

这就是“digests”派上用场的地方。摘要是一个内容可寻址标识符。它不像标签那样可变。它的值是可预测的，这就是您如何判断两个镜像是否内容相同的方法，而不仅仅是通过查看镜像的名称和标签。
</b></details>

<details>
<summary>判断题：单个镜像可以支持多种架构（Linux x64、Windows x64、...）</summary><br><b>

正确。
</b></details>

<details>
<summary>什么是层的分布哈希？</summary><br><b>

  - 推或拉时层会被压缩
  - 分布哈希是压缩层的哈希
  - 拉取或推送镜像进行验证时使用的分布哈希（确保没有人对镜像或图层进行调和）
  - 也可以用来避免 ID 碰撞（两个镜像生成完全相同的情况 ID)
</b></details>

<details>
<summary>多架构镜像如何工作？通过描述拉取镜像时发生的情况来进行解释</summary><br><b>

1. 客户端调用注册表以使用特定镜像（使用镜像名称和可选的标签）
2. 解析清单列表（假设存在）以检查客户端的体系结构是否受支持并且可用作清单
3. 如果支持（架构的清单可用），则解析相关清单以获取层的 ID
4. 然后使用上一步获得的 ID 拉取每一层
</b></details>

<details>
<summary>如何查看某个容器镜像支持哪些架构？</summary><br><b>

`docker manifest inspect <name>`
</b></details>

<details>
<summary>一旦我们运行基于某个容器镜像的容器，如何检查该镜像将执行什么？</summary><br><b>

在输出中查找 `Cmd` 或 `Entrypoint` 字段：`docker image inspect <image name>`
</b></details>

<details>
<summary>如何查看构建镜像时使用的指令？</summary><br><b>

`docker image history <image name>:<tag>`
</b></details>

<details>
<summary><code>docker image build</code> 是如何工作的？</summary><br><b>

1. Docker 启动一个临时容器
2. 在临时容器中运行单个指令
3. 将结果存储为新的镜像层
4. 移除临时容器
5. 对每条指令重复
</b></details>

<details>
<summary>缓存在镜像构建中的作用是什么？</summary><br><b>

当您第一次构建镜像时，不同的层将被缓存。因此，虽然镜像的第一次构建可能需要时间，但同一镜像的任何其他构建（假设 Containerfile/Dockerfile 没有改变或指令使用的内容）将是即时的，这要归功于所使用的缓存机制。

更详细地说，它是这样工作的：
1. 第一条指令（`FROM`）会在拉取基础镜像之前检查主机上是否已存在该镜像
2. 对于下一条指令，它将在构建缓存中检查现有层是否是从相同的基础镜像构建的+是否使用相同的指令
  1. 如果找到这样的层，它会跳过该指令并链接现有层，并继续使用缓存。
  2. 如果找不到匹配的图层，则会构建该图层并使缓存失效。

注意：在某些情况下（例如 COPY 和 ADD 指令）指令可能保持不变，但如果复制的内容发生更改，则缓存将失效。完成此检查的方法是比较正在复制的每个文件的校验和。
</b></details>

<details>
<summary>如何从主机中删除镜像？</summary><br><b>

`podman rmi IMAGE`

如果某些容器正在使用它，它将失败。然后您可以使用 `--force` 对此进行标记，但一般来说，最好在执行此操作之前使用镜像检查容器。

要删除所有镜像： `podman rmi -a`
</b></details>

<details>
<summary>有哪些方法可以减少容器镜像的大小？</summary><br><b>

  * 减少指令数量 - 在某些情况下，您可以通过使用一个指令（例如或用法）安装多个包来加入层 `&&` 连接 RUN 说明
  * 使用较小的镜像 - 在某些情况下，您可能使用的镜像包含的内容超出了应用程序运行所需的内容。最好了解一些镜像并看看是否可以使用您通常使用的较小镜像。
  * 运行命令后清理 - 某些命令（例如软件包安装）会创建一些运行应用程序时可能不需要的元数据或缓存。在执行此类命令后进行清理以减小镜像大小非常重要
  * 对于 Docker 镜像，您可以使用多阶段构建
</b></details>

<details>
<summary>压缩镜像的优点和缺点是什么？</summary><br><b>

优点：
  * 较小的镜像
  * 减少层数（特别是当镜像有很多层时）
缺点：
  * 不共享镜像层
  * 推和拉可能需要更多时间（因为在目标上找不到匹配层）
</b></details>

<details>
<summary>您想与其他开发人员共享镜像，但不使用注册表。你会怎么做？</summary><br><b>

```
# On the local host
podman save -o some_image.tar IMAGE
rsync some_image.tar SOME_HOST

# On the remote host
podman load -i some_image.tar
```
</b></details>

<details>
<summary>判断题：一旦容器被停止并删除，它的镜像也会从主机中删除</summary><br><b>

错误。该镜像将来仍可供潜在容器使用。<br>
要删除容器，请运行 `podman rmi IMAGE`
</b></details>

<details>
<summary>如何查看构建镜像时使用的指令？</summary><br><b>

`docker image history <image name>:<tag>`
</b></details>

<details>
<summary>如何找出容器镜像文件系统中添加了哪些文件？</summary><br><b>

`podman diff IMAGE_NAME`
</b></details>

<details>
<summary>判断题：<code>podman diff</code> 只适用于容器文件系统，不适用于挂载进来的文件</summary><br><b>

正确。对于挂载进来的文件，可以使用 `podman inspect CONTAINER_NAME/ID` 查看挂载信息。
</b></details>

<details>
<summary>存储镜像的集中位置如何称呼？</summary><br><b>

Registry
</b></details>

<a name="registry"></a>
#### Registry

<details>
<summary>什么是注册表？</summary><br><b>

- 注册表是一种存储容器镜像并允许用户拉取指定镜像来运行容器的服务。
- 有公共注册表（每个人都可以访问它们）和私有注册表（只能在组织内部或特定网络中访问）
</b></details>

<details>
<summary>一个注册表包含一个或多个 <code>____</code> 其中又包含一个或多个 <code>____</code></summary><br><b>

注册表包含一个或多个仓库，而仓库又包含一个或多个镜像。
</b></details>

<details>
<summary>如何从您的环境中找出默认使用哪个注册表？</summary><br><b>

取决于您使用的容器技术。例如，如果 Docker，可以用以下方法完成 `docker info`

```
> docker info
Registry: https://index.docker.io/v1
```
</b></details>

<details>
<summary>如何使用您正在使用的容器引擎配置注册表？</summary><br><b>

对于 podman，可以在以下位置配置注册表 `/etc/containers/registries.conf` 这样：

```
[registries.search]
registries = ["quay.io"]
```
</b></details>

<details>
<summary>如何获取最新的ubuntu镜像？</summary><br><b>

`podman image pull ubuntu:latest`
</b></details>

<details>
<summary>如何将镜像推送到注册表？</summary><br><b>

`podman push IMAGE`

您可以指定特定的注册表： `podman push IMAGE REGISTRY_ADDRESS`
</b></details>

<details>
<summary>关于容器镜像有哪些最佳实践？</summary><br><b>

- 使用标签。使用 `latest` 很常见（这可能意味着最新版本或最新版本）
  - 标签喜欢 `3.1` 可用于引用镜像的最新版本/标签，例如 `3.1.6`
- 不要使用 `commit` 用于创建新的官方镜像，因为它们包括日志和进程的开销，并且通常最终会得到更大的镜像
- 要共享镜像，请使用注册表（公共或私有注册表，取决于您的需要）
</b></details>

<details>
<summary>创建新镜像有哪些方法？</summary><br><b>

1. 创建一个 Containerfile/Dockerfile 并从中构建一个镜像
2. 使用 `podman commit` 对正在运行的容器进行更改后
</b></details>

<a name="tags"></a>
#### 标签

<details>
<summary>什么是镜像标签？为什么在支持项目的多个发布/版本时建议使用标签？</summary><br><b>

镜像标签用于区分同一软件或项目的多个版本。假设您开发了一个名为“FluffyUnicorn”的项目，当前版本是 `1.0`。你即将释放 `1.1` 但你还是想保留 `1.0` 作为任何对此感兴趣的人的稳定版本。你会怎么做？如果您的答案是创建另一个单独的新镜像，那么您可能需要重新考虑这个想法，并为新版本创建一个新的镜像标签。

此外，需要注意的是容器注册表支持标签。因此，在拉取镜像时，您可以指定该镜像的特定标签。
</b></details>

<details>
<summary>如何给镜像添加标签？</summary><br><b>

`podman tag IMAGE:TAG`

例如： `podman tag FluffyUnicorn:latest`
</b></details>

<details>
<summary>判断题：一旦创建，就无法删除特定镜像的标签</summary><br><b>

错误。你可以运行 `podman rmi IMAGE:TAG`.
</b></details>

<details>
<summary>判断题：多个标签可以引用同一张镜像</summary><br><b>

正确。
</b></details>

<a name="containerfile"></a>
#### Containerfile

<details>
<summary>什么是 Containerfile/Dockerfile?</summary><br><b>

不同的容器引擎（例如 Docker, Podman）可以通过阅读来自 a 的指令来自动构建镜像 Containerfile/Dockerfile。一个 Containerfile/Dockerfile 是一个文本文件，其中包含构建容器可以使用的镜像的所有说明。
</b></details>

<details>
<summary>每个指令都有哪些指令 Containerfile/Dockefile 它有什么作用？</summary><br><b>

在每一个 Containerfile/Dockerfile，你可以找到指令 `FROM <image name>` 这也是第一条指令（至少在大多数情况下。你可以把 ARG 之前）。<br> 
它指定要使用的镜像的基础层。所有其他指令都是该基本镜像之上的一层。
</b></details>

<details>
<summary>列出可在 a 中使用的五种不同指令 Containerfile/Dockerfile</summary><br><b>

  * WORKDIR：为后面的所有指令设置镜像文件系统内的工作目录
  * EXPOSE：公开指定的端口（它不添加新层，而是记录为镜像元数据）
  * ENTRYPOINT：指定从镜像启动容器时运行的启动命令
  * ENV：将环境变量设置为给定值
  * USER：设置运行镜像时使用的用户（以及可选的用户组）
</b></details>

<details>
<summary>有哪些最佳实践 Containerfiles/Dockerfile你正在关注吗？</summary><br><b>

  * 仅包含您要使用的包。没有别的了。
  * 在 `FROM` 指令中指定 tag。不指定 tag 通常会使用 `latest`，它可能随时间变化并导致意外结果。
  * 不要通过环境变量共享 Secret
  * 使用官方仓库中的镜像
  * 保持镜像小！ - 您希望它们仅包含应用程序成功运行所需的内容。没有别的了。
  * 如果使用 apt 包管理器，您可能需要使用“no-install-recommends” `apt-get install` 仅安装主要依赖项（而不是建议的、推荐的软件包）
</b></details>

<details>
<summary>什么是“构建上下文”？</summary><br><b>

[Docker 文档](https://docs.docker.com/engine/reference/commandline/build)：“构建的上下文是位于指定位置的文件集 PATH 或 URL"
</b></details>

<details>
<summary>有什么区别 ADD 和 COPY 在 Containerfile/Dockerfile?</summary><br><b>

COPY 接收源和目的地。它允许您将文件或目录从构建上下文复制到 Docker 镜像本身。<br>
ADD 让您执行相同的操作，但它还支持其他两个来源。您可以使用 URL 而不是构建上下文中的文件或目录。此外，您可以将 tar 文件从源直接提取到目标中。
</b></details>

<details>
<summary>有什么区别 CMD 和 RUN 在 Containerfile/Dockerfile?</summary><br><b>

RUN 让你在你的内部执行命令 Docker 镜像。这些命令在构建时执行一次并写入您的 Docker 镜像作为一个新层。
CMD 是启动构建的镜像时容器默认执行的命令。一个 Containerfile/Dockerfile 只能有一个 CMD.
你可以这么说 CMD 是一个 Docker 运行时操作，这意味着它不是在构建时执行的操作。当您运行镜像时会发生这种情况。运行的镜像称为容器。
</b></details>

<details>
<summary>如何使用创建新镜像 Containerfile/Dockerfile?</summary><br><b>

从 Dockefile 所在的目录中执行以下命令：

`docker image build -t some_app:latest .`
`podman image build -t some_app:latest .`
</b></details>

<details>
<summary>您是否对您的设备进行任何检查或测试 Containerfiles/Dockerfile是？</summary><br><b>

一种选择是使用 [哈德林特](https://github.com/hadolint/hadolint) 项目是一个基于的linter Containerfile/Dockerfile 最佳实践。
</b></details>

<details>
<summary>哪个指令在 Containerfile/Dockerfile 创建新层？</summary><br><b>

指令如 FROM, COPY 和 RUN，创建新的镜像层，而不仅仅是添加元数据。
</b></details>

<details>
<summary>哪个指令在 Containerfile/Dockerfile 创建镜像元数据而不创建新图层？</summary><br><b>

指令如 ENTRYPOINT, ENV, EXPOSE，创建镜像元数据，并且它们不会创建新图层。
</b></details>

<details>
<summary>是否可以从 <code>podman image history</code> 的输出中识别哪条指令创建了新 layer？</summary><br><b>
</b></details>

<details>
<summary>判断题：每个 Containerfile 指令在独立容器中运行，使用从每个先前层/条目构建的镜像</summary><br><b>

正确。
</b></details>

<details>
<summary>这两种形式有什么区别：
 
```
ENTRYPOINT ["cmd", "param0", "param1"]
CMD ["param0"]

ENTRYPOINT cmd param0 param1
CMD param0
```
</summary><br><b>

第一种形式也称为“Exec 形式”，第二种形式称为“Shell 形式”。<br>
第二个（Shell 形式）将命令包装在 `/bin/sh -c` 因此为其创建一个外壳进程。

当使用 Exec 形式或 Shell 形式可能没问题，但混合可能会带来意想不到的结果。<br>
考虑：

```
ENTRYPOINT ["ls"]
CMD /tmp
```

这会导致运行 `ls /bin/sh -c /tmp`
</b></details>

<details>
<summary>Containerfile/Dockerfile 可以包含多个 ENTRYPOINT 指令和一 CMD 指令</summary><br><b>

正确。但对于 ENTRYPOINT 和 CMD，只有最后一条指令生效。
</b></details>

<details>
<summary>当发生什么 CMD 指令已定义但不是 ENTRYPOINT 指令在一个 Containerfile/Dockerfile?</summary><br><b>

这种情况下会使用基础镜像中的 ENTRYPOINT。
</b></details>

<details>
<summary>跑步的情况下 <code>podman 运行它 IMAGE LS</code> 的 <code>LS</code> 覆盖 <code>___</code> 指令</summary><br><b>

CMD
</b></details>

<a name="questions-containers-storage"></a>
<a name="storage"></a>
### 存储

<details>
<summary>据说容器存储是短暂的。这意味着什么？</summary><br><b>

这意味着当容器被移除时，容器的内容以及由容器生成的数据都消失了。
</b></details>

<details>
<summary>判断题：运行在容器上的应用程序，应该使用容器存储来存储持久数据</summary><br><b>

错误。容器并不是为了存储持久数据而构建的，即使某些实现可以实现，但在具有密集 I/O 操作的应用程序中，它可能表现不佳。
</b></details>

<details>
<summary>您停止了正在运行的容器，但它仍然使用存储空间，以防您恢复它。如何回收容器的存储空间？</summary><br><b>

为了回收容器的存储空间，您必须将其删除。
</b></details>

<details>
<summary>如何创建新卷？</summary><br><b>

```
CONTAINER_BINARY=podman
$CONTAINER_BINARY volume create some_volume
```
</b></details>

<details>
<summary>如何将主机上的目录挂载到容器中？</summary><br><b>

```
CONTAINER_BINARY=podman
mkdir /tmp/dir_on_the_host

$CONTAINER_BINARY run -v /tmp/dir_on_the_host:/tmp/dir_on_the_container IMAGE_NAME
```

在某些系统中，您还必须调整主机本身的安全性：

```
podman unshare chown -R UID:GUID /tmp/dir_on_the_host
sudo semanage fcontext -a -t container_file_t '/tmp/dir_on_the_host(/.*)?'
sudo restorecon -Rv /tmp/dir_on_the_host
```
</b></details>

<a name="questions-containerfile"></a>

<a name="questions-architecture"></a>
<a name="architecture"></a>
### 架构

<details>
<summary>容器如何实现与系统其他部分的隔离？</summary><br><b>

通过使用 namespace 和 cgroup。Linux 内核有几种类型的 namespace：

  - PID namespace：隔离进程 ID 空间
  - Mount namespace：隔离和控制挂载点
  - Network namespace：隔离系统网络资源，例如路由表、接口、ARP 表等
  - UTS namespace：隔离主机名和域名
  - IPC namespace：隔离进程间通信
  - User namespace：隔离用户和组 ID
  - Time namespace：隔离系统时间视图
</b></details>

<details>
<summary>什么 Linux 容器使用的内核功能？</summary><br><b>

* cgroups（控制组）：用于限制某些进程组（当然还有它们的子进程）使用的资源量。这样，一组进程不会消耗所有主机资源，其他组也可以运行和使用部分资源

* namespace：namespace 会隔离某些系统资源，使这些资源只对该 namespace 内的进程可见。与 cgroup 不同，namespace 关注挂载点、IPC、网络等资源的可见性；cgroup 则关注内存、CPU 等资源用量限制。

* SElinux：用于保护进程的访问控制机制。不幸的是，到目前为止，许多用户实际上并不了解 SElinux，有些用户将其关闭，但尽管如此，它仍然是一个非常重要的安全功能。 Linux 内核，也被容器使用

* Seccomp：与SElinux类似，也是一种安全机制，但其重点是限制进程使用系统调用和文件描述符
</b></details>

<details>
<summary>详细描述运行 `podman/docker run hello-world` 时会发生什么</summary><br><b>

Docker/Podman CLI 将请求传递给 Docker daemon 或 Podman。
Docker daemon/Podman 从 Docker Hub 下载镜像。
Docker daemon/Podman 使用下载的镜像创建新容器。
Docker daemon/Podman 将容器输出重定向到 CLI，再由 CLI 输出到标准输出。
</b></details>

<details>
<summary>描述 cgroup 和命名空间之间的区别</summary><br><b>
cgroup：控制组提供了一种机制，用于将任务集及其所有未来的子任务聚合/分区为具有专门行为的分层组。
命名空间：将全局系统资源包装在抽象中，使命名空间内的进程看起来拥有自己的全局资源的隔离实例。

简而言之：

Cgroups = 限制你可以使用的数量；
命名空间 = 限制您可以看到（并因此使用）的内容

Cgroup 涉及资源计量和限制：
记忆
CPU
块输入/输出
网络

Namespaces 为进程提供自己的系统视图

多个命名空间：pid、net、mnt、uts、ipc、user

</b></details>

<details>
<summary>以下哪一项是 Linux 容器使用的功能？

* 空间
* 名称组
* 命名空间
* cgroups
* ELlinux
* SELinux</summary><br><b>

* 命名空间
* cgroups
* SELinux
</b></details>

<details>
<summary>判断题：容器有一个临时存储层</summary><br><b>

正确。临时存储层添加在基础镜像层之上，并且只属于当前运行的容器。这样，从同一基础镜像创建的多个容器不会共享同一个可写层。
</b></details>

<a name="questions-docker-architecture"></a>
<a name="docker-architecture"></a>
### Docker 架构

<details>
<summary>哪些组件/层组成 Docker 技术？</summary><br><b>

1. 运行时 - 负责启动和停止容器
2. 守护进程 - 实现 Docker API 并负责管理镜像（包括构建）、身份验证、安全、网络等。
3. 协调者
</b></details>

<details>
<summary>Docker Engine 由哪些组件组成？</summary><br><b>

  - Docker 守护进程
  - containerd
  - runc
</b></details>

<details>
<summary>什么是低级运行时？</summary><br><b>

  - 低级运行时称为 runc
  - 它管理运行在其上的每个容器 Docker 主机
  - 其目的是与底层交互 OS 启动和停止容器
  - 它的参考实现是 OCI （开放容器倡议）容器运行时规范
  - 这是一个小 CLI libcontainer 的包装器
</b></details>

<details>
<summary>什么是高级运行时？</summary><br><b>

  - 高级运行时称为 containerd
  - 它最初由 Docker 公司开发，后来捐赠给 CNCF
  - 它管理容器的整个生命周期 - 启动、停止、删除和暂停
  - 它负责设置网络接口、卷、推送和拉取镜像等
  - 它管理较低级别的运行时 (runc) 实例
  - Docker 和 Kubernetes 都可以使用它作为容器运行时
  - 它位于 Docker daemon 和 runc 之间

注意：在已安装并运行 Docker 的系统上执行 `ps -ef | grep -i containerd`，应该可以看到 containerd 进程。
</b></details>

<details>
<summary>判断题：与 containerd 相比，Docker daemon（dockerd）执行更底层的任务</summary><br><b>

错误。与 containerd 相比，Docker daemon 执行更高层的任务。<br>
它负责管理网络、卷、镜像……
</b></details>

<details>
<summary>详细描述运行 `docker pull image:tag` 时会发生什么</summary><br><b>
Docker CLI 将您的请求传递给 Docker 守护进程。 Dockerd 日志显示进程

docker.io/library/busybox:latest resolved to a manifestList object with 9 entries; looking for a unknown/amd64 match

找到 linux/amd64 与媒体类型 application/vnd.docker.distribution.manifest.v2+json 的匹配，摘要 sha256:400ee2ed939df769d4681023810d2e4fb9479b8401d97003c710d0e20f7c49c6

拉 blob \"sha256:61c5ed1cbdf8e801f3b73d906c61261ad916b2532d6756e7c4fbcacb975299fb 将 61c5ed1cbdf8 下载到临时文件 /var/lib/docker/tmp/GetImageBlob909736690

在 /var/lib/docker/overlay2/507df36fe373108f19df4b22a07d10de7800f33c9613acb139827ba2645444f7/diff 中应用 tar" storage-driver=overlay2

应用 tar sha256:514c3a3e64d4ebf15f482c9e8909d130bcd53bcc452f0225b0a04744de7b8c43 到507df36fe373108f19df4b22a07d10de7800f33c9613acb139827ba2645444f7，尺寸：1223534
</b></details>

<details>
<summary>详细描述运行容器时会发生什么</summary><br><b>

1. 的 Docker 客户端将运行命令转换为 API 有效载荷
2. 那么它 POST 有效负载到 API 暴露的端点 Docker 守护进程
3. 当守护进程收到创建新容器的命令时，它会通过 gRPC 调用 containerd
4. containerd 将所需镜像转换为 OCI bundle，并告诉 runc 使用该 bundle 创建容器
5. runc 与 OS kernel 交互，组合 namespace、cgroup 等用于创建容器的机制
6. 容器进程作为 runc 的子进程启动
7. 容器启动后，runc 进程退出
</b></details>

<details>
<summary>判断题：杀死 Docker 守护进程将杀死所有正在运行的容器</summary><br><b>

错误。虽然在某些时候确实如此，但现在容器运行时不是守护进程的一部分（它是 containerd 和 runc 的一部分），因此停止或终止守护进程不会影响正在运行的容器。
</b></details>

<details>
<summary>判断题： containerd 为它创建的每个容器创建一个新的实例 runc</summary><br><b>

正确。
</b></details>

<details>
<summary>判断题：运行十几个容器将导致有十几个 runc 进程</summary><br><b>

错误。容器创建完成后，父 runc 进程会退出。
</b></details>

<details>
<summary>Docker shim 是什么？</summary><br><b>

shim 是当 runc 进程存在时成为容器父进程的进程。它负责：

  - 将退出代码报告回 Docker 守护进程
  - 确保在重新启动守护进程时容器不会终止。它通过保持标准输出和标准输入打开来实现
</b></details>

<details>
<summary>如何将数据从一个容器传输到另一个容器？</summary><br><b>
</b></details>

<details>
<summary>当容器存在时，容器的数据会怎样？</summary><br><b>
</b></details>

<details>
<summary>如何删除旧的、未运行的容器？</summary><br><b>

1. 使用 `docker container rm` 删除一个或多个已停止容器，后面跟要删除的容器 ID 或名称。
2. `docker system prune` 会删除所有已停止容器、dangling image 以及未使用的网络。
3. `docker rm $(docker ps -a -q)` 会删除所有已停止容器。`docker ps -a -q` 返回所有容器 ID，并将它们传递给 `docker rm`；正在运行的容器不会被删除。
</b></details>

<details>
<summary>如何 Docker 客户端与守护进程通信？</summary><br><b>

通过本地套接字 `/var/run/docker.sock`
</b></details>

<details>
<summary>解释一下 Docker 互锁</summary><br><b>
</b></details>

<details>
<summary>什么是 Docker 仓库？</summary><br><b>
</b></details>

<details>
<summary>解释镜像层</summary><br><b>

一个 Docker 镜像是由一系列层组成的。每一层代表镜像中的一条指令 Containerfile/Dockerfile。除了最后一层之外的每一层都是只读的。
每一层只是与其之前的层的一组差异。这些层彼此堆叠。创建新容器时，您将在底层层之上添加一个新的可写层。该层通常称为“容器层”。对正在运行的容器所做的所有更改，例如写入新文件、修改现有文件和删除文件，都会写入这个薄的可写容器层。
容器和镜像之间的主要区别在于顶层可写层。所有添加新数据或修改现有数据的对容器的写入都存储在该可写层中。当容器被删除时，可写层也会被删除。底层镜像保持不变。
由于每个容器都有自己的可写容器层，并且所有更改都存储在该容器层中，因此多个容器可以共享对同一底层镜像的访问，但又拥有自己的数据状态。
</b></details>

<details>
<summary>您熟悉哪些与使用容器相关的最佳实践？</summary><br><b>
</b></details>

<details>
<summary>如何管理持久存储 Docker?</summary><br><b>
</b></details>

<details>
<summary>如何从容器内部连接到容器运行所在的主机的本地主机？</summary><br><b>
</b></details>

<details>
<summary>如何从以下位置复制文件 Docker 容器到主机，反之亦然？</summary><br><b>
</b></details>

<a name="questions-docker-compose"></a>
<a name="docker-compose"></a>
### Docker Compose

<details>
<summary>解释一下是什么 Docker 撰写及其用途</summary><br><b>

Compose 是一个用于定义和运行多容器的工具 Docker 应用程序。通过 Compose，您可以使用 YAML 文件来配置应用程序的服务。然后，使用单个命令，您可以根据配置创建并启动所有服务。

例如，您可以使用它来设置 ELK 堆栈中的服务是：elasticsearch、logstash 和 kibana。每个都在自己的容器中运行。<br>
一般来说，它对于运行由多个不同服务组成的应用程序很有用。它允许您将其作为一个部署的应用程序进行管理，而不是不同的多个单独的服务。
</b></details>

<details>
<summary>描述一下使用过程 Docker Compose</summary><br><br>

* 定义您想要在 docker-compose.yml 文件中一起运行的服务
* 运行 `docker-compose up` 运行服务
</b></details>

<details>
<summary>解释多阶段构建</summary><br><b>

多阶段构建允许您通过将构建过程分为多个阶段来生成更小的容器镜像。

举个例子，假设你有一个 Containerfile/Dockerfile 您首先构建应用程序然后运行它的位置。应用程序的整个构建过程可能会使用稍后运行应用程序时并不真正需要的包和库。此外，构建过程可能会产生不同的工件，而运行应用程序并不需要所有这些工件。

你如何处理这个问题？当然，一种选择是添加更多指令来删除所有不必要的内容，但是这种方法存在一些问题：
1. 您需要知道到底要删除什么，但这可能并不像您想象的那么简单
2. 您添加了并不真正需要的新层

更好的解决方案可能是使用多阶段构建，其中一个阶段（构建过程）将相关工件/输出传递到运行应用程序的阶段。
</b></details>

<details>
<summary>判断题：在多阶段构建中，可以在阶段之间复制工件</summary><br><b>

正确。这使我们最终能够生成更小的镜像。
</b></details>

<details>
<summary><code>.dockerignore</code> 是用来做什么的？</summary><br><b>

默认情况下， Docker 使用用作构建上下文的目录中的所有内容（所有文件和目录）。<br>
`.dockerignore` 用于从构建上下文中排除文件和目录
</b></details>

<a name="questions-networking"></a>
<a name="networking"></a>
### 网络

<details>
<summary>您熟悉哪些容器网络标准或架构？</summary><br><b>

CNM （容器网络模型）：
  * 需要分散的键值存储（例如 etcd 例如）用于存储网络配置
  * 使用者 Docker
CNI （容器网络接口）：
  * 网络配置应该在 JSON 格式
</b></details>

<a name="questions-docker-networking"></a>
<a name="docker-networking"></a>
### Docker 网络

<details>
<summary>什么网络规格 Docker 正在使用以及如何调用它的实现？</summary><br><b>

Docker 正在使用 CNM （容器网络模型）设计规范。<br>
实施 CNM 规格由 Docker 称为“libnetwork”。它写在 Go.
</b></details>

<details>
<summary>解释以下有关的块 CNM:

  * 网络 
  * 端点
  * 沙箱</summary><br><b>

  * 网络：交换机的软件实现。它们用于对端点集合进行分组和隔离。
  * 端点：虚拟网络接口。用于建立连接。
  * 沙箱：隔离的网络堆栈（接口、路由表、端口……）
</b></details>

<details>
<summary>判断题：如果您想将容器连接到多个网络，则需要多个端点</summary><br><b>

正确。端点只能连接到单个网络。
</b></details>

<details>
<summary>libnetwork 有哪些功能？</summary><br><b>

* 原生服务发现
* 基于入口的负载均衡器
* 网络控制平面和管理平面
</b></details>

<a name="questions-security"></a>
<a name="security"></a>
### 安全性

<details>
<summary>关于容器有哪些安全最佳实践？</summary><br><b>

  * 仅在容器中安装必要的包
  * 尽可能不要以 root 身份运行容器
  * 不要安装 Docker 守护进程unix套接字进入任何容器
  * 将卷和容器的文件系统设置为只读
  * DO NOT 运行容器 `--privilged` 旗帜
</b></details>

<details>
<summary>容器可能会导致内核恐慌并导致整个主机瘫痪。您可以采取哪些预防措施来避免这种特定情况？</summary><br><b>

  * 仅在容器中安装必要的包
  * 将卷和容器的文件系统设置为只读
  * DO NOT 运行容器 `--privilged` 旗帜
</b></details>

<a name="questions-docker-in-production"></a>
<a name="docker-in-production"></a>
### Docker 生产中

<details>
<summary>在生产中使用容器时，您遵循哪些最佳实践？</summary><br><b>

镜像：
  * 使用官方仓库中的镜像
  * 仅包含您要使用的包。没有别的了。
  * 指定一个标签 FROM 指示。不使用标签意味着您将始终提取最新的内容，该内容会随着时间的推移而发生变化，并可能会导致意外的结果。
  * 不要使用环境变量来共享Secret
  * 保持镜像小！ - 您希望它们仅包含应用程序成功运行所需的内容。没有别的了。
组件：
  * 组件之间的安全连接（例如客户端和服务器）
</b></details>

<details>
<summary>判断题：生产环境中建议让 Docker 客户端和服务端通过 HTTP socket 进行网络通信</summary><br><b>

错误。客户端和服务端之间不应通过明文 HTTP 通信，因为这不安全。更好的做法是强制 Docker daemon 只接受受 TLS 保护的网络连接。<br>
也就是说，Docker daemon 只接受由受信任 CA 签发证书的安全连接。
</b></details>

<details>
<summary>有哪些形式的自我修复选项可用于 Docker 容器？</summary><br><b>

重启策略。它允许您在某些事件发生后自动重新启动容器。
</b></details>

<details>
<summary>您熟悉哪些重启策略？</summary><br><b>

  * `always`：容器停止时重新启动，除非显式使用 `docker container stop`
  * `unless-stopped`：除非容器被手动停止，否则重新启动容器
  * `no`：任何时候都不要自动重启容器（默认策略）
  * `on-failure`：容器因错误退出时重启（退出码非 0）
</b></details>

<a name="questions-rootless-containers"></a>

<details>
<summary>解释无根容器</summary><br><b>

从历史上看，用户需要 root 权限才能运行容器。最基本的安全建议之一是为用户提供满足其需求的最低权限。

对于容器来说，这种情况已经存在很长一段时间了，而且今天仍然要从 docker.io 运行一些容器，您需要拥有 root 权限。
</b></details>

<details>
<summary>运行无根容器有缺点吗？</summary><br><b>

是的，可以找到完整列表 [这里](https://github.com/containers/podman/blob/main/rootless.md).

一些值得一提的：

  - 不绑定小于 1024 的端口
  - 没有镜像分享 CRI-O或其他root用户
  - 不支持运行 NFS 或并行文件系统 homerdirs
  - 某些命令不起作用（mount、podman stats、checkpoint、restore，...）
</b></details>

<details>
<summary>举一个从安全角度来看无根容器更安全的例子</summary><br><b>

在无根容器中，用户命名空间似乎以 root 身份运行，但事实并非如此，它是以常规用户权限执行的。如果攻击者设法以相同的权限从用户空间进入主机，那么他无能为力，因为这不是 root 权限，而不是使用 root 权限运行的容器。
</b></details>

<details>
<summary>运行容器时，通常会创建一个虚拟以太网设备。为此，需要 root 权限。那么如何在无根容器中对其进行管理呢？</summary><br><b>

无根容器中的网络通常由 Slirp 管理。Slirp 会在容器的 network namespace 中创建一个 TAP 设备，并将其作为默认路由。该设备的文件描述符会传递给运行在宿主机默认 namespace 中、并连接到互联网的父进程，从而实现容器内外通信。
</b></details>

<details>
<summary>运行容器时，通常会创建分层文件系统，但需要root权限。那么如何在无根容器中对其进行管理呢？</summary><br><b>

可以使用新的驱动程序在 User namespace 中创建文件系统，例如 FUSE-OverlayFS。
</b></details>

<a name="questions-oci"></a>
<a name="oci"></a>
### OCI

<details>
<summary>什么是OCI?</summary><br><b>

OCI （开放容器倡议）是 2015 年建立的开放治理，旨在标准化容器创建 - 主要是镜像格式和运行时。当时涉及的各方有很多，其中最突出的一个是 Docker.

O 发布的规格CI:

  - [镜像规格](https://github.com/opencontainers/image-spec)
  - [运行时规范](https://github.com/opencontainers/runtime-spec)
</b></details>

<details>
<summary>哪些操作OCI 基于容器必须支持吗？</summary><br><b>

创建、终止、删除、启动和查询状态。
</b></details>

<a name="questions-containers-scenarios"></a>
<a name="scenarios"></a>
### 应用场景

<details>
<summary>有一个正在运行的容器存在特定问题。您希望与团队成员共享该容器的镜像，并设置某些环境变量以进行调试。你会怎么做？</summary><br><b>

`podman commit` 可能是一个不错的选择。您可以创建正在运行的容器（存在问题）的新镜像，并与您的团队成员共享该新镜像。<br>

您可能想避免使用的内容：
  - 使用某物作为 `podman save/load` 因为它适用于镜像，而不是正在运行的容器（因此您将共享该镜像，但当您的团队成员使用它运行容器时可能不会重现该问题）
  - 修改 Containerfile/Dockerfile 因为您真的不想将用于调试的环境变量添加到您通常构建镜像的源中
</b></details>

<details>
<summary>您和您的团队从事同一个项目，但版本不同。对于每个版本，团队都会创建一个新的单独镜像。在这种情况下，您建议团队做出哪些改变？</summary><br><b>

使用标签。您可以使用镜像标签区分项目的不同版本。无需为项目的版本/发布创建整个单独的镜像。
</b></details>
