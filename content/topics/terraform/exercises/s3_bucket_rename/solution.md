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

```sh
# A bucket name is immutable in AWS so we'll have to create a new bucket
aws s3 mb s3://some-new-bucket-123

# Sync old bucket to new bucket
aws s3 sync s3://some-old-bucket s3://some-new-bucket-123

# Option 1 (remove and import)

## Remove the old bucket from Terraform's state
terraform state rm aws_s3_bucket.some_bucket

## Import new bucket to Terraform's state
terraform import aws_s3_bucket.some_bucket some-new-bucket-123

: '
aws_s3_bucket.some_bucket: Refreshing state... [id=some-new-bucket-123]

Import successful!
The resources that were imported are shown above. These resources are now in
your Terraform state and will henceforth be managed by Terraform.
'

# Option 2 (move)

## Move the old bucket from Terraform's state to the new one
terraform state mv aws_s3_bucket.some_bucket some-new-bucket-123

: '
Move "aws_s3_bucket.some_bucket" to "aws_s3_bucket.some-new-bucket-123"
Successfully moved 1 object(s).
'

# Modify Terraform file

# Modify the Terraform definition to include the new name
# resource "aws_s3_bucket" "some_bucket" {
#    bucket = "some-new-bucket-123"
# }

# Remove old bucket
aws s3 rm s3://some-old-bucket --recursive
aws s3 rb s3://some-old-bucket
```
