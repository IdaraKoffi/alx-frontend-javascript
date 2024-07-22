import { add } from '../2-arrow.js';
import { expect } from 'chai';

describe('Task 2', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).to.equal(3);
    expect(add(-1, 1)).to.equal(0);
    expect(add(0, 0)).to.equal(0);
  });
});

