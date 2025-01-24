function Car(name, model) {
  this.name = name;
  this.model = model;
}

Car.prototype.displayInfo = function () {
  console.log("hey we defined the methos in prototype " + this.model);
};

const car = new Car("Ertiga", "Maruti Suzuki");
console.log(car);
car.displayInfo();

//below thing is not recommended to define method inside __proto__
// which will make this method available to every other object
Car.prototype.__proto__.displayInfo1 = function () {
  console.log("its __proto__ method");
};

const obj = {
  name: "adam",
  age: 24,
};

console.log(obj);
console.log(obj.hasOwnProperty("name"));
