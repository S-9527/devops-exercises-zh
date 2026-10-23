<a name="count-chars"></a>
## 计数字符

<a name="objectives"></a>
### 目标

1. 读取用户的输入，直到得到空字符串
2. 对于您阅读的每一行，计算字符数并打印出来

<a name="constraints"></a>
### 约束条件

1. 您必须使用 while 循环
2. 假设至少三行输入

<a name="solution"></a>
### 解决方案

```
#!/usr/bin/env bash

echo -n "Please insert your input: "

while read line; do
    echo -n "$line" | wc -c
    echo -n "Please insert your input: "
done
```
