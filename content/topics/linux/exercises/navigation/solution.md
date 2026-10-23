<a name="navigation"></a>
# 导航

<a name="requirements"></a>
## 要求

1. Linux :)

<a name="objectives"></a>
## 目标

1. 将目录更改为 `/tmp`
2. 移至父目录
3. 将目录更改为主目录
4. 移至父目录
5. 再次移动到父目录
   1. 你在哪里？通过命令验证
6. 更改为上次访问的目录

<a name="solution"></a>
## 解决方案

```
cd /tmp
cd ..
cd ~
cd ..
cd ..
# root (/)
pwd
cd -
```