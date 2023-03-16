<details>
  <summary>有考虑过为什么 React，Vue 使用 Virtual DOM 吗</summary>
  <div>
    减少不必要的渲染，只更新涉及的组件。支持跨平台的编译。
  </div>
</details>

<details>
  <summary>diff算法的原理是什么？</summary>
  <div>两个VDOM Tree逐一进行比较，比如说key，tag还是其他属性，判断是否可以复用，标记这个组件是需要销毁，需要更新，还是添加到DOM，这个过程也就是所谓的diff过程。</div>
</details>

<details>
  <summary>React 的 key 是干嘛用的</summary>
  <div>key用来标记列表，或者说并列的同一个组件实例，需要在同级元素中具有唯一性。Diff的过程会借助key判断元素是新建还是变更，以更好的复用原有的内容。</div>
</details>

<details>
  <summary>有考虑过为什么 React，Vue 使用 Virtual DOM 吗</summary>
  <div>
    减少不必要的渲染，只更新涉及的组件。支持跨平台的编译。
  </div>
</details>

<details>
  <summary>VDOM一定会提高性能吗</summary>
  <div>不一定，还要考虑设计实现的结构。VDOM不一定会提高性能，但是通过VDOM，可以做一些智能的管理，比如批量更新。能够更灵活地控制页面的刷新，减少渲染次数，但不一定提高了性能，diff本身也是有代价的，但是一般而言，会更好或者不差于直接操作DOM。</div>
  <div>设备资源是发展的，虚拟DOM的作用，也许更多的在于开发体验，研发效率，不用去直接操作DOM，同时通过VDOM这样的结构能够做很多更新视图之外的优化和管理。</div>
</details>

<details>
  <summary>简单介绍diff算法</summary>
  <div>根据新的数据值，生成新的一个VDOM树，所谓的VDOM树，不管怎样，都只是一个DOM的另一种描述，然后多了很多附加的属性。diff算法就是比较每一个节点，简单来说，会比较...</div>
</details>

<details>
  <summary>Vue和React的diff算法的区别</summary>
  <div>diff算法的基本过程是一致的，必然少不了触发更新，比较和生成补丁，应用补丁的过程。</div>
</details>
