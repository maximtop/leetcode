/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
const new21Game = function (n, k, maxPts) {
    if (k === 0) {
        return 1;
    }
    let windowSum = 0;
    for (let i = k; i < k + maxPts; i += 1) {
        windowSum += i <= n ? 1 : 0;
    }
    const dp = {};
    for (let i = k - 1; i > -1; i -= 1) {
        dp[i] = windowSum / maxPts;
        let remove = 0;
        if (i + maxPts <= n) {
            remove = dp[i + maxPts] ?? 1;
        }
        windowSum += dp[i] - remove;
    }
    return dp[0];
};

module.exports = { new21Game };
