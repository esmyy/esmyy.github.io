<!-- ## BFC

Block Formatting Context，块级格式化上下文。

简单来说，就是元素在特定条件下，形成一个独立的空间，在里面可以自治，独立地做自己的事情。

一直觉得 BFC 的理解有一点难度，它是个缝合怪

- 它处理的场景是一些效果上比较特殊的场景
- 它的实现方式奇奇怪怪的

**实现方式**

BFC 的实现方式是有点奇怪的，比如

```css
display: inline-block
position: absolute
position: fixed
```

我的理解，BFC 的实现方式对应了它最初归纳的那些应用场景

```js
if (a || b || c) {
  // 给你一个 BFC
}
```

随着需求的发展，这样的拓展出了问题。
现在使用的时候，我只是想要一个独立的空间，我可能不是 a,b,c，我也不可能去每新增一种场景去修改判断条件，需要一个通用的判断方式，这也就是后面推出的 `display: flow-root`

**使用**

老实说，当我使用 position，或者 inline-block 的时候，我并不会去想它是不是一个 BFC。
只有像下面这样的特殊场景才会在乎“它是 BFC”这个事情

- margin 折叠
- 清除 float
- 清除文字环绕效果，两栏布局

当然，随着 flow-root 的使用，后面这个过程会自然一些，不用再为了得到一个 BFC 而使用那些有副作用的 CSS 属性。

参考[Mozilla BFC](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
:::tips 小结
把 BFC 和 FFC(Flex Formatting Context), GFC(Grid Formatting Context)放到一起对比看待。
不要再绕一圈从实现、使用去解释 BFC 是什么，从 flow-root 属性去看待 BFC，把它当做一个 CSS 属性，只是在现阶段还需要那些有副作用的实现而已。
::: -->
