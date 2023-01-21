/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
    let j = nums.length - 1;
    let i = 0;
    while (i < j) {
        if (nums[i] % 2 === 0) {
            i += 1;
        } else {
            while (j > i && nums[j] % 2 !== 0) {
                j -= 1;
            }
            if (j > i) {
                const middle = nums[i];
                nums[i] = nums[j];
                nums[j] = middle;
            }
            j -= 1;
            i += 1;
        }
    }
    return nums;
};

module.exports = { sortArrayByParity };
