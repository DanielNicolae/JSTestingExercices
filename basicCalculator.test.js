const Calculator = require('./basicCalculator');

const result1 = new Calculator(3, 2);

test('Expects 3 + 2 = 5', () => {
  expect(result1.add()).toBe(5);
});

const result2 = new Calculator(5, 2);

test('Expects 5 - 2 = 3', () => {
  expect(result2.subtract()).toBe(3);
});

const result3 = new Calculator(3, 6);

test('Expects 3 - 6 = -3', () => {
  expect(result3.subtract()).toBe(-3);
});

const result4 = new Calculator(5, 7);

test('Expects 5 * 7 = 35', () => {
  expect(result4.multiply()).toBe(35);
});

const result5 = new Calculator(24, 8);

test('Expects 24 / 8 = 3', () => {
  expect(result5.divide()).toBe(3);
});

const result6 = new Calculator(-100, 10);

test('Expectsw -100 / 10 = -10', () => {
  expect(result6.divide()).toBe(-10);
});