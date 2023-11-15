/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
const countGoodStrings = function (low, high, zero, one) {
    const dp = { 0: 1 };
    const mod = 10 ** 9 + 7;
    for (let i = 1; i < high + 1; i += 1) {
        dp[i] = ((dp[i - one] ?? 0) + (dp[i - zero] ?? 0)) % mod;
    }
    let result = 0;
    for (let i = low; i < high + 1; i += 1) {
        result += dp[i];
        result %= mod;
    }
    return result;
};

module.exports = { countGoodStrings };
