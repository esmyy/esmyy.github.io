# 场景归纳

## inline 元素间的空隙

```css
display: inline-block; // inline
```

多个行内元素之间，会产生一个间隙，这是浏览器的默认行为。常见的处理方式是设置父元素的 font-size 为 0，这其实也是一种 css reset。

```css
.nav-wrapper {
  font-size: 0;
  .nav-item {
    font-size: 14px;
  }
}
```

类似的浏览器默认处理的场景还有很多，比如单词之间的多个空格，会被合并

```html
<div>No fear of words, no fear of years.</div>
```

在浏览器下的展示

```html
No fear of words, no fear of years.
```

## 去除 a 标签的默认样式
