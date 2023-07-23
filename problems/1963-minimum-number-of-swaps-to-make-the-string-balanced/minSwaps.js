/**
 * @param {string} s
 * @return {number}
 */
const minSwaps = function (s) {
    let extraClose = 0;
    let maxExtraClose = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === ']') {
            extraClose += 1;
            maxExtraClose = Math.max(maxExtraClose, extraClose);
        } else {
            extraClose -= 1;
        }
    }
    return Math.floor((maxExtraClose + 1) / 2);
};

module.exports = { minSwaps };
