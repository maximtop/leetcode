/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function (n) {
    if (n <= 0) {
        return false;
    }

    for (const d of [2, 3, 5]) {
        while (n % d === 0) {
            n /= d;
        }
    }
    return n === 1;
};

module.exports = { isUgly };
