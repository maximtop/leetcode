/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let max = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i += 1) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > max) {
            max = prices[i] - minPrice;
        }
    }

    return max;
};

module.exports = { maxProfit };
