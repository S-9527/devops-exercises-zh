<a name="reverse-a-string---solution"></a>
## 反转字符串 - 解决方案

```
my_string[::-1]
```

更直观的方式是：<br>
<i>小心：这非常慢</i>

```
def reverse_string(string):
    temp = ""
    for char in string:
        temp =  char + temp
    return temp
```
