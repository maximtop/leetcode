/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
    const dp = {};
    const key = (r, c) => `${r}:${c}`;
    const R = obstacleGrid.length;
    const C = obstacleGrid[0].length;
    dp[key(R - 1, C - 1)] = 1;
    const dfs = (r, c) => {
        if (r >= R || c >= C || obstacleGrid[r][c]) {
            return 0;
        }
        const curKey = key(r, c);
        if (dp[curKey]) {
            return dp[curKey];
        }
        dp[curKey] = dfs(r + 1, c) + dfs(r, c + 1);
        return dp[curKey];
    };
    return dfs(0, 0);
};

module.exports = { uniquePathsWithObstacles };
