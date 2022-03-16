// @ts-ignore
const num: number = 5;

//@ts-expect-error
const num1: number = 5;

// @ts-ignore is like ignore any kind of error.
// @ts-expect-error is like expect error and ignore that error

function somethingRisky() {}

try {
  somethingRisky();
} catch (err) {
  if (err instanceof Error) {
    console.log(err.stack);
  } else {
    console.log(err);
  }
}
