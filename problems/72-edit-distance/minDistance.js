/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
    const cache = Array.from(
        Array(word1.length + 1),
        () => Array(word2.length + 1).fill(Number.MAX_SAFE_INTEGER),
    );
    for (let r = 0; r < cache.length; r += 1) {
        cache[r][word2.length] = word1.length - r;
    }
    for (let c = 0; c < cache[0].length; c += 1) {
        cache[word1.length][c] = word2.length - c;
    }

    for (let r = word1.length - 1; r >= 0; r -= 1) {
        for (let c = word2.length - 1; c >= 0; c -= 1) {
            if (word1[r] === word2[c]) {
                cache[r][c] = cache[r + 1][c + 1];
            } else {
                cache[r][c] = 1 + Math.min(cache[r][c + 1], cache[r + 1][c], cache[r + 1][c + 1]);
            }
        }
    }
    return cache[0][0];
};

module.exports = { minDistance };
