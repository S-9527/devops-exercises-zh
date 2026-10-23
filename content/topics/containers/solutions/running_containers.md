<a name="running-containers"></a>
## 运行容器

<a name="objective"></a>
### 目的

了解如何运行、停止和删除容器

<a name="requirements"></a>
### 要求

确保 Pod人或 Docker （或任何其他容器引擎）安装在您的系统上

<a name="instructions"></a>
### 使用说明

1. 使用最新的 nginx 镜像运行容器 - `podman container run nginx:latest`
2. 列出容器以确保容器正在运行 - `podman container ls`
3. 运行另一个容器，但这次使用最新的 ubuntu 并附加到容器的终端 - `podman container run -it ubuntu:latest /bin/bash`
4. 再次列出容器。有多少个容器正在运行？ - `podman container ls` -> 2
5. 停止容器 - WARNING：以下命令将停止主机上的所有容器： `podman stop $(podman container ls -q)` 或对于每个容器 `podman stop [container id/name]`
6. 移除容器 - WARNING：如果其他容器正在运行，以下命令也会删除其他容器： `podman rm $(podman container ls -q -a)` 或对于每个容器 `podman rm [container id/name]`
