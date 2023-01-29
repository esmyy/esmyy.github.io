# parse

编译核心三步的第一步 —— parse，负责模板的解析和 AST 的生成。

parse 吃的是字符串的 template 模板，吐的是一个 AST，是一个对象。

## 前置内容

编译的主要流程在 `src/compiler/index.js`，内容如下

```js
import { parse } from "./parser/index";
import { optimize } from "./optimizer";
import { generate } from "./codegen/index";
import { createCompilerCreator } from "./create-compiler";
export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  isStatic;
  const code = generate(ast, options);
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns,
  };
});
```

本文我们研究的模板的解析和 AST 生成的过程，即 `parse` 函数

```js
const ast = parse(template.trim(), options);
```

## parse

定义在 `src/compiler/parser/index.js`，伪代码的展示如下

```js
export function parse (
  template: string,
  options: CompilerOptions
): ASTElement | void {
  getOptionsProperties(); // ...

  defineLocalVariables(); // ...

  defineCheckAndWarnFnsForDev(); // ...

  parseHTML(template, {
    ...partOfPropertiesOfoptions // ...

    start (tag, attrs, unary, start, end) {
      // ...
    },

    end (tag, start, end) {
      // ...
    },

    chars (text: string, start: number, end: number) {
      // ...
    },

    comment (text: string, start, end) {
      // ...
    }
  })
  return root
}

```

下面将会从上往下解释各部分，对于 parseHTML 的几个函数参数，暂时不用去关注，后面进行单独说明。

## getOptionsProperties

这是获取一些 options 里面的变量

```js
warn = options.warn || baseWarn;

platformIsPreTag = options.isPreTag || no;
platformMustUseProp = options.mustUseProp || no;
platformGetTagNamespace = options.getTagNamespace || no;
const isReservedTag = options.isReservedTag || no;
maybeComponent = (el: ASTElement) => !!el.component || !isReservedTag(el.tag);

transforms = pluckModuleFunction(options.modules, "transformNode");
preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
postTransforms = pluckModuleFunction(options.modules, "postTransformNode");

delimiters = options.delimiters;
```

其中 options 其实是我们在前说过的 baseOptions，在 src/platforms/web/compiler/options.js 中定义，包含一些与平台相关的编译配置，在学习 parse 的过程中其实不用过多关注 options。

## defineLocalVariables

```js
const stack = [];
const preserveWhitespace = options.preserveWhitespace !== false;
const whitespaceOption = options.whitespace;
let root;
let currentParent; // 当前查找到的元素的父元素
let inVPre = false; // 在v-pre标记的不用编译的组件中
let inPre = false; // <pre></pre>标签中
let warned = false;
```

定义了一些在 parse 内部需要的局部变量，root 表示根结点，stack 用作一个栈，在解析过程中保存已解析未匹配的 AST 元素。

## defineCheckAndWarnFnsForDev

定义了一些在开发环境下报错提示的检查方法

```js
// 有多种可能发生在一个位置的异常配置场景，只抛出最先遇到的情况就好了
let warned = false;
function warnOnce(msg, range) {
  if (!warned) {
    warned = true;
    warn(msg, range);
  }
}

function closeElement(element) {
  // allow root elements with v-if, v-else-if and v-else
}

function trimEndingWhitespace(el) {
  // remove trailing whitespace node
}

function checkRootConstraints(el) {
  if (el.tag === "slot" || el.tag === "template") {
    // 提示不能用slot或template作为根元素
  }
  if (el.attrsMap.hasOwnProperty("v-for")) {
    // 提示根元素不能用v-for
  }
}
```

在解析编译 template 的过程中，可能会遇到这样那样的不符合要求的配置，这些函数主要就是做一些检查和提示。

## parseHTML

parseHTML 是将 template 转换为 AST 的地方，定义在 src/compiler/parser/html-parser.js，伪代码如下

