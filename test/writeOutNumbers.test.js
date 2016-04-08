import assert from 'assert';
import fn from '../src/writeOutNumbers.js';

const task = 'Transforms any positive number to a string representing the number in words. It should work for all numbers between 0 and 999999.';

describe(task, () => {
  it('0 -> zero', () => assert.equal(fn(0), 'zero'));
  it('1 -> one', () => assert.equal(fn(1), 'one'));
  it('2 -> two', () => assert.equal(fn(2), 'two'));
  it('9 -> nine', () => assert.equal(fn(9), 'nine'));
  it('10 -> ten', () => assert.equal(fn(10), 'ten'));
  it('17 -> seventeen', () => assert.equal(fn(17), 'seventeen'));
  it('20 -> twenty', () => assert.equal(fn(20), 'twenty'));
  it('21 -> twenty-one', () => assert.equal(fn(21), 'twenty-one'));
  it('45 -> forty-five', () => assert.equal(fn(45), 'forty-five'));
  it('80 -> eighty', () => assert.equal(fn(80), 'eighty'));
  it('99 -> ninety-nine', () => assert.equal(fn(99), 'ninety-nine'));
  it('100 -> one hundred', () => assert.equal(fn(100), 'one hundred'));
  it('301 -> three hundred one', () => assert.equal(fn(301), 'three hundred one'));
  it('799 -> seven hundred ninety-nine', () => assert.equal(fn(799), 'seven hundred ninety-nine'));
  it('800 -> eight hundred', () => assert.equal(fn(800), 'eight hundred'));
  it('950 -> nine hundred fifty', () => assert.equal(fn(950), 'nine hundred fifty'));
  it('1000 -> one thousand', () => assert.equal(fn(1000), 'one thousand'));
  it('1002 -> one thousand two', () => assert.equal(fn(1002), 'one thousand two'));
  it('3051 -> three thousand fifty-one', () => assert.equal(fn(3051), 'three thousand fifty-one'));
  it('7200 -> seven thousand two hundred', () => assert.equal(fn(7200), 'seven thousand two hundred'));
  it('7219 -> seven thousand two hundred nineteen', () => assert.equal(fn(7219), 'seven thousand two hundred nineteen'));
  it('8330 -> eight thousand three hundred thirty', () => assert.equal(fn(8330), 'eight thousand three hundred thirty'));
  it('99999 -> ninety-nine thousand nine hundred ninety-nine', () => assert.equal(fn(99999), 'ninety-nine thousand nine hundred ninety-nine'));
  it('888888 -> eight hundred eighty-eight thousand eight hundred eighty-eight', () => assert.equal(fn(888888), 'eight hundred eighty-eight thousand eight hundred eighty-eight'));
});
