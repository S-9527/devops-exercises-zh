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

<a name="solution"></a>
### 解决方案

<a name="console"></a>
#### 控制台

1. Go 到 EC2 服务 -> Auto Scaling组，然后单击“Auto Scaling”选项卡
2. 在“策略类型”下选择“目标跟踪扩展”
3. 将指标类型设置为平均值 CPU 利用率
4. 将目标值设置为 70%，然后单击“创建”

1. 如果您使用Amazon Linux 2、您可以通过以下方式强调实例：

```
sudo amazon-linux-extras install epel -y
sudo yum install stress -y
stress -c 4  # assuming you have 4 CPUs
```
2. 是的，额外的 EC2 实例已添加

1. 只需停止压力命令
2. 是的，其中之一 EC2 实例被终止
