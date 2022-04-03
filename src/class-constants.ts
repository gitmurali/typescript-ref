// class constants using static and readonly
class MyClass {
  static readonly readonlyProp = 1;

  constructor() {
    MyClass.readonlyProp = 2; // cannot assign
  }

  myMethod() {
    console.log(MyClass.readonlyProp);
    MyClass.readonlyProp = 3; // cannot assign
  }
}

MyClass.readonlyProp = 10; // cannot assign
