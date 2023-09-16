/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    let l = 0;
    let r = matrix.length - 1;

    while (l < r) {
        const t = l;
        const b = r;
        for (let i = 0; i < r - l; i += 1) {
            const topLeft = matrix[t][l + i];
            matrix[t][l + i] = matrix[b - i][l];
            matrix[b - i][l] = matrix[b][r - i];
            matrix[b][r - i] = matrix[t + i][r];
            matrix[t + i][r] = topLeft;
        }
        l += 1;
        r -= 1;
    }
};

module.exports = { rotate };
