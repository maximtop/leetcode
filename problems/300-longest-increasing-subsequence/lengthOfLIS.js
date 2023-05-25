/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
    const LIS = new Array(nums.length).fill(1);
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            if (nums[j] > nums[i]) {
                LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
            }
        }
    }
    return Math.max(...LIS);
};

module.exports = { lengthOfLIS };
