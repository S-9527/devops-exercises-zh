<a name="aws---create-a-role"></a>
## AWS - Create a Role

<a name="objectives"></a>
### 目标

创建基本角色提供 EC2 服务全面 IAM 访问权限。<br>
最后，从 CLI （或云Shell) 用于验证角色是否已创建的命令。

<a name="solution"></a>
### 解决方案

1. Go 到 AWS 控制台-> IAM
2. 单击左侧菜单中的“访问管理”-> 角色
3. 点击“创建角色”
3. 选择“AWS 服务”作为受信任实体的类型，然后选择“EC2” 作为一个用例。点击“下一步”
4. 在权限页面中，选中“IAMFullAccess”，然后单击“下一步”，直到进入“审核”页面
5. 在“审核”页面中，为角色命名（例如 IAM全面访问EC2），提供简短描述并单击“创建角色”
6. `aws iam list-roles` 将列出帐户中的所有角色，包括我们刚刚创建的角色。