```js
export function parseHTML(html, options) {
  let last, lastTag;
  while (html) {
    last = html;
    if (!lastTag || !isPlainTextElement(lastTag)) {
      let textEnd = html.indexOf("<");
      if (isComment) {
        advance();
        continue;
      }

      if (isDoctype) {
        advance();
        continue;
      }

      if (isEndTag) {
        advance();
        parseEndTag();
        continue;
      }

      if (isStarTag) {
        handleStartTag();
        advance();
        continue;
      }

      if (isText) {
        advance();
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      handlePlainTextElement();
      parseEndTag();
    }

    if (html === last) {
      break;
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance(n) {
    // ...
  }

  function parseStartTag() {
    // ...
  }

  function handleStartTag(match) {
    // ...
  }

  function parseEndTag(tagName, start, end) {
    // ...
  }
}
```

parseHTML 就是 template 字符串匹配和处理的过程，整体来说就是从前向后匹配，根据不同的匹配情况做不同的处理，然后对剩下的未匹配部分继续进行下一轮的匹配，直到整个字符串解析完成。

匹配的关键是 `<` 这个字符，每个 html tag 以这个字符为起点，向后查找分析，判断后面跟的内容是什么。

## 模板解析

解析的过程主要就是在找到 `<` 之后，用正则向后匹配，匹配用到的正则如下:

这些正则，都是用来做标签或者属性匹配的，几个比较复杂的正则可以点击链接查看直观的图形化表示

