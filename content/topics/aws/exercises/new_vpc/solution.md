<a name="my-first-vpc"></a>
# 我的第一次 VPC

<a name="objectives"></a>
## 目标

1. 创建一个新的 VPC
   1.  它应该有一个 CI容灾最少支持6万台主机
   2.  它应该命名为“exercise-vpc”

<a name="solution"></a>
## 解决方案

<a name="console"></a>
### 控制台

1. 在“虚拟私有云”下单击“您的 VPC”
2. 点击“创建 VPC"
3. 插入名称 - “exercise-vpc”
4. 插入 IPv4 CIDR块：10.0.0.0/16
5. 将“租赁”保留为默认值
6. 点击“创建 VPC"

<a name="terraform"></a>
### Terraform

点击 [这里](terraform/main.tf) 查看解决方案

<a name="pulumi---python"></a>
### 普鲁米 - Python

点击 [这里](pulumi/__main__.py) 查看解决方案

<a name="verify-solution"></a>
### 验证解决方案

要验证您是否已创建 VPC，你可以运行： `aws ec2 describe-vpcs -filters Name=tag:Name,Values=exercise-vpc`