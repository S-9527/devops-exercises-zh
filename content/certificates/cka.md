<a name="certified-kubernetes-administrator-cka"></a>
## 已认证 Kubernetes 管理员（CKA)

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
