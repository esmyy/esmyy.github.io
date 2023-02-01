# 二叉树

二叉树，每个节点最多有两个子树的树结构，一般称作左子树，右子树。

## 定义

```ts
// 二叉树节点
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 遍历函数结构
type TBinaryTraversalFn = (root: TreeNode | null) => number[];
```

## 遍历

前序、中序和后序遍历，返回节点值数组

```ts
type TBinaryTraversalFn = (root: TreeNode | null) => number[];
```

递归的写法比较简单

### 前序

中 -> 左 -> 右

```ts
// 递归
const preOrderTraversal: TBinaryTraversalFn = function (root) {
  if (!root) {
    return [];
  }

  const result: TreeNode["val"][] = [];
  const traversal = function foo(node: TreeNode) {
    result.push(node.val);
    if (node.left) {
      foo(node.left);
    }

    if (node.right) {
      foo(node.right);
    }
  };

  traversal(root);
  return result;
};

// 迭代
```

### 中序

左 -> 中 -> 右

```ts
const inOrderTraversal: TBinaryTraversalFn = function (root) {
  if (!root) {
    return [];
  }

  const result: TreeNode["val"][] = [];
  const traversal = function foo(node: TreeNode) {
    if (node.left) {
      foo(node.left);
    }

    result.push(node.val);

    if (node.right) {
      foo(node.right);
    }
  };

  traversal(root);
  return result;
};
```

### 后序

左-> 右 -> 中

```ts
// 递归
const postOrderTraversal: TBinaryTraversalFn = function (root) {
  if (!root) {
    return [];
  }

  const result: TreeNode["val"][] = [];
  const traversal = function foo(node: TreeNode) {
    if (node.left) {
      foo(node.left);
    }

    if (node.right) {
      foo(node.right);
    }

    result.push(node.val);
  };

  traversal(root);
  return result;
};
```

## 层序遍历

也叫广度优先搜索。关于层序，我理解有两种理解

1. 先遍历每一层的所有元素，再到下一层
2. 仍旧是深度优先遍历，只是结果是符合层序的

对于二叉树而言，每一层的访问，必须是通过上一层，因此层序遍历，说的其实是 —— 输出结果是与符合层序的逻辑，而非真的能做到遍历

层序遍历的一个简单实现，是在深度遍历的过程中

## 深度

一般指最大深度，是从根到最远叶子节点的层树，也是节点数。

最大深度的计算，需要做一次遍历，每一个节点记录自身的深度，依次向下时深度+1，比较当前深度和已知的最大深度，取最大值。

```ts
const maxDepth = function (root: TreeNode) {
  if (!root) {
    return 0;
  }

  let max = 0;
  const traversal = function foo(node: TreeNode, depth: number) {
    max = Math.max(depth, max);
    if (node.left) {
      foo(node.left, depth + 1);
    }

    if (node.right) {
      foo(node.right, depth + 1);
    }
  };

  traversal(root, 1);
  return max;
};
```

## 参考

[leetcode 二叉树](https://leetcode.cn/leetbook/read/data-structure-binary-tree/xes3em/)
