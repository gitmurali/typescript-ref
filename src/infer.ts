type ConstructorArg<C> = C extends {
  new (arg: infer A, ...args: any[]): any;
}
  ? A
  : never;

class FruitStand {
  constructor(fruitNames: string[]) {}
}

let fruit: ConstructorArg<typeof FruitStand>;
