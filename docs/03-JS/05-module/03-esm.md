# ES Module

`import` 和 `export` 是关键字，不是对象，不能直接像 CommonJS 的实现那样去研究理解。

使用 Babel, Rollup 等工具对新特性作转换已经是通用的兼容方案，可以从这个角度去入手，根据转换的结果去理解新特性。

本文简单梳理一下 ES Module 的使用。

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

`export` 应该尽量出现在底部， `export default` 应该出现在模块最底部，这样能够清晰快速地找到变量所定义的位置。
编辑器提供了大纲视图，可以看到各模块变量所在的位置，但保持确定的位置仍旧是让编程体验更好的习惯。

我个人的实践来说，大部分情况下都采用第一种导出方式，谨慎使用其他两种方式。

- `export from`：谨慎使用，避免过多的地方这样“透传”，模块应当只有单一的对外出口
- `export default`：只在特定场景下使用。

我个人是较少使用 `export default`的，原因有几个

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

随着编辑器，构建工具等能力的增强，像智能提示，Tree-Shaking 等可能或者已经解决。
但是我个人仍旧认为，使用命名的导出是一个较好的实践。

:::info 🤔
我的实践是尽量使用命名导出。 `export default` 也有它的适用场景，我会用在一些目录或者文件名强约定，结合脚本或者预设逻辑的地方，典型的如 [Next.js](https://nextjs.org/blog/next-13) 或者 [Nuxt.js](https://nuxtjs.org/docs/directory-structure/pages) 的 Pages 路由约定。
:::

## import

`import` 的使用方法就不必多说了。值得一说的是 import 的静态执行，import 导入的变量都是只读的

```js
"use strict";
import { id } from "./a";
id = 23; // [!] RollupError: Illegal reassignment of import "id" in "main.js".
```

当然，对于对象，可以修改子属性

```js
"use strict";
import { objA } from "./a";
objA.age = 666;
```

这样是为了确保导出变量的“引用不变”，不允许覆盖，才能静态分析做更好的优化。
如果需要修改某个值，应该在模块内导出操作方法，通过操作方法间接地去修改，比如说维护一个全局 id

```js title="main.js"
"use strict";
import { addId, id } from "./a";

console.log(id); // 1
addId();
console.log(id); // 2
```

从这里可以很明显地看到，模块内引入的 id，与函数的参数是不一样的，不是一个简单的值引用

```js
let id = 1;
function addId() {
  id++;
}

function main(id) {
  console.log(id); // 1
  addId();
  console.log(id); // 1
}

main(id);
```

两次输出都是 1，这是一目了然的事情。

## Polyfill

使用 Babel, Rollup 等工具对新特性作转换已经是通用的兼容方案，可以从这个角度去入手，根据转换的结果去理解新特性。

```js title="a.js"
export let id = 100;

export function addId() {
  id = id + 1;
}

export default {
  name: "a",
};
```

```js title="b.js"
export let id = 200;

export function addId() {
  id = id + 1;
}

export default {
  name: "a",
};
```

```js title="main.js"
"use strict";
import * as moduleA from "./a";
import * as moduleB from "./b";

console.log(moduleA.id);
moduleA.addId();
console.log(moduleA.id);

console.log(moduleB.id);
moduleB.addId();
console.log(moduleB.id);
```

使用 Rollup 对 `main.js` 进行转换

```shell
rollup main.js --file bundle.js --output.inlineDynamicImports
```

得到的结果如下

```js
let id$1 = 100;

function addId$1() {
  id$1 = id$1 + 1;
}

let id = 200;

function addId() {
  id = id + 1;
}

console.log(id$1);
addId$1();
console.log(id$1);

console.log(id);
addId();
console.log(id);
```

Rollup 的处理，是对变量重命名，确保所引用的变量命名的唯一性。
最初的最初，我们就是这样组织代码的，只是随着对代码便利性，可维护性要求的提高，使用了模块化的方法。
Rollup 的这种转换，其实就是把麻烦的过程帮我们做了，最底层的东西是不变的。

:::tip 🤔
在程序开发过程中，使用工具来简化繁琐的过程，让使用更加简单，应该是程序员的一个基本素养。
React, Webpack，虽然复杂，但本质上也是这样一个工具，只不过是封装程度，复杂度的不同，底层是大体不变的。
:::

## Dynamic import

前面的例子中的 a 文件

```js title="dynamic.js"
function main() {
  const moduleA = import("./a");
  console.log(moduleA.id);
}

main();
```

转换的结果如下

```js
function main() {
  const moduleA = Promise.resolve().then(function () {
    return a$1;
  });
  console.log(moduleA.id);
}

main();

let id = 100;

function addId() {
  id = id + 1;
}

var a = {
  name: "a",
};

var a$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  addId: addId,
  default: a,
  get id() {
    return id;
  },
});
```

动态加载就是转换为一个 Promise，resolve 模块的 exports 对象。
