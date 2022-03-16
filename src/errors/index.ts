// @ts-ignore
const num: number = 5;

//@ts-expect-error
const num1: number = 5;

// @ts-ignore is like ignore any kind of error.
// @ts-expect-error is like expect error and ignore that error

function somethingRisky() {}
// https://stackoverflow.com/questions/51439843/unknown-vs-any
try {
  somethingRisky();
} catch (err) {
  //err: unknown I don't know yet i have to figure it out yet.
  if (err instanceof Error) {
    console.log(err.stack);
  } else {
    console.log(err);
  }
}

// unknown is like I don't know yet
// any is like I don't care

// unknown which is the type-safe counterpart of any
let abc: any = 10; // We can assign anything to any
let xyz: unknown = 20; // We can assign anything to unknown just like any

let abc1: string = abc; // Any is assignable to anything
let xyz1: string = xyz; // Invalid; we can't assign xyz to any other type (without an explicit assertion)

abc.method(); // Ok; anything goes with any
xyz.method(); // Not ok; we don't know anything about this variable
