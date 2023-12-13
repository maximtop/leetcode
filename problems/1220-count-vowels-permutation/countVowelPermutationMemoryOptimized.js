/**
 * @param {number} n
 * @return {number}
 */
const countVowelPermutation = function (n) {
    if (n === 0) {
        return 0;
    }
    const dp = [1, 1, 1, 1, 1];
    const [a, e, i, o, u] = [0, 1, 2, 3, 4];
    const mod = 10 ** 9 + 7;
    for (let j = 2; j <= n; j += 1) {
        const [tempA, tempE, tempI, tempO, tempU] = dp;
        dp[a] = (tempE + tempI + tempU) % mod;
        dp[e] = (tempA + tempI) % mod;
        dp[i] = (tempE + tempO) % mod;
        dp[o] = tempI;
        dp[u] = (tempI + tempO) % mod;
    }
    let sum = 0;
    for (let i = 0; i < dp.length; i += 1) {
        sum = (sum + dp[i]) % mod;
    }
    return sum;
};

module.exports = { countVowelPermutationMemoryOptimized: countVowelPermutation };
