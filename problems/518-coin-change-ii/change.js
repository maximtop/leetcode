/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
    const cache = Array(coins.length + 1).fill(null).map(() => Array(amount + 1).fill(-1));

    const dfs = (i, a) => {
        if (a === amount) {
            return 1;
        }
        if (a > amount || i === coins.length) {
            return 0;
        }
        if (cache[i][a] !== -1) {
            return cache[i][a];
        }

        cache[i][a] = dfs(i, a + coins[i]) + dfs(i + 1, a);
        return cache[i][a];
    };

    return dfs(0, 0);
};

module.exports = { change };
