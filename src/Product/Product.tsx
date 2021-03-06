// example 1
// function Logger(constructor: Function) {
//   console.log("inside log");
//   console.log(constructor);
// }

// example 2 using Factory
function Logger1(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

//example 3
export function withTemplate(template: string, hookId: string) {
  // _ tells typescript that I receive an arg but I'm not interested in it.
  return function (_: Function) {
    console.log("***", document.getElementById(hookId));
    const hookEl = document.getElementById(hookId);
    console.log(hookEl);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

function Prop(target: any, propName: string | Symbol) {
  console.log("prop--->>>", target, propName);
}

// @Logger
@Logger1("a product meta data")
export class Product {
  @Prop
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

/** example to use dynamic types */
export enum CONSTANTS {
  X = "abc",
  Y = "xyz"
}

export type ConstantType = CONSTANTS;

export type AccessTokenData = {
  [prop in ConstantType]: string;
};

const somevalue: AccessTokenData = { abc: "hello", xyz: "wassup" };
console.log(somevalue);
