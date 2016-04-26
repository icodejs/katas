import assert from 'assert';
import fn from '../src/ipToInt32.js';

describe('Enter IPv4 address and returns a 32 bit number', () => {
  it('128.32.10.1 -> 2149583361', () => assert.equal(fn('128.32.10.1'), 2149583361));
  it('128.114.17.104 -> 2154959208', () => assert.equal(fn('128.114.17.104'), 2154959208));
  it('0.0.0.0 -> 0', () => assert.equal(fn('0.0.0.0'), 0));
});
