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
2. 使用构建镜像 Dockerfile 你写过
3. 您使用了哪些指令创建了新图层以及添加了哪些镜像元数据？
4. 有什么方法可以确认你对最后一个问题的答案？
5. 您可以缩小您创建的镜像的大小吗？
