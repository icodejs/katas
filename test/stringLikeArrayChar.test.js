import assert from 'assert';
import fn from '../src/stringLikeArrayChar.js';

describe('stringLikeArrayChar', () => {
  it('map', () => {
    const uppercase = (c) => c.toUpperCase();
    assert.equal('qwerty'.map(uppercase), 'QWERTY');
  });

  it('join', () => {
    assert.equal('qwerty'.join('-'), 'q-w-e-r-t-y');
  });

  it('reverse', () => {
    assert.equal('qwerty'.reverse(), 'ytrewq');
  });

  it('filter', () => {
    const removeY = (c) => c.toLowerCase() !== 'y';
    assert.equal('qwerty'.filter(removeY), 'qwert');
  });

  it('forEach', () => {
    let expected = '';
    const word = 'qwerty';

    word.forEach((c) => {
      expected += c.toUpperCase();
    });

    assert.equal(expected, 'QWERTY');
  });

  it('some', () => {
    const hasAnE = (c) => c === 'e';
    assert.equal('qwerty'.some(hasAnE), true);
  });

  it('every', () => {
    const doesntHaveAnX = (c) => c !== 'x';
    assert.equal('qwerty'.every(doesntHaveAnX), true);
  });

  it('reduce', () => {
    const addPipes = (a, b) => {
      if (!a) {
        return b;
      }
      return a + '|' + b;
    }
    assert.equal('qwerty'.reduce(addPipes), 'q|w|e|r|t|y');
  });
});

