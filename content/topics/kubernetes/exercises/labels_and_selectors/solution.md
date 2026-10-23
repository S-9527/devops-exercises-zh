<a name="labels-and-selectors-101"></a>
# 标签和选择器 101

<a name="objectives"></a>
## 目标

1. 如何列出所有 Pods 带有标签“app=web”？
2. 如何列出所有标记为“env=staging”的对象？
3. 如何列出“env=prod”和“type=web”中的所有部署？

<a name="solution"></a>
## 解决方案

`k get po -l app=web`
`k get all -l env=staging`
`k get deploy -l env=prod,type=web`