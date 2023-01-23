/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
    let j = nums.length - 1;
    let i = 0;
    while (i < j) {
        if (nums[i] % 2 > nums[j] % 2) {
            const tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
        }
        if (nums[i] % 2 === 0) {
            i += 1;
        }
        if (nums[j] % 2 !== 0) {
            j -= 1;
        }
    }
    return nums;
};

module.exports = { sortArrayByParity };
