class Calculator {
  //property
  constructor(value) {
    this.value = value;
  }

  //method
  sum(num) {
    return num + this.value;
  }
  subtract(num) {
    return num - this.value;
  }
  multiply(num) {
    return num * this.value;
  }
  divide(num) {
    return num / this.value;
  }
  show() {
    alert(this.value);
  }
}
const calculator = new Calculator(10);
console.log(calculator);
console.log(calculator.sum(10));
console.log(calculator.subtract(20));
console.log(calculator.multiply(30));
console.log(calculator.divide(30));
console.log(calculator.show());
