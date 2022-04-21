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
