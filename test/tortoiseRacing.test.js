import assert from 'assert';
import fn from '../src/tortoiseRacing.js';

const task = 'Given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?';

describe(task, () => {
  it('race(720, 850, 70), [0, 32, 18]', () => {
    assert.deepEqual(fn(720, 850, 70), [0, 32, 18]);
  });

  it('race(80, 91, 37), [3, 21, 49]', () => {
    assert.deepEqual(fn(80, 91, 37), [3, 21, 49]);
  });

  it('race(80, 100, 40), [2, 0, 0]', () => {
    assert.deepEqual(fn(80, 100, 40), [2, 0, 0]);
  });

  it('race(820, 850, 550), [18,20,0]', () => {
    assert.deepEqual(fn(820, 850, 550), [18, 20, 0]);
  });

  it('race(304, 484, 97), [0,32,20]', () => {
    assert.deepEqual(fn(304, 484, 97), [0, 32, 20]);
  });
});
