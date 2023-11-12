/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
    const dp = { 1: 1 };
    for (let num = 2; num <= n; num += 1) {
        dp[num] = num === n ? 0 : num;
        for (let i = 1; i < num; i += 1) {
            const val = dp[i] * dp[num - i];
            dp[num] = Math.max(dp[num], val);
        }
    }
    return dp[n];
};

module.exports = { integerBreak };
