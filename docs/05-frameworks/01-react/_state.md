# 状态管理库

mobx, redux, redux-toolkit

<details>
  <summary>为什么不能直接给state赋值，修改state的值？</summary>
  <div>
    这只是实现方式的不同，本身就不是这样设计的。setState的过程中不仅包含了赋值这个过程，中间还有很多的处理，更新机制的触发。
    这个事情就跟经济困难为什么不直接给民众发钱一样，发钱并不是一种好的方式，而是要经过产业，设计一定的可持续的流程，间接地持续共同付富裕。
  </div>
</details>

<details>
  <summary>setState 是同步还是异步？</summary>
  <div>
一般来说，setState是异步的，批量更新。在18之前的版本中，在setTimeout，addEventListener等函数中，是同步更新的。在18以后，都是异步批量更新的。连续添加的setState，会推送到一个节点的memorizedState的队列里面去
  [参考](https://cloud.tencent.com/developer/article/2159947)
  </div>
</details>

<details>
  <summary>简单描述一下 setState 批量更新的过程</summary>
  <div>多次setState的改变，会在FiberNode的state管理队列中添加一个修改，最终批量更新。几个修改之间是顺序进行的，其实并不是状态修改合并成一次，而是渲染合并成一次。。</div>
</details>

<details>
  <summary>useState为什么返回的是数组，而不是对象</summary>
  <div>为了方便使用。ES6的解构赋值过程中，数组的解构是不需要具名，而对象的解构需要考虑对象属性中的命名，使用数组更加方便。所以一般hooks都使用数组作为返回值。这个作为一个统一的约定，对于提高代码的易用性，也是有好处的。</div>
</details>
