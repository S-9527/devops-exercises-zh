<a name="creating-custom-vpc-and-subnets-with-terraform"></a>
# 创建自定义 VPC 和子网 Terraform


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



```sh
# Create a directory for the Terraform configuration
mkdir vpc_subnet_creation && cd vpc_subnet_creation 
```

```sh
# Create the main.tf file with the VPC and subnets configuration
touch main.tf
```

```terraform
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "your-region" # e.g., ap-south-1
}

resource "aws_vpc" "my_custom_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "my_custom_vpc_made_with_terraform"
  }
}

resource "aws_subnet" "Subnet_A" {
  cidr_block       = "10.0.0.0/20"
  vpc_id            = aws_vpc.my_custom_vpc.id
  availability_zone = "your-availability-zone-a" # e.g., ap-south-1a
  tags = {
    "Name" = "Subnet A"
  }
}
resource "aws_subnet" "Subnet_B" {
  cidr_block       = "10.0.16.0/20"
  vpc_id            = aws_vpc.my_custom_vpc.id
  availability_zone = "your-availability-zone-b" # e.g., ap-south-1b
  tags = {
    "Name" = "Subnet B"
  }
}
```

```sh
# Initialize Terraform to download the AWS provider
terraform init
```

```sh
# Apply the Terraform configuration to create the VPC and subnets
terraform apply -auto-approve
```



