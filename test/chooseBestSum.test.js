import assert from 'assert';
import fn from '../src/chooseBestSum.js';

describe('chooseBestSum', () => {
  it('should return the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit, if that sum exists, or return null', () => {
    assert.equal(fn(174, 3, [50, 55, 57, 58, 60]), 173);
    assert.equal(fn(163, 3, [50]), null);
    assert.equal(fn(230, 3, [91, 74, 73, 85, 73, 81, 87]), 228);
    assert.equal(fn(331, 2, [91, 74, 73, 85, 73, 81, 87]), 178);
    assert.equal(fn(331, 5, [91, 74, 73, 85, 73, 81, 87]), null);
    assert.equal(fn(331, 1, [91, 74, 73, 85, 73, 81, 87]), 91);
    assert.equal(fn(163, 3, [50, 55, 56, 57, 58]), 163);
  });
});


