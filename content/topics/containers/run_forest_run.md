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
2. 运行 `docker container ls` - Is the container running? What about after 15 seconds, is it still running? why?
3. 那么我们如何才能停止容器的运行呢？
4. 删除您创建的容器
5. 再次运行相同的容器，但这次使用 `sleep 600` 并验证它运行
6. 重新启动 Docker 服务。容器还在运行吗？为什么？
8. 将策略更新为 `unless-stopped`
9. 停止容器
10. 重新启动 Docker 服务。容器正在运行吗？为什么？
