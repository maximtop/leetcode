/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
    let l = 0;
    let zeros = 0;
    let max = 0;
    for (let r = 0; r < nums.length; r += 1) {
        if (nums[r] === 0) {
            zeros += 1;
        }
        while (zeros > 1) {
            zeros -= 1 - nums[l];
            l += 1;
        }
        // remove zeros to maximize subarray, if no zeros remove 1 element by task requirements
        max = Math.max(max, r - l + 1 - (zeros || 1));
    }
    return max;
};

module.exports = { longestSubarray };
