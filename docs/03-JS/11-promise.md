# Promise

Promise 通过 resolve 和 reject，利用底层完善的 EventLoop 机制，降低了 executor 和 cb 的耦合度，在这个基础上又很好地设计了 then 和 catch 等实例方法去统一回调函数的组织方式。Promise 化原来嵌套形式为了链调用形式，但本质上，onFulfilled 和 onError 函数等，仍是回调函数。

## 执行器函数

```js
Promise 的基本调用格式如下

new Promise((resolve, reject) => {
  // ...
}).then((data) => {
  // ...
}).catch((err) => {
  // ...
})
```

想特别说明的是 执行器函数 这个称呼

```js
new Promise(executor);
```

通过 “执行器函数” 这个名称，理解它的同步性变得自然多了。与回调做对比如下

```js
function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== 'number') {
        throw 'Must provide number as first argument';
      }￼
      success(2 ＊ value);
    } catch (e) {
      failure(e);
    }
  }, 1000);
}

double(2, (value) => {
  console.log('double value: ', value);
}, (e) => {
  console.error(e.message);
})
```

executor 就像这个异步操作函数 `double` 罢了，它的执行同步性一目了然，当然，它的结构更加统一，规范且简洁。

在异步终止状态来临时，不再是直接调用注册的 `success` 或者 `failure` 回调，而是调用 `resolve` 或 `reject`，通过 EventLoop 机制间接调用回调函数。

## 静态方法

Promise 有 6 个静态方法，如今兼容性较好，最常用的是前面三个

| 名称                         |
| ---------------------------- |
| Promise.resolve              |
| Promise.reject               |
| Promise.all                  |
| Promise.race(iterable)       |
| Promise.allSettled(iterable) |
| Promise.any(iterable)        |

Promise.resolve 和 Promise.reject 调用就等于在执行器函数里面调用 resolve 和 reject，这都不必细说了。

## Promise.all

如果较多使用过 all 方法，应该会了解这个方法的不足。以多接口请求为例，Promise.all 只要有一个失败即进入 catch，这样对于其他可以成功的部分，就不好处理了。

Promise.allSettled 解决了 部分 promise rejected 的问题，但很遗憾这个方法 2019 年才加入 stage-4。

另外，顺带提一嘴，axios.all 其实就是 Promise.all。

## Promise.reject

Promise.reject 会抛出一个异步错误，这个错误是通过异步消息队列来处理的，因此无法被 try/catch 捕获

```js
try {
  Promise.reject(new Error("haha")).catch((err) => {
    console.log(err instanceof Error); // true
  });
} catch (e) {
  console.log("error", e);
}
```

以上 catch(e)部分并不会执行。如果给 Promise.reject 传递的不是一个 Error，会怎样呢？

```js
try {
  Promise.reject("haha").catch((err) => {
    console.log(err instanceof Error); // false
    console.log(err === "haha"); // true
  });
} catch (e) {
  console.log("error", e);
}
```

注意此时的 err 并不是一个 Error 实例，而是 haha 字符串。事实上，catch 方法接收的参数就是 Promise.reject 的参数，甚至是同一个引用

```js
let error = new Error("haha");
Promise.reject(error).catch((err) => {
  console.log(err === error); // true
});
```

## 实例方法

《高级教程》说“期约实例的方法是连接外部同步代码与内部异步代码之间的桥梁”，很正确，但我觉得可以更直接一点 —— then, catch 和 finally 是回调函数注册方法。

这里并不打算对实例方法做非常详细的说明，只是说一些自认为重要且比较有趣的点，关于 Promise 实例方法相关的连锁，合成，图等情况，在高级教程都有较为详细的介绍。

### 返回和抛出错误

then 还是 catch 的返回值都会使用 Promise.resolve 包装，注意 **catch 里面的返回值也是 Promise.resolve 包装**。 这也就容易理解为什么 catch 后面的 then 仍会继续执行

```js
const promise = new Promise(() => {
  throw new Error("wow");
});

promise
  .catch((e) => {
    console.error(typeof e.message); // 'wow'
  })
  .then((data) => {
    console.log(data); // undefined
  })
  .catch((e) => {
    // 并不会执行这里
    console.error(e);
  });
```

这里第一个 catch 没有显式返回值，相当于 Promise.resolve(undefined)，所以进入到了后面的 then，却没有进入第二个 catch 执行。

这里还有一个比较有趣的地方 —— 我们并没有显式调用 reject，但是 promise 状态自动变成了 rejected。 这是因为抛出异常会将 promise 对象置为 rejected，相当于执行了 Promise.reject。这里就和前面所说的 返回值 Promise.resolve 包装 对应起来了

- 返回值，Promise.resolve 包装
- 抛出错误，Promise.reject 包装

注意 ”抛出“ 和 ”返回“ 两个词的区别

```js
// 抛出
Promise.resolve(1)
  .then(() => {
    throw new Error("sss");
    // 相当于 return Promise.reject(new Error('sss'))
  })
  .then(() => {
    // ...不会执行
  })
  .catch((e) => {
    // ...执行
  });

// 返回
Promise.resolve(1)
  .then(() => {
    return new Error("sss");
    // 相当于 return Promise.resolve(new Error('sss'))
  })
  .then(() => {
    // ...执行
  })
  .catch((e) => {
    // ...不会执行
  });
```

