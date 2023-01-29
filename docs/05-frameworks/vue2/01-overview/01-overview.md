# 内容概述

叙述逻辑及约定说明

## 叙述逻辑

对于一个最简单的例子

```js
new Vue({
  el: "#app",
  template: '<div class="header">hello</div>',
});
```

最终是要生成这样一段 html，在页面上把这个 hello 给展示出来

```html
<div class="header">hello</div>
```

开始是一个 template 字符串，最终变成页面上的一段文案，完整的 Vue 应用生成的过程，就在其中了。

- 整体结构: 源码目录结构，Vue 构造函数的大体面貌，new Vue 的过程
- 编译过程: Vue 模板编译过程，从 template 到编译过程三个步骤，到代码生成的过程
- 渲染过程：编译结果 -> VDOM -> DOM 的过程
- 更新过程：patch，diff，组件更新的逻辑
- 生命周期：各个生命周期的具体意义，相邻的生命周期之间是以什么为具体界限，比如 beforeCreate 和 created 这两个钩子差异在哪里
- VueRouter
- Vuex
- 拓展
- API
- SSR
- Nuxt

## 风格说明

在代码中使用 ... 表示省略一些暂不关注的内容，大块的内容展示会使用伪代码

伪代码描述示例如下

```js
// ... 这种表示省略不关注的部分

summaryDescription(); // ... 这种表示一个概括性的描述

// ...@s1 这类表示核心步骤分组，分部分学习和理解
// ...@s2
```

一些名词

```text
vm: Vue 的实例
rootVm: Vue 应用根实例
```

## 示例

后续说明可能用到的示例

### 基础单元素

只有一个元素

```js
const app = new Vue({
  template: '<div class="header">hello</div>',
});

app.$mount("#app");
```

### 嵌套一个纯文本 span

增加一个静态元素

```js
const app = new Vue({
  template: '<div class="header">hello <span>world</span></div>',
});

app.$mount("#app");
```

### 嵌套一个注释

增加一个注释

```js
const app = new Vue({
  template: '<div class="header">hello <!-- this is a comment --></div>',
});

app.$mount("#app");
```

### 嵌套两个 span

增加两个纯文本的 span

```js
new Vue({
  template: '<div class="header"><span>1</span><span>2</span></div>',
}).$mount("#app");
```

### 嵌套组件

```js
const Demo = {
  template: "<div>demo</div>",
};

const App = {
  components: {
    Demo,
  },

  template: `<div class="header">
    <demo></demo>
  </div>`,
  el: "#app",
};

new Vue(App);
```
