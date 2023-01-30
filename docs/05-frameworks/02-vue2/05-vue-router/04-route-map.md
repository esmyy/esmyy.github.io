# 路由表

在 Vue Router 实例化配置的时候，配置的是一个 routes 数组，类似下面这样

```js
const router = new VueRouter({
  routes: [
    {
      path: "/user",
      name: "user",
      component: User,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
  ],
});
```

实例化的过程中，根据 path，name 分别生成一个 map，这两个 map 我称之为路由表，分别是 nameMap(名称路由表) 和 pathMap(路径路由表)。

本文说明从 routes 到 nameMap 和 pathMap 的过程。

## RouteRecord

路由表里面的每一项是一个 RouteRecord 类型的对象，类型定义如下

```js
export interface RouteRecord {
  path: string
  regex: RegExp
  components: Dictionary<Component>
  instances: Dictionary<Vue>
  name?: string
  parent?: RouteRecord
  redirect?: RedirectOption
  matchAs?: string
  meta: any
  beforeEnter?: (
    route: Route,
    redirect: (location: RawLocation) => void,
    next: () => void
  ) => any
  props:
    | boolean
    | Object
    | RoutePropsFunction
    | Dictionary<boolean | Object | RoutePropsFunction>
}
```

nameMap 和 pathMap 就是下面这样的一个结构

```js
nameMap: {
  user: routeRecord1,
  product: routeRecord2
}

pathMap: {
  '/user': routeRecord1,
  '/product': routeRecord2
}
```

有如下示例

