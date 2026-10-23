<a name="my-first-playbook---solution"></a>
## 我的第一本剧本 - 解决方案

1. `vi first_playbook.yml`

```
- name: Install zlib and create a file
  hosts: some_remote_host
  tasks:
    - name: Install zlib
      package:
        name: zlib
        state: present
      become: yes
    - name: Create the file /tmp/some_file
      file:
        path: '/tmp/some_file'
        state: touch
```

2. 首先，编辑库存文件： `vi /etc/ansible/hosts`

```
[some_remote_host]
some.remoted.host.com
```

运行剧本

`ansible-playbook first_playbook.yml`
