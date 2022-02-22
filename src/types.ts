interface Person {
  name: string;
  age: number;
}

// type PersonKeys = "name" | "age";
// let a: PersonKeys = "age";

type PersonKeys = keyof Person;
let a: PersonKeys = "name";
