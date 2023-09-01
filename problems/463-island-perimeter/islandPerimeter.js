/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
    const visited = new Set();
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (i, j) => {
        if (
            i >= rows
            || j >= cols
            || i < 0
            || j < 0
            || grid[i][j] === 0
        ) {
            return 1;
        }
        if (visited.has(`${i},${j}`)) {
            return 0;
        }

        visited.add(`${i},${j}`);

        return dfs(i, j + 1) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i - 1, j);
    };

    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[0].length; j += 1) {
            if (grid[i][j]) {
                return dfs(i, j);
            }
        }
    }
};

module.exports = { islandPerimeter };
