const analyzeArray = require('./arrayAnalysis');

test('The function call analyzeArray([2,4,6]) returns the object {average: 4, min: 2, max: 6, length: 3}.', () => {
  expect(analyzeArray([2, 4, 6])).toEqual({ average: 4, min: 2, max: 6, length: 3 });
});

test('The function call analyzeArray([2,4,6]) returns the object {average: 4, min: 2, max: 6, length: 3}.', () => {
  expect(analyzeArray([2, 4, 6])).toStrictEqual({ average: 4, min: 2, max: 6, length: 3 });
});

