<a name="ansible"></a>
## Ansible

<!-- {% raw %} -->

<a name="ansible-exercises"></a>
### Ansible 练习

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|
| 我的第一个任务 | 任务 | [练习](my_first_task.md) | [解决方案](solutions/my_first_task.md)
| 升级更新任务 | 任务 | [练习](update_upgrade_task.md) | [解决方案](solutions/update_upgrade_task.md)
| 我的第一本剧本 | 剧本 | [练习](my_first_playbook.md) | [解决方案](solutions/my_first_playbook.md)
	

<a name="ansible-self-assessment"></a>
### Ansible 自我评估

<details>
<summary>描述以下每个组件 Ansible，包括它们之间的关系：

  * 任务
  * 库存	
  * 模块
  * 玩
  * 剧本
  * 角色
</summary><br><b>

任务——调用特定的 Ansible 模块
模块——执行的实际代码单元 Ansible 在您自己的主机或远程主机上。模块按类别（数据库、文件、网络等）进行索引，也称为任务插件。
	
清单 – 清单文件定义主机和/或主机组 Ansible 执行的任务。库存文件可以采用多种格式之一，具体取决于您拥有的库存插件。最常见的格式是 INI 和 YAML.

播放 – 在给定主机上执行的一个或多个任务

剧本——一场或多场戏剧。每个play可以在相同或不同的主机上执行

角色 – Ansible 角色允许您根据某些功能/服务对资源进行分组，以便可以轻松地重用它们。在角色中，您拥有变量、默认值、文件、模板、处理程序、任务和元数据的目录。然后，您只需在剧本中指定该角色即可使用该角色。
</b></details>

<details>
<summary>Ansible 与其他自动化工具有什么不同？（例如 Chef、Puppet 等）</summary><br><b>

Ansible 是：

* 无代理
* 最低运行要求（Python & SSH）并且使用简单
* 默认模式是“push”（也支持pull）
* 注重简单性和易用性
</b></details>


<details>
<summary>判断题： Ansible 遵循可变基础设施范式</summary><br><b>

正确。在不可变基础设施方法中，您将替换基础设施而不是修改它。<br>
Ansible 相反，它遵循可变基础架构范例，它允许您更改不同组件的配置，但这种方法并不完美，并且有其自身的缺点，例如“配置漂移”，其中不同组件可能因不同原因达到不同状态。
</b></details>

<details>
<summary>判断题： Ansible 使用声明式风格来描述预期的最终状态</summary><br><b>

错误。它使用程序风格。
</b></details>

<details>
<summary>您不会采用哪种自动化 Ansible 为什么？</summary><br><b>

虽然可以通过以下方式提供资源 Ansible，有些人更喜欢使用遵循不可变基础设施范例的工具。
Ansible 默认情况下不保存状态。因此，例如创建 5 个实例的任务，再次执行时将创建额外的 5 个实例（除非
实施额外检查或提供显式名称），而其他工具可能检查是否存在 5 个实例。如果仅存在 4 个实例（例如通过检查状态文件），将创建一个额外的实例以达到 5 个实例的最终目标。
</b></details>

<details>
<summary>如何列出所有模块以及如何查看特定模块的详细信息？</summary><br><br>

1. Ansible 在线文档
2. `ansible-doc -l` 对于模块列表和 `ansible-doc [module_name]` 有关特定模块的详细信息
</b></details>

<a name="ansible---inventory"></a>
#### Ansible - Inventory

<details>
<summary>什么是库存文件以及如何定义库存文件？</summary><br><b>

库存文件定义了主机和/或主机组，其中 Ansible 执行的任务。

库存文件示例：

```
192.168.1.2
192.168.1.3
192.168.1.4

[web_servers]
190.40.2.20
190.40.2.21
190.40.2.22
```
</b></details>

<details>
<summary>什么是动态库存文件？你什么时候会使用一个？</summary><br><br>

动态清单文件跟踪来自一个或多个来源（例如云提供商和 CMDB 系统。

当使用外部源时，尤其是当您环境中的主机自动更新时，您应该使用其中之一。<br>
启动和关闭，而无需您跟踪这些源的每一个变化。
</b></details>

<a name="ansible---variables"></a>
#### Ansible - Variables

<details>
<summary>修改以下任务以使用变量而不是值“zlib”，并将“zlib”作为默认值，以防未定义变量

