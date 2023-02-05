/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
    const areSame = (arr1, arr2) => {
        if (arr1.length < arr2.length) {
            return areSame(arr2, arr1);
        }
        for (let i = 0; i < arr1.length; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    };

    const weights = {};
    for (let i = 0; i < order.length; i += 1) {
        weights[order[i]] = i + 1;
    }

    const sortedWords = [...words].sort((a, b) => {
        // TODO sort words and compare
        if (weights[a] > weights[b]) {
            return 1;
        }
        return -1;
    });

    return areSame(words, sortedWords);
};

module.exports = { isAlienSorted };
