import Currency from '../3-currency';

test('Currency initializes with correct properties', () => {
  const dollar = new Currency('$', 'Dollars');
  expect(dollar.code).toBe('$');
  expect(dollar.name).toBe('Dollars');
});

test('displayFullCurrency returns correct string', () => {
  const dollar = new Currency('$', 'Dollars');
  expect(dollar.displayFullCurrency()).toBe('Dollars ($)');
});

