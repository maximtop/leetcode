/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let insertIndex = 1;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] !== nums[i - 1]) {
            // eslint-disable-next-line no-param-reassign
            nums[insertIndex] = nums[i];
            insertIndex += 1;
        }
    }
    return insertIndex;
};

module.exports = { removeDuplicates };
