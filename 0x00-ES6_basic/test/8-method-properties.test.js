import { getBudgetForCurrentYear } from '../8-method-properties.js';
import { expect } from 'chai';

describe('Task 8', () => {
  it('should return an object with methods', () => {
    const budget = getBudgetForCurrentYear(1000, 2000, 3000);
    expect(budget.getIncome()).to.equal(1000);
    expect(budget.getGdp()).to.equal(2000);
    expect(budget.getCapita()).to.equal(3000);
  });
});