### finally 的注意项

finally 并不表示终止或者最后，而只是表示 ”必然会执行“，这是 finally 和一些拓展库的 done 的区别。

- finally 兼容性： 相对于 then 和 catch 是差很多的，即使是使用 axios 等请求库，也仍需要对 finally 做兼容性做特殊处理。
- 返回值：finally 表示的是”必然会执行“，它是状态无关的，finally 之后执行 then 还是 catch，由上级 promise 的状态决定

```js
Promise.reject(1)
  .finally((data) => {
    console.log(data);
  })
  .then(() => {
    console.log("then after finally");
  })
  .catch(() => {
    console.log("catch after finally");
  });

// then after finally
```

finally 之后，执行的是 then 注册的回调，而如果改成 Promise.resolve(1)就是执行 then 的回调了。如果 finally 本身有返回值呢？

```js
Promise.reject(1)
  .finally((data) => {
    console.log(data);
    return Promise.rejected(2);
  })
  .then(() => {
    console.log("then after finally");
  })
  .catch((e) => {
    console.log("catch after finally", e.message);
  });

// catch after finally 2
```

finally 本身如果有返回值，不管返回什么，都不会进入到 then 里面去，但是在抛出错误或者返回 rejected 的实例时，会进入到 catch。

### 错误捕获

本小节列举几个 Promise 相关的错误的场景，都是比较有意思的。

### 外部 catch

then 等实例方法每次调用返回新的 Promise 实例

```js
const aPromise = new Promise((resolve) => {
  resolve(100);
});
const thenPromise = aPromise.then(function (value) {
  console.log(value);
});
const thenPromise2 = aPromise.then(function (value) {
  console.log(value);
});
const catchPromise = thenPromise.catch(function (error) {
  console.error(error);
});
console.log(thenPromise !== thenPromise2); // => true
console.log(thenPromise !== catchPromise); // => true
```

在使用的时候需要注意，应该始终返回 promise chain 中的最后一个对象

```js
function badAsyncCall() {
  const promise = Promise.resolve(100);
  const thenPromise = promise.then((data) => {
    throw new Error("haha");
  });

  return promise;
}

badAsyncCall().catch((e) => {
  console.log("catch error");
});
```

外部的 catch 并不会执行，因为抛出错误的地方并不在 catch 所在的链上。

## onRejected 无法捕获 onFulfilled

promise.then(onFulfilled, onRejected)这种用法，是存在一些问题的

```js
const promise = Promise.resolve(100);
promise.then(
  (data) => {
    throw new Error("haha");
  },
  (err) => {
    console.error("error is", err);
  }
);
```

onRejected 无法捕获到 onFulfilled 抛出的错误，因为在这里两者是二选一线路，并不是串在一起的。

**较好的使用实践，是始终保持整个 promise chain 的单一串行，避免错误无法被捕获的情况，不要让 promise chain 产生分叉**

也就是说，要做到下面这两点：

- 始终只在 promise chain 最末尾的 promise 对象上使用 then 等实例方法注册回调
- 始终使用.catch(onRejected)来处理错误，而非 promise.then(onFulfilled, onRejected)

## 同步异步

这一小节，是强调一下 Promise 中的同步异步情况。

- 同步：executor 函数的执行
- 异步：resolve 和 reject 只是将下一个回调加入到消息队列(微任务)中，回调(then，catch，finally)始终在 resolve 或 reject 之后才执行

在掌握 EventLoop 基本原理的基础上，掌握以上两个 同步/异步 关键点，对于 Promise, setTimeout 等的执行顺序的判断就变得简单了，无非就是

- setTimeout 的宏任务
- executor 的同步
- resolve 和 reject 的微任务
- then,catch,finally 就是 resolve 和 reject 加到微任务队列的回调函数

如下输出顺序一目了然 1 - 2 - 4 - 3

```js
new Promise((resolve, reject) => {
  console.log(1);
  resolve(3);
  console.log(2);
}).then((data) => {
  console.log(data);
});
console.log(4);
```

再混杂一些 setTimeout 和复杂的 Promise 嵌套之类的，理解起来也是 OK 的。

```js
Promise.resolve().then(() => {
  console.log("promise1");
  setTimeout(() => {
    console.log("timer2");
  }, 0);
});
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);
console.log("start");
```

结果也很容易得出来是

```js
start;
promise1;
timer1;
promise2;
timer2;
```

示例来自 [LinDaiDai\_霖呆呆](https://juejin.cn/post/6844904077537574919) ，至此，应该此链接所示的绝大部分 Promise 相关示例都可以解答。

## 参考资料

- [JavaScript Promise 迷你书](http://liubin.org/promises-book/)
- [掘金-要就来 45 道 Promise 面试题一次爽到底(1.1w 字用心整理)](https://juejin.cn/post/6844904077537574919)
- 《JavaScript 高级教程-第四版》

## 总结

要理解和掌握 Promise，对 EventLoop 的了解是必不可少的，需要在理解 EventLoop 的基础上，了解 Promise 的执行器，静态方法和实例方法。然后了解 Promise 的拓展库，polyfill 库，兼容性等。
