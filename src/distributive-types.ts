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
