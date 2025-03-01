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

Array.prototype.myReduce1 = function (cb, initialValue) {
  let accumlator, initialIndex;
  if (arguments.length == 2) {
    accumlator = initialValue;
    initialIndex = 0;
  } else {
    accumlator = this[0];
    initialIndex = 1;
  }
  for (let i = initialIndex; i < this.length; i++) {
    accumlator = cb(accumlator, this[i]);
  }
  return accumlator;
};

let result2 = a.myReduce1(function (acc, num) {
  return (acc = acc * num);
}, 1);

console.log("result2 ", result2);
