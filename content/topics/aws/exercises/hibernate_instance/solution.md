<a name="aws-ec2---hibernate-an-instance"></a>
## AWS EC2 - Hibernate an Instance

<a name="objectives"></a>
### 目标

1. 创建支持休眠的实例
2. 使实例休眠
3. 启动实例
4. 有什么办法可以证明实例已经休眠了 OS 观点？

<a name="solution"></a>
### 解决方案

1. 创建支持休眠的实例
  1. Go 到 EC2 服务
  2. Go 到实例并创建实例
  3. 在“配置实例”中，确保选中“启用休眠作为附加停止行为”
  4. 在“添加存储”中，确保加密 EBS 并确保大小>实例 RAM 大小（因为休眠可以保存 RAM 状态）
  5. 审查和启动

2. 使实例休眠
  1. Go 到实例页面
  2. 点击“实例状态”->“Hibernate实例”->Hibernate

3. 实例状态->启动

4. 运行“uptime”命令，该命令将显示系统运行的时间
