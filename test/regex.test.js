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

    assert.equal(/.*/.test('ewfw.'), true);
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
    const regex = /a*[bc]+/;
    assert.equal(regex.test('aaaabcc'), true);
    assert.equal(regex.test('aabbbbc'), true);
    assert.equal(regex.test('aacc'), true);
    assert.equal(regex.test('a'), false);
  });

  it('should match either zero or one of the preceding character or group', () => {
    // http://regexone.com/lesson/optional_characters
    const regex = /[\d]+ files? found\?/;
    assert.equal(regex.test('1 file found?'), true);
    assert.equal(regex.test('2 files found?'), true);
    assert.equal(regex.test('24 files found?'), true);
    assert.equal(regex.test('No files found.'), false);
  });

  it('should match whitespace', () => {
    // http://regexone.com/lesson/whitespaces?
    const regex = /\d\.\s+abc/;
    assert.equal(regex.test('1.   abc'), true);
    assert.equal(regex.test('2.    abc'), true);
    assert.equal(regex.test('3.     abc'), true);
    assert.equal(regex.test('4.abc'), false);
  });

  it('should describe both the start and the end of the line using the special ^ (hat) and $ (dollar sign) metacharacters', () => {
    // http://regexone.com/lesson/line_beginning_end
    const regex = /^Mission: successful$/;
    assert.equal(regex.test('Mission: successful'), true);
    assert.equal(regex.test('Last Mission: unsuccessful'), false);
    assert.equal(regex.test('Next Mission: successful upon capture of target'), false);
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
    const regex = /I love (cats|dogs)/;
    assert.equal(regex.test('I love cats '), true);
    assert.equal(regex.test('I love dogs '), true);
    assert.equal(regex.test('I love logs'), false);
    assert.equal(regex.test('I love cogs'), false);
  });

  it('should match random strings', () => {
    // http://regexone.com/lesson/misc_meta_characters?
    assert.equal(/.*/.test('The quick brown fox jumped over the lazy dog.'), true);
    assert.equal(/.*/.test('There were 614 instances of students getting 90.0% or above.'), true);
    assert.equal(/.*/.test('The FCC had to censor the network for saying &$#*@!.'), true);

    assert.equal(/the .*/.test('The quick brown fox jumped over the lazy dog.'), true);
    assert.equal(/the .*/.test('The FCC had to censor the network for saying &$#*@!.'), true);
  });

  it('should match a decimal, scientific, financial, positive, negative, significant digits, exponents, and different representations like the comma used to separate thousands and millions.', () => {
    // http://regexone.com/problem/matching_decimal_numbers
    const regx = /^-?\d+(,\d+)*(\.\d+(e\d+)?)?$/;
    assert.equal(regx.test(3.14529), true);
    assert.equal(regx.test(-255.34), true);
    assert.equal(regx.test(128), true);
    assert.equal(regx.test(1.9e10), true);
    assert.equal(regx.test('123,340.00'), true);
    assert.equal(regx.test('720p'), false);
  });

  it('should match the number and captures the proper area code', () => {
    // http://regexone.com/problem/matching_phone_numbers?
    const regex = /(\d{1}\s)?(\(?)(\d{3})(\-?)(\)?)(\s?)(\d{3})(\-?)(\s?)(\d{4})/;
    assert.equal(regex.test('415-555-1234'), true);
    assert.equal(regex.test('650-555-2345'), true);
    assert.equal(regex.test('(416)555-3456'), true);
    assert.equal(regex.test('202 555 4567'), true);
    assert.equal(regex.test('4035555678'), true);
    assert.equal(regex.test('1 416 555 9292'), true);

    const solutionRegex = /1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/;
    assert.equal(solutionRegex.test('415-555-1234'), true);
    assert.equal(solutionRegex.test('650-555-2345'), true);
    assert.equal(solutionRegex.test('(416)555-3456'), true);
    assert.equal(solutionRegex.test('202 555 4567'), true);
    assert.equal(solutionRegex.test('4035555678'), true);
    assert.equal(solutionRegex.test('1 416 555 9292'), true);

    // tweaked based on solution
    const regexTweaked = /(\d{1}\s)?(\(?)(\d{3})(\)?)[\-?\s]?(\d{3})[\-\s]?(\d{4})/;
    assert.equal(regexTweaked.test('415-555-1234'), true);
    assert.equal(regexTweaked.test('650-555-2345'), true);
    assert.equal(regexTweaked.test('(416)555-3456'), true);
    assert.equal(regexTweaked.test('202 555 4567'), true);
    assert.equal(regexTweaked.test('4035555678'), true);
    assert.equal(regexTweaked.test('1 416 555 9292'), true);
  });
});


// (\d{1}\s)?(\(?)(\d{3})(\-?)(\)?)(\s?)(\d{3})(\-?)(\s?)(\d{4})
// 1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}

/*
  it('should', () => {
    assert.equal(/aaa/.test('abc'), true);
  });
 */

