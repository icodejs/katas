import assert from 'assert';
import fn from '../src/isIntArray.js';

describe('isIntArray function', () => {
  it('should return true for empty array', () => {
    assert.equal(fn([]), true);
  });

  it('should return true for array of integers', () => {
    assert.equal(fn([1, 2, 3, 4]), true);
  });

  it('should return false for array of non integers', () => {
    assert.equal(fn([1, 2, 3, '4']), false);
    assert.equal(fn([1, 2, NaN, 4, 5]), false);
    assert.equal(fn(null), false);
    assert.equal(fn([1.0, 2.0, 3.0001]), false);
    assert.equal(fn([1.23e-7, 2]), false);
    assert.equal(fn(['-1']), false);
    assert.equal(fn([null]), false);
    assert.equal(fn([undefined]), false);
    assert.equal(fn([NaN]), false);
  });
});
