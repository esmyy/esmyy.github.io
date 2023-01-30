# 介绍

研究定义了数据之后，Vue.js 是如何处理的，改了数据之后，视图又是咋实现更新的。

## Object.defineProperty

Vue2 的响应式，Object.defineProperty (opens new window)是不得不说的。 格式是这样的

Object.defineProperty(obj, prop, descriptor)
对于研究响应式来说，主要关注 descriptor 的 get 和 set

```js
const obj = {};
let bValue = 66;
Object.defineProperty(obj, "level", {
  get() {
    console.log("beforeGet: 我可以在这做些事情，控制返回内容");
    return bValue;
  },
  set(newValue) {
    console.log("beforeSet: 我可以在这做些事情，控制返回内容");
    bValue = newValue;
    console.log("afterSet: 我可以在这做些事情，控制返回内容");
  },
});

obj.level = 77;

console.log(obj.level); // expected output: 77
```

打印结果是这样子

```js
beforeSet: 我可以在这做些事情，控制返回内容
afterSet: 我可以在这做些事情，控制返回内容
beforeGet: 我可以在这做些事情，控制返回内容
```

就是说，在访问或者设置某个属性的时候，是有三个时机是可以搞事情的。
