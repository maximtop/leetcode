/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const pivot = start + Math.floor((end - start) / 2);
        if (target === nums[pivot]) {
            return pivot;
        }
        if (target < nums[pivot]) {
            end = pivot - 1;
        } else {
            start = pivot + 1;
        }
    }
    return start;
};

module.exports = { searchInsert };
