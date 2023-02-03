# git

新版本的 Mac 自带了 git。

## 使用

[Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN): 比较有趣的入门操作说明

[Pro Git 2](https://git-scm.com/book/zh/)：比较全面，包含比较深入内容的

我觉得新手最好是先看看介绍，了解基本的概念，自己练习练习一些场景。当然，记住两个点：

- 不要 -f
- 不要没有保存内容就乱切分支

其他都问题不大。

:::info 😂😂😂
还记得我实习那会儿，没有怎么看教程就上手干活，几个需求同时开发，没有提交就各种分支乱切，往事不堪回首 😂
:::

## 目录

在初始化后，一个 git 仓库，git 相关的内容保存在 `.git` 目录中

```bash
➜  .git git:(main) ls
COMMIT_EDITMSG HEAD           config         hooks          info           objects        refs
FETCH_HEAD     ORIG_HEAD      description    index          logs           packed-refs
➜  .git git:(main)
```

可以当前 git 仓库的一些配置，不过一般不需要改这个文件就是了，毕竟麻烦。

## git config

使用 git config 设置全局的或者具备的 user 信息

```shell
git config user.email iamesmyy@gmail.com
git config user.name esmyy

# 全局
git config user.name esmyy -g
```

设置的内容都保存在 `.git/config`，如下

```shell {9-11}
➜  .git git:(main) cat config
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
[user]
        email = iamesmyy@gmail.com
        name = esmyy
[remote "origin"]
        url = https://github.com/esmyy/esmyy.github.io.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
        remote = origin
        merge = refs/heads/main
```

## commit 规范

## 部分常用命令

```shell
# status
git status
git status -s

# diff
git diff
git diff --staged

# add
git add .

# commit
git commit -m "msg"

# add and commit
git commit -am "msg"

# 从暂存区删除，从项目中删除
git rm xx

# 从暂存区删除，项目中保留
```

## alias

熟悉了基础的命令之后，我觉得使用 alias 来提升操作效率和体验很重要。

比如在 .zshrc 中添加如下设置和获取用户信息的别名

```shell
alias lg="git config user.email iamesmyy@gmail.com && git config user.name esmyy"

alias name="git config user.name"
alias email="git config user.email"
```

我还使用了 [Oh-My-Zsh 的 git 插件](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh)，其中提供了丰富的 alias，能够极大地提高操作效率。

## .gitignore

<https://github.com/github/gitignore>

## 批量拉取

在新入职公司时，要拉取一些项目，可能项目很多，这个时候可以采用批量拉取的方式。当然，不要乱搞，遵守相关安全要求。

```bash title="batchClone.ts"
#!/bin/bash

# TODO: 替换为仓库列表，如果有子目录, 需写上(如foo/dotfiles)
repository_to_clone=(
  dotfiles
  guide
)

# TODO: 最小公共前缀，替换为实际地址
remote_base="git@github.com:esmyy/"

for file in ${repository_to_clone[@]}
do
  name=${file#\/*} # 取名称
  if test -d ./$name
  then
    echo "$name 已存在"
  else
    echo "\n正在克隆$remote_base/$file.git"
    git clone "$remote_base/$file.git"
  fi
done
```

至于说 `repository_to_clone` 的获取，出现在了网页上的内容，还拿不到么？DOM 操作或者查看接口返回都可以嘛。比如说 DOM 获取可能像这样

```js
Array.from(document.querySelectorAll('[data-testid="group-name"]')).map(
  (a) => a.innerText
);
```

:::caution TODO
集成到 cli 里面去
:::

## 原理

<https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git>

~/.oh-my-zsh/plugins/git/git.plugin.zsh

<https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh>
