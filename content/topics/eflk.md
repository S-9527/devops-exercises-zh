<a name="elk-filebeat"></a>
## ELK + Filebeat

使用任意你想采集的日志，搭建以下内容：

* 运行 Elasticsearch、Logstash、Kibana 和 Filebeat，每个组件运行在各自的 container 中
* 让 Filebeat 将日志传输到 Logstash 进行处理
* Logstash 处理完成后，将数据写入 Elasticsearch 并建立 index
* 最后，确保可以在 Kibana 中查看数据
