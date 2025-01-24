let obj = {
  displayInfo: function () {
    console.log("using object create");
  },
};

//the object create will add obj data inside the prototype
let o1 = Object.create(obj);
o1.name = "object";
o1.property = "object";
console.log(o1);
