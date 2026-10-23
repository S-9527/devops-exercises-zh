<a name="shell-scripting---factors"></a>
## Shell 脚本编写 - 因素

<a name="objectives"></a>
### 目标

编写一个脚本，当给定一个数字时，该脚本将：

* 检查数字是否有 2 作为因数，如果有则打印“one factor”
* 检查该数字是否有 3 作为因数，如果是，则会打印“一个因数...实际上是两个！”
* 如果它们（2 和 3）都不是因子，则打印数字本身

<a name="solution"></a>
### 解决方案

```
#!/usr/bin/env bash

(( $1 % 2 )) || res="one factor"
(( $1 % 3 )) || res+="...actually two!"

echo ${res:-$1}
```
