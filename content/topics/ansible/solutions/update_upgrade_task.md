<a name="update-and-upgrade-apt-packages-task---solution"></a>
## 更新和升级 apt 软件包任务 - 解决方案

```
- name: "update and upgrade apt packages."
  become: yes
  apt:
    upgrade: yes
    update_cache: yes
```
