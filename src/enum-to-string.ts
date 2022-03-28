enum Color {
  Red,
  Green
}

// To string
let green: string = Color[Color.Green];

// To number
let color: Color = Color[green as keyof typeof Color];

console.log(color);
