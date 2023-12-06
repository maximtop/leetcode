/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = function (matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    const dp = Array.from(Array(ROWS), () => Array(COLS));
    const dfs = (r, c, prev) => {
        if (
            r < 0 || r === ROWS
            || c < 0 || c === COLS
            || matrix[r][c] <= prev
        ) {
            return 0;
        }

        if (dp[r][c]) {
            return dp[r][c];
        }

        let res = 1;
        const cur = matrix[r][c];
        res = Math.max(res, 1 + dfs(r + 1, c, cur));
        res = Math.max(res, 1 + dfs(r - 1, c, cur));
        res = Math.max(res, 1 + dfs(r, c + 1, cur));
        res = Math.max(res, 1 + dfs(r, c - 1, cur));

        dp[r][c] = res;
        return res;
    };

    let res = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            res = Math.max(res, dfs(r, c, -1));
        }
    }

    return res;
};

module.exports = { longestIncreasingPath };
