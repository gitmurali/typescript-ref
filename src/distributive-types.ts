type MakeArray<T> = T extends T ? T[] : never;

enum E {
  A,
  B,
  C
}

type K = MakeArray<string | E | boolean>;

/*********** keyof *************/

export type Person =
  | { name: string; field: string }
  | { name: string; specialty: string };

type keyOfAll<T> = T extends T ? keyof T : never;
type R = keyof Person; // only name is retrieved.
type B = keyOfAll<Person>; // all keys are retrieved.
/***************************************/

/**********  convert union to intersection*********/
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type FunctionUnion = (() => void) | ((p: string) => void);
type SynthesizedFunctionIntersection = UnionToIntersection<FunctionUnion>;
/********************************************************/
