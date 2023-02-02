# nvm

> Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions
> <https://github.com/nvm-sh/nvm>

本文以 zsh 中使用 nvm 为例，看一下 nvm 咋搞的，记一些值得一说的地方

## 安装

安装时会在 .zshrc 中添加以下内容

```shell title="~/.zshrc"
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

`.zshrc`新增的配置不会在已打开的终端窗口生效，需要执行一下

```shell
source ~/.zshrc
```

## 目录结构

```shell {11,15,20}
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── Dockerfile
├── GOVERNANCE.md
├── LICENSE.md
├── Makefile
├── PROJECT_CHARTER.md
├── README.md
├── ROADMAP.md
├── alias
├── bash_completion
├── install.sh
├── nvm-exec
├── nvm.sh
├── package.json
├── rename_test.sh
├── test
├── update_test_mocks.sh
└── versions
```

值得关注的是高亮的 3 个内容

- nvm.sh: nvm 工具代码实现
- alias: node 版本号别名存储
- versions: 不同版本 node 所在

## 实现

安装时在`.zshrc`添加的两行代码，值得关注一下

```shell title="~/.zshrc"
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

第一行指明了 nvm 相关的内容所在的目录 —— .nvm，第二行通过加载 .nvm/nvm.sh，加载了 nvm 命令。

其中 `nvm.sh` 里面包含一堆函数，简化示意如下

```shell title="~/.nvm/nvm.sh"
nvm_ls() {
  # ...
}
nvm_ls_remote() {
  # ...
}
nvm() {
  # ...分发处理
}
# ...
```

nvm 函数是通用入口，通过它来判断参数，进行功能的分发处理。比如

- `nvm ls` 分发到 `nvm_ls`
- `nvm ls-remote` 分发到 `nvm_ls_remote`

因为`nvm_ls` 这些函数和 `nvm` 函数一样，都被加载到了终端环境中，
所以在 zsh 终端中直接输入`nvm_ls`同样可以得到预期的结果。

<!-- :::info 拓展思考
nvm 并未实现为一个独立的 bin 文件，它只是 shell 脚本函数，所以使用 `which nvm` 去定位，并不会输出所在的位置。
简单的拓展：如果要转换为一个 bin 文件，如何转换？
::: -->

## nvm use

use 是 nvm 最常用的参数，支持使用版本的全名、前缀，别名来切换。

`nvm use`的处理函数里面有这样一段

```shell
# Change current version
PATH="$(nvm_change_path "${PATH}" "/bin" "${NVM_VERSION_DIR}")"
export PATH
```

`nvm_change_path`是将新的版本的 node 的地址，添加到 PATH，export 到当前当前终端

```shell
➜  ~ echo $PATH
/Users/esmyy/.nvm/versions/node/v14.19.2/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
➜  ~ nvm use 16
Now using node v16.19.0 (npm v8.19.3)
➜  ~ echo $PATH
/Users/esmyy/.nvm/versions/node/v16.19.0/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
➜  ~
```

使用 export 导出的变量，只在当前终端窗口有效，所以换到新的一个终端，node 还是之前的版本。

## nvm alias

我个人比较喜欢用 alias，自己的 MacBook Pro 也添加了一堆的 alias。nvm 的 alias 命令也有点意思。

```shell
➜ nvm alias
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

其中已安装的`lts`版本具有别名，保存在`.nvm/alias`目录里，比如`gallium`，其内容就是对应的版本号

```txt title=".nvm/alias/lts/gallium"
v16.19.0
```

### 设置默认版本

设置默认版本，就是修改 **default** 这个 alias

```shell
nvm alias default v14.19.2
```

与 `nvm use` 使用 `PATH` 变量在当前终端记录版本不同，要持久记录，显然是有一个磁盘文件去持久保存设置的版本，这个版本保存在 `.nvm/alias/default` 文件

```txt title=".nvm/alias/default"
v14.19.2
```

### 添加自定义别名

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

## reinstall

当需要安装新版本的 node 时，`--reinstall-packages-from` 参数是一个比较有用的命令

```shell
nvm install v19.4.0 --reinstall-packages-from=16
nvm install node --reinstall-packages-from=node # 从当前版本安装
```

使用这个参数，会在新版本的 node 安装后，安装`from`版本已安装的全局包。

## 一点小启发

像 nvm 这样提前 load 进去就行，对于组织一些小的功能会比较有用，比如可以定义一个 `utils.sh`

```shell title="~/.zshrc"
[ -s "$NVM_DIR/utils.sh" ] && \. "$NVM_DIR/utils.sh" # This loads custom utils
```

当需要有一些小功能时，可以直接修改这里添加函数即可，比自定义 bin 操作更容易。

<!-- ## 转换为 bin 命令
:::caution 提醒
这个转换有点瞎折腾，就是说明如何定义一个 bin 文件而已，转换了之后 nvm 并不能正常用。
:::

```shell
cp ~/.nvm/nvm.sh /usr/local/bin/nvm   # 目标目录为 $PATH 路径下的某个 bin 目录
mv ~/.nvm/nvm.sh ~/.nvm/nvm-backup.sh # 备份，并去掉原nvm函数
chmod 755 /usr/local/bin/nvm          # 添加权限
```

修改 /usr/local/bin/nvm 文件，头部添加解释权标记，尾部添加 nvm 函数调用

```shell
#!/usr/bin/env bash

# ...中间是原来的代码

nvm ${1-}
```

**打开一个新终端窗口**，执行以下命令

```shell
which nvm # /usr/local/bin/nvm
nvm ls    # 正常执行
``` -->
