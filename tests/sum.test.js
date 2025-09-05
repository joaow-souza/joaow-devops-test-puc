const { sum, sub, multiply, divide } = require('../operations.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subs 3 - 1 to equal 2', () => {
  expect(sub(3, 1)).toBe(2);
});

test('multiply 5 to 2', () => {
  expect(multiply(5, 2)).toBe(10);
});

test('divide 5 to 2', () => {
  expect(divide(5, 2)).toBe(2.5);
});