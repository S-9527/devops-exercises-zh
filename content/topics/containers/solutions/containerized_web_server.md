<a name="containerized-web-server"></a>
# 容器化Web服务器

1. 在后台运行容器化 Web 服务器并将其端口 (8080) 绑定到本地端口
2. 验证端口（8080）是否已绑定
3. 从本地主机访问网络服务器
4. 现在运行相同的 Web 应用程序，但将其绑定到本地端口 8080

<a name="solution"></a>
## 解决方案

```
$ podman run -d -p 8080 httpd # run the container and bind the port 8080 to a local port
$ podman port -l 8080 # show to which local port the port 8080 on the container, binds to
0.0.0.0:41203
$ curl http://0.0.0.0:41203 # use the port from the output of the previous command

!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
	<head>
		<title>Test Page for the HTTP Server on Red Hat Enterprise Linux</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

$ podman run -d -p 8080:8080 httpd
```
