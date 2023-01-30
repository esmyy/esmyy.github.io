# 三个模块

简要说明 VueRouter 构造函数及方法的定义，说明涉及到的 history 和 matcher 两个核心模块。

## VueRouter

代码很长，不要细究，大概浏览一遍，关注代码中的注释说明

```js
import { createMatcher } from "./create-matcher";
import { HashHistory } from "./history/hash";
import { HTML5History } from "./history/html5";
import { AbstractHistory } from "./history/abstract";
// ...

export default class VueRouter {
  static install: () => void;
  static version: string;
  static isNavigationFailure: Function;
  static NavigationFailureType: any;
  static START_LOCATION: Route;

  app: any;
  apps: Array<any>;
  ready: boolean;
  readyCbs: Array<Function>;
  options: RouterOptions;
  mode: string;
  history: HashHistory | HTML5History | AbstractHistory;
  matcher: Matcher;
  fallback: boolean;
  beforeHooks: Array<?NavigationGuard>;
  resolveHooks: Array<?NavigationGuard>;
  afterHooks: Array<?AfterNavigationHook>;

  constructor(options: RouterOptions = {}) {
    this.app = null;
    this.apps = [];
    this.options = options;
    this.beforeHooks = [];
    this.resolveHooks = [];
    this.afterHooks = [];

    // 关注点1：matcher 的初始化
    this.matcher = createMatcher(options.routes || [], this);

    // mode 设置大概知道即可
    let mode = options.mode || "hash";
    this.fallback =
      mode === "history" && !supportsPushState && options.fallback !== false;
    if (this.fallback) {
      mode = "hash";
    }
    if (!inBrowser) {
      mode = "abstract";
    }
    this.mode = mode;

    // 关注点2：history 的初始化
    switch (mode) {
      case "history":
        this.history = new HTML5History(this, options.base);
        break;
      case "hash":
        this.history = new HashHistory(this, options.base, this.fallback);
        break;
      case "abstract":
        this.history = new AbstractHistory(this, options.base);
        break;
      default:
        if (process.env.NODE_ENV !== "production") {
          assert(false, `invalid mode: ${mode}`);
        }
    }
  }

  // 关注点：router.match 就是 matcher.match
  match(raw: RawLocation, current?: Route, redirectedFrom?: Location): Route {
    return this.matcher.match(raw, current, redirectedFrom);
  }

  // 当前路由指向 history.current
  get currentRoute(): ?Route {
    return this.history && this.history.current;
  }

  init(app: any /* Vue component instance */) {
    process.env.NODE_ENV !== "production" &&
      assert(
        install.installed,
        `not installed. Make sure to call \`Vue.use(VueRouter)\` ` +
          `before creating root instance.`
      );

    this.apps.push(app);

    // set up app destroyed handler
    // https://github.com/vuejs/vue-router/issues/2639
    app.$once("hook:destroyed", () => {
      // clean out app from this.apps array once destroyed
      const index = this.apps.indexOf(app);
      if (index > -1) this.apps.splice(index, 1);
      // ensure we still have a main app or null if no apps
      // we do not release the router so it can be reused
      if (this.app === app) this.app = this.apps[0] || null;

      if (!this.app) this.history.teardown();
    });

    // main app previously initialized
    // return as we don't need to set up new history listener
    if (this.app) {
      return;
    }

    this.app = app;

    const history = this.history;

    if (history instanceof HTML5History || history instanceof HashHistory) {
      const handleInitialScroll = (routeOrError) => {
        const from = history.current;
        const expectScroll = this.options.scrollBehavior;
        const supportsScroll = supportsPushState && expectScroll;

        if (supportsScroll && "fullPath" in routeOrError) {
          handleScroll(this, routeOrError, from, false);
        }
      };
      const setupListeners = (routeOrError) => {
        history.setupListeners();
        handleInitialScroll(routeOrError);
      };

      // 在init中，主动调用了 history.transitionTo
      history.transitionTo(
        history.getCurrentLocation(),
        setupListeners,
        setupListeners
      );
    }

    history.listen((route) => {
      this.apps.forEach((app) => {
        app._route = route;
      });
    });
  }

  // 这下面几个是钩子注册
  beforeEach(fn: Function): Function {
    return registerHook(this.beforeHooks, fn);
  }

  beforeResolve(fn: Function): Function {
    return registerHook(this.resolveHooks, fn);
  }

  afterEach(fn: Function): Function {
    return registerHook(this.afterHooks, fn);
  }

  onReady(cb: Function, errorCb?: Function) {
    this.history.onReady(cb, errorCb);
  }

  onError(errorCb: Function) {
    this.history.onError(errorCb);
  }

  // push 和 replace 是做了一层封装，其实都是 history 模块上的对应方法
  push(location: RawLocation, onComplete?: Function, onAbort?: Function) {
    // $flow-disable-line
    if (!onComplete && !onAbort && typeof Promise !== "undefined") {
      return new Promise((resolve, reject) => {
        this.history.push(location, resolve, reject);
      });
    } else {
      this.history.push(location, onComplete, onAbort);
    }
  }

  replace(location: RawLocation, onComplete?: Function, onAbort?: Function) {
    // $flow-disable-line
    if (!onComplete && !onAbort && typeof Promise !== "undefined") {
      return new Promise((resolve, reject) => {
        this.history.replace(location, resolve, reject);
      });
    } else {
      this.history.replace(location, onComplete, onAbort);
    }
  }

  go(n: number) {
    this.history.go(n);
  }

  back() {
    this.go(-1);
  }

  forward() {
    this.go(1);
  }

  getMatchedComponents(to?: RawLocation | Route): Array<any> {
    const route: any = to
      ? to.matched
        ? to
        : this.resolve(to).route
      : this.currentRoute;
    if (!route) {
      return [];
    }
    return [].concat.apply(
      [],
      route.matched.map((m) => {
        return Object.keys(m.components).map((key) => {
          return m.components[key];
        });
      })
    );
  }

  resolve(
    to: RawLocation,
    current?: Route,
    append?: boolean
  ): {
    location: Location,
    route: Route,
    href: string,
    // for backwards compat
    normalizedTo: Location,
    resolved: Route,
  } {
    current = current || this.history.current;
    const location = normalizeLocation(to, current, append, this);
    const route = this.match(location, current);
    const fullPath = route.redirectedFrom || route.fullPath;
    const base = this.history.base;
    const href = createHref(base, fullPath, this.mode);
    return {
      location,
      route,
      href,
      // for backwards compat
      normalizedTo: location,
      resolved: route,
    };
  }

  getRoutes() {
    return this.matcher.getRoutes();
  }

  addRoute(parentOrRoute: string | RouteConfig, route?: RouteConfig) {
    this.matcher.addRoute(parentOrRoute, route);
    if (this.history.current !== START) {
      this.history.transitionTo(this.history.getCurrentLocation());
    }
  }

  addRoutes(routes: Array<RouteConfig>) {
    if (process.env.NODE_ENV !== "production") {
      warn(
        false,
        "router.addRoutes() is deprecated and has been removed in Vue Router 4. Use router.addRoute() instead."
      );
    }
    this.matcher.addRoutes(routes);
    if (this.history.current !== START) {
      this.history.transitionTo(this.history.getCurrentLocation());
    }
  }
}
```

对于属性，暂时只需要知道 matcher 和 history 是最核心的两个模块，VueRouter 只是在管理使用 matcher 和 history。

对于方法，关注一下这几类方法

- init：在 \_routerRoot 组件的 beforeCreate 调用，其内容除去 app 关系处理，就是主要是调用了一个 transitionTo 函数。

- 路由跳转方法：push, replace, go 等方法，是在 history 的基础上做了一层封装，需要知道对于 push 和 replace 是做了一层 Promise 封装。

- hook：afterEach , beforeEach , onReady 和 onError 等 hook 注册。

## matcher

matcher 由 createMatcher 创建，定义在 src/create-matcher.js

```js
import { createRouteMap } from "./create-route-map";
// ...

