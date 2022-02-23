/******* Record type *******/

type Person = { name: string; age: number; company: string };
type ValidPerson = { name: boolean; age: boolean; company: string };
type ValidP = Record<keyof Person, boolean>;
/******* end of Record type *******/
