# 语义化

> Using the correct HTML elements to describe your document content.

用语义更具体的标签，合理地组织，编写高可读性的 HTML 文档，以达到对人，对机器更可读的目的。

## div + css

在使用 div/span + css 布局时，文档结构的可读，主要靠 class/id 来对 div 定义，表明

> 这是个什么 div

这要求开发者提供恰当的自定义命名，而程序要读懂这些命名，是很难的，即使能做到，也不是解决问题的好办法。

Semantic HTML 使用 header、section、aside，footer 等语义更明确的标签，class/id 只是一个增强的修饰，而不是”定义“。

通过更具语义的标签，更少借助 class/id 去描述文档内容本身，同时文档的内容结构仍是直观可见的。

:::note
如今说起语义化的时候，其实我们说的是“更明确的语义”，因为并不是 div+css 就没有语义了，div 和 span 本身就有一定语义，
只是不够具体，不够明确。所谓的语义化，是在语义化的路上实质性前进，是 1.0 到 2.0，不是 0 到 1。
:::

## 标签使用

就我个人而言，对于一些比较明确的大块内容，会习惯地使用语义化标签

```html
<body>
  <header>Header</header>
  <nav>Nav</nav>
  <main>
    <article></article>
  </main>
  <aside>Aside</aside>
  <footer>Footer</footer>
</body>
```

一些细处，小的地方没有特别研究语义化的使用，还是习惯使用 div/span + css。

在日常开发中，受限于内容和资源，往往没有精细的语义化要求，
但做一次有效梳理，有大概的把握，我觉得是有意义的。

### hgroup

hgroup 适合用来组织一些具备标题和副标题的情况，我实际生产中还真没有使用过，但或许后面可以尝试一下。

### abbr

abbr 缩写标签，对于表示缩写比较有用，能够与其他文本有效区分，语义明确，也便于统一应用样式。
比如 <abbr title="Search Engine Optimize">SEO</abbr> 会带上浏览器的默认样式

```html
<abbr title="Search Engine Optimize">SEO</abbr>
```

```css title="Chrome user agent stylesheet"
abbr[title] {
  text-decoration: underline dotted;
}
```

> 参考 [abbr 标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/abbr)

<!-- ### figure -->

## 参考

[Semantic HTML](https://web.dev/learn/html/semantic-html/)