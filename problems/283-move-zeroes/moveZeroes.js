/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) {
            let j = i + 1;
            while (nums[j] === 0 && j < nums.length - 1) {
                j += 1;
            }
            if (j === nums.length) {
                break;
            }
            nums[i] = nums[j];
            nums[j] = 0;
        }
    }

    return nums;
};

module.exports = { moveZeroes };
