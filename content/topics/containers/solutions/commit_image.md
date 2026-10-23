<a name="create-images-on-the-fly"></a>
# 即时创建镜像

<a name="requirements"></a>
## 要求

本地至少有一个镜像（运行 `podman image ls` 来确认）。<br>
如果本地没有镜像，只需运行 `podman pull nginx:alpine`.

<a name="objectives"></a>
## 目标

1. 使用 Web 服务器映像运行容器（例如 httpd、nginx...）
  - 将容器的80端口绑定到本地80端口
  - 以分离模式运行
  - 名称应为 nginx_container
2. 验证 Web 服务器运行且可访问
3. 创建一个 HTML 包含以下内容的文件并将其复制到容器到容器中将作为索引文件访问的路径

```
<html>
<head>
<title>It's a me</title>
</head>
<body>
<h1>Mario</h1>
</body>
```

4. 从正在运行的容器创建一个映像并将其命名为“nginx_mario”
5. 用“mario”标签标记容器
6. 删除原始容器（container_nginx）并验证它是否已删除
7. 从您创建的镜像中创建一个新容器（与原始容器的方式相同）
8. 运行 `curl 127.0.0.1:80`。你看到了什么？
9. 运行 `podman diff` 在新镜像上。解释一下输出

<a name="solution"></a>
## 解决方案

```
# Run the container
podman run --name nginx_container -d -p 80:80 nginx:alpine

# Verify web server is running
curl 127.0.0.1:80
    #  <!DOCTYPE html>
    #  <html>
    #  <head>
    #  <title>Welcome to nginx!</title>

# Create index.html file
cat <<EOT >>index.html
<html>
<head>
<title>It's a me</title>
</head>
<body>
<h1>Mario</h1>
</body>
EOT

# Copy index.html to the container
podman cp index.html nginx_container:/usr/share/nginx/html/index.html

# Create a new image out of the running container
podman commit nginx_container nginx_mario

# Tag the image
podman image ls
# localhost/nginx_mario     latest   dc7ed2343521   52 seconds ago   25 MB
podman tag dc7ed2343521 mario

# Remove the container
podman stop nginx_container
podman rm nginx_container
podman ps -a # no container 'nginx_container'

# Create a container out of the image 
podman run -d -p 80:80 nginx_mario

# Check the container created from the new image
curl 127.0.0.1:80
#<html>
#<head>
#<title>It's a me</title>
#</head>
#<body>
#<h1>Mario</h1>
#</body>

# Run diff
podman diff nginx_mario

C /etc
C /etc/nginx/conf.d
C /etc/nginx/conf.d/default.conf
A /run/nginx.pid
C /usr/share/nginx/html
C /usr/share/nginx/html/index.html
C /var/cache/nginx
C /var
C /var/cache
A /var/cache/nginx/client_temp
A /var/cache/nginx/fastcgi_temp
A /var/cache/nginx/proxy_temp
A /var/cache/nginx/scgi_temp
A /var/cache/nginx/uwsgi_temp

# We've set new index.html which explains why it's changed (C)
# We also created the image while the web server is running, which explains all the files created under /var
```
