/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;

    const result = [];
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // from left to right;
        for (let col = colBegin; col <= colEnd; col += 1) {
            result.push(matrix[rowBegin][col]);
        }
        rowBegin += 1;

        // from top to bottom
        for (let row = rowBegin; row <= rowEnd; row += 1) {
            result.push(matrix[row][colEnd]);
        }
        colEnd -= 1;

        if (rowBegin <= rowEnd) {
            // from left to right
            for (let col = colEnd; col >= colBegin; col -= 1) {
                result.push(matrix[rowEnd][col]);
            }
            rowEnd -= 1;
        }


        if (colBegin <= colEnd) {
            // for bottom to up
            for (let row = rowEnd; row >= rowBegin; row -= 1) {
                result.push(matrix[row][colBegin]);
            }
            colBegin += 1;
        }
    }
    return result;
};

module.exports = { spiralOrder };
