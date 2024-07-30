import setFromArray from '../6-set.js';

test('setFromArray creates a correct set from array', () => {
  const array = [1, 2, 3, 4, 5];
  const expected = new Set(array);
  expect(setFromArray(array)).toStrictEqual(expected);
});
