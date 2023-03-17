const rotateIndex = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] < nums[right]) {
        return 0; // not rotated;
    }
    while (left <= right) {
        const pivot = left + Math.floor((right - left) / 2);
        if (nums[pivot] > nums[pivot + 1]) {
            return pivot + 1;
        }
        if (nums[pivot] < nums[left]) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
    return 0;
};

const binSearch = (nums, target, left, right) => {
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    const rotateIdx = rotateIndex(nums);
    if (rotateIdx === 0) {
        // search in the non-rotated array
        return binSearch(nums, target, 0, nums.length - 1);
    }
    if (target >= nums[0]) {
        // search in the left part from rotate index
        return binSearch(nums, target, 0, rotateIdx - 1);
    }
    // search in the right part from rotate index
    return binSearch(nums, target, rotateIdx, nums.length - 1);
};

module.exports = { search, rotateIndex };
