type Fruit = {
  name: string;
  color: string;
  mass: number;
};

type Dict<T> = { [k: string]: T }; // <- index signature

const fruitCatalog: Dict<Fruit> = {};
fruitCatalog.apple;

type MyRecord = {
  [FruitKey in "apple" | "cherry"]: Fruit;
};

// Generic my record
type GenericMyRecord<KeyType extends string, ValueType> = {
  [Key in KeyType]: ValueType;
};

function printFruitCatalog(fruitCatalog: MyRecord) {
  console.log(fruitCatalog.apple);
  console.log(fruitCatalog.cherry);
  // fruitCatalog.pineapple - this will be an error because pineapple doesn't exist
}

const fruits = {
  apple: { color: "red" },
  banana: { color: "yellow" },
  cherry: { color: "dark red" },
  pears: { color: "green" },
  clements: { color: "orange" }
};

type FruitKeys = keyof typeof fruits;

function printFruitCatalogGeneric(
  fruitCatalog: GenericMyRecord<FruitKeys, string>
) {
  console.log(fruitCatalog.apple);
  console.log(fruitCatalog.clements);
  // fruitCatalog.pineapple - this will be an error because pineapple doesn't exist
}
