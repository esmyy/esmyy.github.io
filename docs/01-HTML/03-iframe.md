# iframe

## 同源

不同源情况下，父子窗口无法获取对方的内容，读取到的是默认的“空值”，只能控制对方做跳转。

当谈到父子窗口交互时，主要是指同源的情况下的交互。

## 加载顺序

```html
<body>
  <div>page a</div>
  <iframe name="policyIframe" src="/html/iframe/b.html"></iframe>
</body>
```

先 b loaded，然后再是 a loaded，有先后顺序。

## 访问 iframe 窗口

除了通过选择器获取，还可以通过 window.iframes 访问 iframe 嵌套的页面窗口。

```js
window.frames[0];
```

这个 frames 是一个对象，而非一个数组，"0"是 一个对象属性，而非数组下标。

在条件允许的情况下，我访问 iframe 嵌套页面的方式是给 iframe 定义名称，通过名称访问，这样更可读

```js
window.frames.iframeName;
```

## 访问 document

应该在 iframe 的 onload 之后再访问嵌套页面的 document。

```js
const doc = window.document;
window.onload = () => {
  console.log(doc === window.document); // true
};

const iframe = window.frames[0];
const oldDoc = iframe.document;
iframe.onload = () => {
  console.log(oldDoc === iframe.document); // false
};
```

**对于 iframe，load 之前获取的 document 与 load 之后的是不一样的**，iframe.document 属性初始时是一个默认的空值，加载后覆盖更新了。

结合加载顺序，以上会先输出 false 再输出 true。

:::caution 注意
其实上面是刻意使用了不好的用法 —— onload。onload 是事件的覆盖，容易导致处理被覆盖或者丢失，比如示例中，如果 iframe 嵌套的页面本身定义了 onload，那上述这个 onload 就被覆盖了。

应使用 addEventListener 添加事件监听。
:::

## 通信

实践中现在更多是通过 postMessage 和 message 监听进行交互，而非直接访问嵌套窗口的 document。

## 应用场景

iframe 的应用场景还是很多的

- `codepen`、`stackblitz` 等在线编辑器的“预览”功能
- 嵌套展示一些简单的 html 页面，比如协议页面，说明页面嵌套就挺适合的

<Hidden
  link="https://juejin.cn/search?query=iframe&type=0"
  text="iframe 相关问题"
/>

## 参考

[终于搞懂了 Iframe](https://juejin.cn/post/7127916577684471845)

<!-- iframe中的cookie等共享和限制,sandbox的作用 -->
