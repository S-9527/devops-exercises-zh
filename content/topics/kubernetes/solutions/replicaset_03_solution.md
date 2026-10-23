<a name="replicaset-03---solution"></a>
## ReplicaSet 03 - 解决方案

1. 创建一个 ReplicaSet 有 2 个副本。确保用于选择器的标签和在 Pods 是“类型=网络”

```
cat >> rs.yaml <<EOL
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: web
  labels:
    app: somewebapp
    type: web
spec:
  replicas: 2
  selector:
    matchLabels:
      type: web
  template:
    metadata:
      labels:
        type: web
    spec:
      containers:
      - name: httpd
        image: registry.redhat.io/rhscl/httpd-24-rhel7
EOL

kubectl apply -f rs.yaml
```

2. 检查 ReplicaSet 已创建并且有 2 个副本

```
kubectl get rs
# OR a more specific way: kubectl get -f rs.yaml
```

3. 列出 Pods 运行并将输出保存在某处

```
kubectl get po > running_pods.txt
```

4. 从其中之一删除标签 (type=web) Pods 由创建的 ReplicaSet

```
kubectl label pod <POD_NAME> type-
```

5. 列出 Pods 跑步。还有更多吗 Pods 去掉标签后运行？为什么？

```
Yes, there is an additional Pod running because once the label (used as a matching selector) was removed, the Pod became independent meaning, it's not controlled by the ReplicaSet anymore and the ReplicaSet was missing replicas based on its definition so, it created a new Pod.
```

6. 检查 ReplicaSet 确实创造了一个新的 Pod

```
kubectl describe rs web
```
