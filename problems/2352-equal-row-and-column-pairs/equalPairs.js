/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function (grid) {
    const map = {};
    for (const r of grid) {
        const key = r.join(',');
        if (!map[key]) {
            map[key] = 0;
        }
        map[key] += 1;
    }
    let counter = 0;
    for (let c = 0; c < grid[0].length; c += 1) {
        const column = [];
        for (let r = 0; r < grid.length; r += 1) {
            column.push(grid[r][c]);
        }
        const key = column.join(',');
        if (map[key]) {
            counter += map[key];
        }
    }
    return counter;
};

module.exports = { equalPairs };
