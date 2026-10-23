<a name="branch-01---solution"></a>
## 分支 01 - 解决方案

```
cd some_repository
echo "master branch" > file1
git add file1
git commit -a -m "added file1"
git checkout -b dev
echo "dev branch" > file2
git add file2
git commit -a -m "added file2"
```

验证：

```
git log (you should see two commits)
git checkout master
git log (you should see one commit)
```
