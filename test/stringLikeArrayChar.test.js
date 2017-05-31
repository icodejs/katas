import assert from 'assert';
import fn from '../src/stringLikeArrayChar.js';

describe('stringLikeArrayChar adds to the String.prototype the following Array.prototype methods', () => {
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

  it('reduceRight', () => {
    const addPipes = (b, a) => {
      if (!b) {
        return a;
      }
      return b + '|' + a;
    }
    assert.equal('qwerty'.reduceRight(addPipes), 'y|t|r|e|w|q');
  });

  it('sort', () => {
    assert.equal('fedcba'.sort(), 'abcdef');
  });

  it('push', () => {
    assert.equal('abcde'.push('f'), 'abcdef');
  });

  it('pop', () => {
    assert.equal('abcdef'.pop(), 'abcde');
  });

  it('shift', () => {
    assert.equal('abcdef'.shift(), 'bcdef');
  });

  it('unshift', () => {
    assert.equal('bcdef'.unshift('a'), 'abcdef');
  });

  it('splice', () => {
    assert.equal('Hello Peter'.splice(6, 5, 'John'), 'Hello John');
  });
});

