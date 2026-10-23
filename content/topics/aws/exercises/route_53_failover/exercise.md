<a name="aws-route-53---failover"></a>
## AWS Route 53 - Failover

<a name="requirements"></a>
### 要求

一个跑步 EC2 为其定义了健康检查的 Web 实例 Route 53

<a name="objectives"></a>
### 目标

1. 创建一个故障转移记录，如果运行状况检查未通过，该记录将故障转移到另一条记录
  1. 确保 TTL 是 30
  2. 将故障转移记录与您的健康检查相关联
