import createInt8TypedArray from '../5-typed_arrays.js';

test('createInt8TypedArray creates a correct typed array', () => {
  const typedArray = createInt8TypedArray(10, 2, 89);
  const expected = new Int8Array(10);
  expected[2] = 89;
  expect(typedArray).toStrictEqual(expected);
});

test('createInt8TypedArray throws error when the position is out of range', () => {
  expect(() => createInt8TypedArray(10, 20, 89)).toThrow('Position outside range');
});
