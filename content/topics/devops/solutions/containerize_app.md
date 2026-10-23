<a name="containerize-an-application"></a>
## 将应用程序容器化

1. 克隆您想要容器化的开源项目。一些建议：

```
https://github.com/bregman-arie/node-hello-world
https://github.com/bregman-arie/flask-hello-world
```

`git clone https://github.com/bregman-arie/node-hello-world`

2. 写一个 Dockerfile 您将用于构建应用程序的映像（您可以使用您想要的任何基础映像）

```
FROM alpine
LABEL maintainer="your name/email"
RUN apk add --update nodejs npm
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "./app.js"]
```

3. 使用构建图像 Dockerfile 你刚刚写了

`docker image build -t web_app:latest .`

4. 验证图像是否存在

`docker image ls`

5. [可选] 将您刚刚构建的映像推送到注册表

```
docker login
docker image tag web_app:latest <your username>/web_app:latest
# Verify with "docker image ls"
docker image push <your username>/web_app:latest
```

6. 运行应用程序

```
docker container run -d -p 80:3000 web_app:latest
```

7. 检查应用程序是否正在运行

```
docker container ls
docker logs <container ID/name>
# In the browser, go to 127.0.0.1:80
```
