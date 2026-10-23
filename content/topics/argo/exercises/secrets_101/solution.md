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

1. 点击“新应用程序”
   1. 应用名称：控制器
   2. 项目：默认
   3. 同步策略：自动
   4. 存储库 URL: 一个 URL 到 bitnami 密封控制器清单
   5. 命名空间：kube-system

2. 对每个Secret运行以下命令： `kubeseal < some/secret.yml > sealed_secrets/some/encrypted_secret.yaml -o yaml`

3. 点击“新应用程序”
   1. 应用程序名称：某个应用程序
   2. 项目：默认
   3. 同步策略：自动
   4. 存储库 URL: 一个 URL 到 k8s 清单（包括加密的机密）
   5. 命名空间：默认
