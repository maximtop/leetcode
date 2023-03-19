/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
    // 4, 5, 3
    let left = 0;
    let right = nums.length - 1;

    // in the not rotated, first would be min
    if (nums[left] < nums[right]) {
        return nums[left];
    }

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid] < nums[left]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return nums[left];
};

module.exports = { findMin };
