/* eslint-disable no-restricted-syntax */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let maxSum = nums[0];
    let curSum = 0;

    for (const i of nums) {
        if (curSum < 0) {
            curSum = 0;
        }
        curSum += i;
        maxSum = Math.max(curSum, maxSum);
    }

    return maxSum;
};

module.exports = { maxSubArray };
