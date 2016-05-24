// Regex lessons from: http://regexone.com
// https://www.codecademy.com/en/courses/javascript-intermediate-en-NJ7Lr/0/2

import assert from 'assert';

describe('Regex functions', () => {
  // http://regexone.com/lesson/introduction_abcs
  it('should match alphas', () => {
    assert.equal(/a/.test('abc'), true);
    assert.equal(/abc/.test('abc'), true);
    assert.equal(/abcd/.test('abc'), false);
  });

  it('should match numbers', () => {
    // http://regexone.com/lesson/letters_and_digits
    assert.equal(/1/.test(123), true);
    assert.equal(/123/.test(123), true);
    assert.equal(/1234/.test(123), false);
    assert.equal(/\d/.test(123), true);
    assert.equal(/\d/.test('123'), true);
  });

  it('should match any single character (letter, digit, whitespace, everything)', () => {
    // http://regexone.com/lesson/wildcards_dot
    // Similarly, there is the concept of a wildcard, which is represented by the . (dot) metacharacter, and can match any single character (letter, digit, whitespace, everything).
    assert.equal(/...\./.test('abc.'), true);
    assert.equal(/...\./.test('123.'), true);
    assert.equal(/...\./.test('ewfw'), false);
    assert.equal(/...\./.test('ewfw.'), true);
    assert.equal(/....\./.test('ewfw.'), true);
  });

  it('should match specific characters', () => {
    // http://regexone.com/lesson/matching_characters
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
    // http://regexone.com/lesson/excluding_characters
    assert.equal(/[^b]og/.test('hog'), true);
    assert.equal(/[^b]og/.test('dog'), true);
    assert.equal(/[^b]og/.test('bog'), false);

    assert.equal(/[hd]og/.test('hog'), true);
    assert.equal(/[hd]og/.test('dog'), true);
    assert.equal(/[hd]og/.test('bog'), false);
  });

  it('should match character ranges', () => {
    // http://regexone.com/lesson/character_ranges
    assert.equal(/[A-Zd-w]/.test('Ana'), true);
    assert.equal(/[A-Zd-w]/.test('Bob'), true);
    assert.equal(/[A-Zd-w]/.test('aax'), false);
    assert.equal(/[A-Zd-w]/.test('bby'), false);

    assert.equal(/[A-C][n-p][a-c]/.test('Ana'), true);
    assert.equal(/[A-C][n-p][a-c]/.test('Bob'), true);
    assert.equal(/[A-C][n-p][a-c]/.test('aax'), false);
    assert.equal(/[A-C][n-p][a-c]/.test('bby'), false);
  });

  it('should match the a range of characters', () => {
    // http://regexone.com/lesson/repeating_characters
    assert.equal(/zzz{1,3}/.test('wazzzzup'), true);
    assert.equal(/zzz{1,3}/.test('wazzzup'), true);
    assert.equal(/zzz{1,3}/.test('wazup'), false);

    assert.equal(/waz{2,4}up/.test('wazzzzup'), true);
    assert.equal(/waz{2,4}up/.test('wazzzup'), true);
    assert.equal(/waz{2,4}up/.test('wazup'), false);
  });

  it('should match an arbitrary number of characters', () => {
    // http://regexone.com/lesson/kleene_operators?
    assert.equal(/a*[bc]+/.test('aaaabcc'), true);
    assert.equal(/a*[bc]+/.test('aabbbbc'), true);
    assert.equal(/a*[bc]+/.test('aacc'), true);
    assert.equal(/a*[bc]+/.test('a'), false);
  });

  it('should match either zero or one of the preceding character or group', () => {
    // http://regexone.com/lesson/optional_characters
    assert.equal(/[\d]+ files? found\?/.test('1 file found?'), true);
    assert.equal(/[\d]+ files? found\?/.test('2 files found?'), true);
    assert.equal(/[\d]+ files? found\?/.test('24 files found?'), true);
    assert.equal(/[\d]+ files? found\?/.test('No files found.'), false);
  });

  it('should match whitespace', () => {
    // http://regexone.com/lesson/whitespaces?
    assert.equal(/\d\.\s+abc/.test('1.   abc'), true);
    assert.equal(/\d\.\s+abc/.test('2.    abc'), true);
    assert.equal(/\d\.\s+abc/.test('3.     abc'), true);
    assert.equal(/\d\.\s+abc/.test('4.abc'), false);
  });

  it('should describe both the start and the end of the line using the special ^ (hat) and $ (dollar sign) metacharacters', () => {
    // http://regexone.com/lesson/line_beginning_end
    assert.equal(/^Mission: successful$/.test('Mission: successful'), true);
    assert.equal(/^Mission: successful$/.test('Last Mission: unsuccessful'), false);
    assert.equal(/^Mission: successful$/.test('Next Mission: successful upon capture of target'), false);
  });

  it('should match only the filenames (not including extension) of the PDF files', () => {
    // http://regexone.com/lesson/capturing_groups
    assert.equal(/(file.+)\.pdf$/.test('file_record_transcript.pdf'), true);
    assert.equal(/(file.+)\.pdf$/.test('file_07241999.pdf'), true);
    assert.equal(/(file.+)\.pdf$/.test('testfile_fake.pdf.tmp'), false);

    assert.equal(/(file_.+)\.pdf$/.test('file_record_transcript.pdf'), true);
    assert.equal(/(file_.+)\.pdf$/.test('file_07241999.pdf'), true);
    assert.equal(/(file_.+)\.pdf$/.test('testfile_fake.pdf.tmp'), false);

    assert.equal(/(f.+)\.pdf$/.test('file_record_transcript.pdf'), true);
    assert.equal(/(f.+)\.pdf$/.test('file_07241999.pdf'), true);
    assert.equal(/(f.+)\.pdf$/.test('testfile_fake.pdf.tmp'), false);
  });

  it('should match and captures both the full date, as well as the year of the date', () => {
    // http://regexone.com/lesson/nested_groups
    assert.equal(/([A-Za-z]+ ([\d]+))/.test('Jan 1987'), true);
    assert.equal(/([A-Za-z]+ ([\d]+))/.test('May 1969'), true);
    assert.equal(/([A-Za-z]+ ([\d]+))/.test('Aug 2011'), true);

    assert.equal(/(\w+ (\d+))/.test('Jan 1987'), true);
    assert.equal(/(\w+ (\d+))/.test('May 1969'), true);
    assert.equal(/(\w+ (\d+))/.test('Aug 2011'), true);
  });

  it('should capture the width and height of each display', () => {
    // http://regexone.com/lesson/more_groups
    assert.equal(/(\d{1,})x(\d{1,})/.test('1280x720'), true);
    assert.equal(/(\d{1,})x(\d{1,})/.test('1920x1600'), true);
    assert.equal(/(\d{1,})x(\d{1,})/.test('1024x768'), true);

    assert.equal(/(\d+)x(\d+)/.test('1280x720'), true);
    assert.equal(/(\d+)x(\d+)/.test('1920x1600'), true);
    assert.equal(/(\d+)x(\d+)/.test('1024x768'), true);
  });

  it('should match only the lines with small fuzzy creatures ', () => {
    // http://regexone.com/lesson/conditionals?
    assert.equal(/I love (cats|dogs)/.test('I love cats '), true);
    assert.equal(/I love (cats|dogs)/.test('I love dogs '), true);
    assert.equal(/I love (cats|dogs)/.test('I love logs'), false);
    assert.equal(/I love (cats|dogs)/.test('I love cogs'), false);
  });
});

/*
  it('should', () => {
    assert.equal(/aaa/.test('abc'), true);
  });
 */

