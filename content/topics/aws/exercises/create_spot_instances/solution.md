<a name="aws-ec2---spot-instances"></a>
## AWS EC2 - Spot Instances                                                                                                                                                  
<a name="objectives"></a>
### 目标             

A. 使用具有以下属性的 Spot 请求创建两个 Spot 实例：

* Amazon Linux 2 AMI
* 2 个实例作为目标容量（在任何给定时间点），每个实例有 2 个 vCPU 和 3 GiB RAM

B. 使用 Amazon 创建单个 Spot 实例 Linux 2 和 t2.micro

<a name="solution"></a>
### 解决方案               

A. 创建 Spot 队列：

1. Go 到 EC2 服务
2. 点击“现货请求”
3. 单击“请求 Spot 实例”按钮
4. 设置以下参数值：
  * Amazon Linux 2 AMI
  * 总目标容量 -> 2
  * 勾选“维持目标容量”
  * vCPU：2
  * 内存：3 GiB RAM
5. 单击“启动”

B. 创建单个 Spot 实例：

1. Go 到 EC2 服务
2. 点击“实例”
3. 单击“启动实例”
4. 选择“Amazon Linux 2 AMI”并点击“下一步”
5. 选择 t2.micro 并单击“下一步：配置实例详细信息”
6. 选择“请求竞价型实例” 
7. 将最高价格设置为高于当前价格
8. 点击“审核并启动”
