/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    let rangeSum = 0;
    let numsSum = 0;
    for (let i = 0; i <= nums.length; i += 1) {
        rangeSum += i;
        numsSum += nums[i] ? nums[i] : 0;
    }
    return rangeSum - numsSum;
};

module.exports = { missingNumber };
