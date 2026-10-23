<a name="replicaset-02---solution"></a>
## ReplicaSet 02 - 解决方案

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

3. 删除 ReplicaSet 但是 NOT 它创建的 pod

```
kubectl delete -f rs.yaml --cascade=orphan
```

4. 检查您是否已删除 ReplicaSet 但是 Pods 仍在运行

```
kubectl get rs # no replicas
kubectl get po # Pods still running
```

5. 再次创建相同的 ReplicaSet，不改变任何东西

```
kubectl apply -f rs.yaml
```

6. 检查是否 ReplicaSet 使用现有的 Pods 并且没有创建新的 Pods

```
kubectl describe rs web  # You should see there are no new events and if you list the pods with 'kubectl get po -f rs.yaml` you'll see they have the same names
```
