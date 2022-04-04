class Sale {
  constructor(name, amount, price, discount) {
    this.name = name;
    this.amount = amount;
    this.price = price;

    this.discount = discount;
  }
  calcPrice() {
    return this.amount * this.price * (1 - this.discount);
  }
}

class Beverage extends Sale {}
const beverage = new Beverage("Pepsi", 3, 19, 0.1);
console.log(beverage.calcPrice());
console.log(beverage);
