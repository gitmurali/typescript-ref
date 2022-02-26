// make all nested props readonly..
type SomeEnv = {
  restApi: { server: string; port: number };
  dbServers?: Array<{ server: string; port: number }>;
};

type R = Readonly<SomeEnv>;

// {} & is the trick to expand complete types
type DeepReadonly<T> = {} & {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

type Z = DeepReadonly<SomeEnv>;
