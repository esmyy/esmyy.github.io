# 一些基础概念

<https://web.dev/learn/html/>

## Doctype

我刚接触那会可能还需要注意下，现在除了一些政务之类的网站，都没在用了。

别纠结啥标准模式，兼容模式，DTD 了，按照标准的走就完事了

```html
<!DOCTYPE html>
```

也别啥 HTML 和 XHTML 区别了，按照严格的，标准的走完事，交给工具检查格式化完事。

## lang

目前普遍是使用 语言码+地区码 的值，比如 google.com.hk

```html
<html itemscope="" itemtype="http://schema.org/WebPage" lang="zh-HK">
  <!-- ... -->
</html>
```

这并不规范，但在 Web 中很多俗成的实践比支持不到位的规范更重要。
规范的 [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) 我并没有细看，很长的一段时间内，都仍旧这样使用即可。

## Semantic HTML

> Using the correct HTML elements to describe your document content.

用语义更具体的标签，合理地组织，编写高可读性的 HTML 文档，以达到对人，对机器更可读的目的。
语义化，核心是 `Accessibility`。

### div + css

在使用 div/span + css 布局时，文档结构的可读，主要靠 class/id 来对 div/span 定义，表明

> 这是个什么 div/span

这要求开发者提供恰当的自定义命名，而程序要读懂这些命名，是很难的，也不是解决问题的好办法。

Semantic HTML 使用 header、section、footer 等语义更明确的标签来直观地表明文档结构，class/id 只是一个增强的修饰，而不是”定义“。

:::note
如今说起语义化的时候，其实我们说的是“更明确的语义”，因为并不是 div+css 就没有语义了，div 和 span 本身不就有一定的结构信息么？
只是不够具体，不够明确。所谓的语义化，是在语义化的路上实质性前进，是 1.0 到 2.0，不是 0 到 1。
:::

### AOM

`Semantic HTML` 有一个关联的比较有意思的概念 —— AOM(Accessibility Object Model) 。

如果说 HTML 文档是 `语义化标签` 和 `非语义化标签` 的混合，那么 `AOM` 就是标准化，解析处理之后的在可访问性方面的描述结构。

### 参考

[Semantic HTML](https://web.dev/learn/html/semantic-html/)

> HTML should be used to structure content, not to define content's appearance. The appearance is the realm of CSS. While some elements are defined to appear a certain way, don't use an element based on how the user agent stylesheet makes that element appear by default. Rather, select each element based on the element's semantic meaning and functionality. Coding HTML in a logical, semantic, and meaningful way helps to ensure CSS is applied as intended.

[ARIA](https://w3c.github.io/aria/)

## iframe

```

```
