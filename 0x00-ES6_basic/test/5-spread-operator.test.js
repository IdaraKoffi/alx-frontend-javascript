import { concatArrays } from '../5-spread-operator.js';
import { expect } from 'chai';

describe('Task 5', () => {
  it('should concatenate arrays and string', () => {
    expect(concatArrays([1, 2], [3, 4], 'hello')).to.deep.equal([1, 2, 3, 4, 'h', 'e', 'l', 'l', 'o']);
  });
});

