/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    const res = [[1]];
    for (let i = 0; i < numRows - 1; i += 1) {
        const temp = [0, ...res.at(-1), 0];
        const row = [];
        for (let j = 0; j < temp.length - 1; j += 1) {
            row.push(temp[j] + temp[j + 1]);
        }
        res.push(row);
    }
    return res;
};

module.exports = { generate };
