/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    const map = {};
    for (let i = 0; i < s.length; i += 1) {
        if (map[s[i]]) {
            map[s[i]] += 1;
        } else {
            map[s[i]] = 1;
        }
    }

    for (let i = 0; i < s.length; i += 1) {
        if (map[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};

module.exports = { firstUniqChar };
