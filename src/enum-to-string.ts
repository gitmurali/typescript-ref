enum Color {
  Red,
  Green
}

// To string
let green: string = Color[Color.Green];

// To number
let color: Color = Color[green as keyof typeof Color];

console.log(color);

// get names of enum

enum Enum {
  A
}

let nameOfA = Enum[Enum.A]; // "A"

// Another way
enum myEnum {
  bar,
  foo
}

for (var enumMember in myEnum) {
  console.log("enum member: ", enumMember);
}

// Another interesting solution
export enum Type {
  low,
  mid,
  high
}

export const TypeLabel = new Map<number, string>([
  [Type.low, "Low Season"],
  [Type.mid, "Mid Season"],
  [Type.high, "High Season"]
]);

console.log(TypeLabel.get(Type.low)); // Low Season
