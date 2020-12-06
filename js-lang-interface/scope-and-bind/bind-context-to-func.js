
var foo = {
  x: 3
}

var bar = function () {
  console.log(this.x);
}

bar(); // undefined

bar.bind(foo)();  // 3

var boundFunc = bar.bind(foo);

boundFunc(); // 3
