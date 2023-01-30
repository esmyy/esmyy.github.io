# 路由切换

切换过程的核心是 transitionTo，那么切换过程中是如何实现 router.history 内部状态和 window.history 状态的对应，当使用 go 方法切换页面时，又是如何实现 router 内部状态的切换的呢？这一切，要从 init 说起。

## init

在 \_routerRoot 实例初始化的时候，调用了 router.init，这个是是从默认的 START 切换到我们实际的路由，是第一次做路由的切换。

```js
init (app: any /* Vue component instance */) {
  // ...
  const history = this.history

  if (history instanceof HTML5History || history instanceof HashHistory) {
    const handleInitialScroll = routeOrError => {
      const from = history.current
      const expectScroll = this.options.scrollBehavior
      const supportsScroll = supportsPushState && expectScroll

      if (supportsScroll && 'fullPath' in routeOrError) {
        handleScroll(this, routeOrError, from, false)
      }
    }
    const setupListeners = routeOrError => {
      history.setupListeners()
      handleInitialScroll(routeOrError)
    }
    history.transitionTo(
      history.getCurrentLocation(),
      setupListeners,
      setupListeners
    )
  }

  // ...
}
```

为了简化理解，对于 transitionTo，直接当做是下面这样的一个调用即可

history.transitionTo(history.getCurrentLocation(), history.setupListeners, history.setupListeners)
这样只要关注 history 就行了，这三个参数定义在 src/history/html5.js

```js
export class HTML5History extends History {
  // ...

  setupListeners() {
    if (this.listeners.length > 0) {
      return;
    }

    const router = this.router;
    const expectScroll = router.options.scrollBehavior;
    const supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    const handleRoutingEvent = () => {
      const current = this.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      const location = getLocation(this.base);
      if (this.current === START && location === this._startLocation) {
        return;
      }

      this.transitionTo(location, (route) => {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener("popstate", handleRoutingEvent);
    this.listeners.push(() => {
      window.removeEventListener("popstate", handleRoutingEvent);
    });
  }

  go(n: number) {
    window.history.go(n);
  }

  push(location: RawLocation, onComplete?: Function, onAbort?: Function) {
    const { current: fromRoute } = this;
    this.transitionTo(
      location,
      (route) => {
        pushState(cleanPath(this.base + route.fullPath));
        handleScroll(this.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  }

  replace(location: RawLocation, onComplete?: Function, onAbort?: Function) {
    const { current: fromRoute } = this;
    this.transitionTo(
      location,
      (route) => {
        replaceState(cleanPath(this.base + route.fullPath));
        handleScroll(this.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  }

  getCurrentLocation(): string {
    return getLocation(this.base);
  }
}

export function getLocation(base: string): string {
  let path = window.location.pathname;
  if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
    path = path.slice(base.length);
  }
  return (path || "/") + window.location.search + window.location.hash;
}
```

getCurrentLocation 是获取到 window.location.pathname 去掉 base 前缀的部分。

setupListeners 是注册了 popstate 函数的监听，在 popstate 发生的时候做出响应，也就是在用户通过浏览器的前进回退按钮切换之后，调用 transitionTo 执行 router 内部的状态切换。

router.go 直接执行 history.go，这个时候会触发 popstate 事件，然后再进入 transitionTo 的处理。这里其实是做了一个统一，history 的前进后退功能，属于用户可选择主动触发的，我们只能是监听事件再进行处理。

## transitionTo

定义在 src/history/base.js

