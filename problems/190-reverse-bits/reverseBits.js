/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
    let res = 0;
    for (let i = 0; i < 32; i += 1) {
        res <<= 1;
        res += n & 1;
        n >>>= 1;
    }
    return res >>> 0;
};

module.exports = { reverseBits };
