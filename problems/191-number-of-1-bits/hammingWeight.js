/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let binary = n >>> 0;
    let counter = 0;
    while (binary > 0) {
        counter += binary & 1;
        binary >>>= 1;
    }
    return counter;
};

module.exports = { hammingWeight };
