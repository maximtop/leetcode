/* eslint-disable operator-assignment */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
    const R = obstacleGrid.length;
    const C = obstacleGrid[0].length;
    const dp = Array(C).fill(0);
    dp[C - 1] = 1;
    for (let r = R - 1; r >= 0; r -= 1) {
        for (let c = C - 1; c >= 0; c -= 1) {
            if (obstacleGrid[r][c]) {
                dp[c] = 0;
            } else if (c < C - 1) {
                dp[c] = dp[c] + dp[c + 1];
            }
        }
    }
    return dp[0];
};

module.exports = { uniquePathsWithObstaclesDynamic: uniquePathsWithObstacles };
