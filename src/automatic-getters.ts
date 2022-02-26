type ServerEnv = {
  isAdmin: boolean;
  isServer: string;
  maxRequestsPerMinute: number;
};

type EnvData = {
  [P in keyof ServerEnv as `get${Capitalize<P>}`]: () => ServerEnv[P];
} & {
    [P in keyof ServerEnv as `set${Capitalize<P>}`]: (value: ServerEnv[P]) => void;
  }


type isAdmin = "isAdmin";
type getisAdmin = `get${isAdmin}`;