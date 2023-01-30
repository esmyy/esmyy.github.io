# createElement 的作用是根据中间代码生成 vnode

## 前置内容

编译生成的中间代码，调用的\_c 是$createElement 的别名，定义在 src/core/instance/render.js，是在 vm.\_init 执行的时调用的 initRender 中定义的

```js
import { createElement } from "../vdom/create-element";
// ...

export function initRender(vm: Component) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees
  const options = vm.$options;
  const parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
  const renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false);
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true);

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  const parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== "production") {
    defineReactive(
      vm,
      "$attrs",
      (parentData && parentData.attrs) || emptyObject,
      () => {
        !isUpdatingChildComponent && warn(`$attrs is readonly.`, vm);
      },
      true
    );

    // options._parentListeners是什么时候定义的。
    defineReactive(
      vm,
      "$listeners",
      options._parentListeners || emptyObject,
      () => {
        !isUpdatingChildComponent && warn(`$listeners is readonly.`, vm);
      },
      true
    );
  } else {
    defineReactive(
      vm,
      "$attrs",
      (parentData && parentData.attrs) || emptyObject,
      null,
      true
    );
    defineReactive(
      vm,
      "$listeners",
      options._parentListeners || emptyObject,
      null,
      true
    );
  }
}
```

\_c 和$createElement 实质都是 createElement，两者的 alwaysNormalize 默认参数不同，用途不同。

vm.\_c：编译模板之后，在中间代码中会使用 this.\_c 来创建节点
$createElement：使用自定义 render 方法时，比如 render: (h) => h(App) 这个 h 就是 $createElement

## createElement

createElement 函数定义在 src/core/vdom/create-element.js

```js
export function createElement(
  context: Component,
  tag: any,
  data: any,
  children: any,
  normalizationType: any,
  alwaysNormalize: boolean
): VNode | Array<VNode> {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}
```

createElement 对\_createElement 的封装，这层封装是做参数处理，套了一层对不同的调用场景做适配，保持核心逻辑的一致。 注意下 normalizationType，$createElement 这个别名调用时默认传递的就是 ALWAYS_NORMALIZE，而 vm.\_c 调用时则不是。

\_createElement 核心代码如下

```js
export function _createElement(
  context: Component,
  tag?: string | Class<Component> | Function | Object,
  data?: VNodeData,
  children?: any,
  normalizationType?: number
): VNode | Array<VNode> {
  // ...

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  let vnode, ns;
  if (typeof tag === "string") {
    let Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      vnode = new VNode(
        config.parsePlatformTagName(tag),
        data,
        children,
        undefined,
        undefined,
        context
      );
    } else if (
      (!data || !data.pre) &&
      isDef((Ctor = resolveAsset(context.$options, "components", tag)))
    ) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) applyNS(vnode, ns);
    if (isDef(data)) registerDeepBindings(data);
    return vnode;
  } else {
    return createEmptyVNode();
  }
}
```

就是在创建 VNode 之前，先做一些标准化的处理，就跟函数常常需要先判断参数，处理参数一样。 当然，两种标准化都是有条件的，并不是每个节点都需要进行标准化。

老实说，这里的标准化，是蛮难理解的。 大多数的介绍的文章都只是给注释做个翻译，并没有解释诸多疑问，标准化做了什么，为什么要做标准化，两种标准化的区别又是什么？

## simpleNormalizeChildren

```js
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
export function simpleNormalizeChildren(children: any) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}
```

这个函数就是通过 Array.prototype.concat 函数把 children 打平成一维数组。

注释里面的描述是不具体的

> **a functional component may return an Array instead of a single root**

只是说可能出现，而不是具体举例，这就让人非常头大了。

## normalizeChildren

当调用 $createElement 时会执行 normalizeChildren

```js
// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
export function normalizeChildren(children: any): ?Array<VNode> {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
    ? normalizeArrayChildren(children)
    : undefined;
}
```

判断 children 是否 isPrimitive(表示 string，number，symbol，boolean)，如果是则当做文本节点创建。 如果 chldren 是数组，则调用 normalizeArrayChildren 去遍历处理。

请关注返回值 `?Array<VNode>`，normalizeChildren 做的事情，就是将 children 转换为 vnode 数组。 因为手写 render 时，交给 createElement 的 children 并不是 vnode，需要转换为 vnode。

举个例子来看一下，如下

```js
const app = new Vue({
  render: function (createElement) {
    return createElement("div", "test");
  },
});

app.$mount("#app");
```

此时 children 参数是 "test"，则当做一个纯文本节点调用 createTextVNode 生成下面的 VNode 数组

```js
children = [
  { // VNode
    asyncFactory: undefined
    asyncMeta: undefined
    children: undefined
    componentInstance: undefined
    componentOptions: undefined
    context: undefined
    data: undefined
    elm: undefined
    fnContext: undefined
    fnOptions: undefined
    fnScopeId: undefined
    isAsyncPlaceholder: false
    isCloned: false
    isComment: false
    isOnce: false
    isRootInsert: true
    isStatic: false
    key: undefined
    ns: undefined
    parent: undefined
    raw: false
    tag: undefined
    text: "test"
    child: (...)
  }
]
```

## 创建 vnode

标准化之后，就可以生成 vnode 了，当 tag 为字符串时

```js
export function _createElement(
  context: Component,
  tag?: string | Class<Component> | Function | Object,
  data?: VNodeData,
  children?: any,
  normalizationType?: number
): VNode | Array<VNode> {
  normalize(); // ...

  if (typeof tag === "string") {
    let Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag),
        data,
        children,
        undefined,
        undefined,
        context
      );
    } else if (
      (!data || !data.pre) &&
      isDef((Ctor = resolveAsset(context.$options, "components", tag)))
    ) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
}
```

对于保留的元素(如 div,span)和未注册的元素，直接调用 new VNode 实例化创建了普通的 vnode。对于已注册的组件调用 createComponent 创建了组件类型的 vnode，这个时候其第一个参数是 Ctor，这个函数自然也返回一个 vnode，不过由于组件类别需要更多的设置和处理而独立出来了。

对于 direct component options / constructor，场景之一是直接调用$createElement，这个时候 tag 是组件的 options，如

```js
const app = new Vue({
  render: (h) => h(App),
});

app.$mount("#app");
```

这种情况则调用 createComponent 去注册。

## 总结

createElement 调用一般有两种方式，中间代码中通过 \_c 调用，或者通过自定义 render 方法调用。

按照模板编译生成中间代码这种情况看，createElement 是根据编译生成的中间代码，生成 vnode.

:::tips
createElement 的作用就是创建 vnode 元素，所以我称作 createVNodeElement，这更能体现其作用
:::
