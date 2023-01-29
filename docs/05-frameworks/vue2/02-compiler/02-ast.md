# AST

AST 全名 Abstract Syntax Tree ，中文叫做**抽象语法树**，AST 就是对源码抽象的结构化表示。

在需要对源码进行解析的地方，AST 往往都是必不可少的一个环节。

## AST Element

所谓的 AST 元素，其实没听起来那么神奇，就是一个描述对象

```js
function createASTElement(
  tag: string,
  attrs: Array<ASTAttr>,
  parent: ASTElement | void
): ASTElement {
  return {
    type: 1,
    tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent,
    children: [],
  };
}
```

这样一个对象表示一个 AST 节点

## 示例

看个例子直观地感受一下

```js
const app = new Vue({
  template: '<div class="header">demo</div>',
});

app.$mount("#app");
```

生成的 AST 如下

```js
{
  attrsList: [],
  attrsMap: {
    class: "header"
  },
  children: [
    {
      end: 24,
      start: 20,
      static: true,
      text: "demo",
      type: 3
    }
  ],
  end: 30,
  parent: undefined,
  plain: false,
  rawAttrsMap: {
    class: {
      end: 19,
      name: "class",
      start: 5,
      value: "header"
    }
  },
  start: 0,
  static: true,
  staticClass: "\"header\"",
  staticInFor: false,
  staticRoot: false,
  tag: "div",
  type: 1,
}
```

说白了就是用对象来描述自身，描述自己与他人的关系，当然，这个对象模板是统一的。

字符串模板，人不好理解，机器也不好理解，转换为对象表示就好多了，用起来也更方便。
