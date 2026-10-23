<a name="working-with-images---solution"></a>
## 处理镜像 - 解决方案

<a name="objective"></a>
### 目的

了解如何使用容器镜像

<a name="requirements"></a>
### 要求

确保你的系统中已安装 Podman、Docker 或其他容器引擎。

<a name="instructions"></a>
### 使用说明

1. 列出您环境中的容器镜像 - `podman image ls`
2. 拉取最新的 ubuntu 镜像 - `podman image pull ubuntu:latest`
3. 使用您刚刚拉取的镜像运行一个容器 - `podman container run -it ubuntu:latest /bin/bash`
4. 删除镜像。有效吗？ - 否。有一个正在运行的容器正在使用我们尝试删除的镜像
5. 采取一切必要措施来删除镜像 - `podman rm <container_id>; podman image rm ubuntu`
