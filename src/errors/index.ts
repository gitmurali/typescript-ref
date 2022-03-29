// @ts-ignore
const num: number = 5;

//@ts-expect-error
const num1: number = 5;

// @ts-ignore is like ignore any kind of error.
// @ts-expect-error is like expect error and ignore that error

//step 1
function somethingRisky() {}

//step2
function isError(error: any): error is Error {
  return error instanceof Error;
}

//step3
function assertIsError(err: any): asserts err is Error {
  if (!(err instanceof Error)) throw new Error(`Not an error: ${err}`);
}

try {
  somethingRisky();
} catch (err) {
  //err: unknown I don't know yet i have to figure it out yet.
  // if (isError(err)) {
  //   console.log(err.stack);
  // } else {
  //   console.log(err);
  // }

  assertIsError(err); // either throw here
  console.log(err.stack); // or log this out
}

// https://stackoverflow.com/questions/51439843/unknown-vs-any
// unknown is like I don't know yet
// any is like I don't care

// unknown which is the type-safe counterpart of any
let abc: any = 10; // We can assign anything to any
let xyz: unknown = 20; // We can assign anything to unknown just like any

let abc1: string = abc; // Any is assignable to anything
let xyz1: string = xyz; // Invalid; we can't assign xyz to any other type (without an explicit assertion)

abc.method(); // Ok; anything goes with any
xyz.method(); // Not ok; we don't know anything about this variable




// different ways to throw error

//1
} catch (error) {
  throw new Error(400);
}

//2
} catch (error) {
  throw 400;
}

//3
} catch (error) {
  return Promise.reject(new Error(400));
}

//4
return Promise.reject<A>(400 /*or Error*/ );

