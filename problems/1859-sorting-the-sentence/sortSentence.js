/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function (s) {
    const wordsWithIdx = s.split(' ').map((word) => {
        const idx = word[word.length - 1];
        return [idx, word.slice(0, word.length - 1)];
    });
    const result = [];
    wordsWithIdx.forEach((wordWithIdx) => {
        result[wordWithIdx[0]] = wordWithIdx[1];
    });
    return result.filter((i) => i).join(' ');
};

module.exports = { sortSentence };
