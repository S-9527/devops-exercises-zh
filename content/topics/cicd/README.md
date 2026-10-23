<a name="cicd"></a>
## CI/CD

<a name="cicd-exercises"></a>
### CI/CD 练习

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 设置一个 CI 管道 | CI | [练习](ci_for_open_source_project.md) | | |
| 部署到 Kubernetes | Deployment | [练习](deploy_to_kubernetes.md) | [解决方案](solutions/deploy_to_kubernetes/README.md) | |
| Jenkins - Remove Jobs | Jenkins 脚本 | [练习](remove_jobs.md) | [解决方案](solutions/remove_jobs_solution.groovy) | |
| Jenkins - Remove Builds | Jenkins 脚本 | [练习](remove_builds.md) | [解决方案](solutions/remove_builds_solution.groovy) | |

<a name="cicd-self-assessment"></a>
### CI/CD 自我评估

<details>
<summary>什么是持续集成？</summary><br><b>

开发人员经常将代码集成到共享存储库中的开发实践。其范围可以是每天或每周进行几次更改，也可以是一小时内进行几次更大规模的更改。

每一段代码（更改/补丁）都经过验证，以确保更改可以安全地合并。如今，使用自动构建来测试更改已成为一种常见做法，以确保代码可以集成。它可以是一个在不同级别（单元、功能等）运行多个测试的构建，也可以是多个单独的构建，所有或部分构建必须通过这些测试才能将更改合并到存储库中。
</b></details>

<details>
<summary>什么是连续 Deployment?</summary><br><b>

开发人员用来将软件自动发布到生产中的开发策略，其中任何代码提交都必须通过自动化测试阶段。只有成功后，该版本才被认为值得投入生产。这消除了任何人为交互，并且只有在设置了可用于生产的管道并实时监控和报告已部署资产之后才应实施。如果在生产中检测到任何问题，应该很容易回滚到以前的工作状态。

