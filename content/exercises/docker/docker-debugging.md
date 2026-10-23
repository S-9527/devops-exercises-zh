<a name="docker-scenario-based-exercises"></a>
# Docker 基于场景的练习

该文件包含基于场景的 Docker 需要帮助的问题 DevOps 工程师练习实际的故障排除和配置任务。每个问题都模拟实际场景并提供逐步答案。

<a name="question-1-debugging-a-docker-container-failure"></a>
## 问题一：调试 Docker 容器故障

<a name="question"></a>
### 问题
你是一个 DevOps 工程师部署一个 Node.js 应用程序使用 Docker。你跑 `docker run -d -p 3000:3000 my-node-app`，但容器立即退出。使用 `docker ps -a`，您看到容器状态为 `Exited`。您将如何排查并解决这个问题？

<a name="answer"></a>
### 回答
要对容器立即退出进行故障排除：
1. **检查日志**：运行 `docker logs my-node-app` 查看错误消息。常见问题包括缺少依赖项（例如， `npm install` 失败）或命令不正确。
2. **检查容器**：使用 `docker inspect my-node-app` 检查 `Config.Cmd` 或 `Config.Entrypoint`。确保命令（例如， `node app.js`) 有效。
3. **验证 Dockerfile**：检查是否 `CMD` 或 `ENTRYPOINT` 是正确的，例如 `CMD ["node", "app.js"]`。如果需要更新和重建： `docker build -t my-node-app .`.
4. **交互式测试**：运行 `docker run -it my-node-app sh` 手动调试（例如， `node app.js`).
5. **检查资源**：确保主机有足够的内存/CPU 使用 `docker stats`.

**修复示例**：如果日志显示 `node: command not found`，更新 Dockerfile 使用 `FROM node:18`、重建并重新运行。

<a name="additional-notes"></a>
### 附加说明
- 始终从 `docker logs` 以获得错误线索。
- 使用 `docker ps -a` 检查容器状态和 ID.
- 常见问题包括缺少依赖项或应用程序崩溃。


---


<a name="question-2-configuring-a-multi-container-application"></a>
## 问题2：配置多容器应用程序

<a name="question-1"></a>
### 问题
作为一个 DevOps 工程师，您需要部署一个 Web 应用程序 Node.js 后端和一个 MySQL 数据库使用情况 Docker。这 Node.js 应用程序连接到 MySQL 上 `localhost:3306`，但是运行 `docker run` 每个容器都单独失败，因为它们无法通信。您将如何设置这些容器以使其协同工作？

<a name="answer-1"></a>
### 回答
为了使 Node.js 和 MySQL 容器通信：
1. **使用 Docker Compose**：创建一个 `docker-compose.yml` 文件来定义和链接这两个服务：
   ```yaml
   version: '3.8'
   services:
     node-app:
       image: my-node-app
       build: .
       ports:
         - "3000:3000"
       depends_on:
         - mysql-db
       environment:
         - DB_HOST=mysql-db
         - DB_PORT=3306
     mysql-db:
       image: mysql:8.0
       environment:
         - MYSQL_ROOT_PASSWORD=secret
       ports:
         - "3306:3306"
   ```
2. **运行应用程序**：执行 `docker-compose up -d` 启动两个容器。的 `node-app` 服务连接到 `mysql-db` 使用服务名称（`mysql-db`) 作为主机名，而不是 `localhost`.
3. **验证连接**：检查日志 `docker-compose logs node-app` 以确保 Node.js 应用程序连接到 MySQL。如果失败，请验证环境变量并 MySQL的准备情况。
4. **不使用 Compose 的替代方案**：使用自定义网络：
   - 创建网络： `docker network create my-app-network`
   - 运行 MySQL: `docker run -d --name mysql-db --network my-app-network -e MYSQL_ROOT_PASSWORD=secret mysql:8.0`
   - 运行 Node.js: `docker run -d --name node-app --network my-app-network -p 3000:3000 -e DB_HOST=mysql-db my-node-app`

<a name="additional-notes-1"></a>
### 附加说明
- Docker Compose 通过管理网络和依赖关系来简化多容器设置。
- 始终为数据库凭据设置环境变量以避免硬编码。


---


<a name="question-3-optimizing-a-dockerfile-for-cicd"></a>
## 问题 3：优化 Dockerfile 为了 CI/CD

<a name="question-2"></a>
### 问题
你是一个 DevOps 工程师集成一个 Docker化的 Python 应用程序成 Jenkins CI/CD 管道。的 Dockerfile 构建缓慢，导致管道延迟。您将如何优化 Dockerfile 在保持功能的同时加快构建速度？

<a name="answer-2"></a>
### 回答
为了优化一个 Dockerfile 为了更快 CI/CD 构建：
1. **使用较小的基本图像**：替换较重的图像，例如 `python:3.9` 与 `python:3.9-slim` 以减少大小和下载时间。
   ```dockerfile
   FROM python:3.9-slim
   ```
2. **利用层缓存**：从最不可能更改到最有可能更改的顺序对指令进行排序。复制 `requirements.txt` 并在复制应用程序代码之前安装依赖项：
   ```dockerfile
   COPY requirements.txt .
   RUN pip install -r requirements.txt
   COPY . .
   ```
3. **最小化层**：将相关命令与 `&&` 减少层数：
   ```dockerfile
   RUN pip install -r requirements.txt && rm -rf /root/.cache/pip
   ```
4. **使用多阶段构建**：如果应用程序需要构建工具，请使用多阶段构建来保持最终图像较小：
   ```dockerfile
   FROM python:3.9 AS builder
   COPY requirements.txt .
   RUN pip install -r requirements.txt
   FROM python:3.9-slim
   COPY --from=builder /usr/local/lib/python3.9 /usr/local/lib/python3.9
   COPY . .
   CMD ["python", "app.py"]
   ```
5. **测试于 Jenkins**：更新 Jenkins 仅当以下情况时才重建图像的管道 `Dockerfile` 或代码更改，否则使用缓存图像：
   ```groovy
   pipeline {
       agent any
       stages {
           stage('Build Docker Image') {
               when { changeset "Dockerfile,**.py" }
               steps { sh 'docker build -t my-python-app .' }
           }
       }
   }
   ```

<a name="additional-notes-2"></a>
### 附加说明
- 使用 `.dockerignore` 排除不必要的文件（例如， `.git`, `tests/`）来自构建上下文。
- 监控构建时间 Jenkins 以确认改进。


*由 Lahiru Galhena 贡献*
