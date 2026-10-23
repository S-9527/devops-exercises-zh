<a name="directories-comparison"></a>
## 目录比较

<a name="objectives"></a>
### 目标

1. 给你两个目录作为参数，输出应该是两个目录之间的任何差异

<a name="solution-1"></a>
### 解决方案1

假设 bash 脚本的名称是 ```dirdiff.sh```

```
#!/bin/bash

if test $# -ne 2
then
	echo -e "USAGE: ./dirdiff.sh directory1 directory2"
	exit 1
fi

# check for the checksums. 
# If both the checksums same, then both directories are same
if test `ls -1 $1 | sort | md5sum | awk -F "  " '{print $1}'` == `ls -1 $2 | sort | md5sum | awk -F "  " '{print $1}'`
then
	echo -e "No difference between the 2 directories"
	exit 0
fi

diff -q $1 $2
```

<a name="solution-2"></a>
### 解决方案2

通过 gnu find，您可以使用 diff 递归地比较目录。

```shell
diff --recursive directory1 directory2
```
