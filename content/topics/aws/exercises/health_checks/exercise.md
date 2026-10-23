<a name="aws-route-53---health-checks"></a>
## AWS Route 53 - Health Checks

<a name="requirements"></a>
## 要求

不同可用区的 3 个 Web 实例。

<a name="objectives"></a>
## 目标 

1. 为每个实例创建具有以下属性的运行状况检查：
  1. 以 AZ 实例所在的位置
  2. 失败阈值应为 5

2. 编辑您的实例之一的安全组并删除 HTTP 规则。
  1. 它是否改变了健康检查的状态？
