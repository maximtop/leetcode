/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const rearrangeSticks = function (n, k) {
    const mod = 10 ** 9 + 7;
    const dp = Array.from(Array(n + 1), () => Array(k + 1).fill(0));
    const dfs = (N, K) => {
        if (N === K) {
            return 1;
        }
        if (N === 0 || K === 0) {
            return 0;
        }
        if (dp[N][K]) {
            return dp[N][K];
        }
        dp[N][K] = (dfs(N - 1, K - 1) + (N - 1) * dfs(N - 1, K)) % mod;
        return dp[N][K];
    };
    return dfs(n, k) % mod;
};

module.exports = { rearrangeSticks };
