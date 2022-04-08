enum Colors {
  RED = 1,
  GREEN = 2,
  BLUE = 3
}

let red: string = Colors[Colors.RED]; //string RED
console.log(red);

enum Colors2 {
  RED,
  GREEN,
  BLUE
}

let green = Colors2[1];
let red1 = Colors2[0];

type Colors3 = keyof typeof Colors2;

type Colors4 = {
  [P in Colors3]: string;
};

let obj: Colors4 = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
};

console.log(green, red1, obj);

enum Vehicle {
  Car = "car",
  Bike = "bike",
  Truck = "truck"
}

console.log(Object.keys(Vehicle));
console.log(Object.entries(Vehicle));
console.log(Object.values(Vehicle));

/********************** ***************************/


export enum MESSAGE_TYPE {
  INFO = 1,
  SUCCESS = 2,
  WARNING = 3,
  ERROR = 4,
};

// turns into 

{
  '1': 'INFO',
  '2': 'SUCCESS',
  '3': 'WARNING',
  '4': 'ERROR',
  INFO: 1,
  SUCCESS: 2,
  WARNING: 3,
  ERROR: 4
}


/********************* enums *****************/

enum Option {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three'
}

interface OptionRequirement {
  someBool: boolean;
  someString: string;
}

type OptionType = keyof typeof Option

type OptionRequirements  = {
  [key in OptionType]: OptionRequirement;
}

const OptionObject: OptionRequirements = {
  "ONE" : {someBool: true, someString: 'string'},
  "TWO" : {someBool: true, someString: 'string'},
  "THREE" : {someBool: true, someString: 'string'},
}




enum MyEnum {
  A = "a",
  B = "b",
  C = "c"
}

var MyEnum
(function(){
  MyEnum["A"] = "a";
  MyEnum["B"] = "b";
  MyEnum["C"] = "c";
})(MyEnum || (MyEnum = {}))