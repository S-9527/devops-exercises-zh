<a name="iam-aws---create-a-user"></a>
## IAM AWS - Create a User

<a name="objectives"></a>
### 目标

您现在可能知道，不建议在以下环境中使用 root 帐户： AWS。因此，您将创建一个新帐户，您将定期使用该帐户作为管理员帐户。

1. 使用密码凭据创建用户
2. 将新创建的用户添加到名为“admin”的组，并为其附加名为“管理员访问”的策略
3. 确保用户有一个用密钥调用的标签 `Role` 和价值 `DevOps`


<a name="solution"></a>
### 解决方案

1. Go 到 AWS IAM 服务
2. 单击右侧菜单中的“用户”（位于“访问管理”下方）
3. 单击“添加用户”按钮
4. 输入用户名（例如 mario）
5. 选择凭证类型：“密码”
6. 将控制台密码设置为自定义，然后单击“下一步”
7. 点击“将用户添加到组”
8. 插入“admin”作为组名
9. 检查“AdministratorAccess”策略并单击“创建组”
10. 单击“下一步：标签”
11. 添加带有密钥的标签 `Role` 和价值 `DevOps`
12. 单击“审核”，然后单击“创建用户”创建

13. ### 解决方案使用 Terraform
    
```
 
resource "aws_iam_group_membership" "team" {
  name = "tf-testing-group-membership"

  users = [
    aws_iam_user.newuser.name,

  ]

  group = aws_iam_group.admin.name
}

resource "aws_iam_group_policy_attachment" "test-attach" {
  group      = aws_iam_group.admin.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
resource "aws_iam_group" "admin" {
  name = "admin"
}

resource "aws_iam_user" "newuser" {
  name = "newuser"
  path = "/system/"

  tags = {
    Role = "DevOps"
  }
}
```

