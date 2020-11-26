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


const calculate = new myCalculator(3);
calculate.add(2).multiply(2).result();
