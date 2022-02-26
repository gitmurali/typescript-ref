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

type EnvData2 = {
  [P in keyof XEnv as ConvertToCamelcase<RemovePrefix<P>>] : XEnv[P]
}

type AddPrefix<P extends string> = `X_${P}`;

// type R = AddPrefix<"IS_ADMIN">
// Check if P extends X_IS_ADMIN if so then infer R returns after "X_"
type RemovePrefix<P extends string> = P extends AddPrefix<infer R> ? R : never;

type Z = RemovePrefix<"X_IS_ADMIN">

type RemoveUnderscores<T extends string> = 
    T extends `${infer H}_${infer T}` ? `${Capitalize<Lowercase<H>>}${RemoveUnderscores<T>}` : Capitalize<Lowercase<T>>

type ConvertToCamelcase<T> = T extends `${infer H}_${infer T}` ? `${Lowercase<H>}${RemoveUnderscores<T>}` : never

type K = ConvertToCamelcase<"MAX_REQUESTS_PER_MINUTE">