export function createMatcher(
  routes: Array<RouteConfig>,
  router: VueRouter
): Matcher {
  const { pathList, pathMap, nameMap } = createRouteMap(routes);

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function addRoute(parentOrRoute, route) {
    // ...
  }

  function getRoutes() {
    return pathList.map((path) => pathMap[path]);
  }

  function match(
    raw: RawLocation,
    currentRoute?: Route,
    redirectedFrom?: Location
  ): Route {
    // ...
  }

  function redirect(record: RouteRecord, location: Location): Route {
    // ...
  }

  function alias(
    record: RouteRecord,
    location: Location,
    matchAs: string
  ): Route {
    // ...
  }

  function _createRoute(
    record: ?RouteRecord,
    location: Location,
    redirectedFrom?: Location
  ): Route {
    // ...
  }

  return {
    match,
    addRoute,
    getRoutes,
    addRoutes,
  };
}
```

从定义上看，接收的参数是 路由配置数组 routes 和 router 实例，返回内容是一个 Matcher 类型的实例，返回的方法命名上像是路由管理相关。

在 createMatcher 里面唯一调用的方法是 createRouteMap，这个方法根据 routes 去生成 pathList、pathMap 和 nameMap，是分别维护了 path 和 compoennt, name 和 component 之间的对应关系。createRouteMap 的具体过程参考 路由表 。

matcher 里面的这些方法，都具有很重要的功能，在调试过程中用到时再了解其功能。

## history

history 有三种模式，分别是 HTML5History，HashHistory 和 AbstractHistory，这三个都基于 History 基础类。

```js
import { START, isSameRoute, handleRouteEntered } from "../util/route";

