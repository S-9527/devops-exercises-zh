<a name="class-0x00---solution"></a>
## 0x00 类 - 解决方案

1. 编写一个简单的类，它有两个属性，其中一个有默认值，并且有两个方法

```python
from typing import Optional
""" Student Module

    """


class Student:
    def __init__(self, name: str, department: Optional[str] = None) -> None:
        """ Instance Initialization function

        Args:
            name (str): Name of student
            department (Optional[str], optional): Department. Defaults to None.
        """
        self.name = name
        self.department = department

    def getdetails(self) -> str:
        """ Gets the students details

        Returns:
            str: A formatted string
        """
        return f"Name is {self.name}, I'm in department {self.department}"

    def change_department(self, new_deparment: str) -> None:
        """Changes the department of the student object

        Args:
            new_deparment (str): Assigns the new department value to dept attr
        """
        self.department = new_deparment

# student1 instantiation
student1 = Student("Ayobami", "Statistics")

print(student1.getdetails())

# Calling the change_department function to change the department of student
student1.change_department("CS")

print(student1.department)
```

输出

```
Name is Ayobami, I'm in department Statistics
CS
```
