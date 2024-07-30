import groceriesList from '../9-groceries_list.js';

test('groceriesList returns a correct map of grocery items', () => {
  const expected = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
  expect(groceriesList()).toStrictEqual(expected);
});
