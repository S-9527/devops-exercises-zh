<a name="aws-elb---alb-multiple-target-groups"></a>
## AWS ELB - ALB 多个目标群体

<a name="requirements"></a>
### 要求                   

两个 EC2 具有简单 Web 应用程序的实例，该应用程序显示带有字符串“嘿，这是我， `<HOSTNAME>`!"
一 EC2 具有简单 Web 应用程序的实例，该应用程序在端点 /test 下显示带有字符串“嘿，这只是一个测试...”的网页

<a name="objectives"></a>
### 目标

1. 为您拥有的两个实例创建一个应用程序负载均衡器，具有以下属性
  1. 健康阈值：3
  2. 不健康阈值：3
  3. 间隔：10秒
2. 为第三个实例创建另一个目标组
  1. 流量应根据“/test”路径转发到该组
