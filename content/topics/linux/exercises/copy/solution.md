<a name="copy-time"></a>
# 复印时间

<a name="objectives"></a>
## 目标

1. 创建一个空文件，名为 `x` 在 `/tmp`
2. 复制 `x` 您创建的文件到您的主目录
3. 创建一个副本 `x` 文件名为 `y`
4. 创建一个名为的目录 `files` 并移动 `x` 和 `y` 那里
5. 复制目录“files”并命名副本 `copy_of_files`
6. 重命名 `copy_of_files` 目录到 `files2`
7. 删除 `files` 和 `files2` 目录

<a name="solution"></a>
## 解决方案

```
touch /tmp/x
cp x ~/
cp x y
mkdir files
mv x files | mv y files
cp -r files copy_of_files
mv copy_of_files files2
rm -rf files files2
```
