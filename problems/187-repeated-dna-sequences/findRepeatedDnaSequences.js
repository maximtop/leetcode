/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
    const seen = new Set();
    const res = new Set();
    for (let l = 0; l < s.length - 9; l += 1) {
        const substr = s.slice(l, l + 10);
        if (seen.has(substr)) {
            res.add(substr);
        } else {
            seen.add(substr);
        }
    }
    return [...res.values()];
};

module.exports = { findRepeatedDnaSequences };
