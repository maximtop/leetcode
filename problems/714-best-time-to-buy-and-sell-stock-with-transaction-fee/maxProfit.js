/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
    const free = new Array(prices.length).fill(0);
    const hold = new Array(prices.length).fill(0);

    hold[0] = -prices[0];

    for (let i = 1; i < prices.length; i += 1) {
        free[i] = Math.max(free[i - 1], hold[i - 1] + prices[i] - fee);
        hold[i] = Math.max(free[i - 1] - prices[i], hold[i - 1]);
    }

    return free.at(-1);
};

module.exports = { maxProfit };
