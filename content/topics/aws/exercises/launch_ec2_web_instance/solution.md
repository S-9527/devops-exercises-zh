<a name="aws---launch-ec2-web-instance"></a>
## AWS - Launch EC2 网络实例

<a name="objectives"></a>
### 目标

启动一个 EC2 具有以下要求的实例：

1. Amazon Linux 2 张图片
2. 实例类型：选择具有 1 个 vCPU 和 1 GiB 内存的实例
3. 实例终止时应删除实例存储
4. 当实例启动时，它应该安装：
  1. 安装httpd包
  2. 启动httpd服务
  3. 确保 /var/www/html/index.html 的内容是 `I made it! This is is awesome!`
5. 它应具有标签：“类型：web”，实例名称应为“web-1”
6. HTTP 应从任何地方接受流量（端口 80）

<a name="solution"></a>
### 解决方案

1. 选择离您较近的地区 
2. Go 到 EC2 服务
3. 单击菜单中的“实例”，然后单击“启动实例”
4. 选择图片：Amazon Linux 2
5. 选择实例类型：t2.micro 
6. 确保在存储部分中选中“终止时删除”
7. 在“用户数据”字段下，以下内容：

```
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>I made it! This is is awesome!</h1>" > /var/www/html/index.html
```
8. 添加具有以下键和值的标签：
  * 键“Type”和值“web”
  * 键“Name”和值“web-1”
9. 在安全组部分，添加一条接受规则 HTTP 交通（TCP) 从任何地方在端口 80 上
10. 点击“审核”，审核后点击“启动”。
11. 如果您没有密钥对，请创建一个并下载。

12. ### 解决方案使用 Terraform

```
 
provider "aws" {
  region = "us-east-1" // Or your desired region
}

resource "aws_instance" "web_server" {
  ami           = "ami-12345678" // Replace with the correct AMI for Amazon Linux 2
  instance_type = "t2.micro" // Or any instance type with 1 vCPU and 1 GiB memory

  tags = {
    Name = "web-1"
    Type = "web"
  }

  root_block_device {
    volume_size           = 8 // Or any desired size
    delete_on_termination = true
  }

  provisioner "remote-exec" {
    inline = [
      "sudo yum update -y",
      "sudo yum install -y httpd",
      "sudo systemctl start httpd",
      "sudo bash -c 'echo \"I made it! This is awesome!\" > /var/www/html/index.html'",
      "sudo systemctl enable httpd"
    ]

    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file("~/.ssh/your_private_key.pem") // Replace with the path to your private key
      host        = self.public_ip
    }
  }

  security_group_ids = [aws_security_group.web_sg.id]
}

resource "aws_security_group" "web_sg" {
  name        = "web_sg"
  description = "Security group for web server"
  
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```