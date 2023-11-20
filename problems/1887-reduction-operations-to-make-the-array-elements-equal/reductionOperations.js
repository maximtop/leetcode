/**
 * @param {number[]} nums
 * @return {number}
 */
const reductionOperations = function (nums) {
    let res = 0;
    let up = 0;
    nums = nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] !== nums[i-1]) {
            up += 1;
        }
        res += up;
    }
    return res;
};

module.exports = { reductionOperations };
