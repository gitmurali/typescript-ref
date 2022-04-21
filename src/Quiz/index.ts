export class Person {
  #name = ""; // javascript private field
  private age = 1; // typescript private field.
}

//example 2

const str = "hello"; // convert string to object.
let val = { ...str.split("") };
console.log(val);
/**
 * {
 *   '0': 'h',
 *   '1': 'e',
 *   '2': 'l',
 *   '3': 'l',
 *   '4': 'o'
 * }
 */

//example 3
// @errors: 2322 2320
let first: string & number; // results in never as primitive types a string can never extend number or vice versa in this union type
let second: String & Number; //

first = "abc";
second = "abc";
second = new String("abc");

// example 4

// In what order will the animal names below be printed to the console?
// dog, cat, elephant, giraffe, zebra, koala, lion, moose

// Answer: dog, cat, elephant, giraffe, zebra, koala, lion, moose;

//Are you surprised that giraffe and zebra happen so early? Remember that Promise executors are invoked synchronously in the Promise constructor
//Are you surprised that lion happens so late? Remember that a resolve is not a return. Just because a Promise has resolved, doesn’t mean the corresponding .then (or await is called immediately)
function getData() {
  console.log("elephant");
  const p = new Promise((resolve) => {
    console.log("giraffe");
    resolve("lion");
    console.log("zebra");
  });
  console.log("koala");
  return p;
}
async function main() {
  console.log("cat");
  const result = await getData();
  console.log(result);
}
console.log("dog");
main().then(() => {
  console.log("moose");
});
