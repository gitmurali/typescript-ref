type XEnv = {
  X_IS_ADMIN: boolean;
  X_SERVE: string;
  X_MAX_REQUESTS_PER_MINUTE: number;
};

type EnvData1 = {
  isAdmin: boolean;
  isServer: string;
  maxRequestsPerMinute: number;
};

type AddPrefix<P extends string> = `X_${P}`;

// type R = AddPrefix<"IS_ADMIN">
// Check if P extends X_IS_ADMIN if so then infer R returns after "X_"
type RemovePrefix<P extends string> = P extends AddPrefix<infer R> ? R : never;

type Z = RemovePrefix<"X_IS_ADMIN">