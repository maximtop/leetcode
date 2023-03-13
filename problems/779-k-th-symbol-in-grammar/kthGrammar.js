/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthGrammar = function (n, k) {
    if (n === 1) {
        return 0;
    }

    let parent = kthGrammar(n - 1, Math.floor((k + 1) / 2));
    if (k % 2 === 0) {
        parent = parent === 1 ? 0 : 1;
    }

    return parent;
};

module.exports = { kthGrammar };