```js
transitionTo (
  location: RawLocation,
  onComplete?: Function,
  onAbort?: Function
) {
  let route
  // catch redirect option https://github.com/vuejs/vue-router/issues/3201
  try {
    route = this.router.match(location, this.current)
  } catch (e) {
    this.errorCbs.forEach(cb => {
      cb(e)
    })
    // Exception should still be thrown
    throw e
  }
  const prev = this.current
  this.confirmTransition(
    route,
    () => {
      this.updateRoute(route)
      onComplete && onComplete(route)
      this.ensureURL()
      this.router.afterHooks.forEach(hook => {
        hook && hook(route, prev)
      })

      // fire ready cbs once
      if (!this.ready) {
        this.ready = true
        this.readyCbs.forEach(cb => {
          cb(route)
        })
      }
    },
    err => {
      if (onAbort) {
        onAbort(err)
      }
      if (err && !this.ready) {
        // Initial redirection should not mark the history as ready yet
        // because it's triggered by the redirection instead
        // https://github.com/vuejs/vue-router/issues/3225
        // https://github.com/vuejs/vue-router/issues/3331
        if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
          this.ready = true
          this.readyErrorCbs.forEach(cb => {
            cb(err)
          })
        }
      }
    }
  )
}
```

transitionTo 有两个很分明的步骤：

- 获取 route: 调用 router.match 获取到 route
- 执行切换: 使用 route 调用 confirmTransition 进行切换

分别在 match 和 confirmTransition 小节讲解。

## match

这个 router.match ，其实就是 matcher.match 函数，如下

```js
function match(
  raw: RawLocation,
  currentRoute?: Route,
  redirectedFrom?: Location
): Route {
  const location = normalizeLocation(raw, currentRoute, false, router);
  const { name } = location;

  if (name) {
    const record = nameMap[name];
    if (process.env.NODE_ENV !== "production") {
      warn(record, `Route with name '${name}' does not exist`);
    }

    // 使用 `name` 跳转，但是实际上在配置的 routes 中并没有对应的配置
    if (!record) return _createRoute(null, location);

    // 提取 path 中的参数，如对于 '/bar/:id'，这里返回是 ['id']
    const paramNames = record.regex.keys
      .filter((key) => !key.optional)
      .map((key) => key.name);

    if (typeof location.params !== "object") {
      location.params = {};
    }

    // 通过name跳转时，参数会同步，比如说/foo/:id 到 /bar/:id，指定
    if (currentRoute && typeof currentRoute.params === "object") {
      for (const key in currentRoute.params) {
        if (!(key in location.params) && paramNames.indexOf(key) > -1) {
          location.params[key] = currentRoute.params[key];
        }
      }
    }

    location.path = fillParams(
      record.path,
      location.params,
      `named route "${name}"`
    );
    return _createRoute(record, location, redirectedFrom);
  } else if (location.path) {
    location.params = {};
    for (let i = 0; i < pathList.length; i++) {
      const path = pathList[i];
      const record = pathMap[path];
      if (matchRoute(record.regex, location.path, location.params)) {
        return _createRoute(record, location, redirectedFrom);
      }
    }
  }
  // no match
  return _createRoute(null, location);
}
```

raw 就是使用 router.push 时传递的参数，标准化得到 location 对象之后，就根据 location 的 name 和 path，从 nameMap 或者 pathMap 中找到对应的 record(RouteRecord 对象)，然后根据 record 调用 \_createRoute 去生成新的 route。match 的内容较多，在单独的文章中讲解，此处只需要知道它是根据 push 等方法传递的参数去生成一个 route 对象即可。

## confirmTransition

在通过 match 获取  了新的 route 之后，就是调用 confirmTransition 真正去执行切换了，为了方便区别，我们称新的这个 route 为 newRoute。confirmTransition 定义在 src/history/base.js

