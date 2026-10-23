<a name="hello-function---solution"></a>
## Hello Function - 解决方案

<a name="exercise"></a>
### 练习

创建一个基本的 AWS Lambda function：给定一个名称时，返回 `Hello <NAME>`。

<a name="solution"></a>
### 解决方案

<a name="define-a-function"></a>
#### 定义函数

1. 进入 Lambda console 并点击 `Create function`
  1. 为该函数命名，例如 `BasicFunction`
  2. 选择 `Python3` 运行时
  3. 接下来处理 function 的权限。可以选择已有 IAM role，也可以创建新 role 并将其附加到 function。这里选择 “Create a new role from AWS policy templates”
  4. 在 “Policy Templates” 中选择 “Simple Microservice Permissions”

1. 接下来，您应该会看到一个文本编辑器，您将在其中插入类似于以下内容的代码

<a name="functions-code"></a>
#### 函数的代码
```
import json


def lambda_handler(event, context):
    firstName = event['name']
    return 'Hello ' + firstName
```
2. 点击 `Create function`

<a name="define-a-test"></a>
#### 定义测试

1. 现在让我们测试一下该功能。单击“测试”。
2. 选择“创建新的测试事件”
3. 将“事件名称”设置为您想要的任何名称。例如“测试事件”
4. 提供测试密钥

```
{
  "name": 'Spyro'
}
```
5. 点击“创建”

<a name="test-the-function"></a>
#### 测试功能

1. 选择您创建的测试事件（`TestEvent`)
2. 单击 `Test` 按钮
3. 您应该看到类似的内容 `Execution result: succeeded`
4. 如果你要去 AWS CloudWatch，您应该看到相关的日志流 
