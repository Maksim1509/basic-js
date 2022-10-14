const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];

  for(let i = 0; i < matrix.length; i += 1) {
    res.push([]);

    for(let j = 0; j < matrix[i].length; j += 1) {
      const item = matrix[i][j];
      if(item) {
        res[i].push(1);
        continue;
      }
      let count = 0;
      const topLine = matrix[i - 1] || [];
      const midLine = matrix[i];
      const botLine = matrix[i + 1] || [];

      const topLeft = topLine[j - 1] || 0;
      const topCenter = topLine[j] || 0;
      const topRight = topLine[j + 1] || 0;

      const midLeft = midLine[j - 1] || 0;
      const midRight = midLine[j + 1] || 0;

      const botLeft = botLine[j - 1] || 0;
      const botCenter = botLine[j] || 0;
      const botRight = botLine[j + 1] || 0;

      count = topLeft + topCenter + topRight + midLeft + midRight + botLeft + botCenter + botRight;

      res[i].push(count);
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
