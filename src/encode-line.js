const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let current = '';

  let count = 1;
  for(let i = 0; i < arr.length; i += 1) {

    for(let j = i + 1; j < arr.length + 1; j += 1) {

      if(arr[i] === arr[j]) {
        count += 1;
      } else {
        current += `${count === 1 ? '' : count}${arr[i]}`
        count = 1;
        i = j - 1;
        break;
      }
    }
  }
  return current;
}

module.exports = {
  encodeLine
};
