# Fiber

Fiber 之前的更新，React 处理一次 setState()（首次渲染）时会有两个阶段：

调度阶段（Reconciler）：这个阶段 React 用新数据生成新的 Virtual DOM，遍历 Virtual DOM，然后通过 Diff 算法，快速找出需要更新的元素，放到更新队列中去。
渲染阶段（Renderer）：这个阶段 React 根据所在的渲染环境，遍历更新队列，将对应元素更新。在浏览器中，就是更新对应的 DOM 元素。

当组件比较复杂时，必须等到整棵 Virtual DOM 计算完成之后才释放，占用了资源，导致页面交互出现问题。

React Fiber，就是为了解决渲染复杂组件时严重影响用户和浏览器交互的问题。

将渲染工作分割成块并将其分散到多个帧中

<https://zhuanlan.zhihu.com/p/424967867>

ExpirationTime 的作用

说明前者的优先级更高。那么我把前者称为高优先级更新（交互引起），后者称为低优先级更新（其他更新）。

​
fiber 只是一种调度方式，他让 react 可以在调和阶段中断任务，vdom 这些都是没有变化的，不会说有了调度算法，我就可以为所欲为的去使用真实 dom 了

调和器主要作用就是在组件状态变更时，调用组件树各组件的 render 方法，渲染，卸载组件，而 Fiber 使得应用可以更好的协调不同任务的执行，调和器内关于高效协调的实现，我们可以称它为调度器（Scheduler）。

## Q & A

<details>
  <summary>Fiber出现的背景，解决了什么问题</summary>
  <div>在 Fiber 之前，处理一次 setState 更新，生成新的 VDOM Tree 后进行新旧对比，深度优先遍历所有节点，等整棵 VDOM Tree 对比完成才能释放资源，浏览器渲染更新到页面。问题在于这个对比过程可能过于复杂，耗时很长，超过了浏览器渲染一帧的间隔，导致交互被阻断，页面卡顿。
</div>
</details>

<details>
  <summary>Fiber Tree 和 Virtual DOM 的区别</summary>
  <div>Virtual DOM Tree偏向于内容本身的标记，而Fiber Tree除了内容，还有很多的上下文信息，侧重于状态的标记，以一个类似链表的结构，去实现状态快照。</div>
</details>

<details>
  <summary>Fiber基本逻辑</summary>
  <div>将一次更新任务拆分到一个个时间片里，允许暂停，中止和分批处理等，将一次更新拆分到多个时间片，中间给交互和渲染处理的机会。</div>
</details>

<details>
  <summary>如何避免低优先级的工作一直被高优先级的工作打断</summary>
  <div>FiberNode 上设置了 ExpirationTime，虽然是低优先级，但也有截止时间，到期了会强制执行。 </div>
</details>

<details>
  <summary>ExpirationTime 的作用</summary>
  <div>确保低优先级任务有机会被执行，对相近更新设置同样的 ExpirationTime 以实现批量更新。同时对低优先级，高优先级的任务，都是有一个误差区间的，高10ms, 第25ms，在这段时间内更新设置同一个 ExpirationTime，以实现批量更新。</div>
</details>

<details>
  <summary>什么是 WorkInProgress Tree </summary>
  <div>保存当前更新中的进度快照，用于下一个时间片的断点恢复，是两次更新之间的中间状态。Fiber Tree 和 WorkInProgress Tree之间形成一个双缓冲，这样可以复用上一次更新的一些节点。</div>
</details>

<details>
  <summary>触发更新后 Fiber 做了什么</summary>
  <div>将更新的内容(payload)保存Fiber节点的updateQueue里面，之后执行调度，由于每个更新都标记了到期时间，可以在当前时间片内判断是否执行该更新，批量执行到期的时间。调度过程是计算并生成 WorkInProgress Tree的过程，在 WorkInProgress Tree 和 Fiber Tree的对比过程中，得到一个 effect list，用于记录由于 state 和 props 改变引起的工作类型，。</div>
</details>

## 参考

[Fiber 介绍](https://zhuanlan.zhihu.com/p/424967867)
