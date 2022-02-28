type U = { foo: number } | { bar: number };
type I = { foo: number } & { bar: number };

// type FuncUnion =
//   | ((v: { foo: number }) => void)
//   | ((v: { bar: number }) => void);

// let fn: FuncUnion =
//   Math.random() > 0.5
//     ? (v: { foo: number }) => console.log(v.foo)
//     : (v: { bar: number }) => console.log(v.bar);

// fn({
//   bar: 0,
//   foo: 1
// });

type FuncUnion<T> = T extends T ? (value: T) => void : never;

type RR = FuncUnion<U>;

export type UnionToIntersection<T> = FuncUnion<T> extends (P: infer U) => void
  ? U
  : void;

// hover on R which converts union to intersection.
type R = UnionToIntersection<U>;
