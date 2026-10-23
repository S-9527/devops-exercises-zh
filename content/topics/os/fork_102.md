<a name="fork-102"></a>
## fork 102

在不运行程序的前提下，回答下面程序相关的问题：

```c
#include<stdio.h>
#include <unistd.h>

int main()
{
  fork();
  fork();
  printf("\nyay\n");
  return 0;
}
```

1. 单词 `"yay"` 会被打印多少次？
2. 会创建多少个进程？
