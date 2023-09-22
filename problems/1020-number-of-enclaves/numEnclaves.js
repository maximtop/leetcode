/**
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const visited = new Set();
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const dfs = (r, c) => {
        if (r < 0 || r === ROWS || c < 0 || c === COLS
            || visited.has(JSON.stringify([r, c]))
            || grid[r][c] === 0) {
            return 0;
        }
        visited.add(JSON.stringify([r, c]));
        let res = 1;
        for (const [dr, dc] of directions) {
            res += dfs(r + dr, c + dc);
        }
        return res;
    };

    let land = 0;
    let borderLand = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            land += grid[r][c];
            if (grid[r][c]
                && ([0, ROWS - 1].includes(r) || [0, COLS - 1].includes(c))
                && !visited.has(JSON.stringify([r, c]))) {
                borderLand += dfs(r, c);
            }
        }
    }
    return land - borderLand;
};

module.exports = { numEnclaves };
