/*
  Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.

  For example,
  number2words(0) -> "zero"
  number2words(17) -> "seventeen"
  number2words(20) -> "twenty"
  number2words(99) -> "ninety-nine"
  number2words(100) -> "one hundred"
  number2words(301) -> "three hundred one"
  number2words(799) -> "seven hundred ninety-nine"
  number2words(800) -> "eight hundred"
  number2words(1000) -> "one thousand"
  number2words(1002) -> "one thousand two"
  number2words(3051) -> "three thousand fifty-one"
  number2words(7200) -> "seven thousand two hundred"
  number2words(99999) -> "ninety-nine thousand nine hundred ninety-nine"
  number2words(888888) -> "eight hundred eighty-eight thousand eight hundred eighty-eight"
*/

function number2words(number) {
  const baseNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
  };

  const first = (n, i) => String.prototype.substring.call(n, 0, i);
  const rest = (n, i) => String.prototype.substring.call(n, i);

  const convert = (n, handleZero = true) => {
    if (n === 0 && !handleZero) { return ''; }
    if (n < 100 && baseNumbers[n]) { return baseNumbers[n]; }

    switch (String(n).length) {
    case 2: return tens(n);
    case 3: return aboveOneHundred(n, 1, 100);
    case 4: return aboveOneHundred(n, 1);
    case 5: return aboveOneHundred(n, 2);
    case 6: return aboveOneHundred(n, 3);
    default: return '';
    }
  };

  const tens = (n) => {
    const v = parseInt(n, 10);
    const head = first(v, 1) * 10;
    const tail = rest(v, 1);

    return [
      convert(head),
      convert(tail)
    ].join('-');
  };

  const aboveOneHundred = (n, i, baseNumber = 1000) => {
    const v = parseInt(n, 10);
    const head = first(v, i);
    const tail = parseInt(rest(v, i), 10);

    return [
      convert(head),
      baseNumbers[baseNumber],
      convert(tail, false)
    ].join(' ').trim();
  };

  return convert(number);
}

export default number2words;
