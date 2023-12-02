/**
 * @param {string[]} words
 * @param {string} x
 * @return {number[]}
 */
const findWordsContaining = function (words, x) {
    const res = [];
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].includes(x)) {
            res.push(i);
        }
    }
    return res;
};

module.exports = { findWordsContaining };
