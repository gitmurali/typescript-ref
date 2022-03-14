// recursive types
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
      [k: string]: JSONValue;
    };

const val: JSONValue = {
  name: "murali",
  address: {
    street: "regent street"
  }
};
