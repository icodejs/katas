import assert from 'assert';
import fn from '../src/zeroFill.js';

describe('Add a specified quantity of leading zeros to any given number', () => {
  it('should pad 11 with 3 zeros', () => assert.equal(fn(11, 5), '00011'));
  it('should pad 11 with 9 zeros', () => assert.equal(fn(11, 11), '00000000011'));
  it('should pad 32 with 3 zeros', () => assert.equal(fn(-32, 5), '00032'));
  it('should pad 0 with 2 zeros', () => assert.equal(fn(0, 3), '000'));
});
