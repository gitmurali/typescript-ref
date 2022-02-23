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
