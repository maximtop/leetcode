/**
 * @param {number[]} piles
 * @return {boolean}
 */
const stoneGame = function (piles) {
    const dp = {};
    const dfs = (l, r) => {
        if (l > r) {
            return 0;
        }
        const key = `${l},${r}`;
        if (key in dp) {
            return dp[key];
        }
        const even = !!((r - l) % 2);
        const left = even ? piles[l] : 0;
        const right = even ? piles[r]: 0;
        dp[key] = Math.max(
            dfs(l + 1, r) + left,
            dfs(l, r - 1) + right,
        );
        return dp[key];
    };
    const sum = piles.reduce((a, b) => a + b);
    return dfs(0, piles.length - 1) > Math.floor(sum / 2);
};

module.exports = { stoneGame };
