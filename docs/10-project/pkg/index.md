# 包管理与依赖

JS 包管理，有三个组成部分

|   组成   | 说明                           | 例子                                                                    |
| :------: | ------------------------------ | ----------------------------------------------------------------------- |
|   网站   | 对外查询有哪些包，包的说明等   | <https://www.npmjs.com> <https://npmmirror.com/>                        |
|   cli    | 包管理命令行工具               | [npm](https://github.com/npm/cli), [cnpm](https://github.com/cnpm/cnpm) |
| registry | 包管理的数据库，也就是常说的源 | <https://registry.npmjs.org/>                                           |

逻辑上，包管理其实很简单

- 共享：将 JS 包添加到共享平台
- 使用：使用时从平台下载所需的包

## 工具选择

- yarn
- npm
- pnpm
