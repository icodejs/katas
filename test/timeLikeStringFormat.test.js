import assert from 'assert';
import fn from '../src/timeLikeStringFormat.js';

describe('timeLikeStringFormat', () => {
  it('should build up a method that takes an integer and formats it to a \'time - like\' format', () => {
    assert.equal(fn(1740), '17:40');
    assert.equal(fn(800), '8:00');
    assert.throws(() => fn(10000), /error/);
  });
});
