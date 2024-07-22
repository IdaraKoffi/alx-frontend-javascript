import { getBudgetObject } from '../7-shorthand.js';
import { expect } from 'chai';

describe('Task 7', () => {
  it('should return an object with correct properties', () => {
    const budget = getBudgetObject(1000, 2000, 3000);
    expect(budget).to.deep.equal({ income: 1000, gdp: 2000, capita: 3000 });
  });
});

