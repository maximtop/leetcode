/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    const findFirst = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                if (mid === left || nums[mid - 1] !== target) {
                    return mid;
                }
                right = mid - 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    };

    const findLast = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                if (mid === right || nums[mid + 1] !== target) {
                    return mid;
                }
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    };

    const first = findFirst(nums, target);
    if (first === -1) {
        return [-1, -1];
    }
    const last = findLast(nums, target);
    return [first, last];
};

module.exports = { searchRange };
