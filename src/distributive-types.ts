type MakeArray<T> = T extends T ? T[] : never;

type K = MakeArray<string | number>;
