# 汇总

[题目参考](https://juejin.cn/post/6844904077537574919)

比较有意思的是 5.5

.then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。

```js
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
// 1
```

抛出错误可以

```js
return Promise.reject(new Error("error!!!"));
// or
throw new Error("error!!!");
```

返回一个 error 并不会进入 catch

```js
Promise.resolve()
  .then(() => {
    return new Error("error!!!");
  })
  .then((res) => {
    console.log("then: ", res); // 走这里
  })
  .catch((err) => {
    console.log("catch: ", err);
  });
```

## async/await

在 await 之后的内容，相当于是放到了微任务队列中

```js
async function async1() {
  console.log("1");
  await async2();
  console.log("2");
}
async function async2() {
  console.log("3");
}
async1();
console.log("4");
```

输出是 1342，

[综合考察题目](https://juejin.cn/post/6844904077537574919#heading-33)

题目 5.5 比较有意思
