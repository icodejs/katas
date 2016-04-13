import assert from 'assert';
import fn from '../src/descendingOrder.js';

const task = 'Take any non-negative integer as a argument and return it with it\'s digits in descending order';

describe(task, () => {
  it('0 -> 0', () => assert.strictEqual(fn(0), 0));
  it('145263 -> 654321', () => assert.strictEqual(fn(145263), 654321));
  it('238947 -> 987432', () => assert.strictEqual(fn(238947), 987432));
  it('123456789 -> 987654321', () => assert.strictEqual(fn(123456789), 987654321));
});
