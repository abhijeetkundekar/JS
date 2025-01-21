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
//mediumPizza.describeMethod();

class StuffedCrustPizza extends Pizza {
  constructor(toppings, size, crustType, stuffingType) {
    super(toppings, size, crustType);
    this.toppings = toppings;
    this.size = size;
    this.crustType;
    this.stuffingType = stuffingType;
  }

  describeStuffing() {
    super.describeMethod();
    console.log(`You have ordered pizza with stuffing ${this.stuffingType}`);
  }
}

let stuffedPizza = new StuffedCrustPizza(
  ["veggies, cheese"],
  "medium",
  "thin",
  "garlic"
);
stuffedPizza.describeStuffing();
stuffedPizza.describeMethod();
