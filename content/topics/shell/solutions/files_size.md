<a name="files-size"></a>
## 文件大小

<a name="objectives"></a>
### 目标

1. 打印当前路径中每个文件和目录的名称和大小

注意：至少使用一个for循环！

<a name="solution"></a>
### 解决方案

```
#!/usr/bin/env bash

for i in $(ls -S1); do
    echo $i: $(du -sh "$i" | cut -f1)
done 
```
