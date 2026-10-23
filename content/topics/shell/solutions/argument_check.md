<a name="argument-check"></a>
## 参数检查

<a name="objectives"></a>
### 目标

注意：假设脚本是使用参数执行的

1. 编写一个脚本来检查给定参数是否是字符串“pizza”
2. 如果是字符串“pizza”则打印“with pineapple?”
3. 如果不是字符串“pizza”，则打印“我想要披萨！”

<a name="solution"></a>
### 解决方案

```
#!/usr/bin/env bash

[[ ${1} == "pizza" ]] && echo "with pineapple?" || echo "I want pizza!"
```
