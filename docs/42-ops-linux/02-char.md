# 字符处理

在日志的查看和分析过程中用的比较多，往往和管道 `|` 结合起来使用。

## grep

常用来进行比较粗浅的筛选查找，先把符合条件的**行**筛出来，再使用其他字符工具进行具体分析。

```sh
grep [-ivnc] 匹配的字符 文件

# i: case insensitive
# v: invert match
# n: line number
# c: count
# ...
```

比如

```sh
tail -f /opt/homebrew/var/log/nginx/access.log | grep local.esmyy.com
```

## sort

## cut

## awk

## paste

## split
