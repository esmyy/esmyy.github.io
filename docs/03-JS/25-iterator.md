# Iterator

迭代器的目的是为各种不同的数据结构提供统一的访问接口，字符串，数组，Set，Map，arguments 和 NodeList 等都实现了默认的迭代器支持。在 JS 中，对应主要的新增语句是 for...of 循环

```js
let arr = [1, 2, 3];
for (let val of arr) {
  console.log(val);
}

// 1
// 2
// 3
```

但是对象（Object）没有实现 Iterator 接口，因为对象的遍历顺序是不确定的，可迭代对象具有无歧义的遍历顺序。（为什么对象的便利顺序是不确定的呢？)。 可迭代对象在 Symbol.iterator 这个特殊的键上定义了迭代器工厂函数

```js
typeof [][Symbol.iterator](); // Array Iterator {}
```

可以在 Symbol.iterator 属性上为对象添加自定义迭代器

```js
class Counter {
  constructor(limit) {
    this.limit = limit;
  }
  [Symbol.iterator]() {
    let count = 1;
    let limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return {
            done: false,
            value: count++,
          };
        } else {
          return {
            done: true,
            value: undefined,
          };
        }
      },

      return() {
        console.log("Symbol.iterator return");
        return {
          done: true,
        };
      },
    };
  }
}

let counter1 = new Counter(5);
for (let i of counter1) {
  if (i > 2) {
    break;
  }
  console.log(i);
}

// 1
// 2
// Symbol.iterator return
```

这个例子主要是简单介绍一下自定义迭代器的基本格式

返回对象里面有 next 和 return 方法
return 方法会在 break, continue, return 和 throw 退出循环时执行
next 和 return 方法返回的对象称为 IteratorResult，具有 value 和 done 属性
