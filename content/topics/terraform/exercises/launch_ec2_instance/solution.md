<a name="launch-ec2-instance"></a>
# 发射 EC2 实例

<a name="requirements"></a>
## 要求

* AWS 帐户

<a name="objectives"></a>
## 目标

1. 写 Terraform 用于启动的配置 EC2 实例
2. 运行命令以应用配置并创建 EC2 实例
3. 如果你再次跑步会发生什么 `terraform apply`?
4. 销毁您创建的实例 Terraform

<a name="solution"></a>
## 解决方案

```
mkdir exercise

cat << EOT >> main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-west-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}
EOT

terraform init
terraform validate
terraform plan

# You should see this line at the end: Plan: 1 to add, 0 to change, 0 to destroy

terraform apply -auto-approve

# You should see the following output:
# aws_instance.app_server: Creation complete after 49s [id=i-004651a9d4427d236

# Running 'terraform apply' again won't change anything as
# Terraform will compare actual infrastructure to your
# configuration and won't find any difference. You should see the following line:
# Apply complete! Resources: 0 added, 0 changed, 0 destroyed.

# Remove instance
terraform destroy -auto-approve

# Destroy complete! Resources: 1 destroyed.
```