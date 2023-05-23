/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
    const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let a = 1; a <= amount; a += 1) {
        for (let i = 0; i < coins.length; i += 1) {
            if (a - coins[i] >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[a - coins[i]]);
            }
        }
    }
    if (dp[amount] !== Number.MAX_SAFE_INTEGER) {
        return dp[amount];
    }
    return -1;
};

module.exports = { coinChange };
