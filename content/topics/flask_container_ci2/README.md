如果您选择接受的话，您的任务涉及开发一个应用程序、将其容器化并建立一个 CI 为了它。
请仔细阅读所有说明。

如果以下任何步骤不起作用，我们希望您能够修复它们

<a name="installation"></a>
## 安装

1. 创建虚拟环境 `python3 -m venv challenge_venv`
2. 激活它 `source challenge_venv/bin/activate`
3. 安装此目录中的需求 `pip install -r requirements.txt`

<a name="run-the-app"></a>
## 运行应用程序

1. 移至 `challenges/flask_container_ci` 目录，如果您还不在那里
1. 运行 `export FLASK_APP=app/main.py`
1. 要运行应用程序，请执行 `flask run`。如果不起作用，请修复它
3. 访问 `http://127.0.0.1:5000`。您应该看到以下内容

```
{
    "current_uri": "/",
    "example": "/matrix/'123n456n789'",
    "resources": {
        "column": "/columns/<matrix>/<column_number>",
        "matrix": "/matrix/<matrix>",
        "row": "/rows/<matrix>/<row_number>"
    }
}
```

4. 您应该能够访问任何资源并获取以下数据：

* /matrix/\<matrix\>

    for example, for /matrix/123n456n789 the user will get:

    1 2 3
    4 5 6
    7 8 9

* /matrix/\<matrix\>/\<column_number\> 

    for example, for /matrix/123n456n789/2 the user will get:

    2
    5
    8

* /matrix/\<matrix\>/\<row_number\> 

    for example, for /matrix/123n456n789/1 the user will get:

    1 2 3 

<a name="containers"></a>
## 容器

使用 Docker 或 Pod伙计，将 Flask 应用程序容器化，以便用户可以运行以下两个命令：

```
docker build -t app:latest /path/to/Dockerfile
docker run -d -p 5000:5000 app
```

1. 您可以使用任何您想要的图像库
2. 仅容器化运行应用程序所需的内容，无需容器化其他内容。

<a name="ci"></a>
## CI

太好了，现在我们有了一个可以运行的应用程序，并且可以在容器中运行它，让我们设置一个 CI 为了它以后就不会再坏了
在当前目录中，您有一个名为tests.py的文件，其中包含应用程序的测试。您需要做的是：

1. 写一个 CI 将运行应用程序测试的管道。你可以自由选择任何东西 CI 您喜欢的系统或服务。使用 `python tests.py` 用于运行测试。
2. 应该有某种测试 Dockerfile 你写的
3. 添加额外的单元测试（或任何其他级别的测试）来测试应用程序

<a name="guidelines"></a>
### 指南 

* 除了应用程序功能之外，您可以更改任何您想要的内容 - 结构、工具、库……如果可能，添加 `notes.md` 解释原因、逻辑、想法以及您想分享的任何其他内容的文件
* 的 CI 部分应包括管道定义的源代码
