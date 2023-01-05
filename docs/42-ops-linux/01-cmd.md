# 基础命令

> [命令大全](https://wangchujiang.com/linux-command/hot.html)

## 文件

### file

```bash
➜  ~ file WechatIMG1029.png
WechatIMG1029.png: PNG image data, 648 x 459, 8-bit/color RGBA, non-interlaced
```

## 查找

### witch

在 `PATH` 目录中查找可执行文件的绝对路径

我一般就用来看看图片尺寸

### find

可以根据文件的时间，人员等进行查找，比较有用。

我日常用的比较少，取决于工作内容。

> <https://wangchujiang.com/linux-command/c/find.html>

### locate

`locate` 使用一个数据库维护了文件索引，常用来查找文件，由于是提前建立了索引，不再实时遍历文件系统，locate 比 find 查找更加高效。

更新 locate 的 db 需要使用 `updatedb` 命令

在 Mac OS 上，updatedb 需要一些配置，添加一个文件 `/usr/local/bin/updatedb`

```bash
#!/bin/bash
pushd . > /dev/null
cd /usr/libexec
echo "Updating locate database..."
sudo ./locate.updatedb
echo "Updating complete!"
popd > /dev/null
```

赋予执行权限并执行更新

```bash
sudo chmod +x /usr/local/bin/updatedb

sh /usr/local/bin/updatedb
```

等待一段时间，等待更新完成。然后就可以用来查找文件了，比如查找

```bash
➜  ~ locate access.log
/opt/homebrew/var/log/nginx/access.log
```

> <https://wangchujiang.com/linux-command/c/locate.html>

## 打包压缩

打包和压缩是俩概念，比如 `tar` 本身是 `tape archive`，压缩是它的一个可选功能。

### tar

全称是

`tar` 命令需要的参数容易忘记，需要的时候去查 man 也麻烦。
像 `cp`, `rm` 这些命令，都是先源文件，后目标文件。偶尔使用 tar，就会突然懵 —— 是先模板文件名，还是源文件名来着了？

其实懵一下就出答案了 —— 如果是像 `cp` 那样目标文件在后面，压根就不会产生懵的瞬间。

```sh
# 打包并使用gzip压缩
tar -zcvf test.tar.gz test

# 排除某些文件打包压缩
tar --exclude a.txt -zcvf test2.tar.gz test

# 解压
tar -zxvf test.tar.gz
```

现在基本上都是打包压缩就使用 `zcvf`，而解压使用 `zxvf`。

解压的 `z` 可以省略。

### zip

`zip` 日常用的参数

```bash
zip -r test.zip test

# quiet，也就是 tar 的 -v 的反义，zip 默认展示压缩的详情的
zip -q -r test.zip test

# 排除某些文件压缩
zip -r test.zip test --exclude test/a.txt
```

zip 和 tar 是存在不少区别的

- exclude 的位置，tar 需要在前面，zip 在后面
- tar 的 exclude 和 zip 的 exlude 的计算方式是有区别的

```sh
➜  Desktop ls test
a.txt b.txt
➜  Desktop  tar --exclude a.txt -zcvf test1.tar.gz test
a test
a test/b.txt
➜  Desktop zip -r test.zip test --exclude a.txt
  adding: test/ (stored 0%)
  adding: test/b.txt (stored 0%)
  adding: test/a.txt (stored 0%)
➜  Desktop zip -r test.zip test --exclude test/a.txt
updating: test/ (stored 0%)
updating: test/b.txt (stored 0%)
```

这些区别可以通过工具进行打平，而且常用的方式，可以进行一个归纳，进行封装。

:::caution 备忘
TODO: 集合到 @esmyy/cli 工具里面
:::

## 文件权限

这块运维用的比较多

### ls

```bash

```

### chmod

- u: user
- g: group
- o:other

```bash
# add for user
chmod u+rwx file

# rm from user
chmod u-rwx file

# change
chmod 754 file

# change dir's permission
chmod -R 754 dir
```

## 其他

### cat

### last

## 资料

- [《Linux 系统命令及 Shell 脚本实践指南》- 王军](https://book.douban.com/subject/25803528/)
