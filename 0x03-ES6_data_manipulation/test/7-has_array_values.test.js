import hasValuesFromArray from '../7-has_array_values.js';

test('hasValuesFromArray returns true if all values are present in the set', () => {
  const set = new Set([1, 2, 3, 4, 5]);
  const array = [1, 2];
  expect(hasValuesFromArray(set, array)).toBe(true);
});

test('hasValuesFromArray returns false if some values are not present in the set', () => {
  const set = new Set([1, 2, 3, 4, 5]);
  const array = [1, 6];
  expect(hasValuesFromArray(set, array)).toBe(false);
});
