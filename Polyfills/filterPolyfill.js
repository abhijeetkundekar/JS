let arr = [2, 3, 5, 6, 8];

let result = arr.filter(function (num) {
  return num > 6;
});

console.log("result is ", result);

Array.prototype.myFilter = function (cb) {
  if (typeof cb != "function") {
    throw new Error("cb is not a type of function");
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) result.push(this[i]);
  }
  return result;
};

let res = arr.myFilter(function (num) {
  return num < 5;
});

console.log("new result is ", res);

Array.prototype.myFilter1 = function (cb, thisArgs) {
  const arr = thisArgs || this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};
let ress = arr.myFilter1(
  function (num) {
    return num < 5;
  },
  [0, 1]
);

console.log("new result is l", ress);
