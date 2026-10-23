<a name="replicaset-103"></a>
## ReplicaSet 103

<a name="objective"></a>
#### 目的

了解标签如何使用 ReplicaSets

<a name="instructions"></a>
#### 使用说明

1. 创建一个 ReplicaSet 有 2 个副本。确保用于选择器的标签和在 Pods 是“类型=网络”
2. 检查 ReplicaSet 已创建并且有 2 个副本
3. 列出 Pods 跑步
4. 从其中之一删除标签 (type=web) Pods 由创建的 ReplicaSet
5. 列出 Pods 跑步。还有更多吗 Pods 去掉标签后运行？为什么？
6. 检查 ReplicaSet 确实创造了一个新的 Pod
