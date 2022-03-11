// a set of four specific things
type FavoriteColors1 =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | { red: number; green: number; blue: number };

type NonStringColors = Exclude<FavoriteColors1, string>;
//    ^?
