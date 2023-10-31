/* eslint-disable no-lonely-if */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const minFlips = function (a, b, c) {
    let result = 0;
    while (a || b || c) {
        const lastA = a & 1;
        const lastB = b & 1;
        const lastC = c & 1;
        if (lastC) {
            if (!lastA && !lastB) {
                result += 1;
            }
        } else {
            result += lastA + lastB;
        }
        a >>= 1;
        b >>= 1;
        c >>= 1;
    }
    return result;
};

module.exports = { minFlips };
