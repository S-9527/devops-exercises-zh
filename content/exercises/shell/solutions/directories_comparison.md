<a name="directories-comparison"></a>
## 目录比较

<a name="objectives"></a>
### 目标

1. 给你两个目录作为参数，输出应该是两个目录之间的任何差异

<a name="solution"></a>
### 解决方案

```
#!/usr/bin/env bash


help () {
  echo "Usage: compare <filename1> <filename2>"
  echo
}

validate_args() {
  # Ensure that 2 arguments are passed
  if [ $# != 2 ]
  then
    help
    exit 1
  fi

  i=1
  for dir in "$@"
  do
      # Validate existence of directories
      if [ ! -d "$dir" ]
      then
        echo "Directory $dir does not exist"
        exit 1
      fi
      echo "Directory $i: $dir"
      i=$((i + 1))
  done
  echo
}

compare() {
  echo "Comparing directories..."
  echo
  diff -r "$1" "$2"
  
  if [ $? -eq 0 ]
  then
  	echo "No difference"
  fi
  
  exit 0
}

while getopts ":h" option; do
   case $option in
      h) # display Help
         help
         exit 0;;
      \?) # invalid option
         echo "Error: Invalid option"
         exit 1;;
   esac
done

validate_args "$@"
compare "$1" "$2"


```