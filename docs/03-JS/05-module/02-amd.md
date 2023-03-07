# AMD

AMD 是 RequireJS 推广过程中产出的，RequireJS 是应用 AMD 的一个加载器库。RequireJS 的结构如下

```js
var requirejs, require, define;
(function (global, setTimeout) {
  // ...
})(this, (typeof setTimeout === 'undefined' ? undefined : setTimeout)));
```

这与 CommonJS 里面一个模块的解析很像，也就是一个 IIFE。

## define

define 与 CommonJS 的 module.exports 是类似的，用于定义模块的导出内容，它应该返回一个对象，如果不返回，就相当于是 IIFE 了。
define 通用定义格式如下

```js
define = function (name, deps, callback) {
  // ...
};
```

定义了模块的名称，依赖的模块，以及一个回调。理解上是很简单的 —— **我是 xxx，我依赖模块 ABC，等这些模块加载完了，执行我这个 callback**。
同时还提供了其他快捷定义方式

```js
// 独立模块:不依赖其他模块的独立模块，可以直接定义一个对象
define({
  name: "a",
});

// deps 更简单的写法
define(
  function (require) {
    var dep1 = require('dep1'),
    // ...

    return {
      // ...
    }
  }
);
```

这些使用细节不需要过于在意，只是通用写法的快捷方式而已，现在也不怎么会用 AMD 了。

## require

require 的使用语法与 define 是相似的，define 是定义时依赖一些模块，而 require 是使用时依赖一些模块

```js
require(["foo", "bar"], function (foo, bar) {
  // ...
});
```

## 一点感受

require.js 里面的一些写法我个人挺反感的，比如

```js
req = requirejs = function (deps, callback, errback, optional) {
  //Find the right context, use default
  var context,
    config,
    contextName = defContextName;

  // Determine if have config object in the call.
  if (!isArray(deps) && typeof deps !== "string") {
    // deps is a config object
    config = deps;
    if (isArray(callback)) {
      // Adjust args if there are dependencies
      deps = callback;
      callback = errback;
      errback = optional;
    } else {
      deps = [];
    }
  }

  // ...
};
```

我个人不太喜欢这样的连续赋值和繁琐的参数判断过程。特别是这个做重载判断，给参数赋值的实现。我会选择调整参数的形式，比如统一用 options 参数

```js
req = requirejs = function (options) {
  const { deps, callback, errback, optional } = options;

  // ...
};
```

根据参数做相应的处理就行了，不必非得那么明显地体现”重载“。尤其是给参数赋值，我个人是不喜欢的，我的原则是尽量保证参数只是 RHS(Right Hand Side)。

<!-- 浪费太多时间，并不那么重要，不一定要研究它的实现，也记不住 -->

<!-- https://github.com/seajs/seajs/issues/588 -->

## Q & A

<details>
  <summary>AMD 的一些异议问题有了解吗？</summary>
  <div>
  主要是AMD的依赖前置问题，不管有无用到，列在依赖表中就会全部加载。define 的回调函数执行的时候，其实已经 deps 的模块已经加载并执行。在callback中使用 require 的时候，只是获得模块的exports引用。参考[前端模块化开发那点历史](https://github.com/seajs/seajs/issues/588)
  </div>
</details>

<details>
  <summary>说一下CMD，和AMD有什么区别</summary>
  <div>CMD是阿里的玉伯在开发 SeaJS 时提出的规范，这种模式整合了 CommonJS 和 AMD 的一些优点。主要的区别在于模块的执行时机，依赖的自动收集。AMD 的参考[与 RequireJS 的异同](https://github.com/seajs/seajs/issues/277)</div>
</details>

<details>
  <summary>AMD， CMD 加载方式的区别</summary>
  <div>AMD前置加载，CMD就近加载</div>
</details>
