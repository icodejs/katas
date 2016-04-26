import assert from 'assert';
import fn from '../src/concatenatingFunctions.js';

describe('Function prototype', () => {
  it('should implement a pipe function', () => {
    assert.deepEqual(fn([1, 2, 3, 4, 5]), [4, 9, 16, 25, 36]);
  });
});
