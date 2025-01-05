const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  const arr1 = arr.filter(item => item !== -1).sort((a, b) => a - b);
  let index = 0;

  let sorted = arr.map(item => {
    if (item !== -1) {
      return arr1[index++];
    }
    return item;
  });
  return sorted;
}

module.exports = {
  sortByHeight
};
