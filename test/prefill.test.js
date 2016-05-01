import assert from 'assert';
import fn from '../src/prefill.js';

describe('function prefill', () => {
  it('should that returns an array of n elements', () => {
    assert.deepStrictEqual(fn(3, 1), [1, 1, 1]);
    assert.deepStrictEqual(fn('1', 1), [1]);
    assert.deepStrictEqual(fn(3, 12), [12, 12, 12]);
    assert.deepStrictEqual(fn(3, 'abc'), ['abc', 'abc', 'abc']);
    assert.deepStrictEqual(fn(3, fn(2, '2d')), [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);
    assert.deepStrictEqual(fn(3), [undefined, undefined, undefined]);
    assert.throws(() => { fn('xyz', 1); }, e => {
      return e instanceof Error && /xyz is invalid/.test(e);
    });
    assert.throws(() => { fn('xyz', 1); }, e => {
      return e.name === 'TypeError' && e.message === 'xyz is invalid';
    });
  });
});
