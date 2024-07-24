
class Operations {
    constructor (a, b) {
      this.a = a;
      this.b = b;
      this.c = 0
    }
  
    get sum() {
      return this.calcSum();
    }
  
    calcSum() {    
      this.c = this.a + this.b;
      return {
        value: this.c,
        text: `La suma de ${this.a} + ${this.b} = ${this.c}`
      }
    }
  
    get subtraction() {
      return this.calcSubtraction()
    }
  
    calcSubtraction() {
      this.c = this.a - this.b;
      return {
        value: this.c,
        text: `La resta de ${this.a} - ${this.b} = ${this.c}`
      }
    }
  
    get area() {
      return this.calcArea();
    }
  
    calcArea() {
      this.c = (this.a * this.b) / 2;
      return {
        value: this.c,
        text: `El área del triángulo es ${this.c}`
      }
    }
  }
  
  module.exports = Operations;