```js
confirmTransition (route: Route, onComplete: Function, onAbort?: Function) {
  const current = this.current
  this.pending = route
  const abort = err => {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this.errorCbs.length) {
        this.errorCbs.forEach(cb => {
          cb(err)
        })
      } else {
        warn(false, 'uncaught error during route navigation:')
        console.error(err)
      }
    }
    onAbort && onAbort(err)
  }
  const lastRouteIndex = route.matched.length - 1
  const lastCurrentIndex = current.matched.length - 1
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
  ) {
    this.ensureURL()
    return abort(createNavigationDuplicatedError(current, route))
  }

  const { updated, deactivated, activated } = resolveQueue(
    this.current.matched,
    route.matched
  )

  const queue: Array<?NavigationGuard> = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(m => m.beforeEnter),
    // async components
    resolveAsyncComponents(activated)
  )

  const iterator = (hook: NavigationGuard, next) => {
    if (this.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, (to: any) => {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this.ensureURL(true)
          abort(createNavigationAbortedError(current, route))
        } else if (isError(to)) {
          this.ensureURL(true)
          abort(to)
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route))
          if (typeof to === 'object' && to.replace) {
            this.replace(to)
          } else {
            this.push(to)
          }
        } else {
          // confirm transition and pass on the value
          next(to)
        }
      })
    } catch (e) {
      abort(e)
    }
  }

  runQueue(queue, iterator, () => {
    // wait until async components are resolved before
    // extracting in-component enter guards
    const enterGuards = extractEnterGuards(activated)
    const queue = enterGuards.concat(this.router.resolveHooks)
    runQueue(queue, iterator, () => {
      if (this.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this.pending = null
      onComplete(route)
      if (this.router.app) {
        this.router.app.$nextTick(() => {
          handleRouteEntered(route)
        })
      }
    })
  })
}
```

首先定义了 abort 函数，然后判断 route 和 current 是否是相同的路由，如果是则执行 ensureURL。然后是调用 resolveQueue 标记了相关组件 updated , deactivated, 还是 activated，queue 队列排列了切换过程中依次要执行的动作，构造 iterator，调用 runQueue 按照 queue 中的顺序执行。

下面分成两个部分说明

- 生成导航守卫方法队列
- 导航流程

## 生成导航守卫方法队列

通过 resolveQueue 对 current.matched 和 route.matched 中的元素进行对比分类

```js
function resolveQueue(
  current: Array<RouteRecord>,
  next: Array<RouteRecord>
): {
  updated: Array<RouteRecord>,
  activated: Array<RouteRecord>,
  deactivated: Array<RouteRecord>,
} {
  let i;
  const max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i),
  };
}
```

current 和 route 其实是 current.matched 和 route.matched，而 matched 数组里面元素的顺序关系是先父后子，是统一的，因此在比较的时候从前往后比较即可。

有三种情况:

- [0, i - 1]之间的元素对应的组件，在先后的页面中都需要，因此需要更新
- next.matched 在[i, max)之间的组件，在上一个页面是没有在用的因此需要激活
- current.matched 在[i, max)之间的组件，在新页面没有使用，因此需要停用

resolveQueue 的作用，说白了是做分类，区分要继续用的组件，新启用的组件，不再使用的组件。 在对组件进行了分类之后，下一步是生成守卫队列

```js
const queue: Array<?NavigationGuard> = [].concat(
  // in-component leave guards
  extractLeaveGuards(deactivated),
  // global before hooks
  this.router.beforeHooks,
  // in-component update hooks
  extractUpdateHooks(updated),
  // in-config enter guards
  activated.map((m) => m.beforeEnter),
  // async components
  resolveAsyncComponents(activated)
);
```

queue 数组里面的每个方法都是一个 NavigationGuard 导航守卫，这个在官网有较为详细介绍 navigation guards (opens new window)，定义如下

```js
export type NavigationGuard<V extends Vue = Vue> = (
  to: Route,
  from: Route,
  next: NavigationGuardNext<V>
) => any
```

每个守卫方法被调用时都是这样的一个参数格式。日常最常用的应该是 beforeEach 和 afterEach，这里的 router.beforeHooks 就是开发时注册的所有 beforeEach 函数组成的数组。

两个 extractXXXGuards，就是提取对应的钩子函数，等价于下面这个内容

```js
// extractLeaveGuards(deactivated)
extractGuards(deactivated, "beforeRouteLeave", bindGuard, true);

// extractUpdateHooks(updated)
extractGuards(updated, "beforeRouteUpdate", bindGuard);

function bindGuard(guard: NavigationGuard, instance: ?_Vue): ?NavigationGuard {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}
```

extractGuards 相关函数如下

