/**
 * @param {string[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    const dp = Array.from(Array(ROWS), () => Array(COLS));
    const dfs = (r, c) => {
        if (r >= ROWS || c >= COLS) {
            return 0;
        }
        if (dp[r][c] === undefined) {
            const down = dfs(r + 1, c);
            const right = dfs(r, c + 1);
            const diagonal = dfs(r + 1, c + 1);
            dp[r][c] = 0;
            if (matrix[r][c] === '1') {
                dp[r][c] = 1 + Math.min(down, right, diagonal);
            }
        }
        return dp[r][c];
    };
    dfs(0, 0);
    let res = 0;
    for (let r = 0; r < ROWS; r += 1) {
        for (let c = 0; c < COLS; c += 1) {
            res = Math.max(res, dp[r][c]);
        }
    }
    return res * res;
};

module.exports = { maximalSquare };
