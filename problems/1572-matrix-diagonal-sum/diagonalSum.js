/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
    let res = 0;
    for (let i = 0; i < mat.length; i += 1) {
        res += mat[i][i];
        res += mat[i][mat.length - 1 - i];
    }
    if (mat.length % 2 !== 0) {
        const mid = Math.floor(mat.length / 2);
        res -= mat[mid][mid];
    }
    return res;
};

module.exports = { diagonalSum };
