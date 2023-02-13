# 对象

JS 中对象是一组属性的无序集合，可以把对象想象成一张散列表，其中的内容就是一组名/值对，值可以是数据或者函数。

对于对象的创建过程，经典的介绍过程就是《JavaScript 高级程序设计》里面介绍的从工厂模式开始，到构造函数模式、原型模式...组合寄生式构造函数模式。

:::note 体会
以前我会觉得《JavaScript 高级程序设计》经典的介绍与说明过程，逻辑清晰，层层递进，让我大受震撼，对于理解有很大的帮助。如今我还是觉得很好很好，但是却不再奉为圭臬。
走得更远了一些，改变了一些我看待历史的方式，温故知新，这是我的发展。
:::

<!-- 逐步升级需求，随着需求升级之后，当前实现方式问题凸显，不能满足新的需要，然后新的实现方式应运而生。 -->

## 工厂模式

使用一个普通函数去创建类似的对象，这种方式称做工厂模式，流程很简单

```mermaid
  flowchart LR
  A[创建对象]--> C[设置属性和方法] --> D[return 返回对象]
```

这种模式是开发中广泛应用的，比如当几个接口具有较多的参数交集时，通过一个工厂函数去统一生成公共参数对象。

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

工厂模式的问题？？

以前深以为然的一段描述

**工厂模式虽然可以解决创建多个类似对象的问题，但没有解决对象标识问题（即新创建的对象是什么类型）。**

现在我觉得，知其所以然之后，做实践的总结，工厂模式不会用到需要原型，或者是通过构造函数标识类型的场景，问题就没有了，绕过去了。

## 构造函数

构造函数可以称为构造对象的函数，目的就是创建对象。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
}

const p1 = new Person("esmyy", 666);
```

从调用上来说，使用 new 调用的函数就是构造函数。构造函数实例化的过程，用工厂函数模拟实现如下

```js
function createPerson(name, age) {
  // 1. 创建一个对象
  const obj = {};
  // 2. 设置 [[prototype]]
  Object.setPrototypeOf(obj, Person.prototype);

  // 3. this 指向 obj

  // 4. 执行属性方法添加过程
  obj.name = name;
  obj.age = age;
  obj.sayName = function () {
    console.log(obj.name);
  };

  // 5. 返回对象
  return obj;
}
```

当我们说构造函数模式时，其实把下面这些特点综合起来，归纳为一种模式

- 它的所有属性，方法都在函数内部赋值
- 没有显式地创建对象，属性和方法赋值给 this
- 没有 return

我觉得在理解上，需要区别的一点是，**构造函数模式与构造函数实例化不是一回事**。
发展到今天，

构造函数实例化的过程，就是把工厂模式的一些操作在内部做了处理，用工厂函数模拟实现如下

```js
function createPerson(name, age) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  obj.sayName = function () {
    console.log(obj.name);
  };

  Object.setPrototypeOf(obj, Person.prototype);
  return obj;
}
```

- 创建对象，用 this 引用指向这个对象
- 建立 `[[prototype]]` 的关联
- 设置新对象的 constructor 指向构造函数

虽说从调用上来说，使用 new 调用的函数就是构造函数，但从实践来说，我觉得好的实践，要尊重其特性，其优点。
没有充分利用构造函数的特性，缺又作为构造函数去使用，不是一个好的实践。
我的实践原则如下

- 定义属性时使用 this
- 不 return

<details>
  <summary>如果构造函数有return会怎样？如果return是null，是undefined，是number呢？</summary>
  <div>如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。这里非空对象，可以理解为非原始类型。也就是说上面说的这些原始值的return都会被忽略。</div>
</details>

<details>
  <summary>构造函数模式的特点</summary>
  <div>如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。这里非空对象，可以理解为非原始类型。也就是说上面说的这些原始值的return都会被忽略。</div>
</details>

## 原型模式

构造函数的问题在于属性和方法的重复定义。方法是应当是所有实例共用的，只需要定义一次就好，这需要每个实例的同名方法引用同一个函数，为了保持关联关系，这个函数需要挂到构造函数相关的**某个地方**。

这个地方就是所谓的 prototype，也叫原型。使用 prototype 的方式去共享属性的方法，这种生成对象的方式叫做原型模式，也就是使用 prototype 的创建模式

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Person.prototype.sayNmae = function () {
  console.log(this.name);
};
Person.prototype.TEST_SHARE_OBJ = {
  value: 666,
};

const person1 = new Person("esmyy", 28, "fe");
const person2 = new Person("myy", 28, "be");
Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2); // true
```

prototype 并没有什么神奇的，就是一个共享的对象，至于说由于共享引用对象引起的问题，那不是问题，是需要了解和注意的特性。

使用原型模式后，构造函数，原型，实例三者之间的关系如下

```mermaid
  flowchart LR
  subgraph Person
  A[构造函数]
  end
  subgraph "Person Prototype"
  B[原型]
  end
  subgraph person1
  A1[实例1]
  end
  subgraph person2
  A2[实例2]
  end

  A --.prototype--> B
  B --.constructor--> A
  A1 --.__proto__--> B
  A2 --.__proto__--> B
```

## 继承与原型链

在 JS 中，继承的实现就是设置子类的原型为父类的实例。

```js
function SuperType(superOptions) {￼
  // ...
}

function SubType(subOptions) {
  // ...
}

SubType.prototype = new SuperType(superOptions);
```

通过继承，prototype 一个串一个，形成了一条比大辣棒还长的链条，到地老天荒，海枯石烂 这就是原型链 🤦‍♀️ 屁话真多。

<details>
  <summary>为什么是设置 SubType.prototype 是 SuperType 的实例，而不是直接设置为 SuperType.prototype 呢</summary>
  <div>
    如果设置的是 SubType.prototype = SuperType.prototype，这就是原型模式而已，没有形成链条。
    更重要的是，SuperType.prototype 里面自然是get/set SuperType实例的属性或方法，而 SubType 并不能保证有对应属性。
  </div>
</details>

### 经典继承

经典继承也叫做盗用构造函数。老实说，经典继承和盗用构造函数，两名字都没好到哪里去，对于理解没什么帮助。

核心表述

```js
function SuperType(options) {
  this.name = options.name;
}

function SubType(options) {
  this.text = `你好，练习时长达到 ${options.time} 的练习生 ${options.name}，请问你会打篮球吗？`;
  SuperType.call(this, {
    name: options.name,
  });
}

const instance1 = new SubType({ name: "esmyy", age: 666 });
```

## 如果 SuperType 实例上有引用类型，那么引用类型是所有 SubType 的实例共用的，可能存在两个问题

如果期望

### 组合继承

### 寄生式组合继承

## class

class 是前面所说的构造函数，各种原型，继承的集大成者。如今在开发中，要实现继承，或者是创建一类对象，都应该通过 class 来实现。

:::tip
从工厂模式到 class，中间说的各种”问题“，其实都是需求升级之后，原来的实现方式不满足而已，并不是各种方式就是有问题不能使用，不同的实现方式都有各自的优点，可以用于不同的场景。
:::
