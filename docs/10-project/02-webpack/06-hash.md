# 文件指纹

文件指纹，大约可以理解为打包后输出的文件名，应当针对不同的文件，使用不同的指纹策略，以便充分利用缓存。 Webpack 里面有三类 hash

|                       名称                       |                          含义                           |                使用                |
| :----------------------------------------------: | :-----------------------------------------------------: | :--------------------------------: |
|                     fullhash                     |          整个项目的 hash，任意依赖文件改变则变          | 只要整个项目有改动就需要刷新的内容 |
|                    chunkhash                     |             compilation 阶段 chunk 的 hash              |       output 常用 chunkhash        |
| contenthash 文件/模块独立的 hash，文件不变则不变 |                css，img，font 等资源使用                |
|                       hash                       | 模块唯一的 id，对于图片，字体等资源文件，文件不变则不变 |     css，img，font 等资源使用      |

哈希值的生成，Webpack 4 之前使用的是 md5，出于性能原因调整为 md4。默认使用 16 进制编码取前 20 位，代码示意如下

```js
const crypto = require("crypto");
const hash = crypto.createHash("md4");
const chunkhash = hash.update(data).digest("hex").slice(0, 20);
```

在 output 有 hashFunction 等几个属性进行配置，基本上默认即可。

充分利用缓存，要求善用构建相关的 hash 去设置文件名称，然后与 Web 服务器及 CDN 缓存策略等组合使用。要做到两个点：

- 能用缓存的就用缓存：举例来说，一个图片，如果没有改变，但文件名却每次构建都变化，那缓存就失效了。file-loader 默认使用了[contenthash].[ext]作为输出名称，这就比较合理。
- 有更新的要能及时刷新：举例来说，对于程序 main bundle，如果使用 app.js 这样的名称，那修改重新发布后就会出问题。（当然，非得说强制禁止缓存也能刷新，这没错，但...这不是更严重吗)

关于文件指纹经典的一个配置例子是 css 文件的设置。 当使用 MiniCssExtractPlugin 将 CSS 导出为单独的文件时

```js
// webpack.config.js
plugins: [
  new MiniCssExtractPlugin({
    filename: "[contenthash].css",
  }),
];
```

而 入口文件 app.js 如下

```js
import "./style.less";
const AGE = 100;
```

如果设置 filename 为 [chunkhash].css，那么当 style.css 没有改变，而只是 app.js 改变时，生成的 css 文件名称也会改变，这就很不必要。

:::caution 注意
对于 filename 配置的模板字符串，不同级别能够使用的变量是不同的，注意以前 fullhash 也叫做 hash，因此这里需要注意[hash]使用的 level，参考
[Template strings](https://webpack.js.org/configuration/output/#template-strings)
:::
