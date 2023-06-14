/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function (a, b) {
    while (b !== 0) {
        const temp = (a & b) << 1;
        a ^= b;
        b = temp;
    }
    return a;
};

module.exports = { getSum };
