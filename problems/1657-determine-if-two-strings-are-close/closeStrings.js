/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const map1 = {};
    const map2 = {};
    for (let i = 0; i < word1.length; i += 1) {
        map1[word1[i]] = (map1[word1[i]] ?? 0) + 1;
        map2[word2[i]] = (map2[word2[i]] ?? 0) + 1;
    }

    const areValuesEqual = Object.values(map1).sort().join('') === Object.values(map2).sort().join('');
    const areKeysEqual = Object.keys(map1).sort().join('') === Object.keys(map2).sort().join('');

    return areValuesEqual && areKeysEqual;
};

module.exports = { closeStrings };
