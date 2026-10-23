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

点击 [这里](solution.md) 查看解决方案