```js
function extractGuards(
  records: Array<RouteRecord>,
  name: string,
  bind: Function,
  reverse?: boolean
): Array<?Function> {
  const guards = flatMapComponents(records, (def, instance, match, key) => {
    const guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map((guard) => bind(guard, instance, match, key))
        : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

// 对 matched 里面的每个元素(RouteRecord类型，称为record)，
function flatMapComponents(
  matched: Array<RouteRecord>,
  fn: Function
): Array<?Function> {
  return flatten(
    matched.map((m) => {
      return Object.keys(m.components).map((key) =>
        fn(m.components[key], m.instances[key], m, key)
      );
    })
  );
}

// def是组件定义options，key是配置时命名视图的 name 或者 'default'，
// 这里是 extend 是为了获取到合并后的同名钩子函数数组
function extractGuard(
  def: Object | Function,
  key: string
): NavigationGuard | Array<NavigationGuard> {
  if (typeof def !== "function") {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key];
}

// 打平成一维数组
function flatten(arr: Array<any>): Array<any> {
  return Array.prototype.concat.apply([], arr);
}
```

beforeRouteLeave 和 beforeRouteUpdate 是所谓的组件内守卫，而 extractGuards 就是提取组件从当前状态到下一状态过程中的钩子，比如要变成 deactivated 的组件，中间就有 beforeRouteLeave 这个时机。总的来说 —— 找到钩子（这里做了一个 extend 去应用 global 钩子），做上下文 bind。

### 导航流程

构造 iterator，然后调用 runQueue 并根据 queue 执行切换。runQueue 定义在 src/util/async.js

```js
export function runQueue(
  queue: Array<?NavigationGuard>,
  fn: Function,
  cb: Function
) {
  const step = (index) => {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], () => {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}
```

对 queue 队列中的守卫，逐个调用迭代函数 fn，当守卫方法都执行完之后，调用回调函数，这里的 fn 回调即 iterator 迭代方法，如下

```js
const iterator = (hook: NavigationGuard, next) => {
  if (this.pending !== route) {
    return abort(createNavigationCancelledError(current, route));
  }
  try {
    hook(route, current, (to: any) => {
      if (to === false) {
        // next(false) -> abort navigation, ensure current URL
        this.ensureURL(true);
        abort(createNavigationAbortedError(current, route));
      } else if (isError(to)) {
        this.ensureURL(true);
        abort(to);
      } else if (
        typeof to === "string" ||
        (typeof to === "object" &&
          (typeof to.path === "string" || typeof to.name === "string"))
      ) {
        // next('/') or next({ path: '/' }) -> redirect
        abort(createNavigationRedirectedError(current, route));
        if (typeof to === "object" && to.replace) {
          this.replace(to);
        } else {
          this.push(to);
        }
      } else {
        // confirm transition and pass on the value
        next(to);
      }
    });
  } catch (e) {
    abort(e);
  }
};
```

迭代器就是调用钩子函数，根据回调的参数控制 next 执行，而 next 方法就是执行队列中的下一个钩子。以 beforeEach 钩子为例对照看一下使用和定义

```js
router.beforeEach((to, from, next2) => {
  // ...
});
```

from 和 to 就是前一个路由和现在的路由，这两个都只是提供给开发人员进行判断使用的，比如说用来做路由鉴权，而提供 next2 方法给开发人员控制迭代，

终止：next2(false)
抛出错误: next2(new Error('hahhh'))
重定向: next2({ path: '/login' })
确认完成调整: next()

这里涉及几个函数，createNavigationAbortedError 和 createNavigationRedirectedError 就简单理解为执行终止的回调即可。需要说明的是 ensureURL，定义在 src/history/html5.js

```js
ensureURL (push?: boolean) {
  if (getLocation(this.base) !== this.current.fullPath) {
    const current = cleanPath(this.base + this.current.fullPath)
    push ? pushState(current) : replaceState(current)
  }
}
```

ensureURL 首先是判断了 current 是否与当前页面地址 location 一致，不一致就切换到 current，pushState 或者 replaceState，背后都是 history.pushState 的调用，之后会触发 popState 事件，进而再次进入 transitionTo 逻辑。在这里的手动调用 next2(false) 函数取消的情况，这个判断是不成立的。

## onComplete

在 queue 中的钩子都正常执行完成之后，runQueue 会调用 cb

