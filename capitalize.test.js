
const capitalized = require('./capitalize');

test('The word "banana" becomes "Banana"', () => {
  expect(capitalized("banana")).toBe("Banana");
});