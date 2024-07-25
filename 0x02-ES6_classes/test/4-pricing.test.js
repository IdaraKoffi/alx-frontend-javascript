import Pricing from '../4-pricing';
import Currency from '../3-currency';

test('Pricing initializes with correct properties', () => {
  const euro = new Currency('EUR', 'Euro');
  const price = new Pricing(100, euro);
  expect(price.amount).toBe(100);
  expect(price.currency).toBe(euro);
});

test('displayFullPrice returns correct string', () => {
  const euro = new Currency('EUR', 'Euro');
  const price = new Pricing(100, euro);
  expect(price.displayFullPrice()).toBe('100 Euro (EUR)');
});

test('convertPrice returns correct converted amount', () => {
  expect(Pricing.convertPrice(100, 1.2)).toBe(120);
});

