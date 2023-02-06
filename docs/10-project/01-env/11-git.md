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
还记得我实习那会儿，没有提交就各种分支乱切，往事不堪回首 😂
:::

## 如何使用

常用的命令熟悉之后正常使用即可，可以用命令行也可以用图形化工具。

我个人比较喜欢用命令，平时会以命令行为主，也不用特别刻意去记，能够满足日常工作要求就可以

我平时主要用到的工具有

- Oh-My-Zsh 的 git 插件
- VSCode 的两个插件 Git Graph 和 GitLens
- SourceTree

git 也有很多很复杂的功能，用的场景少，我不是很有兴趣去研究。

## git config

使用 git config 设置全局的或者局部的 user 信息

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

当前 git 仓库的一些都在这里，不过一般不需要改这个文件就是了。

## alias

熟悉基础的命令之后，我觉得使用 alias 来提升操作效率和体验很重要。

比如在 .zshrc 中添加如下设置和获取用户信息的别名

```shell
alias lg="git config user.email iamesmyy@gmail.com && git config user.name esmyy"

alias name="git config user.name"
alias email="git config user.email"
```

我还使用了 [Oh-My-Zsh 的 git 插件](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh)，其中提供了丰富的 alias，能够提高操作效率。

## commit 规范

## git 钩子

## merge vs rebase

[merge 解释](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6#_basic_merging)

[rebase 解释](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%8F%98%E5%9F%BA)

> 有一种观点认为，仓库的提交历史即是 记录实际发生过什么。 它是针对历史的文档，本身就有价值，不能乱改。 从这个角度看来，改变提交历史是一种亵渎，你使用 谎言 掩盖了实际发生过的事情。 如果由合并产生的提交历史是一团糟怎么办？ 既然事实就是如此，那么这些痕迹就应该被保留下来，让后人能够查阅。 <br/><br/>
> 另一种观点则正好相反，他们认为提交历史是 项目过程中发生的事。 没人会出版一本书的第一版草稿，软件维护手册也是需要反复修订才能方便使用。 持这一观点的人会使用 rebase 及 filter-branch 等工具来编写故事，怎么方便后来的读者就怎么写。 <br/><br/>
> 总的原则是，只对尚未推送或分享给别人的本地修改执行变基操作清理历史， 从不对已推送至别处的提交执行变基操作，这样，你才能享受到两种方式带来的便利。

总结来说，merge 会保留所有提交的完整记录，每次 merge 会有一个
从我的经验来说，当多人改动同一块地方时，如果采用 rebase 的方式，会产生比较多的冲突

## 批量拉取

在新入职公司时，要拉取一些项目，可能项目很多，这个时候可以采用批量拉取的方式。当然，不要乱搞，遵守相关安全要求。

```bash title="batchClone.sh"
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

## 实现原理

理解 git 的实现原理，我认为首先要有这样一个意识 —— 历史记录必然是持久地保存在了某些地方，只要找到这些存储，按照一定的方式去还原即可得到。

<https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git>

~/.oh-my-zsh/plugins/git/git.plugin.zsh

<https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh>

<https://github.com/github/gitignore>

### 目录

在初始化后，一个 git 仓库，git 相关的内容保存在 `.git` 目录中

```bash
➜  .git git:(main) ls
.
├── HEAD
├── config  # 配置
├── description
├── hooks   # 钩子
├── info
├── objects
└── refs
➜  .git git:(main)
```

### 数据对象

文件的各个版本，保存在 objects 目录下，该目录下文件示意如下

```shell
.
├── 1f
│   └── 7a7a472abf3dd9643fd615f6da379c4acb3e3a
├── 83
│   └── baae61804e65cc73a7201a7252750c76066a30
├── d6
│   └── 70460b4b4aece5915caf5c68d12f560a9fe3e4
├── info
└── pack
```

这里的文件是 40 位的 hash 校验和，前两位作为文件夹名字，后 38 位作为文件名。

文件的每个版本对应一个文件，这些文件称作数据对象。

使用 `git cat-file -p [数据对象hash]` 命令，可以查看数据对象的内容

```sh
git cat-file -p d670460b4b4aece5915caf5c68d12f560a9fe3e4
test content
```

**值得注意的是，这里虽然每个数据对象文件都对应着某个文件的某个版本文件内容，但每个数据对象的文件名或内容，并不包含原始文件名。**

那么文件名保存在哪里呢？它保存在 **树对象** 中。

### 树对象

树对象和目录对应，它记录了文件名信息

### 提交对象

也叫 commit 对象，就是使用 git log 查看记录时，每个 commit 记录对应的数据存储对象
