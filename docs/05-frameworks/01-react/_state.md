# 状态管理库

mobx, redux, redux-toolkit

<details>
  <summary>setState是同步还是异步？</summary>
  <div>一般来说，setState是异步的，批量更新。在18之前的版本中，在setTimeout，addEventListener等函数中，是同步更新的。在18以后，都是异步批量更新的。连续添加的setState，会推送到一个节点的memorizedState的队列里面去</div>
</details>

<details>
  <summary>为什么不能直接给state赋值，修改state的值？</summary>
  <div>
    这只是实现方式的不同，本身就不是这样设计的。setState的过程中不仅包含了赋值这个过程，中间还有很多的处理，更新机制的触发。
    这个事情就跟经济困难为什么不直接给民众发钱一样，发钱并不是一种好的方式，而是要经过产业，设计一定的可持续的流程，间接地持续共同付富裕。
  </div>
</details>
