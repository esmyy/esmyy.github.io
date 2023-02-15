# CommonJS

[CommonJS](https://nodejs.org/docs/latest-v16.x/api/modules.html) 规范主要用于服务器端模块化代码组织

| 名称     | 适用侧       | 关键属性                |
| -------- | ------------ | ----------------------- |
| CommonJS | Server(Node) | module.exports, require |

module 和 require 并不是 ECMAScript 规范里面的关键字，module 是一个对象，而 require 是一个函数

```js
console.log(typeof module); // object
console.log(typeof require); // function
```

module 和 require 的本质是对象，对象无非就是方法，属性这些内容。

## 包装器函数

在模块代码执行之前，Node.js 会对模块做一个包装，包装结构像下面这样

```js
(function (exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
});
```

通过这样一个包装函数传递，传递与模块相关的参数值，在每个模块中都可以用 module, exports 代表当前模块的内容，使用非常方便。

## module

创建一个 `a.js`

```js title="a.js"
module.exports = {
  name: "esmyy",
};
```

定义一个 `demo.js` 引用 `a.js`

```js title="demo.js"
const a = require("./a");
console.log(module);
```

打印结果如下

```js
Module {
  id: '.',
  path: '/Users/esmyy/demo',
  filename: '/Users/esmyy/demo/demo.js',
  loaded: false,
  // 导出对象
  exports: {},
  // 记录了导入的模块
  children: [
    Module {
      id: '/Users/esmyy/demo/a.js',
      path: '/Users/esmyy/demo',
      exports: {
        name: 'esmyy'
      },
      filename: '/Users/esmyy/demo/a.js',
      loaded: true,
      children: [],
      paths: [
        '/Users/esmyy/demo/node_modules',
        '/Users/esmyy/node_modules',
        '/Users/node_modules',
        '/node_modules'
      ]
    }
  ],
  // 模块查找路径
  paths: [
    '/Users/esmyy/demo/node_modules',
    '/Users/esmyy/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
```

属性比较少，没有复杂的内容，比较特别的是这个 loaded 属性，从这里看它的作用不是很明显，其实是用来标记是否已经加载，解决循环依赖的问题。

## require

require 的结构如下

```ts
interface Require {
  (id: string): any;
  resolve: RequireResolve; // 根据 module.paths 找到 require 的模块，返回模块路径或者抛出”模块不存在“错误
  cache: Dict<NodeModule>; // 入口文件及已经导入的模块缓存
  /**
   * @deprecated
   */
  extensions: RequireExtensions;
  main: Module | undefined; // 程序入口文件，node demo.js 就是 demo.js
}
```

定义在 `node/lib/internal/modules/cjs` 文件中

```js title="demo.js"
const a = require("./a");
console.log(require);
```

require 函数如下

```js
[Function: require] {
  // 就是根据 module.paths 去找到 require 的模块，返回模块路径或者抛出”模块不存在“错误
  resolve: [Function: resolve] { paths: [Function: paths] },
  // 程序入口文件，node demo.js 就是 demo.js
  main: Module {
    id: '.',
    path: '/Users/fengpeng/demo',
    exports: {},
    filename: '/Users/fengpeng/demo/demo.js',
    loaded: false,
    children: [ [Module] ],
    paths: [
      '/Users/fengpeng/demo/node_modules',
      '/Users/fengpeng/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  // Deprecated
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  // 入口文件及已经导入的模块缓存
  cache: [Object: null prototype] {
    '/Users/fengpeng/demo/demo.js': Module {
      id: '.',
      path: '/Users/fengpeng/demo',
      exports: {},
      filename: '/Users/fengpeng/demo/demo.js',
      loaded: false,
      children: [Array],
      paths: [Array]
    },
    '/Users/fengpeng/demo/a.js': Module {
      id: '/Users/fengpeng/demo/a.js',
      path: '/Users/fengpeng/demo',
      exports: [Object],
      filename: '/Users/fengpeng/demo/a.js',
      loaded: true,
      children: [],
      paths: [Array]
    }
  }
}
```

没有难以理解的内容，各属性和其作用也很容易对应上。

## 源码概览

module 和 require 的结构都比较简单，并没有难以理解的内容。但做一次深入一些的归纳，对于这些小模块，我还是要快速看一下源码。
源码位于 `node/lib/internal/modules/cjs`

```js title="node/lib/internal/modules/cjs"
// Loads a module at the given file path. Returns that module's
// `exports` property.
Module.prototype.require = function (id) {
  validateString(id, "id");
  if (id === "") {
    throw new ERR_INVALID_ARG_VALUE("id", id, "must be a non-empty string");
  }
  requireDepth++;
  try {
    return Module._load(id, this, /* isMain */ false);
  } finally {
    requireDepth--;
  }
};
```

`Module._load` 简化如下

```js title="Module._load"
// Check the cache for the requested file.
// 1. If a module already exists in the cache: return its exports object.
// 2. If the module is native: call
//    `BuiltinModule.prototype.compileForPublicLoader()` and return the exports.
// 3. Otherwise, create a new module for the file and save it to the cache.
//    Then have it load  the file contents before returning its exports
//    object.
Module._load = function (request, parent, isMain) {
  // 1. 计算路径
  const filename = relativeResolveCache[relResolveCacheIdentifier];

  // 2. 判断是否缓存，从缓存加载
  const cachedModule = Module._cache[filename];
  if (cachedModule) {
    return cachedModule.exports;
  }

  // 3. 判断内置模块并加载内置模块
  if (StringPrototypeStartsWith(request, "node:")) {
    // ...
    const id = StringPrototypeSlice(request, 5);
    const module = loadBuiltinModule(id, request);
    return module.exports;
  }

  // 这个功能是什么？
  const filename = Module._resolveFilename(request, parent, isMain);
  const cachedModule = Module._cache[filename];
  if (cachedModule !== undefined) {
    updateChildren(parent, cachedModule, true);
    if (!cachedModule.loaded) {
      const parseCachedModule = cjsParseCache.get(cachedModule);
      // 为什么 loaded 还要继续？
      if (!parseCachedModule || parseCachedModule.loaded)
        return getExportsForCircularRequire(cachedModule);
      parseCachedModule.loaded = true;
    } else {
      return cachedModule.exports;
    }
  }

  const mod = loadBuiltinModule(filename, request);
  if (
    mod?.canBeRequiredByUsers &&
    BuiltinModule.canBeRequiredWithoutScheme(filename)
  ) {
    return mod.exports;
  }

  // Don't call updateChildren(), Module constructor already does.
  const module = cachedModule || new Module(filename, parent);

  if (isMain) {
    process.mainModule = module;
    module.id = ".";
  }

  reportModuleToWatchMode(filename);

  Module._cache[filename] = module;
  if (parent !== undefined) {
    relativeResolveCache[relResolveCacheIdentifier] = filename;
  }

  let threw = true;
  try {
    module.load(filename);
    threw = false;
  } finally {
    if (threw) {
      delete Module._cache[filename];
      if (parent !== undefined) {
        delete relativeResolveCache[relResolveCacheIdentifier];
        const children = parent?.children;
        if (ArrayIsArray(children)) {
          const index = ArrayPrototypeIndexOf(children, module);
          if (index !== -1) {
            ArrayPrototypeSplice(children, index, 1);
          }
        }
      }
    } else if (
      module.exports &&
      !isProxy(module.exports) &&
      ObjectGetPrototypeOf(module.exports) ===
        CircularRequirePrototypeWarningProxy
    ) {
      ObjectSetPrototypeOf(module.exports, ObjectPrototype);
    }
  }

  return module.exports;
};
```

require 对象里面需要关注的就是 require.cache，这是一个对象，保存了执行过程中导入的所有**非 built-in**模块。

多次 require 的时候，发现已经有了，就直接 return 了，这就是所谓的多次导入只执行一次。

## require vs module.require

## 循环引用问题解决

## 参考

[Node.js Modules](https://nodejs.org/docs/latest-v16.x/api/modules.html)
