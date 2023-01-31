# nvm

> Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions
> <https://github.com/nvm-sh/nvm>

本文以 zsh 中使用 nvm 为例，记录一点有点研究价值的内容

## 介绍

**nvm** 并不是一个可执行的 bin 文件，而只是 shell 脚本函数。

安装时在 .zshrc 中添加了以下内容

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

nvm.sh 中的函数都会加载到 zsh

```shell title="~/.nvm/nvm.sh"
nvm_ls() {
  # ...
}
nvm_ls_remote() {
  # ...
}
nvm() {
  # ...
}
# ...
```

nvm 只是一个通用入口，通过它来判断参数，进行功能的分发处理。

很明显，是`nvm_ls`对应`nvm ls`，`nvm_ls_remote`对应`nvm ls-remote`。

## 目录

nvm 的源码及安装的内容都保存在 `$HOME/.nvm` 目录下。使用 which 可以看到 node 的位置

```shell
➜  versions git:(9600617) which node
/Users/esmyy/.nvm/versions/node/v14.19.2/bin/node
```

在每个版本的 node 下有一个 bin 目录，里面存放着全局安装的命令，比如 npx, lerna 等。

## alias

我个人比较喜欢用 alias，自己的 MacBook Pro 也添加了一堆的 alias。nvm 的 alias 命令也有点意思

```shell
➜  .nvm git:(9600617) nvm alias
default -> 14 (-> v14.19.2)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v19.4.0) (default)
stable -> 19.4 (-> v19.4.0) (default)
lts/* -> lts/hydrogen (-> v18.13.0)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.12 (-> N/A)
lts/fermium -> v14.21.2 (-> N/A)
lts/gallium -> v16.19.0
```

### 默认版本

设置默认版本，就是修改 **default** 这个 alias

```shell
nvm alias default v14.19.2
```

显然是有一个文件去持久保存设置的版本，这个版本保存在

```shell
/Users/esmyy/.nvm/alias/default
```

### 添加别名

可以添加自定义别名，这是有点意思的小功能。

比如我会设置一个 `w` 别名，标记工作需要的版本，而 `s` 作为我其他项目学习需要的版本。

```shell
nvm alias w v14.19.2 # 设定工作项目版本
nvm alias s v16.19.0 # 设定个人学习项目所用版本
```

这样我在需要时，就可以使用别名切换

```shell
nvm use w
```

当然，由于 use 本身已经比较友好了，使用版本前缀就可以切换，需要切换的版本比较少的时候，直接用也很好了。

```shell
➜  .nvm git:(9600617) nvm use 14
Now using node v14.19.2 (npm v8.10.0)
➜  .nvm git:(9600617) nvm use 14.18
Now using node v14.18.1 (npm v6.14.15)
```

看个人需要，不影响开宾利。

## 迁移安装

当需要安装新版本的 node 时，`--reinstall-packages-from` 参数是一个比较有用的命令

```shell
 nvm install v19.4.0 --reinstall-packages-from=16
```

这个参数会将某个版本，已安装的 npm 包进行迁移。
