class Fruit {
  constructor(
    public readonly name: string,
    public readonly mass: number,
    public readonly color: string
  ) {}

  static createBanana() {
    return new Fruit("banana", 108, "yellow");
  }
}

const MyFruit = Fruit; // class to a type
//     ^?
const banana = Fruit.createBanana();
//     ^?
