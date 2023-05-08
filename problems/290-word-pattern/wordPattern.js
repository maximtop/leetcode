/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
    const words = s.split(' ');
    const map = {};

    if (words.length !== pattern.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i += 1) {
        const char = pattern[i];
        const word = words[i];
        if (!map[word]) {
            map[word] = word;
        }
        if (map[char] !== word) {
            return false;
        }
    }

    return true;
};

module.exports = { wordPattern };
