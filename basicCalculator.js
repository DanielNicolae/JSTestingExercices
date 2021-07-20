let Calculator = function (a, b) {
  this.a = a;
  this.b = b;
};

Calculator.prototype.add = function () {
  return (this.a + this.b);
};

Calculator.prototype.subtract = function () {
  return (this.a - this.b);
};

Calculator.prototype.multiply = function () {
  return (this.a * this.b);
};

Calculator.prototype.divide = function () {
  return (this.a / this.b);
};

module.exports = Calculator;