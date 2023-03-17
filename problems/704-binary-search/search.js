/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        const midNum = nums[mid];
        if (target === midNum) {
            return mid;
        }
        if (target < midNum) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};

module.exports = { search };
