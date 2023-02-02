# 二叉树

二叉树，每个节点最多有两个子树的树结构，一般称作左子树，右子树。

二叉树相关的常见场景

- 遍历
- 查找
- 构造

## 定义

```ts title="TreeNode.ts"
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const _root = new TreeNode(1);
const left = new TreeNode(2);
const right = new TreeNode(3);

_root.left = left;
_root.right = right;

export const root = _root;
```

## 最大深度

从根到最远叶子节点的层树，也是节点数。

最大深度的计算，需要做一次遍历，每一个节点记录自身的深度，依次向下时深度+1，比较当前深度和已知的最大深度，取最大值。

```ts title="maxDepth.ts"
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

## 深度优先搜索

DFS(Depth First Search) 深度优先搜索有前序、中序和后序遍历三种情况，一般遍历后返回节点值数组

```ts
type TBinaryTraversalFn = (root: TreeNode | null) => number[];
```

递归的写法比较简单

### 前序

中 -> 左 -> 右

```ts title="preOrderTraversal.ts"
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

console.log(preOrderTraversal(root)); // [ 1, 2, 3 ]
```

### 中序

左 -> 中 -> 右

```ts title="inOrderTraversal.ts"
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

console.log(inOrderTraversal(root)); // [ 2, 1, 3 ]
```

### 后序

左-> 右 -> 中

```ts title="postOrderTraversal.ts"
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

console.log(postOrderTraversal(root)); // [ 2, 3, 1 ]
```

## 广度优先搜索

BFS(Breadth First Search) 广度优先搜索也叫层序遍历，它是指逐层地，从左到右访问所有节点，再到下一层。

### 严格的 BFS

### DFS 实现 BFS

如果只是要求结果上是符合 BFS，中间过程不一定是先上层访问完再到下一层，那么其实实现起来是比较简单的。

由于子层的访问，必须是通过上一层，得到符合 BFS 的节点顺序，只需要把前面 **深度计算** 和 **深度遍历** 做一个结合 —— 在深度遍历时，记住节点所在层，把相同层的元素放到一起。

```ts title="levelTraversal.ts"
import { TreeNode } from "./TreeNode";

const root = require("./TreeNode");
const levelTraversal = function (root: TreeNode) {
  if (!root) {
    return [];
  }

  const result: TreeNode["val"][][] = [];
  const traversal = function foo(node: TreeNode, depth: number) {
    result[depth] = result[depth] || [];
    result[depth].push(node.val);

    if (node.left) {
      foo(node.left, depth + 1);
    }

    if (node.right) {
      foo(node.right, depth + 1);
    }
  };

  traversal(root, 0);
  return result;
};

console.log(levelTraversal(root)); // [ [ 1 ], [ 2, 3 ] ]
```

返回结果中，`result` 二维数组的 result[i] 就对应第 i + 1 层的元素从左到右。做一个扁平化即得到了层序遍历的结果

```ts
function flat(list: number[][]): number[] {
  return list.join(",").split(",").map(Number);
}

flat(result); // [ 1, 2, 3 ]
```

## 参考

[leetcode 二叉树](https://leetcode.cn/leetbook/read/data-structure-binary-tree/xes3em/)
