/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
    let sum = 0;
    let maxAverage = Number.MIN_SAFE_INTEGER;
    for (let r = 0; r < nums.length; r += 1) {
        sum += nums[r];
        if (r >= k - 1) {
            maxAverage = Math.max(maxAverage, sum / k);
            sum -= nums[r - (k - 1)];
        }
    }
    return maxAverage;
};

module.exports = { findMaxAverage };
