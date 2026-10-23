<a name="shell-scripting---hello-world"></a>
## Shell 脚本编写 - 你好世界

<a name="objectives"></a>
### 目标

1. 使用字符串“Hello World”定义变量
2. 打印您定义的变量的值并将输出重定向到文件“amazing_output.txt”

<a name="solution"></a>
### 解决方案

```
#!/usr/bin/env bash

HW_STR="Hello World"
echo $HW_STR > amazing_output.txt
```
