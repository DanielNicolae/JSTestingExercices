const reversedString = require('./reverseStr');

test('The string "test123_@Test" becomes "tseT@_321tset"', () => {
  expect(reversedString("test123_@Test")).toBe("tseT@_321tset");
});