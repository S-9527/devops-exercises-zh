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

<a name="solution"></a>
### 解决方案

<a name="console"></a>
#### 控制台

A.
1. Go 到 EC2 服务
2. 点击“Auto Scaling”下的“Auto Scaling Groups”
3. 点击“创建 Auto Scaling 组”
4. 插入姓名
5. 点击“创建启动模板”
  1. 插入模板的名称和版本
  2. 选择一个 AMI 使用（Amazon Linux 2)
  3. 选择 t2.micro 实例类型
  4. 选择密钥对
  5. 附加安全组
  6. 在“高级”下插入用户数据
  7. 点击“创建”
6. 选择您刚刚创建的启动模板，然后单击“下一步”
7. 选择“坚持启动模板”
8. 选择要启动的可用区，然后单击“下一步”
9. 将其链接到 ALB （如果没有，请创建一个）
10. 马克 ELB 除了健康检查 EC2。点击“下一步”，直到到达审核页面，点击“创建自动伸缩组”

B. 启动一个实例以满足我们创建的自动伸缩组的条件。它只发布一个的原因是“所需容量”设置为 1。
C. 转到您的Auto Scaling组 -> 详细信息 -> 编辑 -> “2 个所需容量”来更改它。如果只有一个实例正在运行，这应该创建另一个实例
D. 将绝望容量减少回 1 将终止其中一个实例（假设 2 个实例正在运行）。
