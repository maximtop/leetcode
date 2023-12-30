/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = function (s, k) {
    const set = new Set();
    for (let i = 0; i <= s.length - k; i += 1) {
        set.add(s.slice(i, i + k));
    }

    return set.size === 2 ** k;
};

module.exports = { hasAllCodes };
