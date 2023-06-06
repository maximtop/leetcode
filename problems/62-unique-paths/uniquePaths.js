/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    let row = new Array(n).fill(1);
    for (let i = 0; i < m - 1; i += 1) {
        const newRow = new Array(n).fill(1);
        for (let j = n - 2; j >= 0; j -= 1) {
            newRow[j] = newRow[j + 1] + row[j];
        }
        row = newRow;
    }
    return row[0];
};

module.exports = { uniquePaths };
