# 命名约定

我习惯类型命名统一采用 `T` 开头

```ts
interface TEntity {
  name: string;
}
```

**不在命名上区分 `interface` 或者 `type`**

以前试过用 `I` 来表示 `interface`，用 `T` 来表示 `type`，如下

```ts
interface IEntity {
  name: string;
}

type TTemplate = {
  name: string;
};
```

在类型定义时可能需要区分，但定义只是偶尔，定义之后的使用才是常态。

用的时候只关注的是”**我要用某个类型**“，而不关注具体是用 `interface`还是`type`定义的。

区分 `interface` 和 `type` 带来的麻烦远多过好处。
