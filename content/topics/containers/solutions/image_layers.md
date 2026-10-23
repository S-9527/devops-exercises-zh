<a name="layer-by-layer"></a>
## 一层一层

<a name="objective"></a>
### 目的

了解镜像层

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

1. 编写一个 Dockerfile。任何 Dockerfile！ :)（只要确保它是有效的）

```
FROM ubuntu
EXPOSE 212
ENV foo=bar
WORKDIR /tmp
RUN dd if=/dev/zero of=some_file bs=1024 count=0 seek=1024
RUN dd if=/dev/zero of=some_file bs=1024 count=0 seek=1024
RUN dd if=/dev/zero of=some_file bs=1024 count=0 seek=1024
```

2. 使用构建镜像 Dockerfile 你写过

`docker image build -t super_cool_app:latest .`

3. 您使用了哪些指令创建了新图层以及添加了哪些镜像元数据？

```
FROM, RUN -> new layer
EXPOSE, ENV, WORKDIR -> metadata
```

4. 有什么方法可以确认你对最后一个问题的答案？

你可以运行 `docker image history super_cool_app`。它会向您显示每条指令及其大小。通常创建新层的指令具有非零大小，但这不是您可以单独依赖的东西，因为某些运行命令的大小可能为零 `docker image history` 输出（例如 `ls -l`).

您还可以使用 `docker image inspect super_cool_appl` 并查看输出中“RootFS”下的层数是否与应创建新层的指令相匹配。

5. 您可以缩小您创建的镜像的大小吗？

是的，例如，使用所有 RUN 指令作为单个指令 RUN 指令这样：

`RUN dd if=/dev/zero of=some_file bs=1024 count=0 seek=1024 && dd if=/dev/zero of=some_file bs=1024 count=0 seek=1024 && dd if=/dev/zero of=some_file bs=1024 count=0 seek=1024`

在这种情况下，尺寸的变化可能不会很大，但在某些情况下，它会对镜像尺寸产生很大的影响。
