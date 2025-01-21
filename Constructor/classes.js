class Pizza {
  constructor(toppings, size, crustType) {
    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
  }

  describeMethod() {
    console.log(
      `Pizza is ordered with size ${this.size} with type ${this.crustType} and havings toppings like ${this.toppings}`
    );
  }
}

let mediumPizza = new Pizza(["veggies", "cheese"], "medium", "thick");
mediumPizza.describeMethod();
