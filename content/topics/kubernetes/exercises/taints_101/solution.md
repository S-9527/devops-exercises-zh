<a name="taints-101"></a>
# 污点 101

<a name="objectives"></a>
## 目标

1. 检查集群中的某个节点是否有污点（哪个节点无关紧要）
2. 使用键“app”、值“web”和效果“NoSchedule”在集群中的节点之一上创建污点
   1. 解释一下它到底做了什么
   2. 确认已应用

<a name="solution"></a>
## 解决方案

1. `kubectl 描述没有 minikube | grep -i 污点`
2. `kubectl taint node minikube app=web:NoSchedule`
   1. 任何具有“app=web”键值的资源都不会在节点上调度 `minikube`
   2. `kubectl 描述没有 minikube | grep -i 污点`
3. 

```
kubectl run some-pod --image=redis
kubectl edit po some-pod
```

```
 - effect: NoSchedule
    key: app
    operator: Equal
    value: web
```

保存并退出。的 Pod 应该正在运行。