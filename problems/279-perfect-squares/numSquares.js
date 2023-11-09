/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
    const dp = Array(n + 1).fill(n);
    dp[0] = 0;
    for (let target = 0; target < n + 1; target += 1) {
        for (let s = 0; s < target + 1; s += 1) {
            const square = s * s;
            if (target - square < 0) {
                break;
            }
            dp[target] = Math.min(dp[target], 1 + dp[target - square]);
        }
    }
    return dp[n];
};

module.exports = { numSquares };
