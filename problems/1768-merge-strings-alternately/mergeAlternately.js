/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
    let p = 0;
    let res = '';
    while (p < word1.length && p < word2.length) {
        res += word1[p] + word2[p];
        p += 1;
    }
    if (p !== word1.length) {
        res += word1.substring(p);
    }
    if (p !== word2.length) {
        res += word2.substring(p);
    }
    return res;
};

module.exports = { mergeAlternately };
