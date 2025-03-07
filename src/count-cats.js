const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  let sumCats=0;
    for (let subArr of matrix){
        for(let elem of matrix){
            console.log(elem);
            if(elem=="^^"){
                sumCats++;
            }
        }
    }
    return sumCats
}

module.exports = {
  countCats
};
