<a name="replicaset-01---solution"></a>
## ReplicaSet 01 - 解决方案

1. 创建一个 ReplicaSet 有 2 个副本。该应用程序可以是任何东西。

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

3. 删除其中一项 Pods 的 ReplicaSet 已创建

```
kubectl delete po <POD_NAME>
```

4. 如果你列出所有 Pods 现在，你会看到什么？

```
The same number of Pods. Since we defined 2 replicas, the ReplicaSet will make sure to create another Pod that will replace the one you've deleted.
```

5. 删除 ReplicaSet 你已经创建了

```
kubectl delete -f rs.yaml
```

6. 检查您是否已删除 ReplicaSet

```
kubectl get rs
# OR a more specific way: kubectl get -f rs.yaml
```
