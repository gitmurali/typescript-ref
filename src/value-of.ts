type ValueOf<T> = T[keyof T];
type Foo = { a: string; b: number };

type ValueOfFoo = ValueOf<Foo>;
