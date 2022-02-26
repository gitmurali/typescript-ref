type EnvGetters = {
  Server: () => Promise<string>;
  Port: () => Promise<number>;
};

type ResolvedReturnType<T> = T extends (...args: any) => Promise<infer R>
  ? R
  : never;

type Env = {
  [P in keyof EnvGetters]: ResolvedReturnType<EnvGetters[P]>;
};
