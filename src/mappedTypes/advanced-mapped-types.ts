// when you only want a specific keys from object

type PartOfWindow = {
  [Key in "document" | "navigator" | "setTimeout"]: Window[Key];
};

type PickWindowProperties<keys extends keyof Window> = {
  [Key in keys]: Window[Key];
};

type WindowProps = PickWindowProperties<
  "document" | "alert" | "btoa" | "setInterval"
>;

// make it more generic
type PickProperties<Keys extends keyof ValueType, ValueType> = {
  [key in Keys]: ValueType[key];
};

type WindowProps1 = PickProperties<
  "document" | "alert" | "btoa" | "setInterval",
  Window
>;

let d: { [k: string]: Date } = {};

let record: { [k in "endOfWeek" | "startOfWeek"]: Date } = {
  endOfWeek: new Date(),
  startOfWeek: new Date()
};

record = d; // not fine
d = record; // fine
