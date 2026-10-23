<a name="argo"></a>
# Argo

<!-- {% raw %} -->

- [Argo](#argo)
  - [ArgoCD 练习](#argocd-exercises)
    - [ArgoCD 101](#argocd-101)
    - [ArgoCD Secret](#argocd-secrets)
    - [ArgoCD Helm](#argocd-helm)
    - [Argo Rollouts](#argo-rollouts)
  - [ArgoCD 问题](#argocd-questions)
    - [ArgoCD 101](#argocd-101-1)
    - [实用 ArgoCD 101](#practical-argocd-101)
      - [CLI](#cli)
    - [ArgoCD 配置](#argocd-configuration)
    - [高级 ArgoCD](#advanced-argocd)
    - [ArgoCD 应用程序健康状况](#argocd-application-health)
    - [ArgoCD 同步](#argocd-syncs)
    - [ArgoCD 和 Helm](#argocd-and-helm)
  - [Argo Rollouts 问题](#argo-rollouts-questions)
    - [Argo Rollouts 101](#argo-rollouts-101)
    - [Argo 高级部署](#argo-advanced-rollouts)
    - [Argo Rollouts 命令](#argo-rollouts-commands)

<a name="argocd-exercises"></a>
## ArgoCD 练习

<a name="argocd-101"></a>
### ArgoCD 101

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 创建应用程序 | 应用程序 | [练习](exercises/app_creation/exercise.md) | [解决方案](exercises/app_creation/solution.md)
| 同步应用程序 - Git | 同步 | [练习](exercises/sync_app_git/exercise.md) | [解决方案](exercises/sync_app_git/solution.md)
| 同步应用程序 - 集群 | 同步 | [练习](exercises/sync_app_cluster/exercise.md) | [解决方案](exercises/sync_app_cluster/solution.md)

<a name="argocd-secrets"></a>
### ArgoCD Secret

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| Secret 101 | Secret | [练习](exercises/secrets_101/exercise.md) | [解决方案](exercises/secrets_101/solution.md)

<a name="argocd-helm"></a>
### ArgoCD Helm

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| Helm ArgoCD 应用程序 | Secret | [练习](exercises/argocd_helm_app/exercise.md) | [解决方案](exercises/argocd_helm_app/solution.md)

<a name="argo-rollouts"></a>
### Argo Rollouts

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 蓝/绿 Rollout | 发布 | [练习](exercises/blue_green_rollout/exercise.md) | [解决方案](exercises/blue_green_rollout/solution.md)
| 金丝雀 Rollout | 发布 | [练习](exercises/canary_rollout/exercise.md) | [解决方案](exercises/canary_rollout/solution.md)

<a name="argocd-questions"></a>
## ArgoCD 问题

<a name="argocd-101-1"></a>
### ArgoCD 101

<details>
<summary>什么是 Argo CD?</summary><br><b>

[ArgoCD](https://argo-cd.readthedocs.io/en/stable): "Argo CD 是一个声明式的， GitOps 持续交付工具 Kubernetes."

至于为什么 Argo CD，他们提供了以下解释：“应用程序定义、配置和环境应该是声明性的和版本控制的。应用程序部署和生命周期管理应该是自动化的、可审计的且易于理解。”

</b></details>

<details>
<summary>曾经有过很多 CI/CD 之前的系统 ArgoCD (Jenkins, 团队城市, CircleCI等）有什么附加值 ArgoCD 带了？</summary><br><b>

简单地说， ArgoCD 是 CD, 不 CI。我们还需要 CI 系统。其次， ArgoCD 正在运行 Kubernetes，它是其生态系统的一部分，而不是其他一些 CI/CD 系统。最后， ArgoCD 专为 Kubernetes，而不是其他平台和系统。

更容易解释需要 ArgoCD 通过与另一个可以做到的系统直接比较 CD。让我们使用 Jenkins 为此。

与 Jenkins，您需要确保安装 k8s 相关工具并设置诸如以下命令的访问权限 kubectl.
使用 ArgoCD 时，只需将它安装到你的 namespace 中；不需要额外安装 kubectl 等工具，因为 ArgoCD 本身运行在 K8s 中。

与 Jenkins，管理访问通常是按管道完成的，即使在全局设置 Jenkins，您仍然需要配置每个管道以使用该访问配置。
使用 ArgoCD 时，可以在集群中一个或多个 namespace 内管理 K8s 资源和其他资源的访问。

与 Jenkins，跟踪部署到 k8s 的内容的状态只能通过运行管道作为额外步骤来完成。这是因为 Jenkins 不是 k8s 集群的一部分。
使用 ArgoCD 时，如果部署内容运行在同一集群和同一 namespace 中，就可以更清楚地跟踪和理解当前部署状态。

与 ArgoCD 回滚到以前的版本确实很容易，因为所做的所有更改都是在 git 上完成的，git 是一个版本化的源代码控制。因此，获得先前的提交就足够了 ArgoCD 检测更改并同步到集群。值得一提的是，这一点特别适用于 Jenkins 还有:)
</b></details>

<details>
<summary>描述一个工作流程示例，其中 ArgoCD 被使用</summary><br><b>

1. 开发人员向应用程序仓库提交变更
2. Jenkins pipeline 被触发，对该变更执行 CI
3. 如果 Jenkins pipeline 成功完成，则使用新代码构建镜像
4. 将镜像推送到注册表
5. 更新单独的 Kubernetes 应用配置仓库中的 manifest 文件
6. ArgoCD 跟踪应用配置仓库中的变更，并在检测到变更后将其应用到集群
</b></details>

<details>
<summary>判断题：ArgoCD 支持 Kubernetes YAML 文件，但不支持 Helm Chart 和 Kustomize 等其他 manifest 格式</summary><br><b>

错误。它支持 Kubernetes YAML 文件，也支持 Helm Chart 和 Kustomize。

</b></details>

<details>
<summary>在 ArgoCD 中，“GitOps 仓库”指什么？</summary><br><b>

它是保存应用程序配置的仓库，通常由 CI/CD 流程或 DevOps/SRE 工程师维护。对 ArgoCD 来说，这是它持续跟踪的仓库；一旦检测到变更，ArgoCD 就会把这些变更应用到目标集群。

</b></details>

<details>
<summary>使用 GitOps 方法/仓库有什么好处？</summary><br><b>

* 所有配置集中在一个地方，并以代码形式定义，因此完全透明、容易审查，也容易重现
* 每个人都通过相同的界面，因此即使不是故意的，也会有更多的人体验和测试代码
* 工程师可以用它来测试、开发……不再需要运行手动命令并希望达到与集群/云中相同的状态。
* Single Source of Truth：GitOps 仓库是集群变更的事实来源。即使有人尝试手动覆盖，ArgoCD 也会把集群恢复到仓库声明的状态。
</b></details>

<details>
<summary>Sorina 是团队中的一名工程师，她手动修改了集群中的配置，而这些配置由 ArgoCD 跟踪的仓库管理。会发生什么？</summary><br><b>

Sorina 做出修改后，ArgoCD 会检测到实际状态与期望状态不一致，并从 GitOps 仓库重新同步配置，覆盖这次手动修改。

</b></details>

<details>
<summary>内特（Nate）是你们组织中的一位工程师，他询问是否有可能： ArgoCD 未将手动完成的更改同步到集群。你的答案是什么？</summary><br><b>

答案是肯定的，这是可能的。您可以配置 ArgoCD 当手动完成更改时同步到所需状态，而不是执行诸如发送警报之类的操作。

</b></details>

<details>
<summary>集群灾难恢复如何变得更容易 ArgoCD?</summary><br><b>

想象一下，您在云中的某个区域有一个集群。该集群发生了一些问题，要么崩溃，要么根本不再运行。

如果所有集群配置都保存在 GitOps repo 中，可以让 ArgoCD 指向该仓库，并配置它使用新建的集群，然后重新应用配置。这样新集群就能恢复到原集群声明的状态。
</b></details>

<details>
<summary>你们团队中的一名工程师艾拉 (Ella) 声称 ArgoCD 好处是它是一个扩展 Kubernetes，它是集群的一部分。莎拉（Sarah）也是您团队中的一名工程师，她声称这并不是真正的好处，因为 Jenkins 也可以部署在集群中，从而成为集群的一部分。你怎么看？</summary><br><b>

艾拉说得对， ArgoCD 是集群的扩展，这与像其他集群一样简单地部署在集群中是有很大不同的 CI/CD 像这样的系统 Jenkins. ArgoCD 使用现有的 k8s 资源，例如 K8s 控制器（用于监控和状态差异）以及 etcd 用于存储数据。
</b></details>

<details>
<summary>主要资源如何 ArgoCD 叫？</summary><br><b>

「申请」
</b></details>

<details>
<summary>解释一下什么是“申请” ArgoCD</summary><br><b>

它是一个自定义资源定义，负责将应用程序资源部署和同步到 Kubernetes 集群。
</b></details>

<details>
<summary>如何 ArgoCD 使集群中的访问管理变得更容易？</summary><br><b>

而不是创造 Kubernetes 资源，你可以使用 Git 管理谁可以推送代码、审查代码、合并代码等——无论是人类用户还是第三方系统和服务。无需使用 ClusterRole 或 User 资源 Kubernetes 因此，访问管理变得更加简单。

</b></details>

<a name="practical-argocd-101"></a>
### 实用 ArgoCD 101

<details>
<summary>描述应用程序中以下部分的目的 YAML 文件

```YAML
source:
  repoURL: https://github.com/bregman-arie/devops-exercises
  targetRevision: HEAD
  path: main
```
</summary><br><b>

ArgoCD Application 的这一段定义要同步哪个 Git 仓库、使用哪个 revision，以及仓库中的哪个路径。
</b></details>

<details>
<summary>描述应用程序中以下部分的目的 YAML 文件

```YAML
destination:
  server: http://some.kubernetes.cluster.svc
  namespace: devopsExercises
```
</summary><br><b>

这一段定义 Git 仓库中声明的应用资源应该同步到哪个 Kubernetes 集群和 namespace。
</b></details>

<details>
<summary>什么 CRD 如果您有多个应用程序并且您想将它们按逻辑分组在一起，您会使用吗？</code></summary><br><b>

添加项目
</b></details>

<details>
<summary>判断题：ArgoCD 的默认同步周期是 3 小时</summary><br><b>

错误。ArgoCD 的默认同步周期是 3 分钟，而不是几小时。
</b></details>

<details>
<summary>简要描述 ArgoCD 在每个同步周期会做什么</summary><br><b>

1. 收集所有要同步的应用程序的列表（那些标记有“自动同步”的应用程序）
2. 获取每个 Git 仓库的状态
3. 比较 Git 中声明的期望状态与 Kubernetes 集群中的实际状态
  1. 如果状态不同，应用程序将被标记为“不同步”，并且可能会采取进一步的操作（基于配置）
  2. 如果状态相等，则应用程序标记为“已同步”
</b></details>

<details>
<summary>你在名为“yay”的 namespace 中部署了一个新应用，但运行 <code>kubectl get ns yay</code> 时发现没有这个 namespace。发生了什么？</summary><br><b>

在不存在的 namespace 中部署应用程序不会自动创建 namespace。为此，必须显式启用“自动创建 namespace”。

要修复它，可以运行 `kubectl create namespace NAMESPACE_NAME`；当然，更好的做法是把 namespace manifest 存在 Git 中，而不是手动运行 kubectl 命令。
</b></details>

<a name="cli"></a>
#### CLI

<details>
<summary>创建一个具有以下属性的新应用程序：

* 应用程序名称：某个应用程序
* repo： https://fake.repo.address
* 应用程序路径：./app_path
* 命名空间：默认
* 集群：my.kubernetes.cluster
</summary><br><b>

```
argocd app create some-app \
--project  \
--repo https://fake.repo.address \
--path ./app_path \
--dest-namespace default \
--dest-server my.kubernetes.cluster
```

</b></details>

<details>
<summary>列出所有 argocd 应用程序</summary><br><b>

`argocd app list`
</b></details>

<details>
<summary>打印名为“some-app”的应用程序的详细信息</summary><br><b>

`argocd app get some-app`
</b></details>

<details>
<summary>如何添加额外的（外部）集群 ArgoCD 管理？</summary><br><b>

`argocd cluster add CLUSTER_ADDRESS/NAME`
</b></details>

<details>
<summary>如何列出所有集群 ArgoCD 管理？</summary><br><b>

`argocd cluster list`
</b></details>

<a name="argocd-configuration"></a>
### ArgoCD 配置

<details>
<summary>是否可以更改默认同步周期 ArgoCD?</summary><br><b>

是的，可以通过将以下内容添加到 argocd-cm (ConfigMap):

```
data:
  timeout.reconciliation: 300s
```

该值可以是您想要设置的任意秒数。
</b></details>

<details>
<summary>设置后会出现什么结果 <code>超时协调：0s</code>?</summary><br><b>

同步功能将被禁用。
</b></details>

<a name="advanced-argocd"></a>
### 高级 ArgoCD

<details>
<summary>什么是“应用程序模式中的应用程序”？</summary><br><b>

解决方案来自 Argo 社区关于管理多个类似应用程序的问题。

基本上是一种模式，其中您拥有由其他子应用程序组成的根应用程序。

因此，您不必创建多个单独的应用程序，而是让根应用程序指向包含其他应用程序的仓库。
</b></details>

<details>
<summary>您能否提供一些使用“App of Apps 模式”的用例？</summary><br><b>

* 集群准备：您希望一次部署多个应用程序来引导一个 Kubernetes 集群

* 多个环境：如果部署同一应用程序的多个版本，但进行了微小的更改。例如，多个测试部署来测试不同的功能

* 多集群：当同一个应用需要跨多个连接的K8s集群部署时 ArgoCD
</b></details>

<details>
<summary>判断题：如果要用 ArgoCD 管理多个 Kubernetes 集群，就必须在每个集群上都安装 ArgoCD</summary><br><b>

错了，可以部署在其中之一上。 ArgoCD 能够管理未运行它的外部集群。
</b></details>

<details>
<summary>您拥有三个集群 - dev、staging 和 prod。每当您更新应用程序时 GitOps repo，所有三个集群都正在更新。这有什么问题以及如何处理？</summary><br><b>

您通常不想立即更新所有集群，特别是当一些集群用于测试和开发目的而另一些集群用于实际生产用途时。

有多种方法可以处理：

1. 分支驱动：在 GitOps repo 中为不同环境维护对应分支。先推送到 dev，测试通过后合并到 staging；如果 staging 一切正常，再合并到 prod。

2. 使用 overlay 和 Kustomize，根据 CI 流程或 pipeline 的上下文控制要同步的变更。
</b></details>

<a name="argocd-application-health"></a>
### ArgoCD 应用程序健康状况

<details>
<summary>一个人可能有哪些健康状况 ArgoCD 应用程序？</summary><br><b>

* 健康
* 缺失：集群中不存在资源
* 已暂停：资源已暂停
* 进展：资源不健康，但将变得健康或有机会变得健康
* 降级：资源不健康
* 未知：不知道健康应用程序是什么
</b></details>

<details>
<summary>判断题：只要 Pod 正在运行，对应的 Deployment 就会被认为是健康的</summary><br><b>

不完全是。一个 Deployment （以及 StatefulSet, ReplicaSet 和 DaemonSet）如果所需状态等于实际/当前状态（这包括副本数量），则被认为是健康的。
</b></details>

<details>
<summary>判断题：如果 `status.loadBalancer.ingress` 列表至少包含一个值，则 Ingress 会被认为是健康的</summary><br><b>

正确。
</b></details>

<details>
<summary>关于风俗习惯的健康状况，你能说些什么 Kubernetes 资源？</summary><br><b>

习惯的健康 Kubernetes 资源是通过编写Lua脚本来定义的。

您可以在这里找到这样的脚本列表： https://github.com/argoproj/argo-cd/tree/master/resource_customizations
</b></details>

<a name="argocd-syncs"></a>
### ArgoCD 同步

<details>
<summary>解释手动同步与自动同步</summary><br><b>

自动同步意味着一旦 ArgoCD 检测到您的应用程序发生更改或新版本 Git，它将应用更改，以便当前/实际状态可以等于所需状态。

通过手动同步， ArgoCD 会发现存在差异，但不会采取任何措施来纠正它。
</b></details>

<details>
<summary>解释自动修剪</summary><br><b>

如果启用，当从跟踪的文件或内容中删除文件或内容时，自动修剪将删除资源 Git 仓库。

如果禁用， ArgoCD 即使内容或文件被删除，也不会删除任何内容。
</b></details>

<details>
<summary>解释自我修复的相关内容 ArgoCD</summary><br><b>

自我修复是当有人对集群进行手动更改时根据所需状态纠正集群状态的过程。
</b></details>

<a name="argocd-and-helm"></a>
### ArgoCD 和 Helm

<details>
<summary>提供哪些支持 ArgoCD 为了 Helm?</summary><br><b>

ArgoCD 能够追踪包裹 Helm 从某种意义上说，它将监视新版本。
</b></details>

<details>
<summary>判断题：当 ArgoCD 跟踪 Helm Chart 时，该 Chart 不再作为 Helm 应用存在，而是作为 ArgoCD Application 管理</summary><br><b>

正确。尝试执行 `helm ls` 之类的命令会失败，因为 Helm metadata 不再存在，该应用已经由 ArgoCD 作为 Application 跟踪。
</b></details>

<a name="argo-rollouts-questions"></a>
## Argo Rollouts 问题

<a name="argo-rollouts-101"></a>
### Argo Rollouts 101

<details>
<summary>什么是 Argo Rollouts？</summary><br><b>

控制器用于 Kubernetes 使用不同的策略执行应用程序部署，例如蓝/绿部署、金丝雀部署等。

此外，它还支持A/B测试、自动回滚和集成指标分析。
</b></details>

<details>
<summary>当您通过 argo rollouts新版本的应用程序时会发生什么？</summary><br><b>

- Argo Rollouts创建一个新的副本集（即新的应用程序版本）
  - 旧版本还活着
- ArgoCD 将应用程序标记为不同步 
</b></details>

<details>
<summary>判断题：使用 Argo Rollouts 必须先安装 ArgoCD</summary><br><b>

错误。这是一个常见误解。ArgoCD 和 Argo Rollouts 可以很好地协同工作，但二者都可以独立使用。
</b></details>

<a name="argo-advanced-rollouts"></a>
### Argo 高级部署

<details>
<summary>Scott 是您团队中的一名工程师，他手动执行一些冒烟测试，并在每次部署新版本时监控部署情况。这样，如果他检测到问题，他就会执行回滚。您可能建议他采取什么更好的方法？</summary><br><b>

转向全自动回滚。 Argo Rollouts支持多个指标提供者（Datadog、NewRelic 等），以便您可以使用数据和指标根据不同条件自动回滚

</b></details>

<details>
<summary>解释“分析”的概念 Argo Rollouts</summary><br><b>

Analysis 是沿着 Rollout 资源部署的资源，定义执行回滚的条件和指标阈值

</b></details>

<details>
<summary>解释一下下面的配置

```yaml
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: success-rate
spec:
  args:
  - name: service-name
  metrics:
  - name: success-rate
    interval: 4m
    count: 3
    successCondition: result[0] >= 0.90
    provider:
      prometheus:
        address: http:/some-prometheus-instance:80
        query: sum(response_status{app="{{args.service-name}}",role="canary",status=~"2.*"})/sum(response_status{app="{{args.service-name}}",role="canary"}
```
</summary><br><b>

它是一个分析资源，可从以下位置获取响应状态 Prometheus （监控实例）。如果大于 0.90，则部署将继续，如果小于 0.90，则将执行回滚，这意味着金丝雀部署失败。

</b></details>

<a name="argo-rollouts-commands"></a>
### Argo Rollouts 命令

<details>
<summary>如何列出发布？</summary><br><b>

`kubectl argo rollouts list rollouts`
</b></details>

<details>
<summary>如何列出给定应用程序的部署？</summary><br><b>

`kubectl argo rollouts get rollout SOME-APP`
</b></details>

<details>
<summary>如何检查部署状态？</summary><br><b>

`kubectl argo rollouts status SOME-APP`
</b></details>

<details>
<summary>如何发布新版本（带有新容器标签）？</summary><br><b>

`kubectl argo rollouts set image SOME-APP web-app=some/registry/and/image:v2.0`
</b></details>

<details>
<summary>如何手动升级到新的应用版本？</summary><br><b>

`kubectl argo rollouts promote SOME-APP`
</b></details>

<details>
<summary>您如何监控部署？</summary><br><b>

`kubectl argo rollouts get rollout SOME-APP --watch`
</b></details>

<!-- {% endraw %} -->
