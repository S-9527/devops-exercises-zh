<a name="aws-vpc---subnets"></a>
# AWS VPC - Subnets

<a name="requirements"></a>
## 要求

1. 新创建的单曲 VPC
2. 具有两个以上可用区的区域

<a name="objectives"></a>
## 目标

1. 在新创建的子网中创建子网 VPC
   1. CIDR：10.0.0.0/24
   1. 名称：新子网1
2. 创建额外的子网
   1. CIDR：10.0.1.0/24
   2. 名称：新子网2
   3. 不同 AZ 与之前的子网相比
3. 创建额外的子网
   4. CIDR：10.0.2.0/24
   5. 名称：NewSubnet3
   6. 不同 AZ 与之前的子网相比

<a name="solution"></a>
## 解决方案

<a name="console"></a>
### 控制台

1. 单击“虚拟私有云”下的“子网”
2. 确保您按新创建的进行过滤 VPC （看不到所有其他子网 VPCs）。您可以在左侧菜单中执行此操作
3. 点击“创建子网”
4. 选择你新创建的 VPC
5. 将子网名称设置为“NewSubnet1”
6. 选择 AZ
7. 套装 CI10.0.0.0/24 的灾难恢复
8. 单击“添加新子网”
9. 将子网名称设置为“NewSubnet2”
10. 选择不同的 AZ
11. 套装 CI10.0.1.0/24 的灾难恢复
12. 单击“添加新子网”
13. 将子网名称设置为“NewSubnet3”
14. 选择不同的 AZ
15. 套装 CI10.0.2.0/24 的灾难恢复

<a name="terraform"></a>
### Terraform

点击 [这里](terraform/main.tf) 查看解决方案

<a name="pulumi---python"></a>
### 普鲁米 - Python

点击 [这里](pulumi/__main__.py) 查看解决方案