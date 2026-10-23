<a name="url-function"></a>
## URL Function

创建一个基本的 AWS Lambda function：当你在浏览器中访问 function URL 时触发。

<a name="solution"></a>
### 解决方案

<a name="define-a-function"></a>
#### 定义函数

1. 进入 Lambda console 并点击 `Create function`
  1. 为该函数命名，例如 `urlFunction`
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

<a name="define-a-trigger"></a>
#### 定义触发器

我们将定义一个触发器，以便在插入时触发该函数 URL 在浏览器中

1. Go 到“API 网关控制台”，然后单击“新建 API 选项”
2. 插入 API 名称、描述，然后单击“创建”
3. 单击操作 -> 创建资源
4. 输入资源名称和路径（例如路径可以是/hello），然后单击“创建资源”
5. 选择我们创建的资源，然后单击“创建方法”
6. 对于“集成类型”，选择“Lambda Function”并插入我们为之前创建的函数指定的 lambda 函数名称。确保也使用相同的区域
7. 确认设置和任何所需的权限
8. 现在再次单击资源并修改“身体映射模板”，使模板包含以下内容：

```
{ "name": "$input.params('name')" }
```
9. 最后保存并点击操作->部署 API

<a name="running-the-function"></a>
#### 运行函数

1. 在 API 网关控制台，在阶段菜单中，选择 API 我们已经创建并单击 GET 选项
2. 你会看到一个调用 URL 你可以点击。您可能需要修改它以包含输入，使其看起来类似于以下内容： `.../hello?name=mario`
3. 您应该在浏览器中看到 `Hello Mario`