export class History {
  // ...省略属性定义

  constructor(router: Router, base: ?string) {
    this.router = router;
    this.base = normalizeBase(base);
    // start with a route object that stands for "nowhere"
    this.current = START;
    this.pending = null;
    this.ready = false;
    this.readyCbs = [];
    this.readyErrorCbs = [];
    this.errorCbs = [];
    this.listeners = [];
  }

  listen(cb: Function) {
    this.cb = cb;
  }

  onReady(cb: Function, errorCb: ?Function) {
    // ...
  }

  onError(errorCb: Function) {
    this.errorCbs.push(errorCb);
  }

  transitionTo(
    location: RawLocation,
    onComplete?: Function,
    onAbort?: Function
  ) {
    let route = this.router.match(location, this.current);
    // ...
    this.confirmTransition(
      route,
      () => {
        // ...
      },
      (err) => {
        // ...
      }
    );
  }

  confirmTransition(route: Route, onComplete: Function, onAbort?: Function) {
    // ...
  }

  updateRoute(route: Route) {
    this.current = route;
    this.cb && this.cb(route);
  }

  setupListeners() {
    // Default implementation is empty
  }

  teardown() {
    // ...
  }
}
```

在构造函数中，base 表示整个应用的基路径，在 normalizeBase 中，如果没有配置到 options 里面，则尝试从 `<base>` 标签中获取，处理成以 / 开头，去掉末尾的 /。

current 表示当前的路由，是其中最重要的一个属性，我们常用的 this.$route，就是指向的这个 current。current 初始值为 START，在 src/util/route.js，它是一个 Route 类型变量，这里直接给出其结果

```js
{
  fullPath: "/";
  hash: "";
  matched: [];
  meta: {
  }
  name: null;
  params: {
  }
  path: "/";
  query: {
  }
}
```

当调用方法去切换路由的时候，其中一件重要的事情，就是更新这个 current。

请注意 transitionTo 和 confirmTransition 的关系，前者会调用 matcher.match 去获取新的路由对象 route，然后执行 confirmTransition 是意味着确认状态从 current 切换到 route。

## 总结

本文简要地了解了 router, history 和 matcher

**matcher**

根据配置的 routes 生成了 pathList，nameMap 和 pathMap 三个内容，这两个 map 中分别保存了 name-component，path-componenent 的对应关系。

**history**

提供路由切换的方法，它负责 current($route) 信息的更新，根据调用 push 等 API 提供的参数，通过 transitionTo，调用 matcher.match 获取到这个 to 的状态，即 route，然后通过 confirmTransition 确认切换。

**router**

整合 history 和 matcher 的 API，提供开发者使用的方法，也方便 history 内部对 matcher 的调用。

总结起来，三个模块中在中间的是 history，router 对 history 的 API 做了一层简单封装，做了不同 mode 的统一，history 调用 matcher.match 生成新的 route。
