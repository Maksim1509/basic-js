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
  if (!(members instanceof Array)) return false;
  const title = members.map((name) => {
    if (typeof name !== 'string') return '';
    return name.trim()[0].toUpperCase();
  }).sort().join('');
  return title === '' ? false : title;
}

module.exports = {
  createDreamTeam
};
