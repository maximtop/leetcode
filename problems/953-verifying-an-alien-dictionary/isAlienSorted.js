/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
    const orderIdx = order.split('').reduce((map, char, idx) => {
        map[char] = idx;
        return map;
    }, {});

    for (let i = 0; i < words.length - 1; i += 1) {
        const w1 = words[i];
        const w2 = words[i + 1];

        for (let j = 0; j < w1.length; j += 1) {
            if (j === w2.length) {
                return false;
            }

            if (w1[j] !== w2[j]) {
                if (orderIdx[w1[j]] > orderIdx[w2[j]]) {
                    return false;
                }
                break;
            }
        }
    }

    return true;
};

module.exports = { isAlienSorted };
