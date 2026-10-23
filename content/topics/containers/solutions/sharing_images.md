<a name="sharing-images"></a>
# 分享镜像

<a name="requirements"></a>
## 要求

本地至少有一个镜像（运行 `podman image ls` 来确认）。<br>
如果本地没有镜像，只需运行 `podman pull httpd`.

<a name="objectives"></a>
## 目标

1. 选择一个镜像并从中创建一个存档
2. 检查存档大小。与镜像尺寸不同吗？如果是，有什么区别？如果没有，为什么？
3. 将生成的存档复制到远程主机
4. 加载镜像
5. 验证它已加载并存在于远程主机上

<a name="solution"></a>
## 解决方案

```
# Save image as an archive
podman save -o httpd.tar httpd

# Check archive and image sizes
du -sh httpd.tar # output: 143MB
podman image ls | grep httpd # output: 149MB
# The archive is obviously smaller than the image itself (6MB difference)

# Copy the archive to a remote host
rsync -azc httpd.tar USER@REMOTE_HOST_FQDN:/tmp/

# Load the image
podman load -i /tmp/httpd.tar

# Verify it exists on the system after loading
podman image ls
```
