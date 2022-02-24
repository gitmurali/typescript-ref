/******* Record type *******/

type Person = { name: string; age: number; company?: string };
type ValidPerson = { name: boolean; age: boolean; company: string };
type ValidP = Record<keyof Person, boolean>;
/******* end of Record type *******/

/******** Readonly type ************/
type Person1 = Readonly<Person>;
let a: Person1;
a.age = 10;
/********* end of Readonly **********/

/******** Required type ************/
type Person2 = Required<Person>;
let a: Person2;
/********* end of Readonly **********/

/******* Pick ***********/
/** it contains only what you pick. */
type P = Pick<Person, "name" | "age">;

/************ ReturnType*******/
type R = ReturnType<() => string>;
let b: R = "murali";
/************ end of ReturnType*******/

/************record***********/
type EnvGetters = {
  server: () => string;
  port: () => number;
};

type Env = {
  server: string;
  port: number;
};

// approach 1
// type Record1 = {
//   [P in "name" | "age" | "company"]: boolean;
// };

// approach 2
// type Record1 = {
//   [P in keyof EnvGetters]: ReturnType<EnvGetters[P]>;
// };

//approach 3
type AllReturnTypes<T extends { [n: string]: (...a: any) => any }> = {
  [P in keyof T]: ReturnType<T[P]>;
};

type NewEnv = AllReturnTypes<EnvGetters>;

// to make all props readonly..
type RecordReadonly = {
  readonly [P in keyof EnvGetters]: ReturnType<EnvGetters[P]>;
};

// to make all props readonly and optional..
type RecordReadonlyAndOptions = {
  readonly [P in keyof EnvGetters]?: ReturnType<EnvGetters[P]>;
};

// -readonly
type RecordMinusReadOnly = {
  -readonly [P in keyof EnvGetters]?: ReturnType<EnvGetters[P]>;
};

// NonNullable - removes nul or undefined.
type NotNullOrUndefined = NonNullable<(() => string) | undefined>;

type RecordReadonlyAndOptionsNonNullable = {
  readonly [P in keyof EnvGetters]?: ReturnType<NonNullable<EnvGetters[P]>>;
};
