/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const findTheDifference = function (s, t) {
    const map = {};
    for (const char of s) {
        map[char] ??= 0;
        map[char] += 1;
    }
    for (const char of t) {
        if (!map[char]) {
            return char;
        }
        map[char] -= 1;
    }
};

module.exports = { findTheDifference };
