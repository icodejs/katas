import assert from 'assert';
import fn from '../src/compose-functions.js';

describe('Compose()', () => {
  it('should accept a value as a parameter, as well as any number of functions as additional parameters and will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn', () => {
    assert.equal(fn(100), 100);
    assert.equal(fn(100, (v) => v + 1, (v) => v + 2, (v) => v + 3, (v) => v + 4), 110);
  });
});
