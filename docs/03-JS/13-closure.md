# 闭包

> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

关于闭包，有很多解释，我也很是困扰过。理解闭包，核心是要理解执行上下文和作用域。

## 经典闭包

看一个 🌰，对以下数组按照 id 升序排序

```js
const arr = [
  { id: 2333, value: 22, name: "esmyy" },
  { id: 666, value: 80, name: "myy" },
  { id: 888, value: 6, name: "yy" },
];
```

这个很简单，可以使用 sort 方法提供比较方法

```js
function compare(a, b) {
  return a["id"] - b["id"];
}

const sortByIdArr = arr.sort(compare);
```

如果又有一个需求是按照其他属性如 `value` 进行排序要怎么办呢？
一种方式是下面这样

```js
function compare(a, b) {
  return a["value"] - b["value"];
}

const sortByIdArr = arr.sort(compare);
```

考虑排序属性多变的场景。一种处理是可以把属性名传进去。

```js
function compare(a, b, prop) {
  return a[prop] - b[prop];
}

const sortByIdArr = arr.sort((a, b) => compare(a, b, "value"));
```

这样实现的话，是每次比较都会将 prop 传递进去。还有一种方式，提前预置 prop，如下

```js
function createCompareFunction(prop) {
  return function compare(a, b) {
    return a[prop] - b[prop];
  };
}

const compare = createCompareFunction("value");
const sortByValueArr = arr.sort(compare);
```

外层的 createCompareFunction 保存了 prop，返回一个 compare 函数，而内部的 compare 函数引入了外部函数的变量。
这种实现相当于提前预置了要比较的属性，在后续比较时能够直接使用预置好的配置。这是闭包很经典的用法，当执行到 compare 函数时，其变量查找规则会引用一个外层函数`createCompareFunction`闭包，如下

<MyImg src={require("./assets/2023-02-19-22-13-53.png")} width="600px" />

这个例子符合一个流传很广的关于闭包的描述
：**父函数返回子函数，子函数引用父函数中的变量，子函数在父函数之外调用**。
我将这种情况下的闭包，称之为**经典闭包**。

:::info 注
本文说的父子，是泛指上下级关系
:::

## 闭包形成的必要条件

在经典闭包里面说的3个条件中，闭包形成的必要条件其实只有一个

- 子函数引用父函数中的变量
- ~~父函数返回子函数~~
- ~~子函数在父函数之外调用~~

“子函数引用父函数中的变量”这个条件也可以拆成两个 —— 函数嵌套，且子函数访问父函数中声明的变量。

```js title="例1"
function foo() {
  let a = 1;
  function bar() {
    let b = 2;
    // highlight-next-line
    console.log(a + b);
  }

  bar();
}
foo();
```

这里有`foo`和`bar`两个函数作用域，在子函数 `bar` 中引用了上级函数作用域`foo`的变量，但并没有返回 `bar`，但这也已经是一个闭包

<MyImg src={require("./assets/2023-02-19-22-22-54.png")} width="600px" />

这个例子说明，”子函数引用父函数中的变量“已经是形成闭包的充分条件。至于经典闭包里面的另外两个条件，他们是“经典闭包”里面的“经典”的条件，不是”闭包“的条件。

## 作用域角度看闭包

闭包关注的也是如何存储和查找变量，它是作用域的一个具体应用。
前面的例子

```js
function foo() {
  let a = 1;
  function bar() {
    let b = 2;
    // highlight-next-line
    console.log(a + b);
  }

  bar();
}
foo();
```

从作用域的角度看，嵌套的函数中，子函数就 **有可能** 会被返回，这意味着上级函数作用域(所在的执行上下文)执行完成之后，其内定义的变量，仍可能需要会被用到。假如把 foo 换成一个块级作用域

```js
{
  let a = 1;
  function bar() {
    let b = 2;
    // highlight-next-line
    console.log(a + b);
  }

  bar();
}
```

这还是不是一个闭包？不是！

<MyImg src={require("./assets/2023-02-19-16-12-44.png")} width="600px" />

这两个例子的区别，就在于 **上级作用域内的变量，是否可能在其代码段执行完成之后，仍无法释放。**
只要“有可能”，就需要将那些被子函数引用的变量保留，这些变量保存在一个对象里面，这个对象就称为闭包。

## 闭包包含哪些变量

看一个🌰

```js
function foo() {
  let a = 1;
  let b = 2;
  let z = 666;
  function bar() {
    let c = 3;
    // highlight-next-line
    console.log('bar a + c:', a + c);
  }
  function baz() {
    let d = 4;
    console.log('baz b + d:', b + d);
  }
  bar();
  baz();
}

foo();
```

这里两个子函数，bar 引用了父作用域中的 `a`，baz 引用了父作用域中的 `b`，那么这个时候闭包是什么情况呢？结果如下

<MyImg src={require("./assets/2023-02-19-23-02-39.png")} width="600px" />

闭包包含的变量，是所有子函数中用到的父函数中的变量，不是某个子函数引用的变量，也不是直接把父级作用域中的变量全部保留下来。

这里也有一些注意事项，由于闭包会包含**所有子函数中用到的父函数中的变量**，即使是某个函数不会再执行，其引用的变量也仍旧会被复制

```js
function foo() {
  let a = 1;
  let b = 2;
  let z = 666;
  function bar() {
    let c = 3;
    // highlight-next-line
    console.log('bar a + c:', a + c);
  }
  function baz() {
    let d = 4;
    console.log('baz b + d:', b + d);
  }

  baz(); // 或者注释掉这行
  return bar;
}

foo();
```

虽然 baz 不会在外部执行，但闭包仍旧会包含其所引用的 `b`。

<MyImg src={require("./assets/2023-02-19-23-18-48.png")} width="600px" />

至于如何知道内部函数`bar`和`baz`用到了什么变量，这涉及到预解析的概念，不在此处特别说明。

:::info 预解析
意思就是虽然不会很详细的去解析和执行函数内部的代码，但是会看看引用了哪些外部的变量。
:::

## 结总

闭包理解起来很让人挫败，因为涉及到的东西不少，需要能够把执行上下文，作用域这些核心的内容串起来。当函数 **可能** 会在其所声明的作用域之外调用时，引擎就把函数所引用的外部变量复制，放到一个闭包对象去。

闭包是什么 —— 闭包是一个对象，包含了函数作用域中，被子函数所引用的那部分变量。

经典闭包：父函数返回子函数，子函数引用父函数中的变量，子函数在父函数之外调用

闭包：子函数引用父函数中的变量

:::tip 说明
虽然从作用域的角度看，闭包是一个对象，但说到闭包，很多时候是指使用闭包的场景。闭包关注的是变量存储和查找的规则，把握这个核心就行。
:::
