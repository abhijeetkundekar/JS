function Pizza(toppings, size, crustType) {
  this.toppings = toppings;
  this.size = size;
  this.crustType = crustType;

  this.describe = function () {
    console.log(
      `you ordered ${this.size} Pizza with crust type ${crustType} with toppings ${toppings} `
    );
  };
}

const largePizza = new Pizza(["cheese, berries"], "large", "thin");
largePizza.describe();
