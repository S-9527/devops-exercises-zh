<a name="rename-s3-bucket"></a>
# 重命名 S3 桶

<a name="requirements"></a>
## 要求

* 现有的 S3 跟踪的存储桶 Terraform.
如果没有，您可以使用以下块并运行 `terraform apply`:

```terraform
resource "aws_s3_bucket" "some_bucket" {
    bucket = "some-old-bucket"
}
```

注意：自 S3 存储桶是全局唯一的，您可能需要重命名该存储桶，因为其他人可能已经这样命名了。

<a name="objectives"></a>
## 目标

1. 重命名现有的 S3 存储桶并确保它仍然被跟踪 Terraform

<a name="solution"></a>
## 解决方案

点击 [在这里查看解决方案](solution.md)
