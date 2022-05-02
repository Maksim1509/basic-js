const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, i = 0) {
    let max = 1;
    const iter = (cur, curArr) => {
      if (curArr.length == 0) return max;
      const [first, ...rest] = curArr;
      if (first instanceof Array) {
        const next = cur + 1;
        max = next > max ? next : max;
        iter(next, first);
      }
      return iter(cur, rest);
    }
    if(i === 2) return iter(1, arr);
    
    return this.calculateDepth(arr, i + 1);
  }
}

module.exports = {
  DepthCalculator
};
