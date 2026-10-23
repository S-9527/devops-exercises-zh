<a name="git"></a>
# Git

<a name="exercises"></a>
## 练习

| 名称              | 主题  | 目的与说明         | 解决方案                                    | 评论 |
| ----------------- | ------ | -------------------------------- | ------------------------------------------- | -------- |
| 我的第一次提交   | 提交 | [练习](commit_01.md)         | [解决方案](solutions/commit_01_solution.md) |          |
| 分行时间    | 分公司 | [练习](branch_01.md)         | [解决方案](solutions/branch_01_solution.md) |          |
| 压制提交 | 提交 | [练习](squashing_commits.md) | [解决方案](solutions/squashing_commits.md)  |          |

<a name="questions"></a>
## 问题

<a name="git-basics"></a>
### Git 基础知识

<details>
<summary>如何知道某个目录是否是 git 仓库？</summary><br><b>
您可以检查是否有“.git”目录。
</b>
</details>

<details>
<summary>解释以下内容： <code>git目录</code>, <code>工作目录</code> 和 <code>暂存区</code></summary><br>
<b>

这个答案取自 [git-scm.com](https://git-scm.com/book/en/v1/Getting-Started-Git-Basics#_the_three_states)

“的 Git 目录是在哪里 Git 存储项目的元数据和对象数据库。这是最重要的
的一部分 Git，这就是您从另一台计算机克隆存储库时复制的内容。

工作目录是项目一个版本的单次签出。这些文件是从压缩包中提取出来的
数据库中的 Git 目录并放置在磁盘上供您使用或修改。

暂存区是一个简单的文件，通常包含在您的 Git 目录，存储有关将要发生的事情的信息
进入你的下一次提交。它有时被称为索引，但将其称为分期正在成为标准
区。”
</b>
</details>

<details>
<summary>有什么区别 <code>git拉</code> 和 <code>git 获取</code>?</summary><br><b>

很快，git pull = git fetch + git merge

当您运行 git pull 时，它会从远程或中央获取所有更改
存储库并将其附加到本地存储库中相应的分支。

git fetch gets all the changes from the remote repository, stores the changes in
本地存储库中的单独分支
</b></details>

<details>
<summary>如何检查文件是否被跟踪，如果没有，则跟踪它？</summary><br><b>

有多种方法可以检查文件是否被跟踪：
  - `git ls-files <file>` -> 退出代码 0 表示已被跟踪
  - `git blame <file>`
  ...
</b>
</details>

<details>
<summary><code>.gitignore</code> 文件有什么用途？</summary><br><b>
<code>.gitignore</code> 用于让 Git 忽略某些未跟踪文件。若要停止跟踪已经被 Git 跟踪的文件，可以使用 `git rm --cached`。
</b>
</details>

<details>
<summary>在提交更改之前如何查看已完成哪些更改？</summary><br><b>
`git diff`

</b></details>

<details>
<summary><code>git status</code> 是什么？</summary><br><b>

`git status` 帮助您了解存储库中文件的跟踪状态。重点关注工作目录和暂存区域 - 您可以了解在工作目录中进行了哪些更改、哪些更改在暂存区域中以及一般情况下是否正在跟踪文件。
</b></details>

<details>
<summary>您已在存储库中创建了新文件。如何确定 Git 追踪他们？</summary><br><b>

`git add FILES`
</b>
</details>

<a name="scenarios"></a>
### 应用场景

<details>
<summary>您的存储库中有您不想要的文件 Git 永远追踪他们。您应该怎样做才能避免跟踪他们？</summary><br><b>

将它们添加到文件中 `.gitignore`。这将确保这些文件永远不会添加到暂存区域。
</b></details>

<details>
<summary>您组织中的一个开发团队正在使用 monorepo，它变得相当大，包括数十万个文件。他们说运行许多 git 操作需要花费很多时间（例如 git status）。为什么会发生这种情况？您可以做什么来帮助他们？</summary><br><b>

很多 Git 操作与文件系统状态相关。 `git status` 例如将运行 diffs 进行比较 HEAD 提交索引和另一个差异以将索引与工作目录进行比较。作为这些差异的一部分，它需要运行相当多的 `lstat()` 系统调用。当运行数十万个文件时，即使不是几分钟，也可能需要几秒钟。

一种做法是使用 Git 内置的 `fsmonitor`（文件系统监视器）。借助 fsmonitor（可与 Watchman 集成），Git 会启动一个 daemon，持续监视 repo 工作目录中的变更并缓存这些信息。这样当你运行 `git status` 时，就不需要重新扫描整个工作目录，而是使用缓存状态。

<p align="center">
<img src="images/design/development/git_fsmonitor.png"/>
</p>

接下来，您可以尝试启用 `feature.manyFile` 与 `git config feature.manyFiles true`。这有两件事：

1. 套装 `index.version = 4` 这使得索引中的路径前缀压缩成为可能
2. 套装 `core.untrackedCache=true` 默认情况下设置为 `keep`。未跟踪的缓存是一个非常重要的概念。它的作用是记录工作目录下所有文件和目录的mtime。这样，当需要迭代所有文件和目录时，它可以跳过那些 mtime 未更新的文件和目录。

在启用它之前，您可能需要运行 `git update-index --test-untracked-cache` 对其进行测试并确保 mtime 在您的系统上运行。

Git 还有内置的 `git-maintainence` 优化命令 Git 存储库，因此运行命令更快 `git add` 或 `git fatch` 而且，git 存储库占用的磁盘空间更少。建议定期运行此命令（例如每天）。

此外，仅跟踪开发人员使用/修改的内容 - 某些存储库可能包含项目正常运行（或支持某些辅助选项）所需的生成文件，但开发人员实际上并未以任何方式进行修改。在这种情况下，追踪他们是徒劳的。
为了避免在工作目录中填充这些文件，可以使用 `sparse checkout` 的特征 Git.

最后，使用某些构建系统，您可以根据开发人员关注的项目组件准确地知道哪些文件正在使用/相关。这与 `sparse checkout` 可能会导致工作目录中仅填充一小部分文件的情况。使命令像 `git add`, `git status`等等，真的很快
</b></details>

<a name="branches"></a>
### 分支机构

<details>
<summary>你知道什么是分支策略（流程）？</summary><br><b>

- Git 流量
- GitHub 流量
- 基于主干的开发
- GitLab 流量

[说明](https://www.bmc.com/blogs/devops-branching-strategies/#:~:text=What%20is%20a%20branching%20strategy,used%20in%20the%20development%20process).

</b></details>

<details>
<summary>判断题：分支基本上是一个简单的指针或对特定工作线头部的引用</summary><br><b>

正确。
</b></details>

<details>
<summary>您有两个分支 - main 和 devel。如何确保 devel 与 main 同步？</summary><br><b>

```
git checkout main
git pull
git checkout devel
git merge main
```

</b></details>

<details>
<summary>简要描述运行 <code>git branch <BRANCH></code> 时幕后发生了什么</summary><br><b>

Git 运行 update-ref 添加 SHA-1 您所在分支的最后一次提交到您要创建的新分支
</b></details>

<details>
<summary>运行 <code>git branch <BRANCH></code> 时，Git 如何知道最后一次提交的 SHA-1？</summary><br><b>

使用 HEAD 文件： `.git/HEAD`
</b></details>

<details>
<summary>什么 <code>未上演的</code> 是指关于 Git?</summary><br><b>

位于工作目录中但不在工作目录中的文件 HEAD 也不在暂存区域中被称为“未暂存”。
</b></details>

<details>
<summary>判断题：当你 <code>git checkout some_branch git checkout some_branch</code>, Git 更新.git/HEAD 到 <code>/refs/heads/some_branch</code></summary><br><b>

正确。
</b></details>

<a name="merge"></a>
### 合并

<details>
<summary>您有两个分支 - main 和 devel。如何将 devel 合并到 main 中？</summary><br><b>

```
git checkout main
git merge devel
git push origin main
```

</b></details>

<details>
<summary>如何解决git合并冲突？</summary><br><b>

<p>
首先，打开有冲突的文件并确定冲突是什么。
接下来，根据您的公司或团队所接受的内容，您可以与您的同事讨论
同事之间的冲突或自己解决
解决冲突后，您可以添加文件 `git add <file_name>`
最后，你跑 `git rebase --continue`
</p>
</b></details>

<details>
<summary>您熟悉哪些合并策略？</summary><br><b>

提及两到三个就足够了，最好提及“递归”是默认的。

递归的
解决
我们的
他们的

这个页面解释得最好： https://git-scm.com/docs/merge-strategies
</b></details>

<details>
<summary>解释一下 Git 章鱼合并</summary><br><b>

也许值得一提的是：

- 这对于合并多个分支的情况很有用（也是此类用例的默认情况）
- 它主要用于将主题分支捆绑在一起

这是一篇关于章鱼合并的精彩文章： http://www.freblogg.com/2016/12/git-octopus-merge.html
</b></details>

<details>
<summary>有什么区别 <code>git重置</code> 和 <code>git 恢复</code>?</summary><br><b>

<p>

`git revert` 创建一个新的提交，撤消上次提交的更改。

`git reset` 取决于使用情况，可以修改索引或更改分支头的提交
当前正在指向。

</p>
</b></details>

<a name="rebase"></a>
### 变基

<details>
<summary>你想继续迈向巅峰。你将如何实现这一目标？</summary><br><b>

使用 `git rebase` 命令
</b></details>

<details>
<summary>您在什么情况下使用 <code>git 变基</code>?</summary><br><b>
假设一个团队从 repo 的 `main` 分支切出了 `feature` 分支进行开发。功能开发完成后，如果希望将 feature 分支合并回 main，同时不保留 feature 分支上的提交历史，`git rebase` 会有帮助。

</b></details>

<details>
<summary>如何将特定文件恢复到以前的提交？</summary><br><b>

```
git checkout HEAD~1 -- /path/of/the/file
```

</b></details>

<details>
<summary>如何压缩最后两次提交？</summary><br><b>
</b></details>

<details>
<summary>什么是 <code>.git</code> 目录？在那里你能找到什么？</summary><br><b>
	的 <code>.git</code> 文件夹包含版本控制中项目所需的所有信息以及有关提交、远程存储库地址等的所有信息。所有这些都存在于该文件夹中。它还包含一个存储您的提交历史记录的日志，以便您可以回滚到历史记录。

此信息复制自 [https://stackoverflow.com/questions/29217859/what-is-the-git-folder](https://stackoverflow.com/questions/29217859/what-is-the-git-folder)
</b></details>

<details>
<summary>有哪些 Git 反模式？你不应该做的事情</summary><br><b>

- 提交之间不要等待太久
- 不删除 .git 目录:)
  </b></details>

<details>
<summary>如何删除远程分支？</summary><br><b>

您可以使用以下语法删除远程分支：

git push origin :[branch_name]
</b></details>

<details>
<summary>你熟悉gitattributes吗？你什么时候会使用它？</summary><br><b>

gitattributes 允许您为每个路径名或路径模式定义属性。<br>

例如，您可以使用它来控制文件中的结束行。在 Windows 和 Unix 基于系统，换行符有不同的字符（相应的 \r\n 和 \n ）。因此，使用 gitattributes 我们可以针对 Windows 和 Unix 与 `* text=auto` 在 .gitattributes 中，供使用 git 的任何人使用。这就是方法，如果你使用 Git 在 Windows 中的项目中，您将得到 \r\n 并且如果您正在使用 Unix 或 Linux，你会得到\n。
</b></details>

<details>
<summary>如何放弃本地文件更改？ （提交前）</summary><br><b>

`git checkout -- <file_name>`
</b></details>

<details>
<summary>如何丢弃本地提交？</summary><br><b>

`git reset HEAD~1` 用于删除最后一次提交
如果您还想放弃所做的更改 `git reset --hard``
</b></details>

<details>
<summary>判断题：要从 git 中删除文件而不是从文件系统中删除文件，应该使用 <code>git rm </code></summary><br><b>

错误。如果您想在文件系统上保留文件，请使用 `git reset <file_name>`
</b></details>

<a name="references"></a>
## 参考文献

<details>
<summary>如何列出给定存储库中当前的 git 引用？ </summary><br><b>

`find .git/refs/`
</b></details>

<a name="git-diff"></a>
## Git 差异

<details>
<summary>git diff 有什么作用？</summary><br><b>

git diff can compare between two commits, two files, a tree and the staging area, etc.
</b></details>

<details>
<summary>哪一个更快？ <code>git diff 索引 HEAD</code> 或 <code>git 差异 HEAD</code> </summary><br><b>

`git diff-index` 更快，但公平地说，这是因为它做得更少。 `git diff index` 不会看内容，
仅像时间戳这样的元数据。
</b></details>

<details>
<summary>通过哪个其他 Git git diff 使用的命令是什么？</summary><br><b>

使用的 diff 机制 `git status` 进行比较并让用户知道正在跟踪哪些文件
</b></details>

<a name="git-internal"></a>
## Git 内部

<details>
<summary>描述如何 `git status` 作品</summary><br><b>

不一会儿，它就运行了 `git diff` 两次：

1. 比较之间 HEAD 到暂存区
2. 将暂存区与工作目录进行比较
   </b></details>

<details>
<summary>如果 <code>git status</code> 必须对所有文件执行两次 diff：一次比较 HEAD 与暂存区/索引，另一次比较暂存区/索引与工作目录，它为什么仍然很快？</summary><br><b>

原因之一是关于索引、提交等的结构。

- 提交中的每个文件都存储在树对象中
- 索引是树对象的扁平结构
- 索引中的所有文件都有预先计算的哈希值
- diff 操作是比较哈希值

另一个原因是缓存

- 索引缓存工作目录的信息
- 当 Git 缓存了某些文件的信息，无需查看工作目录文件
  </b></details>
