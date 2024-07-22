import { sum } from '../4-rest-parameter.js';
import { expect } from 'chai';

describe('Task 4', () => {
  it('should return the sum of all parameters', () => {
    expect(sum(1, 2, 3, 4)).to.equal(10);
    expect(sum(1)).to.equal(1);
    expect(sum()).to.equal(0);
  });
});

