"use strict";
//1
a = 0;
console.log("scenario 1", a);
console.log(this); //window object
var a;
//2
console.log("scenario 2");

function sce2() {
  console.log(this);
}
sce2(); //global object

console.log("scenario 3");
const obj = {
  name: "adam",
  age: 30,
  scenario3: function () {
    console.log(this);
  },
};

obj.scenario3(); //object

console.log("Scenario 4");
const obj1 = {
  name: "adam",
  age: 30,

  fn1: function () {
    function fn2() {
      console.log(this);
    }
    fn2();
  },
};

obj1.fn1(); //global object

//Arrow functions
console.log("Arrow funtion");
const objArrow = {
  name: "adam",
  age: 30,
  scenario3: () => {
    console.log(this);
  },
};

objArrow.scenario3();
