/******* keyof *********/
interface Person {
  name: string;
  age: number;
}

// type PersonKeys = "name" | "age";
// let a: PersonKeys = "age";

type PersonKeys = keyof Person;
let a: PersonKeys = "name";

/******* typeof *********/

let env = {
  server: "url",
  port: 8080
};

type Env = typeof env;

/******* keyof  *********/

type Book = {
  name: string;
  title: string;
  price: bigint;
  published: number;
};

type ValuesOf<T> = T[keyof T];

type R = ValuesOf<Book>;
//************************* */

/*** to recommend a value and fallback to string */

type SomeString = (string & {}) | "red" | "green";

let b: SomeString = "red"; // recommends red or green first
let c: SomeString = "any string as fallback";

/*** end to recommend a value and fallback to string */

/******** safe-get-functions *********/
const someenv = {
  server: "url",
  port: 3000
};

type ENV = typeof someenv;

function getValue<K extends keyof ENV>(s: K): ENV[K] {
  return (someenv as any)[s];
}

const server = getValue("server");
const port = getValue("port");
const pport = getValue("pport"); // narrowed it down to server or port
console.log(server, port);
//****************************************/
