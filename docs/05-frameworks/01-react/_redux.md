# Redux

<details>
  <summary>Redux的三个原则是什么</summary>
  <div>单一事实来源，存储在单个store里面。状态只读，改变状态的唯一方式是触发一个动作。使用纯函数进行更改 —— 返回值只取决于参数。</div>
</details>

<details>
  <summary>Redux的组成</summary>
  <div>Action, Reducer, Store, View</div>
</details>

<details>
  <summary>Redux的优点及应用</summary>
  <div>可预测的结果。组件之间，页面之间的共享。特定的模式，便于维护。在团队中更加一致</div>
</details>

<details>
  <summary>Redux中的connect有什么作用</summary>
  <div>connect通过context连接Provider中的store，通过store.getState获取整个store tree上所有的state。</div>
</details>

<details>
  <summary>Redux和Vuex的区别</summary>
  <div>Redux和Reducer是很像的，不过Vuex里面弱化了Action和Reducer的概念，去掉了switch分发等逻辑。但是都是单一的数据源，变化可追踪，两者只是设计模式上有所区别，核心原理是一样的。</div>
</details>

<details>
  <summary>React中数据持久化有什么实践？</summary>
  <div>在使用redux的基础上，可以使用redux-persist，这样能够将数据管理统一起来。</div>
</details>
