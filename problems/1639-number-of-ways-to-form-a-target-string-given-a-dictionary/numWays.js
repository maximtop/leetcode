/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {
    const mod = 10 ** 9 + 7;
    const count = {}; // (index, char) -> count among all words
    words.forEach((w) => {
        [...w].forEach((c, i) => {
            if (!count[i]) count[i] = {};
            if (!count[i][c]) count[i][c] = 0;
            count[i][c] += 1;
        });
    });

    const dp = {};

    const dfs = (i, k) => {
        if (i === target.length) return 1;
        if (k === words[0].length) return 0;
        const key = `${i}:${k}`;
        if (dp[key] !== undefined) return dp[key];

        dp[key] = dfs(i, k + 1) % mod;
        if (count[k] && count[k][target[i]]) {
            dp[key] = (dp[key] + count[k][target[i]] * dfs(i + 1, k + 1)) % mod;
        }
        return dp[key];
    };

    return dfs(0, 0);
};

module.exports = { numWays };
