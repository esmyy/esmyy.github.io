# npm

JavaScript package manager

> <https://github.com/npm/cli>

## .npmrc

> <https://docs.npmjs.com/cli/v9/configuring-npm/npmrc>

`rc`文件如今一般都是某个命令行工具的配置文件，`.npmrc` 就是 `npm` 命令执行的依据。

与很多工具一样，涉及到配置的文件，一般都是分级，有多个文件，然后工具按照某个顺序去查找。

npmrc 分 4 级，日常工作使用，关注用户级别和工程级别就可以了

```bash
# 项目级配置，一般都是用来切换到内部源，加载内部的组件，工具等
project/.npmrc

# 用户级配置，一般结合 nrm 工具使用，比较常用的就是切换到 taobao 加速
~/.npmrc
```

## nrm

> <https://github.com/Pana/nrm>

逻辑很简单，就是选择一个源，更新配置文件 `.npmrc`

同时提供的一些命令还是蛮有趣有用的，比如`rename`，`add`等支持快速的更多配置。

由于`.npmrc` 文件是 [ini 格式](https://baike.baidu.com/item/ini%E6%96%87%E4%BB%B6/9718973)，
为了实现编辑而非覆盖，需要借助 [npm/ini](https://github.com/npm/ini) 工具进行解析，辅助读写。

## npx

> Run a command from a local or remote npm package

## pnpm

## 私有 npm

```

```
