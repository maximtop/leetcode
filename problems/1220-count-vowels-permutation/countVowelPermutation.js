/**
 * @param {number} n
 * @return {number}
 */
const countVowelPermutation = function (n) {
    const dp = [[], [1, 1, 1, 1, 1]];
    const [a, e, i, o, u] = [0, 1, 2, 3, 4];
    const mod = 10 ** 9 + 7;
    for (let j = 2; j <= n; j += 1) {
        dp[j] = [0, 0, 0, 0, 0];
        dp[j][a] = (dp[j - 1][e] + dp[j - 1][i] + dp[j - 1][u]) % mod;
        dp[j][e] = (dp[j - 1][a] + dp[j - 1][i]) % mod;
        dp[j][i] = (dp[j - 1][e] + dp[j - 1][o]) % mod;
        dp[j][o] = dp[j - 1][i];
        dp[j][u] = (dp[j - 1][i] + dp[j - 1][o]) % mod;
    }
    let sum = 0;
    for (let i = 0; i < dp[n].length; i += 1) {
        sum = (sum + dp[n][i]) % mod;
    }
    return sum;
};

module.exports = { countVowelPermutation };
