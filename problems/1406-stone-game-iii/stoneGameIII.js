/**
 * @param {number[]} values
 * @return {string}
 */
const stoneGameIII = function (values) {
    const dp = {};

    const dfs = (i) => {
        if (i === values.length) {
            return 0;
        }
        if (i in dp) {
            return dp[i];
        }

        let res = Number.NEGATIVE_INFINITY;
        let total = 0;
        for (let j = i; j < Math.min(values.length, i + 3); j += 1) {
            total += values[j];
            res = Math.max(res, total - dfs(j + 1));
        }
        dp[i] = res;
        return res;
    };

    if (dfs(0) > 0) {
        return 'Alice';
    }
    if (dfs(0) < 0) {
        return 'Bob';
    }
    return 'Tie';
};

module.exports = { stoneGameIII };
