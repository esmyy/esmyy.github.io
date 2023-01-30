# match

定义在 src/create-matcher.js

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

raw 就是我们使用 router.push 时传递的参数，标准化得到 location 对象之后，就根据 location 的 name 和 path，从 nameMap 或者 pathMap 中找到对应的 record(RouteRecord 对象)，然后根据 record 调用\_createRoute 去生成新的 route。

主要关注这几个方面的内容:

normalizeLocation

matchRoute

createRoute

## normalizeLocation

normalizeLocation 是将 RawLocation 类型的参数标准化为一个 Location 类型的结果，是一个用户输入处理的过程，代码如下

```js
export function normalizeLocation(
  raw: RawLocation,
  current: ?Route,
  append: ?boolean,
  router: ?VueRouter
): Location {
  let next: Location = typeof raw === "string" ? { path: raw } : raw;

  // named target
  // 使用路由名称跳转时的处理
  if (next._normalized) {
    return next;
  } else if (next.name) {
    next = extend({}, raw);
    const params = next.params;
    if (params && typeof params === "object") {
      next.params = extend({}, params);
    }
    return next;
  }

  // relative params
  // 相对参数跳转，比如说对于/bar/:id的从/bar/1跳转到/bar/2
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    const params: any = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      const rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, `path ${current.path}`);
    } else if (process.env.NODE_ENV !== "production") {
      warn(false, `relative params navigation requires a current route.`);
    }
    return next;
  }

  // 处理 path
  const parsedPath = parsePath(next.path || "");
  const basePath = (current && current.path) || "/";
  const path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  // 处理 query
  const query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  // 处理 hash
  let hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== "#") {
    hash = `#${hash}`;
  }

  return {
    _normalized: true,
    path,
    query,
    hash,
  };
}
```

这个 raw，理解为调用 push(location)等方法传递的参数即可，根据使用，我们知道这个可能有多种情况，而且 Vue Router 支持根据 name 进行跳转，normalizeLocation 就是结合 current ，对 location 这个参数做一个标准化，设置 name, path, query 和 hash 等各部分组成。

## matchRoute

关注下面根据 path 进行路由匹配的过程

```js
function match(
  raw: RawLocation,
  currentRoute?: Route,
  redirectedFrom?: Location
): Route {
  const location = normalizeLocation(raw, currentRoute, false, router);
  const { name } = location;

  if (name) {
    // ...
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
}
```

假设我们是这样调用

```js
this.$router.push({
  path: "/foo",
});
```

那么就是要在 pathMap 里面，找到和 /foo 这个路由匹配的记录，匹配的方法 matchRoute 如下

```js
function matchRoute(regex: RouteRegExp, path: string, params: Object): boolean {
  const m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (let i = 1, len = m.length; i < len; ++i) {
    const key = regex.keys[i - 1];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || "pathMatch"] =
        typeof m[i] === "string" ? decode(m[i]) : m[i];
    }
  }

  return true;
}
```

这里其实核心是两件事情，一个是 通过 reocrd.regex 判断是否匹配，另一个是对 params 进行处理，比如说/bar/:id 这样的路由里面，id 动态参数的设置。

## createRoute

定义在 src/create-matcher.js

```js
import { createRoute } from './util/route'

function _createRoute (
  record: ?RouteRecord,
  location: Location,
  redirectedFrom?: Location
): Route {
  if (record && record.redirect) {
    return redirect(record, redirectedFrom || location)
  }
  if (record && record.matchAs) {
    return alias(record, location, record.matchAs)
  }
  return createRoute(record, location, redirectedFrom, router)
}
这个函数的最终目的，就是要调用 createRoute 来创建新的 route，createRoute 函数在 src/util/route.js

export function createRoute (
  record: ?RouteRecord,
  location: Location,
  redirectedFrom?: ?Location,
  router?: VueRouter
): Route {
  const stringifyQuery = router && router.options.stringifyQuery

  let query: any = location.query || {}
  try {
    query = clone(query)
  } catch (e) {}

  const route: Route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  }
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery)
  }
  return Object.freeze(route)
}
```

就是根据 location 和 record 创建新的 route，对于 redirect 和 alias 的场景，单独进行了处理。这里需要特别关注的是 matched 属性，它通过 formatMatch 函数生成

```js
function formatMatch(record: ?RouteRecord): Array<RouteRecord> {
  const res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}
```

也就是说，matched 保存的是匹配的 record 记录，而且是所有相关的各级路由的 record。 这里尤其需要关注的是，matched 数组中元素的顺序关系，是先父后子。

## 总结

我们在调用 router.push(location)等函数时传递的参数，它是一个页面路径，或者是一个约定的 Location 类型对象，match 函数就是根据这个参数，在 nameMap 或者 pathMap 中找到对应的 record 路由配置描述，根据 record 去生成新的 route 对象，然后将 route 返回。
