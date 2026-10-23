<a name="aws-auto-scaling-groups---dynamic-scaling-policy"></a>
## AWS Auto Scaling 组 - 动态扩展策略

<a name="requirements"></a>
### 要求

1. 现有 Auto Scaling 组的最大容量至少设置为 3
2. 一跑 EC2 最多具有 4 个 CPU 的实例

<a name="objectives"></a>
### 目标

1. 创建具有以下属性的动态扩展策略
  1. 追踪平均值 CPU 利用率
  2. 目标值应为 70%
2. 增加 CPU 利用率至少达到 70%
  1. 您看到实例数量发生变化吗？
1. 减少 CPU 利用率低于 70%
  1. 您看到实例数量发生变化吗？
