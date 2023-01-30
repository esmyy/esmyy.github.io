# 介绍

版本：3.4.9

本文介绍几个重要的数据结构，形成一个概念，便于后续理解

## RouteConfig

实例化 VueRouter 的时候，配置示例如下

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

routes 称为 **路由配置数组**，通过 name 或者 path 作为 key 维护了 name-compnent，path-component 这样的对应关系。routes 的每个元素可以被称为 **路由配置对象**，它是有约定的配置格式的，如下

```js
type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent

interface RouteConfig {
  path: string
  component?: Component
  props?: boolean | Object | RoutePropsFunction
  name?: string
  children?: RouteConfig[]
  redirect?: RedirectOption
  alias?: string | string[]
  meta?: any
  beforeEnter?: NavigationGuard
  caseSensitive?: boolean
  pathToRegexpOptions?: PathToRegexpOptions
}
```

## RouteRecord

RouteConfig 是一个面向开发者配置使用的类型定义，它描述了 path-component 或者 name-component 之间的对应关系。

但是你懂的，用户使用配置，到了程序内部往往需要经过标准化，需要添加一些内部执行过程需要的标记等，这就是本小节要说的 RouteRecord 类型

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

和 RouteConfig 很像，去掉了 children 却添加了 parent，以前是爹牵着娃儿，现在是娃儿牵着爹。处理了 alias 的逻辑，添加了 regex 和 matchAs 等内容。总之，RouteRecord 和 RouteConfig 是关联的，是程序内部的路由配置对象。

## RawLocation

按照 Vue Router 官网的使用文档所说，当使用 [编程式的导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)，示例如下

```js
// 字符串
router.push("home");

// 对象
router.push({ path: "home" });

// 命名的路由
router.push({ name: "user", params: { userId: "123" } });

// 带查询参数，变成 /register?plan=private
router.push({ path: "register", query: { plan: "private" } });
```

这个时候，传递给 push 的这个参数，就叫做 RawLocation，它可以是一个字符串，或者是一个特定类型的对象，这个 raw 是说这是用户传进来的。

```js
export type RawLocation = string | Location
export interface Location {
  name?: string
  path?: string
  hash?: string
  query?: Dictionary<string | (string | null)[] | null | undefined>
  params?: Dictionary<string>
  append?: boolean
  replace?: boolean
}
```

以上，这个就是 编程式的导航 时的参数类型定义，它是告诉程序，我要怎么改变路由。

## Route

在路由使用时，还有一个重要的属性 $route，这个对象的类型定义如下

```js
export interface Route {
  path: string
  name?: string | null
  hash: string
  query: Dictionary<string | (string | null)[]>
  params: Dictionary<string>
  fullPath: string
  matched: RouteRecord[]
  redirectedFrom?: string
  meta?: any
}
```

表示的是当前路由的信息

## 总结

本文说的几个类型，后面在程序的源码学习中会频繁用到，先有个印象。 其实这几个类型，和开发时的使用环节是一一对应的

- RouteConfig: 是 Vue Router 实例化时的路由初始化配置；
- RouteRecord: 是 RouteConfig 标准化后的内部版本，还是描述的 path 或者 name 与组件之间的对应关系；
- RawLocation: 是切换路由时的 切换参数配置；
- Route: 描述的是当前路由的查询性信息
