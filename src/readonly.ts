// make all nested props readonly..
type SomeEnv = {
  time: () => {
    day: number;
    time: number;
  };
  start: Date;
  restApi: { server: string; port: number };
  dbServers?: Array<{ server: string; port: number }>;
};

type R = Readonly<SomeEnv>;

// {} & is the trick to expand complete types
type DeepReadonly<T> = {} & {
  readonly [P in keyof T]: T[P] extends Date
    ? Date // retain date
    : T[P] extends (...a: infer P) => infer R
    ? (...a: P) => DeepReadonly<R>
    : DeepReadonly<T[P]>;
};

type Z = DeepReadonly<SomeEnv>;
