function Logger(constructor: Function) {
  console.log("inside log");
  console.log(constructor);
}

@Logger
export class Product {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}
