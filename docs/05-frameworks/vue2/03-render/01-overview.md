# 章节概述

这一章叙述渲染的过程，在编译生成中间代码之后，需要将中间代码转化为 VDOM，然后再利用 VDOM 去构建真实的 DOM。

起点: 编译完成，生成了中间代码，提供了 render 函数创建方法(compileToFunctions)

过程: 创建 VDOM，VDOM -> DOM

终点: DOM 添加到页面
