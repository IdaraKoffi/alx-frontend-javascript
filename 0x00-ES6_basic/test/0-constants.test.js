import { taskFirst, taskNext } from '../0-constants.js';
import { expect } from 'chai';

describe('Task 0', () => {
  it('should return the correct strings', () => {
    expect(taskFirst()).to.equal('I prefer const when I can.');
    expect(taskNext()).to.equal('But sometimes let is okay');
  });
});

