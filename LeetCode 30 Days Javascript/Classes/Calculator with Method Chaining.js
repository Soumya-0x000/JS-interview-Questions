class Calculator {
    constructor(initialValue) {
      this.result = initialValue;
    }
  
    add(value) {
      this.result += value;
      return this;
    }
  
    subtract(value) {
      this.result -= value;
      return this;
    }
  
    multiply(value) {
      this.result *= value;
      return this;
    }
  
    divide(value) {
      if (value === 0) {
        throw new Error("Division by zero is not allowed");
      }
      this.result /= value;
      return this;
    }
  
    power(value) {
      this.result **= value;
      return this;
    }
  
    getResult() {
      return this.result;
    }
  }
  
  // Example usage:
  const myCalculator = new Calculator(0); // Initialize with an initial value
  const result = myCalculator.add(5).multiply(3).divide(2).power(2).getResult();
  console.log(result); // Output: 56.25