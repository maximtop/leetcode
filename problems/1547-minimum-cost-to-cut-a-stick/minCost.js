/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
const minCost = function (n, cuts) {
    const dp = {};
    const dfs = (l, r) => {
        if (r - l === 1) {
            return 0;
        }
        const key = `${l}:${r}`;
        if (key in dp) {
            return dp[key];
        }
        let res = Number.POSITIVE_INFINITY;
        for (const cut of cuts) {
            if (cut > l && cut < r) {
                res = Math.min(
                    res,
                    (r - l) + dfs(l, cut) + dfs(cut, r),
                );
            }
        }
        dp[key] = res === Number.POSITIVE_INFINITY ? 0 : res;
        return dp[key];
    };
    return dfs(0, n);
};

module.exports = { minCost };
