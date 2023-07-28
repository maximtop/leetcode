/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {
    const map = { 0: -1 };
    let total = 0;
    for (let i = 0; i < nums.length; i += 1) {
        const val = nums[i];
        total += val;
        const remainder = total % k;
        if (!(remainder in map)) {
            map[remainder] = i;
        } else if (i - map[remainder] > 1) {
            return true;
        }
    }
    return false;
};

module.exports = { checkSubarraySum };
