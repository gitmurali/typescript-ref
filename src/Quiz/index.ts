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
