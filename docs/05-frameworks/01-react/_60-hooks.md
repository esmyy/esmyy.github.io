# Hooks

## ahooks

## react-use

## useState / useReducer

### 状态保存

React Hooks 的状态保存在一个链表中，

FiberNode.memoizedState 指向的是链表的头部，链表按照 Hooks 的调用顺序，保存了各个 hook 定义的变量，

### 状态更新

每一个更新的调用，在 FiberNode.queue 队列中推入一项，然后再批量计算，这也是 setState 会合并的一个原因
每一个 state，对应 FiberNode.memoizedState 链表上的一个节点，

## useEffect

FiberNode.updateQueue

```js
const effect: Effect = {
  tag, // 用来标识依赖项有没有变动
  create, // 用户使用useEffect传入的函数体
  destroy, // 上述函数体执行后生成的用来清除副作用的函数
  deps, // 依赖项列表
  next: (null: any),
};
```

useEffect 中的 deps 相等性是如何判断的
与链表节点 Effect.deps 中保存的是否一致（基本数据类型的值是否相同；对象的引用是否相同），如果一致，则在 Effect.tag 标记上 NoHookEffect。

每次组件渲染时会对每一个 useEffect 标记需要做怎样的处理，是清除还是更新还是不需要更新，在渲染完成后遍历链表根据 tag 去执行操作
是先清除上一轮的副作用，然后再执行本轮的 effect 的。

## useCallback

这个函数的作用是什么？究竟如何理解，每次传入的函数是否是一个一样的？难道不是每次都返回一个新的吗

## useMemo 的作用

## Q & A

<details>
  <summary>hooks带来的哪些好处</summary>
  <div>逻辑复用，代码组织更灵活，写法更简单，代码复用更加可追踪，依赖关系比mixins更加清晰。</div>
</details>

<details>
  <summary>列举常用的hooks</summary>
  <div>useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect </div>
</details>

<details>
  <summary>Hooks 和 hoc 的区别，为什么不用 hoc</summary>
  <div>HOC我几乎不怎么使用。HOC往往意外着属性的透传或者做一些处理，很麻烦，而且命名起来也有些麻烦，我觉得逻辑还是有些绕的。其实已经不用再特别在意HOC概念了，很多时候都是类似的使用方式，但是没有特别在意是否是HOC。</div>
</details>

<details>
  <summary>useEffect(fn, []) 和 componentDidMount 有什么差异</summary>
  <div></div>
</details>

<details>
  <summary>useLayoutEffect </summary>
  <div></div>
</details>

<details>
  <summary>hooks的本质是什么？</summary>
  <div>闭包</div>
</details>

<details>
  <summary>为什么要求hooks必须在顶层调用</summary>
  <div>这与react的实现机制有关。对于一个hooks而言，比如useState，如果有两个连续的useState都使用了同样的参数，那么如何区分谁是谁呢？对于编译器来说，只能通过顺序关系来标识，是一个较好的方式。hooks在一个Fiber节点中，以链表的形式存在，通过链表维护了先后顺序关系。</div>
</details>

<details>
  <summary>useLayoutEffect和useEffect的区别</summary>
  <div>useEffect是在视图更新之后，再去异步执行。而useLayoutEffect会在视图更新之前同步执行。如果更改了数据，会更新虚拟DOM，触发重新渲染。一般不做特别细致的分析，useLayoutEffect很少使用，只在出现闪烁的时候考虑使用即可。</div>
  [参考](https://juejin.cn/post/6844904008402862094)
</details>

<details>
  <summary>useLayoutEffect做SSR会有什么问题？</summary>
  <div></div>
</details>

[参考](https://juejin.cn/post/6844904205371588615)
