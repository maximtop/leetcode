/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    let cur = 0;
    for (let i = 0; i < t.length; i += 1) {
        if (s[cur] === t[i]) {
            cur += 1;
        }
        if (cur >= s.length) {
            return true;
        }
    }
    return cur > s.length - 1;
};

module.exports = { isSubsequence };
