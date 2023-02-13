# this

this 是执行上下文级别的关键字。简单来说，每个执行上下文中可以绑定一个对象，这个对象通过 this 引用，这样就能够方便地使用这个对象的属性了。

## 显式绑定

显式绑定是指用 call, apply, bind 绑定函数执行上下文中的 this。

```js
function bark() {
  console.log(this.voice);
}

const dog = {
  voice: "wang!",
  bark,
};

bark.call(dog); // wang!
bark(); // undefined
```

bind 和 call、apply 有本质区别。bind 会改变该函数后续每次调用执行上下文中的 this，而 call 和 apply 只是当次执行。

## 隐式绑定

我所说的隐式绑定，或许与很多书籍中所说并不完全一致。 在不使用 bind 等方法显式绑定一个对象，且 this 又不指向全局对象的情况，都归于隐式绑定。

### 方法调用

作为方法调用时默认指向所在的对象

```js
function bark() {
  console.log(this.voice);
}

const dog = {
  voice: "wang!",
  bark,
};

dog.bark(); // wang!

const bark = dog.bark;
bark(); // undefined
```

当作为一个方法被调用时，this 指向方法所在的直接对象，如 ob1.ob2.func()调用中 func 里面 this 指向是 ob2。 方法调用的直观表现是通过点语法 xxx.func() 或者方括号语言 `xxx[funcName]()` 调用，只要不是这样调用，都不会隐式指向所属对象。

隐式绑定的一个经典例子，是所谓的手写 apply 或者 call 的实现。call 和 apply 改变 this 的指向，而要所谓手写(或者说模拟实现) apply 和 call，自然也就不能用显式绑定。不能显式绑定，且仍要改变 this 指向，也就只有隐式绑定了。

```js
Function.prototype.myApply = function (thisArg, args) {
  thisArg = thisArg || window; // null 情况下是默认
  const func = Symbol();
  thisArg[func] = this;
  const result = thisArg[func](args);
  delete thisArg[func];

  return result;
};

function foo(count = 1) {
  console.log(typeof this.voice === "string" ? this.voice.repeat(count) : "");
}

const cat = {
  voice: "miao",
};

foo.myApply(cat, 3); // miaomiaomiao
```

正是将当前函数作为一个 thisArg 的一个方法，利用隐式继承，使得方法执行时 this 指向了 thisArg。

### 构造函数中

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

可以理解为，没有显式绑定，也没有以上两种隐式绑定的情况，就是默认绑定。 其实，我认为默认绑定也是一种隐式绑定。

## 箭头函数

箭头函数中 this，是一个特殊的存在，甚至是与前面所说的绑定规则冲突的。

### 不符合隐式绑定中的方法调用

箭头函数，即使是以 dog.bark() 形式被调用，也不能让 this 指向所在对象。

```js
var voice = "gaga";
const dog = {
  voice: "wang!",
  bark: () => {
    console.log(this.voice);
  },
};

dog.bark(); // gaga
const bark = dog.bark;
bark(); // gaga
```

箭头函数中的 this，是其定义所在函数/全局执行上下文中的 this。这与我们使用 self 的情况去缓存 this 是一致的，看一下使用 Webpack 执行箭头函数转换后的代码

```js
var _this = this;
var voice = "gaga";
var dog = {
  voice: "wang!",
  bark: function bark() {
    console.log(_this.voice);
  },
};
dog.bark(); // gaga
var bark = dog.bark;
bark(); // gaga
```

最终打印输出结果是什么，就一目了然了。

### 不能显式绑定

箭头函数中的 this

```js
var voice = "gaga";
function foo() {
  this.voice = "wang!";

  return () => {
    console.log(this.voice);
  };
}

const bar = foo();
bar.call(this); // wang!
```

如果 call 实现了显式绑定，则应输出 gaga。

### 箭头函数与 self

箭头函数的作用，等价于之前使用 self 来保存 this 的实现

```js
var voice = "gaga";
function foo() {
  this.voice = "wang!";

  const self = this;
  return function () {
    console.log(self.voice);
  };
}

const bar = foo();
bar(); // wang!
```

从这种实现上看，显式绑定显然是没有作用的 —— 返回的函数中所有 this 都换成了 self，不再使用 this，绑定又有什么用。

从执行上下文的角度来看，self 是所在函数执行上下文中的 this。

## 总结

<!-- this 就像中文中的”这个“，”那个“，很容易让人”???“，往往需要结合上下文去理解。于是，我尝试着结合执行上下文，作用域等概念去理解 -->

## Q & A
