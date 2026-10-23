<a name="killing-containers---solution"></a>
## “杀死”容器——解决方案

1. 运行 Pod 使用网络服务（例如httpd）- `kubectl run web --image registry.redhat.io/rhscl/httpd-24-rhel7`
2. 验证 Web 服务是否正在运行 `ps` 命令- `kubectl exec web -- ps`
3. 检查 pod 已执行了多少次重启 - `kubectl get po web`
4. 杀死网络服务进程 -`kubectl exec web -- kill 1`
5. 检查 pod 已执行了多少次重启 - `kubectl get po web`
6. 再次检查网络服务是否正在运行 - `kubectl exec web -- ps`

<a name="after-you-complete-the-exercise"></a>
## 完成练习后


* 为什么“RESTARTS”计数增加？ - `Kubernetes restarted the Pod because we killed the process and the container was not running properly.`