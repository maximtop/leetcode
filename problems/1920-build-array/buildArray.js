/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function (nums) {
    const arr = [];
    for (let i = 0; i < nums.length; i += 1) {
        arr[i] = nums[nums[i]];
    }
    return arr;
};

module.exports = { buildArray };
