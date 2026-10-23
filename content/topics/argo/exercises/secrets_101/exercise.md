<a name="argocd-secrets-101"></a>
# ArgoCD Secret 101

<a name="requirements"></a>
## 要求

1. 跑步 Kubernetes 集群
2. 应用程序 k8s 清单包含Secret
3. 安装了 Kubeseal 二进制文件

<a name="objectives"></a>
## 目标

1. 安装 bitnami 密封控制器为 ArgoCD 应用程序
2. 加密机密并使用 k8s 清单将其提交到存储库
3. 使用您加密的机密创建应用程序

<a name="solution"></a>
## 解决方案

点击 [这里](solution.md) 查看解决方案