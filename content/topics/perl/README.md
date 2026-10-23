<a name="perl"></a>
## Perl

<a name="perl-self-assessment"></a>
### Perl 自我评估

<details>
<summary>什么是 Perl?</summary><br><b>

来自官方 [文档](https://perldoc.perl.org/):

"Perl 正式代表实用提取和报告语言，除非它没有。”

它是一种主要用于操作文本的通用编程语言。它已用于执行系统管理任务、网络、构建网站等。
</b></details>

<details>
<summary>有哪些数据类型 Perl 有？我们如何定义它？</summary><br><b>

- 标量：这是存储单个数据项的简单变量。它可以是字符串、数字或引用。

```
my $number = 5;
```

- 数组：这是标量列表。 

```
my @numbers = (1, 2, 3, 4, 5);
# or using the `qw` keyword (quote word):
my @numbers = qw/1 2 3 4 5/; 
# '/' can be another symbol, e.g qw@1 2 3 4 5@
```

- 哈希（或关联数组）：这是键值对的无序集合。我们可以使用密钥访问哈希。

```
my %numbers = (
  First => '1',
  Second => '2',
  Third => '3'
);
```

</b></details>

<details>
<summary>如何访问哈希值、添加和删除键/值对以及修改哈希值？</summary><br><b>

```
my %numbers = (
  'First' => '1',
  'Second' => '2',
  'Third' => '3'
);
```

- 访问：

```
print($numbers{'First'});
```

- 添加：

```
$numbers{'Fourth'} = 4;
```

- 删除：

```
delete $numbers{'Third'};
```

- 修改：

```
$numbers{'Fifth'} = 6;
$numbers{'Fifth'} = 5;
```

</b></details>

<details>
<summary>如何迭代数组？还有哈希？</summary><br><b>

- 数组：

```
my @numbers = qw/1 2 3 4 5/;

# Using `$_` that represents the current iteration in a loop. It starts from index array 0 until the last index.
foreach (@numbers) {
    print($_);
}
# Output: 12345


# "$#" returns the max index of an array. That's the reason because we can iterate accessing to the array from the index 0 to the max index.
for my $i (0..$#numbers) {
    print($numbers[$i]);
}
# Output: 12345


# Using the `map` keyword:
print map {$_} @numbers;
# Output: 12345

# Using `while`. We should take care with this option. When we use `shift` we're deleting the first element of the array and assigning it to the `element` variable. 
# After this `loop` the `numbers` array will not have elements.
while (my $element = shift(@numbers)) {
    print($element);
}
# Output: 12345
```

- 哈希值：
 
 ```
 my %capital_cities = (
  'Madrid' => 'Spain',
  'Rome' => 'Italy',
  'Berlin' => 'Germany'
);

# Iterate and get the `keys`:
foreach my $city (keys %capital_cities) {
    print($city . "\n");
}
# Iterate and get the `values`:
foreach my $country (values %capital_cities) {
    print($country . "\n");
}

# Iterate and get the values and keys (first option):
foreach my $city (keys %capital_cities) {
    print("City: $city - Country: $capital_cities{$city}" . "\n");
}

# Iterate and get the values and keys (first option):
while(my ($city, $country) = each %capital_cities) {
    print("City: $city - Country: $capital_cities{$city}" . "\n");
}
```

</b></details>

<details>
<summary>什么是 Perl 子程序？如何定义呢？</summary><br><b>

它是用户定义函数的 perl 模型（与其他编程语言一样也称为函数）。我们可以用关键字定义一个子程序 `sub`. 

```
sub hello {
  print "hello";
}
```

</b></details>

<details>
<summary>描述在子程序中接收参数的不同方法</summary><br><b>

- 列表分配：使用 `@_` 数组。它是一个列表，其中包含作为参数传递的元素。

```
sub power {
    my ($b, $e) = @_;
    return $b ** $e; 
}

&power(2, 3);
```

- 个人作业：我们应该访问的每个元素 `@_` 数组。它从零开始。

```
sub power {
    my $b = $_[0];
    my $e = $_[1];
    return $b ** $e; 
}

&power(2, 3);
```

- 使用 `shift` 关键字：用于删除数组的第一个值并返回。

```
sub power {
    my $b = shift;
    my $3 = shift;
    return $b ** $e; 
}

&power(2, 3);
```


[来源](https://stackoverflow.com/a/21465275/12771230)

我们还可以在同一个 S.O 答案中阅读最佳方式。

</b></details>

<details>
<summary>什么是词法作用域和动态作用域？</summary><br><b>
</b></details>

<details>
<summary>如何应用引用和取消引用？</summary><br><b>
</b></details>

<details>
<summary>是否 Perl 有约定吗？</summary><br><b>

你可以检查 [佩尔风格](https://perldoc.perl.org/perlstyle)

</b></details>

<details>
<summary>什么是 Perl POD？你能写一个例子吗？</summary><br><b>

来自官方 [文档](https://perldoc.perl.org/perlpod):

"Pod 是一种简单易用的标记语言，用于编写文档 Perl, Perl 程序，以及 Perl 模块。”

```
=item
    This function returns the factorial of a number.
    Input: $n (number you wanna calculate).
    Output: number factorial.
=cut
sub factorial {
    my ($i, $result, $n) = (1, 1, shift);
    $result = $result *= $i && $i++ while $i <= $n;
    return $result;
}
```

</b></details>

<a name="perl-regex"></a>
### Perl Regex

<details>
<summary>检查是否有这个词 `electroencefalografista` 存在于字符串中</summary><br><b>

```
my $string = "The longest accepted word by RAE is: electroencefalografista";
if ($string =~ /electroencefalografista/) {                                                         
    print "Match!";
}
```
</b></details>

<details>
<summary>检查是否有这个词 `electroencefalografista` 字符串中不存在</summary><br><b>

```
my $string = "The longest not accepted word by RAE is: Ciclopentanoperhidrofenantreno";
if ($string !~ /electroencefalografista/) {
    print "Does not match!";
}
```
</b></details>


<details>
<summary>替换这个词 `amazing`</summary><br><b>

```
my $string = "Perl is amazing!";
$string =~ s/amazing/incredible/;
print $string;
# Perl is incredible!
```
</b></details>

<details>
<summary>提取物 `hh:mm:ss` 与捕获组 `()` 在接下来的日期时间</summary><br><b>

```
my $date = "Fri Nov 19 20:09:37 CET 2021";
my @matches = $date =~ /(.*)(\d{2}:\d{2}:\d{2})(.*)/;
print $matches[1];
# Output: 20:09:37
```
</b></details>

<details>
<summary>提取数组中所有数字元素</summary><br><b>

```
my @array = ('a', 1, 'b', 2, 'c', 3);
my @numbers = grep (/\d/, @array);    # Note: \d involves more digits than 0-9
map {print $_ . "\n" } @numbers;
```

</b></details>

<details>
<summary>打印所有以d或D开头的linux系统用户</summary><br><b>

- 与一个 Perl 一行 :D
```
open(my $fh, '<', '/etc/passwd');
my @user_info = <$fh>;
map { print $& . "\n" if $_ =~ /^d([^:]*)/  } @user_info;
close $fh;
```

- 避免单行话

```
foreach my $user_line (@user_info) {
    if ($user_line =~ /^d([^:]*)/) {
        print $& . "\n";
    }
}
```

</b></details>

<a name="perl-files-handle"></a>
### Perl 文件句柄

<details>
<summary>提及文件处理中的不同模式</summary><br><b>

- 只读： `<`
- 写入模式。如果文件不存在，它会创建该文件： `>`
- 追加模式。如果文件不存在，它会创建该文件： `>>`
- 读写模式： `+<`
- 读取、清除和写入模式。如果文件不存在，它会创建该文件： `+>`
- 阅读并追加。如果文件不存在，它会创建该文件： `+>>`

</b></details>

<details>
<summary>如何写入文件？</summary><br><b>

```
# We can use:
# '>' Write (it clears a previous content if exists).
# '>>' Append.
open(my $fh, '>>', 'file_name.ext') or die "Error: file can't be opened";
print $fh "writing text...\n";
close($fh);
```
</b></details>

<details>
<summary>如何读取文件并打印每一行？</summary><br><b>

```
open(my $fh, '<', 'file_to_read.ext') or die "Error: file can't be opened";
my @file = <$fh>;
foreach my $line (@file) {
    print $line;
}
```

我们可以使用文件句柄而不将其分配给数组：

```
open(my $fh, '<', 'file_to_read.ext') or die "Error: file can't be opened";

foreach my $line (<$fh>) {
    print $line;
}
```

</b></details>

<a name="perl-oop"></a>
### Perl OOP

<details>
<summary>是否 Perl 支持 OOP?</summary><br><b>

来自官方 [文档](https://perldoc.perl.org/perlootut):

“默认情况下， Perl是内置的 OO 系统非常小，让你完成大部分工作。”

</b></details>

<details>
<summary>祝福功能的目的是什么？</summary><br><b>

该函数是 `bless` 函数用于将普通数据结构转换为对象。

</b></details>

<details>
<summary>如何创建一个 Perl 类？你如何调用一个方法？</summary><br><b>

- 让我们创建包： `Example.pm`

```
package Example;

sub new {
    my $class = shift;
    my $self = {};
    bless $self, $class;
    return $self;
}

sub is_working {
    print "Working!";
}

1;
```

- 现在我们可以实例化 `Example` 上课和通话 `is_working` 方法：

```
my $e = new Example();
$e->is_working();
# Output: Working!
```

</b></details>

<details>
<summary>是否 Perl 有继承吗？什么是 `SUPER` 关键词？</summary><br><b>

是的， Perl 支持继承。我们可以在官方了解一下 [文档](https://perldoc.perl.org/perlobj#Inheritance). 
我们还可以阅读有关 `SUPER` 用于从父类调用方法的关键字。它给出了一个关于如何应用继承的示例。
</b></details>

<details>
<summary>是否 Perl 有多态性吗？什么是方法重写？</summary><br><b>

是的，它具有多态性。事实上方法重写是一种应用它的方法 Perl.

简单来说，当我们有一个类的方法已经存在于父类中时，就会出现方法重写。

示例：

```
package A;

sub new { return bless {}, shift; };
sub printMethod { print "A\n"; };

package B;

use parent -norequire, 'A';

sub new { return bless {}, shift; };
sub printMethod { print "B\n"; };

my $a = A->new();
my $b = B->new();

A->new()->printMethod();
B->new()->printMethod();

# Output:
# A
# B
```

</b></details>

<details>
<summary>如何调用继承类的方法？</summary><br><b>

```
# Class `A` with `printA` method.
package A;

sub new { return bless {}, shift; };
sub printA { print "A"; };

# Class `B` that extends or use the parent class `A`.
package B;

use parent -norequire, 'A';

sub new { return bless {}, shift; };

# Instance class `B` allows call the inherited method
my $b = B->new();
$b->printA();
```
</b></details>

<a name="perl-exception-handling"></a>
### Perl 异常处理

<details>
<summary>我们如何评估和捕获异常 Perl?</summary><br><b>

来自官方 [评估文档](https://perldoc.perl.org/functions/eval):

"`eval` 其所有形式都用于执行一点 Perl 程序，捕获遇到的任何错误，这样它们就不会导致调用程序崩溃。”

例如：

```
eval {
    die;
};
if ($@) {
    print "Error. Details: $@";
}
```

如果我们执行这个，我们会得到下一个输出：

```
Error. Details: Died at eval.pl line 2.
```

的 `eval` (`try` 在另一种编程语言中）正在尝试执行代码。这段代码失败了（这是一个骰子），然后代码继续进入 `if` 评估的条件 `$@` 错误变量存储了一些东西。这就像 `catch` 在另一种编程语言中。这样我们就可以处理错误了。

</b></details>

<a name="perl-os"></a>
### Perl OS

<details>
<summary>什么是 Perl 打开3？</summary><br><b>

来自官方 [IPC::Open3 文档](https://perldoc.perl.org/IPC::Open3):

"IPC::Open3 - 使用 open3() 打开一个用于读取、写入和错误处理的进程”。

与 `open3` 我们可以完全控制 STDIN, STDOUT, STDERR。它通常用于执行命令。
</b></details>

<details>
<summary>使用Open3：创建一个大小为15MB的文件并检查它是否创建成功</summary><br><b>

- 代码：

```
use IPC::Open3;
use Data::Dumper;

sub execute_command {
    my @command_to_execute = @_;
    my ($stdin, $stdout, $stderr);
    eval {
        open3($stdin, $stdout, $stderr, @command_to_execute);
    };
    if ($@) {
        print "Error. Details: $@";
    }
    close($stdin);
    return $stdout;
}

my $file_name = 'perl_open3_test';
&execute_command('truncate', '-s', '15M', $file_name);
my $result = &execute_command('stat', '-c', '%s', $file_name);
print Dumper(<$result>);
```

- 结果：

```
$ -> perl command.pl 
$VAR1 = '15728640
';
```

</b></details>

<a name="perl-packages-modules"></a>
### Perl 包和模块

<details>
<summary>什么是 Perl 包？还有一个模块？</summary><br><b>

与一个 Perl 包中我们定义了一个命名空间。
一个 Perl 模块用一个简单的词可以定义为 `class`。当我们创建一个 `class` 在 Perl 我们使用 `package` 关键词。模块可以与 `use` 关键词。
</b></details>

<details>
<summary>.pl 和 .pm 扩展名有什么区别？</summary><br><b>

之间没有真正的区别 `.pm` 和 `.pl` 扩展。 Perl 使用 `.pm` 扩展只是为了将其区别为 perl 模块（类）。 `.pl` 扩展名通常是为 perl 脚本命名的，没有 OOP 类。

</b></details>

<details>
<summary>为什么一个 Perl 类（或模块）应该在文件末尾返回一些内容？检查示例。</summary><br><b>

如果我们想要 `use` 一个 Perl 模块（`import` 一个类），这个模块应该以一个不同于 0 的值结束。这是必要的，因为如果我们尝试导入该类并且它有一个假值，我们将无法使用它。

```
package A;

sub new { return bless {}, shift; };
sub printMethod { print "A\n"; };

1;
```

</b></details>

<details>
<summary>什么是cpan？还有cpanm？</summary><br><b>

CPAN 是综合 Perl 档案网． 

CPANM 来自官方 [应用程序::cpanminus](https://metacpan.org/pod/App::cpanminus):
“App::cpanminus - 从以下位置获取、解压、构建和安装模块 CPAN".

[查找 CPAN 模块](https://metacpan.org/)

</b></details>

<details>
<summary>如何安装 cpanm 和 Perl 模块？</summary><br><b>

有一些不同的安装替代方案 Perl 模块。我们将使用 `cpanm`.

- 安装 `cpanm`:

```
$ cpan App::cpanminus
```

- 安装 `Test` 模块与 `cpanm`:

```
cpanm Test
```

现在我们可以测试 `Test` 安装的模块：

```
$ perl -M'Test::Simple tests => 1' -e 'ok( 1 + 1 == 2 );'
1..1
ok 1
```

```
$ perl -M'Test::Simple tests => 1' -e 'ok( 1 + 1 == 3 );'
1..1
not ok 1
#   Failed test at -e line 1.
# Looks like you failed 1 test of 1.
```

</b></details>