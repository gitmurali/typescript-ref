/************** conditional based return type ****************/
type R = "1" extends string ? "Y" : "N";

type Ret<K> = K extends string ? string : number;

type R1 = Ret<string>;
type R2 = Ret<number>;

function getSampleData<K extends string | number>(value: K): Ret<K> {
  return (value === "string" ? "test data" : 0) as Ret<K>;
}

getSampleData("string");
getSampleData("number");
getSampleData(0);
/************** end of conditional based return type ****************/

/********** filtered out keys based on type of properties */
type Book = {
  pages: number;
  fontSize: number;
  name: string;
  author: string;
};

type T = {
  [P in keyof Book]: Book[P] extends string ? P : never;
}[keyof Book];

// generic version of above type
type FilterKeys<T, V> = {
  [P in keyof T]: T[P] extends V ? P : never;
}[keyof T];

type X = FilterKeys<Book, string>;
type Y = FilterKeys<Book, number>;
/********** end of filtered out keys based on type of properties */
