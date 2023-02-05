/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
    const map = {};
    const secondMap = {};
    for (let i = 0; i < s.length; i += 1) {
        const sChar = s[i];
        const tChar = t[i];

        if (!map[sChar]) {
            map[sChar] = tChar;
        }

        if (!secondMap[tChar]) {
            secondMap[tChar] = sChar;
        }

        if (map[sChar] !== tChar || secondMap[tChar] !== sChar) {
            return false;
        }
    }

    return true;
};

module.exports = { isIsomorphic };
