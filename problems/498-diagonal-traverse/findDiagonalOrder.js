/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = function (mat) {
    const rowLength = mat.length;
    const colLength = mat[0].length;

    let result = [];
    let intermediate = [];
    for (let d = 0; d < rowLength + colLength - 1; d += 1) {
        let row = d < colLength ? 0 : d - colLength + 1;
        let col = d < colLength ? d : colLength - 1;
        while (row < rowLength && col > -1) {
            intermediate.push(mat[row][col]);
            row += 1;
            col -= 1;
        }
        if (d % 2 === 0) {
            intermediate.reverse();
        }
        result = result.concat(intermediate);
        intermediate = [];
    }
    return result;
};

module.exports = { findDiagonalOrder };
