# Nginx

## 常见问题

### 80 端口被占用

```bash
nginx: [emerg] bind() to 0.0.0.0:80 failed (48: Address already in use)
```

可以先尝试使用 `reload` 或者 `stop` 处理

```bash
sudo nginx -s reload
```

如果是 `nginx` 运行中，执行成功，如果是其他程序占用，会报错。

查看被谁占用

```bash
lsof -i:80

# 我的 alias
alias p80 ="lsof -i:80"
```

杀死占用的进程

```bash
sudo kill -9 9527
```
