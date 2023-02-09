# 类型检测

一般根据具体需要来使用不同的工具

|        目标类型         |            判断方式            |
| :---------------------: | :----------------------------: |
| Exclude<基础类型, null> |             typeof             |
|        Function         |             typeof             |
|          Array          |         Array.isArray          |
|          null           |              ===               |
|        实例关系         |           instanceof           |
|          Other          | Object.prototype.toString.call |

一般而言，typeof x 是比较安全的，检查某个变量常用 typeof 判断是否定义

```js
if (typeof x !== "undefined") {
  // do something
}
```

不过由于 TDZ 的存在，不那么安全了，typeof 这个检测也被 🈲 了。

:::info 归纳
我觉得好的方式是找一个，或者自行封装一个小工具包，团队内统一使用，一次有效归纳，不需要再做取舍纠结，也减少偶然的错误。
:::
