/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        }
        let leftSize;
        if (nums[mid - 1] === nums[mid]) {
            leftSize = mid - 1;
        } else {
            leftSize = mid;
        }
        if (leftSize % 2 !== 0) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
};

module.exports = { singleNonDuplicate };
