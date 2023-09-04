/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const countSubIslands = function (grid1, grid2) {
    const ROWS = grid1.length;
    const COLS = grid1[0].length;
    const visited = new Set();

    const dfs = (i, j) => {
        if (
            i < 0
            || j < 0
            || i >= ROWS
            || j >= COLS
            || visited.has(`${i},${j}`)
            || grid2[i][j] === 0
        ) {
            return true;
        }
        visited.add(`${i},${j}`);
        let res = true;
        if (grid1[i][j] === 0) {
            res = false;
        }
        res = dfs(i, j + 1) && res;
        res = dfs(i + 1, j) && res;
        res = dfs(i, j - 1) && res;
        res = dfs(i - 1, j) && res;
        return res;
    };

    let count = 0;

    for (let i = 0; i < ROWS; i += 1) {
        for (let j = 0; j < COLS; j += 1) {
            if (grid2[i][j] && !visited.has(`${i},${j}`) && dfs(i, j)) {
                count += 1;
            }
        }
    }

    return count;
};

module.exports = { countSubIslands };
