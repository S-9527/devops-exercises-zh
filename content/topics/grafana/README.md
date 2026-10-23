<a name="grafana"></a>
## Grafana

<details>
<summary>解释一下是什么 Grafana</summary><br><b>

[Grafana 文档](https://grafana.com/docs/grafana/latest/introduction): "Grafana 是一个完整的可观察性堆栈，允许您监视和分析指标、日志和跟踪。它允许您查询、可视化、警报和理解您的数据，无论数据存储在何处。与您的团队创建、探索和分享漂亮的仪表板，并培养数据驱动的文化。”
</b></details>

<details>
<summary>什么是 Grafana 云？</summary><br><b>

[Grafana 云](https://grafana.com/products/cloud/) 是一个版本 Grafana 这是通过云作为服务提供的。可观测性堆栈由以下人员设置、管理和维护 Grafana 实验室并提供免费和付费选项。您还可以从现有数据源发送数据，例如Prometheus、Loki 和可视化现有时间序列数据。
</b></details>

<details>
<summary>什么是 Grafana 企业？</summary><br><b>

[Grafana 企业](https://grafana.com/docs/grafana/latest/enterprise/#enterprise-plugins) 是商业版 Grafana 提供企业功能，例如_企业数据源_插件和内置协作功能。该版本包括来自以下机构的全职支持和培训 Grafana 团队。
</b></details>
 
<details>
<summary>默认值是什么 HTTP 的港口 Grafana?</summary><br><b>

[Grafana 开始使用](https://grafana.com/docs/grafana/latest/getting-started/getting-started/): Grafana 默认在端口 3000 上运行。
</b></details>

<details>
<summary>解释我们如何执行 HTTPS</summary><br><b>

[Grafana 社区](https://grafana.com/docs/grafana/latest/getting-started/getting-started/)：在配置设置中将协议设置为_https_， Grafana 然后期望客户端使用以下方式发送请求 HTTPS 协议。任何使用的客户端 HTTP 将收到 SSL/TLS 错误。
</b></details>

<details>
<summary>我们如何安装插件 Grafana?</summary><br><b>

[Grafana 开始使用](https://grafana.com/docs/grafana/latest/plugins/installation/)：导航至 [Grafana 页面插件](https://grafana.com/grafana/plugins/)，找到所需的插件并单击它，然后单击安装选项卡。有两种安装方式，具体取决于你的位置 Grafana 服务器正在运行：
- 云：在安装选项卡的 **For** 字段中，选择要安装插件的组织的名称（除非您只是其中的一部分），然后单击 **安装插件**。 Grafana 云会自动将插件安装到您的 Grafana 实例， 
您可能需要注销并重新登录才能看到该插件。
- 本地grafana：您可以使用 Grafana CLI 它可以让您列出可用的插件并安装它们。
```
grafana-cli plugins list-remote
grafana-cli plugins install <plugin-id>
```
您还可以通过从安装选项卡下载资源来安装打包的插件，然后将存档解压到插件目录中。插件目录的路径可以在配置文件中看到 
 ```
 unzip my-plugin-0.2.0.zip -d YOUR_PLUGIN_DIR/my-plugin
 ```
</b></details>

<details>
<summary>解释什么是“数据源”</summary><br><b>

[Grafana 文档](https://grafana.com/docs/grafana/latest/datasources/)：数据源是一个存储后端，充当数据源 Grafana。一些流行的数据源是 Prometheus, InfluxDB, 洛基, AWS 云观察。
</b></details>

<details>
<summary>什么是“默认配置”？</summary><br><b>

[Grafana 文档](https://grafana.com/docs/grafana/latest/administration/configuration/)：默认配置包含以下设置 Grafana 默认使用。位置取决于 OS 环境，请注意 $WORKING_DIR 指的是工作目录 Grafana.
- 窗户： ```$WORKING_DIR/conf/defaults.ini```
- Linux: ```/etc/grafana/grafana.ini```
- 苹果系统： ```/usr/local/etc/grafana/grafana.ini```
</b></details>
 
<details>
<summary>解释一下我们如何添加自定义配置 Grafana</summary><br><b>

[Grafana 文档](https://grafana.com/docs/grafana/latest/administration/configuration/): 
可以通过修改自定义配置文件或添加覆盖默认配置的环境变量来配置自定义配置。配置因具体情况而异 OS:
- Windows：有一个文件 ```sample.ini``` 在与defaults.ini文件相同的目录中，复制sample.ini并命名 ```custom.ini```。取消注释您要覆盖的设置。
- Linux：编辑配置文件 ```/etc/grafana/grafana.ini```
- macOS：添加名为的配置文件 ```custom.ini``` 在conf文件夹中，如果你安装了 Grafana 使用 Homebrew 然后您可以手动编辑 ```conf/defaults.ini```
- Docker：您可以覆盖现有配置 Grafana 与环境变量。一个例子是设置 Grafana 实例名称： ```E.g. export GF_DEFAULT_INSTANCE_NAME=my-instance```
</b></details>

<details>
<summary>开箱即用支持哪种外部身份验证？</summary><br><b>

[Grafana 文档](https://grafana.com/docs/grafana/latest/auth/overview/): Grafana Auth 是内置的认证系统，默认启用密码认证。
</b></details>

<details>
<summary>我们如何将仪表板导入到 Grafana 实例？</summary><br><b>

[Grafana 开始使用](https://grafana.com/docs/grafana/latest/dashboards/export-import/): Grafana 仪表板可以通过导入 Grafana UI。单击侧栏中的 + 图标，然后单击导入。您可以通过以下选项导入仪表板：
- 上传仪表板 JSON 文件，该文件是从导出的 Grafana UI 或通过 [ 获取HTTPS API](https://grafana.com/docs/grafana/latest/http_api/dashboard/#create-update-dashboard
)
- 粘贴 Grafana dashboard URL（可在 [Grafana Dashboards](https://grafana.com/grafana/dashboards/) 找到），或在文本框中输入 dashboard 的唯一 ID。
- 粘贴原始仪表板 JSON 文本到面板区域。
之后点击加载。
</b></details>

<details>
<summary>仪表板的数据格式是什么？</summary><br><b>

[Grafana 文档](https://grafana.com/docs/grafana/latest/dashboards/json-model/): Grafana 仪表板表示在 JSON 文件作为对象，它们存储有关仪表板的元数据，例如仪表板属性、面板元数据和变量。

</b></details>

<details>
<summary>解释与您的团队共享仪表板的步骤</summary><br><b>

[Grafana 文档](https://grafana.com/docs/grafana/latest/sharing/share-dashboard/): Go 到您的 grafana 实例的主页。单击顶部导航中的共享图标，从那里可以看到三个选项卡，并显示链接选项卡。
- 直接链接：点击复制，将链接发送至 Grafana 用户，请注意，用户需要授权才能查看该链接。这是通过将用户添加到团队中来完成的。
- 公开快照：点击本地快照，将快照发布到本地 Grafana 实例，或发布到 snapshots.raintank.io，这是一项免费服务，用于将仪表板快照发布到外部 Grafana 实例
您可以将快照配置为在特定时间后过期以及收集仪表板指标的超时值
</b></details>
 
<details>
<summary>如何组织仪表板和用户 Grafana?</summary><br><b>

[Grafana 文档](https://grafana.com/blog/2022/03/14/how-to-best-organize-your-teams-and-resources-in-grafana/
): 推荐方式 Grafana labs 的目的是创建用于对仪表板、库面板和警报进行分组的文件夹。可以通过 Teams 组织用户，Teams 向组成员授予权限。
- [文件夹](https://grafana.com/docs/grafana/latest/dashboards/dashboard_folders/)：单击边栏中的 + 图标，然后单击“创建文件夹”。在创建文件夹页面，为文件夹填写唯一的名称，然后单击“创建”
- [团队](https://grafana.com/tutorials/create-users-and-teams/) 您需要成为服务器管理员才能创建团队。 
 1. 单击侧边栏中的服务器管理（盾牌）图标，然后在“用户”选项卡中单击“新用户”。
 2. 输入用户详细信息，例如姓名、电子邮件、用户名和密码。用户稍后可以更改密码
 3. 单击“创建”以创建用户帐户。
</b></details>
 
<details>
<summary>解释创建“警报”的步骤</summary><br><b>

[Grafana 文档](https://grafana.com/docs/grafana/latest/alerting/old-alerting/create-alerts/): 
 
 “导航到要添加或编辑警报规则的面板，单击标题，然后单击“编辑”。在“警报”选项卡上，单击“创建警报”。如果此面板已存在警报，则您只需编辑“警报”选项卡上的字段即可。填写字段。下面的警报规则字段中列出了说明。编写完规则后，单击右上角的“保存”以保存警报规则和仪表板。 （可选但推荐）单击测试规则以确保规则返回您期望的结果”
</b></details>


 
 
 
 
