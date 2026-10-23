<a name="cka-certified-kubernetes-administrator"></a>
# CKA （已认证 Kubernetes 管理员）

- [CKA （已认证 Kubernetes 管理员）](#cka-certified-kubernetes-administrator)
  - [设置](#setup)
  - [Pods](#pods)
    - [故障排除 Pods](#troubleshooting-pods)
  - [Namespaces](#namespaces)
  - [节点](#nodes)
  - [服务](#services)
  - [ReplicaSets](#replicasets)
    - [故障排除 ReplicaSets](#troubleshooting-replicasets)
  - [Deployments](#deployments)
    - [故障排除 Deployments](#troubleshooting-deployments)
  - [Scheduler](#scheduler)
    - [节点亲和力](#node-affinity)
  - [标签和选择器](#labels-and-selectors)
    - [节点选择器](#node-selector)
  - [污点](#taints)
  - [资源限制](#resources-limits)
  - [监控](#monitoring)
  - [Scheduler](#scheduler-1)

<a name="setup"></a>
## 设置

* 设置 Kubernetes 簇。使用以下其中一项
   1. Minikube 用于本地免费且简单的集群
   2. 托管集群（EKS, GKE, AKS)

* 设置别名

```
alias k=kubectl
alias kd=kubectl delete
alias kds=kubectl describe
alias ke=kubectl edit
alias kr=kubectl run
alias kg=kubectl get
```

<a name="pods"></a>
## Pods

<details>
<summary>执行命令查看当前namespace下所有pod</summary><br><b>

`kubectl get pods`

注意：创建一个别名（`alias k=kubectl`）并习惯 `k get po`
</b></details>

<details>
<summary>使用“nginx”镜像运行名为“nginx-test”的 pod</summary><br><b>

`k run nginx-test --image=nginx`
</b></details>

<details>
<summary>假设你有一个 Pod 名为“nginx-test”，如何删除它？</summary><br><b>

`k delete po nginx-test`
</b></details>

<details>
<summary>在什么命名空间中 <code>etcd</code> Pod 正在运行？列出该命名空间中的 Pod</summary><br><b>

`k get po -n kube-system`

假设你不知道它位于哪个 namespace，可以运行 `k get po -A | grep etcd` 找到该 Pod，并查看它所在的 namespace。
</b></details>

<details>
<summary>列出所有命名空间中的 pod</summary><br><b>

`k get po -A`

长版本是 `kubectl get pods --all-namespaces`.
</b></details>

<details>
<summary>写一个 YAML 的一个 Pod 有两个容器并使用 YAML 文件来创建 Pod （使用您喜欢的任何镜像）</summary><br><b>

```
cat > pod.yaml <<EOL
apiVersion: v1
kind: Pod
metadata:
  name: test
spec:
  containers:
  - image: alpine
    name: alpine
  - image: nginx-unprivileged
    name: nginx-unprivileged
EOL

k create -f pod.yaml
```

如果你问自己，我怎么会记得写下所有这些？不用担心，你可以简单地运行 `kubectl run some_pod --image=redis -o yaml --dry-run=client > pod.yaml`。如果你问自己“我应该如何记住这个长命令”，那么是时候改变态度了；）
</b></details>

<details>
<summary>创建一个 YAML 的一个 Pod 没有实际运行 Pod 与 kubectl 命令（使用您喜欢的任何镜像）</summary><br><b>

`k run some-pod -o yaml --image nginx-unprivileged --dry-run=client > pod.yaml`
</b></details>

<details>
<summary>如何测试清单是否有效？</summary><br><b>

与 `--dry-run` flag 它实际上不会创建它，但它会测试它，你可以通过这种方式找到任何语法问题。

`k create -f YAML_FILE --dry-run`
</b></details>

<details>
<summary>如何检查某个镜像是哪个 Pod 正在使用？</summary><br><b>

`k 描述 po <POD_NAME> | grep -i 镜像`
</b></details>

<details>
<summary>如何检查单个容器中运行了多少个容器 Pod?</summary><br><b>

`k get po POD_NAME` 并查看“下的数字”READY”专栏。

你也可以运行 `k describe po POD_NAME`
</b></details>

<details>
<summary>运行至 Pod 名为“remo”，带有最新的 redis 映像和标签“year=2017”</summary><br><b>

`k run remo --image=redis:latest -l year=2017`
</b></details>

<details>
<summary>列出 pod 及其标签</summary><br><b>

`k get po --show-labels`
</b></details>

<details>
<summary>删除 Pod 称为“nm”</summary><br><b>

`k delete po nm`
</b></details>

<details>
<summary>列出所有带有标签“env=prod”的 Pod</summary><br><b>

`k get po -l env=prod`

要计算它们：`k get po -l env=prod --no-headers | 厕所-l`
</b></details>

<details>
<summary>使用镜像创建静态 Pod <code>python</code> 运行命令的 <code>睡觉 2017</code></summary><br><b>

首先更改为跟踪的目录 kubelet 用于创建静态 Pod： `cd /etc/kubernetes/manifests` （您可以通过阅读来验证路径 kubelet 配置文件）

现在在该目录中创建定义/清单

`k run some-pod --image=python --command sleep 2017 --restart=Never --dry-run=client -o yaml > static-pod.yaml`

</b></details>

<details>
<summary>描述一下如何删除静态 Pod
</summary><br><b>

找到静态的 Pods 目录（查看 `staticPodPath` 在 kubelet 配置文件）。

Go 到该目录并删除静态的清单/定义 Pod (`rm <STATIC_POD_PATH>/<POD_DEFINITION_FILE>`)
</b></details>

<a name="troubleshooting-pods"></a>
### 故障排除 Pods

<details>
<summary>你尝试运行一个 Pod 但看到状态“CrashLoopBackOff”。这意味着什么？如何识别问题？</summary><br><b>

容器无法运行（由于不同原因）并且 Kubernetes 尝试运行 Pod 经过一段时间的延迟（= BackOff 时间）后再次执行。

导致其失败的一些原因：
  - 配置错误 - 拼写错误、不支持的值等。
  - 资源不可用 - 节点已关闭， PV 未安装等

一些调试方法：

1. `kubectl describe pod POD_NAME`
   1. 专注于 `State` （应该是等待，CrashLoopBackOff）和 `Last State` 这应该告诉我们之前发生了什么（比如失败的原因）
2. 运行 `kubectl logs mypod`
   1. 这应该提供准确的输出 
   2. 对于特定容器，您可以添加 `-c CONTAINER_NAME`
3. 如果您仍然不知道失败的原因，请尝试 `kubectl get events`
4. 
</b></details>

<details>
<summary>什么错误 <code>镜像拉回关闭</code> 意味着？</summary><br><b>

很可能您没有正确写入尝试拉取和运行的映像的名称。或者它可能不存在于注册表中。

您可以通过以下方式确认 `kubectl describe po POD_NAME`
</b></details>

<details>
<summary>如何查看某个节点在哪个节点 Pod 正在运行？</summary><br><b>

`k get po POD_NAME -o wide`
</b></details>

<details>
<summary>运行以下命令： <code>kubectl 运行 ohno --image=sheris</code>。有效吗？为什么不呢？修复它而不删除 Pod 并使用您想要的任何镜像</summary><br><b>

因为没有这样的镜像 `sheris`。至少现在是这样:)

要修复它，请运行 `kubectl edit ohno` 并修改以下行 `- image: sheris` 到 `- image: redis` 或您喜欢的任何其他镜像。
</b></details>

<details>
<summary>你尝试运行一个 Pod 但它处于“待处理”状态。可能是什么原因？</summary><br><b>

一个可能原因是负责将 Pod 调度到节点上的 Scheduler 没有运行。可以运行 `kubectl get po -A | grep scheduler` 验证，或直接检查 `kube-system` namespace。
</b></details>

<details>
<summary>如何查看容器运行的日志 Pod?</summary><br><b>

`k logs POD_NAME`
</b></details>

<details>
<summary>一个里面有两个容器 Pod 称为“某些豆荚”。如果你跑步会发生什么 <code>kubectl 记录一些 Pod</code></summary><br><b>

它不起作用，因为里面有两个容器 Pod 并且您需要指定其中之一 `kubectl logs POD_NAME -c CONTAINER_NAME`
</b></details>

<a name="namespaces"></a>
## Namespaces

<details>
<summary>列出所有命名空间</summary><br><b>

`k get ns`
</b></details>

<details>
<summary>创建一个名为“alle”的命名空间</summary><br><b>

`k create ns alle`
</b></details>

<details>
<summary>检查有多少个命名空间</summary><br><b>

`k get ns --无标头 | 厕所-l`
</b></details>

<details>
<summary>检查“dev”命名空间中存在多少个 Pod</summary><br><b>

`k get po -n dev`
</b></details>

<details>
<summary>在命名空间 dev 中创建一个名为“kartos”的 Pod。 Pod 应该使用“redis”镜像。</summary><br><b>

如果命名空间尚不存在： `k create ns dev`

`k run kratos --image=redis -n dev`
</b></details>

<details>
<summary>您正在寻找一个 Pod 称为“阿特柔斯”。如何检查它运行在哪个命名空间？</summary><br><b>

`k 得到 po -A | grep atreus`
</b></details>

<a name="nodes"></a>
## 节点

<details>
<summary>运行命令查看集群所有节点</summary><br><b>

`kubectl get nodes`

注意：创建一个别名（`alias k=kubectl`）并习惯 `k get no`
</b></details>

<details>
<summary>创建所有节点的列表 JSON 格式化并将其存储在名为“some_nodes.json”的文件中</summary><br><b>

`k get nodes -o json > some_nodes.json`
</b></details>

<details>
<summary>检查集群中的节点之一具有哪些标签</summary><br><b>

`k get no minikube --show-labels`
</b></details>

<a name="services"></a>
## 服务

<details>
<summary>检查当前命名空间中有多少服务正在运行</summary><br><b>

`k get svc`
</b></details>

<details>
<summary>创建一个名为“sevi”的内部服务，以在端口 1991 上公开应用程序“web”</summary><br><b>
 
`kubectl expose pod web --port=1991 --name=sevi`
</b></details>

<details>
<summary>如何按名称引用同一 namespace 内名为“app-service”的 Service？</summary><br><b>

应用服务
</b></details>

<details>
<summary>如何查看服务的TargetPort？</summary><br><b>

`k describe svc <SERVICE_NAME>`
</b></details>

<details>
<summary>如何检查 svc 有哪些端点？</summary><br><b>

`k describe svc <SERVICE_NAME>`
</b></details>

<details>
<summary>如何按名称引用不同命名空间（称为“dev”）中名为“app-service”的服务？</summary><br><b>

app-service.dev.svc.cluster.local
</b></details>

<details>
<summary>假设您正在运行一个部署，并且需要创建一个服务来公开 Pod。这是所需/已知的：

* Deployment 姓名：贾布利克
* 目标端口：8080
* 服务类型：NodePort
* 选择器：jabulik-app
* 端口：8080
</summary><br><b>

`kubectl expose deployment jabulik --name=jabulik-service --target-port=8080 --type=NodePort --port=8080 --dry-run=client -o yaml -> svc.yaml`

`vi svc.yaml` （确保选择器设置为 `jabulik-app`)

`k apply -f svc.yaml`
</b></details>

<a name="replicasets"></a>
## ReplicaSets

<details>
<summary>如何检查当前命名空间中定义了多少个副本集？</summary><br><b>

`k get rs`
</b></details>

<details>
<summary>您有一个定义为运行 3 的副本集 Pods。您删除了这 3 个 pod 之一。接下来会发生什么？有多少 Pods 会有吗？</summary><br><b>

还是会有3个 Pods 理论上运行是因为副本集的目标就是确保这一点。所以如果你删除一个或多个 Pods，它将额外运行 Pods 所以总有3个 Pods.
</b></details>

<details>
<summary>如何检查哪个容器映像被用作名为“repli”的副本集的一部分？</summary><br><b>

`k 描述 rs 复制 | grep -i 镜像`
</b></details>

<details>
<summary>如何查有多少 Pods 准备好作为名为“repli”的副本集的一部分了吗？</summary><br><b>

`k 描述 rs 复制 | grep -i ”Pods 状态"`
</b></details>

<details>
<summary>如何删除名为“rori”的副本集？</summary><br><b>

`k delete rs rori`
</b></details>

<details>
<summary>如何修改名为“rori”的副本集以使用不同的映像？</summary><br><b>

`k edis rs rori`
</b></details>

<details>
<summary>扩展名为“rori”的副本集以运行 5 Pods 而不是 2</summary><br><b>

`k scale rs rori --replicas=5`
</b></details>

<details>
<summary>缩小名为“rori”的副本集以运行 1 Pod 而不是 5</summary><br><b>

`k scale rs rori --replicas=1`
</b></details>

<a name="troubleshooting-replicasets"></a>
### 故障排除 ReplicaSets

<details>
<summary>修复以下问题 ReplicaSet 定义

```yaml
apiVersion: apps/v1
kind: ReplicaCet
metadata:
  name: redis
  labels:
    app: redis
    tier: cache
spec:
  selector:
    matchLabels:
      tier: cache
  template:
    metadata:
      labels:
        tier: cachy
    spec:
      containers:
      - name: redis
        image: redis
```
</summary><br><b>

应该是 ReplicaSet 而不是 ReplicaCet :)

</b></details>

<details>
<summary>修复以下问题 ReplicaSet 定义

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: redis
  labels:
    app: redis
    tier: cache
spec:
  selector:
    matchLabels:
      tier: cache
  template:
    metadata:
      labels:
        tier: cachy
    spec:
      containers:
      - name: redis
        image: redis
```
</summary><br><b>

选择器与标签不匹配（缓存与缓存）。要解决这个问题，请修复缓存，使其改为缓存。

</b></details>

<a name="deployments"></a>
## Deployments

<details>
<summary>如何列出当前命名空间中的所有部署？</summary><br><b>

`k get deploy`

</b></details>

<details>
<summary>如何检查某个镜像是哪个 Deployment 正在使用？</summary><br><b>

`k 描述部署 <DEPLOYMENT_NAME> | grep 镜像`

</b></details>

<details>
<summary>创建名为“dep”的部署的文件定义/清单，其中包含 3 个使用映像“redis”的副本</summary><br><b>

`k create deploy dep -o yaml --image=redis --dry-run=client --replicas 3 > deployment.yaml `

</b></details>

<details>
<summary>删除部署 `depdep`</summary><br><b>

`k delete deploy depdep`

</b></details>

<details>
<summary>使用镜像“redis”创建一个名为“pluck”的部署，并确保它运行 5 个副本</summary><br><b>

`kubectl create deployment pluck --image=redis --replicas=5`

</b></details>

<details>
<summary>创建具有以下属性的部署：

* 被称为“迷惑者”
* 使用镜像“python”
* 运行 3 个副本
* 所有 pod 都会被放置在带有“blufer”标签的节点上
</summary><br><b>

`kubectl create deployment blufer --image=python --replicas=3 -o yaml --dry-run=client > deployment.yaml`

添加以下部分（`vi deployment.yaml`):

```
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedlingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: blufer
            operator: Exists
```

`kubectl apply -f deployment.yaml`
</b></details>

<a name="troubleshooting-deployments"></a>
### 故障排除 Deployments

<details>
<summary>修复以下部署清单

```yaml
apiVersion: apps/v1
kind: Deploy
metadata:
  creationTimestamp: null
  labels:
    app: dep
  name: dep
spec:
  replicas: 3
  selector:
    matchLabels:
      app: dep
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: dep
    spec:
      containers:
      - image: redis
        name: redis
        resources: {}
status: {}
```
</summary><br><b>

改变 `kind: Deploy` 到 `kind: Deployment`
</b></details>

<details>
<summary>修复以下部署清单

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: dep
  name: dep
spec:
  replicas: 3
  selector:
    matchLabels:
      app: depdep
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: dep
    spec:
      containers:
      - image: redis
        name: redis
        resources: {}
status: {}
```
</summary><br><b>

选择器与标签不匹配（dep 与 depdep）。要解决这个问题，请修复 depdep，使其改为 dep。
</b></details>

<a name="scheduler"></a>
## Scheduler

<details>
<summary>如何在名为“node1”的节点上调度 Pod？</summary><br><b>

`k run some-pod --image=redix -o yaml --dry-run=client > pod.yaml`

`vi pod.yaml` 并添加：

```
spec:
  nodeName: node1
```

`k apply -f pod.yaml`

注意：如果您的集群中没有node1 Pod 将停留在“待处理”状态。
</b></details>

<a name="node-affinity"></a>
### 节点亲和力

<details>
<summary>使用节点关联性，设置 Pod 在键为“region”且值为“asia”或“emea”的节点上进行调度</summary><br><b>

`vi pod.yaml`

```yaml
affinity:
  nodeAffinity:
    requiredDuringSchedlingIgnoredDuringExecution:
      nodeSelectorTerms:
      - matchExpressions:
        - key: region
          operator: In
          values:
          - asia
          - emea
```
</b></details>

<details>
<summary>使用节点关联性，设置 Pod 永远不要在键为“region”且值为“neverland”的节点上进行调度</summary><br><b>

`vi pod.yaml`

```yaml
affinity:
  nodeAffinity:
    requiredDuringSchedlingIgnoredDuringExecution:
      nodeSelectorTerms:
      - matchExpressions:
        - key: region
          operator: NotIn
          values:
          - neverland
```
</b></details>

<a name="labels-and-selectors"></a>
## 标签和选择器

<details>
<summary>如何列出所有 Pods 带有标签“app=web”？</summary><br><b>

`k get po -l app=web`
</b></details>

<details>
<summary>如何列出所有标记为“env=staging”的对象？</summary><br><b>

`k get all -l env=staging`
</b></details>

<details>
<summary>如何列出“env=prod”和“type=web”中的所有部署？</summary><br><b>

`k get deploy -l env=prod,type=web`
</b></details>

<a name="node-selector"></a>
### 节点选择器

<details>
<summary>在集群中的一个节点上应用标签“hw=max”</summary><br><b>

`kubectl label nodes some-node hw=max`

</b></details>

<details>
<summary>创建并运行 Pod 被称为 `some-pod` 与镜像 `redis` 并将其配置为使用选择器 `hw=max`</summary><br><b>

```
kubectl run some-pod --image=redis --dry-run=client -o yaml > pod.yaml

vi pod.yaml

spec:
  nodeSelector:
    hw: max

kubectl apply -f pod.yaml
```

</b></details>

<details>
<summary>解释为什么节点选择器可能受到限制</summary><br><b>

假设您想运行您的 Pod 在所有节点上 `hw` 设置为最大值或最小值，而不仅仅是最大值。这对于非常简化的节点选择器来说是不可能的，这就是您可能需要考虑的地方 `node affinity`.
</b></details>

<a name="taints"></a>
## 污点

<details>
<summary>检查节点“master”上是否有污点</summary><br><b>

`k描述无主 | grep -i 污点`
</b></details>

<details>
<summary>使用键“app”、值“web”和效果“NoSchedule”在集群中的节点之一上创建污点。确认已应用</summary><br><b>

`k taint node minikube app=web:NoSchedule`

`k 描述没有 minikube | grep -i 污点`
</b></details>

<details>
<summary>您应用了污点 <code>k 污点节点 minikube app=web:NoSchedule</code> 在集群中唯一的节点上然后执行 <code>kubectl 运行 some-pod --image=redis</code>。会发生什么？</summary><br><b>

的 Pod 由于集群中唯一一个节点具有“app=web”污点，因此将保持“待处理”状态。
</b></details>

<details>
<summary>您应用了污点 <code>k 污点节点 minikube app=web:NoSchedule</code> 在集群中唯一的节点上然后执行 <code>kubectl 运行 some-pod --image=redis</code> 但是 Pod 处于待处理状态。如何修复它？</summary><br><b>

`kubectl edit po some-pod` 并添加以下内容

```
  - effect: NoSchedule
    key: app
    operator: Equal
    value: web
```

退出并保存。 Pod 现在应该处于运行状态。
</b></details>

<details>
<summary>从集群中的一个节点中删除现有的污点</summary><br><b>

`k taint node minikube app=web:NoSchedule-`
</b></details>

<a name="resources-limits"></a>
## 资源限制

<details>
<summary>检查集群中的某个 pod 是否有任何限制</summary><br><b>

`kubectl 描述 po <POD_NAME> | grep -i 限制`
</b></details>

<details>
<summary>运行一个名为“yay”的 pod，镜像为“python”，资源请求为 64Mi 内存和 250m CPU</summary><br><b>

`kubectl run yay --image=python --dry-run=client -o yaml > pod.yaml`

`vi pod.yaml`

```
spec:
  containers:
  - image: python
    imagePullPolicy: Always
    name: yay
    resources:
      requests:
        cpu: 250m
        memory: 64Mi
```

`kubectl apply -f pod.yaml`
</b></details>

<details>
<summary>使用映像“python”运行名为“yay2”的 pod。确保有64Mi内存和250m的资源请求 CPU 限制是128Mi内存和500m CPU</summary><br><b>

`kubectl run yay2 --image=python --dry-run=client -o yaml > pod.yaml`

`vi pod.yaml`

```
spec:
  containers:
  - image: python
    imagePullPolicy: Always
    name: yay2
    resources:
      limits:
        cpu: 500m
        memory: 128Mi
      requests:
        cpu: 250m
        memory: 64Mi
```

`kubectl apply -f pod.yaml`
</b></details>

<a name="monitoring"></a>
## 监控

<details>
<summary>部署指标服务器</summary><br><b>

`kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml`
</b></details>

<details>
<summary>使用metrics-server，查看以下内容：

* 集群中性能最高的节点
* 表现最佳 Pods
</summary><br><b>

* 顶部节点： `kubectl top nodes`
* 顶部豆荚： `kubectl top pods`

</b></details>

<a name="scheduler-1"></a>
## Scheduler

<details>
<summary>可以部署多个 Scheduler 吗？</summary><br><b>

是的，这是可能的。您可以使用类似于以下的命令运行另一个 pod：

```
spec:
  containers:
  - command:
    - kube-scheduler
    - --address=127.0.0.1
    - --leader-elect=true
    - --scheduler-name=some-custom-scheduler
...
```
</b></details>

<details>
<summary>假设有多个 Scheduler，如何知道某个 Pod 使用了哪个 Scheduler？</summary><br><b>

运行 `kubectl get events` 可以看到使用了哪个 Scheduler。
</b></details>

<details>
<summary>你想运行一个新的 Pod，并希望由自定义 Scheduler 来调度它。如何实现？</summary><br><b>

将以下内容添加到规格中 Pod:

```
spec:
  schedulerName: some-custom-scheduler
```
</b></details>
