//runtime type checking..
interface A {
  member: string;
}

function instanceOfA(object: any): object is A {
  return "member" in object;
}

var a: any = { member: "foobar" };

if (instanceOfA(a)) {
  alert(a.member);
}

// check with a discriminator
interface B {
  discriminator: "I-AM-B";
  member: string;
}

function instanceOfB(object: any): object is B {
  return object.discriminator === "I-AM-B";
}

var a: any = { discriminator: "I-AM-B", member: "foobar" };

if (instanceOfB(a)) {
  alert(a.member);
}
