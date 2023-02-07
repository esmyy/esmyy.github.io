# 基础知识

## 变量提升

在只有 `var` 的年代，对于自定义标识符，可以拆分为 **声明** 和 **赋值** 两个步骤去理解。

```js
console.log(a); // undefined
foo(); // in foo

var a = 12;
function foo() {
  console.log("in foo");
}
```

如上所示，定义了两个变量 `a` 和函数 `foo`。

- **声明提升，赋值不提升**：在定义`a`的位置之前访问，没有报错，打印出来的是 `undefined`，这说明在打印的位置，编译器是知道有这玩意的
- **声明提升，赋值也提升**：函数在声明的位置之前调用，并没有报错，说明在调用的位置，编译器是能知道函数存在，并且拿到了它的内容

:::info
var 变量提升，可以解释为 **声明提升，但是赋值不提升**。
:::

## let & const

在引入了 `let`，`const` 和块级作用域之后，“声明”这一个描述就不够具体了，如下

```js
{
  console.log(a); // undefined
  var a;
}

{
  console.log(b); // Uncaught ReferenceError: Cannot access 'a' before initialization
  let b;
}
```

对于 `var`声明的 `a`，访问会打印默认值 undefined。
而对于 `let` 声明的 `b`，会直接报错，提示需要先初始化。

为了便于理解，引入了 let 和 const 之后，可以将变量的定义过程，新增一个 **占位** 阶段

| 阶段 | 解释                               |
| ---- | ---------------------------------- |
| 占位 | 占了标识符名称，但不允许访问       |
| 声明 | 声明语句执行，但不赋值             |
| 赋值 | 表示我们的自定义初始化，第一次赋值 |

对应关系如下

```js
{
  console.log(b); // Uncaught ReferenceError: Cannot access 'a' before initialization

  // 占位：在声明之前，不允许访问b
  let b;
  // 声明：使用let声明，但未赋值，这阶段访问是默认值
  b = 666;
  // 赋值：设置值之后
}
```

所谓的占位阶段，就是我们说的常说的 TDZ(暂时性死区)。

## TDZ

TDZ(暂时性死区)表示你要的东西存在，但是你还不能拿。这也暗含着一层意思 —— 编译器是知道这个东西存在的。

如果从编译的角度去看，不管是何种方式声明，在编译过程中变量都会被识别，加入到执行上下文中。

从实现上，可以这么去模拟 TDZ

| 阶段 | 模拟操作                                      |
| ---- | --------------------------------------------- |
| 占位 | 定义了 getter 函数，访问即抛出 ReferenceError |
| 声明 | 重新定义了 getter 函数，访问输出 undefined    |
| 赋值 | 重新定义了 getter 函数允许正常访问            |

如果将变量提升拆分成 **占位提升**，**初始化提升**，**赋值提升** 三个部分，那么 let 是 创建提升，但是声明和赋值不提升。

<details>
  <summary>TDZ 是必要的吗</summary>
  <div>
    是也不是，取决于你看的角度。TDZ 约定不要在声明之前使用，是为了减少错误发生概率的策略选择而已。就跟喝肥宅快乐水一样，不喝快乐水能死吗？也许不会，但是喝了会很快乐呀，你说喝这个快乐水是不是必要呢？
  </div>
</details>

## 数据类型

JS 的数据类型简单总结为 6 + 1 + BigInt 共 8 种数据类型

```mermaid
flowchart LR
  Type([数据类型]) ---> A
  Type ---> Object([Object])
  style Object fill:#f9f
  A([基础类型]) ---> String([String])
  style String fill:#f9f
  A ---> Number([Number])
  style Number fill:#f9f
  A ---> Boolean([Boolean])
  A ---> Undefined([Undefined])
  A ---> nullF([null])
  A ---> Symbol([Symbol])
```

这 7 种类型，除了 Symbol 还算新人，其他都是已经工作很多年了，也是平时用的最多的。

Undefined，Boolean，null 的使用相对简单，主要关注 Number, String 和 Object 三个内容进行归纳总结即可。

| 类型   | 研究文档                  |
| ------ | ------------------------- |
| Number | [Number](/docs/JS/number) |
| String | [String](/docs/JS/string) |
| Object | [Object](/docs/JS/object) |

## 类型检测

一般根据具体需要来使用不同的工具

|        目标类型         |            判断方式            |
| :---------------------: | :----------------------------: |
| Exclude<基础类型, null> |             typeof             |
|        Function         |             typeof             |
|          Array          |         Array.isArray          |
|          null           |              ===               |
|        实例关系         |           instanceof           |
|          Other          | Object.prototype.toString.call |

一般而言，typeof x 是比较安全的，检查某个变量常用 typeof 判断是否定义

```js
if (typeof x !== "undefined") {
  // do something
}
```

不过由于 TDZ 的存在，不那么安全了，typeof 这个检测也被 🈲 了。

:::info 归纳
我觉得好的方式是找一个，或者自行封装一个小工具包，团队内统一使用，一次有效归纳，不需要再做取舍纠结，也减少偶然的错误。
:::

## 类型转换

JS 中各类转换很多，其中比较值得注意的有几个

- 非数字转数字，参考 [Number](/docs/JS/number)
- `+` 二元运算，一元操作引起的转换
- `==` 比较隐式转换

:::caution 提示
我觉得好的方式应该是使用 TS 约束类型，减少类型转换，尽量避免隐式转换，限制显示转换。
:::
