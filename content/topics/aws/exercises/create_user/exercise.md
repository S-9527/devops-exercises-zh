<a name="iam-aws---create-a-user"></a>
## IAM AWS - Create a User

<a name="objectives"></a>
### 目标

您现在可能知道，不建议在以下环境中使用 root 帐户： AWS。因此，您将创建一个新帐户，您将定期使用该帐户作为管理员帐户。

1. 使用密码凭据创建用户
2. 将新创建的用户添加到名为“admin”的组，并为其附加名为“管理员访问”的策略
3. 确保用户有一个用密钥调用的标签 `Role` 和价值 `DevOps`
