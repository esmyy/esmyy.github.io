# this

| Q          | A                            |
| ---------- | ---------------------------- |
| 是什么     | 一个对象                     |
| 为什么需要 | 在不同的对象上下文中复用函数 |

## 显式绑定

显式绑定是指用 call, apply, bind 绑定函数执行上下文中的 this。

```js
function bark() {
  console.log(this.voice);
}

const villain = {
  voice: "桀桀桀",
};

bark.call(villain); // 桀桀桀
bark(); // undefined
```

bind 和 call、apply 有本质区别。bind 会改变该函数后续每次调用执行上下文中的 this，而 call 和 apply 只是当次执行。

## 隐式绑定

我所说的隐式绑定，或许与很多书籍中所说并不一样。
我认为在不使用 bind 等方法明确绑定到一个对象的情况，且也不是指向全局对象的情况，都属于隐式绑定。

### 方法调用

作为方法调用时默认指向所在的对象

```js
function bark() {
  console.log(this.voice);
}

const villain = {
  voice: "桀桀桀",
  bark,
};

villain.bark(); // 桀桀桀
```

当作为一个方法被调用时，this 指向方法所在的直接对象。方法调用的直观表现是通过点语法 xxx.func() 或者方括号语言 `xxx[funcName]()` 调用，只要不是这样调用，都不会隐式指向所属对象。

:::caution 思考
我觉得这是 this 指向的种种情况中，最容易导致使用问题的地方。
:::

### 构造函数

构造函数中，this 指向当前实例。

```js
function LinkNode(val) {
  this.val = val;
  this.next = null;
}
```

this 指向当前实例，不过是为了方便而使用的一种机制罢了

```js
function LinkNode(val) {
  const ret = {};

  ret.val = val;
  ret.next = null;
  return ret;
}
```

## 默认绑定

在非严格模式下，独立函数调用中 this 指向全局对象

```js
console.log(this === globalThis); // true
function bark() {
  console.log(this === window);
}
bark();
```

没有显式绑定，也不是构造函数实例化和方法调用的情况，就是默认绑定。

## 箭头函数

箭头函数是一个特殊的存在，甚至是与前面所说的绑定规则冲突的。

### 不能显式绑定

箭头函数中的 this

```js
var duck = {
  voice: "gaga",
};

var voice = "桀桀桀";
function foo() {
  return () => {
    console.log(this.voice);
  };
}

const bar = foo();
bar.call(duck); // 桀桀桀
```

如果 `call` 实现了显式绑定，则应输出 `gaga`。

### 不应作为方法

箭头函数，即使是以 dog.bark() 形式被调用，也不能让 this 指向所在对象。

```js
var voice = "gaga";
const villain = {
  voice: "桀桀桀",
  bark: () => {
    console.log(this.voice);
  },
};

villain.bark(); // gaga
```

:::caution 注意
根据这个特点，箭头函数不应该用在对象方法上 —— 对象方法中的 this 不指向这个对象，这算什么回事。
:::

## 执行上下文角度的 this

作为执行上下文的 3 个组成部分之一，每个函数执行上下文中各有一个 this。

```js
var voice = "gaga";
const villain = {
  voice: "桀桀桀",
  bark: function () {
    console.log(this.voice);
  },
};

villain.bark(); // 桀桀桀
const bark = villain.bark;
bark(); // gaga
```

嵌套的函数中，上下文之间的 this 没有什么必然关系。bark 执行时，是一个单独的执行上下文。没有明确的 this 绑定关系，因此指向全局。

## 使用原则

this 的绑定可以按照这个顺序去判断

```mermaid
  flowchart LR
    B(显式绑定?) --> E(构造函数或方法?) --> F(箭头函数?) --> D(默认绑定)
```

其中，虽然构造函数和方法调用称作隐式绑定，但理解上是很明显的，两者都有一个明确的对象。

函数的实现中是否需要使用 this，与函数如何调用，两者应该是配合着的，应当尽量采取很明确的绑定关系。如果一个方式实现时使用了 this，那么就要注意。

##### 可以这样使用

- bind, call, apply
- 构造函数和方法的调用

##### 不应该这样使用

- 方法不要赋值给变量后再调用，直接调用
- 方法不要用箭头函数
- 避免默认绑定：除非特别说明，避免任何一个函数 this 指向全局

## 有点小的结

我觉得 this 起初的想法很好，但它的实现和发展并不是很好。
this 的使用过程中的注意点太多，有些很违反直觉。

我觉得 this 是很有代表性的体现 “the good parts“ 和 ”the bad parts” 的地方，更多时候，我们能做的是从实践上取舍。

## QA

[问题参考](https://juejin.cn/post/6844904083707396109)