```js
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Parent = {
  template: `
    <div class="parent">
      <h2>Parent</h2>
      <router-view class="child"></router-view>
    </div>
  `,
};

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

const Qux = {
  template: `
    <div class="nested-parent">
      <h3>qux</h3>
      <router-link :to="{ name: 'quux' }">/quux</router-link>
      <router-view class="nested-child"></router-view>
    </div>
  `,
};

const Quux = {
  template: `<div>quux<router-link :to="{ name: 'quuy' }">go to quuy</router-link></div>`,
};

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/parent",
      component: Parent,
      children: [{ path: "foo", component: Foo, alias: "foo2" }],
    },
    { path: "bar", component: Bar },
    {
      path: "qux/:quxId",
      component: Qux,
      children: [{ path: "quux", name: "quux", component: Quux }],
    },
  ],
});

new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `,
}).$mount("#app");
```

生成的 pathMap 如下

```js
{
  "/bar": {
    alias: []
    components: {default: {…}}
    matchAs: undefined
    name: "bar"
    parent: undefined
    path: "bar"
    regex: /^\/bar(?:\/(?=$))?$/i
    // ...省略部分属性
  },
  "/parent": {
    alias: []
    components: {default: {…}}
    path: "/parent"
    regex: /^\/parent(?:\/(?=$))?$/i
    // ...省略部分属性
  },
  "/parent/foo": {
    alias: ["foo2"]
    components: {
      default: {template: "<div>foo</div>"}
    }
    matchAs: undefined
    name: "foo"
    parent: // 指向parent
    path: "/parent/foo"
    regex: /^\/parent\/foo(?:\/(?=$))?$/i
    // ...省略部分属性
  },
  "/parent/foo2": {
    components: {default: undefined}
    matchAs: "/parent/foo"
    name: undefined
    parent: // 指向parent
    path: "/parent/foo2"
    regex: /^\/parent\/foo2(?:\/(?=$))?$/i
    // ...省略部分属性
  },
  "/qux/:quxId": {
    alias: []
    components: {default: {…}}
    matchAs: undefined
    name: undefined
    parent: undefined
    path: "qux/:quxId"
    regex: /^\/qux\/((?:[^\/]+?))(?:\/(?=$))?$/i
    // ...省略部分属性
  },
  "/qux/:quxId/quux": {
    alias: []
    components: {default: {…}}
    matchAs: undefined
    name: "quux"
    parent: // 指向"qux/:quxId"
    path: "qux/:quxId/quux"
    regex: /^\/qux\/((?:[^\/]+?))\/quux(?:\/(?=$))?$/i
    // ...省略部分属性
  }
}
```

nameMap 结果如下

```js
nameMap: {
  bar: {
    // ...与上面的对应
  },
  foo: {
    // ...
  },
  quux: {
    // ...
  }
}
```

## 生成路由表

matcher 的创建是在 src/index.js 实例化的时候

```js
this.matcher = createMatcher(options.routes || [], this);
```

而 matcher 创建的核心之一就是做了路由表的生成

```js
export function createMatcher(
  routes: Array<RouteConfig>,
  router: VueRouter
): Matcher {
  const { pathList, pathMap, nameMap } = createRouteMap(routes);

  // ...省略方法定义
  return {
    match,
    addRoute,
    getRoutes,
    addRoutes,
  };
}
```

createRouteMap 定义在 src/create-route-map.js，

```js
export function createRouteMap(
  routes: Array<RouteConfig>,
  oldPathList?: Array<string>,
  oldPathMap?: Dictionary<RouteRecord>,
  oldNameMap?: Dictionary<RouteRecord>,
  parentRoute?: RouteRecord
): {
  pathList: Array<string>,
  pathMap: Dictionary<RouteRecord>,
  nameMap: Dictionary<RouteRecord>,
} {
  // the path list is used to control path matching priority
  const pathList: Array<string> = oldPathList || [];
  // $flow-disable-line
  const pathMap: Dictionary<RouteRecord> = oldPathMap || Object.create(null);
  // $flow-disable-line
  const nameMap: Dictionary<RouteRecord> = oldNameMap || Object.create(null);

  routes.forEach((route) => {
    addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
  });

  // ensure wildcard routes are always at the end
  for (let i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === "*") {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList,
    pathMap,
    nameMap,
  };
}
```

对每个配置项调用了 addRouteRecord 进行转换，这个函数没有返回，显然其会对几个参数进行设置。在 routes 处理完成后，对生成的 pathList 进行了一下顺序调整，将通配符 \* 项放到最后。

addRouteRecord 定义如下

```js
function addRouteRecord(
  pathList: Array<string>,
  pathMap: Dictionary<RouteRecord>,
  nameMap: Dictionary<RouteRecord>,
  route: RouteConfig,
  parent?: RouteRecord,
  matchAs?: string
) {
  // ...@s1: normalize
  const { path, name } = route;
  const pathToRegexpOptions: PathToRegexpOptions =
    route.pathToRegexpOptions || {};
  const normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === "boolean") {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  const record: RouteRecord = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    alias: route.alias
      ? typeof route.alias === "string"
        ? [route.alias]
        : route.alias
      : [],
    instances: {},
    enteredCbs: {},
    name,
    parent,
    matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
        ? route.props
        : { default: route.props },
  };

  // ...@s2: 嵌套路由处理
  if (route.children) {
    route.children.forEach((child) => {
      const childMatchAs = matchAs
        ? cleanPath(`${matchAs}/${child.path}`)
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  // ...@s3: 添加到map
  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    const aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (let i = 0; i < aliases.length; ++i) {
      const alias = aliases[i];
      const aliasRoute = {
        path: alias,
        children: route.children,
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || "/" // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== "production" && !matchAs) {
      warn(
        false,
        `Duplicate named routes definition: ` +
          `{ name: "${name}", path: "${record.path}" }`
      );
    }
  }
}
```

如代码中的标记注释所示，将内容分成三部分去理解

- route 标准化
- 嵌套路由的处理
- 路由表的生成

### route 标准化

```js
const { path, name } = route;
const pathToRegexpOptions: PathToRegexpOptions =
  route.pathToRegexpOptions || {};
const normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

if (typeof route.caseSensitive === "boolean") {
  pathToRegexpOptions.sensitive = route.caseSensitive;
}

const record: RouteRecord = {
  path: normalizedPath,
  regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
  components: route.components || { default: route.component },
  alias: route.alias
    ? typeof route.alias === "string"
      ? [route.alias]
      : route.alias
    : [],
  instances: {},
  enteredCbs: {},
  name,
  parent,
  matchAs,
  redirect: route.redirect,
  beforeEnter: route.beforeEnter,
  meta: route.meta || {},
  props:
    route.props == null
      ? {}
      : route.components
      ? route.props
      : { default: route.props },
};
```

这里是根据 route 进行了一些转换处理，内部表示每个路由的对象是一个 RouteRecord 类型的对象，比 routes 里面配置的复杂多了。说一下几个需要关注的属性的设置：

alias 做了一个数组化的处理，以支持两种类型的配置，支持多个别名；

matchAs 和 alias 是对应的，比如说示例中的 /parent/foo 和 /parent/foo2，foo 具有别名 foo2，foo2 匹配为 foo，这个 matchAs，就是匹配为，代表着原来叫啥名；

parent 是针对嵌套路由的，对于一级路由是 undefined；

path 属性调用 normalizePath 做了标准化，这个函数如下

```js
function normalizePath(
  path: string,
  parent?: RouteRecord,
  strict?: boolean
): string {
  if (!strict) path = path.replace(/\/$/, "");
  if (path[0] === "/") return path;
  if (parent == null) return path;
  return cleanPath(`${parent.path}/${path}`);
}

function cleanPath(path: string): string {
  return path.replace(/\/\//g, "/");
}
```

非严格模式下去掉尾部的/，配置时 children 里面的如果是/开头会被当做根路由而不做拼接，按照官方的说法，这是 让你充分的使用嵌套组件而无须设置嵌套的路径，对于//的情况处理成/。

regex 属性由 compileRouteRegex 生成

```js
import Regexp from "path-to-regexp";

function compileRouteRegex(
  path: string,
  pathToRegexpOptions: PathToRegexpOptions
): RouteRegExp {
  const regex = Regexp(path, [], pathToRegexpOptions);
  return regex;
}
```

调用 Regexp 将生成 path 的正则表示，这是为了在路由变化时进行路由的匹配，是个很关键的内容。具体 Regexp 的使用参考 Regexp (opens new window)。

### 嵌套路由处理

```js
// ...@s2: 嵌套路由处理
if (route.children) {
  route.children.forEach((child) => {
    const childMatchAs = matchAs
      ? cleanPath(`${matchAs}/${child.path}`)
      : undefined;
    addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
  });
}
```

这里做了一个 matchAs 的处理，父级具有别名的时候，matchAs 做一个拼接处理，然后就是递归调用 addRouteRecord 继续进行路由处理。

### 更新 map

```js
// ...@s3: 更新map
if (!pathMap[record.path]) {
  pathList.push(record.path);
  pathMap[record.path] = record;
}

if (route.alias !== undefined) {
  const aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
  for (let i = 0; i < aliases.length; ++i) {
    const alias = aliases[i];
    const aliasRoute = {
      path: alias,
      children: route.children,
    };
    addRouteRecord(
      pathList,
      pathMap,
      nameMap,
      aliasRoute,
      parent,
      record.path || "/" // matchAs
    );
  }
}

if (name) {
  if (!nameMap[name]) {
    nameMap[name] = record;
  } else if (process.env.NODE_ENV !== "production" && !matchAs) {
    warn(
      false,
      `Duplicate named routes definition: ` +
        `{ name: "${name}", path: "${record.path}" }`
    );
  }
}
```

首先是将当前路由的 path 添加到 pathList，patchList 就是一个简单的数组。然后保存每个路由配置标准化处理后的 path。而 pathMap 和 nameMap 分别是以 path 和 name 为键值保存了 record 对象。

对于别名的处理，如果有别名则递归调用 addRouteRecord，注意设置的 matchAs 参数设置为了 record.path。

## 总结

处理的过程并不复杂，就是将用户的路由配置，进行了一个标准化处理，转换为统一的 RouteRecord 结构，打平了层级，标准化了 path，通过 path 生成了匹配的 regex。

在了解完路由表生成的过程之后，其实还只是知其然，还不知其所以然，具体为什么要这样，这些内容又如何使用，是下一步需要深究的内容。

三个产物是 pathList, pathMap 和 nameMap，map 里面每个属性值是 RouteRecord 对象，而 RouteRecord 对象，记录了每个路由下应该渲染的组件。当从一个页面切换到另一个页面时，就是在路由表里面找到对应的 record，然后提取相应的组件，去渲染。
