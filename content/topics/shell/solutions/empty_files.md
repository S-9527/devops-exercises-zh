<a name="empty-files"></a>
## 空文件

<a name="objectives"></a>
### 目标

1. 编写一个脚本来删除给定目录中的所有空文件（包括嵌套目录）

<a name="solution"></a>
### 解决方案

```
#! /bin/bash
for x in *
do
    if [ -s $x ]
    then
        continue
    else
        rm -rf $x
    fi
done
```
