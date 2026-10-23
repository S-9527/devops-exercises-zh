<a name="sort-descending---solution"></a>
## 降序排序 - 解决方案

1. 编写一个函数，对以下列表进行排序，而不使用 `sorted()` 和 `.sort()`
   函数按降序排列

   - mat_list = [[1, 2, 3], [2, 4, 4], [5, 5, 5]] -> [[5, 5, 5], [2, 4, 4], [1, 2, 3]]

```python
def sort_desc(mat: list) -> list:
    """ Sorts a list in descending order

    Args:
        mat (list): paresd list

    Returns:
        list: A new list
    """
    new_list = []
    while mat != []:
        maxx = max(mat)
        new_list.append(maxx)
        mat.remove(maxx)
    return new_list

print(sort_func(mat_list))
```
