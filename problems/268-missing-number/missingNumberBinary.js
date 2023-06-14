/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    let res = 0;
    for (let i = 0; i <= nums.length; i += 1) {
        res ^= (i ^ (nums[i] || 0));
    }
    return res;
};

module.exports = { missingNumber };
