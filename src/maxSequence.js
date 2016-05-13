/*
  The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  // should be 6: [4, -1, 2, 1]
  Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

  Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

  Solutions:
  var maxSequence = function(arr){
    return arr.reduce(function(p,c) {
      c = Math.max((p&0xFFFF)+c,0);
      return (Math.max(p>>16,c)<<16)+c;
    }, 0)>>16;
  }

  var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }

  var maxSequence = function(arr){
      var currentSum = 0;
      return arr.reduce(function(maxSum, number){
          currentSum = Math.max(currentSum+number, 0);
          return Math.max(currentSum, maxSum);
      }, 0);
  }
 */

function chunk(arr, size = 2) {
  let chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks.filter(a => a.length === size);
}

function maxSequence(arr) {
  const len = arr.length;

  if (!len) return 0;
  if (arr.filter(a => a < 0).length === len) return 0;
  if (arr.filter(a => a > 0).length === len) return arr.reduce((a, b) => a + b);

  let subsequence = [];

  for (let i = 1; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      subsequence = [...subsequence, ...chunk(arr.slice(j, len), i + 1)];
    }
  }

  return subsequence
    .map(a => a.reduce((y, z) => y + z))
    .concat(arr)
    .reduce((y, z) => y > z ? y : z);
}

export default maxSequence;
