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
