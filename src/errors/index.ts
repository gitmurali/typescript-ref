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
