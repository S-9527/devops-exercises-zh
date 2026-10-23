<a name="comparisons-vs-functions---solution"></a>
## 比较与函数 - 解决方案

```
SELECT count(*)
FROM shawarma_purchases
WHERE
  purchased_at >= '2017-01-01' AND
  purchased_at < '2018-01-01'
```
