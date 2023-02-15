/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
    let maxIdx = 0;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] > nums[maxIdx]) {
            maxIdx = i;
        }
    }

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] * 2 > nums[maxIdx] && i !== maxIdx) {
            return -1;
        }
    }
    return maxIdx;
};

module.exports = { dominantIndex };
