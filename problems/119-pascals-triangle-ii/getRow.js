/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
    const map = new Map();
    const getKey = (row, col) => `${row}-${col}`;
    const helper = (row, col) => {
        const key = getKey(row, col);
        if (map.has(key)) {
            return map.get(key);
        }
        if (col === 0 || row === 0 || col === row) {
            return 1;
        }
        const res = helper(row - 1, col - 1) + helper(row - 1, col);
        map.set(key, res);
        return res;
    };

    const result = [];
    for (let i = 0; i <= rowIndex; i += 1) {
        const res = helper(rowIndex, i);
        result.push(res);
    }
    return result;
};

module.exports = { getRow };
