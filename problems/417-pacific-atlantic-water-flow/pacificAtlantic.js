/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
    const ROWS = heights.length;
    const COLS = heights[0].length;
    const pac = new Set();
    const atl = new Set();

    const getKey = (r, c) => {
        return `${r}:${c}`;
    };

    const dfs = (r, c, visited, prevHeight) => {
        if (
            r < 0 || r >= ROWS
            || c < 0 || c >= COLS
            || visited.has(getKey(r, c))
            || heights[r][c] < prevHeight
        ) {
            return;
        }
        visited.add(getKey(r, c));
        dfs(r + 1, c, visited, heights[r][c]);
        dfs(r - 1, c, visited, heights[r][c]);
        dfs(r, c + 1, visited, heights[r][c]);
        dfs(r, c - 1, visited, heights[r][c]);
    };

    for (let r = 0; r < ROWS; r += 1) {
        dfs(r, 0, pac, heights[r][0]);
        dfs(r, COLS - 1, atl, heights[r][COLS - 1]);
    }

    for (let c = 0; c < COLS; c += 1) {
        dfs(0, c, pac, heights[0][c]);
        dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]);
    }

    const res = [];
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            const key = getKey(r, c);
            if (pac.has(key) && atl.has(key)) {
                res.push([r, c]);
            }
        }
    }
    return res;
};

module.exports = { pacificAtlantic };
