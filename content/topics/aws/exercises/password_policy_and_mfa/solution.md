<a name="aws-iam---password-policy-mfa"></a>
## AWS IAM - Password Policy & MFA

注意：除非你清楚自己在做什么，并了解这些更改会对账号产生什么影响，否则不要执行此练习。

<a name="objectives"></a>
### 目标

1. 使用以下设置创建密码策略：
  1. 至少 8 个字符
  2. 至少一个数字
  3. 防止密码重复使用

2. 然后启用 MFA 对于帐户。

<a name="solution"></a>
### 解决方案

密码策略：

1. 进入 AWS IAM 服务
2. 点击“访问管理”下的“帐户设置”
3. 点击“更改密码策略”
  1. 勾选“强制执行最小密码长度”并将其设置为 8 个字符
  1. 勾选“需要至少一个号码”
  1. 勾选“防止密码重复使用”
4. 点击“保存更改”

MFA:

1. 点击账户名称
2. 点击“我的安全凭证”
3. 展开“多重身份验证（MFA）”，然后点击“激活 MFA"
4. 选择其中一台设备
5. 按照说明进行设置，然后单击“分配” MFA"

6. ### 解决方案使用 Terraform:

```
resource "aws_iam_account_password_policy" "strict" {
  minimum_password_length        = 8
  require_numbers                = true
  allow_users_to_change_password = true
  password_reuse_prevention      = 1
}
```

 **注意：** 您不能添加 MFA 通过 terraform，你必须在 GUI.
