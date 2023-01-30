# compileToFunctions

在 `codegen` 之后，最后做的事情，是提供方法去使用编译的结果，这就是 compileToFunctions 做的事情。

```js
function compileToFunctions(compile) {
  // ...
  const compiled = compile(template, options);

  // turn code into functions
  const res = {};
  const fnGenErrors = [];
  res.render = createFunction(compiled.render, fnGenErrors);
  res.staticRenderFns = compiled.staticRenderFns.map((code) => {
    return createFunction(code, fnGenErrors);
  });

  // ...
  return (cache[key] = res);
}

function createFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({ err, code });
    return noop;
  }
}
```

在 codegen 环节我们知道 `compiled` 是类似下面这样的一个结果

```js
{
  render: "with(this){return _m(0)}",
  staticRenderFns: [
    "with(this){return _c('div',{staticClass:\"header\"},[_v(\"hello \"),_c('span',[_v(\"world\")])])}"
  ]
}
```

compileToFunctions 就是调用 new Function 将这两个内容转换成函数，这样 staticRenderFns 才名副其实，是 fns 而不是字符串数组了。

## 总结

直观看一下提供给后面用的是个什么结构吧

```js
{
  render: function anonymous() {
    with(this) {
      return _m(0)
    }
  },
  staticRenderFns: [
    function anonymous() {
      with(this){
        return _c('div',{staticClass:"header"},[_v("hello "),_c('span',[_v("world")])])}
    }
  ]
}
```

最终，编译之后提供给外部使用的函数是 compileToFunctions 返回的 render 函数和 staticRenderFns 函数数组，通过这些中间代码，能够描述 template 的完整功能，这两个在后面的渲染过程使用。
