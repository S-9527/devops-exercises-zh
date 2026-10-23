<a name="local-provider"></a>
# 本地提供商

<a name="objectives"></a>
## 目标

了解如何使用和运行 Terraform 基本命令

1. 创建一个名为“my_first_run”的目录
2. 在目录内创建一个名为“main.tf”的文件，其中包含以下内容

```terraform
resource "local_file" "mario_local_file" {
    content  = "It's a me, Mario!"
    filename = "/tmp/who_is_it.txt"
}
```
3. 运行 `terraform init`。它做了什么？
4. 运行 `terraform plan`。什么 Terraform 要去表演吗？
5. 最后，运行“terraform apply”并验证文件是否已创建

<a name="solution"></a>
## 解决方案

```sh
# Create a directory
mkdir my_first_run && cd my_first_run

# Create the file 'main.tf'
cat << EOT >>  main.tf
resource "local_file" "mario_local_file" {
    content  = "It's a me, Mario!"
    filename = "/tmp/who_is_it.txt"
}
EOT

# Run 'terraform init'
terraform init
# Running 'ls -la' you'll it created '.terraform' and '.terraform.lock.hcl'
# In addition, it initialized (downloaded and installed) the relevant provider plugins. In this case, the "hashicorp/local"

# Run 'terraform plan'
terraform plan
# It shows what Terraform is going to perform once you'll run 'terraform apply'

<< terraform_plan_output
Terraform will perform the following actions:

  # local_file.mario_local_file will be created
  + resource "local_file" "mario_local_file" {
      + content              = "It's a me, Mario!"
      + directory_permission = "0777"
      + file_permission      = "0777"
      + filename             = "/tmp/who_is_it.txt"
      + id                   = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.
terraform_plan_output

# Apply main.tf (it's better to run without -auto-approve if you are new to Terraform)
terraform apply -auto-approve

ls /tmp/who_is_it.txt
# /tmp/who_is_it.txt
```