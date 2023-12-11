/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function (s, t) {
    const dp = new Map();
    const dfs = (i, j) => {
        if (j === t.length) {
            return 1;
        }
        if (i === s.length) {
            return 0;
        }
        const key = `${i}:${j}`;
        if (dp.has(key)) {
            dp.get(key);
        }
        if (s[i] === t[j]) {
            dp[key] = dfs(i + 1, j + 1) + dfs(i + 1, j);
        } else {
            dp[key] = dfs(i + 1, j);
        }
        return dp[key];
    };
    return dfs(0, 0);
};

module.exports = { numDistinct };
