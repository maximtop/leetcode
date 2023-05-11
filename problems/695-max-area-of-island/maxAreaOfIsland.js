/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const visited = new Set();
    const getKey = (r, c) => `${r}:${c}`;

    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const dfs = (r, c) => {
        if (
            r < 0 || r >= ROWS
            || c < 0 || c >= COLS
            || visited.has(getKey(r, c))
            || grid[r][c] === 0
        ) {
            return 0;
        }
        let area = 1;
        visited.add(getKey(r, c));
        for (const [dr, dc] of DIRECTIONS) {
            area += dfs(r + dr, c + dc);
        }
        return area;
    };

    let maxArea = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            if (visited.has(getKey(r, c))) {
                continue;
            }
            const area = dfs(r, c);
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};

module.exports = { maxAreaOfIsland };
