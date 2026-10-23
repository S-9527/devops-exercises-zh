<a name="node-selectors"></a>
# 节点选择器

<a name="objectives"></a>
## 目标

1. 在集群中的一个节点上应用标签“hw=max”
2. 创建并运行 Pod 被称为 `some-pod` 与镜像 `redis` 并将其配置为使用选择器 `hw=max`
3. 解释为什么节点选择器可能受到限制


<a name="solution"></a>
## 解决方案

点击 [这里](solution.md) 查看解决方案

1. `kubectl label nodes some-node hw=max`
2. 

```
kubectl run some-pod --image=redis --dry-run=client -o yaml > pod.yaml

vi pod.yaml

spec:
  nodeSelector:
    hw: max

kubectl apply -f pod.yaml
```

3. 假设您想运行您的 Pod 在所有节点上 `hw` 设置为最大值或最小值，而不仅仅是最大值。这对于非常简化的节点选择器来说是不可能的，这就是您可能需要考虑的地方 `node affinity`.