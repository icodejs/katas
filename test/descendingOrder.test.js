import assert from 'assert';
import fn from '../src/writeOutNumbers.js';

const task = 'Take any non-negative integer as a argument and return it with it\'s digits in descending order';

describe(task, () => {
  it('123456789 -> 987654321', () => assert.equal(fn(123456789), '987654321'));
});
