var a: string = "test";
var b: String = new String("another test");

console.log(typeof a); // string
console.log(typeof b); // object

type Fruits = "Orange" | "Apple" | "Banana";

const myString: string = "Banana";

const MyFruits: Fruits = myString as Fruits;

console.log(MyFruits);
