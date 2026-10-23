<a name="aws---create-efs"></a>
## AWS - Create EFS
 
<a name="requirements"></a>
### 要求

两个 EC2 不同可用区的实例

<a name="objectives"></a>
### 目标

1. 创建一个 EFS 具有以下属性
  1. 将生命周期管理设置为 60 天
  2. 该模式应与扩展到高吞吐量和每秒 I/O 操作的用例相匹配
2. 安装 EFS 在你的两个 EC2 实例
 
<a name="solution"></a>
### 解决方案
 
1. Go 到 EFS 控制台
2. 点击“创建文件系统”
3. 在“定制”上创建
  1. 将生命周期管理设置为“自上次访问后 60 天”
  2. 将性能模式设置为“MAX I/O”由于“扩展到高水平吞吐量”的要求
  3. 点击“下一步”
  4. 选择要附加的安全组（如果没有，请创建一个并确保其具有允许的规则） NFS 流量），然后单击“下一步”，直到您能够查看并创建它
5. SSH 进入你的 EC2 实例
  1. 运行 `sudo yum install -y amazon-efs-utils`
  2. 运行 `mkdir efs`
  3. 如果你去你的 EFS 页面并点击“附加”，您可以看到有哪些方式可以挂载您的 EFS 在您的实例上
    1. 挂载命令 EFS 应该类似于 `sudo mount -t efs -o tls <EFS name>:/ efs` - copy and paste it in your ec2 instance's OS
