<a name="multi-stage-builds"></a>
## 多阶段构建

<a name="objective"></a>
### 目的

了解多阶段构建

<a name="instructions"></a>
### 使用说明

1. 在不实际构建镜像或运行任何容器的情况下，使用以下命令 Dockerfile 并将其转换为使用多级：

```
FROM nginx
RUN apt-get update \
 && apt-get install -y curl python build-essential \
 && apt-get install -y nodejs \
 && apt-get clean -y
RUN mkdir -p /my_app
ADD ./config/nginx/docker.conf /etc/nginx/nginx.conf
ADD ./config/nginx/k8s.conf /etc/nginx/nginx.conf.k8s
ADD app/ /my_cool_app
WORKDIR /my_cool_app
RUN npm install -g ember-cli
RUN npm install -g bower
RUN apt-get update && apt-get install -y git \
 && npm install \
 && bower install \
RUN ember build — environment=prod
CMD [ “/root/nginx-app.sh”, “nginx”, “-g”, “daemon off;” ]
```

2. 使用多阶段构建有什么好处？

<a name="solution"></a>
### 解决方案

1. 一个可能的解决方案（重点是从第一阶段传递应用程序）：

```
FROM node:6
RUN mkdir -p /my_cool_app
RUN npm install -g ember-cli
RUN npm install -g bower
WORKDIR /my_cool_app
RUN npm install
ADD app/ /my_cool_app
RUN bower install
RUN ember build — environment=prod

FROM nginx
RUN mkdir -p /my_cool_app
ADD ./config/nginx/docker.conf /etc/nginx/nginx.conf
ADD ./config/nginx/k8s.conf /etc/nginx/nginx.conf.k8s
# Copy build artifacts from the first stage
COPY — from=0 /my_cool_app/dist /my_cool_app/dist
WORKDIR /my_cool_app
CMD [ “/root/nginx-app.sh”, “nginx”, “-g”, “daemon off;” ]
```

2. 多阶段构建允许您通过将构建过程分为多个阶段来生成更小的容器映像，就像我们上面所做的那样。除实际应用程序外，应用程序映像不包含与构建过程相关的任何内容。
