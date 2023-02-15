/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = function (s1, s2) {
    const words1 = s1.split(' ');
    const words2 = s2.split(' ');
    const map = {};
    words1.forEach((word) => {
        if (map[word]) {
            map[word] += 1;
        } else {
            map[word] = 1;
        }
    });

    words2.forEach((word) => {
        if (map[word]) {
            map[word] += 1;
        } else {
            map[word] = 1;
        }
    });

    const result = Object.entries(map).filter(([, value]) => value < 2).map(([key]) => key);

    return result;
};

module.exports = { uncommonFromSentences };
