import { add } from '../3-default-parameter.js';
import { expect } from 'chai';

describe('Task 3', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).to.equal(3);
  });

  it('should use default value when second parameter is not provided', () => {
    expect(add(10)).to.equal(110);
  });
});

