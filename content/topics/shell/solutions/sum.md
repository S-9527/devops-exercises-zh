<a name="sum"></a>
## 总和

<a name="objectives"></a>
### 目标

1. 编写一个脚本，获取两个数字并打印它们的总和
3. 确保输入有效（=您从用户那里得到了两个号码）
2. 通过运行并向其传递两个数字作为参数来测试脚本 

<a name="constraints"></a>
### 约束条件

1. 使用功能

<a name="solution"></a>
### 解决方案

```
#!/usr/bin/env bash

re='^[0-9]+$'

if ! [[ $1 =~ $re && $2 =~ $re ]]; then
    echo "Oh no...I need two numbers"
    exit 2
fi

function sum {
    echo $(( $1 + $2 ))
}

sum $1 $2
```
