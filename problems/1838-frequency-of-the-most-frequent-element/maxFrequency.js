/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    let total = 0;
    let l = 0;
    let max = 0;

    for (let r = 0; r < nums.length; r += 1) {
        total += nums[r];
        while (nums[r] * (r - l + 1) > total + k) {
            total -= nums[l];
            l += 1;
        }
        max = Math.max(max, r - l + 1);
    }

    return max;
};

module.exports = { maxFrequency };
