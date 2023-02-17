# 闭包

> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

上面是 MDN 的解释，如果理解了执行上下文和作用域，会发现这里说得很对，反之，可能会困惑。

## 闭包是什么

关于闭包，有千种描述，万般解释，我也很是困扰过。

很多人在解释的时候都是先上一个例子，看着例子说，这就是闭包。或者说闭包形成的条件“父函数返回子函数，子函数引用父函数中的变量，子函数在父函数之外调用”之类的。都对，但我老感觉这样的回答不得劲，差点什么。闭包是什么？我期望下一个很明确的定义。

**闭包，它就是一个对象，是一个词法环境对象，或者说它是词法环境的子集**

## 闭包的形成

闭包典型的代码示例如下

```js
function foo() {
  var a = 1;
  var b = 2;
  function bar() {
    // highlight-next-line
    console.log(a);
  }

  function baz() {
    // highlight-next-line
    console.log(b);
  }

  bar();
  baz();
}

var func = foo();
func(); // 1
```

这就是常说的”父函数返回子函数，子函数引用父函数中的变量，子函数在父函数之外调用“。

## 闭包的场景

`createXXXFunction` 是很常见的利用闭包的例子。看一个 🌰，对以下数组按照 id 升序排序

```js
const arr = [
  { id: 2333, value: 22, name: "mayueyue" },
  { id: 666, value: 80, name: "myy" },
  { id: 888, value: 6, name: "fengpeng" },
];
```

这个很简单，可以使用 sort 方法提供 compareFunction 即可

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

考虑排序属性多变的场景。一种处理是可以把属性名传进去，

```js
function compare(a, b, prop) {
  return a[prop] - b[prop];
}

const sortByIdArr = arr.sort((a, b) => compare(a, b, "value"));
```

也可以引入一个”函数的生成函数“，

```js
function createCompareFunction(prop) {
  return function (a, b) {
    return a[prop] - b[prop];
  };
}

const compare = createCompareFunction("value");
const sortByValueArr = arr.sort(compare);
```

createCompareFunction 函数作用域里面保存了 prop，就相当于提前预置了要比较的属性，在后续比较时，能够使用预置的配置。

这类”创建函数的函数“，是闭包很常用的场景

从需求的角度看，闭包是一种实现方案，它会创建独立的空间，暂时放一些东西，并提供对这些变量/属性的操作方法。

闭包作为一种实现方案，其实就是闭包的 3 个能力组合的应用。

## 作用域角度看闭包

为了便于理解，可以用一个对象描述作用域，这个对象我们称为作用域对象

```js
{
  // ...
  [[outer]]: // parent scope reference
}
```

每个作用域对象中有一个 `[[outer]]` 属性，用以指向父级作用域，形成作用域链。以下面的例子来说

![Call Stack](../../images/js/call-stack.jpg)

从作用域的角度，我们关心的是变量查找的规则，对于 bar 函数作用域而言，关切的是通过 [[outer]] 保持对所在的词法作用域(foo 函数作用域)的引用。按理说引用的 foo 函数作用域对象应该像下面这样

```js
foo: {
  a;
  b;
  bar[[outer]];
}
```

实际上却是这个 Closure (foo)

```js
Closure(foo);
a: 1;
```

Closure (foo) 是 foo 函数作用域中变量的子集，而不是整个 foo 函数作用域。这是因为 **[[outer]]所引用的对象，和 “外部作用域对象” 两者并不一定等价**。当 bar 执行时，foo 函数已经执行完成，虽然 bar 还需要 foo 函数作用域对象中的变量，但是显然只是需要一部分。Closure (foo) 是将所需要的那部分变量进行拷贝，而那些不再被引用的变量就可以释放了。

:::tips 小结
从作用域的角度，闭包是作用域链上的一个节点，是内部函数的 [[outer]] 指向的一个对象，是**外部函数作用域中，被内部函数引用的那部分变量的集合。**
:::

## 总结

现在闭包通常是指 ”父函数返回子函数，子函数引用父函数中的变量，子函数在父函数之外调用“ 这样的一种情况，这可谓之”经典闭包“。

**从能力角度：**闭包是 3 大能力的组合。像 IIFE，作为 namespace 的对象，模块，等具备类似于经典闭包的能力。

**从需求角度**：闭包是一种实现方案。

**从作用域角度**：闭包是外部函数作用域中，被内部函数引用的那部分变量的集合。

我们经常会遇到“xxx 是不是闭包？”这样的问题，通常意义来说，闭包等于经典闭包，要能力和形式都一致才行。

重要的不是去判断某段代码“是不是闭包”，重要的是具备的能力以及满足了需要。闭包是一组特定能力组合的称呼，通过这个能力组合，作为一种经典的解决方案去实现我们的需求。
