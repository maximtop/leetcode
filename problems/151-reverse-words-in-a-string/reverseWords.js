/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    let word = '';
    const res = [];
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        if (char === ' ') {
            if (word) {
                res.unshift(word);
                word = '';
            }
        } else {
            word += char;
        }
    }

    if (word) {
        res.unshift(word);
    }

    return res.join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
const reverseWordsNatives = function (s) {
    const arr = s.split(' ').filter((i) => i);
    return arr.reverse().join(' ');
};

module.exports = { reverseWords, reverseWordsNatives };
