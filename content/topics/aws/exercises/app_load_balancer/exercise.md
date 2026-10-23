<a name="aws-elb---application-load-balancer"></a>
## AWS ELB - Application Load Balancer 

<a name="requirements"></a>
### 要求                   

两个 EC2 具有简单 Web 应用程序的实例，该应用程序显示带有字符串“嘿，这是我， `<HOSTNAME>`!"

<a name="objectives"></a>
### 目标                     

1. 为您拥有的两个实例创建一个应用程序负载均衡器，具有以下属性
  1. 健康阈值：3
  2. 不健康阈值：3
  3. 间隔：10秒
2. 验证负载均衡器是否正常工作（=您在不同时间从两个实例获得回复）
