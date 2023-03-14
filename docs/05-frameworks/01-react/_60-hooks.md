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
