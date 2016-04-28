/*
  Write a function isIntArray with the below signature.

  function isIntArray(arr) {
      return true;
  }
  returns true if every element in an array is an integer.
  returns true if array is empty.
  returns false for every other input.

  Solutions:
  function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
  }

  let isIntArray = arr => !!arr && arr.every(Number.isInteger);

  function isIntArray(arr) {
    return arr?arr.every(function(n){return ~~n === n;}):false;
  }
 */

function isIntArray(arr) {
  if (!arr) return false;
  if (!arr.length) return true;

  return arr.every(v => {
    return !isNaN(v) && typeof v === 'number' && v % 1 === 0;
  });
}

export default isIntArray;
