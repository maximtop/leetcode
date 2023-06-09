/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    const dp = new Map();

    const genKey = (val) => {
        return JSON.stringify(val);
    };

    const dfs = (i, buying) => {
        if (i >= prices.length) {
            return 0;
        }
        const key = genKey([i, buying]);
        if (dp.has(key)) {
            return dp.get(key);
        }

        const cooldown = dfs(i + 1, buying);
        if (buying) {
            const buy = dfs(i + 1, !buying) - prices[i];
            dp.set(key, Math.max(buy, cooldown));
        } else {
            const sell = dfs(i + 2, !buying) + prices[i];
            dp.set(key, Math.max(sell, cooldown));
        }

        return dp.get(key);
    };

    return dfs(0, true);
};

module.exports = { maxProfit };
