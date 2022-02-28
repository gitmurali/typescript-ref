export enum CONSTANTS {
  X = "abc",
  Y = "xyz"
}

export type ConstantType = CONSTANTS.X | CONSTANTS.Y;

export type AccessTokenData = {
  [prop in ConstantType]: string;
};

const somevalue: AccessTokenData = { abc: "hello", xyz: "wassup" };
console.log(somevalue);
