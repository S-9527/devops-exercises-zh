<a name="ci-for-open-source-project"></a>
## 为开源项目配置 CI

1. 从 GitHub 选择一个开源项目并 fork 它
2. 为你 fork 的项目创建 CI pipeline/workflow
3. CI pipeline/workflow 应该包含与该项目相关的检查或任务。例如：
  * 如果它是 Python 项目，可以运行 PEP8 检查
  * 如果项目包含单元测试目录，可以把这些单元测试作为 CI 的一部分运行
4. 在单独文件中说明 CI 中运行了什么，以及为什么选择包含这些内容。也可以描述你的想法、取舍和遇到的挑战

### Bonus

使用任意 container engine（例如 Docker、Podman）将你 fork 的项目容器化。<br>
成功在 container 中运行应用后，可以向原项目提交 Dockerfile，但要做好 maintainer 可能不需要或不想接受它的准备。

### 推荐项目

以下是目前没有 CI 的项目列表：

说明：除了列表中的第一个项目外，这些项目是通过脚本按一些参数筛选出来的。

* [This one](https://github.com/bregman-arie/devops-exercises) - We don't have CI! help! :)
* [image retrieval platform](https://github.com/skx6/image_retrieval_platform)
* [FollowSpot](https://github.com/jenbrissman/FollowSpot)
* [Pyrin](https://github.com/mononobi/pyrin)
* [food-detection-yolov5](https://github.com/lannguyen0910/food-detection-yolov5)
* [Lifely](https://github.com/sagnik1511/Lifely)
