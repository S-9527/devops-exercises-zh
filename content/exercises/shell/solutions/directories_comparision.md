<a name="how-to-compare-two-directories-in-linux"></a>
## 如何比较两个目录 Linux?

您可以使用带有“-r”标志的“diff”命令来递归比较两个目录。



<a name="example"></a>
### 示例：
'''重击
diff -r 文件夹1/文件夹2/

此命令比较“folder1”和“folder2”内的所有文件和子目录。
如果两个目录具有相同的内容，则不会返回任何内容。
如果存在差异，它会显示哪些文件不同或丢失。
