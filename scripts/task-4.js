//4) Реализовать функцию calculate calculate(3).add(2).multiply(2).result() // 10

class myCalculator {
  constructor(number) {
    this.value = number;
  }

  add(number) {
    this.value += number;
    return this;
  } 

  multiply(number) {
    this.value *= number;
    return this;
  }

  result() {
    return this.value;
  }
}


const calculate = new myCalculator(3)
console.log(calculate.add(2).multiply(2).result())
