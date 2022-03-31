// Array of array
type abc = [string | number, boolean][];
const xyz: abc = [["Murali", true]];
console.log(xyz);

/**
 * Check whether a given value is an array where
 * each member is of a specified type
 *
 * @param arr - array to check
 * @param check - type guard to use when evaluating each item
 * @public
 */
export function isTypedArray<T>(
  arr: unknown,
  check: (x: any) => x is T
): arr is T[] {
  if (!Array.isArray(arr)) return false;
  if (arr.some((item) => !check(item))) return false;
  return true;
}

isTypedArray([1, 2, 3], (x): x is number => typeof x === "number");
