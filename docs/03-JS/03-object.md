# 对象

对象，继承，原型链和类的简单介绍，这块在《高级教程》里面解释得很清楚。<sub>虽然内容没有记的很牢，但是记得很牢那里有，哈哈</sub>

## 对象的定义

最常用的两种定义方式

- 字面量
- 构造函数

当然还有如今的类(其实也是构造函数)。

## 对象属性描述

对象的属性描述符简单归纳为 4+2

```js
const person = {
  name: "esmyy",
};

const descriptors = Object.getOwnPropertyDescriptors(person);
```

数据属性描述符：enumerable,configurable,writable,value

访问属性描述符：get 和 set 相应的有设置和获取的方法

设置属性描述符：Object.defineProperty

获取属性描述：Object.getOwnPropertyDescriptor, Object.getOwnPropertyDescriptors。

## 原型链

## 继承

### 经典继承

### 组合继承

### 寄生式组合继承

## class

js 中的类
