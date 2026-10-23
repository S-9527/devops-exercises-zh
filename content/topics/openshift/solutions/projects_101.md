<a name="openshift---projects-101"></a>
## OpenShift - Projects 101

<a name="objectives"></a>
### 目标

在新部署的集群中（最好）执行以下操作：

1. 登录到 OpenShift 集群
2. 列出所有项目
3. 创建一个名为“neverland”的新项目
4. 查看当前项目的概览状态

<a name="solution"></a>
### 解决方案

```
oc login -u YOUR_USER -p YOUR_PASSWORD_OR_TOKEN
oc get projects # Empty output in new cluster
oc new-project neverland
oc status
```
