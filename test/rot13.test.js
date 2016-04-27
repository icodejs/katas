import assert from 'assert';
import fn from '../src/rot13.js';

describe('ROT13 encryption function', () => {
  it('should correctly encrypt strings', () => {
    assert.equal(fn('test'), 'grfg');
    assert.equal(fn('Grfg'), 'Test');
    assert.equal(fn('a'), 'n');
    assert.equal(fn('n'), 'a');
    assert.equal(fn('abcdefghijklmnopqrstuvwxyz '), 'nopqrstuvwxyzabcdefghijklm ');
  });
});
