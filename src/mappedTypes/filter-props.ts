// filtered keys

interface Color {
  red: string;
  green: number;
  blue: string;
}

type Foo = number | never;

type FilteredKeys<ToFilter, Condition> = {
  [P in keyof ToFilter]: ToFilter[P] extends Condition ? P : never;
};

type RelevantColorKeys = FilteredKeys<Color, number>[keyof Color];
