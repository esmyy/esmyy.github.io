# 编译入口

说明如何通过构建配置找到编译入口，并对入口层次结构进行总结

## 查找入口

查看 package.json 文件，有以下内容

```js
"scripts": {
  "build": "node scripts/build.js",
  "release": "bash scripts/release.sh",
}
```

根据 release 命令，查看 scripts/release.sh，其功能是 build and update packages，其中有一条命令如下

```js
VERSION=$VERSION npm run build
```

这是构建命令，进一步查看 build 命令对应的脚本 scripts/build.js

```js
let builds = require("./config").getAllBuilds();

// filter builds via command line arg
if (process.argv[2]) {
  const filters = process.argv[2].split(",");
  builds = builds.filter((b) => {
    return filters.some(
      (f) => b.output.file.indexOf(f) > -1 || b._name.indexOf(f) > -1
    );
  });
} else {
  // filter out weex builds by default
  builds = builds.filter((b) => {
    return b.output.file.indexOf("weex") === -1;
  });
}

build(builds);

function build(builds) {
  let built = 0;
  const total = builds.length;
  const next = () => {
    buildEntry(builds[built])
      .then(() => {
        built++;
        if (built < total) {
          next();
        }
      })
      .catch(logError);
  };

  next();
}
```

其中指定了入口在 scripts/config.js 里面，查看内容

```js
const builds = {
  // ...
  // Runtime+compiler CommonJS build (CommonJS)
  "web-full-cjs-dev": {
    entry: resolve("web/entry-runtime-with-compiler.js"),
    dest: resolve("dist/vue.common.dev.js"),
    format: "cjs",
    env: "development",
    alias: { he: "./entity-decoder" },
    banner,
  },
  "web-full-cjs-prod": {
    entry: resolve("web/entry-runtime-with-compiler.js"),
    dest: resolve("dist/vue.common.prod.js"),
    format: "cjs",
    env: "production",
    alias: { he: "./entity-decoder" },
    banner,
  },
  // ...其他入口配置
};
```

学习时选择 `src/platforms/web/entry-runtime-with-compiler.js` 切入即可，具体差别官网 [这里](https://v2.cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6) 有详细说明，不再赘述。

## 由外向里

从编译入口 src/platforms/web/entry-runtime-with-compiler.js 开始，定位 Vue 构造函数

### 1. src/platforms/web/entry-runtime-with-compiler.js

```js
import Vue from "./runtime/index";
// ...省略中间的拓展

export default Vue;
```

### 2. src/platforms/web/entry-runtime.js

```js
import Vue from "core/index";
// ...省略中间的拓展

export default Vue;
```

### 3. src/core/index.js

```js
import Vue from "./instance/index";
// ...省略中间的拓展

export default Vue;
```

### 4. src/core/instance/index.js

```js
import { initMixin } from "./init";
import { stateMixin } from "./state";
import { renderMixin } from "./render";
import { eventsMixin } from "./events";
import { lifecycleMixin } from "./lifecycle";
import { warn } from "../util/index";

function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

export default Vue;
```

这个 instance/index.js 是构造函数定义的地方，从最外层的入口到这里总共有 4 个层级，我称之为

- compiler-entry
- runtime-entry
- core-entry
- instance-entry

**每个层级做了什么呢？**

为了回答这个问题，从里向外反过来去看，这样关注点由少到多，去看每一层加了什么内容。

## 由里向外

从里向外看每一层做了什么

### 1. instance-entry

```js
import { initMixin } from "./init";
import { stateMixin } from "./state";
import { renderMixin } from "./render";
import { eventsMixin } from "./events";
import { lifecycleMixin } from "./lifecycle";
import { warn } from "../util/index";

function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

export default Vue;
```

instance 是 实例 的意思，命名上体现了它的作用，即生成实例，或者说构造函数。

根据定义构造函数的方式，我们可以猜测到，下面的一堆 mixin 做的事情，无非是定义静态变量、方法或者是拓展 prototype，如实例化过程中调用的\_init，显然就是定义到原型上的。

### 2. core-entry

```js
import Vue from "./instance/index";
import { initGlobalAPI } from "./global-api/index";
import { isServerRendering } from "core/util/env";
import { FunctionalRenderContext } from "core/vdom/create-functional-component";

initGlobalAPI(Vue);

// 判断的是 vue-server-renderer 里面设置的 VUE_ENV = 'server'
Object.defineProperty(Vue.prototype, "$isServer", {
  get: isServerRendering,
});

Object.defineProperty(Vue.prototype, "$ssrContext", {
  get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  },
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, "FunctionalRenderContext", {
  value: FunctionalRenderContext,
});

Vue.version = "__VERSION__";

export default Vue;
```

初始化了全局 API，定义$isServer标记和$ssrContext 上下文。可以看到，这一层是 Vue 构造函数本身的属性拓展，是“跨端”相关的设置。

### 3. runtime-entry

```js
import Vue from "core/index";

// ...
Vue.prototype.__patch__ = inBrowser ? patch : noop;

Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};
```

对于 weex，entry-runtime 在是另一个文件 src/platforms/weex/runtime/index.js，平台的区分在文件上就已经分开了。对于 src/platforms/web/runtime/index.js，它是针对 web 的，在这个前提下，它是运行环境是 client 还是 server 的差异处理。

#### 4. compiler-entry

简化后描述如下

```js
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  if (el === document.body || el === document.documentElement) {
    // ...dev状态下提示
  }

  const options = this.$options
  if (!options.render) {
    template = resolveTempate(); // 1. resolve template/el

    if (template) {
      const { render, staticRenderFns } = compileToFunctions((template, {
        // ...一堆参数
      }, this) // 2. convert to render function
    }
    options.render = render
    options.staticRenderFns = staticRenderFns
  }
}
```

先获取到 template，然后调用 compileToFunctions 生成 render 函数。如其文件命名所示，是在 runtime entry 的基础上加了一个 compiler，拥有在运行时将 template 转换为 render 方法的编译能力。

### 总结

本文简单说明了 Vue 构造函数定义，层层拓展的层次关系，对于入口层次结构有一个直观的了解。

每个层次的作用如下

```js
// 1. 构造函数定义
src/core/instance/index.js

// 2. Global API 及 SSR 相关标记位、ctx 等定义
src/core/index.js

// 3. 两个文件之间是平台的差异处理，entry-runtime.js 文件内部是运行环境的处理
src/platforms/web/entry-runtime.js
src/platforms/weex/entry-runtime.js

// 4. 模板编译能力
src/platforms/web/entry-runtime-with-compiler.js
```
