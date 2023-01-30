# 输出结构

有以下代码, app.js

```js
import "./style.less";
import print from "./print";
print("male");
const AGE = 100;
```

print.js

```js
const dict = {
  male: "MALE",
  female: "FEMALE",
};

module.exports = function print(prop) {
  console.log("value is ", dict[prop]);
};
```

可以看到，这里混用了 ES6 Module 和 CommonJS。 以 app.js 作为入口，开发模式下使用了 devtool: 'eval'的一个输出示例如下

```js
(function (modules) {
  // The module cache
  var installedModules = {}; // The require function

  function __webpack_require__(moduleId) {
    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    // Create a new module (and put it into the cache)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });

    // Execute the module function
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded

    module.l = true; // Return the exports of the module

    return module.exports;
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules; // expose the module cache

  __webpack_require__.c = installedModules; // define getter function for harmony exports

  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
    }
  };

  // define __esModule on exports
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require

  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"];
          }
        : function getModuleExports() {
            return module;
          };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  // __webpack_public_path__
  __webpack_require__.p = "";

  return __webpack_require__((__webpack_require__.s = "./app.js"));
})({
  "./app.js": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    eval(
      '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ "./style.less");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./print.js");\n/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_print__WEBPACK_IMPORTED_MODULE_1__);\n\n\n_print__WEBPACK_IMPORTED_MODULE_1___default()(\'male\');\nvar AGE = 100;\n\n//# sourceURL=webpack:///./app.js?'
    );
  },

  "./print.js": function (module, exports) {
    eval(
      "var dict = {\n  male: 'MALE',\n  female: 'FEMALE'\n};\n\nmodule.exports = function print(prop) {\n  conssole.log('value is ', dict[prop]);\n};\n\n//# sourceURL=webpack:///./print.js?"
    );
  },

  "./style.less": function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    eval(
      "__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.less?"
    );
  },
});
```

这是一个 IIFE，这个函数称为引导函数，参数 modules 是在 compilation 阶段的 compilation.modules 转换而来。 可以看到，代码中的模块，被保存在 `installedModules` 这样一个对象中，`__webpack_require__` 等方法，用于获取模块。 在加载后，代码依次从 webpack_require.s 开始，提取模块，使用 eval 执行，从而完成整个执行过程。 不做太细的分析了，总结一下引导函数中定义的部分函数的作用

|       函数        |                                           作用                                            |
| :---------------: | :---------------------------------------------------------------------------------------: |
|  webpack_require  |                                       用于模块加载                                        |
| webpack_require.r | 给 webpack_exports（也就是 module.exports) 定义 \_\_esModule，用来标记模块是否是 ES6 模块 |
| webpack_require.n |     分析一个模块是否是 ES6 Module，如果是返回 module['default']，如果不是返回 module      |
