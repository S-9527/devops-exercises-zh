<a name="assign-roles"></a>
# 分配角色

<a name="objectives"></a>
## 目标

1. 将以下角色分配给组织中的成员
   1. 计算存储管理员
   2. 计算网络管理员
   3. 计算安全管理员
2. 验证角色已分配

<a name="solution"></a>
## 解决方案

<a name="console"></a>
### 控制台

1. Go 到 IAM & 管理
2. 点击 IAM 然后点击“添加”按钮
   1. 选择要添加角色的会员帐户
   2. 在选择角色下，在“目标”下搜索指定角色，然后单击“保存”
2. 该成员现在应该能够访问计算引擎 API 并查看那里的资源。

<a name="terraform"></a>
### Terraform

点击 [这里](main.tf) 查看 Terraform 主.tf 文件