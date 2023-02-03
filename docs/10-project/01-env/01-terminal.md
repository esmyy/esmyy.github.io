# 终端

看到好多这个那个终端的，让子弹飞一会儿，再飞一会儿。

## zsh

`zsh + Oh My Zsh + iTerm2` 是我工作以来用了好几年的组合

| 工具                                            | 功能                                   |
| ----------------------------------------------- | -------------------------------------- |
| [zsh](https://zsh.sourceforge.io/)              | shell                                  |
| [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh) | zsh 的配置工具，配置集，包含主题，插件 |
| [iTerm2](https://iterm2.com/)                   | 终端模拟器                             |

配置的话，就是从 [这里](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) 选一个主题，从[Plugins Overview](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins-Overview) 配置一些好用的插件。

很多插件都是比较简单的一些 alias，我的插件列表较为简单

```txt
plugins=(git extract gitignore Z)
```

我有在本地定制自己的插件，很多功能有自定义实现，不需要安装特别多的插件。

## alias

添加自定义的 alias 提高使用的体验，提高效率，减少重复事务的消耗

## 文件编辑

我编辑文件一般都直接用 `VS Code`， VS Code 安装了 `code` 命令，可以基于此直接配置打开常用的配置文件

```shell
alias default_editor_alias="code"
alias profile="$default_editor_alias $HOME/.profile"
alias bashrc="$default_editor_alias $HOME/.bashrc"
alias zshrc="$default_editor_alias $HOME/.zshrc"
alias rc="$default_editor_alias $HOME/.zshrc"
alias econf="$default_editor_alias $conf" # I use ws as WebStorm Command-Line launcher
```

### cd

给常访问的目录添加快捷方式。

比如像 iCloud 云盘目录这种长路径，就很适合添加 alias，很有用

```shell
# go to dir
alias i="cd ~/Library/Mobile Documents/com~apple~CloudDocs"
alias lb="cd /usr/local/bin"

# working dirs
alias work="cd $HOME/working"
alias wk="cd $HOME/working"

# custom self repos
alias repos="cd $HOME/repos"
alias repo="cd $HOME/repo"
alias blog="cd $HOME/blog"
alias docs="cd $HOME/docs"
alias self="cd $HOME/self"
alias ss="cd $HOME/.ssh"
```

结合 Oh My Zsh 的 **Z** 插件使用，用 `z` 获取最近访问，用 alias 获取最常访问。
