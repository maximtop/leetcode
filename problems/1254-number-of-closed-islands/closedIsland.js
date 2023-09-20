/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const visited = new Set();

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r === ROWS || c === COLS) {
            return 0;
        }

        if (grid[r][c] === 1 || visited.has(JSON.stringify([r, c]))) {
            return 1;
        }

        visited.add(JSON.stringify([r, c]));

        return Math.min(
            dfs(r, c + 1),
            dfs(r, c - 1),
            dfs(r + 1, c),
            dfs(r - 1, c),
        );
    };

    let counter = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (grid[r][c] === 0 && !visited.has(JSON.stringify([r, c])) && dfs(r, c)) {
                counter += dfs(r, c);
            }
        }
    }
    return counter;
};

module.exports = { closedIsland };
