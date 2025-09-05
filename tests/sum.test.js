const { sum, sub } = require('../operations.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subs 3 - 1 to equal 2', () => {
  expect(sub(3, 1)).toBe(2);
});
