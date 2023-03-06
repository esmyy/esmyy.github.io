# ES Module

`import` 和 `export` 是关键字，不是对象，不能直接像 CommonJS 的实现那样去研究理解。

使用 Babel 等工具对新特性作 Polyfill 已经是通用的方案，可以从 Polyfill 的角度去入手，根据 Polyfill 的结果去理解新特性。

## export

`export` 的用法主要有 3 种

```js title="utils.js"
// 导出变量，常量
export const STORAGE_ID = 1;

// export from
export { getSearchId } from "./query";

// 默认导出
export default {
  key,
};
```

我个人的实践来说，大部分情况下都采用第一种导出方式，`export from` 谨慎使用，`export default`只在特定场景下使用。

`export` 应该尽量出现在底部， `export default` 应该出现在模块最底部，这样能够清晰快速地找到变量所定义的位置。

编辑器提供了大纲视图，可以看到各模块变量所在的位置，但保持确定的位置仍旧是让编程体验更好的习惯。

## export default

我个人是尽量避免使用 `export default`，原因有几个

- 编辑器智能提示补全不友好
- `default` 不如具名导出意义更明确
- `import` 的时候可能会有不同的命名，而且在使用时命名本身就是一个负担，我更喜欢在定义时明确命名，而不是使用时

```js
import TaskItem from "./TaskItem";

// 我更喜欢这种，定义时确定了名字
import { TaskItem } from "./TaskItem";
```

- `default` 的导出方式使用时，定义和导出分离，或者导出一个大对象，这是我不喜欢的

```js
const A = "a";
const B = "b";

export default {
  A,
  B,
};
```

- `export default` 对一些构建工具的 Tree-Shaking 是有影响的

随着编辑器，构建工具等能力的增强，像 Tree-Shaking, 智能提示等可能都已经或将会得到解决。
但是我个人仍旧认为，使用命名的导出是一个较好的实践。

当然 `export default` 也有它的适用场景，比如说需要结合一些脚本自动聚合的情况。

:::info 🤔
我的实践是尽量使用命名导出。export default 我会用在一些目录或者文件名强约定，结合脚本或者预设逻辑的地方，典型的如 [Next.js](https://nextjs.org/blog/next-13) 或者 [Nuxt.js](https://nuxtjs.org/docs/directory-structure/pages) 的 Pages 路由约定。
:::

## import

基本上 export 的方式就决定了可以使用怎样的方式来 import。一般而言，有这些注意点

- 避免过多层级的 import 再 export，减少模块的出口

-

## import()

## 模块加载

## Q & A
