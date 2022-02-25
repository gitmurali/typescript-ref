type keyOfAll<T> = T extends T ? keyof T : never;

type Doctor = { name: string; speciality: string };
type Engineer = { name: string; field: string };
type Artist = { name: string; preferredMedium: string };

type OriginalPerson = Doctor | Engineer | Artist;

//get all keys excluding keys  of doctor.
// type D = Partial<
//   Record<Exclude<keyOfAll<OriginalPerson>, keyof Doctor>, undefined>
// >;

// 👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻

type AddUndefinedProps<TOriginalUnion, TUnionConstituent> = Partial<
  Record<Exclude<keyOfAll<TOriginalUnion>, keyof TUnionConstituent>, undefined>
>;

// type Person =
//   | (Doctor & { field?: undefined; preferredMedium?: undefined })
//   | (Engineer & { speciality?: undefined; preferredMedium?: undefined })
//   | (Artist & { speciality?: undefined; field?: undefined });

// 👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻

// type Person =
//   | (Doctor & AddUndefinedProps<OriginalPerson, Doctor>)
//   | (Engineer & AddUndefinedProps<OriginalPerson, Engineer>)
//   | (Artist & AddUndefinedProps<OriginalPerson, Artist>);

// 👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻👆🏻

type StrictUnion<T> = T extends T
  ? T & AddUndefinedProps<OriginalPerson, T>
  : never;

type Person = StrictUnion<OriginalPerson>;
let o: Person = {
  name: "",
  field: "",
  preferredMedium: "",
  speciality: ""
};
