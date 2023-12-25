/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
const profitableSchemes = function (n, minProfit, group, profit) {
    const mod = 10 ** 9 + 7;
    // i - group.length, m - n, p - minProfit
    const dp = Array.from(Array(group.length + 1), () => Array.from(Array(n + 1), () => Array(minProfit + 1)));
    for (let m = 0; m <= n; m += 1) {
        dp[group.length][m][minProfit] = 1;
    }
    for (let i = group.length - 1; i >= 0; i -= 1) {
        for (let m = 0; m <= n; m += 1) {
            for (let p = 0; p <= minProfit; p += 1) {
                dp[i][m][p] = dp[i + 1][m][p] ?? 0;
                if (m + group[i] <= n) {
                    dp[i][m][p] += dp[i + 1][m + group[i]][Math.min(minProfit, p + profit[i])] ?? 0;
                    dp[i][m][p] %= mod;
                }
            }
        }
    }
    return dp[0][0][0];
};

module.exports = { profitableSchemes };
