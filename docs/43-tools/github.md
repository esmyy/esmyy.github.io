# Github

## esmyy.github.io

记录一下 Github Pages 使用过程。

添加一个 `xxx.github.io`仓库，xxx 是 username，比如`esmyy.github.io`

### 自定义域名

首先在域名配置后台，为域名添加 CNAME 解析到 `esmyy.github.io`，比如 gh.esmyy.com

在 `Settings -> Pages -> Custom domain` 绑定域名，其实就是在仓库中添加一个 CNAME 文件，比如

```txt
www.esmyy.com
```

这样访问 www.esmyy.com 就是访问 esmyy.github.io

### 子路径

如果配置了一个仓库，比如 /docs，这个仓库也开启了 Github Pages，那么访问 `www.esmyy.com/docs` 就是匹配 /docs 目录下的文件

### workflow 配置示例

是项目中的 .github 目录配置的一部分

```yml title=".github/workflows/pages.yml"
name: Pages

on:
  push:
    paths:
      - "src/**"
      - "docs/**"
    branches:
      - main # default branch

jobs:
  pages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js 16.19.0
        uses: actions/setup-node@v3
        with:
          node-version: "16.19.0"
      - name: Cache NPM dependencies
        uses: actions/cache@v3
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

这里指定了，main 分支的 paths 指定的目录有更新推送时，重新执行构建，构建结果中使用构建产出的 build 目录推送到 gh-pages 分支

### 更换发布分支

推送后可以在项目的`Actions`里面查看构建结构。

如果构建正常，会生成一个 gh-pages 分支，这个就是发布分支。

在`Settings -> Pages -> Build and deployment` 中切换为发布分支，即可正常访问。

后续只要正常在 main 分支推送即可，其他的 workflows 会自动处理完成。
