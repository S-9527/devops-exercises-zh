<a name="aws-ec2---security-groups"></a>
## AWS EC2 - 安全组

<a name="requirements"></a>
### 要求 

对于本练习，您需要：

1. EC2 带有 Web 应用程序的实例
2. 安全组入站规则允许 HTTP 交通

<a name="objectives"></a>
### 目标

1. 列出您所使用区域的账户中的安全组
2. 删除 HTTP 入站流量规则
3. 您仍然可以访问该应用程序吗？你看到/得到什么？
4. 添加回规则
5. 您现在可以访问该应用程序吗？

<a name="solution"></a>
### 解决方案

<a name="console"></a>
#### 控制台

1. Go 到 EC2 服务->点击“网络和安全”下的“安全组”
   您应该至少看到一个安全组。其中之一称为“默认”
2. 单击安全组 HTTP 规则，然后单击“编辑入站规则”。
   删除 HTTP 相关规则并点击“保存规则”
3. 不。有一个超时时间，因为我们删除了允许的规则 HTTP 交通。
4. 点击安全组->编辑入站规则，添加以下规则：
  * 类型： HTTP
  * 端口范围：80
  * 来源：任何地方 -> 0.0.0.0/0
5. 是的

<a name="cli"></a>
#### CLI

1. `aws ec2 describe-security-groups` -> 默认情况下，新帐户中有一个名为“default”的安全组
2. 删除规则：

```
aws ec2 revoke-security-group-ingress \
    --group-name someHTTPSecurityGroup
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0
```
3. 不。有一个超时时间，因为我们删除了允许的规则 HTTP 交通。
4. 添加我们删除的规则：

```
aws ec2 authorize-security-group-ingress \
    --group-name someHTTPSecurityGroup
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0
```
5. 是的
