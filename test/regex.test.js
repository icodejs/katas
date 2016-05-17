// Regex lessons from: http://regexone.com

import assert from 'assert';

describe('Regex functions', () => {
  it('should match alphas', () => {
    assert.equal(/a/.test('abc'), true);
    assert.equal(/abc/.test('abc'), true);
    assert.equal(/abcd/.test('abc'), false);
  });

  it('should match numbers', () => {
    assert.equal(/1/.test(123), true);
    assert.equal(/123/.test(123), true);
    assert.equal(/1234/.test(123), false);
    assert.equal(/\d/.test(123), true);
    assert.equal(/\d/.test('123'), true);
  });

  it('should match using wildcard', () => {
    assert.equal(/...\./.test('abc.'), true);
    assert.equal(/...\./.test('123.'), true);
    assert.equal(/...\./.test('ewfw'), false);
    assert.equal(/...\./.test('ewfw.'), true);
    assert.equal(/....\./.test('ewfw.'), true);
  });

  it('should match specific characters', () => {
    assert.equal(/[cfm]/.test('can'), true);
    assert.equal(/[cfm]/.test('man'), true);
    assert.equal(/[cfm]/.test('dan'), false);
    assert.equal(/[cfm]/.test('ran'), false);

    assert.equal(/[cmf]an/.test('can'), true);
    assert.equal(/[cmf]an/.test('man'), true);
    assert.equal(/[cmf]an/.test('dan'), false);
    assert.equal(/[cmf]an/.test('ran'), false);
    assert.equal(/[cmf]an/.test('pan'), false);

    assert.equal(/[^drp]an/.test('can'), true);
    assert.equal(/[^drp]an/.test('man'), true);
    assert.equal(/[^drp]an/.test('dan'), false);
    assert.equal(/[^drp]an/.test('ran'), false);
    assert.equal(/[^drp]an/.test('pan'), false);
  });

  it('should exclude specific characters', () => {
    assert.equal(/[^b]og/.test('hog'), true);
    assert.equal(/[^b]og/.test('dog'), true);
    assert.equal(/[^b]og/.test('bog'), false);

    assert.equal(/[hd]og/.test('hog'), true);
    assert.equal(/[hd]og/.test('dog'), true);
    assert.equal(/[hd]og/.test('bog'), false);
  });

  it('should match character ranges', () => {
    assert.equal(/[A-Zd-w]/.test('Ana'), true);
    assert.equal(/[A-Zd-w]/.test('Bob'), true);
    assert.equal(/[A-Zd-w]/.test('aax'), false);
    assert.equal(/[A-Zd-w]/.test('bby'), false);

    assert.equal(/[A-C][n-p][a-c]/.test('Ana'), true);
    assert.equal(/[A-C][n-p][a-c]/.test('Bob'), true);
    assert.equal(/[A-C][n-p][a-c]/.test('aax'), false);
    assert.equal(/[A-C][n-p][a-c]/.test('bby'), false);
  });
});

