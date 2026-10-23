<a name="aws-containers---run-tasks"></a>
## AWS 容器 - 运行任务

Note: this costs money

<a name="objectives"></a>
### 目标

在中创建任务 ECS 在法盖特启动。

任务本身可以是一个示例应用程序。

<a name="solution"></a>
### 解决方案

<a name="console"></a>
#### 控制台

1. Go 前往弹性容器服务页面
2. 点击“开始”
3. 选择“示例应用程序”
4. 检查它是否使用 Farget ECS (EC2 实例）并单击“下一步”
5. 在负载均衡器类型中选择“无”，然后单击“下一步”
6. 插入集群名称（例如 my_cluster）并单击“下一步”
7. 检查所有内容并单击“创建”
8. 等待一切完成

1. Go 到集群页面并检查任务的状态（在更改为“正在运行”之前需要几秒钟/分钟）

1. 单击该任务，您将看到启动类型为 Fargate
