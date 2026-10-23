<a name="argocd-helm-app"></a>
# ArgoCD Helm 应用程序

<a name="requirements"></a>
## 要求

1. 一个正在运行的 Kubernetes 集群
2. 已在 Kubernetes 集群上安装 ArgoCD
3. 一个包含 Helm Chart 的仓库

<a name="objectives"></a>
## 目标

1. 在 ArgoCD 中创建一个新 Application，指向仓库中的 Helm Chart

<a name="solution"></a>
## 解决方案

```
argocd app create some-app \
--project default \
--repo https://repo-with-helm-chart
--path "./helm" \
--sync-policy auto \
--dest-namespace default \
--dest-server https://kubernetes.cluster
```