```js
() => {
  // wait until async components are resolved before
  // extracting in-component enter guards
  const enterGuards = extractEnterGuards(activated)
  const queue = enterGuards.concat(this.router.resolveHooks)
  runQueue(queue, iterator, () => {
    if (this.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    this.pending = null
    onComplete(route)
    if (this.router.app) {
      this.router.app.$nextTick(() => {
        handleRouteEntered(route)
      })
    }
  })
})
```

这里就是再次通过 runQueue 执行组件进入相关的钩子，这里我们只关注 onComplete 的执行

```js
this.confirmTransition(
  route,
  () => {
    this.updateRoute(route)
    onComplete && onComplete(route)
    this.ensureURL()
    this.router.afterHooks.forEach(hook => {
      hook && hook(route, prev)
    })

    // fire ready cbs once
    if (!this.ready) {
      this.ready = true
      this.readyCbs.forEach(cb => {
        cb(route)
      })
    }
  },
  err => {
  }
）

updateRoute (route: Route) {
  this.current = route
  this.cb && this.cb(route)
}
```

updateRoute 是真正进行 current 切换的地方，这是 router.history 内部的状态切换，完成内部状态切换之后，再调用上一级的 onComplete 进行 window.history 外部状态的切换

```js
transitionTo (
  location: RawLocation,
  onComplete?: Function,
  onAbort?: Function
) {
  // ...
  this.confirmTransition(
    route,
    () => {
      this.updateRoute(route)
      onComplete && onComplete(route)
      // ...
    },
    // ...
  )
}
```

对于初始化时 init 中的调用，这个 onComplete 是在 src/history/html5.js 中的 setupListeners，这个前面已经讲过，就是注册 popstate 监听函数。而对于其他情况如使用 push 过程中调用的 transitionTo，onComplete 定义如下

```js
push (location: RawLocation, onComplete?: Function, onAbort?: Function) {
  const { current: fromRoute } = this
  this.transitionTo(location, route => {
    pushState(cleanPath(this.base + route.fullPath))
    handleScroll(this.router, route, fromRoute, false)
    onComplete && onComplete(route)
  }, onAbort)
}
```

其实是在这里的 pushState 进行了 window.history 状态的切换

```js
export function pushState(url?: string, replace?: boolean) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  const history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      const stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, "", url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, "", url);
    }
  } catch (e) {
    window.location[replace ? "replace" : "assign"](url);
  }
}
```

如上所示，就是根据 push 或 replace 调用相应的 history 切换函数。

## 总结

路由切换过程的核心函数是 transitionTo 和 transitionConfirm

- transitionTo

通过在调用 push(location)等方法中传入的 location 参数，调用 matcher.match 获取到下一个 route 对象，而 route 对象我们需要知道其类型定义对应 Route

```js
export interface Route {
  matched: RouteRecord[];
  // ...
}
```

在 route 中有个核心的属性 matched，保存了与当前这个路由有关的 record 记录，而 record 可以简单理解为是路由表，维护了当前路由和组件的对应关系。也就是说，有了这个 route 就相当于拿到了相关的组件。

- transitionConfirm

const { updated, deactivated, activated } = resolveQueue(this.current.matched,route.matched)
const queue: Array<?NavigationGuard> = [].concat(/_省略，构造钩子数组_/)
runQueue(queue, iterator, () => { /_省略_/)
首先根据 route 和 current，对涉及的组件进行对比分类，确认哪些是不再用，哪些是重用，哪些是新启用的组件，然后去构造钩子队列，各组件根据自己的下一状态，该调用啥钩子都给加到 queue 里来，最后是调用 runQueue 依次取执行这些钩子。

go 和 push，replace 的区别：go 是 window.history 先更新，然后再调用 transitionTo 执行内部状态切换更新 router.history，后两者是反过来的。

:::tips
总结起来，就是根据参数生成新的路由 route，生成 route 之后就知道新路由要渲染哪些组件，然后新旧路由进行比较，分类旧路由已有各组件的下一状态，新旧路由组件执行钩子，完成新页面渲染。最后是应用内 history 和浏览器 history 状态同步。
:::
