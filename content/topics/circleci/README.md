<a name="circle-ci"></a>
# 圆 CI

<a name="circle-ci-questions"></a>
## 圆 CI 问题

<a name="circle-ci-101"></a>
### 圆 CI 101

<details>
<summary>什么是圆 CI?</summary><br><b>

[圆 CI](https://circleci.com): "CircleCI 是一个持续集成和持续交付平台，可用于实施 DevOps 的做法。”
</b></details>

<details>
<summary>Circle 有哪些好处 CI?</summary><br><b>

[圆 CI 文档](https://circleci.com/docs/about-circleci): "SSH 进入任何工作来调试您的构建问题。
在 .circleci/config.yml 文件中设置并行性以更快地运行作业。
使用两个简单的键配置缓存，以重用工作流程中先前作业的数据。
配置自托管运行器以获得独特的平台支持。
访问机器执行器的 Arm 资源。
使用 orbs（可重用的配置包）与第三方集成。
使用预建的 Docker 多种语言的图像。
使用 API
 检索有关作业和工作流程的信息。
使用 CLI 在本地访问高级工具。
通过测试洞察来进行片状测试检测。”
</b></details>

<details>
<summary>解释以下内容：

* 管道
* 工作流程
* 工作机会
* 步骤
</summary><br><b>

* 管道：整条 CI/CD 配置（.circleci/config.yaml）
* 工作流：主要在配置中有多个作业来编排工作流时使用
* 作业：作为作业的一部分执行的一个或多个步骤 CI/CD 过程
* 步骤：实际执行的命令
</b></details>

<details>
<summary>什么是宝珠？</summary><br><b>

[圆 CI 文档](https://circleci.com/developer/orbs)：“Orbs 是可共享的包 CircleCI 您可以用来简化构建的配置” 

它们可以来自公共注册表，也可以作为组织的一部分私下定义。
</b></details>

<a name="circle-ci-hands-on-101"></a>
### 圆 CI 实践101

<details>
<summary>Where（项目中的哪个位置）Circle CI 管道是否已定义？</summary><br><b>

`.circleci/config.yml`
</b></details>

<details>
<summary>解释一下下面的配置文件


```
version: 2.1

jobs:
  say-hello:
    docker:
      - image: cimg/base:stable
    steps:
      - checkout
      - run:
          name: "Say hello"
          command: "echo Hello, World!"
workflows:
  say-hello-workflow:
    jobs:
      - say-hello
```
</summary><br><b>

该配置文件将设置一项作业，该作业将签出项目的代码并将运行命令 `echo Hello, World!`.
它将使用图像在容器中运行 `cimg/base:stable`.
</b></details>