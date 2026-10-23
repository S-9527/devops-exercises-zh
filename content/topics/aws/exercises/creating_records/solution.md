<a name="aws-route-53---creating-records"></a>
## AWS Route 53 - Creating Records

<a name="requirements"></a>
### 要求

至少一个注册域名

<a name="objectives"></a>
### 目标

1. 为您的域创建以下记录：
  1. 记录名称：foo
  2. 记录类型：A
  3. 设置一些 IP 在值字段中

2. 从 shell 验证您是否能够使用您创建的记录来查找 IP 使用域名地址

<a name="solution"></a>
### 解决方案

1. Go 到 Route 53 服务 -> 托管区域
2. 点击您的域名
3. 点击“创建记录”
4. 在“记录名称”中插入“foo”
5. 将“记录类型”设置为 A
6. 在“值”中插入“201.7.20.22”
7. 点击“创建记录”

1. 在你的 shell 中，输入 `nslookup foo.<YOUR DOMAIN>` 或 `dig foo.<YOUR NAME`
