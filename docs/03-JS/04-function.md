# 函数

## 箭头函数

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>

## 递归

## 函数绑定

call, apply, bind

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
