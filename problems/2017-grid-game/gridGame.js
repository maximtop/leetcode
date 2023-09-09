/**
 * @param {number[][]} grid
 * @return {number}
 */
const gridGame = function (grid) {
    const l = grid[0].length;
    const pre1 = [...grid[0]];
    const pre2 = [...grid[1]];
    for (let i = 1; i < l; i += 1) {
        pre1[i] += pre1[i - 1];
        pre2[i] += pre2[i - 1];
    }
    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < l; i += 1) {
        const top = pre1.at(-1) - pre1[i];
        const bottom = i > 0 ? pre2[i - 1] : 0;
        const secondRobot = Math.max(top, bottom);
        res = Math.min(res, secondRobot);
    }
    return res;
};

module.exports = { gridGame };
