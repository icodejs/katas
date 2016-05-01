/*
  Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

  You have to validate input:

  v can be anything (primitive or otherwise)
  if v is ommited, fill the array with undefined
  if n is 0, return an empty array
  if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
  When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

  Code Examples

      prefill(3,1) --> [1,1,1]

      prefill(2,"abc") --> ['abc','abc']

      prefill("1", 1) --> [1]

      prefill(3, prefill(2,'2d'))
        --> [['2d','2d'],['2d','2d'],['2d','2d']]

      prefill("xyz", 1)
        --> throws TypeError with message "xyz is invalid"

  Possible solutions:

  let prefill = (n, v) =>
      Number.isSafeInteger(+n) && n >= 0 && !!n !== n
          ? Array.from({ length: n }, (_) => v)
          : ( () => { throw TypeError(`${n} is invalid`); }() );

  function prefill(n, v) {
    if (!Number.isInteger(+n) || +n < 0 || typeof n === 'boolean') throw new TypeError(`${n} is invalid`);
    return Array.from(Array(+n), x => v);

  }
 */


function prefill(n, v) {
  if (v === 0) return [];

  const isBool = (value) => typeof value === 'boolean';
  const isInt = (value) => value % 1 !== 0;
  const num = Number(n);

  if (isNaN(num) || isInt(num) || num < 0 || isBool(n)) {
    throw new TypeError(`${n} is invalid`);
  }

  return Array.from({ length: num }, () => v);
}

export default prefill;
