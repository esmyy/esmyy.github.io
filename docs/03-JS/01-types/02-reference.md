# 引用类型

Object 的实例是常说的”对象“，单独放到 [/docs/JS/object] 去解释，同时 Object 也是其他引用类型的基类，本文简单总结 Object 之外的其他引用类型。

## Date

## RegExp

### 创建

正则的创建有两种方式

```mermaid
  flowchart LR
  A[创建] --> B[字面量]
  A --> C["RegExp 构造函数"]
```

一般都是字面量的方式创建，包含变量的情况才需要使用 `RegExp` 构造函数创建

```js
const prefix = "c";
const text = "cat cow wow";
new RegExp(prefix).test(text);
```

使用正则构造函数时，如果第一个参数是正则表达式，修饰符`flag`应该直接写在第一个参数的表达式里面。
如果写在第二个参数，ES5 会有兼容问题。

```js
// ES6+ OK
const regex = new RegExp(/cat/, "i");

// ES5+ OK
const regex = new RegExp(/cat/i);
```

### 使用

正则表达式用于字符串，涉及到的常用方法，一部分属于正则实例，一部分属于字符串包装对象。

```mermaid
flowchart TB
  A[常用方法] --> RegExp[正则方法]
  RegExp --最常用--> exec[reg.exec]
  RegExp --最常用--> test[reg.test]
  A --> String[字符串的正则方法]
  String --最常用--> match[str.match]
  String --最常用--> replace[str.replace]
  String --> search[str.search]
  String --> split[str.split]
  String --新增--> matchAll[str.matchAll]
  style exec fill:red
  style test fill:red
  style match fill:red
  style replace fill:red
  style matchAll fill:grey
```

总共 `2 + 5 = 7` 个方法，最常用的是前面 4 个方式，`matchAll`。

### 正则实例方法

基本上只用 [test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) 和 [exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)，然后其他常用的地方就是字符串的一些方法调用，比如 replace, match。

使用正则的方法，基本上分成两类

- 关注匹配具体内容：reg.exex, str.match
- 不关注匹配的具体内容：reg.test, str.replace

exec 有几个特别的地方

- 不设置 `g` 标记的时候，只返回第一个匹配的信息，设置了 `g` 之后，依次向后匹配
- 返回值虽然是一个数组，但是添加了 input 属性，每次匹配的 `index`, `lastIndex`(设置了`g`之后才会返回)
- 返回 `arr[1-i]` 依次是匹配的组

```js
const prefix = "(cat)";
const text = "cat cow wow";
new RegExp(prefix).exec(text);
// 0: "cat", 1: "cat", groups: undefined, index: 0, input: "cat cow wow", length: 2
```

<details>
  <summary>input属性是原始字符串还是剩余未匹配部分</summary>
  <div>完整的原始字符串</div>
</details>

### 字符串的正则方法

ES6 之后，字符串的正则方法会在内部调用正则上面的对应方法

### 常用正则

### 工具推荐

正则表达式的编写，很考验熟练度，可借助其他图形化解释工具来确认

| 工具                                                 |
| ---------------------------------------------------- |
| VSCode RegExplain 插件，图形化显示正则               |
| [regexper.com 图形化显示正则](https://regexper.com/) |
| [在线快速编辑测试正则](https://regex101.com/)        |

## Object

## Array

[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 是 Object 之外最常用的引用类型，具有非常丰富的操作方法，很多时候需要组合着来使用。

```mermaid
flowchart TB
  A[数组操作] --> B[创建]
  A --> C[增加]
  A --> D[删除]
  A --> E[修改]
  A --> F[查找]
  A --> H[迭代]
  A --> G[排序]
  A --> I[过滤]
```

### 创建

一般都使用字面量的方式创建，主要关注两个稍微特别的场景

```mermaid
flowchart LR
  A[创建数组] --> B[特定长度数组]
  A --> C[类数组转换]
```

这俩也是开发中很常见的场景，示例如下

```js
// 特定长度数组
const arr1 = Array(7); // arr1.length is 7

// 类数组转换
const set = new Set().add(1).add(2).add(2);
const arr2 = Array.from(set); // [1,2]
const arr3 = [...set]; // [1,2]
```

### 注意事项

```js
// 末尾逗号之后的元素被忽略
const arr2 = [1, ,]; // arr2.length is 2

// 空位处理不一致，在不同版本方法对空位的处理不一样，应该始终避免数组出现空位
const arr3 = [, , ,];
```

### 备忘

- reduce 第二个参数没有使用过，一些场景可以用
- reduceRight, copyWithin，entries 可以根据情况提高使用率
- flat 和 flatMap 可以应用在一些试用项目

## Map

## Set

## 包装类型

Boolean, String 和 Number 这几种类型除了

- 各有一个对应的生成函数，构造函数调用返回一个引用类型
-

包装类型是指

:::caution
所谓的后台，是什么？编译器？解析器？
:::

## 拆箱转换

## Error
