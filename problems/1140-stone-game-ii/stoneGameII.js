/**
 * @param {number[]} piles
 * @return {number}
 */
const stoneGameII = function (piles) {
    const dp = {};
    const dfs = (alice, i, m) => {
        if (i >= piles.length) {
            return 0;
        }
        const key = `${alice}:${i}:${m}`;
        if (Object.prototype.hasOwnProperty.call(dp, key)) {
            return dp[key];
        }
        let res = alice ? 0 : Number.POSITIVE_INFINITY;
        let total = 0;
        for (let x = 1; x <= 2 * m; x += 1) {
            if (i + x > piles.length) {
                break;
            }
            total += piles[i + x - 1];
            if (alice) {
                res = Math.max(res, total + dfs(!alice, i + x, Math.max(m, x)));
            } else {
                res = Math.min(res, dfs(!alice, i + x, Math.max(m, x)));
            }
        }
        dp[key] = res;
        return res;
    };
    return dfs(true, 0, 1);
};

module.exports = { stoneGameII };
