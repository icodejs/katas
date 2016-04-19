import assert from 'assert';
import mix, { sanitise, group } from '../src/mix';

describe('sanitise', () => {
  it('should remove any character that is not lowercase between a to z', () => {
    assert.equal(sanitise('Once upon A Time'), 'nene');
    assert.equal(sanitise('Writing objects: 100% (4/4), 431 bytes'), 'itibetsbtes');
  });
});

describe('group', () => {
  it('should group multiple occurances of the same letter and recored their count', () => {
    assert.deepEqual(group('eegg'), {
      e: 2, g: 2
    });

    assert.deepEqual(group('ttttgghhhhbbbbbj'), {
      t: 4, g: 2, h: 4, b: 5, j: 1
    });
  });
});

describe('mix', () => {
  it('Given two strings s1 and s2, should visualize how different the two strings are', () => {
    assert.equal(mix('my&friend&Paul has heavy hats! &', 'my friend John has many many friends &'), '2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss');

    assert.equal(mix('mmmmm m nnnnn y&friend&Paul has heavy hats! &', 'my frie n d Joh n has ma n y ma n y frie n ds n&'), '1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss');

    assert.equal(mix('Are the kids at home? aaaaa fffff', 'Yes they are here! aaaaa fffff'), '=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh');

    assert.equal(mix('codewars', 'codewars'), '');

    assert.equal(mix('Lords of the Fallen', 'gamekult'), '1:ee/1:ll/1:oo');

    assert.equal(mix('A generation must confront the looming ', 'codewarrs'), '1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr');
  });
});
