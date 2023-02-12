# 对象

JS 中，对象是一组属性的无序集合，可以把对象想象成一张散列表，其中的内容就是一组名/值对，值可以是数据或者函数。

最常用的两种定义方式

- 字面量
- 构造函数

## 创建对象

创建对象有很多种方式，经典的理解过程就是从

### 工厂模式

使用一个普通函数去创建类似的对象，这种方式称做工厂模式，这种模式也是开发中广泛应用的。

```ts
function getSubmitParams(type, form) {
  const params = {
    productId: query.id,
    type: type,
    ...form,
  };

  // ...
  params.time = Date.now();

  return params;
}
```

很常见的一个场景，当几个接口具有较多的参数交集时，通过一个工厂函数去统一生成公共参数对象。

### 构造函数

构造函数可以称为构造对象的函数，目的就是创建对象。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
}
```

构造函数创建对象的过程，也就是常说的 new 的过程，就是把工厂模式的一些操作在内部做了处理

- 创建对象，用 this 引用指向这个对象
- 建立 `[[prototype]]` 的关联

虽说从调用上来说，使用 new 调用的函数就是构造函数，但从实践来说，我觉得好的实践，要尊重其特性，其优点。
没有充分利用构造函数的特性，缺又作为构造函数去使用，不是一个好的实践。
我的实践原则如下

- 定义属性时使用 this
- 不 return
- 需要时应用 prototype

<details>
  <summary>如果构造函数有return会怎样？如果return是null，是undefined，是number呢？</summary>
  <div>如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。这里非空对象，可以理解为非原始类型。也就是说上面说的这些原始值的return都会被忽略。</div>
</details>

## 原型链

## 继承

### 经典继承

### 组合继承

### 寄生式组合继承

## class

js 中的类
