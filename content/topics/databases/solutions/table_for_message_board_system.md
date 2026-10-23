<a name="database-table-for-message-board-system"></a>
## 留言板系统数据库表

<a name="instructions"></a>
### 使用说明

为留言板系统设计一个数据库表。它应包括以下信息：

  * 个人资料
  * 谁看到了该消息以及何时
  * 回复
  * 在消息中标记了人员
  * 消息类别

注意事项：

  * 否 SQL 需要
  * 您应该包括：表名称、字段名称、数据类型并提及所使用的外键。

<a name="solution"></a>
### 解决方案

注意：这只是一种可能的设计
第二个注意事项： PK =主键， FK = 外键

                                ----- People -----
                                ID int PK
                                FirstName varchar(255)
                                LastName varchar(255)
                                DOB date
                                Gender varchar(1)
                                Phone varchar(10)

                                       |               \
                                       |                \ 
                                       |                 \
                                       v                  \ 
                                                           \
                                --- Messages ---            v
                                ID int PK
                                MessageBoardID FK             --- MessageTags ---
--- MessageBoards ---           PeopleID int FK               ID 整数 PK
ID 整数 PK              ---->    MsgDate datetime       --->   MessageID FK
董事会文本 消息文本 PeopleID int Fk
                                MessageID (FK)
                                       ^      |
                                       |      |
                                       |______|

