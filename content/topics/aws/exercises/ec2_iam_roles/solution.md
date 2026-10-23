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
 
<a name="solution"></a>
### 解决方案

<a name="console"></a>
#### 控制台

1. 进入 EC2 服务
2. 选择你要附加 IAM role 的 instance
3. 点击 “Actions” -> “Security” -> “Modify IAM role”
4. 选择附加了 `IAMReadOnlyAccess` policy 的 IAM role，并点击 “Save”
5. 此时在 instance 中运行 AWS 命令应该可以正常工作，例如 `aws iam list-users`
