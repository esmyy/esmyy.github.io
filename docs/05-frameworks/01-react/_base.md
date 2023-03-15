# base

## Fragment

<details>
  <summary>React.Fragment有</summary>
  <div>从使用上，肯定是在VDOM里面是一个独立的节点，只不过是比较特殊，标记不需要以一个Element的方式渲染到页面中而已。一般而言都能替换成div这样的元素</div>
</details>

## Virtual DOM

<details>
  <summary>有考虑过为什么 React，Vue 使用 Virtual DOM 吗</summary>
  <div>
    减少不必要的渲染，只更新涉及的组件。支持跨平台的编译。
  </div>
</details>

<details>
  <summary>VDOM一定会提高性能吗</summary>
  <div>不一定，还要考虑设计实现的结构。VDOM不一定会提高性能，但是通过VDOM，可以做一些智能的管理，比如批量更新。能够更灵活地控制页面的刷新，减少渲染次数，但不一定提高了性能，diff本身也是有代价的，但是一般而言，是能提高性能的。</div>
</details>

<details>
  <summary>简单介绍diff算法</summary>
  <div>根据新的数据值，生成新的一个VDOM树，所谓的VDOM树，不管怎样，都只是一个DOM的另一种描述，然后多了很多附加的属性。diff算法就是比较每一个节点，简单来说，会比较...</div>
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
