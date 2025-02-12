//1
console.log("scenario 1");
console.log(this); //window obj

//2
console.log("scenario 2");

function sce2() {
  console.log(this);
}
sce2(); //window object

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

obj1.fn1(); //window object

//Arrow functions
console.log("arrow funtion always refers to Scenario 1");
const objArrow = {
  name: "adam",
  age: 30,
  scenario3: () => {
    console.log(this);
  },
};

objArrow.scenario3();
