#!/bin/bash

# 始终写清脚本详情：版本、作者、用途、触发事件等。

###
# Author: Adarsh Rawat
# Version: 1.0.0
# Objective: 自动通知 S3 存储桶中新上传或新创建的对象。
###

# 调试脚本执行过程
set -x

# 以下命令均为 AWS CLI 命令 | abhishek veermalla day 4-5 devops

# 将 AWS 账号 ID 保存到变量中
aws_account_id=$(aws sts get-caller-identity --query 'Account' --output text)

# 输出变量中的账号 ID
echo "AWS 账号 ID: $aws_account_id"

# 设置 AWS 区域、存储桶名称和其他变量
aws_region="us-east-1" 
aws_bucket="s3-lambda-event-trigger-bucket"
aws_lambda="s3-lambda-function-1"
aws_role="s3-lambda-sns"
email_address="adarshrawat8304@gmail.com"

# 为项目创建 IAM 角色
role_response=$(aws iam create-role --role-name s3-lambda-sns --assume-role-policy-document '{
  "Version": "2012-10-17",
  "Statement": [{
    "Action": "sts:AssumeRole",
    "Effect": "Allow",
    "Principal": {
      "Service": [
        "lambda.amazonaws.com",
        "s3.amazonaws.com",
        "sns.amazonaws.com"
      ]
    }
  }]
}')

# 使用 jq 解析刚创建的角色 JSON

# 从 JSON 响应中提取角色 ARN 并保存到变量中
role_arn=$(echo "$role_response" | jq -r '.Role.Arn')

# 输出角色 ARN
echo "角色 ARN: $role_arn"

# 为角色附加权限
aws iam attach-role-policy --role-name $aws_role --policy-arn arn:aws:iam::aws:policy/AWSLambda_FullAccess
aws iam attach-role-policy --role-name $aws_role --policy-arn arn:aws:iam::aws:policy/AmazonSNSFullAccess

# 创建 S3 存储桶并将输出保存到变量中
bucket_output=$(aws s3api create-bucket --bucket "$aws_bucket" --region "$aws_region")

# 输出变量中的创建结果
echo "存储桶输出: $bucket_output"

# 将文件上传到存储桶
aws s3 cp ./sample.png s3://"$aws_bucket"/sample.png

# 创建用于上传 Lambda 函数的 zip 文件
zip -r s3-lambda.zip ./s3-lambda

sleep 5

# 创建 Lambda 函数
aws lambda create-function \
  --region $aws_region \
  --function $aws_lambda \
  --runtime "python3.8" \
  --handler "s3-lambda/s3-lambda.lambda_handler" \
  --memory-size 128 \
  --timeout 30 \
  --role "arn:aws:iam::$aws_account_id:role/$aws_role" \
  --zip-file "fileb://./s3-lambda.zip"

# 添加允许 S3 存储桶调用 Lambda 的权限
LambdaFunctionArn="arn:aws:lambda:us-east-1:$aws_account_id:function:s3-lambda"
aws s3api put-bucket-notification-configuration \
  --region "$aws_region" \
  --bucket "$aws_bucket" \
  --notification-configuration '{
    "LambdaFunctionConfigurations": [{
        "LambdaFunctionArn": "'"$LambdaFunctionArn"'",
        "Events": ["s3:ObjectCreated:*"]
    }]
}'

aws s3api put-bucket-notification-configuration \
  --region "$aws_region" \
  --bucket "$aws_bucket" \
  --notification-configuration '{
    "LambdaFunctionConfigurations": [{
        "LambdaFunctionArn": "'"$LambdaFunctionArn"'",
        "Events": ["s3:ObjectCreated:*"]
    }]
}'

# 创建 SNS 主题并将主题 ARN 保存到变量中
topic_arn=$(aws sns create-topic --name s3-lambda-sns --output json | jq -r '.TopicArn')

# 输出主题 ARN
echo "SNS 主题 ARN: $topic_arn"

# 使用 Lambda 函数触发 SNS 主题

# 使用 Lambda 函数添加 SNS 主题
aws sns subscribe \
  --topic-arn "$topic_arn" \
  --protocol email \
  --notification-endpoint "$email_address"

# 发布 SNS 消息
aws sns publish \
  --topic-arn "$topic_arn" \
  --subject "S3 存储桶中创建了新对象" \
  --message "你好，一个新的数据对象刚刚传送到 S3 存储桶 $aws_bucket" 
