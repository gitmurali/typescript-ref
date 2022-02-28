interface SomePerson {
  name: string;
  age: number;
  aliases: string[];
}

type MakeOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

type PersonWithSomeOptional = MakeOptional<SomePerson, "age" | "aliases">;

let p: PersonWithSomeOptional = {
  name: "murali"
};
