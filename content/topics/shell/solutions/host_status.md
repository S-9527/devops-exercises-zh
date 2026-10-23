<a name="its-alive"></a>
## 它还活着！

<a name="objectives"></a>
### 目标

1. 编写脚本来确定给定主机是关闭还是开启

<a name="solution"></a>
### 解决方案

```
#!/usr/bin/env bash
SERVERIP=<IP Address>
NOTIFYEMAIL=test@example.com

ping -c 3 $SERVERIP > /dev/null 2>&1
if [ $? -ne 0 ]
then
   # Use mailer here:
   mailx -s "Server $SERVERIP is down" -t "$NOTIFYEMAIL" < /dev/null
fi
```
