import assert from 'assert';
import fn from '../src/tickets.js';

describe('Avengers movie', () => {
  it('should alert if Vasya has enough change to make the transition', () => {
    assert.equal(fn([ 25, 25, 25, 25, 50, 100, 50 ]), 'YES');
    assert.equal(fn([25, 100]), 'NO');
  });
});
