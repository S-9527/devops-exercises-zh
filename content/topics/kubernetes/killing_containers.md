<a name="killing-containers"></a>
## “杀死”容器

1. 运行 Pod 使用网络服务（例如httpd）
2. 验证 Web 服务是否正在运行 `ps` 命令
3. 检查 pod 执行了多少次重启
4. 杀死Web服务进程
5. 检查 pod 执行了多少次重启
6. 再次检查Web服务是否正在运行

<a name="after-you-complete-the-exercise"></a>
## 完成练习后

* 为什么“RESTARTS”计数增加？
