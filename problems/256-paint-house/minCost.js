/**
 * @param {number[][]} costs
 * @return {number}
 */
const minCost = function (costs) {
    let dp = [0, 0, 0];
    for (let i = 0; i < costs.length; i += 1) {
        const dp0 = costs[i][0] + Math.min(dp[1], dp[2]);
        const dp1 = costs[i][1] + Math.min(dp[0], dp[2]);
        const dp2 = costs[i][2] + Math.min(dp[0], dp[1]);
        dp = [dp0, dp1, dp2];
    }
    return Math.min(...dp);
};

module.exports = { minCost };
