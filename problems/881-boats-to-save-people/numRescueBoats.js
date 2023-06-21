/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function (people, limit) {
    const sorted = people.sort((a, b) => a - b);
    let count = 0;
    let sum = 0;
    let l = 0;
    let r = sorted.length - 1;
    while (l <= r) {
        if (sum + sorted[r] <= limit) {
            sum += sorted[r];
            r -= 1;
        }
        if (sum + sorted[l] <= limit) {
            sum += sorted[l];
            l += 1;
        }
        count += 1;
        sum = 0;
    }
    if (sum > 0) {
        count += 1;
    }
    return count;
};

module.exports = { numRescueBoats };
