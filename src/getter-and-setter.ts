class foo {
  private _bar: boolean = false;

  get bar(): boolean {
    return this._bar;
  }

  set bar(value: boolean) {
    this._bar = value;
  }
}

// above class converted to javascript
let foo1 = (function () {
  function foo() {
    this._bar = false;
  }
  Object.defineProperty(foo.prototype, "bar", {
    get: function () {
      return this._bar;
    },
    set: function (value) {
      this._bar = value;
    },
    enumerable: true,
    configurable: true
  });
  return foo;
})();
