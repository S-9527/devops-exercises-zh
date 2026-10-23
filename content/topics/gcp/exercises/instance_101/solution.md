<a name="create-an-instance"></a>
# 创建实例

<a name="objectives"></a>
## 目标

1. 创建一个 VM 具有以下属性的实例
   1. 名称：实例1
   2. 类型：e2-微型
   3. 标签：
      1. 应用程序：网络
      2. 环境：开发
2. 使用 CLI (gcloud) 执行以下操作：
   1. 将“app”标签更新为“db”
   2. 删除“env”标签

<a name="solution"></a>
## 解决方案

<a name="console"></a>
### 控制台

1. Go 到计算引擎-> VM 实例
2. 点击“创建实例”
   1. 插入名称“instance-1”
   2. 单击“添加标签”并添加以下标签：
      1. 应用程序：网络
      2. 环境：开发
   3. 选择机器类型：e2-micro
3. 点击“创建”
4. 选择创建的实例并单击“显示信息面板”
   1. 单击“labels”选项卡并将“app”标签的值更改为“db”
   2. 删除“env”标签

<a name="shell"></a>
### Shell

```
gcloud config set project <PROJECT_ID>
gcloud config set compute/region <REGION NAME>
gcloud config set compute/zone <ZONE NAME>

gcloud compute instances create instance-1 --labels app=web,env=dev --machine-type=e2-micro
gcloud compute instances update instance-1 --update-labels app=db
gcloud compute instances update instance-1 --remove-labels env
```

<a name="terraform"></a>
### Terraform

点击 [这里](main.tf) 查看main.tf文件