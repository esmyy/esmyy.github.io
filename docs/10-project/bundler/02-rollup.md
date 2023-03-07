# Rollup

Rollup 小而美，专注于 JS 内容的打包，比较适合于打包工具库，SDK，组件库等。

## 定位

Rollup 理解的第一个难点，在于它的定位，在构建工具的大家庭中，它是怎样的定位？

## 如何使用

Rollup 默认处理 ESM 模块，而且是本地的，命令行和配置都比较简单

```js
// 打包为特定格式
rollup main.js --file bundle.js --format cjs

// 指定配置文件
rollup --config rollup.config.prod.js
```

最简单的配置文件指定 `input` 和 `output`即可

```js title="rollup.config.js"
export default {
  input: "src/main.js",
  output: {
    file: "bundle.js",
    format: "cjs",
  },
};
```

## 插件

当需要做稍微高级一点的操作，需要结合相应的插件实现。

- 处理 JSON
- 处理第三方 npm 包
- 处理 CommonJS 模块

当然，配置起来都很简单明了

## 核心能力

## 原理分析

## Q & A

Rollup 还是 Webpack，这预期说
