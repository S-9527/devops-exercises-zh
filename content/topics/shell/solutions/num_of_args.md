<a name="number-of-arguments"></a>
## 参数数量

<a name="objectives"></a>
### 目标

* 编写一个脚本来打印“Got它： <argument value>“如果有一个参数
* 如果没有提供参数，它将打印“Usage: ./<program name> <argument>"
* 如果有多个参数，请打印“嘿嘿...太多了！”

<a name="solution"></a>
### 解决方案

```
#!/usr/bin/env bash

set -eu

main() {
  case $# in
    0) printf "%s" "Usage: ./<program name> <argument>"; return 1 ;;
    1) printf "%s" "Got it: $1"; return 0 ;;
    *) return 1 ;;
  esac
}

main "$@"
```

