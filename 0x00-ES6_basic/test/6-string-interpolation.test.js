import { getSanFranciscoDescription } from '../6-string-interpolation.js';
import { expect } from 'chai';

describe('Task 6', () => {
  it('should return the correct string', () => {
    expect(getSanFranciscoDescription()).to.equal(
      'As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. Its GDP was $154.2 billion, and its GDP per capita was $178,479.'
    );
  });
});

