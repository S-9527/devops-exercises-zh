<a name="basic-ci-with-s3"></a>
# 基础 CI 与 S3

<a name="objectives"></a>
## 目标

1. 创建一个新的 S3 桶
2. 添加到存储桶index.html文件并使其成为静态网站
3. 创建一个 GitHub repo 并将 index.html 放在那里
4. 确保连接您的 AWS 帐户到 GitHub
5. 创建一个 CI 管道中 AWS 发布更新后的index.html GitHub 每当有人对存储库、特定分支进行更改时

<a name="solution"></a>
## 解决方案

<a name="manual"></a>
### 手册

<a name="create-s3-bucket"></a>
#### 创建 S3 桶

1. Go 到 S3 服务于 AWS 控制台
2. 输入存储桶名称并选择区域
3. 取消选中“阻止公共访问”以将其公开
4. 点击“创建存储桶”

<a name="static-website-hosting"></a>
#### 静态网站托管

1. 导航到新创建的存储桶并单击“属性”选项卡
2. 单击“静态网站托管”部分中的“编辑”
3. 选中“静态网络托管”的“启用”
4. 将“index.html”设置为索引文档，将“error.html”设置为错误文档。

<a name="s3-bucket-permissions"></a>
#### S3 存储桶权限

1. 单击新创建的“权限”选项卡 S3 桶
2. 单击存储桶策略 -> 编辑 -> 策略生成器。单击“GetObject”的“生成策略”
3. 复制生成的策略并转到“权限”选项卡并将其替换为当前策略 

<a name="github-source"></a>
#### GitHub 来源

1. Go 到开发人员工具控制台并创建一个新连接（GitHub)

<a name="create-a-ci-pipeline"></a>
#### 创建一个 CI 管道

1. Go 到 CodePipeline 中 AWS 控制台
2. 单击“创建管道”->插入管道名称->单击下一步
3. 选择新创建的源（GitHub）在来源下
4. 选择存储库名称和分支名称
5. 选择“AWS CodeBuild”作为构建提供者
6. 选择“托管映像”、“标准”运行时和“新服务角色”
7. 在部署阶段选择新创建的 S3 存储桶并为部署提供商选择“Amazon S3"
8. 查看管道并单击“创建管道”

<a name="test-the-pipeline"></a>
#### 测试管道

1. 从克隆项目 GitHub
2. 对index.html进行更改并提交它们（git commit -a）
3. 推送新的更改，验证新创建的 AWS 管道被触发并检查了网站的内容
