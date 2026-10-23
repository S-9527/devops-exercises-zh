<a name="creating-custom-vpc-and-subnets-with-terraform"></a>
# 创建自定义 VPC 和子网 Terraform

<a name="requirements"></a>
## 要求
* 现有的 AWS 具有创建权限的帐户 VPCs 和子网。
* Terraform 安装在您的本地计算机上。
* AWS CLI 使用您的凭据进行配置。


<a name="objectives"></a>
## 目标
1. 创建自定义 VPC 与指定的 CIDR 块。
    For example, you can use `10.0.0.0/16`.
2. 内创建两个子网 VPC，每个都有不同的 CIDR 块。
    For example, you can use `10.0.0.0/20` for the first subnet and `10.0.16.0/20` for the second subnet.

    Both subnets should be in different availability zones to ensure high availability.
3. 确保 VPC 子网由以下方式跟踪 Terraform.

<a name="solution"></a>
## 解决方案
点击 [在这里查看解决方案](solution.md)
