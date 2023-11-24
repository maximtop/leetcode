/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function (words) {
    const set = new Set(words);
    const dp = new Map();
    const dfs = (word) => {
        if (dp.has(word)) {
            return dp.get(word);
        }
        for (let i = 1; i < word.length; i += 1) {
            const prefix = word.substring(0, i);
            const suffix = word.substring(i);
            if ((set.has(prefix) && set.has(suffix))
                || (set.has(prefix) && dfs(suffix))) {
                dp.set(word, true);
                return dp.get(word);
            }
        }
        dp.set(word, false);
        return dp.get(word);
    };
    const res = [];
    for (const word of words) {
        if (dfs(word)) {
            res.push(word);
        }
    }
    return res;
};

module.exports = { findAllConcatenatedWordsInADict };
