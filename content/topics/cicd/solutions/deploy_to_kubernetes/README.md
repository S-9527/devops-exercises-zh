<a name="deploy-to-kubernetes"></a>
## 部署到 Kubernetes

注意：这个练习可以通过多种方式解决。这里描述的解决方案只是一种可能的方法。

1. 安装 Jenkins 在一个系统上（遵循标准 Jenkins 安装程序）
2. 部署 Kubernetes 在远程主机上（minikube 是实现它的简单方法）
3. 创建一个简单的网络应用程序或 [页面](html)

4. 创建 Kubernetes [资源](helloworld.yml) - Deployment、服务和 Ingress （对于 HTTPS 访问）
5. 创建一个 [Ansible 库存](inventory) 并插入地址 Kubernetes 集群
6. 写 [Ansible 剧本](deploy.yml) 部署 Kubernetes 资源并产生 
7. 创建一个 [管道](Jenkinsfile)

8. 运行管道:)
9. 尝试远程访问网络应用程序
