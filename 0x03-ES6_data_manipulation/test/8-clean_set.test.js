import cleanSet from '../8-clean_set.js';

test('cleanSet returns a correct string of values from the set', () => {
  const set = new Set(['bonnie', 'bonnet', 'bong']);
  const expected = 'nie,net,ng';
  expect(cleanSet(set, 'bon')).toBe(expected);
});

test('cleanSet returns an empty string if no value matches the prefix', () => {
  const set = new Set(['bonnie', 'bonnet', 'bong']);
  expect(cleanSet(set, 'foo')).toBe('');
});
