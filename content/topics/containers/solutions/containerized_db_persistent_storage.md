<a name="containerized-db-with-persistent-storage"></a>
# 容器化 DB 具有持久存储

1. 使用您喜欢的任何类型的数据库运行容器（MySql、 PostgreSQL、MongoDB等）
  1. 使用主机上的数据库挂载点，而不是使用容器存储
  2. 解释为什么使用主机存储而不是容器存储可能是更好的选择
2. 验证容器正在运行


<a name="solution"></a>
## 解决方案

```
# Create the directory for the DB on host
mkdir -pv ~/local/mysql
sudo semanage fcontext -a -t container_file_t '/home/USERNAME/local/mysql(/.*)?'
sudo restorecon -R /home/USERNAME/local/mysql

# Run the container
podman run --name mysql -e MYSQL_USER=mario -e MYSQL_PASSWORD=tooManyMushrooms -e MYSQL_DATABASE=university -e MYSQL_ROOT_PASSWORD=MushroomsPizza -d mysql -v /home/USERNAME/local/mysql:/var/lib/mysql/db

# Verify it's running
podman ps
```

最好使用存储主机，因为如果容器被删除（或存储回收），您可以 DB 数据仍然可用。
