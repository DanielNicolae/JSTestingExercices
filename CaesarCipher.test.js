const CaesarCipher = require("./CaesarCipher");

// Check for positive numbers
test("The result of the Caesar cipher, using the key = 2, for the text 'hello' is 'jgnnq'.", () => {
  expect(CaesarCipher("hello", 2)).toBe("jgnnq");
});

// Check for negative numbers
test("The result of the Caesar cipher, using the key = -2, for the text 'abc' is 'yza'.", () => {
  expect(CaesarCipher("abc", -2)).toBe("yza");
});

// Check for special characters and punctuation
test("The result of the Caesar cipher, using the key = 1, for the text 'a!.,;' is 'b!.,;'.", () => {
  expect(CaesarCipher("a!.,;", 1)).toBe("b!.,;");
});

// Check for upper case letters using a pozitive key
test("The result of the Caesar cipher, using the key = 1, for the text 'ZYX' is 'AZY'.", () => {
  expect(CaesarCipher("ZYX", 1)).toBe("AZY");
});


// Check for upper case letters using a negative key
test("The result of the Caesar cipher, using the key = -1, for the text 'ABC' is 'ZAB'.", () => {
  expect(CaesarCipher("ABC", -1)).toBe("ZAB");
});