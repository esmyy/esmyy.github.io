# base

<details>
  <summary>React.Fragment有</summary>
  <div>从使用上，肯定是在VDOM里面是一个独立的节点，只不过是比较特殊，标记不需要以一个Element的方式渲染到页面中而已。一般而言都能替换成div这样的元素</div>
</details>

<details>
  <summary>jsx中的组件，没有用到react，为什么需要引入react?</summary>
  <div>React 17之前的版本需要的吧，因为编译器并不识别jsx，需要使用babel进行转换。17之后的版本已经内置了babel引入，不需要再手动引入。</div>
</details>

<details>
  <summary>mixins的问题</summary>
  <div>mixins最大的问题是维护的问题。在Vue2中使用的时候，发现使用了哪些mixins是不容易最终的，定义和使用是脱节的。mixins也存在命名重复的问题</div>
</details>

## 事件

<details>
  <summary>简单描述一下React的事件委托</summary>
  <div>
    把所有事件都委托到顶层的元素上，在17中是root元素。维护一个map 来保存所有组件内部事件监听和处理函数，回调中的方法自动绑定到该组件的执行上下文中。
  </div>
</details>

<details>
  <summary>事件池了解吗？</summary>
  <div>[事件池](https://zh-hans.reactjs.org/docs/legacy-event-pooling.html) 是React 16的内容了，事件复用同一个事件对象，这会导致问题，如果异步获取e.target的内容，需要使用persist额外处理，虽然带来资源上的提高，但也带来了使用时的隐患。
  </div>
</details>

## 缓存

<details>
  <summary>React实现缓存的方式有哪些？</summary>
  <div>memo, useCallback, useMemo, pureComponent</div>
</details>

## 其他

<details>
  <summary>什么是受控组件</summary>
  <div>受控组件指的是input, select等输入组件，这些对应的底层元素会自己维护一个值，而受控，就是将这个指绑定到React的state上，受React控制。简单来说，受控组件中，表单数据是React组件管理的，而非受控组件就是数据交给DOM节点自己处理，React组件只在需要的时候通过ref等去获取表单数据。</div>
</details>
