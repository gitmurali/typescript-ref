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

/************record***********/
type EnvGetters = {
  server: () => string;
  port: () => number;
};

type Env = {
  server: string;
  port: number;
};

// type Record1 = {
//   [P in "name" | "age" | "company"]: boolean;
// };

type Record1 = {
  [P in keyof EnvGetters]: boolean;
};
