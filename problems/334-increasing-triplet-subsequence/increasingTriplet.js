/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
    let smallest = Number.MAX_SAFE_INTEGER;
    let small = Number.MAX_SAFE_INTEGER;
    for (const num of nums) {
        if (num <= smallest) {
            smallest = num;
        } else if (num <= small) {
            small = num;
        } else {
            return true;
        }
    }
    return false;
};

module.exports = { increasingTriplet };
