<a name="git---squashing-commits---solution"></a>
## Git - 压缩提交 - 解决方案

1. 在 git 存储库中，创建一个内容为“Mario”的新文件并提交更改：

```
echo "Mario" > new_file
git add new_file
git commit -m "New file"
```

2. 更改您刚刚创建的文件的内容，使其变为“Mario & Luigi”，然后创建另一个提交：

```
echo "Mario & Luigi" > new_file
git commit -a -m "Added Luigi"
```

3. 通过运行以下命令验证您有两个单独的提交：

```
git log
```

4. 将您创建的两个提交压缩为一个提交：

```
git rebase -i HEAD~2
```

您应该看到类似于以下内容的内容：

```
pick 5412076 New file
pick 4016808 Added Luigi
```

改变 `pick` 到 `squash`:

```
pick 5412076 New file
squash 4016808 Added Luigi
```

保存它并为压缩的提交提供提交消息。

> **注意**：如果运行 `git rebase -i HEAD~2` 返回致命错误（例如，“无效的上游”HEAD~2'")，这通常意味着您的第二次提交实际上是根提交，并且之前没有有效的父提交。在这种情况下，您可以：
> *使用 `git rebase -i --root` 允许重写根提交，**或**
> * 在这两个提交之前创建一个初始提交，以便 `HEAD~2` 指向有效的提交。

<a name="after-you-complete-the-exercise"></a>
### 完成练习后

**回答以下问题：**

* **压缩提交的原因是什么？**  
  历史变得更加清晰，并且更容易跟踪更改，而无需进行许多小提交，例如“删除角色”。

* **是否可以压缩超过 2 次提交？**  
  是的。
