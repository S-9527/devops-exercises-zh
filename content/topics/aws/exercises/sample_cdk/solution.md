<a name="set-up-a-cdk-project---solution"></a>
### 设置一个 CDK 项目 - 解决方案

<a name="exercise"></a>
### 练习

初始化一个 CDK 项目并设置构建所需的文件 CDK 项目。

<a name="solution"></a>
### 解决方案

<a name="initialize-a-cdk-project"></a>
#### 初始化一个 CDK项目

1. 安装 CDK 在你的机器上运行 `npm install -g aws-cdk`.
2. 创建一个新目录，名为 `sample` 为您的项目并运行 `cdk init app --language typescript` 初始化一个 CDK 项目。您可以选择 csharp、fsharp、go、java、javascript、python 或 typescript 等语言。
3. 您将看到在您的目录中创建了以下文件：
   1. `cdk.json`, `tsconfig.json`, `package.json`  - These are configuration files that are used to define some global settings for your CDK 项目。
   2. `bin/sample.ts` - This is the entry point for your CDK 项目。该文件用于定义您要创建的堆栈。
   3. `lib/sample-stack.ts` - This is the main file that will contain the code for your CDK 项目。

<a name="create-a-sample-lambda-function"></a>
#### 创建示例 lambda 函数

1. 在 `lib/sample-stack.ts` 文件中，添加以下代码来创建 lambda 函数：

```typescript
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class SampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'SampleLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromInline('exports.handler = async () => "hello world";'),
      handler: 'index.handler'
    });
  }
}

```

这将创建一个示例 lambda 函数，该函数在调用时返回“hello world”。

<a name="bootstrap-the-cdk-project"></a>
#### 引导 CDK项目

部署项目之前，需要先 bootstrap 项目。这会创建一个用于部署项目的 CloudFormation stack。可以通过运行 `cdk bootstrap` 完成 bootstrap。

了解有关引导的更多信息 [这里](https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html).

<a name="deploy-the-project"></a>
##### 部署项目

1. 运行 `npm install` 每当您进行更改时安装项目的所有依赖项。
2. 运行 `cdk synth` 为项目合成 CloudFormation 模板。你会看到一个名为 `cdk.out/CDKToolkit.template.json` 的新文件，其中包含项目的 CloudFormation 模板。
3. 运行 `cdk diff` 查看将对您进行的更改 AWS 帐户。您将看到一个名为的新堆栈 `SampleStack` 这将创建一个 lambda 函数以及与其相关的所有更改。
4. 运行 `cdk deploy` 部署您的项目。您应该会看到一个名为 Created 的新堆栈 AWS CloudFormation 下的帐户。
5. Go 到 Lambda 控制台，你会看到一个新的 lambda 函数，名为 `SampleLambda` 在您的帐户中创建。
