# mount

`created` 是实例创建完成，创建完成之后就到了使用，也就是 mount 的过程。

## 前置

在\_init 函数 created 之后，最后一步是调用 vm.$mount 挂载，这是 mount 的开始

```js
Vue.prototype._init = function (options?: Object) {
  // ...省略
  callHook(vm, "created");

  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
};
```

在 created 之后，判断是否设置了 el，如果设置了执行 mount，这里是根实例的挂载，本文我们就从根实例的挂载开始，继续了解主体流程。

## $mount

$mount 是一个实例方法，定义在最外层的入口 src/platforms/web/entry-runtime-with-compiler.js，如下

```js
const mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el);
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== "production" &&
      warn(
        `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
      );
    return this;
  }

  const options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    let template = options.template;
    if (template) {
      if (typeof template === "string") {
        if (template.charAt(0) === "#") {
          template = idToTemplate(template);
          // ...
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== "production") {
          warn("invalid template option:" + template, this);
        }
        return this;
      }
    } else if (el) {
      template = getOuterHTML(el);
    }

    // template to rener functions
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        mark("compile");
      }

      const { render, staticRenderFns } = compileToFunctions(
        template,
        {
          outputSourceRange: process.env.NODE_ENV !== "production",
          shouldDecodeNewlines,
          shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments,
        },
        this
      );
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== "production" && config.performance && mark) {
        mark("compile end");
        measure(`vue ${this._name} compile`, "compile", "compile end");
      }
    }
  }
  return mount.call(this, el, hydrating);
};
```

首先是判断是否存在 el，获取对应的 DOM 元素，这是找到最终需要插入的位置。

往下是获取要编译的模板，获取到模板之后，通过 compileToFunctions 进行编译并最终返回 render 函数。函数最后调用了缓存的在 `src/platforms/web/entry-runtime.js` 中定义的$mount，其代码如下

```js
import { mountComponent } from "core/instance/lifecycle";

Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};
```

mountComponent 定义在 `src/core/instance/lifecycle.js` 文件，这是 mount 过程的核心。

## mountComponent

```js
export function mountComponent(
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    // ...如果设置了template dev模式下报错(因为这是runtime only)
  }

  callHook(vm, "beforeMount");

  let updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== "production" && config.performance && mark) {
    updateComponent = () => {
      // ...
    };
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(
    vm,
    updateComponent,
    noop,
    {
      before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, "beforeUpdate");
        }
      },
    },
    true /* isRenderWatcher */
  );
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, "mounted");
  }
  return vm;
}
```

在这个函数里面调用了 `beforeMount` 和 `mounted` 两个钩子，那么在这里，我们需要回答以下两个问题

- 从 created 到 beforeMount 做了什么？
- 从 beforeMount 到 mounted 做了什么？

## created -> beforeMount

做了两件事情

- 通过 el 查找到要插入的位置
- template 转换为 render 函数

`created` 是创建完成，而 `beforeMount` 则表示的是我确认了有我的位置，也准备好了 render 函数。

当然，这里的 “准备好了” 实际上还差很多，并不是像我们用直接添加 DOM 元素时，新元素什么都设置好了只差 appendChild 那种 ”准备好了“。

## beforeMount -> mounted

在 mountComponent 设置了 vm.$el保存了对目标位置的引用，要真正将生成的 DOM 元素插入到页面，那么会有对vm.$el 进行 RHS 的地方，在这个函数中我们并没有看到。

在整个 mountComponent 函数中，除了 callhook 对调用钩子函数和 new Watcher，其他涉及到 vm 的都只是 LHS 查询，都没有用到 vm.$el，也没有事件监听或者是代理拦截一类的。

**我们可以猜测得知，与挂载 DOM，与后面组件更新相关的逻辑，就只能是在 new Watcher 中了。**

在 new Watcher 中，通过其初始化所传递的参数，可以猜测得到，其会调用 updateComponent，去做第一次的初始化渲染。

为了避免注意力过于分散，关于 `Watcher` 的内容，不在这里深入。目前只需要知道，要定位到真正 mount 的地方，要了解组件更新，需要以 **new Watcher** 作为切入口。

## 总结

本文只是比较简略地说明了一下 mount 的过程，了解到的从 created 到 mountComponent 所做的事情。

- created 到 beforeMount: el 挂载位置元素的获取，template 转换为 render 函数
- beforeMount 到 mounted: 实例化 Watcher，通过 Watcher 设置响应式更新，第一次渲染，并实际挂载

对于 template 编译的过程我们尚未深入研究，这是编译器相关的事情，单独一章说明。

在编译之后，整个的 mount 过程，都与 Watcher 这个构造函数相关，这是在编译之后继续深入研究的最重要的切入点。
