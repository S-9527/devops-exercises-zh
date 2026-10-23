import boto3
import json


def lambda_handler(event, context):
    # 查看传入的事件内容
    print(event)

    # 从 S3 事件触发器中提取相关信息
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    object_key = event['Records'][0]['s3']['object']['key']

    # 对上传的文件执行所需操作
    print(f"文件 '{object_key}' 已上传到存储桶 '{bucket_name}'")

    # 示例：通过 SNS 发送通知
    sns_client = boto3.client('sns')
    topic_arn = 'arn:aws:sns:us-east-1:<account-id>:s3-lambda-sns'
    sns_client.publish(
        TopicArn=topic_arn,
        Subject='S3 对象已创建 !!',
        Message=f"文件 '{object_key}' 已上传到存储桶 '{bucket_name}'"
    )

    # 示例：触发另一个 Lambda 函数
    # lambda_client = boto3.client('lambda')
    # target_function_name = 'my-another-lambda-function'
    # lambda_client.invoke(
    #     FunctionName=target_function_name,
    #     InvocationType='Event',
    #     Payload=json.dumps({'bucket_name': bucket_name, 'object_key': object_key})
    # )
    # 可用于排队等目标，类似 Netflix 的触发流程

    return {
        'statusCode': 200,
        'body': json.dumps("Lambda 函数执行成功 !!")
    }
