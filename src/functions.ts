// same type
interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add: TwoNumberCalculation = (a, b) => a + b;
const subtract: TwoNumberCalc = (x, y) => x - y;

// construct signatures
interface DateConstructor {
  new (value: number): Date;
}

let MyDateConstructor: DateConstructor = Date;
const d = new MyDateConstructor();
//************* end of construct signatures **************/

//************ Function overloads ************/

function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

add("Hello ", "Steve"); // returns "Hello Steve"
add(10, 20); // returns 30
