<a name="sync-app---git"></a>
# 同步应用程序 - Git

<a name="requirements"></a>
## 要求

1. 确保你有一个包含 Kubernetes manifest 的 Git 仓库
2. 确保你有一个已安装 ArgoCD 的 Kubernetes 集群


<a name="objectives"></a>
## 目标

1. 使用创建一个新应用程序 UI 或 CLI
   1. 应用程序名称：应用程序演示
   2. 项目：项目演示
   3. Kubernetes 命名空间：默认
2. 同步应用程序
3. 在 `default` namespace 中执行 `kubectl get deploy`，验证应用程序正在运行
4. 现在修改仓库中的某个 Kubernetes manifest（例如更新 Deployment label）
5. 回到 ArgoCD 并检查 Application 的状态
6. 同步应用程序的状态

<a name="solution"></a>
## 解决方案

<a name="ui"></a>
### UI

1. 点击“新应用程序”
   1. 插入应用程序名称： `app-demo`
   2. 插入项目： `project-demo`
   3. 在 Source 中填写包含 Kubernetes manifest 的 GitHub repo URL
      1. 设置 Application path
   4. 在 Destination 中输入 Kubernetes 集群地址，并将 namespace 设置为 `default`
   5. 点击“创建”
2. 点击新创建的应用程序
   1. 点击“同步按钮”，然后点击“同步”
3. 修改 Git repo 中的 Kubernetes manifest
   1.  `git add .`
   2.  `git commit -a`
   3.  `git push origin <BRANCH_NAME>`
4.  回到 ArgoCD UI 并检查 Application 的状态
    1.  您应该看到它“不同步”。如果没有，您可能需要单击“刷新”
    2.  您还可以点击“App diff”查看导致“不同步”的差异
5.  单击“同步”和“同步”以同步应用程序

<a name="cli"></a>
### CLI 

```
argocd app create app-demo \
--project project-demo \
--repo https://fake.repo.address \
--path ./some_app_path \
--dest-namespace default \
--dest-server my.kubernetes.cluster

# In the Git repo
cd <git repo>
vi <k8s manifest>
git add .
git commit -a
git push origin <BRANCH_NAME>

# Check app state
argocd app get app-demo

# Sync app state
argocd app sync app-demo
argocd app wait app-demo
```
