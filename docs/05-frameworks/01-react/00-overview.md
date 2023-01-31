# React

基于 React 18.2.0 版本

## 示例

```html title=debug.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>react debug</title>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel" src="./debug.js"></script>
  </body>
</html>
```

其中

```js title=debug.js
const Demo = () => {
  const [count, setCount] = React.useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  return <button onClick={handleAdd}>{count}</button>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Demo />);
```

script 标签的 `type="text/babel"` 表明使用 babel 来转换，以支持 jsx。

## 基本流程

经过 babel 转换之后，debug.js 的内容会以这样的方式嵌入到页面中

```js
"use strict";
// ...省略_slicedToArray等一些中间函数
var Demo = function Demo() {
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    count = _React$useState2[0],
    setCount = _React$useState2[1];
  var handleAdd = function handleAdd() {
    setCount(count + 1);
  };
  return /*#__PURE__*/ React.createElement(
    "button",
    {
      onClick: handleAdd,
    },
    count
  );
};
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/ React.createElement(Demo, null));
```

这样，代码执行的流程就更加清晰了

- createRoot 生成根节点
- createElement 生成子节点
- render 函数把根和子节点关联起来，最终渲染到页面上

## createRoot

```js
var root = ReactDOM.createRoot(document.getElementById("root"));
```

`root` 是一个 `FiberRootNode`。

Fiber 可以理解为 React 中的虚拟 DOM，当然包含了很多的处理方法，是一个相对复杂而全面的描述，我的觉得可以称之为

Vitual DOM Manager，

如何给 Fiber 下一个更好的定义呢？Fiber 是什么？需要更深入学习，同时回顾对比 vue2 的知识

## createElement

## render
