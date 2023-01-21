/* eslint-disable no-restricted-syntax */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = function (nums) {
    let curMax = 0;
    let curMin = 0;
    let sum = 0;
    let maxSum = nums[0];
    let minSum = nums[0];

    for (const num of nums) {
        curMax = Math.max(curMax, 0) + num;
        maxSum = Math.max(maxSum, curMax);
        curMin = Math.min(curMin, 0) + num;
        minSum = Math.min(minSum, curMin);
        sum += num;
    }

    return sum === minSum ? maxSum : Math.max(maxSum, sum - minSum);
};

module.exports = { maxSubarraySumCircular };