```
- name: Install a package
  package:
    name: "zlib"
    state: present
```
</summary><br><b>

```
- name: Install a package
  package:
    name: "{{ package_name|default('zlib') }}"
    state: present
```
</b></details>

<details>
<summary>如何使变量“use_var”可选？

```
- name: Install a package
  package:
    name: "zlib"
    state: present
    use: "{{ use_var }}"
```
</summary><br><b>


与“默认（省略）”
```
- name: Install a package
  package:
    name: "zlib"
    state: present
    use: "{{ use_var|default(omit) }}"
```
</b></details>

<details>
<summary>接下来的比赛结果会怎样呢？</summary><br><b>

```
---
- name: Print information about my host
  hosts: localhost
  gather_facts: 'no'
  tasks:
      - name: Print hostname
        debug:
            msg: "It's me, {{ ansible_hostname }}"
```

当给出书面代码时，请务必彻底检查。如果你的答案是“这会失败”那么你是对的。我们正在使用一个事实（ansible_hostname），它是从我们正在运行的主机上收集的信息。但在这种情况下，我们禁用了事实收集（gather_facts：no），因此变量将是未定义的，这将导致失败。
</b></details>

<details>
<summary>当在这种情况下使用值“2017”时：`{{lookup('env', 'BEST_YEAR') | 默认（'2017'，true）}}`？</summary><br><b>

当环境变量“BEST_YEAR”为空或 false 时。
</b></details>

<details>
<summary>如果某个变量的值为 1，则使用值“一”，否则使用“二”。你会怎么做？</summary><br><b>

`{{（某些变量== 1） | 三元（“一”，“二”）}}`
</b></details>

<details>
<summary>您使用的某个变量的值是字符串“True”。您希望该值为布尔值。你会如何投射它？</summary><br><b>

`{{ some_string_var | 布尔 }}`
</b></details>

<details>
<summary>你想跑 Ansible 剧本仅适用于您的特定次要版本 OS，你将如何实现这一目标？</summary><br><b>
</b></details>

<details>
<summary>“成为”指令的用途 Ansible?</summary><br><b>
</b></details>

<details>
<summary>什么是事实？如何查看某个主机的所有事实？</summary><br><b>
</b></details>

<details>
<summary>运行以下任务会产生什么结果？如何修复它？

```
- hosts: localhost
  tasks:
      - name: Install zlib
        package:
          name: zlib
          state: present
```
</summary><br><b>
</b></details>

<details>
<summary>哪个 Ansible 您熟悉最佳实践吗？至少说出三个</summary><br><b>
</b></details>

<details>
<summary>解释一下目录布局 Ansible 角色</summary><br><b>
</b></details>

<details>
<summary>“块”的用途是什么 Ansible?</summary><br><b>
</b></details>

<details>
<summary>你如何处理错误 Ansible?</summary><br><b>
</b></details>

<details>
<summary>如果任务失败，您希望运行某个命令。你将如何实现这一目标？</summary><br><b>
</b></details>

<details>
<summary>如果系统上存在文件“/tmp/mario”，请编写一个剧本以在所有主机上安装“zlib”和“vim”。</summary><br><b>

```
---
- hosts: all
  vars:
      mario_file: /tmp/mario
      package_list:
          - 'zlib'
          - 'vim'
  tasks:
      - name: Check for mario file
        stat:
            path: "{{ mario_file }}"
        register: mario_f

      - name: Install zlib and vim if mario file exists
        become: "yes"
        package:
            name: "{{ item }}"
            state: present
        with_items: "{{ package_list }}"
        when: mario_f.stat.exists
```
</b></details>

<details>
<summary>编写一个任务来验证 files_list 变量中的所有文件是否存在于主机上</summary><br><b>

```
- name: Ensure all files exist
  assert:
    that:
      - item.stat.exists
  loop: "{{ files_list }}"
```
</b></details>

<details>
<summary>编写一个剧本，在除控制器组之外的所有主机上部署文件“/tmp/system_info”，内容如下</summary><br><b>

  ```
  I'm <HOSTNAME> and my operating system is <OS>
  ```

  更换 <HOSTNAME> 和  <OS> 与您正在运行的特定主机的实际数据

部署 system_info 文件的剧本

