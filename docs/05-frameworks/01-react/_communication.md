# 通信

<details>
  <summary>React组件的通信方式</summary>
  <div>props, callback，context, EventBus</div>
</details>

<details>
  <summary>父组件中如何调用子组件中的方法</summary>
  <div>forwardRef + useImperativeHandle，向外暴露一些组件方法，但应该尽可能地少用。我只在表单中使用过，复用表单去获取用户输入内容。</div>
</details>

<details>
  <summary>React中是如何区分class 和 Function 的</summary>
  <div>class组件上面有一个isReactComponent属性，函数组件没有。</div>
</details>
