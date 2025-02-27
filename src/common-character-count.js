const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  let arr2 = s2.split('');
  let res = 0;
  for(const c of arr1) {
    const i = arr2.indexOf(c);
    if(i > -1) {
      res += 1;
      arr2 = arr2.slice(0, i).concat(arr2.slice(i + 1));
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
