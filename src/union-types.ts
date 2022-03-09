function flipCoin(): "heads" | "tails" {
  return Math.random() > 0.5 ? "heads" : "tails";
}

flipCoin();

// second
// hover on function which should return Date | "something else"
function returnDateOrString() {
  if (Math.random() > 0.5) return new Date();
  return "something else";
}
