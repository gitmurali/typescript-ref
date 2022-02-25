type MakeArray<T> = T extends T ? T[] : never;

enum E {
  A,
  B,
  C
}

type K = MakeArray<string | E | boolean>;