- [startTagOpen 匹配开始标签的开始](https://regexper.com/#%2F%5E%3C%28%28%3F%3A%5Ba-zA-Z_%5D%5B%5C-%5C.0-9_a-zA-Za-zA-Z%5Cu00B7%5Cu00C0-%5Cu00D6%5Cu00D8-%5Cu00F6%5Cu00F8-%5Cu037D%5Cu037F-%5Cu1FFF%5Cu200C-%5Cu200D%5Cu203F-%5Cu2040%5Cu2070-%5Cu218F%5Cu2C00-%5Cu2FEF%5Cu3001-%5CuD7FF%5CuF900-%5CuFDCF%5CuFDF0-%5CuFFFD%5D*%5C%3A%29%3F%5Ba-zA-Z_%5D%5B%5C-%5C.0-9_a-zA-Za-zA-Z%5Cu00B7%5Cu00C0-%5Cu00D6%5Cu00D8-%5Cu00F6%5Cu00F8-%5Cu037D%5Cu037F-%5Cu1FFF%5Cu200C-%5Cu200D%5Cu203F-%5Cu2040%5Cu2070-%5Cu218F%5Cu2C00-%5Cu2FEF%5Cu3001-%5CuD7FF%5CuF900-%5CuFDCF%5CuFDF0-%5CuFFFD%5D*%29%2F")

- [startTagClose 匹配开始标签的结束](https://regexper.com/#%2F%5E%5Cs*%28%5C%2F%3F%29%3E%2F")

- [dynamicArgAttribute 匹配动态属性](https://regexper.com/#%2F%5E%5Cs*%28%28%3F%3Av-%5B%5Cw-%5D%2B%3A%7C%40%7C%3A%7C%23%29%5C%5B%5B%5E%3D%5D%2B%5C%5D%5B%5E%5Cs%22'%3C%3E%5C%2F%3D%5D*%29%28%3F%3A%5Cs*%28%3D%29%5Cs*%28%3F%3A%22%28%5B%5E%22%5D*%29%22%2B%7C'%28%5B%5E'%5D*%29'%2B%7C%28%5B%5E%5Cs%22'%3D%3C%3E%60%5D%2B%29%29%29%3F%2F")

- [attribute 匹配普通属](https://regexper.com/#%2F%5E%5Cs*%28%5B%5E%5Cs%22>'%3C%3E%5C%2F%3D%5D%2B%29%28%3F%3A%5Cs*%28%3D%29%5Cs*%28%3F%3A%22%28%5B%5E%22%5D*%29%22%2B%7C'%28%5B%5E'%5D*%29'%2B%7C%28%5B%5E%5Cs%22'%3D%3C%3E%60%5D%2B%29%29%29%3F%2F")

- [endTag 匹配结束标签](https://regexper.com/#%2F%5E%3C%5C%2F%28%28%3F%3A%5Ba-zA-Z_%5D%5B%5C-%5C.0-9_a-zA-Za-zA-Z%5Cu00B7%5Cu00C0-%5Cu00D6%5Cu00D8-%5Cu00F6%5Cu00F8-%5Cu037D%5Cu037F-%5Cu1FFF%5Cu200C-%5Cu200D%5Cu203F-%5Cu2040%5Cu2070-%5Cu218F%5Cu2C00-%5Cu2FEF%5Cu3001-%5CuD7FF%5CuF900-%5CuFDCF%5CuFDF0-%5CuFFFD%5D*%5C%3A%29%3F%5Ba-zA-Z_%5D%5B%5C-%5C.0-9_a-zA-Za-zA-Z%5Cu00B7%5Cu00C0-%5Cu00D6%5Cu00D8-%5Cu00F6%5Cu00F8-%5Cu037D%5Cu037F-%5Cu1FFF%5Cu200C-%5Cu200D%5Cu203F-%5Cu2040%5Cu2070-%5Cu218F%5Cu2C00-%5Cu2FEF%5Cu3001-%5CuD7FF%5CuF900-%5CuFDCF%5CuFDF0-%5CuFFFD%5D*%29%5B%5E%3E%5D*%3E%2F")

在进行每个类别的匹配说明之前，首先解释一下遍历字符串进行解析的外层结构，如下

```js
let index = 0; // 标记在原始的 template 字符串中的位置
let last, lastTag;
while (html) {
  last = html;
  if (!lastTag || !isPlainTextElement(lastTag)) {
    let textEnd = html.indexOf("<"); // 表示的是在 rest(未匹配)字符串中下一个<的位置
    // @block1
  } else {
    // @block2
  }

  if (html === last) {
    // @block3
  }
}
```

html 是**未匹配部分**，这意味着在 while 循环中，只要 template 模板字符串没有匹配到结尾就会继续。这里有三个部分

- @block1：重点研究的部分，请记住 textEnd 表示的是在 rest(未匹配)字符串中下一个<的位置；
- @block2：这里是对于 textarea, script, style 这些的处理，这一部分是所谓的纯文本，即中间不会嵌套其他子元素，这部分直接提取，然后继续向前即可
- @block3：异常情况下无法完成解析时中止的错误提示，比如模板最后有一个标签开始标志<

我们主要针对 @block1 采用以下示例进行说明进行学习，其余两个不再做过多解释

### 使用示例

```js
const app = new Vue({
  template: '<div class="header">hello <!-- this is a comment --></div>',
});

app.$mount("#app");
```

### comment

注释相关的解析代码如下

```js
if (textEnd === 0) {
  if (comment.test(html)) {
    const commentEnd = html.indexOf('-->')

    if (commentEnd >= 0) {
      if (options.shouldKeepComment) {
        options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3)
      }
      advance(commentEnd + 3)
      continue
    }

    // 这里的条件注释就类似于IE的那些判断，不细说。
    if (conditionalComment.test(html)) {
      const conditionalEnd = html.indexOf(']>')

      if (conditionalEnd >= 0) {
        advance(conditionalEnd + 2)
        continue
      }
    }
  }
}
```

根据我们的例子，当 html 为 `<!-- this is a comment --></div>`时，通过 comment.test(html) 判断出是 `<!--` 开头的匹配，这个时候查找 `-->` 这个注释结尾，找到之后将注释通过 options.comment 进行记录，通过 `advance` 前进到此处匹配的注释之后，进行下一轮匹配。

## advance

advance 控制的是匹配过程中的前进

```js
function advance(n) {
  index += n;
  html = html.substring(n);
}
```

功能就是截掉 html 的前 `n` 个字符，可以理解为前进 `n` 个字符。在这个 comment 的例子中，n 是 `commentEnd` 的位置，也就是 `-->` 的位置 23 加上其自身长度 3，则 advance 执行后，下一次循环 html 为右侧剩下的`</div>`

:::info 说明
comment 匹配后还调用了 options.comment，但是我们不在此处深入这个函数。对于 options.xxx 方法的调用，暂时只需要知道在何处调用即可，后续单独解释。
:::

### doctype

```js
const doctype = /^<!DOCTYPE [^>]+>/i

const doctypeMatch = html.match(doctype)
if (doctypeMatch) {
  advance(doctypeMatch[0].length)
  continue
}
```

对于 doctype 声明，就是直接跳过，doctype 没什么需要解析转换的

### Start Tag

```js
const isIgnoreNewlineTag = makeMap('pre,textarea', true)
const shouldIgnoreFirstNewline = (tag, html) => tag && isIgnoreNewlineTag(tag) && html[0] === '\n'

const startTagMatch = parseStartTag()
if (startTagMatch) {
  handleStartTag(startTagMatch)
  if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
    advance(1)
  }
  continue
}
```

开始标签匹配过程中涉及到属性等的处理，抽离到了单独的解析函数 parseStartTag 里，这是其第一次出现，因此我们在这里进行说明，其代码如下

```js
function parseStartTag() {
  const start = html.match(startTagOpen);
  if (start) {
    const match = {
      tagName: start[1],
      attrs: [],
      start: index,
    };
    advance(start[0].length); // 跳过开头，如<div class="id"></div>跳过`div
    let end, attr;
    while (
      !(end = html.match(startTagClose)) &&
      (attr = html.match(dynamicArgAttribute) || html.match(attribute))
    ) {
      attr.start = index;
      advance(attr[0].length);
      attr.end = index;
      match.attrs.push(attr);
    }
    if (end) {
      match.unarySlash = end[1];
      advance(end[0].length);
      match.end = index;
      return match;
    }
  }
}
```

开始标签匹配的过程中，逐个向后匹配提取属性，保存到 `attrs` 数组，这样返回的 match 对象既能够描述这个开始标签自身的内容，同时也标记了其所在的位置。

继续往下，如果正常匹配到一个开始标签，就调用 `handleStartTag` 进行处理，这个是一个很核心的调用，其核心代码如下

```js
function handleStartTag(match) {
  // ...
  const attrs = new Array(l);
  for (let i = 0; i < l; i++) {
    // ...这里主要就是对属性值进行一个解码
    attrs[i] = {
      name: args[1],
      value: decodeAttr(value, shouldDecodeNewlines),
    };
  }

  if (!unary) {
    stack.push({
      tag: tagName,
      lowerCasedTag: tagName.toLowerCase(),
      attrs: attrs,
      start: match.start,
      end: match.end,
    });
    lastTag = tagName;
  }

  if (options.start) {
    options.start(tagName, attrs, unary, match.start, match.end);
  }
}
```

首先将属性值进行了解码，这个我们不必过分关注。然后判断 `!unary`， `unary` 的意思是一元，也就是说是`<br>`这样的自闭合标签，当不是自闭合标签时，往 `stack` 推入了一个对象，这个对象是对元素的描述

```js
{
  tag: tagName, // 标签名
  lowerCasedTag: tagName.toLowerCase(),
  attrs: attrs, // 属性列表
  start: match.start, // 在模板中的开始位置
  end: match.end // 在模板中的结束位置
}
```

stack 即栈，是实现模板解析的重要数据结构，在遇到一个非自闭合标签的开始标签时入栈，在遇到结束标签时出栈。然后 lastTag 标记的是栈顶的标签名，用来匹配结束标签时进行判断。

### End Tag

匹配的代码如下

```js
const endTagMatch = html.match(endTag)
if (endTagMatch) {
  const curIndex = index
  advance(endTagMatch[0].length)
  parseEndTag(endTagMatch[1], curIndex, index)
  continue
}
```

当向后匹配的结果为结束标签，前进跳到下一个位置，然后调用 parseEndTag 对匹配出来的结果进行处理，这里是 `parseEndTag` 首次调用，在此进行说明，代码如下

```js
function parseEndTag(tagName, start, end) {
  let pos, lowerCasedTagName;
  if (start == null) start = index;
  if (end == null) end = index;

  // Find the closest opened tag of the same type
  if (tagName) {
    // @block1
    lowerCasedTagName = tagName.toLowerCase();
    for (pos = stack.length - 1; pos >= 0; pos--) {
      if (stack[pos].lowerCasedTag === lowerCasedTagName) {
        break;
      }
    }
  } else {
    // If no tag name is provided, clean shop
    pos = 0;
  }

  if (pos >= 0) {
    // @block2
    // Close all the open elements, up the stack
    for (let i = stack.length - 1; i >= pos; i--) {
      if (
        process.env.NODE_ENV !== "production" &&
        (i > pos || !tagName) &&
        options.warn
      ) {
        options.warn(`tag <${stack[i].tag}> has no matching end tag.`, {
          start: stack[i].start,
          end: stack[i].end,
        });
      }
      if (options.end) {
        options.end(stack[i].tag, start, end);
      }
    }

    // Remove the open elements from the stack
    stack.length = pos;
    lastTag = pos && stack[pos - 1].tag;
  } else if (lowerCasedTagName === "br") {
    if (options.start) {
      options.start(tagName, [], true, start, end);
    }
  } else if (lowerCasedTagName === "p") {
    if (options.start) {
      options.start(tagName, [], false, start, end);
    }
    if (options.end) {
      options.end(tagName, start, end);
    }
  }
}
```

`tagName` 就是栈顶的标签名，当匹配到结束标签之后，意味着这个 tag 已经完整匹配，根据 tagName 查找到最近一个匹配的开始标签(@block1)，正常情况下，最近的一个匹配应该就是栈顶，也就是说 **pos === stack.length - 1** 应该是成立的，但是在书写时可能会遇到漏写闭合标签的情况，如

```js
<div><span>hello</div>
```

这个情况下，当匹配到结束标签为`</div>`时，发现栈顶的元素是 span，这个时候 pos === 0，而 stack.length - 1 === 1，并不匹配(@block2 options.warn)。

### Text

```js
let text, rest, next;
// @block1
if (textEnd >= 0) {
  rest = html.slice(textEnd);
  while (
    !endTag.test(rest) &&
    !startTagOpen.test(rest) &&
    !comment.test(rest) &&
    !conditionalComment.test(rest)
  ) {
    // < in plain text, be forgiving and treat it as text
    next = rest.indexOf("<", 1);
    if (next < 0) break;
    textEnd += next;
    rest = html.slice(textEnd);
  }
  text = html.substring(0, textEnd);
}

// @block2
if (textEnd < 0) {
  text = html;
}

// @block3
if (text) {
  advance(text.length);
}

if (options.chars && text) {
  options.chars(text, index - text.length, index);
}
```

**@block1**: textEnd 是下一个<的位置，如果大于等于 0，说明当前位置和<之间的文本是纯文本，或者是<开头的一段纯文本，在向后查找的过程中判断<如果是纯文本的一部分，就继续向后查找，一直找到这段文本结束的位置，将文本截取出来。

**@block2**: textEnd 小于 0 说明后面没有 <，即整段 html 都只是纯文本，也就是 template 已经解析完成了。

**@block3**: html 解析位置前进到文本结束的位置。

## 生成 AST

在本文前面解析过程的说明中，说明了 template 如何向后解析，根据不同的类别去做相应的处理，也解释了 advance、parseStartTag、handleStartTag 和 parseEndTag 这些处理函数，但是还有一个关键的内容没有说

**上面的这几个处理函数，都是控制 template 字符串的解析和前进，但是对解析出来的内容，做了什么处理呢，在哪里生成了 AST？**

这些就是 parseHTML 调用时传递的几个函数参数做的事情

```js
parseHTML(template, {
  // ...partOfPropertiesOfoptions

  start(tag, attrs, unary, start, end) {
    // ...
  },
  end(tag, start, end) {
    // ...
  },
  chars(text: string, start: number, end: number) {
    // ...
  },
  comment(text: string, start, end) {
    // ...
  },
});
```

这几个函数在前面说明解析过程中有相应的调用，但为了不打断我们理解 **template 字符串从头到尾匹配的过程**，前面只关注**匹配**，而对**匹配结果的处理**暂时略过了，下面就研究一下 **optons.xxx** 这些方法，说明匹配的结果是如何处理的。

### options.comment

根据前面的例子，当匹配到为一个注释的时候，它的调用是类似这样的

```js
// options.comment(注释内容, 注释内容在模板中的开始位置, 注释内容在模板中的开始位置)
options.comment(" this is a comment ", 20, 24);
```

看一下它的实现

```js
comment (text: string, start, end) {
  // adding anyting as a sibling to the root node is forbidden
  // comments should still be allowed, but ignored
  if (currentParent) {
    const child: ASTText = {
      type: 3,
      text,
      isComment: true
    }
    if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
      child.start = start
      child.end = end
    }
    currentParent.children.push(child)
  }
}
```

当父节点存在时，将注释文本作为一个标记了 `isComment` 的 AST 结点保存到父节点的 children 属性中，而 start 和 end 应该只是在 dev 环境下做提示用。

当不存父节点的时候，也就是和根结点同级的注释会直接被丢弃，如下面例子所示

```js
new Vue({
  template: `<div class="header"><!-- this is a comment --></div><!-- 这里的注释会直接扔掉 -->`,
});
```

### options.start

这个函数在匹配到一个开始标签的时候调用，根据我们的例子，这里第一次调用，是匹配到`<div class="header">`，如下

```js
options.start(
  "div",
  [
    {
      name: "class",
      value: "header",
      end: 19,
      start: 5,
    },
  ],
  false,
  0,
  20
);
```

`start`函数伪代码表示如下

```js
function start (tag, attrs, unary, start, end) {
  let element = createASTElement(tag, attrs, currentParent) // ...

  processElement(element); // ...

  setElementRelationship(elemnt); // ...
},
```

抽成了三个部分，分别是

- 创建 AST 元素
- 处理生成的 AST 元素
- 设置元素关系，即节点相互之间的关联，父子关系

#### 创建 AST 元素

代码如下

```js
// check namespace.
// inherit parent ns if there is one
const ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

// handle IE svg bug
/* istanbul ignore if */
if (isIE && ns === "svg") {
  attrs = guardIESVGBug(attrs);
}

let element: ASTElement = createASTElement(tag, attrs, currentParent);
if (ns) {
  element.ns = ns;
}
```

通过 createASTElement 创建了一个 AST 元素，然后设置了 namespace 继承自父节点。

#### 处理 AST 元素

创建的 element 是个基础的样板，需要做一些检查，针对一些特殊情况做处理

```js
if (process.env.NODE_ENV !== "production") {
  // 这里就是检查，提示你别给属性搞一些乱七八糟的字符
}

if (isForbiddenTag(element) && !isServerRendering()) {
  element.forbidden = true;
  // 检查提示你，别在 template 上搞 style,script 这些内容，要按套路来
}

// apply pre-transforms
for (let i = 0; i < preTransforms.length; i++) {
  element = preTransforms[i](element, options) || element;
}

if (!inVPre) {
  processPre(element);
  if (element.pre) {
    inVPre = true;
  }
}
if (platformIsPreTag(element.tag)) {
  inPre = true;
}
if (inVPre) {
  processRawAttrs(element);
} else if (!element.processed) {
  // structural directives
  processFor(element);
  processIf(element);
  processOnce(element);
}
```

`preTransforms` 是对 `input` 这个元素做一些比较特殊的处理，不用在此去细纠。再往下，processXXX 都是针对不同的内置指令去做处理，在 element 上面添加一些拓展属性，比如 processPre 是判断是否有 v-pre 指令添加 element.pre 标记，processOnce 是添加 element.once 标记。对于 `processFor` 和 `processIf` 则比较复杂，因为他们不是一个 boolean 类型指令，不仅要知道有还是没有，还有知道具体是什么，要确定依赖和对应关系。

- processFor

假设我们有这样一个例子

```js
new Vue({
  data() {
    return {
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2020-03-22",
      },
    };
  },
  template: `<li v-for="(value, name, index) in myObject">
  {{ index }}. {{ name }}: {{ value }}
</li>`,
}).$mount("#app");
```

再来看 v-for 指令的 process 实现

```js
export function processFor(el: ASTElement) {
  let exp;
  if ((exp = getAndRemoveAttr(el, "v-for"))) {
    const res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (process.env.NODE_ENV !== "production") {
      warn(`Invalid v-for expression: ${exp}`, el.rawAttrsMap["v-for"]);
    }
  }
}

type ForParseResult = {
  for: string,
  alias: string,
  iterator1?: string,
  iterator2?: string,
};

export function parseFor(exp: string): ?ForParseResult {
  const inMatch = exp.match(forAliasRE);
  if (!inMatch) return;
  const res = {};
  res.for = inMatch[2].trim();
  const alias = inMatch[1].trim().replace(stripParensRE, "");
  const iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, "").trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res;
}
```

在 v-for 这个指令的使用中，最多可能会定义四个变量，这里会给这四个变量取一个确定的别名，如 ForParseResult 里面所示，在我们的例子中，结果如下

```js
{
  ...element
  alias: "value",
  for: "myObject",
  iterator1: "name",
  iterator2: "index",
}
```

因为用户配置时给这几个角色取的名称是可变的，而这几个角色是固定的，通过内部的名字转换方便了后续的处理。

- processIf

代码就不贴了，直接看个结果

```html
<div v-if="showDemo">demo</div>
```

处理后 element 变成

```js
{
  ...element
  if: "showDemo",
  ifConditions: [
    {
      block: element, // 指向element自身,
      exp: "showDemo"
    }
  ]
}
```

v-else，v-else-if 也是类似的。

#### 设置元素关系

代码如下

```js
if (!root) {
  root = element;
  if (process.env.NODE_ENV !== "production") {
    checkRootConstraints(root);
  }
}

