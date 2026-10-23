<a name="ec2---create-an-ami"></a>
## EC2 - Create an AMI

<a name="requirements"></a>
### 要求

一跑 EC2 实例

<a name="objectives"></a>
### 目标

1. 对实例的操作系统进行一些更改（创建文件、修改文件……）
2. 创建一个 AMI 运行时的图像 EC2 实例
3. 使用自定义启动新实例 AMI 你已经创建了

<a name="solution"></a>
### 解决方案

1. 连接到您的 EC2 实例（ssh、控制台、...）
2. 对操作系统进行一些更改
3. Go 到 EC2 服务
4. 右键单击您进行了一些更改的实例 -> 图像和模板 -> 创建图像
5. 为图像命名并单击“创建图像”
6. 启动新实例并选择您刚刚创建的映像
