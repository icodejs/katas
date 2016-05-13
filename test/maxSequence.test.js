import assert from 'assert';
import fn from '../src/maxSequence.js';

describe('maxSequence', () => {
  it('should find the max sequence in an array', () => {
    assert.equal(fn([]), 0);
    assert.equal(fn([16]), 16);
    assert.equal(fn([2, 4, 6]), 12);
    assert.equal(fn([-2, -4, -6]), 0);
    assert.equal(fn([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
    assert.equal(fn([ -5, 3, 18, 0, 33 ]), 54);
    assert.equal(fn([-9, -9, -39, -32, -25, 21, 35, -7, -34, 33, 13, -6, 47, -17, 26, -20, -30, 35, 1, -13, -4, 23, 24]), 127);
    assert.equal(fn([-48, -29, 9, 24, 35, 21, 27, -35, -4, 15, 13, 12, -9, -14, 25, 40, -24, -20, 44, -8, 11, -25, 41, -19, 17, -23, 24, -38, 8, 32, 41, -28, -31, 2, 31, 8, -42, -33, -38, -23, -10, -35, -25, -28]), 220);
    assert.equal(fn([ -38, 3, -17, 22, -21, -25, -36, -41, 30 ]), 30);
  });
});
