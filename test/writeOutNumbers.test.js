import assert from 'assert';
import won from '../src/writeOutNumbers';

const task = 'Transforms any positive number to a string representing the number in words. It should work for all numbers between 0 and 999999.';

describe(task, () => {
  it('0 -> zero', () => assert.equal(won(0), 'zero'));
  it('1 -> one', () => assert.equal(won(1), 'one'));
  it('2 -> two', () => assert.equal(won(2), 'two'));
  it('9 -> nine', () => assert.equal(won(9), 'nine'));
  it('10 -> ten', () => assert.equal(won(10), 'ten'));
  it('17 -> seventeen', () => assert.equal(won(17), 'seventeen'));
  it('20 -> twenty', () => assert.equal(won(20), 'twenty'));
  it('21 -> twenty-one', () => assert.equal(won(21), 'twenty-one'));
  it('45 -> forty-five', () => assert.equal(won(45), 'forty-five'));
  it('80 -> eighty', () => assert.equal(won(80), 'eighty'));
  it('99 -> ninety-nine', () => assert.equal(won(99), 'ninety-nine'));
  it('100 -> one hundred', () => assert.equal(won(100), 'one hundred'));
  it('301 -> three hundred one', () => assert.equal(won(301), 'three hundred one'));
  it('799 -> seven hundred ninety-nine', () => assert.equal(won(799), 'seven hundred ninety-nine'));
  it('800 -> eight hundred', () => assert.equal(won(800), 'eight hundred'));
  it('950 -> nine hundred fifty', () => assert.equal(won(950), 'nine hundred fifty'));
  it('1000 -> one thousand', () => assert.equal(won(1000), 'one thousand'));
  it('1002 -> one thousand two', () => assert.equal(won(1002), 'one thousand two'));
  it('3051 -> three thousand fifty-one', () => assert.equal(won(3051), 'three thousand fifty-one'));
  it('7200 -> seven thousand two hundred', () => assert.equal(won(7200), 'seven thousand two hundred'));
  it('7219 -> seven thousand two hundred nineteen', () => assert.equal(won(7219), 'seven thousand two hundred nineteen'));
  it('8330 -> eight thousand three hundred thirty', () => assert.equal(won(8330), 'eight thousand three hundred thirty'));
  it('99999 -> ninety-nine thousand nine hundred ninety-nine', () => assert.equal(won(99999), 'ninety-nine thousand nine hundred ninety-nine'));
  it('888888 -> eight hundred eighty-eight thousand eight hundred eighty-eight', () => assert.equal(won(888888), 'eight hundred eighty-eight thousand eight hundred eighty-eight'));
});
