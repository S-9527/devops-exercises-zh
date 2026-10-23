<a name="aws-auto-scaling-groups---basics"></a>
## AWS Auto Scaling 组 - 基础知识

<a name="requirements"></a>
### 要求

零 EC2 实例运行

<a name="objectives"></a>
### 目标

A. 为Web服务器创建一个具有以下属性的伸缩组：
  * Amazon Linux 2 AMI
  * t2.micro 作为实例类型
  * 用户数据：
```
yum install -y httpd
systemctl start httpd
systemctl enable httpd
```

B. 创建弹性伸缩组后是否创建了新实例？有多少？为什么？
C. 将所需容量更改为 2。它是否启动了更多实例？
D. 将所需容量改回 1。此操作的结果是什么？
