# 基础知识

## 数据类型

### Number

#### 特殊值

#### 数值转换

### Object

### 类型检测

简单总结为 6 + Object + BigInt 8 种数据类型

#### 常用判断

```ts
// 基础类型
type TBase = string | number | undefined | null | boolean | symbol;
```

一般根据具体需要来使用不同的工具。我觉得更好的方式是封装一个小工具包，团队内统一使用，一次有效归纳，不需要再做任何取舍纠结。

|       目标类型       |            判断方式            |
| :------------------: | :----------------------------: |
| Exclude<TBase, null> |             typeof             |
|       Function       |             typeof             |
|        Array         |         Array.isArray          |
|         null         |              ===               |
|       实例关系       |           instanceof           |
|        Other         | Object.prototype.toString.call |

#### typeof

一个可能把人绕进去的问题

<details>
  <summary>typeof 判断 null 的结果是什么，要怎么判断出一个变量其值是 null</summary>
  <div>
    我干嘛要用 typeof 呀，我直接判断相等不就行了？
  </div>
</details>

`typeof` 还有一个比较特殊的地方，常见的变量安全检测不安全了，如下

```ts
typeof x === "undefined";
```

TDZ(暂时性死区) 的表现是 inaccessible，而 typeof 是一个 RHS，是尝试做一次 access 操作，GG...

#### 我的方案

我写了一个简单的工具，抹平了那些差异，使我在使用的时候只需要记住我的需求即可。

### 类型转换
