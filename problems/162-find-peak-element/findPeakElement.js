/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const pivot = left + Math.floor((right - left) / 2);
        if (nums[pivot] > nums[pivot + 1]) {
            right = pivot;
        } else {
            left = pivot + 1;
        }
    }

    return left;
};

module.exports = { findPeakElement };
