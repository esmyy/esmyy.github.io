# Refs

<details>
  <summary>React 可以在 render 中访问 refs吗？为什么</summary>
  <div>不可以，render阶段DOM还没有生成，而 refs 是用来绑定DOM的。</div>
</details>

<details>
  <summary>refs有什么使用场景</summary>
  <div>需要在渲染之后，对DOM做一些操作，这些操作不是数据绑定，不是事件等这些可以在渲染的时候做的事情，而是必须渲染完成之后做的事情。比如说播放，focus，文本选中，是状态不变。或者说，要做那些state不变而view变化的事情</div>
</details>

<details>
  <summary>forwardRef</summary>
  <div>让组件能够接受传递的ref，并用在其他组件或元素中。这个应该谨慎使用，但也有一定的场景，比如说一些表单的操作情况。当然，这取决于怎样去设计实施，有时候使用forwardRef能比较方便地实现功能。</div>
</details>
