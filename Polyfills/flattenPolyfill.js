let arr = [1, [2, [3], 4, [5, [6, [7, [8]]], 9]]];
let res = arr.flat(5); // flatten method is available now for arr array
console.log("flatten result is ", res, arr.length);

Array.prototype.myFlat = function () {
  let arr = this;
  const flat = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) flat(arr[i]);
    }
  };
};
