/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    let possibleRes = right;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const hoursRequired = piles.reduce((acc, pile) => {
            return acc + Math.ceil(pile / mid);
        }, 0);

        if (hoursRequired <= h) {
            possibleRes = Math.min(possibleRes, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return possibleRes;
};

module.exports = { minEatingSpeed };
