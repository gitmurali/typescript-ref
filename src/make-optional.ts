interface Person {
  name: string;
  age: number;
  aliases: string[];
}

type MakeOptional<T, K extends keyof T> = Partial<Pick<T, K>>;

type PersonWithSomeOptional = MakeOptional<Person, "age" | "name" | "aliases">;
