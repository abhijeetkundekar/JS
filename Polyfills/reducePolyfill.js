let a = [10, 20, 30];

let result = a.reduce(function (acc, num) {
  return (acc = acc * num);
}, 1);
console.log("result is ", result);

Array.prototype.myReduce = function (cb, initialValue) {
  let firstIndex;
  let accumlator;

  if (arguments.length == 1) {
    accumlator = this[0];
    firstIndex = 1;
  } else {
    accumlator = initialValue;
    firstIndex = 0;
  }

  for (let i = 0; i < this.length; i++) {
    accumlator = cb(accumlator, this[i]);
  }
  return accumlator;
};

let result1 = a.myReduce(function (acc, num) {
  return (acc = acc * num);
}, 1);

console.log("my polyfill reduce ans ", result1);
