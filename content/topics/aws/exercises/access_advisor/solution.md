<a name="aws-iam---access-advisor"></a>
## AWS IAM - Access Advisor

<a name="objectives"></a>
### 目标

进入 Access Advisor，并回答关于其中一位用户的以下问题：

1. 是否有该用户从未访问过的服务？
2. 用户最近访问的服务是什么？
3. Access Advisor 的用途/用途是什么？

<a name="solution"></a>
### 解决方案 

1. Go 到 AWS IAM 服务并单击“访问管理”下的“用户”
2. 单击其中一位用户
3. 单击“访问顾问”选项卡
4. 检查哪些服务最后被访问过，哪些服务从未被访问过

访问顾问可以很好地评估是否存在用户未访问的服务（例如从不访问或不经常访问）。这有助于决定是否应撤销或修改某些权限。
