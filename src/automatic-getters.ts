type ServerEnv = {
  isAdmin: boolean;
  isServer: string;
  maxRequestsPerMinute: number;
};

type EnvData = {
  [P in keyof ServerEnv as `get${Capitalize<P>}`]: () => ServerEnv[P];
};

type isAdmin = "isAdmin";
type getisAdmin = `get${isAdmin}`;