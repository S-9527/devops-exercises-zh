<a name="aws---launch-ec2-web-instance"></a>
## AWS - Launch EC2 网络实例

<a name="objectives"></a>
### 目标

启动一个 EC2 具有以下要求的实例：

1. Amazon Linux 2 张图片
2. 实例类型：选择具有 1 个 vCPU 和 1 GiB 内存的实例
3. 实例终止时应删除实例存储
4. 当实例启动时，它应该安装：
  1. 安装httpd包
  2. 启动httpd服务
  3. 确保 /var/www/html/index.html 的内容是 `I made it! This is is awesome!`
5. 它应具有标签：“类型：web”，实例名称应为“web-1”
6. HTTP 应从任何地方接受流量（端口 80）
