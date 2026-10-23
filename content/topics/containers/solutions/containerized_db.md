<a name="containerized-db"></a>
# 容器化 DB

1. 使用您喜欢的任何类型的数据库运行容器（MySql、 PostgreSQL、MongoDB等）
2. 验证容器正在运行
3. 访问容器并创建一个新表（或集合，取决于哪个） DB 您选择的类型）对于学生
4. 插入学生的一行（或文档）
5. 验证行/文档已添加


<a name="solution"></a>
## 解决方案

```
# Run the container
podman run --name mysql -e MYSQL_USER=mario -e MYSQL_PASSWORD=tooManyMushrooms -e MYSQL_DATABASE=university -e MYSQL_ROOT_PASSWORD=MushroomsPizza -d mysql

# Verify it's running
podman ps

# Add student row to the database
podman exec -it mysql /bin/bash
mysql -u root
use university;
CREATE TABLE Students (id int NOT NULL, name varchar(255) DEFAULT NULL, PRIMARY KEY (id));
insert into Projects (id, name) values (1,'Luigi');
select * from Students;
```
