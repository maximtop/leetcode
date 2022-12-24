/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = function(original, m, n) {
    const result = [];

    if (original.length !== m * n) {
        return result;
    }

    let row = [];
    for (let i = 0; i < original.length; i += 1) {
        const num = original[i];
        row.push(num);
        if (row.length === n) {
            result.push(row)
            row = [];
        }
    }

    return result;
};

module.exports = { construct2DArray };
