<a name="app-creation"></a>
# 应用程序创建

<a name="requirements"></a>
## 要求

1. 确保你有一些存储库 Kubernetes 体现
2. 确保您有一个 Kubernetes 集群运行 ArgoCD 已安装

<a name="objectives"></a>
## 目标

1. 使用 CLI 或 UI，创建一个具有以下属性的新应用程序：
   1. 应用程序名称：应用程序演示
   2. 项目：应用程序项目
   3. 存储库 URL：带有一些 k8s 清单的存储库
   4. 命名空间：默认
2. 验证应用程序是否已创建
3. 同步应用程序
4. 验证 Kubernetes 资源已创建
5. 删除应用程序

<a name="solution"></a>
## 解决方案

<a name="ui"></a>
### UI

1. 点击“新应用程序”
   1. 插入应用程序名称： `app-demo`
   2. 插入项目： `app-project`
   3. 在源下放置存储库 URL 给你的 GitHub 回购与 Kubernetes 体现
      1. 设置您的应用程序的路径
   4. 在目的地下输入您的地址 Kubernetes 集群并将命名空间设置为 `default`
   5. 点击“创建”
2. 单击“应用程序演示”表单上的“同步”按钮
   1. 点击“同步”
3. 检查 Kubernetes 资源已创建
   1. `kubectl get deployments`
4. 删除应用程序

<a name="cli"></a>
### CLI

```
argocd app create app-demo \
--project app-project \
--repo https://fake.repo.address \
--path ./some_app_path \
--dest-namespace default \
--dest-server my.kubernetes.cluster

# Check app state
argocd app list
argocd app get app-demo

# Sync app state
argocd app sync app-demo
argocd app wait app-demo

# Verify kubernetes resources were created
kubectl get deployments

# Delete the app
argocd app delete app-demo
```