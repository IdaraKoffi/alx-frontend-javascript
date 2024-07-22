import { taskBlock } from '../1-block-scoped.js';
import { expect } from 'chai';

describe('Task 1', () => {
  it('should return true when input is true', () => {
    expect(taskBlock(true)).to.equal(true);
  });

  it('should return false when input is false', () => {
    expect(taskBlock(false)).to.equal(false);
  });
});

