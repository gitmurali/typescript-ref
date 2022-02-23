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
