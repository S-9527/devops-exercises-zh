<a name="aws-ec2---iam-roles"></a>
## AWS EC2 - IAM Role
 
<a name="requirements"></a>
### 要求
 
1. 一个正在运行、且尚未附加 IAM role 的 EC2 instance（因此连接到该 instance 后运行 AWS 命令会失败）
2. 一个附加了 `IAMReadOnlyAccess` policy 的 IAM role
 
<a name="objectives"></a>
### 目标

1. 将附加了 `IAMReadOnlyAccess` policy 的 IAM role 关联到 EC2 instance（如果该 role 不存在，则先创建它）
2. 验证你可以在该 instance 中运行 AWS 命令
