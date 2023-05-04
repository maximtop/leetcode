/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
    let counter = 0;
    for (let i = 0; i < flowerbed.length; i += 1) {
        if (flowerbed[i] === 0 && flowerbed?.[i - 1] !== 1 && flowerbed?.[i + 1] !== 1) {
            counter += 1;
            i += 1;
        }
    }
    if (n > counter) {
        return false;
    }
    return true;
};

module.exports = { canPlaceFlowers };
