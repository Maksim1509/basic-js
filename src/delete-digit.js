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
  let max = 0;
  const arr = String(n).split('');
  for(let i = 0; i < arr.length; i += 1) {
    const copy = arr.slice();
    copy[i] = null;
    console.log(copy);
    const num = copy.filter(v => v).join('') * 1;
    max = max > num ? max : num;
  }
  return max;
}

module.exports = {
  deleteDigit
};
