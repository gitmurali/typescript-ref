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

console.log(green, red1);
