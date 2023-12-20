/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
const maxValueOfCoins = function (piles, k) {
    const n = piles.length;
    const dp = Array.from(Array(n), () => Array(k + 1).fill(-1));
    const dfs = (i, coins) => {
        if (i === n) {
            return 0;
        }
        if (dp[i][coins] !== -1) {
            return dp[i][coins];
        }
        dp[i][coins] = dfs(i + 1, coins);
        let curPile = 0;
        for (let j = 0; j < Math.min(coins, piles[i].length); j += 1) {
            curPile += piles[i][j];
            dp[i][coins] = Math.max(dp[i][coins], curPile + dfs(i + 1, coins - j - 1))
        }
        return dp[i][coins];
    };

    return dfs(0, k);
};

module.exports = { maxValueOfCoins };
