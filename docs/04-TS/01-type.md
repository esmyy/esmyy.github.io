# 常用类型

归纳常用类型，作为项目开发基础的类型工具，提高效率。

TypeScript 更新很快，我用的比较多的是 4.x。

## 数字

```ts
export const ID_INVALID = -1;
export const ID_LOADING = 0;
export const ID_DEFAULT = 0;

export const ONE = 1;
export const TEN = 10;
export const HUNDRED = 100;
export const THOUSAND = 1_000;
export const MILLION = 1_000_000;
```

## boolean

```ts
export type Falsy = false | "" | 0 | null | undefined;
```

## null

```ts
export type Nullable<T> = T | null;
export type NonNull<T> = T extends null ? never : T;
```

## undefined

```ts
export type UndefinedAble<T> = T | undefined;
export type NonUndefined<T> = T extends undefined ? never : T;
```

## 时间

```ts
/**
 * S_X 标识 X 时间间隔的秒数
 * MS_X 标识 X 时间间隔的毫秒数
 */
export const S_SECOND = 1;
export const S_MINUTE = 60;
export const S_HOUR = 3600;
export const S_DAY = 86400;
export const MS_SECOND = 1_000;
export const MS_MINUTE = 60_000;
export const MS_HOUR = 3_600_000;
export const MS_DAY = 864_000_000;

export const DATE_FORMAT = "YYYY-MM-DD";
export const DATE_FORMAT_CN = "YYYY年MM月DD日";
export const TIME_FORMAT = "HH:mm:ss";
export const TIME_FORMAT_CN = "HH时mm分ss秒";
export const TIME_FORMAT_NOW = "YYYYMMDDHHmmss";
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;
export const DATE_TIME_FORMAT_CN = `${DATE_FORMAT_CN} ${TIME_FORMAT_CN}`;
```

## 联合

官方提供了 Exclude 和 Extract，基于这两个可以衍生其他类型

```ts
// 交集相对并集的补集
export type SetInOnlyOne<A, B> = Exclude<A | B, A & B>;
```

## 函数

````ts
/**
 * @description 默认函数定义，用于不关注参数和返回值的场景
 */
export type Noop = (...args: any[]) => any;

/**
 * @description 没有参数，一个参数，两个参数的函数
 * @example
 * const foo:F0<string> = () => 'yueyue';
 * const foo:F0 = () => undefined;
 */
export type F0<R = void> = () => R;
export type F1<A2, R = void> = (a1: A2) => R;
export type F2<A1, A2, R = void> = (arg1: A1, arg2: A2) => R;

/**
 * @description 编辑获取函数第 n 个参数的类型
 * @example
 * ```ts
 * function foo(a: string, b: number, c: null | Record<string, any>) {
 *   console.log(a, b, c);
 * }
 *
 * type TooA0 = A0<typeof foo>; // string
 * ```
 */
export type A0<T extends Noop> = Parameters<T>[0];
export type A1<T extends Noop> = Parameters<T>[1];
export type A2<T extends Noop> = Parameters<T>[2];
````

## 对象属性