if (!unary) {
  currentParent = element;
  stack.push(element);
} else {
  closeElement(element);
}
```

首先判断 root 节点是否存在，不存在就设置 root 节点，如果存在且非自闭合标签那么将元素推到 stack 里面。对于自闭合标签，调用了 closeElement，这个函数内容比较复杂，我们稍后单独解释，总之就是在一个元素完整找到后，确定谁是爹谁是儿砸顺便还做一些合法性检查。

#### end

```js
function end (tag, start, end) {
  const element = stack[stack.length - 1]
  // pop stack
  stack.length -= 1
  currentParent = stack[stack.length - 1]
  if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
    element.end = end
  }
  closeElement(element)
},
```

end 是在解析到闭合标签时被调用，首先将栈顶元素弹出，然后让下一个元素作为 currentParent。currentParent 是在创建 AST 元素的时候传入作为 parent 属性的，也就是说当下一个元素入栈时，设置的 parent 就是当前栈顶元素，这样就实现了父子关系的联系。

#### chars

这个函数是用来处理文本的，简化代码如下

```js
function chars (text: string, start: number, end: number) {
  const children = currentParent.children
  if (text) {
    let child: ?ASTNode
    if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
      child = {
        type: 2,
        expression: res.expression,
        tokens: res.tokens,
        text
      }
    } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
      child = {
        type: 3,
        text
      }
    }
    if (child) {
      children.push(child)
    }
  }
},
```

看个例子

```js
new Vue({
  data() {
    return {
      name: "myy",
      age: 26,
    };
  },
  template: `<li>name is: {{name}}, age is: {{age}} </li>`,
}).$mount("#app");
```

当进入 `if (text)` 块时，child 结果如下

```js
child: {
  expression: ""name is: "+_s(name)+", age is: "+_s(age)+" ""
  text: "name is: {{name}}, age is: {{age}} "
  type: 2,
  tokens: [
    "name is: ",
    {
      @binding: "name",
    },
    ", age is: ",
    {
      @binding: "age"
    }
  ]
}
```

而如果 template 是纯文本如 this is msg，则结果如下

```js
{
  type: 3,
  text: 'this is msg'
}
```

总结起来就是会根据文本的类型做不同的处理，用不同的 type 值区分，模板类型的文本会拆分成一个 tokens 数组并标记依赖的变量。

不管哪种类型，文本都是以一个 child 结点的角色存在，它都是儿砸当不了爹，阶级已经固化。

#### closeElement

这个函数是在找到一个自闭合标签，或者找到一个结束标签时调用的

```js
function closeElement(element) {
  trimEndingWhitespace(element);
  if (!inVPre && !element.processed) {
    element = processElement(element, options);
  }
  // tree management
  if (!stack.length && element !== root) {
    // allow root elements with v-if, v-else-if and v-else
    if (root.if && (element.elseif || element.else)) {
      if (process.env.NODE_ENV !== "production") {
        checkRootConstraints(element);
      }
      addIfCondition(root, {
        exp: element.elseif,
        block: element,
      });
    } else if (process.env.NODE_ENV !== "production") {
      warnOnce(
        `Component template should contain exactly one root element. ` +
          `If you are using v-if on multiple elements, ` +
          `use v-else-if to chain them instead.`,
        { start: element.start }
      );
    }
  }
  if (currentParent && !element.forbidden) {
    if (element.elseif || element.else) {
      processIfConditions(element, currentParent);
    } else {
      if (element.slotScope) {
        // scoped slot
        // keep it in the children list so that v-else(-if) conditions can
        // find it as the prev node.
        const name = element.slotTarget || '"default"';
        (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] =
          element;
      }
      currentParent.children.push(element);
      element.parent = currentParent;
    }
  }

  // final children cleanup
  // filter out scoped slots
  element.children = element.children.filter((c) => !(c: any).slotScope);
  // remove trailing whitespace node again
  trimEndingWhitespace(element);

  // check pre state
  if (element.pre) {
    inVPre = false;
  }
  if (platformIsPreTag(element.tag)) {
    inPre = false;
  }
  // apply post-transforms
  for (let i = 0; i < postTransforms.length; i++) {
    postTransforms[i](element, options);
  }
}
```

对 element 和 currentParent 进行了关联，还包含了一些条件判断相关的检查，比如说根元素不能有多个，没有 v-if 却有 v-else 一类的。

## 特别说明

说明一些特别的地方

### ifConditions 的特别之处

`addIfCondition` 负责向元素添加对于 `v-if`，`v-else-if` 和 `v-else` 属性的描述，这些条件判断关系统一在 `v-if` 所在元素。举例来说

```js
new Vue({
  data() {
    return {
      show: 1,
    };
  },
  template: `<li><span v-if="show === 1">span</span><p v-else-if="show === 2">in p</p></li>`,
}).$mount("#app");
```

在 span 节点中，会有如下属性

```js
{
  if: "show === 1"
  ifConditions: [
    {
      block: // span自身的引用
      exp: "show === 1"
    },
    {
      block: // p标签的引用
      exp: "show === 2"
    }
  ]
}
```

而对于 p 节点，并不会有 ifConditions 或者 elseifConditions 这样的描述。这个特点在后面 AST 优化的过程中会用到

## 总结

主要分成两个部分，模板的解析 和 AST 的生成，分别对应两个函数

- parseHTML：模板的解析
- parse：AST 的生成

parse 调用 parseHTML，parseHTML 有自己的一个 stack，专门用来控制 template 字符串解析，其中的元素格式如下

```js
{
  tag: tagName,
  lowerCasedTag: tagName.toLowerCase(),
  attrs: attrs,
  start: match.start,
  end: match.end
}
```

外层的 parse 也有一个 stack，其元素是一个更加丰富的描述对象，增加了类别和父子关系指向

```js
{
  type: 1,
  tag,
  attrsList: attrs,
  attrsMap: makeAttrsMap(attrs),
  rawAttrsMap: {},
  parent,
  children: []
}
```

parseHTML 的每一次匹配，都会调用 parse 传入的函数进行相应的处理，去做元素的检查，转换，父子关系的关联，执行相应的出栈入栈操作。

当栈清空时，由于根结点引用保存在 root 中，root 就是我们的抽象语法树，也是 parse 函数的返回值
