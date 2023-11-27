/**
 * @param {number} n
 * @return {number}
 */
const countOrders = function (n) {
    let slots = n * 2;
    let res = 1;
    const mod = (10 ** 9) + 7;
    while (slots > 0) {
        const validChooses = (slots * (slots - 1)) / 2
        res = (res * validChooses) % mod;
        slots -= 2;
    }
    return res;
};

module.exports = { countOrders };
