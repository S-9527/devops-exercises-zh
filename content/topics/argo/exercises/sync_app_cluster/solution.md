<a name="sync-app---cluster"></a>
# 同步应用程序 - 集群

<a name="requirements"></a>
## 要求

1. 确保您有一个 Kubernetes 集群运行 ArgoCD 已安装
1. 确保您在集群中部署了应用程序并由 ArgoCD

<a name="objectives"></a>
## 目标

1. 验证应用程序是否被跟踪 ArgoCD 并同步
2. 。通过运行以下命令来更改您的应用程序 `kubectl` 命令。改变可以是任何事情：
   1. 更改图像的标签
   2. 更改副本数量
   3. 如果您愿意，您可以走极端并删除资源:)
3. 检查应用程序状态 ArgoCD
4. 同步应用程序状态

<a name="solution"></a>
## 解决方案

<a name="ui"></a>
### UI

1. 点击应用程序中的 UI
   1. 确保其同步且处于“健康”状态
2. 在集群中进行检查
   1. `kubectl scale --replicas=0 <DEPLOYMENT_NAME>`
   2. `kubectl get rs <DEPLOYMENT_NAME>`
3. Go 回到 UI 并检查应用程序的状态
   1. 如果仍然同步，请确保单击“刷新”
   2. 应用程序应处于“不同步”状态
   3. 单击“同步”，然后单击“同步”

<a name="cli"></a>
### CLI 

```
# Check app state and verify it's in sync
argocd app get app-demo

# Run the following k8s commands (or any other commands that will change the state of your app)
kubectl scale --replicas=0 <DEPLOYMENT_NAME>
kubectl get rs <DEPLOYMENT_NAME>

# Check app state again
argocd app get app-demo

# Sync app state
argocd app sync app-demo
argocd app wait app-demo
```