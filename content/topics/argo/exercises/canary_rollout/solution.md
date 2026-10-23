<a name="argo-rollouts---canary"></a>
# Argo Rollouts - 金丝雀

<a name="requirements"></a>
## 要求

1. 跑步 Kubernetes 集群
2. Argo Rollouts CLI
3. 以特定版本部署的应用程序

<a name="objectives"></a>
## 目标

1. 安装 Argo Rollouts控制器
2. 编写使用金丝雀 Rollout策略的发布清单并应用它
   1. 将其设置为 6 个副本
   2. 禁用自动促销
3. 检查Rollout 列表
4. 以您喜欢的任何方式发布应用程序的新版本
   1. 检查发布的状态

<a name="solution"></a>
## 解决方案

安装：

1. `kubectl create namespace argo-rollouts`
   1. `kubectl apply -n argo-rollouts -f https://github.com/argoproj/argo-rollouts/releases/latest/download/install.yaml`

2. Rollout 资源：

```
---
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: some-app
spec:
  replicas: 6
  strategy:
    canary:
      stableService: k8s-service-stable
      canaryService: k8s-service-canary
      trafficRouting:
        ambassador:
          mappings:
            - k8s-mapping
      steps:
      - setWeight: 30
      - pause: {}
      - setWeight: 60
      - pause: {}
      - setWeight: 100
      - pause: {}   
  selector:
    matchLabels:
      app: some-web-app
  template:
    metadata:
      labels:
        app: some-web-app
    spec:
      containers:
      - name: web-app
        image: some/registry/and/image:v1.0
        ports:
        - name: http
          containerPort: 8080
          protocol: TCP
```

3. `kubectl argo rollouts list rollouts`
4. `kubectl argo rollouts set image SOME-APP web-app=some/registry/and/image:v2.0`
   1. `kubectl argo rollouts get rollout some-app --watch`