```
---
- name: Deploy /tmp/system_info file
  hosts: all:!controllers
  tasks:
      - name: Deploy /tmp/system_info
        template:
            src: system_info.j2
            dest: /tmp/system_info
```

system_info.j2模板的内容

```
# {{ ansible_managed }}
I'm {{ ansible_hostname }} and my operating system is {{ ansible_distribution }
```
</b></details>

<details>
<summary>变量“whoami”在以下位置定义：

  * 角色默认 -> whoami: mario
  * 额外的变量（传递给的变量 Ansible CLI 与 -e) -> whoami: 蟾蜍
  * 主持人事实 -> whoami：luigi
  * 库存变量（与哪种类型无关）-> whoami：浏览器

根据变量优先级，将使用哪一个？</summary><br><b>

正确答案是“蟾蜍”。

变量优先级是关于变量在不同位置设置时如何相互覆盖。如果您到目前为止还没有经历过，我相信在某些时候您会经历过，这使得它成为一个值得了解的有用主题。

在我们的问题中，顺序将是额外变量（始终覆盖任何其他变量）->主机事实->库存变量->角色默认值（最弱）。

以下是从最小到最大的优先级顺序（最后列出的变量优先）：

1. 命令行值（例如“-u user”）
2. 角色默认值 [[1\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id15)
3. 库存文件或脚本组变量 [[2\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id16)
4. 库存组变量/所有 [[3\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id17)
5. 剧本 group_vars/all [[3\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id17)
6. 库存组_vars/* [[3\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id17)
7. 剧本 group_vars/* [[3\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id17)
8. 库存文件或脚本主机变量 [[2\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id16)
9. 库存主机_vars/* [[3\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id17)
10. 剧本 host_vars/* [[3\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id17)
11. 主机事实/缓存的 set_facts [[4\]](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#id18)
12. 玩变量
13. 播放 vars_prompt
14. 播放 vars_files
15. 角色变量（在 role/vars/main.yml 中定义）
16. 块变量（仅适用于块中的任务）
17. 任务变量（仅适用于任务）
18. include_vars
19. set_facts / 注册变量
20. 角色（和 include_role）参数
21. 包含参数
22. 额外变量（总是优先）

完整列表可在以下位置找到：  [PlayBook 变量](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#ansible-variable-precedence) 。另请注意，两者之间存在显着差异 Ansible 1.x 和 2.x。
</b></details>

<details>
<summary>对于以下每个陈述，确定它是对还是错：

  * 模块是任务的集合
  * 最好使用 shell 或命令而不是特定模块
  * 主机事实覆盖播放变量
  * 角色可能包括以下内容：变量、元和处理程序
  * 动态库存是通过从外部源提取信息生成的
  * 最佳实践是使用 2 个空格而不是 4 个空格的缩进
  * “notify”用于触发处理程序
  * 这个“hosts: all:!controllers”意味着“仅在控制器组主机上运行”</summary><br><b>
</b></details>

<details>
<summary>解释 `forks`、`serial` 和 `throttle` 之间的区别。</summary><br><b>

`serial` 类似于按批次对主机运行 playbook：先等待当前批次主机完整执行完 playbook，再继续下一批主机。`forks=1` 表示一次只并发处理一个 host：先在一个 host 上运行 play 中的第一个 task，再到下一个 host 上运行同一个 task，因此会先让所有 host 执行完第一个 task，再进入下一个 task。Ansible 默认的 `forks` 值是 5。

```
[defaults]
forks = 30
```

```
- hosts: webservers
  serial: 1
  tasks:
    - name: ...
```

Ansible 也支持 `throttle` 关键字，用于进一步限制某个 task 的并发 worker 数量；它不能超过 `forks` 或 `serial` 设置允许的最大并发数。这对于限制 CPU 密集型任务，或限制会调用 rate-limited API 的任务很有用。

```
tasks:
- command: /path/to/cpu_intensive_command
  throttle: 1
```

</b></details>

<details>
<summary>什么是 ansible 拉动？它与 ansible-playbook 的工作方式有何不同？</summary><br><b>
</b></details>

<details>
<summary>什么是 Ansible 金库？</summary><br><b>
</b></details>

<details>
<summary>演示以下每一项 Ansible:

  * 条件句
  * 循环
</summary><br><b>
</b></details>

<details>
<summary>什么是过滤器？您有编写过滤器的经验吗？</summary><br><b>
</b></details>

<details>
<summary>编写一个过滤器以将字符串大写</summary><br><b>

```
def cap(self, string):
    return string.capitalize()
```
</b></details>

<details>
<summary>仅当先前的任务发生任何更改时，您才希望运行任务。你将如何实现这一目标？</summary><br><b>
</b></details>

<details>
<summary>什么是回调插件？使用回调插件可以实现什么目的？</summary><br><b>
</b></details>

<details>
<summary>有什么区别 `include_task` 和 `import_task`?</summary><br><b>
</b></details>

<details>
<summary>文件“/tmp/exercise”包含以下内容

```
Goku = 9001
Vegeta = 5200
Trunks = 6000
Gotenks = 32
```

对于一项任务，将内容切换为：

```
Goku = 9001
Vegeta = 250
Trunks = 40
Gotenks = 32
```
</summary><br><b>

```
- name: Change saiyans levels
  lineinfile:
    dest: /tmp/exercise
    regexp: "{{ item.regexp }}"
    line: "{{ item.line }}"
  with_items:
    - { regexp: '^Vegeta', line: 'Vegeta = 250' }
    - { regexp: '^Trunks', line: 'Trunks = 40' }
    ...
```
</b></details>


<a name="ansible---execution-and-strategy"></a>
#### Ansible - Execution and Strategy

<details>
<summary>判断题：默认情况下， Ansible 将在继续到下一个主机之前执行单个主机上正在执行的所有任务</summary><br><b>

错误。Ansible 会先在所有 hosts 上执行同一个 task，然后再进入 play 中的下一个 task。目前它默认使用 5 个 `forks`。<br>
这种行为在 Ansible 中称为 strategy，并且是可配置的。
</b></details>

<details>
<summary>什么是“策略” Ansible？默认策略是什么？</summary><br><b>

一项策略 Ansible 描述如何 Ansible 将在主机上执行不同的任务。默认情况下 Ansible 使用“线性策略”，它定义每个任务将在所有主机上运行，然后再继续下一个任务。
</b></details>

<details>
<summary>您熟悉哪些策略 Ansible?</summary><br><b>

  - 线性：默认策略 Ansible。在继续之前，请在所有主机上运行每个任务。
  - 免费：对于每个主机，尽快运行所有任务直到游戏结束
  - 调试：以交互方式运行任务
</b></details>

<details>
<summary>什么是 <code>连续剧</code> 关键字是用来做什么的？</summary><br><b>

它用于指定在移动到组中下一个主机数量之前运行完整播放的主机数量（或百分比）。

例如：
```
- name: Some play
  hosts: databases
  serial: 4
```

如果您的组有 8 个主机。它将在 4 台主机上运行整个游戏，然后在另外 4 台主机上运行相同的游戏。
</b></details>

<a name="ansible-testing"></a>
#### Ansible 测试

<details>
<summary>你如何测试你的 Ansible 基础项目？</summary><br><b>
</b></details>

<details>
<summary>什么是分子？它是如何运作的？</summary><br><b>

它用于快速开发和测试 Ansbile 角色。  分子可用于测试 Ansible 对抗各种角色 Linux 同时发行。  这种测试能力有助于在当今以及随着时间的推移在维持角色的同时灌输对自动化的信心。  

</b></details>

<details>
<summary>你跑 Ansible 测试，你会得到“幂等性测试失败”。这意味着什么？为什么幂等性很重要？</summary><br><b>
</b></details>

<a name="ansible---debugging"></a>
#### Ansible - Debugging

<details>
<summary>如何找出其中一本剧本中某个变量的数据类型？</summary><br><b>

“{{ 一些_var | 类型_调试}}”
</b></details>

<a name="ansible---collections"></a>
#### Ansible - Collections

<details>
<summary>什么是集合 Ansible?</summary><br><b>
Ansible 集合是一种以结构化格式打包和分发模块、角色、插件和文档的方法。它们有助于有效地组织和分发自动化代码，特别是对于复杂的环境。
</b></details>

<details>
<summary>为什么使用 Ansible 收藏品？</summary><br><b>

  - 模块化和可重复使用的组件
  - 简化自定义和第三方模块的管理
  - 提供分发自动化内容的标准化方法
  - 有助于版本控制和依赖管理
</b></details>

<!-- {% endraw %} -->
