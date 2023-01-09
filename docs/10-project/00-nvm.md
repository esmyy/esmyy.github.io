# nvm

> Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions
> <https://github.com/nvm-sh/nvm>

## 介绍

nvm 并不是一个可执行的 bin 文件，而只是 shell 脚本函数。安装时在 .zshrc 中添加了以下文件

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

`nvm.sh` 中的函数都会加载到 zsh

```sh
nvm_ls() {
  # ...
}
nvm_ls_remote() {
  # ...
}
nvm() {
  # ...
}
```

nvm 只是一个通用入口，通过它来判断参数，进行功能的分发处理。

使用

## 目录

nvm 的源码及安装的内容都保存在 `$HOME/.nvm` 目录下。使用 which 可以看到 node 的位置

```sh
➜  versions git:(9600617) which node
/Users/esmyy/.nvm/versions/node/v14.19.2/bin/node
```

在每个版本的 node 下有一个 bin 目录，里面存放着全局安装的命令，比如 npx, lerna 等。

## 默认版本

设置 default 时，显然是有一个文件去持久保存设置的版本，

```sh
nvm alias default 18
```

这个版本保存在

```sh
/Users/esmyy/.nvm/alias/default
```

## 安装新版本

当需要安装新版本的 node 时，`--reinstall-packages-from` 参数是一个比较有用的命令

```sh
 nvm install v19.4.0 --reinstall-packages-from=16
```

这个参数会将某个版本，已安装的 npm 包进行迁移。