欲了解更多信息，请阅读 [这里](https://www.atlassian.com/continuous-delivery/continuous-deployment)
</b></details>

<details>
<summary>你能描述一个例子吗 CI （和/或 CD）流程从开发人员提交更改的那一刻开始/PR 到存储库？</summary><br><b>

对于这样的问题有很多答案，例如 CI 流程会有所不同，具体取决于所使用的技术以及提交变更的项目类型。
此类过程可包括以下一个或多个阶段：

* 编译 
* 构建
* 安装
* 配置
* 更新
* 测试

一个可能答案的示例：

开发人员向项目提交了拉取请求。的 PR （拉取请求）触发了两项作业（或一项组合作业）。第一个作业用于对更改运行 lint 测试，第二个作业用于构建包含提交的更改的包，并使用该包运行多个 api/场景测试。一旦所有测试通过并且更改得到维护者/核心的批准，它就会被合并/推送到存储库。如果某些测试失败，则不允许将更改合并/推送到存储库。

完全不同的答案或 CI 流程，可以描述开发人员如何将代码推送到存储库，然后触发工作流程以构建容器映像并将其推送到注册表。一旦进入注册表，k8s 集群就会应用新的更改。
</b></details>

<details>
<summary>什么是持续交付？</summary><br><b>

用于频繁交付代码的开发策略 QA 和用于测试的操作。这需要有一个具有类似于生产功能的暂存区，其中只有在手动审核后才能接受更改以进行生产。由于这种人为纠缠，发布和审核之间通常存在时间滞后，使得与持续部署相比速度更慢且容易出错。

欲了解更多信息，请阅读 [这里](https://www.atlassian.com/continuous-delivery/continuous-deployment)
</b></details>

<details>
<summary>持续交付和持续交付有什么区别 Deployment?</summary><br><b>

两者都封装了部署在中编译和/或测试的更改的相同过程。 CI 管道。<br>
两者之间的区别在于，与持续交付相反，持续交付不是完全自动化的过程 Deployment 在此过程中测试的每个更改最终都会部署到生产中。在持续交付中，有人要么批准部署过程，要么部署过程基于约束和条件（例如每周/每月/...部署的时间限制）
</b></details>

<details>
<summary>什么 CI/CD 您熟悉最佳实践吗？或者你认为什么是 CI/CD 最佳实践？</summary><br><b>

* 经常提交和测试。
* 测试/登台环境应该是生产环境的克隆。
* 清理您的环境（例如您的 CI/CD 管道可以创造大量资源。他们还应该清理他们创造的所有东西）
* 的 CI/CD 管道在本地或远程执行时应提供相同的结果
* 治疗 CI/CD 作为您组织中的另一个应用程序。不是作为粘合代码。
* 按需环境而不是预先分配资源 CI/CD 目的
* 管道的阶段/步骤/任务应在应用程序或微服务之间共享（不要重新发明“克隆项目”等常见任务）
</b></details>

<details>
<summary>您将获得一个管道和一个包含 3 个工作线程的池：虚拟机、裸机和容器。您将如何决定由哪一个来运行管道？</summary><br><b>

决定使用哪种类型的工作线程（虚拟机、裸机或容器）来运行管道将取决于多个因素，包括管道的性质、正在构建的软件的要求、可用资源以及开发和部署过程的具体目标和约束。以下是一些有助于做出决定的考虑因素：

1. 管道要求
2. 资源可用性
3. 可扩展性和灵活性
4. Deployment 和隔离要求
5. 安全考虑
6. 开发和运营工作流程
7. 成本考虑

基于这些考虑因素，将通过权衡每个选项的优缺点并与开发和部署过程的具体要求、资源和目标保持一致来确定运行管道的适当工作线程（虚拟机、裸机或容器）。咨询相关利益相关者（例如开发人员、运营和基础设施团队）以收集意见并做出明智的决策也可能很有用。
</b></details>

<details>
<summary>你在哪里存储 CI/CD 管道？为什么？</summary><br><b>

关于存储位置有多种方法 CI/CD 管道定义：

1. 应用程序存储库 - 将它们存储在正在构建或测试的应用程序的同一存储库中（可能是最流行的存储库）
2. 中央存储库 - 存储所有组织/项目 CI/CD 一个单独的存储库中的管道（当多个团队测试同一组项目并且最终拥有许多管道时，这可能是最好的方法）
3. CI 每个应用程序存储库的存储库 - 您分开 CI 应用程序代码中的相关代码，但您不会将所有内容放在一个地方（由于维护，这可能是最糟糕的选择）
4. 该平台所在的 CI/CD 正在执行管道（例如 Kubernetes Tekton/ 情况下的集群OpenShift 管道）。
</b></details>

<details>
<summary>您如何执行计划容量 CI/CD 资源？ （例如服务器、存储等）</summary><br><b>

容量规划 CI/CD 资源涉及估计支持所需的资源 CI/CD 管道并确保基础设施有足够的容量来满足管道的需求。以下是执行容量规划的一些步骤 CI/CD 资源：

1. 分析工作量
2. 监控当前使用情况
3. 识别资源瓶颈
4. 预测未来需求
5. 成长计划
6. 考虑可扩展性和弹性
7. 评估成本和预算
8. 持续监控和调整

通过执行以下步骤，您可以有效地规划您的容量 CI/CD 资源，确保您的管道有足够的资源来高效运行并满足您的开发过程的需求。
</b></details>

<details>
<summary>您将如何构建/实施 CD 对于依赖于其他几个应用程序的应用程序？</summary><br><b>

实施持续 Deployment (CD）对于依赖于其他几个应用程序的应用程序，需要仔细规划和协调，以确保在整个生态系统中顺利、高效地部署变更。以下是构建/实施的一些一般步骤 CD 对于具有依赖项的应用程序：

1. 定义部署管道
2. 自动化部署过程
3. 版本控制和依赖管理
4. 持续集成和测试
5. 滚动部署
6. 监控和管理依赖关系
7. 整个生态系统的测试
8. 回滚和恢复策略
9. 安全性和合规性
10. 文档和沟通

实施 CD 对于具有依赖关系的应用程序，需要仔细规划、协调和自动化，以确保高效可靠的部署。通过遵循自动化、版本控制、测试、监控、回滚策略和有效沟通等最佳实践，您可以确保项目顺利成功 CD 您的应用程序生态系统的流程。
</b></details>

<details>
<summary>你如何衡量你的 CI/CD 质量？您是否使用任何指标或 KPI 来衡量质量？</summary><br><b>

测量质量 CI/CD 流程对于确定需要改进的领域、确保高效可靠的软件交付以及实现持续改进至关重要。以下是一些常用的指标和KPI（关键绩效指标）来衡量 CI/CD 质量：

1. 构建成功率：该指标衡量成功构建占构建总数的百分比。构建成功率高表明大多数构建都是成功的，并且 CI/CD 管道稳定。
2. 构建和 Deployment 时间：该指标衡量从代码提交到生产构建和部署更改所需的时间。更快的构建和部署时间意味着更短的反馈循环和更快的上市时间。
3. Deployment 频率：该指标衡量给定时间段内部署到生产的频率。更高的部署频率意味着更快的发布周期和更频繁的生产更新。
4. 平均检测时间 (MTTD)：该指标衡量检测问题或缺陷所需的平均时间 CI/CD 管道或生产环境。较低 MTTD 表示更快地检测和解决问题，从而实现更高质量和更可靠的部署。
5. 平均恢复时间（MTTR)：该指标衡量从问题或事件中恢复所需的平均时间 CI/CD 管道或生产环境。较低 MTTR 表明恢复速度更快，停机时间更少，从而提高可用性和可靠性。
6. 反馈循环时间：该指标衡量接收代码更改反馈所需的时间，包括代码审查、测试结果和其他反馈机制。更快的反馈循环时间可以实现更快的迭代和更快的改进 CI/CD 过程。
7. 客户满意度：该指标衡量最终用户或客户对已部署软件的质量和可靠性的满意度。较高的客户满意度表明 CI/CD 流程正在交付满足客户期望的高质量软件。

这些只是可用于衡量质量的指标和 KPI 的一些示例 CI/CD 流程。选择与组织的目标相一致的指标并定期跟踪和分析它们以不断改进组织的目标非常重要。 CI/CD 流程并确保高质量的软件交付。
</b></details>

<a name="cicd---jenkins"></a>
#### CI/CD - Jenkins

<details>
<summary>什么是 Jenkins？你用它来做什么？</summary><br><b>

Jenkins 是一个用 Java 编写的开源自动化工具，带有为持续集成目的而构建的插件。 Jenkins 用于持续构建和测试您的软件项目，使开发人员更容易将更改集成到项目中，并使用户更容易获得新的构建。它还允许您通过集成大量测试和部署技术来持续交付软件。

Jenkins 集成各种开发生命周期流程，包括构建、文档、测试、打包、阶段、部署、静态分析等等。

</b></details>

<details>
<summary>有什么优点 Jenkins 超过你的竞争对手？您能将其与以下系统之一进行比较吗？

  * 特拉维斯
  * 竹子
  * 团队城市
  * CircleCI</summary><br><b>

  Jenkins 与 Travis、Bamboo、TeamCity 等竞争对手相比，具有多项优势 CircleCI。以下是一些主要优势：

1. 开源且免费
2. 可定制且灵活
3. 广泛的集成和插件
4. 活跃且支持的社区

比较时 Jenkins 与其竞争对手相比，在特性和功能方面存在一些关键差异。例如：

- Travis：Travis 是一个基于云的 CI/CD 平台以其易用性和快速设置而闻名。然而，与相比，它的定制选项和集成较少 Jenkins.
- 竹子：竹子是 CI/CD 来自 Atlassian 的工具，Atlassian 的制造商 JIRA 和汇合。它提供了一系列用于构建、测试和部署软件的功能，但与 Jenkins.
- TeamCity：TeamCity 是一个 CI/CD 来自 IntelliJ 制造商 JetBrains 的工具 IDEA。它提供了一系列用于构建、测试和部署软件的功能，但与 Jenkins.
- CircleCI: CircleCI 是一个基于云的 CI/CD 以其快速构建时间和易于集成而闻名的平台 GitHub。然而，与 Jenkins，特别是对于较大的项目。
</b></details>

<details>
<summary>有哪些限制或缺点 Jenkins?</summary><br><b>

这可能被认为是一个固执己见的答案：

* 老式仪表板没有太多自定义选项
* 容器准备情况（这已得到改善 Jenkins 十)
* 就其本身而言，它没有太多功能。另一方面，社区创建了许多插件来扩展其功能
* 管理 Jenkins 它的管道作为代码可能是一场噩梦
</b></details>

<details>
<summary>解释以下内容：

- 职位
- 构建
- 插件
- 节点或工作人员
- 执行者</summary><br><b>
- 作业是一个自动化定义=用户单击“构建”后要执行的内容和位置 
- 构建是作业的运行实例。您可以在任何给定时间点进行一个或多个构建（除非受配置限制）
- 工作线程是运行构建的机器/实例。当构建开始时，它会从池中“获取”一个工作线程来在其上运行。
- 执行器是工作程序的变量，定义可以在该工作程序上并行运行多少个构建。执行程序值为 3 意味着 3 个构建可以在该执行程序上的任何点运行（不一定是同一作业。任何构建）
</b></details>

<details>
<summary>你用过哪些插件 Jenkins?</summary><br><b>

Jenkins 拥有庞大的插件库，最常用的插件取决于每个组织的具体需求和要求。然而，这里有一些最流行和广泛使用的插件 Jenkins:

    Pipeline: This plugin allows users to create and manage complex, multi-stage pipelines using a simple and easy-to-use scripting language. It provides a powerful and flexible way to automate the entire software delivery process, from code commit to deployment.

    Git: This plugin provides integration with Git, one of the most popular version control systems used today. It allows users to pull code from Git repositories, trigger builds based on code changes, and push code changes back to Git.

    Docker: This plugin provides integration with Docker, a popular platform for building, shipping, and running distributed applications. It allows users to build and run Docker containers as part of their build process, enabling easy and repeatable deployment of applications.

    JUnit: This plugin provides integration with JUnit, a popular unit testing framework for Java applications. It allows users to run JUnit tests as part of their build process and generates reports and statistics on test results.

    Cobertura: This plugin provides code coverage reporting for Java applications. It allows users to measure the code coverage of their tests and generate reports on which parts of the code are covered by tests.

    Email Extension: This plugin provides advanced email notification capabilities for Jenkins. It allows users to customize the content and format of email notifications, including attachments, and send notifications to specific users or groups based on build results.

    Artifactory: This plugin provides integration with Artifactory, a popular artifact repository for storing and managing binaries and dependencies. It allows users to publish and retrieve artifacts from Artifactory as part of their build process.

    SonarQube: This plugin provides integration with SonarQube, a popular code quality analysis tool. It allows users to run code quality checks and generate reports on code quality metrics such as code complexity, code duplication, and code coverage.
</b></details>

<details>
<summary>你用过吗 Jenkins 为了 CI 或 CD 流程？你能描述一下它们吗？</summary><br><b>

假设我们有一个使用以下代码构建的 Web 应用程序 Node.js，我们希望使用自动化其构建和部署过程 Jenkins。这是我们如何设置一个简单的 CI/CD 管道使用 Jenkins:

1. 安装 Jenkins: 我们可以安装 Jenkins 在专用服务器或云平台上，例如 AWS 或 Google Cloud.
2. 安装必要的插件：根据项目的具体需求，我们可能需要安装NodeJS、 Git, Docker以及项目所需的任何其他插件。
3. 创建新工作：在 Jenkins，作业是一组定义的指令，用于自动执行特定任务。我们可以创建一个新作业并配置它来构建我们的 Node.js 应用程序。
4. 配置作业：我们可以配置作业以从 Git 存储库，使用安装任何必要的依赖项 Node.js，运行单元测试，并使用构建脚本构建应用程序。
5. 设置部署环境：我们可以设置一个单独的环境来部署应用程序，例如临时环境或生产环境。我们可以使用 Docker 创建应用程序的容器映像并将其部署到环境中。
6. 设置持续部署：如果构建和测试通过，我们可以配置作业以自动将应用程序部署到部署环境。
7. 监控和故障排除：我们可以监控管道是否有错误或故障，并解决出现的任何问题。

这只是一个简单的例子 CI/CD 管道使用 Jenkins，具体实施细节可能会根据项目的需求而有所不同。
</b></details>

<details>
<summary>有哪些类型的工作？您使用过哪些类型？</summary><br><b>

在 Jenkins，有多种类型的工作，包括：

1. 自由式工作：这是最常见的工作类型 Jenkins，它允许用户定义自定义构建步骤并配置各种选项，包括构建触发器， SCM 轮询和构建后操作。
2. 管道作业：管道作业是一个新功能 Jenkins 它允许用户定义可以按特定顺序执行的作业管道。管道可以使用定义 Jenkins文件，它提供类似脚本的语法来定义管道阶段、步骤和条件。
3. 多配置作业：此类作业允许用户使用多种配置（例如不同的操作系统、浏览器或设备）执行同一作业。 Jenkins 将为指定的每个配置执行作业，并提供结果矩阵。
4. Maven 作业：此类作业专门为使用 Maven 构建工具构建 Java 应用程序而设计。 Jenkins 将执行 Maven 构建过程，包括编译、测试和打包应用程序。
5. 参数化作业：这种类型的作业允许用户定义可以在运行时传递到构建过程的参数。参数可用于自定义构建过程，例如指定版本号或目标环境。
</b></details>

<details>
<summary>您如何向用户报告构建结果？有哪些方式报告结果？</summary><br><b>

您可以通过以下方式举报：
  * 电子邮件
  * 消息应用程序
  * 仪表板

每个都有自己的缺点和优点。例如，如果发送得太频繁，电子邮件最终可能会被忽视或忽略。
</b></details>

<details>
<summary>每次将更改提交给给定项目时，您都需要运行单元测试。详细描述您的管道的外观以及每个阶段将执行的内容</summary><br><b>

管道将有多个阶段：

  * 克隆项目
  * 安装测试依赖项（例如，如果我需要 tox 包来运行测试，我将在此阶段安装它）
  * 运行单元测试
  * （可选）报告结果（例如给用户的电子邮件）
  * 归档相关日志/文件
</b></details>

<details>
<summary>如何确保安全 Jenkins?</summary><br><b>

 [Jenkins 文档](https://www.jenkins.io/doc/book/security/securing-jenkins/) 提供一些基本介绍，以确保您的安全 Jenkins 服务器。
</b></details>

<details>
<summary>描述如何添加新节点（代理） Jenkins</summary><br><b>

您可以描述 UI 添加新节点的方法，但更好地解释如何以像脚本一样扩展的方式进行操作，或者使用节点的动态源（例如现有云之一）。
</b></details>

<details>
<summary>如何为一个特定构建获取多个节点？</summary><br><b>

为特定构建获取多个节点 Jenkins，您可以在管道脚本中使用“并行”功能。 “并行”功能允许您并行运行多个阶段，并且每个阶段可以在不同的节点上运行。

下面是一个示例管道脚本，演示了如何为特定构建获取多个节点：

```tsx
pipeline {
    agent any
    stages {
        stage('Build') {
            parallel {
                stage('Node 1') {
                    agent { label 'node1' }
                    steps {
                        // Run build commands on Node 1
                    }
                }
                stage('Node 2') {
                    agent { label 'node2' }
                    steps {
                        // Run build commands on Node 2
                    }
                }
                stage('Node 3') {
                    agent { label 'node3' }
                    steps {
                        // Run build commands on Node 3
                    }
                }
            }
        }
        stage('Deploy') {
            agent any
            steps {
                // Deploy the built artifacts
            }
        }
    }
}
```

在此示例中，“Build”阶段具有三个并行阶段，每个阶段在标记为“node1”、“node2”和“node3”的不同节点上运行。 “部署”阶段在构建完成后运行，并在任何可用节点上运行。

要使用此管道脚本，您需要在以下位置配置三个节点（node1、node2 和 node3）： Jenkins。您还需要确保每个节点上都安装了必要的构建命令和依赖项。
</b></details>

<details>
<summary>每当构建失败时，您希望通知拥有该作业的团队有关失败的信息并提供失败原因。你会怎么做？</summary><br><b>

在 Jenkins，您可以使用“电子邮件通知”插件在构建失败时通知团队。以下是为失败的构建设置电子邮件通知的步骤：

1. 如果尚未安装“电子邮件通知”插件，请安装 Jenkins.
2. Go 到 Jenkins 作业配置页面，然后单击“配置”。
3. 向下滚动到“构建后操作”部分，然后单击“添加构建后操作”。
4. 从选项列表中选择“可编辑电子邮件通知”。
5. 填写必填字段，例如收件人电子邮件地址、主题行和电子邮件内容。您可以使用 Jenkins 环境变量，例如 ${BUILD_URL} 和 ${BUILD_LOG}，用于在电子邮件内容中包含特定于构建的信息。
6. 在“高级设置”部分中，选择“发送给收件人”选项，然后从下拉菜单中选择“仅在失败时”。
7. 单击“保存”保存作业配置。

有了这个设置， Jenkins 每当构建失败时，都会向指定收件人发送电子邮件通知，向他们提供失败原因和任何其他相关信息。
</b></details>

<details>
<summary>您的组织中有四个团队。如何确定每个团队构建的优先级？因此，例如，x 团队的作业将始终先于 y 团队运行</summary><br><b>

在 Jenkins，您可以使用“优先排序器”插件对每个团队的构建进行优先级排序。以下是设置构建优先级的步骤：

1. 如果尚未安装“优先排序器”插件，请安装 Jenkins.
2. Go 到 Jenkins 系统配置页面，点击“配置全局安全”。向下滚动到“访问控制”部分，然后单击“基于每个项目”。
3. 在“项目默认操作”部分中，从下拉菜单中选择“配置构建触发器和执行”。单击“添加用户或组”并添加代表组织中每个团队的组。
4. Go 对每个 Jenkins 作业配置页面，然后单击“配置”。向下滚动到“构建环境”部分，然后单击“添加构建步骤”。从选项列表中选择“使用优先级排序器设置构建优先级”。
5. 根据拥有该作业的团队设置该作业的优先级。例如，如果团队 X 拥有该作业，请将优先级设置为高于团队 Y 拥有的作业的值。单击“保存”以保存作业配置。

有了这个设置， Jenkins 将根据作业配置中设置的优先级值确定每个团队构建的优先级。 X 团队拥有的作业将比 Y 团队拥有的作业具有更高的优先级，确保它们首先被执行。
</b></details>

<details>
<summary>如果您管理着十多个工作，您可能可以使用 Jenkins UI。但是，如何管理每周/每月数百个工作岗位的创建和删除呢？</summary><br><b>

管理每周/每月数百个工作岗位的创建和删除 Jenkins 如果通过手动完成，可能是一项艰巨的任务 UI。以下是一些有效管理大量作业的方法：

1. 使用作业模板
2. 使用工作 DSL
3. 使用 Jenkins REST API
4. 使用配置管理工具
5. 使用 Jenkins 工作管理工具
</b></details>

<details>
<summary>有哪些 Jenkins 限制？</summary><br><b>

  * 测试交叉依赖性（多个项目一起进行的更改）
  * 从任何阶段开始构建（尽管 云bees 实现了称为检查点的东西）
</b></details>

<details>
<summary>脚本化管道与声明式管道有什么不同？您使用哪种类型？</summary><br><b>

Jenkins 支持两种类型的管道：脚本化管道和声明式管道。

脚本化管道使用 Groovy 语法，并提供高度的灵活性和对构建过程的控制。脚本化管道允许开发人员编写自定义代码来处理复杂的场景，但可能会很复杂且难以维护。

声明式管道是一项新功能，提供了一种使用以下方式定义管道的简单方法 YAML 语法。声明式管道提供了一种更加结构化和固执己见的方式来定义构建，从而更容易开始使用管道并降低错误风险。

两种类型管道之间的一些主要区别是：

1. 语法：脚本化管道使用 Groovy 语法，而声明性管道使用 YAML 语法。
2. 结构：声明式管道具有更加结构化的格式并定义特定阶段，而脚本化管道在定义构建阶段和步骤方面提供了更大的灵活性。
3. 错误处理：声明式管道提供了更全面的错误处理系统，具有内置条件和操作，而脚本化管道则需要更多的手动错误处理。
4. 易于使用：声明式管道对于初学者来说更容易使用，并提供更简单的语法，而脚本化管道需要更多的 Groovy 专业知识，并且可能更复杂。
5. 维护：与脚本化管道相比，声明式管道更容易维护，并且修改起来更省力，随着时间的推移，脚本化管道可能更难以修改和扩展。

我熟悉这两种类型的管道，但通常更喜欢声明式管道，因为它们易于使用且简单。
</b></details>

<details>
<summary>您将如何实现从某个阶段而不是从头开始构建的选项？</summary><br><b>

实现从某个阶段而不是从头开始构建的选项 Jenkins 管道，我们可以使用 `when` 指令与自定义参数一起确定起始阶段。以下是实现此操作的步骤：

1. 向管道添加自定义参数。该参数可以是简单的字符串或更复杂的数据类型（例如地图）。
    
    ```tsx
    parameters {
        string(name: 'START_STAGE', defaultValue: '', description: 'The name of the stage to start the build from')
    }
    ```
    
2. 使用 `when` 指令根据值有条件地执行阶段 `START_STAGE` 范围。
    
    ```tsx
    stage('Build') {
        when {
            expression {
                params.START_STAGE == '' || currentStage.name == params.START_STAGE
            }
        }
        // Build steps go here
    }
    
    stage('Test') {
        when {
            expression {
                params.START_STAGE == '' || currentStage.name == params.START_STAGE || previousStage.result == 'SUCCESS'
            }
        }
        // Test steps go here
    }
    
    stage('Deploy') {
        when {
            expression {
                params.START_STAGE == '' || currentStage.name == params.START_STAGE || previousStage.result == 'SUCCESS'
            }
        }
        // Deploy steps go here
    }
    ```
    

  在这个例子中，我们使用 `when` 仅当指令执行每个阶段时 `START_STAGE` 参数为空或与当前阶段的名称匹配。此外，对于 `Test` 和 `Deploy` 阶段，我们还在运行之前检查前一个阶段是否成功执行。

3. 触发管道并传递 `START_STAGE` 根据需要设置参数。
    
    ```tsx
    pipeline {
        agent any
        parameters {
            string(name: 'START_STAGE', defaultValue: '', description: 'The name of the stage to start the build from')
        }
        stages {
            stage('Build') {
                // Build steps go here
            }
            stage('Test') {
                // Test steps go here
            }
            stage('Deploy') {
                // Deploy steps go here
            }
        }
    }
    ```
    

触发管道时，可以通过 `START_STAGE` 参数从特定阶段开始构建。

例如，如果您想从 `Test` 阶段，您可以使用以下命令触发管道 `START_STAGE` 参数设置为 `'Test'`:

```tsx
pipeline?START_STAGE=Test
```

这将导致管道跳过 `Build` 阶段并直接从 `Test` 阶段。
</b></details>

<details>
<summary>您是否有开发 Jenkins 插件？你能描述一下这段经历吗？</summary><br><b>

开发一个 Jenkins 插件需要了解 Java 并熟悉 Jenkins API。该过程通常涉及设置开发环境、创建新的插件项目、定义插件的扩展点以及使用 Java 代码实现所需的功能。插件开发完成后，就可以打包部署到 Jenkins.

的 Jenkins 插件生态系统非常广泛，有许多资源可用于协助插件开发，包括文档、论坛和在线社区。另外， Jenkins 提供工具，例如 Jenkins 插件 POM 发电机和 Jenkins 插件管理器帮助插件开发和管理。
</b></details>

<details>
<summary>你写过吗 Jenkins 脚本？如果是，它们的用途和工作原理是什么？</summary><br><b>
</b></details>

<a name="cicd---github-actions"></a>
#### CI/CD - GitHub Actions

<details>
<summary>什么是工作流程 GitHub Actions?</summary><br><b>

一个 YAML 文件定义了针对特定事件执行的自动化操作和指令。<br>
该文件放置在存储库本身中。

工作流可以是任何东西——运行测试、编译代码、构建包……
</b></details>

<details>
<summary>什么是跑步者 GitHub Actions?</summary><br><b>

工作流程必须在某个地方执行。工作流执行的环境称为Runner。<br>
Runner 可以是本地主机，也可以是 GitHub 托管的主机
</b></details>

<details>
<summary>什么是工作 GitHub Actions?</summary><br><b>

作业是在同一运行器/环境上执行的一系列步骤。<br>
一个工作流程必须至少包含一项作业。
</b></details>

<details>
<summary>什么是动作 GitHub Actions?</summary><br><b>

操作是工作流程中的最小单元。它包括作为作业一部分执行的命令。
</b></details>

<details>
<summary>在 GitHub Actions 工作流程中，“on”属性/指令的用途是什么？</summary><br><b>

指定将触发工作流的事件。<br>
例如，您可以将工作流程配置为每次将更改推送到存储库时触发。
</b></details>

<details>
<summary>判断题：在 GitHub Actions，作业默认并行执行</summary><br><b>

正确。
</b></details>

<details>
<summary>如何在作业之间创建依赖关系，以便一个作业接着另一个作业运行？</summary><br><b>

使用“needs”属性/指令。

```
jobs:
  job1:
  job2:
    needs: job1
```

在上面的示例中，job1 必须在 job2 运行之前成功完成
</b></details>

<details>
<summary>如何将工作流添加到存储库？</summary><br><b>
CLI:

1. 创建目录 `.github/workflows` 在存储库中
2. 添加一个 YAML 文件

UI:

1. 在存储库页面中，单击“操作”
2. 选择工作流程并单击“设置此工作流程”
</b></details>

<a name="zuul"></a>
#### Zuul

<details>
<summary>在 Zuul 中，有哪些 <code>check</code> pipeline？</summary><br><b>

当补丁上传到代码审查系统（例如 Gerrit）时，会触发 `check` pipeline。<br>
</b></details>

<details>
<summary>在 Zuul 中，有哪些 <code>gate</code> pipeline？</summary><br><b>

当代码审查者批准代码审查系统（例如 Gerrit）中的变更时，会触发 `gate` pipeline。
</b></details>

<details>
<summary>判断题： <code>gate</code> pipeline 在 <code>check</code> pipeline 之后运行</summary><br><b>

正确。上传变更时会运行 `check` pipeline；当变更被审阅者批准后，会运行 `gate` pipeline。
</b></details>
