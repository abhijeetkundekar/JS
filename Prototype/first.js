const obj = {
  name: "adam",
  age: 14,
  playing: function () {
    console.log("playing started");
  },
};

console.log(obj);
console.log(obj.hasOwnProperty("name"));

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.describe = function () {
    console.log("pizza  is coming");
  };
}

const p = new Person("adam", 25);
console.log(p);

//let obj = { name: "Sample Object" };
console.log(obj.toString()); // Normally works

// Set prototype to null
obj.__proto__ = null;
try {
  console.log(obj.toString()); // This will throw an error
} catch (e) {
  console.log("Error:", e.message);
}

// There is no built-in way to restore the original prototype once it's set to null.
