const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }
  if (date === undefined || date === null) {
    throw new Error('Invalid date!');
  }
  let str = date.toDateString();
  let arr = str.split(' ');
  if (arr.length < 3) {
    throw new Error('Invalid date!');
  }
  if (arr[1] === 'Mar' || arr[1] === 'May'|| arr[1] === 'Apr'){
  return 'spring';
  } else if (arr[1] === 'Jan' || arr[1] === 'Dec'|| arr[1] === 'Feb'){
  return 'winter';
  }else if (arr[1] === 'Aug' || arr[1] === 'Jun'|| arr[1] === 'Jul'){
  return 'summer';
  } else  return 'autumn';
}

module.exports = {
  getSeason
};
