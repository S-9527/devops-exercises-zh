<a name="apache-kafka"></a>
# 阿帕奇 Kafka

<a name="kafka-exercises"></a>
## Kafka 练习

|名称|主题|目的与说明|解决方案|评论|
|--------|--------|------|----|----|

<a name="kafka-self-assessment"></a>
## Kafka 自我评估

* [Kafka 101](#questions-kafka-101)

<a name="questions-kafka-101"></a>
<a name="kafka-101"></a>
### Kafka 101

<details>
<summary>什么是 Kafka?</summary><br><b>

[kafka.apache.org](https://kafka.apache.org)：“阿帕奇 Kafka 是一个开源分布式事件流平台，被数千家公司用于高性能数据管道、流分析、数据集成和关键任务应用程序。”

换句话说， Kafka 是一种分布式日志，您可以在其中存储事件、读取事件并将它们分发到不同的服务，并大规模且实时地执行此操作。
</b></details>

<details>
<summary>什么 Kafka 是用来做什么的？</summary><br><b>

- 实时电子商务
- 银行业务
- 医疗保健
- 汽车（交通警报、危险警报……）
- 实时欺诈检测
</b></details>

<details>
<summary>什么是“生产者” Kafka?</summary><br><b>

一个将数据发布到的应用程序 Kafka 集群。
</b></details>

<a name="questions-kafka-architecture"></a>
<a name="kafka-architecture"></a>
### Kafka 架构

<details>
<summary>里面有什么 Kafka 簇？</summary><br><b>

- Broker：运行kafka进程的服务器。这样的服务器有本地存储。在一个单一的 Kafka 集群通常有多个broker。
</b></details>

<details>
  <summary>ZooKeeper的作用是什么 Kafka?</summary><br/><b>
在 Kafka，Zookeeper是一个集中控制器，管理生产者、经纪人和消费者的元数据。
动物园管理员还：
    <ul>
      <li>Tracks which brokers are part of the Kafka cluster</li>
      <li>
确定哪个代理是给定分区和主题的领导者
      </li>
      <li>
执行领导者选举
      </li>
      <li>
管理代理的集群成员资格
      </li>
    </ul>

  </b>
</details>
