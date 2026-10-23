<a name="aws-elastic-beanstalk---nodejs"></a>
## AWS Elastic Beanstalk - Node.js

<a name="prerequisites"></a>
### 先决条件
1. 确保 node.js 应用程序在 __package.json__ 文件中指定了 _npm start_ 命令，如下例所示
```
{

  "name": "application-name",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node app"
  },
  "dependencies": {
    "express": "3.1.0",
    "jade": "*",
    "mysql": "*",
    "async": "*",
    "node-uuid": "*"
} 
```
2. 压缩应用程序，并确保不压缩父文件夹，仅压缩文件在一起，例如：

```
\Parent - (exclude the folder itself from the the zip)
- file1 - (include in zip)
- subfolder1 (include in zip)
- file2 (include in zip)
- file3 (include in zip)
```

<a name="solution"></a>
### 解决方案

1. 打造“新环境”
2. 选择环境 => _Web 服务器环境_
3. 填写创建 Web 服务器环境部分
a.填写“应用名称”
4. 填写环境信息部分
a.填写“环境名称”
b.域 - “保留自动生成的值”
5. 平台
a.选择平台 => _node.js_
6. 应用程序代码 => 从本地计算机上传压缩代码
7. 创造环境
8. 等待环境出现
9. 检查网站
a.导航到“应用程序”选项卡， 
b.选择最近创建的node.js应用程序
c.单击 URL - highlighted

<a name="documentation"></a>
### 文档
[弹力豆茎 / Node.js 开始使用](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-getstarted.html)