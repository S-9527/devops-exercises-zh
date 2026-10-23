<a name="kustomize---common-labels"></a>
# Kustomize - Common Labels

<a name="requirements"></a>
## 要求

1. 跑步 Kubernetes 集群
2. Kubctl 版本 1.14 或更高版本

<a name="objectives"></a>
## 目标

在当前目录中有一个应用程序由 Deployment 和服务。

1. 编写一个 kustomization.yml 文件，该文件将添加到 Service 和 Deployment 标签“球队名称：ace”
2. 执行 kustomize 命令，该命令将生成带有附加标签的自定义 k8s 文件

<a name="solution"></a>
## 解决方案

1. 将以下内容添加到 someApp 目录中的 kustomization.yml 中：

```
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

commonLabels:
  team-name: aces

resources:
  - service.yml
  - deployment.yml
```

2. 运行 `kubectl apply -k someApp`
