const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let sort = members.filter((member) => typeof(member) === "string");
  if (sort.length === 0) {
    return false;
  }
  let result = Array.from(sort, (x) => x.trim()[0]).sort((a, b) => a.localeCompare(b)).join('');
  return result.toUpperCase();
}

module.exports = {
  createDreamTeam
};
