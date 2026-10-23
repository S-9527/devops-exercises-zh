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
5. 最后，运行 `terraform apply` 并验证文件是否已创建

<a name="solution"></a>
## 解决方案

点击 [在这里查看解决方案](solution.md)
