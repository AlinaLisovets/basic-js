const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n));
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let arr1 = [...arr];
    arr1.splice(i, 1);
    let current = parseInt(arr1.join(''), 10);
    if (current > max) {
      max = current;
    }
  }

  return max;
 }


module.exports = {
  deleteDigit
};
