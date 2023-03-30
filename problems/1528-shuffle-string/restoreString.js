/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
    const res = [];
    for (let i = 0; i < indices.length; i += 1) {
        const idx = indices[i];
        res[idx] = s[i];
    }
    return res.join('');
};

module.exports = { restoreString };
