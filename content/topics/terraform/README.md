<a name="terraform"></a>
# Terraform

- [Terraform](#terraform)
  - [练习](#exercises)
    - [Terraform 101](#terraform-101)
    - [AWS](#aws)
  - [问题](#questions)
    - [Terraform 101](#terraform-101-1)
    - [Terraform 实践基础知识](#terraform-hands-on-basics)
    - [依赖关系](#dependencies)
    - [Providers](#providers)
    - [变量](#variables)
      - [输入变量](#input-variables)
      - [输出变量](#output-variables)
      - [当地人](#locals)
      - [变量实践](#variables-hands-on)
    - [数据来源](#data-sources)
    - [生命周期](#lifecycle)
    - [Provisioners](#provisioners)
    - [状态](#state)
      - [Terraform 后端](#terraform-backend)
      - [工作空间](#workspaces)
      - [State 实践](#state-hands-on)
    - [Terraform 结构和语法](#terraform-structures-and-syntax)
      - [列表](#lists)
      - [循环](#loops)
      - [地图](#maps)
      - [条件句](#conditionals)
      - [杂项](#misc)
    - [模块](#modules)
      - [模块实践](#modules-hands-on)
      - [面试备忘单](#interview-cheatsheet)
    - [进口](#import)
    - [版本控制](#version-control)
    - [AWS](#aws-1)
    - [验证](#validations)
    - [Secret](#secrets)
    - [生产](#production)

<a name="exercises"></a>
## 练习

<a name="exercises-terraform-101"></a>

<a name="terraform-101"></a>
### Terraform 101

| 名称           | 主题  | 目的与说明                                   | 解决方案                                                   | 评论 |
| -------------- | ------ | ---------------------------------------------------------- | ---------------------------------------------------------- | -------- |
| 本地 provider | 基础知识 | [练习](exercises/terraform_local_provider/exercise.md) | [解决方案](exercises/terraform_local_provider/solution.md) |          |

<a name="aws"></a>
### AWS

以下练习需要考虑 AWS 可能会花费你 $$$

| 名称                          | 主题 | 目的与说明                              | 解决方案                                              | 评论 |
| ----------------------------- | ----- | ----------------------------------------------------- | ----------------------------------------------------- | -------- |
| 发射 EC2 实例           | EC2   | [练习](exercises/launch_ec2_instance/exercise.md) | [解决方案](exercises/launch_ec2_instance/solution.md) |          |
| 重命名 S3 桶              | S3    | [练习](exercises/s3_bucket_rename/exercise.md)    | [解决方案](exercises/s3_bucket_rename/solution.md)    |          |
| 创建自定义 VPC 和子网 | VPC   | [练习](exercises/vpc_subnet_creation/exercise.md) | [解决方案](exercises/vpc_subnet_creation/solution.md) |          |

<a name="questions"></a>
## 问题

<a name="terraform-101-1"></a>
### Terraform 101

<details>
<summary>什么是 Terraform?</summary><br><b>

[Terraform](https://www.terraform.io/intro)：“HashiCorp Terraform 是一种 Infrastructure as Code 工具，可以用人类可读的配置文件定义云端和本地资源，并对这些文件进行版本控制、复用和共享。之后，你可以用一致的工作流来制备和管理基础设施的整个生命周期。Terraform 可以管理计算、存储、网络等底层组件，也可以管理 DNS 记录和 SaaS 功能等上层组件。”
</b></details>

<details>
<summary>使用有什么好处 Terraform 或一般的 IaC？</summary><br><b>

- 完全自动化：过去，资源创建、修改和删除都是手动或使用一组工具来处理的。与 Terraform 或其他 IaC 技术，您可以以自动化的方式管理整个生命周期。<br>
- 模块化和可重用：您为特定目的编写的代码可以以不同的方式使用和组装。您可以编写代码在公共云上创建资源，并且可以与其他团队共享，这些团队也可以在同一（或不同）云上的帐户中使用它><br>
- 改进的测试：诸如此类的概念 CI 可以轻松应用于基于 IaC 的项目和代码片段。这使您可以预先测试和验证操作
- </b></details>

<details>
<summary>手动流程有帮助的原因之一是什么？</summary><br><b>
用于刚开始时学习平台
</b></details>

<details>
<summary>为什么建议在大规模创建基础设施时避免使用手动流程？</summary>
创建基础设施的手动流程速度很慢，因为每个步骤都需要人工干预，这会延迟部署。它们很容易出错，因为手动配置会增加出错和不一致的风险。此外，这些过程不易重复，因此很难确保在不同环境中设置相同的基础设施，这与实现部署自动化和标准化的基础设施即代码 (IaC) 不同。
</b></details>

<details>
<summary>有哪些 Terraform 特点？</summary><br><b>

- 声明式： Terraform 使用声明性方法（而不是过程性方法）来定义资源的最终状态
- 无代理：与使用代理和服务器模型的其他技术（例如 Puppet）相反， Terraform 你使用不同的 API（云、服务等）执行操作
- 社区： Terraform 拥有强大的社区，他们不断发布模块并在需要时进行修复。这确保了良好的模块维护，并且用户可以随时快速获得支持
- </b></details>

<details>
<summary>什么语言的作用 Terraform 使用？</summary><br><b>

一种称为 HCL（HashiCorp Configuration Language）的 DSL，用于以声明式方式定义基础设施。

</b></details>

<details>
<summary>什么是典型的 Terraform 工作流程？</summary><br><b>

1. 编写 Terraform 定义：在 `.tf` 文件中用 HCL 描述期望的基础设施状态（最开始运行 `terraform init`）
2. Review：使用 `terraform plan` 之类的命令预览 Terraform 将按定义执行哪些变更
3. 应用定义：使用 `terraform apply`，Terraform 会通过添加、修改或删除资源来应用给定定义

这是一个手动流程。实际工作中通常会自动化：用户提交 PR/MR 提出 Terraform 变更，流水线测试这些变更，合并后再执行 `terraform apply`。

</b></details>

<details>
<summary>使用的一些用例有哪些 Terraform?</summary><br><b>

- 基础设施配置和管理：您需要对基础设施进行自动化或编码，以便能够轻松测试、应用它并进行任何必要的更改。
- 多云环境：您管理不同云上的基础设施，但寻找一致的方法来跨云执行此操作
- 一致的环境：您管理测试、生产、登台等环境，并寻找一种使它们保持一致的方法，以便其中一个环境中的任何修改也适用于其他环境

</b></details>

<details>
<summary>Terraform 和 Ansible、Puppet、Chef 等技术有什么区别？</summary><br><b>

Terraform 被认为是一种 IaC 技术。它用于配置资源，管理不同平台上的基础设施。

Ansible、Puppet 和 Chef 都是配置管理技术。一旦实例正在运行并且您想在其上应用一些配置（例如安装应用程序、应用安全策略等），就会使用它们。

需要明确的是， CM 工具可用于配置资源，因此最终目标是拥有基础设施 Terraform 和类似的东西 Ansible，可以达到同样的结果。区别在于如何。 Ansible 不保存资源的状态，它不知道您的环境中有多少实例，而不是 Terraform。与此同时，同时 Terraform 可以执行配置管理任务，它对该特定目标的模块支持较少，并且不跟踪任务执行状态 Ansible。差异是存在的，大多数时候建议混合使用这些技术，所以 Terraform 用于管理基础设施和 CM 用于在该基础设施之上进行配置的技术。

</b></details>

<a name="terraform-hands-on-basics"></a>
### Terraform 实践基础知识

<details>
<summary>解释一下下面的块 Terraform 代码

```
resource "aws_instance" "some-instance" {
  ami           = "ami-201720221991yay"
  instance_type = "t2.micro
}
```

</summary><br><b>

它是“aws_instance”类型的资源，用于配置实例。资源名称（NOT INSTANCE) 是“某个实例”。

实例本身将使用“t2.micro”类型进行配置，并使用 AMI “ami-201720221991yay”。
</b></details>

<details>
<summary>在 main.tf 文件中写入以下内容后，下一步做什么？

```
resource "aws_instance" "some-instance" {
  ami           = "ami-201720221991yay"
  instance_type = "t2.micro
}
```

</summary><br><b>

运行 `terraform init`。它会扫描当前目录中的代码，找出使用了哪些 provider（本例中是 AWS provider）并下载它们。
</b></details>

<details>
<summary>你已经执行了 <code>terraform init</code>，现在想继续创建资源，但希望 100% 确认接下来会执行什么。你应该怎么做？</summary><br><b>

执行 `terraform plan`。它会详细展示 Terraform 在 apply 时将执行哪些变更。
</b></details>

<details>
<summary>你已经下载了 provider，也通过 <code>terraform plan</code> 看过 Terraform 将要执行的变更，现在准备真正应用这些变更。接下来应该做什么？</summary><br><b>

运行 `terraform apply`。它会应用 `.tf` 文件中描述的变更。
</b></details>

<details>
<summary>解释运行 <code>terraform apply</code> 时每行开头出现的以下符号含义：

- '+'
- '-'
- '-/+'
</summary><br><b>

- '+' - 将添加资源或属性
- '-' - 资源或属性将被删除
- '-/+' - 资源或属性将被替换
  </b></details>

<details>
<summary>如何清理 Terraform 资源？为什么用户应该小心这样做？</summary><br><b>

`terraform destroy` 会删除 Terraform 跟踪的所有资源。

用户应该小心使用此命令，因为无法恢复它。当然，您始终可以再次运行“应用”，但这可能需要时间，生成全新的资源等。
</b></details>

<a name="dependencies"></a>
### 依赖关系

<details>
<summary>有时您需要在同一或单独的 .tf 文件中引用某些资源。为什么以及如何完成？</summary><br><b>

为什么：因为资源有时是连接的或者需要连接的。例如，您创建一个 AWS 实例具有“aws_instance”资源，但同时您还希望允许一些流量到达它（因为默认情况下不允许流量）。为此，您将创建一个“aws_security_group”资源，然后在 aws_instance 资源中引用它。

如何：

使用语法 <PROVIDER TYPE>.<NAME>.<ATTRIBUTE>

在你的 AWS 例如它会喜欢这样：

```
resource "aws_instance" "some-instance" {

  ami           = "some-ami"
  instance_type = "t2.micro"
  vpc_security_group_ids = [aws_security_group.instance.id]

}
```

</b></details>

<details>
<summary>按什么顺序重要吗 Terraform 创造资源？</summary><br><b>

是的，当不同之间存在依赖关系时 Terraform 资源，您希望以正确的顺序创建资源，这正是 Terraform 很痛。

更清楚地说，如果您有一个资源 X 引用了 ID 对于资源 Y，创建第一个资源 X 是没有意义的，因为它没有任何资源 ID 从尚未创建的资源中获取。
</b></details>

<details>
<summary>有没有办法打印/查看不同资源之间的依赖关系？</summary><br><b>

是的，与 `terraform graph`

输出位于 DOT - A graph description language.
</b></details>

<a name="providers"></a>
### Providers

<details>
<summary>解释一下什么是 provider</summary><br><b>

[terraform.io](https://www.terraform.io/docs/language/providers/index.html): “Terraform 依赖名为 provider 的插件与云服务商、SaaS 提供商以及其他 API 交互……每个 provider 都会提供一组 Terraform 可管理的资源类型和/或数据源。每一种资源类型都由 provider 实现；没有 provider，Terraform 就无法管理任何类型的基础设施。”
</b></details>

<details>
<summary>在哪里可以找到公开可用的 provider？</summary><br><b>

在 [Terraform Registry](https://registry.terraform.io/browse/providers)
</b></details>

<details>
<summary>在这种情况下，provider 的名字是什么？

```
terraform {
    required_providers {
      aws = {
        source  = "hashicorp/aws"
      }
      azurerm = {
        source  = "hashicorp/azurerm"
        version = "~> 3.0.2"
      }
    }
  }
```

</summary><br><b>

azurerm 和 aws
</b></details>

<details>
<summary>如何安装 provider？ </summary><br><b>

编写如下所示的 provider block，然后运行 `terraform init`

```
provider "aws" {
  region = "us-west-1"
}
```

</b></details>

<details>
<summary>判断题：应用以下 Terraform 配置会失败，因为没有为 “aws” provider 指定 source 或 version

```
terraform {
    required_providers {
      aws = {}
    }
  }
```

</summary><br><b>

错误。Terraform 会在公开的 Terraform Registry 中查找 “aws” provider，并使用最新版本。
</b></details>

<details>
<summary>写一个 Terraform provider 配置（任意类型都可以）</summary><br><b>

AWS 是 Terraform 最常用的 provider 之一。下面示例展示如何配置它使用特定 region，并指定 provider 的具体版本：

```
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-west-2"
}
```

</b></details>

<details>
<summary>Terraform 默认从哪里安装 provider？ </summary><br><b>

默认情况下，Terraform 从 Terraform Registry 安装 provider。
</b></details>

<details>
<summary>什么是 Terraform 注册表？</summary><br><b>

Terraform Registry 为官方和社区维护的 provider 与 module 提供集中发布位置。
</b></details>

<details>
<summary>provider 会下载到哪里？（例如运行 <code>terraform init</code> 时）</summary><br><b>

`.terraform` 目录。
</b></details>

<details>
<summary>概括描述对以下 Terraform 配置运行 <code>terraform init</code> 时，幕后会发生什么

```
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
```

</summary><br><b>

1. Terraform 检查 `registry.terraform.io/hashicorp/aws` 是否存在 aws provider
2. 安装最新版本的 aws provider（假设 URL 存在且有效）
   </b></details>

<details>
<summary>判断题：你只能安装 HashiCorp 提供的 provider</summary><br><b>

错误。你可以指定任意 provider URL，不限于 HashiCorp。
</b></details>

<a name="variables"></a>
### 变量

<a name="input-variables"></a>
#### 输入变量

<details>
<summary>输入变量有什么用处 Terraform?</summary><br><b>

变量允许您在一个位置定义一段数据，而不是在多个不同位置重复其硬编码值。然后，当您需要修改变量的值时，您可以在一个位置进行修改，而不是更改每个硬编码值。
</b></details>

<details>
<summary>支持什么类型的输入变量 Terraform?</summary><br><b>

```
string
number
bool
list(<TYPE>)
set(<TYPE>)
map(<TYPE>)
object({<ATTR_NAME> = <TYPE>, ... })
tuple([<TYPE>, ...])
```

</b></details>

<details>
<summary>默认输入变量类型是什么 Terraform?</summary><br><b>

`any`
</b></details>

<details>
<summary>有哪些方法可以为输入变量传递值？</summary><br><b>

- 使用 `-var` 选项中的 CLI
- 使用文件 `-var-file` 选项中的 CLI
- 以以下开头的环境变量 `TF_VAR_<VAR_NAME>`

如果没有给出值，系统将提示用户提供一个值。
</b></details>

<details>
<summary>如何引用变量？</summary><br><b>

使用语法 `var.<VAR_NAME>`
</b></details>

<details>
[问题] 您正在为您的配置一个变量 Terraform 配置。配置时需要哪些参数 `variable` 块？ 1. `type` 和 `description` 2. 没有必需的参数 3. `type` 4. `type`, `description` 和 `default`

[解答]</b> 2. 没有必需的参数

在 Terraform，声明变量块时，没有强制参数。您可以使用空块创建变量，例如：

变量“示例”{}

同时 `type`, `description`, 和 `default` 都是常用的，都是可选的。的 `type` 论证有助于验证， `description` 记录变量的用途，以及 `default` 如果未指定，则提供后备值。

</details>

<details>
<summary>将变量设置为“敏感”有什么效果？</summary><br><b>

运行 `terraform apply` 或 `terraform plan` 时不会显示它的值，但该值最终仍会记录在 Terraform state 中。
</b></details>

<details>
<summary>判断题：如果表达式的结果依赖于敏感变量，则它也将被视为敏感变量</summary><br><b>

正确。
</b></details>

<details>
<summary>相同的变量在以下位置定义：

- 该文件 `terraform.tfvars`
- 环境变量
- 使用 `-var` 或 `-var-file`

根据变量优先级，首先使用哪个源？</summary><br><b>

Terraform 按以下顺序加载变量，后面的源优先于前面的源：

- 环境变量
- 该文件 `terraform.tfvars`
- 使用 `-var` 或 `-var-file`

</b></details>

<details>
<summary>每当您运行 terraform apply 时，它都会提示输入给定变量的值。如何避免被提示？</summary><br><b>

虽然删除变量理论上是正确的答案，但它可能会导致执行失败。

你可以使用类似的东西 `-var` 选项来提供值并避免提示插入值。另一种选择是运行 `export TF_VAR_<VAR_NAME>=<VALUE>`.

</b></details>

<a name="output-variables"></a>
#### 输出变量

<details>
<summary>什么是输出变量？为什么我们需要它们？</summary><br><b>

输出变量允许您显示/打印某些数据作为 Terraform 执行。

它最常见的用例可能是打印 IP 实例的地址。假设您配置了一个实例，并且您想知道该实例是什么 IP 连接到它的地址。而不是在控制台/中寻找它OS，您可以使用输出变量并将该信息打印到屏幕上

</b></details>

<details>
<summary>解释输出变量的“敏感”参数</summary><br><b>

当设置为“true”时， Terraform 将避免记录输出变量的数据。它的用例是敏感数据，例如密码或私钥。

</b></details>

<details>
<summary>解释输出变量的“depends”参数</summary><br><b>

它用于显式设置输出变量和任何其他资源之间的依赖关系。用例：某些信息只有在另一个资源准备就绪后才可用。

</b></details>

<a name="locals"></a>
#### 当地人

<details>
<summary>什么是当地人？</summary><br><b>

与变量类似，它们充当数据和值的占位符。与变量不同，用户不能通过传递不同的值来覆盖它们。

</b></details>

<details>
<summary>使用当地人的用例是什么？</summary><br><b>

您有多个硬编码值，它们在不同的部分中重复出现，但同时您不希望将它们暴露为允许用户覆盖值。

</b></details>

<a name="variables-hands-on"></a>
#### 变量实践

<details>
<summary>演示输入变量定义及其类型、描述和默认参数</summary><br><b>

```
variable "app_id" {
  type        = string
  description = "The id of application"
  default     = "some_value"
}
```

无关注意：变量通常在自己的文件中定义（例如 vars.tf）。

</b></details>

<details>
<summary>如何定义一个输入变量，它是一个具有“型号”（字符串）、“颜色”（字符串）、年份（数字）属性的对象？</summary><br><b>

```
variable "car_model" {
  description = "Car model object"
  type        = object({
    model   = string
    color   = string
    year    = number
  })
}
```

注意：您还可以为其定义默认值。

</b></details>

<details>
<summary>如何引用变量？</summary><br><b>

变量被引用 `var.VARIABLE_NAME` 语法。让我们看一个例子：

variables.tf：

```
variable "memory" {
  type = string
  default "8192"
}

variable "cpu" {
  type = string
  default = "4"
}
```

主要.tf：

```
resource "libvirt_domain" "vm1" {
   name = "vm1"
   memory = var.memory
   cpu = var.cpu
}
```

</b></details>

<details>
<summary>如何从字符串文字内部引用变量？ （额外问题：如何调用这种类型的表达式？）</summary><br><b>

使用语法： `"${var.VAR_NAME}"`。这称为“插值”。

在与实例相关的 user_data 属性中使用它很常见。

```
user_data = <<-EOF
            This is some fabulos string
            It demonstrates how to use interpolation
            Yes, it's truly ${var.awesome_or_meh}
            EOF
```

</b></details>

<details>
<summary>如何在不应用的情况下列出所有输出 Terraform 变化？</summary><br><b>

`terraform output` 将列出所有输出而不应用任何更改
</b></details>

<details>
<summary>您可以在不应用 terrafom 更改的情况下看到特定变量的输出吗？</summary><br><b>

是的，与 `terraform output <OUTPUT_VAR>`.

对于脚本非常有用:)
</b></details>

<details>
<summary>演示如何定义当地人</summary><br><b>

```
locals {
  x = 2
  y = "o"
  z = 2.2
}
```

</b></details>

<details>
<summary>演示如何使用本地</summary><br><b>

如果我们定义这样的东西

```
locals {
  x = 2
}
```

然后要使用它，你必须使用这样的东西： `local.x`
</b></details>

<a name="data-sources"></a>
### 数据来源

<details>
<summary>解释数据源 Terraform</summary><br><b>

- 数据源用于从 provider 或 Terraform 外部资源获取数据（例如公有云 AWS、GCP、Azure）。
- 用于读取的数据源。他们没有修改或创建任何东西
- 许多 provider 会暴露多个数据源

</b></details>

<details>
<summary>演示如何使用数据源</summary><br><b>

```
data "aws_vpc" "default {
  default = true
}
```

</b></details>

<details>
<summary>如何从数据源中获取数据？</summary><br><b>

一般语法是 `data.<PROVIDER_AND_TYPE>.<NAME>.<ATTRIBUTE>`

因此，如果您定义了以下数据源

```
data "aws_vpc" "default {
  default = true
}
```

您可以检索 ID 属性是这样的： `data.aws_vpc.default.id`
</b></details>

<details>
<summary>是否存在合并数据源之类的事情？用例是什么？</summary><br><b>

是的，您可以定义一个数据源，同时使用另一个数据源作为过滤器。

假设我们想要得到 AWS 子网，但仅限于我们的默认子网 VPC:

```
data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}
```

</b></details>

<a name="lifecycle"></a>
### 生命周期

<details>
<summary>当您更新资源时，它是如何工作的？</summary><br><b>

默认情况下，当前资源将被删除，创建一个新资源，并且所有指向旧资源的引用都会更新为指向新资源

</b></details>

<details>
<summary>是否可以修改默认生命周期？怎么办？为什么？</summary><br><b>

是的，这是可能的。人们可以选择不同的生命周期。例如“create_before_destroy”，它反转顺序并首先创建新资源，将旧资源的所有引用更新到新资源，然后删除旧资源。

使用方法：

```
lifecycle {
  create_before_destroy = true
}
```

为什么首先使用它：您可能拥有具有依赖性的资源，而它们的依赖性本身是不可变的（=您无法修改它，因此您必须创建一个新的），在这种情况下，默认生命周期将不起作用，因为您将无法删除具有依赖性的资源，因为它仍然引用旧资源。 AWS ASG + 启动配置就是此类用例的一个很好的例子。

</b></details>

<details>
<summary>您已经部署了一个虚拟机 Terraform 并且您想将数据传递给它（或执行一些命令）。哪个概念 Terraform 你会用吗？</summary><br><b>

[Provisioners](https://www.terraform.io/docs/language/resources/provisioners)

</b></details>

<a name="provisioners"></a>
### Provisioners

<details>
<summary>什么是 provisioner？它们有什么用途？</summary><br><b>

Provisioner 可以理解为与 Terraform 一起使用的机制，通常用于完成服务配置、初始化并让服务进入可运行状态。

Provisioner 的几个例子：

- 使用 Ansible、Chef 或 Puppet 等技术在已创建的实例上运行配置管理。
- 复制文件
- 执行远程脚本

</b></details>

<details>
<summary>为什么经常建议使用配置程序作为最后的手段？</summary><br><b>

由于配置程序可以运行各种操作，因此计划和了解运行特定配置程序时会发生什么并不总是可行的。因此，通常建议使用 Terraform 只要有可能，就使用内置选项。

</b></details>

<details>
<summary>在 provisioner 语境下，什么是 <code>local-exec</code> 和 <code>remote-exec</code>？</summary><br><b>

<code>local-exec</code> provisioner 会在执行 Terraform 的机器上运行命令；<code>remote-exec</code> provisioner 会在远程资源上运行命令。

</b></details>

<details>
<summary>什么是“受污染的资源”？</summary><br><b>

它是已成功创建但在配置期间失败的资源。 Terraform 将失败并将该资源标记为“受污染”。

</b></details>

<details>
<summary>什么是 <code>terraform taint</code>？</summary><br><b>
<code>terraform taint resource.id</code> 会在 state 文件中手动将资源标记为 tainted。所以下次运行 <code>terraform apply</code> 时，该资源会被销毁并重新创建。

</b></details>

<details>
<summary>什么是数据源？比如什么场景下需要使用它？</summary><br><b>
数据源查找或计算可在 terraform 配置中的其他位置使用的值。

有很多情况你可能需要使用它们：

- 您想要引用未通过 terraform 管理的资源
- 您想要引用由不同 terraform 模块管理的资源
- 你想通过类型检查来干净地计算一个值，例如 <code>aws_iam_policy_document</code>

</b></details>

<details>
<summary>什么是输出变量？<code>terraform output</code> 是什么？</summary><br><b>
输出变量是来自模块属性的命名值。它们会存储在 Terraform state 中，也可以通过 <code>remote_state</code> 被其他模块使用。
</b></details>

<details>
<summary>解释 remote state。什么时候会使用它？如何使用？</summary><br><b>
  Terraform 会生成一个 `terraform.tfstate` JSON 文件，描述指定 provider 上配置的组件/服务。remote state 会把这个文件存储在远程后端中，便于团队协作。

</b></details>

<details>
<summary>解释一下 state lock</summary><br><b>
  state lock 是一种阻止多个调用者同时操作同一个 Terraform state 的机制，用来避免不同团队成员的操作发生冲突。一旦第一个调用者释放锁，其他团队成员就可以继续执行
  自己的操作。即便如此，Terraform 也会先检查 state，确认所需资源是否已经存在；
  如果没有，它将继续创建它。

</b></details>

<details>
<summary>除了 <code>.tfvars</code> 文件或 CLI 参数，如何从其他模块注入依赖项？</summary><br><b>
  Terraform 内置方式是使用 <code>remote state</code> 查找其他模块的输出。
  社区中也常用 <code>Terragrunt</code> 在模块之间显式注入变量。
</b></details>

<details>
<summary>如何使用导入现有资源 Terraform 进口？</summary><br><b>

1. 确定您要导入的资源。
2. 编写与该资源的配置匹配的 terraform 代码。
3. 运行 Terraform 命令 <code>terraform import RESOURCE ID</code><br>

例如。假设您想要导入一个 aws 实例。然后您将执行以下操作：

1. 在控制台中识别该 aws 实例
2. 参考它的配置并编写 Terraform 代码看起来像这样：

```
resource "aws_instance" "tf_aws_instance" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"

  tags = {
    Name = "import-me"
  }
}
```

3. 运行 terraform 命令 <code>terraform import aws_instance.tf_aws_instance i-12345678</code>
   </b></details>

<a name="state"></a>
### 状态

<details>
<summary>能说出 Terraform state 中包含的三类内容吗？</summary><br><b>

- 资源的表示—— JSON 资源的格式、属性、ID...识别资源所需的所有内容以及这些资源的 .tf 文件中包含的所有内容
- Terraform 版本
- 输出
  </b></details>

<details>
<summary>为什么 Terraform 需要保存 state？本地 state 和 remote state 有什么区别？</summary><br><b>

Terraform 保存 state，用来把真实基础设施对象映射到代码中声明的资源、跟踪依赖关系、检测 drift，并通过缓存属性数据加快 plan 速度。<br><br>

- 本地 state 存储在磁盘上的 `terraform.tfstate` 文件中，适合快速实验或单人工作流。<br>
- remote state 位于后端（例如 S3、GCS、Terraform Cloud），可以强制锁定、访问控制和版本控制，让团队共享同一份事实来源。<br>
  只要有多个操作者或自动化 pipeline 会接触同一份配置，就应优先选择远程后端。
  </b></details>

<details>
<summary>为什么存储 tfstate 文件的位置很重要？在您的回答中，请确保解决以下问题：

- 公共与私人
- Git 存储库与其他位置
</summary><br><b>

* tfstate 包含纯文本形式的凭据。您不想将其放在公共共享位置。<br>
* tfstate 不应被并发修改，因此如果把它放在所有人都有写权限的共享位置，可能会导致问题。（Terraform remote state 可以避免这类问题。）<br>
* tfstate是一个重要的文件。因此，最好将其放置在定期备份且安全性良好的位置。<br><br>
  因此，tfstate 不应存储在 git 存储库中。安全存储（例如安全存储桶）是更好的选择。
  </b></details>

<details>
<summary>判断题：直接手动编辑 Terraform state 很常见，甚至在很多场景下都推荐这样做</summary><br><b>

错误。应尽量避免直接手动编辑 Terraform state。优先使用受支持的命令，例如 `terraform state mv`、`terraform state rm` 或 `terraform state replace-provider`，这样 CLI 才能保持元数据一致。
</b></details>

<details>
<summary>为什么把 Terraform state 存在本地计算机上可能会有问题？</summary><br><b>

一般来说，单人实验时把 state 存在本地不是问题。但当你在团队中使用 Terraform 时，state 需要被共享。除了共享之外，还必须处理多个团队成员或自动化流程可能同时修改 state 的情况，因此锁定也非常重要。
</b></details>

<details>
<summary>提一下tfstate相关的一些最佳实践</summary><br><b>

- 不要手动编辑它。 tfstate 被设计为由 terraform 操作，而不是由用户直接操作。<br>
- 将其存储在安全位置（因为它通常可以包含凭据和敏感数据）。<br>
- 定期备份，以便您可以在需要时轻松回滚。<br>
- 将其存储在远程共享存储中。在团队中工作时尤其需要这一点，并且任何团队成员都可以更新状态。<br>
- 如果存储 Terraform state 的后端支持版本控制，则启用版本控制。版本控制对于出现问题时的备份和回滚非常有用。<br>
- 指定“状态所有者”来审查访问、轮换凭证和执行迁移。<br>
- 保留 `.tfstate` 文件和 `.terraform/` 目录脱离版本控制（`.gitignore`）并加密任何临时备份。
  </b></details>

<details>
<summary>应该如何以及为何避免并发编辑 Terraform state？</summary><br><b>

如果两个用户或进程同时编辑 state，可能会导致 state 无效，无法真实反映资源状态。<br><br>
为了避免这种情况，如果后端支持，Terraform 可以使用 state lock。例如，AWS S3 后端可以结合 DynamoDB 实现锁定和一致性。通常只要后端支持，Terraform 会自动使用 state lock，用户不需要额外启用。自动化流水线应该等待锁释放，而不是强制解锁。
</b></details>

<details>
<summary>当有多个环境（例如开发、预发和生产）时，如何管理 Terraform state？</summary><br><b>

这里可能没有唯一正确答案，但通常推荐每个环境都有独立的 state。<br><br>
常见模式：<br>

- 每个环境单独的后端配置（不同的 S3 前缀甚至不同的存储桶和 DynamoDB 表）。<br>
- 当您需要隔离状态和不同的凭据时，可以使用不同的工作区或目录。<br>
- Terraform 云组织/工作空间映射到具有基于角色的访问控制的环境。
  </b></details>

<details>
<summary>为什么将状态存储在版本控制存储库中不是一个好主意？</summary><br><b>

- 敏感数据：某些资源可能指定敏感数据（例如密码和 token），而 state 中的内容通常以明文形式存储。<br>
- 容易出错：使用 Git 仓库时，你可能经常切换分支、checkout 特定提交、执行 rebase 等，这些操作可能导致你在非最新的 Terraform 代码上执行 `terraform apply`。把 state 放在 Git 外部可以消除这类风险。<br>
- 与托管后端相比，缺乏锁定和审计跟踪。
  </b></details>

<a name="terraform-backend"></a>
#### Terraform 后端

<details>
<summary>什么是 Terraform 后端？默认后端是什么？</summary><br><b>

Terraform 后端决定如何 Terraform 状态被存储和加载。默认情况下，状态是本地的，但可以设置远程后端。
</b></details>

<details>
<summary>如何配置 AWS S3 backend 和 DynamoDB state lock？</summary><br><b>

当您需要共享、持久的事实来源时，请使用远程后端。最小配置如下：

```hcl
terraform {
  required_version = ">= 1.6.0"

  backend "s3" {
    bucket         = "my-tfstate-bucket"
    key            = "prod/network/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "tf-locks"
    encrypt        = true
  }
}
```

- 创建 S3 具有版本控制、默认加密的存储桶，并在启用后端之前阻止公共访问。<br>
- 规定 DynamoDB 带有主键的表 `LockID` 所以 Terraform 可以获取锁。<br>
- 使用 IAM 最小权限策略，仅允许对存储桶和表进行状态操作，以减少爆炸半径。
  </b></details>

<details>
<summary>哪些命令可以帮助您检查、迁移和安全操作 Terraform 状态？</summary><br><b>

```bash
terraform init -migrate-state
terraform plan -refresh-only
terraform state list
terraform show -json | jq '.values.root_module.resources[].address' | head
terraform state mv module.vpc.aws_subnet.public[0] module.vpc.aws_subnet.public_a
```

- `terraform init -migrate-state`：将现有的本地 state 迁移到配置好的后端并启用锁定。<br>
- `terraform plan -refresh-only`：通过刷新远程对象属性来检测漂移，而不提出更改。<br>
- `terraform state list`：确认迁移或导入后状态中跟踪哪些对象。<br>
- `terraform show -json`：启用脚本化检查（此处与 `jq`）以便您可以审核地址或元数据。<br>
- `terraform state mv`：重命名或重新定位资源/模块而无需重新创建，在重构期间很有用。
  </b></details>

<details>
<summary>哪些最佳实践可以让 Terraform state 保持安全可靠？</summary><br><b>

- 对远程后端启用加密和版本控制（例如 S3 上的 `aws_s3_bucket_versioning` 加 SSE-KMS）。<br>
- 强制启用锁定（DynamoDB、GCS locking 或 Terraform Cloud workspace），并监控卡住的 lock。<br>
- 授予最小 IAM 权限并轮换访问密钥；自动化流程应 assume 带有短期凭证的 role。<br>
- 安排后端自动备份（S3 replication、DynamoDB PITR）并定期测试恢复。<br>
- 记录 state owner 的职责、事件响应流程，以及解锁或手动编辑的 break-glass 步骤（这应该是最后手段）。
  </b></details>

<details>
<summary>如何从本地状态迁移到新的远程后端？</summary><br><b>

1. 提供后端资源（例如 S3 带有版本控制的存储桶和 DynamoDB 表）来自单独的引导配置。<br>
2. 将后端块添加到您的 Terraform 配置并运行 `terraform init -migrate-state`.<br>
3. 验证迁移 `terraform state list` 或 `terraform state pull` 并保留以前文件的安全备份。<br>
4. 删除或存档本地 `terraform.tfstate` 仅在确认新计划针对远程后端运行之后。
   </b></details>

<details>
<summary>使用远程后端时，<code>terraform apply</code> 的工作流程有什么不同？</summary><br><b>

它首先获取状态锁，这样其他人就无法同时修改状态。应用程序还将在计划之前下载最新的状态快照，并在运行完成后自动上传更新的状态。
</b></details>

<details>
<summary>从远程后端切换回本地的过程是什么？</summary><br><b>

1. 您删除后端代码并执行 `terraform init` 切换回 `local` 后端。<br>
2. 您删除远程后端本身的资源。<br>
3. 归档最新的远程 state，以便本地副本损坏时可以恢复。
   </b></details>

<details>
<summary>判断题：不能在后端配置中使用变量</summary><br><b>

正确。这也是一个很大的限制，因为这意味着您必须访问远程后端的资源，并将一些值复制到后端配置中。<br><br>
处理它的一种方法是在与后端本身完全独立的文件中使用部分配置，然后使用 `terraform init -backend-config=some_backend_partial_conf.hcl`.

</b></details>

<details>
<summary>有没有办法在 Terraform 中使用来自远程 backend/state 的信息？</summary><br><b>

可以，使用 data source。Terraform 提供了名为 `terraform_remote_state` 的 remote state data source。<br><br>
可以使用以下语法：`data.terraform_remote_state.<NAME>.outputs.<ATTRIBUTE>`

</b></details>

<details>
<summary>remote state backend 如何改善 Terraform 项目协作？</summary><br><b>

通过将 state 存储在共享位置，让多个成员或进程可以基于同一份状态工作。
远程 state 后端解决了协作 Terraform 项目中的核心问题：团队处理基础设施时，每个人都需要访问当前状态才能安全变更，而锁定可以防止冲突。
</b></details>

<a name="workspaces"></a>
#### 工作空间

<details>
<summary>解释一下什么是a Terraform 工作区</summary><br><b>

[开发者.hashicorp.com](https://developer.hashicorp.com/terraform/language/state/workspaces)：“后端存储的持久数据属于一个工作区。后端最初只有一个工作区，其中包含一个 Terraform 与该配置关联的状态。一些后端支持多个命名工作区，允许多个状态与单个配置关联。”

</b></details>

<details>
<summary>判断题：每个 workspace 都有自己的 state</summary><br><b>

正确。

</b></details>

<details>
<summary>为什么工作区可能不是管理不同环境状态的最佳解决方案？比如舞台和制作</summary><br><b>

原因之一是所有工作区都存储在一个位置（如在一个后端），并且出于显而易见的原因，您通常不希望对登台和生产使用相同的访问控制和身份验证。此外，在工作空间中工作很容易出现人为错误，因为您可能会意外地认为自己在一个工作空间中，而实际上却在另一个完全不同的工作空间中工作。
</b></details>

<a name="state-hands-on"></a>
#### State 实践

<details>
<summary>哪个命令会生成 state 文件？</summary><br><b>

`terraform apply`

</b></details>

<details>
<summary>如何检查当前状态？</summary><br><b>

`terraform show`

</b></details>

<details>
<summary>如何列出使用以下命令创建的资源 Terraform?</summary><br><b>

`terraform state list`

</b></details>

<details>
<summary>如何重命名现有资源？</summary><br><b>

`terraform state mv`

</b></details>

<details>
<summary>如何创建新工作区？</summary><br><b>

`terraform workspace new <WORKSPACE_NAME>`

</b></details>

<details>
<summary>如何确定您正在使用哪个工作空间？</summary><br><b>

`terraform workspace show`

</b></details>

<a name="terraform-structures-and-syntax"></a>
### Terraform 结构和语法

<a name="lists"></a>
#### 列表

<details>
<summary>如何定义一个数字列表的输入变量？</summary><br><b>

```
variable "list_of_nums" {
  type = list(number)
  description = "An example of list of numbers"
  default = [2, 0, 1, 7]
}
```

</b></details>

<details>
<summary>如何根据列表的长度创建多个资源？</summary><br><b>

```
resource "some_resource" "some_name" {
  count = length(var.some_list)
}
```

</b></details>

<details>
<summary>您有一个名为“users”的列表变量，其中包含一个包含名称属性的对象，如下所示：<br>

```
variable "users" {
  type = list(object({
    name = string
    age  = number
  }))
}
```

如何访问该列表中第二项的名称属性？</summary><br><b>

`users[1].name`

</b></details>

<details>
<summary>给定相同的列表，如何访问所有项目的属性“名称”？</summary><br><b>

`users[*].name`

</b></details>

<a name="loops"></a>
#### 循环

<details>
<summary>循环对于什么有用 Terraform?</summary><br><b>

最常见的用例是当您需要创建多个仅有细微差别（例如不同名称）的资源时。您可以定义一次并使用循环创建它的多个实例，而不是定义多个单独的资源。

</b></details>

<details>
<summary>演示如何定义一个简单的 Terraform 循环</summary><br><b>

```
resource "aws_instance" "server" {
  count = 15
}
```

上述配置将创建 15 个 aws 实例。

</b></details>

<details>
<summary>如何创建多个 AWS 实例但每个实例都有不同的名称？</summary><br><b>

```
resource "aws_instance" "server" {
  count = 6

  tags = {
    Name = "instance-${count.index}"
  }
}
```

上面的配置将创建 6 个实例，每个实例都有不同的名称。

</b></details>

<details>
<summary>您在中定义了以下变量 Terraform

```
variable "users" {
  type    = list(string)
  default = ["mario", "luigi", "peach"]
}
```

如何使用它在公共云之一（或任何其他平台，下文）上创建用户？

</summary><br><b>

```
resource "aws_iam_user" "user" {
  count = length(var.users)

  name = var.users[count.index]
}
```

</b></details>

<details>
<summary>“计数”元参数有任何限制吗？</summary><br><b>

- `count` 内联块中不支持
- 当涉及到列表时，它的限制非常有限。您会注意到，修改列表中的项目甚至删除等操作有时会以您意想不到的方式解释。例如，从列表中删除一个项目可能会将其他项目移动到新位置，并且由于每个位置代表一个具有计数的资源，因此这可能会导致错误的资源被修改和删除的结果。有很多方法可以解决这个问题，但仍然使用列表的计数并不总是那么简单
  </b></details>

<details>
<summary>什么是 for_each 循环？它与“计数”有何不同？</summary><br><b>

- for_each 只能应用于像映射或集合这样的集合（而不是可以应用于列表的 count）
- for_each 有助于解决以下限制 `count` 这对于修改列表的用例来说不是最佳的
- for_each 支持内联块，而不是 `count`
  </b></details>

<details>
<summary>演示如何使用 for_each 循环</summary><br><b>

```
resource “google_compute_instance” “instances” {

  for_each = var.names_map
  name = each.value
}
```

</b></details>

<details>
<summary>以下资源尝试在字符串列表上使用 for_each 循环，但失败了，为什么？

```
resource “google_compute_instance” “instances” {

  for_each = var.names
  name = each.value
}
```

</summary><br><b>

for_each 只能应用于地图或集合等集合，因此列表应转换为如下集合： `for_each = toset(var.names)`

</b></details>

<details>
<summary>如何对内联块使用 for_each 循环？</summary><br><b>

```
resource "some_instance" "instance" {

dynamic "tag" {
  for_each = var.tags

  content {
    key   = tag.key
    value = tag.value
    }
  }
}
```

</b></details>

<details>
<summary>有一个名为“users”的列表变量。您想要定义一个输出变量，其中所有用户的值均大写。如何实现这一目标？</summary><br><b>

```
output "users" {
  value = [for name in var.user_names : upper(name)]
}
```

</b></details>

<details>
<summary>下面的代码的结果是什么？

```
resource "random_integer" "num" {
  min = 20
  max = 17
}

resource "aws_instance" "instances" {
  count = random_integer.num.results
}
```

</summary><br><b>

上面的代码将失败，因为不可能用 count 引用资源输出，因为 Terraform 必须在创建（或修改）任何资源之前计算计数。

</b></details>

<details>
<summary>有一个名为“values”的变量，其值如下：[“mario”，“luigi”，“peach”]。如何使用列表中项目的字符串值创建输出变量：“mario、luigi、peach”？</summary><br><b>

```
output "users" {
  value = "%{ for name in var.values }${name}, %{ endfor }"
}
```

</b></details>

<details>
<summary>有一个名为“users”的列表变量。您希望定义一个输出变量，其中所有用户的值均大写，但前提是名称长度超过 3 个字符。如何实现这一目标？</summary><br><b>

```
output "users" {
  value = [for name in var.user_names : upper(name) if length(name) > 3]
}
```

</b></details>

<a name="maps"></a>
#### 地图

<details>
<summary>有一个地图叫做“实例”

- 如何仅提取该地图的值？
- 如何从每个值中仅提取属性“名称”？
</summary><br><b>

- 使用 value 内置函数： `values(instances)`
- `values(instances)[*].name`

</b></details>

<details>
<summary>您有一个名为“users”的映射变量，其中键为“name”和“age”。使用以下内容定义输出列表变量“我的名字是 {name}，我的年龄是 {age}”</summary><br><b>

```
output "name_and_age" {
  value = [for name, age in var.users : "my name is ${name} and my age is ${age}"]
}
```

</b></details>

<details>
<summary>您有一个名为“users”的映射变量，其中键为“name”（字符串）和“age”（数字）。定义一个输出映射变量，键是大写的名称，值是最接近的整数的年龄 </summary><br><b>

```
output "name_and_age" {
  value = {for name, age in var.users : upper(name) => floor(age)
}
```

</b></details>

<a name="conditionals"></a>
#### 条件句

<details>
<summary>如何使用条件表达式 Terraform?</summary><br><b>

`some_condition ? "value_if_true" : "value_if_false"`

</b></details>

<details>
<summary>解释以下条件： <code>变量.x ? 1：0</code></summary><br><b>

如果 `x` 评估为 true，结果为 1，否则（如果为 false）结果为 0。

</b></details>

<details>
<summary>解释以下条件表达式： <code>var.x != "" ? var.x : "yay"</code></summary><br><b>

如果 `x` 是一个空字符串，结果是“yay”，否则它的值 `x` 变量

</b></details>

<details>
<summary>条件语句可以与元参数一起使用吗？</code></summary><br><b>

是的，例如“count”元参数：

```
resource "aws_instance" "server" {
  count = var.amount ? 1 : 0
  ...
}
```

</b></details>

<details>
<summary>是否可以将条件语句和循环结合起来？</code></summary><br><b>

是的，例如：

```
dynamic "tag" {
  for_each = {
    for key, value in var.tags:
    key => value
    if key != ""
  }
}
```

</b></details>

<a name="misc"></a>
#### 杂项

<details>
<summary>什么是元参数 Terraform?</summary><br><b>

影响资源生命周期（其创建、修改等）并由 Terraform 无论使用它们的资源类型如何。

一些例子：

- 计数：根据资源的一个定义创建多少个资源
- 生命周期：如何处理资源创建或删除

</b></details>

<details>
<summary>您熟悉哪些元参数？</summary><br><b>

- 计数：根据资源的一个定义创建多少个资源
- 生命周期：如何处理资源创建或删除
- depends_on：创建资源之间的依赖关系
  </b></details>

<details>
<summary>什么 <code>模板文件</code> 功能有吗？</summary><br><b>

渲染模板文件并以字符串形式返回结果。

</b></details>

<details>
<summary>您尝试使用 templatefile 作为模块的一部分，并使用相对路径来加载文件，但有时会失败，特别是当其他人尝试重用该模块时。你能怎么处理这个问题？</summary><br><b>

使用所谓的路径引用切换相对路径。这些是修复：模块根路径、模块表达式文件路径等路径。

</b></details>

<details>
<summary>如何测试 terraform 语法？</summary><br><b>

一个有效的答案可能是“我写 Terraform 配置并尝试执行它”，但这使得测试变得很麻烦并且通常非常复杂。

有 `terraform console` 命令，它允许您轻松执行 terraform 函数并尝试通用语法。

</b></details>

<details>
<summary>判断题： Terraform 应谨慎使用控制台，因为它可能会修改您的资源</summary><br><b>

错误。 terraform 控制台是只读的。

</b></details>

<details>
<summary>您需要渲染一个模板并将其作为字符串获取。您会使用哪个功能？</summary><br><b>

`templatefile` 功能。

</b></details>

<details>
<summary>解释一下什么 <code>depends_on</code> 用于并给出示例</summary><br><b>

`depends_on` 用于在资源之间创建显式依赖关系 Terraform。例如，您想要在集群中部署一个应用程序。如果集群还没有准备好（并且还由 Terraform 当然）那么您就无法部署该应用程序。在这种情况下，您将在应用程序配置中定义“depends_on”，其值将是集群资源。

</b></details>

<a name="modules"></a>
### 模块

<details>
<summary>解释模块</summary><br><b>

[Terraform.io](https://www.terraform.io/language/modules/develop)：“模块是一起使用的多个资源的容器。模块可用于创建轻量级抽象，以便您可以根据其架构而不是直接根据物理对象来描述您的基础设施。”

此外，模块非常适合创建可重用的 Terraform 代码不仅可以在不同的存储库之间共享和使用，甚至可以在同一存储库内、不同的环境（例如登台和生产）之间共享和使用。设计良好的模块还暴露了一个小的、固执己见的表面并隐藏了实现细节。

</b></details>

<details>
<summary>是什么让一个 Terraform 代码模块？换句话说，从实际的角度来看，模块是什么？</summary><br><b>

基本上，目录中的任何文件都是模块 Terraform。定义模块不需要使用特殊的语法。根配置本身就是一个模块，从它调用的任何模块都被视为子模块。

</b></details>

<details>
<summary>什么时候应该使用模块而不是内联资源？</summary><br><b>

- 您需要跨环境、团队或区域重用基础架构模式，而无需复制粘贴。<br>
- 您希望将最佳实践（命名、标记、安全控制）编入稳定的界面背后。<br>
- 您需要使用语义发布来版本化和促进基础设施变更 CI 管道。<br>
- 您希望通过更新一个模块并逐步发布来限制爆炸半径。
  </b></details>

<details>
<summary>可重用模块的推荐布局是什么？</summary><br><b>

```text
modules/vpc/
  main.tf
  variables.tf
  outputs.tf
  versions.tf
  README.md
  examples/
    basic/
      main.tf
```

- `main.tf` 定义资源、数据源和局部变量。<br>
- `variables.tf` 包含带有描述和验证的键入输入。<br>
- `outputs.tf` 公开下游堆栈所需的最小输出集。<br>
- `versions.tf` 固定兼容的 Terraform 和 provider 版本。<br>
- `examples/` 托管用于文档和测试的可运行示例，通常由 CI.
  </b></details>

<details>
<summary>如何使用版本控制模块 VCS 或 Terraform 注册表？</summary><br><b>

```hcl
module "vpc" {
  source  = "git::https://github.com/org/infra-modules.git//vpc?ref=v1.2.3"
  cidr    = "10.0.0.0/16"
  azs     = ["us-east-1a", "us-east-1b"]
}
```

- 对于注册表模块，请使用 `version` 约束（例如 `version = ">= 1.2.0, < 2.0.0"`).<br>
- 始终固定模块版本以保持计划的可重复性，并在升级之前检查上游版本。<br>
- 首选标签或不可变 SHA VCS 保证可重复构建的来源。
  </b></details>

<details>
<summary>模块如何有效地处理输入、输出、局部变量和验证？</summary><br><b>

- 定义带有默认值的类型变量 `validation` 防止无效的块 CIDR， AZ 计数或空字符串。<br>
- 使用 `locals` 转换数据或派生名称，并与 `for_each`/`count` 用于确定性资源创建。<br>
- 文档输出于 `outputs.tf`，标记敏感的，并保持输出最小以减少耦合。<br>
- 通过下游模块或自动化的输出来显示模块元数据（例如版本或标签）。
  </b></details>

<details>
<summary>您应该避免哪些模块反模式？</summary><br><b>

- 在模块内嵌入 provider block，这会让跨账号复用变得更困难。<br>
- 接受过于通用的 `map(any)` 输入隐藏所需的结构而不是类型对象。<br>
- 输出 Secret 或凭证时没有使用 `sensitive = true`，也没有使用 Secret store。<br>
- 创建混合网络、计算和应用程序问题的“上帝”根模块，而不是组合较小的模块。<br>
- 复制和粘贴模块，无需版本控制、文档或自动化测试。
  </b></details>

<details>
<summary>在开发过程中如何测试和检查模块？</summary><br><b>

```bash
terraform -chdir=examples/vpc init
terraform -chdir=examples/vpc validate
terraform -chdir=examples/vpc plan
tflint --module
```

- `terraform validate` 捕获语法错误和缺失的 provider。<br>
- 对示例 stack 运行 `plan`，可以在升级前发现集成问题。<br>
- `tflint --module` 添加 provider 特定的 linting；Terratest 等工具可以创建临时基础设施来执行断言。<br>
- 将这些命令包含在 CI 因此每个模块的更改都是自动执行的。
  </b></details>

<details>
<summary>你如何测试 Terraform 模块？</summary><br><b>

有多个答案，但最常见的做法可能是使用 <code>Terratest</code>，测试模块是否可以初始化、创建资源并干净地销毁这些资源。也可以结合 `terraform validate`、针对示例配置的 `terraform plan`，以及 `tflint` 等 linting 工具。

</b></details>

<details>
<summary>创建模块时，您更喜欢使用内联块、单独的资源还是两者都使用？为什么？</summary><br><b>

这里没有对错。<br><br>
就我个人而言，我更喜欢在模块中仅使用单独的资源，因为它使模块更加灵活。因此，如果资源包含内联块，这可能会在某些时候限制您。

</b></details>

<details>
<summary>判断题：模块源只能是本地路径</summary><br><b>

错误。它可以是一个 Git URL, HTTP URL, ...例如：

```
module "some_module" {

  source = "github.com/foo/modules/bar?ref=v0.1"
}
```

</b></details>

<details>
<summary>哪里可以获得 Terraform 模块？</summary><br><b>

Terraform 模块可以在 [Terraform Registry](https://registry.terraform.io/browse/modules) 找到。

</b></details>

<details>
<summary>您注意到某些模块中有相对路径，并且您想更改它。你能做什么？为什么这是一个问题？</summary><br><b>

相对路径通常在您自己的环境中工作得很好，因为您熟悉所使用的布局和路径，但是当共享模块并使其可重用时，您可能会遇到问题，因为它在相对路径可能不再相关的不同环境中运行。

更好的方法是使用 `path reference` 例如以下之一：

- `path.module`：使用表达式的模块的路径
- `path.cwd`：当前工作目录的路径
- `path.root`：根模块的路径

</b></details>

<a name="modules-hands-on"></a>
#### 模块实践

<details>
<summary>如何使用模块？</summary><br><b>

一般语法是：

```hcl
module "<MODULE_NAME>" {
  source  = "<MODULE_SOURCE>"
  version = ">= 1.2.0, < 2.0.0"

  # module inputs
}
```

关键部分是你用来讲述的来源 Terraform 在哪里可以找到该模块。当模块来自注册表时，您可以固定 `version`;对于本地路径，请忽略该属性。
</b></details>

<details>
<summary>演示在路径“../modules/amazing-module”中使用名为“amazing_modle”的模块</summary><br><b>

```
module "amazing_module" {
  source = "../modules/amazing-module"
}
```

</b></details>

<details>
<summary>每次修改模块的source参数时应该做什么？</summary><br><b>

运行 `terraform init -upgrade` （或 `terraform get -update` 在旧版本上）所以 Terraform 下载新版本的模块并更新 `.terraform/modules` 目录。
</b></details>

<details>
<summary>如何访问模块输出变量？</summary><br><b>

一般语法是 `module.<MODULE_NAME>.<OUTPUT_VAR_NAME>`

</b></details>

<details>
<summary>您想从模块目录加载并渲染文件。怎么做呢？</summary><br><b>

script = templatefile("${path.module}/user-data.sh", {
...
})

</b></details>

<details>
<summary>有一个用于创建计算实例的模块。您将如何使用该模块创建三个单独的实例？</summary><br><b>

开始于 Terraform 0.13， `count` 元参数可以与模块一起使用。所以你可以使用这样的东西：

```
module "instances" {
  source = "/some/module/path"

  count = 3
}
```

您还可以在输出变量中使用它： `value = module.instances[*]`

</b></details>

<details>
<summary>如何使用模块 <code>for_each</code> 为每个可用区创建网络？</summary><br><b>

```hcl
module "subnet" {
  source   = "../modules/subnet"
  for_each = toset(var.azs)

  name = "subnet-${each.key}"
  az   = each.value
}
```

`for_each` 保持地址稳定，并允许您添加或删除可用区，而无需重新创建整个模块。
</b></details>

<a name="interview-cheatsheet"></a>
#### 面试备忘单

- remote state 应放在加密、启用版本控制的 S3 bucket 中，并配合 DynamoDB 表做 locking。
- 启用 backend 时，运行 `terraform init -migrate-state` 可以安全迁移现有 state。
- 每次变更前，用 `terraform plan -refresh-only` 快速检测 drift。
- 使用 `terraform show -json | jq '.values.root_module.resources[].address'` 做脚本化 state review。
- 不要把 `.tfstate*` 提交到 Git；授予 IAM 最小权限并轮换 state 访问凭据。
- 构造可重用模块 `main.tf`, `variables.tf`, `outputs.tf`, `versions.tf`, `README.md`，和一个 `examples/` 文件夹。
- 固定模块版本（`?ref=` 或 `version` 约束），让 plan 可重复，并仔细审查升级。
- 验证模块 CI 使用 `terraform validate`, `terraform plan` 关于示例，以及 `tflint --module`.
- 避免模块反模式，例如嵌入 provider block、暴露 Secret 或使用过于通用的输入。
- 在模块内部使用 `locals` 加 `for_each`，实现可预测的命名和按环境定制。

<a name="import"></a>
### 进口

<details>
<summary>解释一下 Terraform的导入功能</summary><br><b>

`terraform import` 是一个 CLI 命令，用于将现有基础设施导入 Terraform state。

它不会创建用于管理这类基础设施的定义或配置。

</b></details>

<details>
<summary>列出两个会使用 <code>terraform import</code> 的场景</summary><br><b>

1. 某个 provider 中已有资源，但它们还不受 Terraform 管理（即不在 Terraform state 中）
2. 您丢失了 tfstate 文件并需要重建它

</b></details>

<a name="version-control"></a>
### 版本控制

<details>
<summary>你有一个 Git 存储库与 Terraform 文件，但没有 .gitignore。您会在 .gitignore 文件中添加什么内容 Terraform 存储库？</summary><br><b>

```
**/.terraform/*
*.tfstate
*.tfstate.*
*.tfvars
*.tfvars.json
```

你不应该把 `.terraform` 目录、state 文件或下载的 provider 提交到版本控制。共享或存储 state 备份文件通常也没有意义。

</b></details>

<a name="aws-1"></a>
### AWS

<details>
<summary>如果您在以下情况下更新 user_data 并应用更改，会发生什么情况？

```
resource "aws_instance" "example" {
 ami = "..."
 instance_type = "t2.micro"

 user_data = <<-EOF
             #!/bin/bash
             echo "Hello, World" > index.xhtml
 EOF
}
```

</summary><br><b>

没什么，因为 user_data 是在启动时执行的，所以如果实例已经在运行，它不会改变任何东西。

为了使其有效，你必须使用 `user_data_replace_on_change = true`.

</b></details>

<details>
<summary>你管理 ASG 与 Terraform 这意味着您还拥有“aws_launch_configuration”资源。问题是启动配置是不可变的，有时您需要更改它们。这会产生一个问题 Terraform 无法删除 ASG 因为它们引用了旧的启动配置。该如何处理呢？</summary><br><b>

将以下内容添加到“aws_launch_configuration”资源

```
lifecycle {
  create_before_destroy = true
}
```

这将改变如何的顺序 Terraform 作品。首先它将创建新资源（启动配置）。然后它将更新其他资源以引用新的启动配置，最后它将删除旧资源

</b></details>

<details>
<summary>如何管理多个 region 的 AWS provider 配置？</summary><br><b>

```
provider "aws" {
  region = "us-west-1"
  alias = "west_region"
}

provider "aws" {
  region = "us-east-1"
  alias = "east_region"
}

data "aws_region" "west_region" {
  provider = aws.west_region
}

data "aws_region" "east_region" {
  provider = aws.east_region
}
```

使用方法：

```
resource "aws_instance" "west_region_instance" {
  provider = aws.west_region
  instance_type = "t2.micro"
  ...
}
```

</b></details>

<details>
<summary>假设您配置了多个区域，并且您想在其中之一使用一个模块。如何实现这一目标？</summary><br><b>

```
module "some_module" {
  source = "..."

  providers = {
    aws = aws.some_region
  }

  ...
}
```

</b></details>

<details>
<summary>如何管理多个 AWS 账户？</summary><br><b>

一种方法是定义多个不同的 provider block，每个 block 都有自己的 `assume_role`。

```
provider "aws" {
  region = "us-west-1"
  alias = "some-region"

  assume_role {
    role_arn = "arn:aws:iam::<SOME_ACCOUNT_ID>:role/<SOME_ROLE_NAME>"
  }
}
```

</b></details>

<a name="validations"></a>
### 验证

<details>
<summary>您将如何强制使用您的变量的用户提供具有某些约束的值？例如，大于 1 的数字</summary><br><b>

使用 `validation` 块

```
variable "some_var" {
  type = number

  validation {
    condition = var.some_var > 1
    error_message = "you have to specify a number greater than 1"
  }

}
```

</b></details>

<a name="secrets"></a>
### Secret

<details>
<summary>以下 provider 配置有什么问题？

```
provider "aws" {
  region = "us-west-1"

  access_key = "blipblopblap"
  secret_key = "bipbopbipbop"
}
```

</summary><br><b>

这不安全！您绝对不应该以这种方式以纯文本形式存储凭据。

</b></details>

<details>
<summary>如何避免把 provider 凭证以明文形式存储在 Terraform 配置文件中？</summary><br><b>

1. 使用环境变量
2. 使用密码管理 CLI（例如通用的 1Password，也可以使用 provider 相关工具，例如 aws-vault）

</b></details>

<details>
<summary>您如何管理Secret/凭证 CI/CD?</summary><br><b>

这很大程度上取决于你使用的 CI/CD 系统或平台。

- GitHub Actions：使用 OpenID Connect（OIDC）与 provider 建立信任关系。然后可以在 GitHub Actions workflow 中这样做：

```
- uses: aws-actions/configure-aws-credentials@v1
with:
 role-to-assume: arn:aws:iam::someIamRole
 aws-region: ...
```

- Jenkins：如果 Jenkins 运行在某个 provider 的基础设施上，可以使用该 provider 的访问实体（如 role、policy 等）授予 Jenkins 所在实例访问权限
- CircleCI: 你可以使用 `CircleCI Context` 然后在您的中指定它 CircleCI 配置文件

```
context:
- some-context
```

</b></details>

<details>
<summary>使用环境变量来管理机密的优点和缺点是什么 Terraform 配置？</summary><br><b>

优点：

- 您避免直接在纯文本配置中使用机密
- 免费（无需支付保密管理平台/解决方案费用）
- 使用简单

缺点：

- 如果没有环境变量，配置可能无法使用，这可能会影响用户体验，因为用户必须知道应该传递哪些环境变量才能使一切正常工作
- 大部分在外部进行管理 Terraform 当依赖于用户传递环境变量时，使得执行、跟踪……与Secret相关的任何内容变得困难

</b></details>

<details>
<summary>判断题：如果通过环境变量传递 Secret，它们在 Terraform state 中不可见</summary><br><b>

错误。Terraform state 可能包含敏感数据。因此无论把 state 存在哪里，都必须加密，并且只允许真正需要访问的人访问。

</b></details>

<details>
<summary>判断题：如果您从集中式 Secret 存储（如 HashiCorp Vault）传递 Secret，它们在 plan 文件（terraform plan）中不可见</summary><br><b>

错误。无论 Secret 存储在哪里（文件、环境变量、集中式 Secret 存储），它们都可能出现在 state 文件和 plan 输出中。

</b></details>

<a name="production"></a>
### 生产

本节是关于如何 Terraform 实际上用于现实生活场景和组织中。

<details>
<summary>您的项目使用什么结构布局？</summary><br><b>

答案没有正确或错误之分，只有您个人或您的团队采用的答案，并能够解释原因。

一种常见的方法是为每个环境设置一个单独的目录。

```
terraform_project/
  staging/
  production/
```

每个环境都有自己的后端（因为您不想对所有环境使用相同的身份验证和访问控制）

Go进一步，在每个环境下，您将在组件、应用程序和服务之间进行区分

```
terraform_project/
  staging/
    applications/
      some-app-service-1/
      some-app-service-2/
    databases/
      mongo/
      postgres/
    networking/
```

</b></details>

<details>
<summary>你有什么文件你有 Terraform 项目？</summary><br><b>

再说一遍，没有正确或错误的答案。只是你的个人经历。

main.tf
providers.tf
outputs.tf
variables.tf
依赖项.tf

如果需要的话，这些文件中的每一个都可以分成更小的部分（没有理由维护 VERY 长文件）

</b></details>

<details>
<summary>您团队中的一位工程师抱怨必须在不同文件夹和文件之间复制粘贴大量代码 Terraform。你会怎么做？</summary><br><b>

建议使用 Terraform 模块。

</b></details>

<details>
<summary>当使用许多目录的嵌套布局时，在许多不同的文件夹中运行 terraform 命令可能会变得很麻烦。怎么处理呢？</summary><br><b>

有多种方法可以处理：

1. 编写在不同条件下递归执行某些命令的脚本
2. 使用 Terragrunt 等工具，您可以在其中执行“run-all”等命令，这些命令可以在多个不同路径上并行运行

</b></details>

<details>
<summary>您团队中的一位工程师抱怨内联 shell 脚本相当大，并且将它们维护在 Terraform 文件似乎是个坏主意。你会怎么办？</summary><br><b>

不包含内联 shell 脚本（如在 terraform 配置文件中）的一个好解决方案是将它们保存在单独的文件中，然后使用 terraform `templatefile` 渲染并获取它们作为字符串的函数

</b></details>

<details>
<summary>你注意到你的很多 Terraform 代码/配置在存储库之间以及不同目录之间的同一存储库内是重复的。您可以采用哪一种方法来帮助解决这个问题？</summary><br><b>

使用 Terraform 模块可以极大地帮助处理重复的代码，因此不同的环境（例如登台和生产）可以通过使用相同的模块来重用相同的代码。

</b></details>

<details>
<summary>你注意到你的 Terraform 代码包含相当多的硬编码值（如端口、子网等），并且它们在许多位置重复。你是怎么处理的？</summary><br><b>

使用变量可能不是一个好的解决方案，因为有些东西不应该被暴露和意外覆盖。在这种情况下，您可能需要使用以下概念 `locals`

</b></details>

<details>
<summary>每当标签标准发生变化（例如，您的团队决定更改其中一个标签的名称）时，您就会发现自己在多个文件中更改标签，并且发现这个过程非常乏味。对此我们能做些什么呢？</summary><br><b>

不要在资源级别逐个定义标签，而是考虑在 provider 配置中使用 `default_tags`。

</b></details>

<details>
<summary>您想更改资源的名称，但又担心导致停机。可以做什么？</summary><br><b>

如果需要更改资源名称，您可以使用 `terraform state mv <ORIGINAL_RESOURCE_NAME> <NEW_RESOURCE_NAME>`

</b></details>

<details>
<summary>您尝试在该集群上部署集群和应用程序，但应用程序资源是在集群之前创建的。如何处理这种情况？</summary><br><b>

使用元参数 `depends_on` 在应用程序资源定义中。这样，应用程序将依赖于集群资源，并且在创建资源时将保持顺序。

</b></details>
