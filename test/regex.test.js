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

  it('should capture the name of the email, excluding the filter (+ character and afterwards) and domain (@ character and afterwards)', () => {
    // http://regexone.com/problem/matching_emails?

    // const matchEverything = /(\w+(\.\w+)?)(\+\w+)?@\w+(\.\w+)?\.\w+/;
    const regex = /^(\w+(\.?)(\w+))/;
    assert.equal(regex.test('tom@hogwarts.com'), true);
    assert.equal(regex.test('tom.riddle@hogwarts.com'), true);
    assert.equal(regex.test('tom.riddle+regexone@hogwarts.com'), true);
    assert.equal(regex.test('tom@hogwarts.eu.com'), true);
    assert.equal(regex.test('potter@hogwarts.com'), true);
    assert.equal(regex.test('harry@hogwarts.com'), true);
    assert.equal(regex.test('hermione+regexone@hogwarts.com'), true);

    assert.equal('tom@hogwarts.com'.match(regex)[0], 'tom');
    assert.equal('tom.riddle@hogwarts.com'.match(regex)[0], 'tom.riddle');
    assert.equal('tom.riddle+regexone@hogwarts.com'.match(regex)[0], 'tom.riddle');
    assert.equal('tom@hogwarts.eu.com'.match(regex)[0], 'tom');
    assert.equal('potter@hogwarts.com'.match(regex)[0], 'potter');
    assert.equal('harry@hogwarts.com'.match(regex)[0], 'harry');
    assert.equal('hermione+regexone@hogwarts.com'.match(regex)[0], 'hermione');

    const solutionRegex = /^([\w\.]*)/;
    assert.equal(solutionRegex.test('tom@hogwarts.com'), true);
    assert.equal(solutionRegex.test('tom.riddle@hogwarts.com'), true);
    assert.equal(solutionRegex.test('tom.riddle+solutionRegexone@hogwarts.com'), true);
    assert.equal(solutionRegex.test('tom@hogwarts.eu.com'), true);
    assert.equal(solutionRegex.test('potter@hogwarts.com'), true);
    assert.equal(solutionRegex.test('harry@hogwarts.com'), true);
    assert.equal(solutionRegex.test('hermione+regexone@hogwarts.com'), true);
  });

  it('should match HTML tags', () => {
    // http://regexone.com/problem/matching_html?
    const regex = /<(\w+)/;
    assert.equal('<a>This is a link</a>'.match(regex)[0], '<a');
    assert.equal('<a href="http://regexone.com">Link</a>'.match(regex)[0], '<a');
    assert.equal('<div class="test_style">Test</div>'.match(regex)[0], '<div');
    assert.equal('<div>Hello <span>world</span></div>'.match(regex)[0], '<div');
  });

  it('should match specific filenames', () => {
    // http://regexone.com/problem/matching_filenames?
    const regex = /(\w+)((\.)(jpg|png|gif))$/;
    assert.equal(regex.test('img0912.jpg'), true);
    assert.equal(regex.test('updated_img0912.png'), true);
    assert.equal(regex.test('favicon.gif'), true);
    assert.equal(regex.test('.bash_profile'), false);
    assert.equal(regex.test('img0912.jpg.tmp'), false);
    assert.equal(regex.test('access.lock'), false);
  });


  it('should trim whitespace from start and end of line', () => {
    // http://regexone.com/problem/trimming_whitespace?
    const regex = /^\s*(.*)\s*$/;
    assert.equal(regex.test('   The quick brown fox... '), true);
    assert.equal(regex.test(' jumped over the lazy dog.      '), true);
  });

  it('should extract the filename, method name and line number of line of the stack trace', () => {
  /*
    http://regexone.com/problem/extracting_log_data?

    Problem 7: Extracting information from a log file

    In this example, we are going to use actual output from an Android adb debugging session. Your goal is to use any regular expression techniques that we've learned so far to extract the filename, method name and line number of line of the stack trace (they follow the form "at package.class.methodname(filename:linenumber)").
   */

    const match = regexMatch(/(\w+)\((\w+\.java):(\d+)/);

    const input1 = 'E/( 1553):   at widget.List.makeView(ListView.java:1727)';
    assert.equal(match(input1), 'makeView(ListView.java:1727');
    assert.equal(match(input1, 1), 'makeView');
    assert.equal(match(input1, 2), 'ListView.java');
    assert.equal(match(input1, 3), '1727');

    const input2 = 'E/( 1553):   at widget.List.fillDown(ListView.java:652)';
    assert.equal(match(input2), 'fillDown(ListView.java:652');
    assert.equal(match(input2, 1), 'fillDown');
    assert.equal(match(input2, 2), 'ListView.java');
    assert.equal(match(input2, 3), '652');

    const input3 = 'E/( 1553):   at widget.List.fillFrom(ListView.java:709)';
    assert.equal(match(input3), 'fillFrom(ListView.java:709');
    assert.equal(match(input3, 1), 'fillFrom');
    assert.equal(match(input3, 2), 'ListView.java');
    assert.equal(match(input3, 3), '709');

    // wrap the stuff you want to extract in parens and the stuff you just want to match should sit outside parens. Use ''.match() to see what you're capturing.

    // Solution Regex = /(\w+)\(([\w\.]+):(\d+)\)/;
  });
});

function regexMatch(regex) {
  return function(input, i = 0) {
    return input.match(regex)[i];
  };
}

/*
  it('should', () => {
    cont regex = /abc/;
    assert.equal(/aaa/.test('abc'), true);
  });
 */

