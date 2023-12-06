/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const dp = Array.from(
        Array(ROWS + 1),
        () => Array(COLS + 1).fill(Number.POSITIVE_INFINITY),
    );
    dp[ROWS][COLS - 1] = 0;
    for (let r = ROWS - 1; r >= 0; r -= 1) {
        for (let c = COLS - 1; c >= 0; c -= 1) {
            dp[r][c] = grid[r][c] + Math.min(dp[r + 1][c], dp[r][c + 1]);
        }
    }
    return dp[0][0];
};

module.exports = { minPathSum };
