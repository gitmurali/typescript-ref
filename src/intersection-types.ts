type SpecialDate = Date & { getReason(): string }; // & means extends

const newYearsEve: SpecialDate = {
  ...new Date(),
  getReason: () => "Last day of the year"
};

newYearsEve.getReason();

// example 2
// we can implement a type as well not only interface.
// just use implements with interfaces not types
type CanBark = {
  bark(): string;
};

class Dog implements CanBark {
  bark() {
    return "woof";
  }

  eat(food: string) {
    console.log(food);
  }
}
