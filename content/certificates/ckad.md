<a name="certified-kubernetes-application-developer-ckad"></a>
## 已认证 Kubernetes 应用程序开发人员（CKAD)

<a name="core-concepts"></a>
### 核心概念

<a name="pods"></a>
### Pods

<details>
<summary>使用 nginx:alpine 镜像部署一个名为 web-1985 的 pod</code></summary><br><b>

`kubectl run web-1985 --image=nginx:alpine --restart=Never`
</b></details>

<details>
<summary>如何知道某个pod正在哪个节点上运行？</summary><br><b>

`kubectl get po -o wide`
</b></details>

<a name="namespaces"></a>
### Namespaces

<details>
<summary>列出所有命名空间</code></summary><br><b>

kubectl get ns
</b></details>

<details>
<summary>列出命名空间“neverland”中的所有 Pod</code></summary><br><b>

kubectl get po -n neverland
</b></details>

<details>
<summary>列出所有命名空间中的所有 Pod</code></summary><br><b>

kubectl get po --all-namespaces
</b></details>
