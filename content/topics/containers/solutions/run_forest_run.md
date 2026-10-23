<a name="run-forest-run"></a>
## 奔跑，森林，奔跑！

<a name="objective"></a>
### 目的

了解重启策略的作用以及如何使用它们

<a name="requirements"></a>
### 要求

确保 Docker 已安装在您的系统上并且服务已启动

```
# Fedora/RHEL/CentOS
rpm -qa | grep docker
systemctl status docker
```

<a name="instructions"></a>
### 使用说明

1. 运行具有以下属性的容器：
  * 镜像：alpine
  * 名称：森林
  * 重启策略：始终
  * 执行命令：sleep 15

`docker run --restart always --name forest alpine sleep 15`

2. 运行 `docker container ls` - Is the container running? What about after 15 seconds, is it still running? why?


即使完成运行后它仍然运行 `sleep 15` 因为重启策略是“始终”。这意味着 Docker 即使它存在，也会继续重新启动**相同的**容器。


3. 那么我们如何才能停止容器的运行呢？

当使用命令停止容器时，重新启动策略不适用 `docker container stop`

4. 删除您创建的容器

```
docker container stop forest
docker container rm forest
```

5. 再次运行相同的容器，但这次使用 `sleep 600` 并验证它运行

```
docker run --restart always --name forest alpine sleep 600
docker container ls
```

6. 重新启动 Docker 服务。容器还在运行吗？为什么？

```
sudo systemctl restart docker
```
是的，由于重启策略，它仍在运行 `always` 这意味着 Docker 将始终在容器存在或停止后调出容器（不使用 stop 命令）。

8. 将策略更新为 `unless-stopped`

`docker update --restart unless-stopped forest`

9. 停止容器

`docker container stop forest`

10. 重新启动 Docker 服务。容器正在运行吗？为什么？

```
sudo systemctl restart docker
```
不，容器没有运行。这是因为我们将策略更改为 `unless-stopped` 除非容器处于停止状态，否则它将运行容器。由于在重新启动之前我们停止了容器， Docker 重启后没有继续运行。
