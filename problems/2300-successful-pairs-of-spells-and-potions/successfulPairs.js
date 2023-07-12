/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < spells.length; i += 1) {
        const spell = spells[i];
        let l = 0;
        let r = potions.length;
        while (l < r) {
            const mid = Math.floor((r + l) / 2);
            if (potions[mid] * spell >= success) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        const successfulPairs = potions.length - r;
        res.push(successfulPairs);
    }
    return res;
};

module.exports = { successfulPairs };
