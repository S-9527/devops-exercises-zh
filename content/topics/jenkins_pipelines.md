<a name="jenkins-pipelines"></a>
## Jenkins 管道

编写/创建以下内容 Jenkins 管道：

* 一个管道，将在 git 推送到某个存储库时运行单元测试
* 管道将执行以下操作：

  * 配置实例（也可以是容器）
  * 将实例配置为 Apache Web 服务器
  * 在配置的实例上部署 Web 应用程序
